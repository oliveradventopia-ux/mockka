// The manifest-driven content validator — one engine, per-exam data.
//
// Every check the CCAR-P tools/validate.mjs hardcoded is ported here as a
// data-driven invariant: format mix, item totals, themes, patterns, caps,
// option counts, option-reuse, spelling/emoji policy all come from the
// package's manifest/authoring config. The invariants themselves stay code.
//
// The checks that matter most are still the `rationale-anti-drift` +
// `rationale-letter-reference` pair: distractor rationales must hold exactly
// one entry per non-answer option, and no rationale text (correct or
// distractor values) may name an option letter. Enforced by validation on
// every gate run — a rationale that argues against its own answer key cannot
// pass the validator.
//
// New over CCAR-P: the provenance chain (question -> concept -> derivation
// doc -> registered source), the licensed-import allowlist, and the
// publication preflight. A harvested bank cannot pass validation.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import type {
  DistractorPatternRegistry,
  ExamPackage,
  Finding,
  FindingLevel,
  Question,
  ValidationResult,
} from '../types.ts';

/** Commercial-compatible licenses acceptable for licensed_import sources. */
export const LICENSE_ALLOWLIST = ['CC-BY-4.0', 'MIT', 'Apache-2.0', 'author-agreement'];

const FORMATS = ['single_choice', 'multiple_response', 'scenario_matching'] as const;
const SOURCE_TYPES = [
  'public_blueprint',
  'public_syllabus',
  'public_practice_set',
  'own_course_notes',
  'own_distillation',
  'licensed_import',
] as const;

interface Ctx {
  pkg: ExamPackage;
  /** Shared registry ids + this exam's pattern_extensions. */
  patternIds: Set<string>;
  report: (check: string, level: FindingLevel, message: string) => void;
}

interface Check {
  name: string;
  /** Layer gate — when it returns false the check is skipped entirely. */
  when?: (pkg: ExamPackage) => boolean;
  run: (ctx: Ctx) => void;
}

// ---------------------------------------------------------------- helpers

const answerKeys = (q: Question): string[] =>
  Array.isArray(q.answer) ? q.answer : typeof q.answer === 'string' ? [q.answer] : [];

const nonAnswerKeys = (q: Question): string[] =>
  q.type === 'scenario_matching'
    ? []
    : Object.keys(q.options ?? {}).filter((k) => !answerKeys(q).includes(k));

/** All candidate-facing text of an item (ported from validate.mjs keyword check). */
function itemText(q: Question): string {
  const parts: string[] = [q.question];
  if (q.type !== 'scenario_matching') {
    parts.push(...Object.values(q.options ?? {}));
    parts.push(q.rationale?.correct ?? '', ...Object.values(q.rationale?.distractors ?? {}));
  } else {
    parts.push(...(q.scenarios ?? []).map((s) => s.text));
    parts.push(...(q.matching_options ?? []));
    parts.push(q.rationale?.correct ?? '');
  }
  return parts.join(' ');
}

/** Style-checked text — same field set the original British/emoji check used. */
function styleText(q: Question): string {
  const parts: string[] = [q.question];
  if (q.type !== 'scenario_matching') {
    parts.push(...Object.values(q.options ?? {}));
    parts.push(q.rationale?.correct ?? '', ...Object.values(q.rationale?.distractors ?? {}));
  } else {
    parts.push(...(q.scenarios ?? []).map((s) => s.text));
    parts.push(q.rationale?.correct ?? '');
  }
  return parts.join(' ');
}

/** Number extraction for the number-drift check (ported verbatim). */
const nums = (s: string): string[] =>
  (s.match(/\b\d[\d,]*(?:\.\d+)?\s*(?:%|k\b|ms\b|s\b|seconds?\b|tokens?\b|pages?\b)?/gi) ?? [])
    .map((n) => n.replace(/[\s,]/g, '').toLowerCase())
    .filter((n) => !/^[1-9]$/.test(n));

/** 3-word shingles over words longer than 3 chars (ported verbatim). */
function shingles(s: string): Set<string> {
  const w = s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter((x) => x.length > 3);
  return new Set(
    w.map((_, i) => w.slice(i, i + 3).join(' ')).filter((x) => x.split(' ').length === 3),
  );
}

/** Catches "Correct: C.", "unlike B,", "Answer is C rather than", "option c," while leaving
 *  prose letters alone ("e.g.", "the answer is a narrower prompt", "gives the option a wider
 *  scope"). Case-insensitive keywords + word boundaries; a bare letter must be uppercase A–E
 *  followed by punctuation, a letter after "option" may be lowercase only with punctuation
 *  (the article-"a" trap), and the letter after "is" stays uppercase-only for the same reason.
 *  Trialled against the full ccar-p bank (correct + distractor rationales, 2026-08-16):
 *  zero false positives. */
const LETTER_REF =
  /(?:^|[^A-Za-z])[A-E][.),:]|\b[Oo]ption\s+(?:[A-E]\b|[a-e][.),:])|\b(?:[Aa]nswer|[Cc]orrect|[Cc]hoice)\s+is\s+[A-E]\b/;

const AMERICANISMS =
  /\b(analyze|organize|prioritize|optimize[sd]?|recognize|summarize|behavior|labeled|modeling|fulfill|catalog)\b/i;

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

/** UTF-8 read as Latin-1 leaves Â/â/Ã + a continuation byte; U+FFFD is the replacement char. */
const MOJIBAKE = /[ÂâÃ][-¿]|�/;

const domainIds = (pkg: ExamPackage) => new Set((pkg.manifest.domains ?? []).map((d) => d.id));
const rulesLayerOn = (pkg: ExamPackage) => pkg.manifest.layers?.syllabus_rules === true;

// ---------------------------------------------- structural answer-cue knobs
//
// BD-1/BD-2 ratchet (aif-c01 S5 round 1 — content/aif-c01/eval/judge-scores.json
// -> bank_defects): the numbers are manifest-data because the right value is
// exam-shape judgment; the DEFAULTS and BOUNDS are code because an unbounded
// knob is an author-operated off-switch (the L-0002 / near_duplicate_jaccard
// lesson). `manifest-shape` errors on an out-of-range knob, and `knobOr`
// additionally falls back to the default so an out-of-range value can never
// loosen a check even within the failing run.

interface Knob {
  default: number;
  min: number;
  max: number;
}
const KEY_LETTER_MAX_SHARE: Knob = { default: 0.4, min: 0.25, max: 0.6 };
const MR_KEY_SET_MAX_SHARE: Knob = { default: 0.5, min: 0.25, max: 0.75 };
const ANSWER_LENGTH_RATIO_WARN: Knob = { default: 1.25, min: 1.05, max: 1.5 };
const ANSWER_LENGTH_RATIO_ERROR: Knob = { default: 1.5, min: 1.2, max: 2 };

// E1/E2/E3/E6 knobs (adversarial cue sweep 2026-08-19, ADR-0006 follow-up):
// calibrated against all eight live banks by tools/exploit-scan.mjs — the
// committed instrument that both measured these defaults and gates CI (it
// exits 1 when any exam is blind-passable). Same bounds discipline as above:
// defaults + ranges are code so no knob can neuter its check (L-0002).
//
// key-length-rank tiers: warn 0.35 / error 0.45. L-0021 proposed 0.40 — that
// number was WRONG: the sweep measured aif-c01's strict-shortest key share at
// 38.6%, which a 0.40 bound misses; 0.35 catches 7/8 live banks (clf-c02 is
// the only clean one) against a 25% chance rate.
const KEY_LENGTH_RANK_WARN_SHARE: Knob = { default: 0.35, min: 0.25, max: 0.45 };
const KEY_LENGTH_RANK_ERROR_SHARE: Knob = { default: 0.45, min: 0.35, max: 0.55 };
// rider-balance band around chance (0.25). The knob bounds guarantee
// min (<= 0.2) < max (>= 0.3), so no cross-pair ordering assertion is needed.
const RIDER_BALANCE_MIN_SHARE: Knob = { default: 0.1, min: 0.02, max: 0.2 };
const RIDER_BALANCE_MAX_SHARE: Knob = { default: 0.45, min: 0.3, max: 0.6 };
const NAMED_ENTITY_PARITY_WARN_SHARE: Knob = { default: 0.4, min: 0.3, max: 0.55 };
const NAMED_ENTITY_PARITY_ERROR_SHARE: Knob = { default: 0.55, min: 0.4, max: 0.7 };
const OPTION_PAIR_JACCARD_WARN: Knob = { default: 0.6, min: 0.4, max: 0.75 };
const OPTION_PAIR_JACCARD_ERROR: Knob = { default: 0.75, min: 0.6, max: 0.9 };

/** Below these counts a share bound is sampling noise, not a signal. */
const MIN_SC_ITEMS_FOR_SHARE = 8;
const MIN_MR_ITEMS_FOR_SHARE = 4;
/** A listed-order prefix shorter than this is a coin flip, not a pattern. */
const MIN_SM_LISTED_ORDER_PREFIX = 3;
/** Keyed options shorter than this skip the length-ratio test — at phrase
 *  length the ratio is noise (ccar-p calibration 2026-08-16: zero items with
 *  ratio > 1.5 and a keyed option under 50 chars). */
const MIN_KEY_LENGTH_FOR_RATIO = 40;
/** Justification riders that stylistically mark a keyed option (BD-2).
 *  Deliberately NARROW — this list feeds the per-item rule in
 *  `answer-length-cue` only, and L-0018 blesses "instead of" as key-safe
 *  contrast phrasing per item. The bank-level balance check below uses the
 *  widened list. */
const RIDER = /\b(?:since|because|rather than)\b/i;
/** The widened marker list for the bank-level `rider-balance` check (E2).
 *  Aggregate balance is a different question from per-item marking: ANY
 *  marker phrase concentrated on one side of the key/distractor split is a
 *  cue, including the per-item-safe contrast forms. */
const RIDER_BALANCE =
  /\b(?:since|because|rather than|instead of|so that|to ensure|in order to|whereas)\b/i;
/** Proper-noun/product tokens (E3): a capitalised token of >= 3 chars.
 *  Options start with a capital, so first words match too — the statistic
 *  uses the DIFFERENTIAL (exactly one option holding the max count), which
 *  the sentence-initial noise cancels out of. Same regex as
 *  tools/exploit-scan.mjs (the calibration instrument) — keep in lock-step. */
const NAMED_ENTITY = /\b[A-Z][A-Za-z0-9]{2,}/g;
/** Below this many rider-carrying options a balance share is sampling noise. */
const MIN_RIDER_OPTIONS_FOR_BALANCE = 8;
/** Below this many qualifying items a named-entity share is sampling noise
 *  (the sweep's calibration floor). */
const MIN_NE_ITEMS_FOR_PARITY = 6;

const knobOr = (val: number | undefined, k: Knob): number =>
  typeof val === 'number' && val >= k.min && val <= k.max ? val : k.default;

/** E7 scope plumbing: aggregate cue statistics run over the bank AND each
 *  selection form, and every finding names its scope — candidates sit a
 *  form, and a balanced bank can still serve a skewed paper. Per-item cue
 *  findings stay bank-scoped (every form item is a bank item, so the bank
 *  pass subsumes the forms). */
interface CueScope {
  label: string;
  questions: Question[];
}
function cueScopes(pkg: ExamPackage): CueScope[] {
  const bank = pkg.bank.questions ?? [];
  const byId = new Map(bank.map((q) => [q.id, q]));
  const scopes: CueScope[] = [{ label: 'bank', questions: bank }];
  for (const form of pkg.selection.forms ?? []) {
    const items = form.items
      .map((id) => byId.get(id))
      .filter((q): q is Question => q !== undefined);
    if (items.length > 0) scopes.push({ label: `form ${form.id}`, questions: items });
  }
  return scopes;
}

// ---------------------------------------------------------------- checks

const CHECKS: Check[] = [
  {
    name: 'manifest-shape',
    run({ pkg, report }) {
      const m = pkg.manifest;
      const err = (msg: string) => report('manifest-shape', 'error', msg);
      for (const key of ['slug', 'title', 'vendor', 'version'] as const) {
        if (typeof m[key] !== 'string' || m[key].length === 0) err(`manifest.${key} is missing or empty`);
      }
      if (!['draft', 'in_review', 'published'].includes(m.status)) {
        err(`manifest.status "${m.status}" is not draft|in_review|published`);
      }
      if (!m.exam || typeof m.exam.item_count !== 'number') err('manifest.exam.item_count missing');
      if (!m.exam || typeof m.exam.time_limit_minutes !== 'number') err('manifest.exam.time_limit_minutes missing');
      if (!m.exam || typeof m.exam.pass_threshold_pct !== 'number') err('manifest.exam.pass_threshold_pct missing');
      if (!m.bank || typeof m.bank.item_count !== 'number') err('manifest.bank.item_count missing');
      if (!Array.isArray(m.domains) || m.domains.length === 0) err('manifest.domains is missing or empty');
      for (const f of FORMATS) {
        if (!m.formats?.[f]) err(`manifest.formats.${f} missing`);
      }
      if (!m.style || typeof m.style.locale !== 'string' || typeof m.style.emoji !== 'boolean') {
        err('manifest.style must declare locale and emoji policy');
      }
      if (!m.validation || typeof m.validation.near_duplicate_jaccard !== 'number') {
        err('manifest.validation.near_duplicate_jaccard missing');
      } else if (!(m.validation.near_duplicate_jaccard > 0 && m.validation.near_duplicate_jaccard <= 1)) {
        err(
          `manifest.validation.near_duplicate_jaccard ${m.validation.near_duplicate_jaccard} is outside (0,1] — ` +
            'an out-of-range threshold silently disables the near-duplicate check',
        );
      }
      if (!m.validation || typeof m.validation.pattern_caps !== 'object' || m.validation.pattern_caps === null) {
        err('manifest.validation.pattern_caps missing');
      } else if (
        Object.keys(m.validation.pattern_caps).length === 0 &&
        (pkg.bank.questions ?? []).some(
          (q) => q.type !== 'scenario_matching' && Object.keys(q.distractor_patterns ?? {}).length > 0,
        )
      ) {
        err(
          'manifest.validation.pattern_caps is empty while the bank declares distractor_patterns — ' +
            'empty caps are an author-operated off-switch; declare the caps this exam enforces',
        );
      }
      const cueKnobs: [string, number | undefined, Knob][] = [
        ['key_letter_max_share', m.validation?.key_letter_max_share, KEY_LETTER_MAX_SHARE],
        ['mr_key_set_max_share', m.validation?.mr_key_set_max_share, MR_KEY_SET_MAX_SHARE],
        ['answer_length_ratio_warn', m.validation?.answer_length_ratio_warn, ANSWER_LENGTH_RATIO_WARN],
        ['answer_length_ratio_error', m.validation?.answer_length_ratio_error, ANSWER_LENGTH_RATIO_ERROR],
        ['key_length_rank_warn_share', m.validation?.key_length_rank_warn_share, KEY_LENGTH_RANK_WARN_SHARE],
        ['key_length_rank_error_share', m.validation?.key_length_rank_error_share, KEY_LENGTH_RANK_ERROR_SHARE],
        ['rider_balance_min_share', m.validation?.rider_balance_min_share, RIDER_BALANCE_MIN_SHARE],
        ['rider_balance_max_share', m.validation?.rider_balance_max_share, RIDER_BALANCE_MAX_SHARE],
        ['named_entity_parity_warn_share', m.validation?.named_entity_parity_warn_share, NAMED_ENTITY_PARITY_WARN_SHARE],
        ['named_entity_parity_error_share', m.validation?.named_entity_parity_error_share, NAMED_ENTITY_PARITY_ERROR_SHARE],
        ['option_pair_jaccard_warn', m.validation?.option_pair_jaccard_warn, OPTION_PAIR_JACCARD_WARN],
        ['option_pair_jaccard_error', m.validation?.option_pair_jaccard_error, OPTION_PAIR_JACCARD_ERROR],
      ];
      for (const [key, val, k] of cueKnobs) {
        if (val === undefined) continue; // optional — the coded default applies
        if (typeof val !== 'number' || val < k.min || val > k.max) {
          err(
            `manifest.validation.${key} ${val} is outside [${k.min}, ${k.max}] — ` +
              'an out-of-range structural-cue knob neuters its check (the default applies instead)',
          );
        }
      }
      const tierPairs: [string, number | undefined, string, number | undefined][] = [
        ['answer_length_ratio_warn', m.validation?.answer_length_ratio_warn,
          'answer_length_ratio_error', m.validation?.answer_length_ratio_error],
        ['key_length_rank_warn_share', m.validation?.key_length_rank_warn_share,
          'key_length_rank_error_share', m.validation?.key_length_rank_error_share],
        ['named_entity_parity_warn_share', m.validation?.named_entity_parity_warn_share,
          'named_entity_parity_error_share', m.validation?.named_entity_parity_error_share],
        ['option_pair_jaccard_warn', m.validation?.option_pair_jaccard_warn,
          'option_pair_jaccard_error', m.validation?.option_pair_jaccard_error],
      ];
      for (const [wk, wv, ek, ev] of tierPairs) {
        if (typeof wv === 'number' && typeof ev === 'number' && wv > ev) {
          err(
            `manifest.validation.${wk} ${wv} exceeds ${ek} ${ev} — ` +
              'the warn tier must sit at or below the error tier',
          );
        }
      }
      if (typeof m.layers?.syllabus_rules !== 'boolean') err('manifest.layers.syllabus_rules missing');
      if (!m.provenance) err('manifest.provenance missing');
      const ids = (m.domains ?? []).map((d) => d.id);
      if (new Set(ids).size !== ids.length) err('duplicate domain ids in manifest');
    },
  },

  {
    name: 'intro-presence',
    run({ pkg, report }) {
      // The per-exam introduction page block (methodology/06-provenance-
      // publishing.md#intro). Presence ratchet: optional at draft, WARN when
      // missing at in_review, ERROR at the publication preflight (owned by
      // `publication-preflight` so the published-state rules stay in one
      // check). A present-but-malformed intro is an error at any status — a
      // half-filled intro page must never look like a finished one.
      const intro = pkg.manifest.intro;
      if (intro === undefined) {
        if (pkg.manifest.status === 'in_review') {
          report(
            'intro-presence',
            'warn',
            'manifest.intro is missing — the exam intro page has no content; ' +
              'required before publication (methodology/06-provenance-publishing.md#intro)',
          );
        }
        return;
      }
      const err = (msg: string) => report('intro-presence', 'error', msg);
      for (const key of ['about', 'audience', 'disclaimer'] as const) {
        if (typeof intro[key] !== 'string' || intro[key].trim().length === 0) {
          err(`manifest.intro.${key} is missing or empty`);
        }
      }
      if (!Array.isArray(intro.materials) || intro.materials.length === 0) {
        err('manifest.intro.materials must list at least one entry — what does this mock provide?');
      } else {
        intro.materials.forEach((m, i) => {
          if (!m?.title?.trim()) err(`manifest.intro.materials[${i}].title is missing or empty`);
          if (!m?.description?.trim()) err(`manifest.intro.materials[${i}].description is missing or empty`);
        });
      }
      if (!Array.isArray(intro.official_resources) || intro.official_resources.length === 0) {
        err('manifest.intro.official_resources must link at least one official vendor resource');
      } else {
        intro.official_resources.forEach((r, i) => {
          if (!r?.label?.trim()) err(`manifest.intro.official_resources[${i}].label is missing or empty`);
          if (typeof r?.url !== 'string' || !r.url.startsWith('https://')) {
            err(
              `manifest.intro.official_resources[${i}].url "${r?.url ?? '(none)'}" must be an https:// URL — ` +
                'these render as external links on the intro page',
            );
          }
        });
      }
    },
  },

  {
    name: 'concept-inventory',
    run({ pkg, report }) {
      const err = (msg: string) => report('concept-inventory', 'error', msg);
      const concepts = pkg.concepts.concepts ?? [];
      const ids = concepts.map((c) => c.id);
      if (new Set(ids).size !== ids.length) err('duplicate concept ids');

      const domains = domainIds(pkg);
      for (const c of concepts) {
        if (!domains.has(c.domain)) err(`${c.id}: unknown domain "${c.domain}"`);
        if (!c.statement || c.statement.length <= 20) err(`${c.id}: statement too short to be meaningful`);
        if (!Array.isArray(c.vocabulary) || c.vocabulary.length === 0) err(`${c.id}: no vocabulary`);
      }
      for (const d of pkg.manifest.domains ?? []) {
        const n = concepts.filter((c) => c.domain === d.id).length;
        if (n !== d.bank_items) {
          err(`${d.id}: ${n} concepts but bank allows ${d.bank_items}`);
        }
      }
    },
  },

  {
    name: 'concept-convergence',
    run({ pkg, report }) {
      // Convergence is computed (sources.length >= 2), never asserted. Authored
      // priority may diverge from the computed signal (e.g. hand-tuned exam
      // seating), but divergence is surfaced as a warning — always visible,
      // never gate-failing.
      for (const c of pkg.concepts.concepts ?? []) {
        const sourceCount = (c.sources ?? []).length;
        if (c.priority === 'high' && sourceCount < 2) {
          report(
            'concept-convergence',
            'warn',
            `${c.id}: priority high with a single source — convergence not attested; ` +
              'stands only as documented authoring judgment',
          );
        } else if (c.priority === 'normal' && sourceCount >= 2) {
          report(
            'concept-convergence',
            'warn',
            `${c.id}: priority normal despite ${sourceCount} independent sources — ` +
              'computed convergence suggests high',
          );
        }
      }
    },
  },

  {
    name: 'concept-syllabus-rules',
    when: rulesLayerOn,
    run({ pkg, report }) {
      const err = (msg: string) => report('concept-syllabus-rules', 'error', msg);
      if (!pkg.syllabusRules) {
        err('layers.syllabus_rules is on but syllabus-rules.json is missing');
        return;
      }
      const ruleIds = new Set(pkg.syllabusRules.rules.map((r) => r.id));
      for (const c of pkg.concepts.concepts ?? []) {
        if (c.syllabus_rule && !ruleIds.has(c.syllabus_rule)) {
          err(`${c.id}: unknown syllabus rule "${c.syllabus_rule}"`);
        }
      }
    },
  },

  {
    name: 'blueprint-arithmetic',
    run({ pkg, report }) {
      const err = (msg: string) => report('blueprint-arithmetic', 'error', msg);
      const m = pkg.manifest;
      const examTotal = (m.domains ?? []).reduce((a, d) => a + d.exam_items, 0);
      const bankTotal = (m.domains ?? []).reduce((a, d) => a + d.bank_items, 0);
      if (examTotal !== m.exam.item_count) {
        err(`domain exam_items total ${examTotal}, manifest says ${m.exam.item_count}`);
      }
      if (bankTotal !== m.bank.item_count) {
        err(`domain bank_items total ${bankTotal}, manifest says ${m.bank.item_count}`);
      }
      for (const d of m.domains ?? []) {
        const mixTotal = FORMATS.reduce((a, f) => a + (d.format_mix?.[f] ?? 0), 0);
        if (mixTotal !== d.exam_items) {
          err(`${d.id}: format mix totals ${mixTotal}, expected ${d.exam_items}`);
        }
      }
    },
  },

  {
    name: 'bank-shape',
    run({ pkg, report }) {
      const err = (msg: string) => report('bank-shape', 'error', msg);
      const items = pkg.bank.questions ?? [];
      if (items.length !== pkg.manifest.bank.item_count) {
        err(`bank has ${items.length} items, expected ${pkg.manifest.bank.item_count}`);
      }
      const ids = items.map((q) => q.id);
      if (new Set(ids).size !== ids.length) err('duplicate question ids');
      for (const d of pkg.manifest.domains ?? []) {
        const n = items.filter((q) => q.domain === d.id).length;
        if (n !== d.bank_items) err(`${d.id}: ${n} bank items, expected ${d.bank_items}`);
      }
    },
  },

  {
    name: 'item-metadata',
    run({ pkg, report }) {
      const err = (msg: string) => report('item-metadata', 'error', msg);
      const domains = domainIds(pkg);
      const conceptById = new Map((pkg.concepts.concepts ?? []).map((c) => [c.id, c]));
      const themes = pkg.authoring ? new Set(pkg.authoring.themes) : null;
      const verticalsDeclared = (pkg.authoring?.verticals?.length ?? 0) > 0;
      const ruleIds = pkg.syllabusRules ? new Set(pkg.syllabusRules.rules.map((r) => r.id)) : null;
      const layerOn = rulesLayerOn(pkg);

      for (const q of pkg.bank.questions ?? []) {
        if (!domains.has(q.domain)) err(`${q.id}: unknown domain "${q.domain}"`);
        if (!(FORMATS as readonly string[]).includes(q.type)) err(`${q.id}: unknown type "${q.type}"`);
        if (q.theme !== undefined) {
          if (!themes) err(`${q.id}: theme "${q.theme}" declared but authoring.json defines no themes`);
          else if (!themes.has(q.theme)) err(`${q.id}: unknown theme "${q.theme}"`);
        } else if (themes && themes.size > 0) {
          // Parity with verticals: a declared theme set makes the tag required.
          err(`${q.id}: missing theme — authoring.json declares a theme set`);
        }
        if (verticalsDeclared && !q.vertical?.length) err(`${q.id}: missing vertical`);
        if (layerOn) {
          if (!q.syllabus_rule) err(`${q.id}: missing syllabus_rule (layers.syllabus_rules is on)`);
          else if (ruleIds && !ruleIds.has(q.syllabus_rule)) {
            err(`${q.id}: unknown syllabus_rule "${q.syllabus_rule}"`);
          }
        }
        const concept = conceptById.get(q.primary_concept);
        if (!concept) {
          err(`${q.id}: unknown primary_concept "${q.primary_concept}"`);
        } else if (q.domain !== concept.domain) {
          err(`${q.id}: domain does not match concept ${concept.id}`);
        }
        for (const c of q.secondary_concepts ?? []) {
          if (!conceptById.has(c)) err(`${q.id}: unknown secondary concept "${c}"`);
        }
      }
    },
  },

  {
    name: 'keyword-presence',
    run({ pkg, report }) {
      const err = (msg: string) => report('keyword-presence', 'error', msg);
      for (const q of pkg.bank.questions ?? []) {
        if (!Array.isArray(q.keywords) || q.keywords.length === 0) {
          err(`${q.id}: no keywords`);
          continue;
        }
        const haystack = itemText(q).toLowerCase();
        for (const kw of q.keywords) {
          if (!haystack.includes(kw.toLowerCase())) {
            err(`${q.id}: keyword "${kw}" appears nowhere in the item`);
          }
        }
      }
    },
  },

  {
    name: 'single-choice-shape',
    run({ pkg, report }) {
      const err = (msg: string) => report('single-choice-shape', 'error', msg);
      const want = pkg.manifest.formats.single_choice.options;
      for (const q of pkg.bank.questions ?? []) {
        if (q.type !== 'single_choice') continue;
        const keys = Object.keys(q.options ?? {});
        if (keys.length !== want) err(`${q.id}: ${keys.length} options, expected ${want}`);
        if (typeof q.answer !== 'string') err(`${q.id}: answer must be a string`);
        else if (!keys.includes(q.answer)) err(`${q.id}: answer "${q.answer}" is not an option`);
        for (const [k, v] of Object.entries(q.options ?? {})) {
          if (!v || v.trim().length <= 5) err(`${q.id}: option ${k} is empty or trivial`);
        }
      }
    },
  },

  {
    name: 'multiple-response-shape',
    run({ pkg, report }) {
      const err = (msg: string) => report('multiple-response-shape', 'error', msg);
      const spec = pkg.manifest.formats.multiple_response;
      for (const q of pkg.bank.questions ?? []) {
        if (q.type !== 'multiple_response') continue;
        const keys = Object.keys(q.options ?? {});
        if (keys.length !== spec.options) err(`${q.id}: ${keys.length} options, expected ${spec.options}`);
        if (!spec.select_count.includes(q.select_count)) {
          err(`${q.id}: select_count ${q.select_count} not in manifest [${spec.select_count.join(', ')}]`);
        }
        if (!Array.isArray(q.answer)) {
          err(`${q.id}: answer must be an array`);
          continue;
        }
        if (q.answer.length !== q.select_count) {
          err(`${q.id}: ${q.answer.length} answers but select_count is ${q.select_count}`);
        }
        if (new Set(q.answer).size !== q.answer.length) err(`${q.id}: duplicate answer keys`);
        for (const a of q.answer) {
          if (!keys.includes(a)) err(`${q.id}: answer "${a}" is not an option`);
        }
      }
    },
  },

  {
    name: 'scenario-matching-shape',
    run({ pkg, report }) {
      const err = (msg: string) => report('scenario-matching-shape', 'error', msg);
      const spec = pkg.manifest.formats.scenario_matching;
      for (const q of pkg.bank.questions ?? []) {
        if (q.type !== 'scenario_matching') continue;
        if ((q.matching_options?.length ?? 0) < spec.min_options) {
          err(`${q.id}: needs at least ${spec.min_options} matching options`);
        }
        if ((q.scenarios?.length ?? 0) < spec.min_scenarios) {
          err(`${q.id}: needs at least ${spec.min_scenarios} scenarios`);
        }
        const scenarioIds = (q.scenarios ?? []).map((s) => s.id);
        if (new Set(scenarioIds).size !== scenarioIds.length) err(`${q.id}: duplicate scenario ids`);
        for (const s of q.scenarios ?? []) {
          const a = q.answer?.[s.id];
          if (!a) err(`${q.id}: scenario ${s.id} has no answer`);
          else if (!q.matching_options.includes(a)) {
            err(`${q.id}: scenario ${s.id} answer "${a}" is not a matching option`);
          }
        }
        if (spec.require_option_reuse) {
          const used = Object.values(q.answer ?? {});
          if (new Set(used).size >= used.length) {
            err(`${q.id}: no option is reused — a 1:1 mapping teaches the wrong heuristic`);
          }
        }
      }
    },
  },

  {
    name: 'rationale-anti-drift',
    run({ pkg, report }) {
      const err = (msg: string) => report('rationale-anti-drift', 'error', msg);
      for (const q of pkg.bank.questions ?? []) {
        if (!q.rationale?.correct || q.rationale.correct.length <= 40) {
          err(`${q.id}: correct rationale missing or too short`);
        }
        if (q.type === 'scenario_matching') {
          if ((q.rationale as { distractors?: unknown })?.distractors) {
            err(`${q.id}: scenario-matching items take no distractor rationales`);
          }
          continue;
        }
        const expected = nonAnswerKeys(q).sort();
        const actual = Object.keys(q.rationale?.distractors ?? {}).sort();
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          err(
            `${q.id}: rationale explains [${actual.join(',')}] but the non-answer options are ` +
              `[${expected.join(',')}] — this is the drift that makes a rationale argue against its own answer key`,
          );
        }
        for (const [k, text] of Object.entries(q.rationale?.distractors ?? {})) {
          if (!text || text.length <= 25) {
            err(`${q.id}: distractor rationale ${k} is too short to explain anything`);
          }
        }
      }
    },
  },

  {
    name: 'rationale-letter-reference',
    run({ pkg, report }) {
      const err = (id: string, where: string) =>
        report(
          'rationale-letter-reference',
          'error',
          `${id}: ${where} rationale references an option letter — it must describe the reasoning, not the position`,
        );
      for (const q of pkg.bank.questions ?? []) {
        if (LETTER_REF.test(q.rationale?.correct ?? '')) err(q.id, 'correct');
        if (q.type === 'scenario_matching') continue;
        // Distractor values are scanned too: trialled against ccar-p
        // (85 items, 2026-08-16) with zero false positives, so the scan is
        // scoped in. If a future exam's legitimate prose trips it, tighten
        // the regex — never scope the scan back out silently.
        for (const [k, text] of Object.entries(q.rationale?.distractors ?? {})) {
          if (LETTER_REF.test(text)) err(q.id, `distractor ${k}`);
        }
      }
    },
  },

  {
    name: 'distractor-patterns',
    run({ pkg, patternIds, report }) {
      const err = (msg: string) => report('distractor-patterns', 'error', msg);
      for (const q of pkg.bank.questions ?? []) {
        if (q.type === 'scenario_matching') continue;
        const expected = nonAnswerKeys(q).sort();
        const declared = q.distractor_patterns ?? {};
        const actual = Object.keys(declared).sort();
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          err(`${q.id}: distractor_patterns keys must match the non-answer options`);
        }
        const used = Object.values(declared);
        for (const p of used) {
          if (!patternIds.has(p)) err(`${q.id}: unknown distractor pattern "${p}"`);
        }
        if (new Set(used).size !== used.length) {
          err(`${q.id}: repeats a distractor pattern — each wrong option should fail differently`);
        }
      }
    },
  },

  {
    name: 'pattern-frequency-caps',
    run({ pkg, report }) {
      const hist = new Map<string, number>();
      for (const q of pkg.bank.questions ?? []) {
        if (q.type === 'scenario_matching') continue;
        for (const p of Object.values(q.distractor_patterns ?? {})) {
          hist.set(p, (hist.get(p) ?? 0) + 1);
        }
      }
      const total = [...hist.values()].reduce((a, b) => a + b, 0);
      if (total === 0) return;
      for (const [p, cap] of Object.entries(pkg.manifest.validation.pattern_caps ?? {})) {
        const share = (hist.get(p) ?? 0) / total;
        if (share >= cap) {
          report(
            'pattern-frequency-caps',
            'error',
            `pattern ${p} is ${Math.round(share * 100)}% of distractors — cap is ${Math.round(cap * 100)}%, it is too easy to eliminate`,
          );
        }
      }
    },
  },

  {
    name: 'key-position-distribution',
    run({ pkg, report }) {
      // BD-1 key-position-constant (aif-c01 S5 round 1): a constant key
      // position/letter lets test-wiseness beat the bank — aif-c01 shipped
      // 67/67 items keyed first; ccar-p shipped SC key B = 53/59 with 5/5 SM
      // items in listed order. ERROR level since 2026-08-19: ccar-p — the only
      // violator — was rebalanced upstream (seeded permutation) and re-imported,
      // so the share bounds and the k=0 listed-order rule hold on every live
      // bank; the ratchet turned per 04-validation.md#adding-a-check step 4 and
      // never turns back.
      //
      // Two E-class extensions from the 2026-08-19 adversarial cue sweep:
      // - E7 scope: the share bounds run per scope (bank + every selection
      //   form) and each finding names its scope — candidates sit a form, and
      //   a balanced bank can still serve a skewed paper. Same ERROR level:
      //   no live bank trips at either scope today.
      // - E4 rotation: the SM listed-order rule generalises to rotations —
      //   scenario i mapping to matching_options[(i + k) % L] is the same
      //   walk-the-list exploit with an offset. k=0 keeps the ERROR level
      //   (the original rule); k>0 is NEW detection this wave and reports at
      //   WARN — 4 live items (aif-c01 2.04/3.09, az-900 1.18/3.11) map at
      //   k=2, and an error tier today would redline banks whose rework is
      //   next wave's scope. Promote with that wave; never weaken.
      const err = (msg: string) => report('key-position-distribution', 'error', msg);
      const warn = (msg: string) => report('key-position-distribution', 'warn', msg);
      const v = pkg.manifest.validation;

      for (const scope of cueScopes(pkg)) {
        // Single choice: no letter may carry an outsized share of the keys.
        const sc = scope.questions.filter(
          (q) => q.type === 'single_choice' && typeof q.answer === 'string',
        );
        if (sc.length >= MIN_SC_ITEMS_FOR_SHARE) {
          const bound = knobOr(v?.key_letter_max_share, KEY_LETTER_MAX_SHARE);
          const hist = new Map<string, number>();
          for (const q of sc) hist.set(q.answer as string, (hist.get(q.answer as string) ?? 0) + 1);
          for (const [letter, n] of [...hist.entries()].sort()) {
            const share = n / sc.length;
            if (share > bound) {
              err(
                `[${scope.label}] key letter ${letter} carries ${n}/${sc.length} single-choice items ` +
                  `(${Math.round(share * 100)}%, bound ${Math.round(bound * 100)}%) — a candidate who ` +
                  'spots the favourite letter scores without knowledge; permute option letters ' +
                  '(answer, distractor_patterns and rationale.distractors keys move together)',
              );
            }
          }
        }

        // Multiple response: the exact key set must vary across items.
        const mr = scope.questions.filter(
          (q) => q.type === 'multiple_response' && Array.isArray(q.answer),
        );
        if (mr.length >= MIN_MR_ITEMS_FOR_SHARE) {
          const bound = knobOr(v?.mr_key_set_max_share, MR_KEY_SET_MAX_SHARE);
          const hist = new Map<string, number>();
          for (const q of mr) {
            const set = [...(q.answer as string[])].sort().join('+');
            hist.set(set, (hist.get(set) ?? 0) + 1);
          }
          for (const [set, n] of [...hist.entries()].sort()) {
            const share = n / mr.length;
            if (share > bound) {
              err(
                `[${scope.label}] multiple-response key set {${set}} carries ${n}/${mr.length} items ` +
                  `(${Math.round(share * 100)}%, bound ${Math.round(bound * 100)}%) — vary which ` +
                  'letters key multiple-response items',
              );
            }
          }
        }
      }

      // Scenario matching (per item, bank-scoped): detect the rotated
      // listed-order mapping — scenario i answering matching_options[(i+k) % L].
      for (const q of pkg.bank.questions ?? []) {
        if (q.type !== 'scenario_matching') continue;
        const opts = q.matching_options ?? [];
        const scen = q.scenarios ?? [];
        const n = Math.min(scen.length, opts.length);
        if (n < MIN_SM_LISTED_ORDER_PREFIX) continue;
        for (let k = 0; k < opts.length; k++) {
          const rotated = scen
            .slice(0, n)
            .every((s, i) => (q.answer ?? {})[s.id] === opts[(i + k) % opts.length]);
          if (!rotated) continue;
          if (k === 0) {
            err(
              `${q.id}: the first ${n} scenarios map to matching options in listed order — ` +
                'permute the matching_options list or the scenario order',
            );
          } else {
            warn(
              `${q.id}: the first ${n} scenarios map to matching options in listed order rotated by ${k} — ` +
                'a rotation is the same walk-the-list exploit with an offset; re-map to an acyclic assignment',
            );
          }
          break; // one offset per item is the finding
        }
      }
    },
  },

  {
    name: 'answer-length-cue',
    run({ pkg, report }) {
      // BD-2 answer-surface-cue (aif-c01 S5 round 1): "pick the longest, most
      // hedged option" solved 51/57 SC items with zero domain knowledge. Both
      // tiers still report WARN, deliberately — and the promotion is PINNED to
      // the ccar-p trim lane (fix/ccar-p-answer-cues): the key permutation
      // fixed position, but the served form still keyed the longest option in
      // 41/44 SC items at the 2026-08-19 sweep; the trim wave is landing in
      // per-domain batches (d1–d3 committed, d4–d7 in flight). Promote BOTH
      // tiers to warn/error the moment that lane completes and `pnpm validate`
      // shows zero findings of this class — never weaken the thresholds to
      // fit content. (`key-position-distribution` promoted alone, 2026-08-19,
      // because its violator was already fixed.)
      //
      // KNOWN LIMITS, owned by the sweep's companion checks: the ratio is a
      // MAGNITUDE bound and blind to rank (`key-length-rank-share` owns the
      // argmax/argmin statistic — E1/L-0030), and the per-item rider rule
      // below is ONE-SIDED and manufactured a distractor-side rider cue
      // (`rider-balance` owns the two-sided aggregate — E2/L-0031).
      const v = pkg.manifest.validation;
      const warnR = knobOr(v?.answer_length_ratio_warn, ANSWER_LENGTH_RATIO_WARN);
      const errR = Math.max(knobOr(v?.answer_length_ratio_error, ANSWER_LENGTH_RATIO_ERROR), warnR);

      for (const q of pkg.bank.questions ?? []) {
        if (q.type !== 'single_choice' || typeof q.answer !== 'string') continue;
        const key = q.options?.[q.answer];
        if (!key) continue; // single-choice-shape owns the unresolvable answer
        const keyLen = key.trim().length;
        const maxD = Math.max(
          0,
          ...nonAnswerKeys(q).map((k) => (q.options?.[k] ?? '').trim().length),
        );

        if (maxD > 0 && keyLen >= MIN_KEY_LENGTH_FOR_RATIO) {
          const ratio = keyLen / maxD;
          const pct = Math.round(ratio * 100);
          if (ratio > errR) {
            // Promoted warn -> error 2026-08-19: ccar-p was the last violator and
            // its trim wave landed, so every bank clears this bound. The rank
            // statistic (key-length-rank-share) stays warn until the seven-bank
            // rework wave; see ADR-0006.
            report(
              'answer-length-cue',
              'error',
              `${q.id}: keyed option is ${pct}% the length of the longest distractor ` +
                `(error-tier bound ${Math.round(errR * 100)}%) — trim the key's justification ` +
                'riders into rationale.correct, or argue the distractors up to parity',
            );
          } else if (ratio > warnR) {
            report(
              'answer-length-cue',
              'warn',
              `${q.id}: keyed option is ${pct}% the length of the longest distractor ` +
                `(warn-tier bound ${Math.round(warnR * 100)}%) — keep option shapes parallel within the item`,
            );
          }
        }

        if (RIDER.test(key) && !nonAnswerKeys(q).some((k) => RIDER.test(q.options?.[k] ?? ''))) {
          report(
            'answer-length-cue',
            'warn',
            `${q.id}: only the keyed option carries a justification rider (since/because/rather than) — ` +
              'a reliable key marker; the argument belongs in rationale.correct',
          );
        }
      }
    },
  },

  {
    name: 'key-length-rank-share',
    run({ pkg, report }) {
      // E1 (adversarial cue sweep 2026-08-19): length RANK, not magnitude.
      // The six post-aif-c01 banks hold median key/longest-distractor ratios
      // of 0.97–1.01 — perfect answer-length-cue compliance — while the key
      // is the strict LONGEST option in 35–52% of items (chance 25%, p<0.05
      // in five of six). The magnitude ratio cannot see this; the rank share
      // can. Two-sided: a strict-SHORTEST key is the same exploit inverted
      // (the L-0021 overshoot — aif-c01 landed at 38.6% shortest after its
      // trim wave). NO length floor on purpose: rank is magnitude-free, and
      // answer-length-cue's 40-char ratio floor exempted 26% of sy0-701's
      // items from any length check at all.
      // WARN level this wave (Oliver's scope call: ccar-p rework now, the
      // other seven exams next wave — an error tier today would block them);
      // promote per 04-validation.md#adding-a-check step 4, never weaken.
      const v = pkg.manifest.validation;
      const warnB = knobOr(v?.key_length_rank_warn_share, KEY_LENGTH_RANK_WARN_SHARE);
      const errB = Math.max(knobOr(v?.key_length_rank_error_share, KEY_LENGTH_RANK_ERROR_SHARE), warnB);

      // Every rank, not just the extremes. Bounding argmax/argmin alone taught
      // the 2026-08-19 rework wave to park keys at SECOND-longest: az-900 came
      // out at 52% on rank 2 while both extremes read clean, and "take the
      // second-longest" then scored 46% blind — worse than the 42% the wave was
      // fixing (L-0038). A rank cue is a rank cue wherever it sits.
      const RANK_LABELS = ['longest', '2nd longest', '3rd longest', '4th longest', '5th longest'];
      for (const scope of cueScopes(pkg)) {
        const maxOpts = Math.max(
          0,
          ...scope.questions
            .filter((q) => q.type === 'single_choice')
            .map((q) => Object.keys(q.options ?? {}).length),
        );
        for (let rank = 0; rank < maxOpts; rank++) {
          let hits = 0;
          let of = 0;
          for (const q of scope.questions) {
            if (q.type !== 'single_choice' || typeof q.answer !== 'string') continue;
            const ks = Object.keys(q.options ?? {});
            if (ks.length < 2 || rank >= ks.length) continue;
            const len = (k: string) => (q.options?.[k] ?? '').trim().length;
            const ordered = [...ks].sort((a, b) => len(b) - len(a));
            const winner = ordered[rank];
            if (winner === undefined) continue;
            // Strict rank only: a tie at this rank is not a rank cue.
            if (ks.filter((k) => len(k) === len(winner)).length !== 1) continue;
            of += 1;
            if (winner === q.answer) hits += 1;
          }
          if (of < MIN_SC_ITEMS_FOR_SHARE) continue;
          const share = hits / of;
          const bound = share > errB ? 'error-tier' : share > warnB ? 'warn-tier' : null;
          if (bound) {
            // Name the extremes plainly; the interior ranks by position.
            const label =
              rank === maxOpts - 1 ? 'shortest' : (RANK_LABELS[rank] ?? `#${rank + 1} longest`);
            report(
              'key-length-rank-share',
              'warn',
              `[${scope.label}] the key is the strict ${label} option in ${hits}/${of} single-choice items ` +
                `(${Math.round(share * 100)}%, ${bound} bound ` +
                `${Math.round((bound === 'error-tier' ? errB : warnB) * 100)}%, chance 25%) — ` +
                'length rank gives items away at any rank, not just the extremes; redistribute key lengths across the option band',
            );
          }
        }
      }
    },
  },

  {
    name: 'rider-balance',
    run({ pkg, report }) {
      // E2 (adversarial cue sweep 2026-08-19): the one-sided per-item rider
      // rule in answer-length-cue ("only the key must not carry a rider")
      // taught authoring to evacuate riders into distractors — a rider now
      // marks a DISTRACTOR 57/59 times across the six new banks (p=2e-06), a
      // STRONGER elimination cue than the one the rule killed (L-0031: a
      // one-sided check manufactures its inverse). This check bounds the
      // balance two-sidedly on the WIDENED marker list (RIDER_BALANCE): among
      // rider-carrying options, the share attached to the key must sit inside
      // [min, max] around chance (25%). Statistic ported from
      // tools/exploit-scan.mjs `rider-marks-key` — the calibration
      // instrument; keep them in lock-step.
      // WARN level this wave (Oliver's scope call — see key-length-rank-share).
      const v = pkg.manifest.validation;
      const minB = knobOr(v?.rider_balance_min_share, RIDER_BALANCE_MIN_SHARE);
      const maxB = knobOr(v?.rider_balance_max_share, RIDER_BALANCE_MAX_SHARE);

      for (const scope of cueScopes(pkg)) {
        let hits = 0;
        let of = 0;
        for (const q of scope.questions) {
          if (q.type !== 'single_choice' || typeof q.answer !== 'string') continue;
          const withRider = Object.keys(q.options ?? {}).filter((k) =>
            RIDER_BALANCE.test(q.options?.[k] ?? ''),
          );
          if (withRider.length === 0) continue;
          of += withRider.length;
          if (withRider.includes(q.answer)) hits += 1;
        }
        if (of < MIN_RIDER_OPTIONS_FOR_BALANCE) continue;
        const share = hits / of;
        if (share < minB) {
          report(
            'rider-balance',
            'warn',
            `[${scope.label}] a justification/contrast rider marks the key in only ${hits}/${of} ` +
              `rider-carrying options (${Math.round(share * 100)}%, floor ${Math.round(minB * 100)}%, ` +
              'chance 25%) — riders have been evacuated into distractors, an elimination cue ' +
              '(rule out every rider option for free); spread markers across keys and distractors alike',
          );
        } else if (share > maxB) {
          report(
            'rider-balance',
            'warn',
            `[${scope.label}] a justification/contrast rider marks the key in ${hits}/${of} ` +
              `rider-carrying options (${Math.round(share * 100)}%, ceiling ${Math.round(maxB * 100)}%, ` +
              'chance 25%) — the self-justifying-key cue; the argument belongs in rationale.correct',
          );
        }
      }
    },
  },

  {
    name: 'named-entity-parity',
    run({ pkg, report }) {
      // E3 (adversarial cue sweep 2026-08-19): when exactly one option names
      // the most proper-noun product/service tokens, that option is the key
      // 9/9 = 100% of the time on ai-901 (p=4e-6), 75% on aif-c01, 61% on
      // gcp-cdl, 50% on az-900 — the dominant tell for vendor certifications,
      // and it will recur on every future AWS/Azure/GCP exam. Previously
      // unmeasured entirely. Floor: ≥6 qualifying items (below that the share
      // is sampling noise). Statistic ported from tools/exploit-scan.mjs
      // `named-entity` — the calibration instrument; keep them in lock-step.
      // WARN level this wave (Oliver's scope call — see key-length-rank-share).
      const v = pkg.manifest.validation;
      const warnB = knobOr(v?.named_entity_parity_warn_share, NAMED_ENTITY_PARITY_WARN_SHARE);
      const errB = Math.max(
        knobOr(v?.named_entity_parity_error_share, NAMED_ENTITY_PARITY_ERROR_SHARE),
        warnB,
      );

      for (const scope of cueScopes(pkg)) {
        let hits = 0;
        let of = 0;
        for (const q of scope.questions) {
          if (q.type !== 'single_choice' || typeof q.answer !== 'string') continue;
          const ks = Object.keys(q.options ?? {});
          const counts = ks.map(
            (k) => [k, ((q.options?.[k] ?? '').match(NAMED_ENTITY) ?? []).length] as const,
          );
          const max = Math.max(0, ...counts.map(([, c]) => c));
          if (max === 0) continue;
          const top = counts.filter(([, c]) => c === max);
          if (top.length !== 1) continue;
          of += 1;
          if (top[0]![0] === q.answer) hits += 1;
        }
        if (of < MIN_NE_ITEMS_FOR_PARITY) continue;
        const share = hits / of;
        const bound = share > errB ? 'error-tier' : share > warnB ? 'warn-tier' : null;
        if (bound) {
          report(
            'named-entity-parity',
            'warn',
            `[${scope.label}] the single option naming the most proper-noun entities is the key in ` +
              `${hits}/${of} qualifying single-choice items (${Math.round(share * 100)}%, ${bound} bound ` +
              `${Math.round((bound === 'error-tier' ? errB : warnB) * 100)}%, chance 25%) — ` +
              'name concrete products/services in every option or in none; specificity parity is part of ' +
              'surface parity (03-authoring-guide.md#surface-parity)',
          );
        }
      }
    },
  },

  {
    name: 'option-pair-similarity',
    run({ pkg, report }) {
      // E6 (adversarial cue sweep 2026-08-19): an intra-item option pair with
      // shingle-jaccard ≥ 0.6 contains the key 9/11 times in the live banks —
      // and whether or not it does, a near-duplicate pair collapses a 4-way
      // item into a 2-way guess. Reuses the near-duplicate-stems shingle
      // machinery on option text. Per-item, so the bank pass subsumes the
      // forms (E7 note: no per-form re-run needed for per-item findings).
      // WARN level this wave (Oliver's scope call — see key-length-rank-share).
      const v = pkg.manifest.validation;
      const warnJ = knobOr(v?.option_pair_jaccard_warn, OPTION_PAIR_JACCARD_WARN);
      const errJ = Math.max(knobOr(v?.option_pair_jaccard_error, OPTION_PAIR_JACCARD_ERROR), warnJ);

      for (const q of pkg.bank.questions ?? []) {
        if (q.type === 'scenario_matching') continue;
        const entries = Object.entries(q.options ?? {}).map(([k, text]) => ({
          k,
          s: shingles(text),
        }));
        for (let i = 0; i < entries.length; i++) {
          for (let j = i + 1; j < entries.length; j++) {
            const a = entries[i]!;
            const b = entries[j]!;
            if (a.s.size === 0 && b.s.size === 0) continue;
            const inter = [...a.s].filter((x) => b.s.has(x)).length;
            const jaccard = inter / (a.s.size + b.s.size - inter || 1);
            const bound = jaccard >= errJ ? 'error-tier' : jaccard >= warnJ ? 'warn-tier' : null;
            if (bound) {
              report(
                'option-pair-similarity',
                'warn',
                `${q.id}: options ${a.k} and ${b.k} are ${Math.round(jaccard * 100)}% similar ` +
                  `(${bound} bound ${Math.round((bound === 'error-tier' ? errJ : warnJ) * 100)}%) — ` +
                  'a near-duplicate pair collapses the item to a two-way guess (the key sits in such a ' +
                  'pair 9/11 times in the sweep); differentiate one option or rebuild it from a different pattern',
              );
            }
          }
        }
      }
    },
  },

  {
    name: 'concept-coverage',
    run({ pkg, report }) {
      const err = (msg: string) => report('concept-coverage', 'error', msg);
      const counts = new Map<string, string[]>();
      for (const q of pkg.bank.questions ?? []) {
        const list = counts.get(q.primary_concept) ?? [];
        list.push(q.id);
        counts.set(q.primary_concept, list);
      }
      for (const c of pkg.concepts.concepts ?? []) {
        const list = counts.get(c.id) ?? [];
        if (list.length === 0) err(`${c.id}: no bank item tests this concept as primary`);
        else if (list.length > 1) {
          err(`${c.id}: primary concept of ${list.length} bank items (${list.join(', ')}) — must be exactly one`);
        }
      }
    },
  },

  {
    name: 'syllabus-rule-bank-coverage',
    when: rulesLayerOn,
    run({ pkg, report }) {
      if (!pkg.syllabusRules) return; // reported by concept-syllabus-rules
      const covered = new Set((pkg.bank.questions ?? []).map((q) => q.syllabus_rule));
      const untested = pkg.syllabusRules.rules.filter((r) => !covered.has(r.id));
      if (untested.length) {
        report(
          'syllabus-rule-bank-coverage',
          'error',
          `syllabus rules with no question: ${untested.map((r) => r.id).join(', ')}`,
        );
      }
    },
  },

  {
    name: 'syllabus-rule-form-coverage',
    when: rulesLayerOn,
    run({ pkg, report }) {
      if (!pkg.syllabusRules) return;
      const byId = new Map((pkg.bank.questions ?? []).map((q) => [q.id, q]));
      for (const form of pkg.selection.forms ?? []) {
        const covered = new Set(form.items.map((id) => byId.get(id)?.syllabus_rule));
        const untested = pkg.syllabusRules.rules.filter((r) => !covered.has(r.id));
        if (untested.length) {
          report(
            'syllabus-rule-form-coverage',
            'error',
            `form ${form.id}: rules tested only by reserve items, so the weak-rule report can never surface them: ` +
              untested.map((r) => `${r.id} (${r.title})`).join('; '),
          );
        }
      }
    },
  },

  {
    name: 'selection-shape',
    run({ pkg, report }) {
      const err = (msg: string) => report('selection-shape', 'error', msg);
      const forms = pkg.selection.forms ?? [];
      if (forms.length === 0) {
        err('selection has no forms');
        return;
      }
      const byId = new Map((pkg.bank.questions ?? []).map((q) => [q.id, q]));
      for (const form of forms) {
        if (form.items.length !== pkg.manifest.exam.item_count) {
          err(`form ${form.id}: ${form.items.length} ids, expected ${pkg.manifest.exam.item_count}`);
        }
        if (new Set(form.items).size !== form.items.length) {
          err(`form ${form.id}: duplicate ids in selection`);
        }
        for (const id of form.items) {
          if (!byId.has(id)) err(`form ${form.id}: references unknown item "${id}"`);
        }
        for (const d of pkg.manifest.domains ?? []) {
          const n = form.items.filter((id) => byId.get(id)?.domain === d.id).length;
          if (n !== d.exam_items) {
            err(`form ${form.id}: ${d.id} has ${n} items, expected ${d.exam_items}`);
          }
        }
        // Port of the informational reserve check: bank minus exam slots must
        // leave exactly that many concepts covered only by reserve items.
        const inForm = new Set(form.items.map((id) => byId.get(id)?.primary_concept));
        const reserveOnly = (pkg.concepts.concepts ?? []).filter((c) => !inForm.has(c.id));
        const expectedReserve = pkg.manifest.bank.item_count - pkg.manifest.exam.item_count;
        if (reserveOnly.length !== expectedReserve) {
          err(`form ${form.id}: ${reserveOnly.length} reserve-only concepts, expected ${expectedReserve}`);
        }
      }
    },
  },

  {
    name: 'selection-format-mix',
    run({ pkg, report }) {
      const byId = new Map((pkg.bank.questions ?? []).map((q) => [q.id, q]));
      for (const form of pkg.selection.forms ?? []) {
        for (const d of pkg.manifest.domains ?? []) {
          const picked = form.items
            .map((id) => byId.get(id))
            .filter((q): q is Question => q !== undefined && q.domain === d.id);
          for (const f of FORMATS) {
            const n = picked.filter((q) => q.type === f).length;
            const expected = d.format_mix?.[f] ?? 0;
            if (n !== expected) {
              report(
                'selection-format-mix',
                'error',
                `form ${form.id}: ${d.id} has ${n} ${f} items, expected ${expected}`,
              );
            }
          }
        }
      }
    },
  },

  {
    name: 'selection-concept-uniqueness',
    run({ pkg, report }) {
      const byId = new Map((pkg.bank.questions ?? []).map((q) => [q.id, q]));
      for (const form of pkg.selection.forms ?? []) {
        const used = form.items
          .map((id) => byId.get(id)?.primary_concept)
          .filter((c): c is string => c !== undefined);
        const dupes = [...new Set(used.filter((c, i) => used.indexOf(c) !== i))];
        if (dupes.length) {
          report(
            'selection-concept-uniqueness',
            'error',
            `form ${form.id}: concepts appearing more than once: ${dupes.join(', ')}`,
          );
        }
      }
    },
  },

  {
    name: 'number-drift',
    run({ pkg, report }) {
      for (const q of pkg.bank.questions ?? []) {
        const stemText =
          q.type === 'scenario_matching'
            ? [q.question, ...(q.scenarios ?? []).map((s) => s.text)].join(' ')
            : [q.question, ...Object.values(q.options ?? {})].join(' ');
        const stem = new Set(nums(stemText));
        const rationaleText =
          q.type === 'scenario_matching'
            ? q.rationale?.correct ?? ''
            : [q.rationale?.correct ?? '', ...Object.values(q.rationale?.distractors ?? {})].join(' ');
        for (const n of nums(rationaleText)) {
          if (!stem.has(n)) {
            report(
              'number-drift',
              'error',
              `${q.id}: rationale cites "${n}" which does not appear in the question — number drift`,
            );
          }
        }
      }
    },
  },

  {
    name: 'mojibake',
    run({ pkg, report }) {
      const raw = readFileSync(join(pkg.dir, 'questions.json'), 'utf8');
      const m = raw.match(MOJIBAKE);
      if (m) {
        const at = m.index ?? 0;
        report(
          'mojibake',
          'error',
          `mojibake found near: ${raw.slice(Math.max(0, at - 60), at + 60)}`,
        );
      }
    },
  },

  {
    name: 'near-duplicate-stems',
    run({ pkg, report }) {
      const threshold = pkg.manifest.validation.near_duplicate_jaccard;
      const prepared = (pkg.bank.questions ?? []).map((q) => ({ id: q.id, s: shingles(q.question) }));
      for (let i = 0; i < prepared.length; i++) {
        for (let j = i + 1; j < prepared.length; j++) {
          const a = prepared[i];
          const b = prepared[j];
          if (!a || !b) continue;
          const inter = [...a.s].filter((x) => b.s.has(x)).length;
          const jaccard = inter / (a.s.size + b.s.size - inter || 1);
          if (jaccard >= threshold) {
            report(
              'near-duplicate-stems',
              'error',
              `${a.id} and ${b.id} are ${Math.round(jaccard * 100)}% similar — reword one`,
            );
          }
        }
      }
    },
  },

  {
    name: 'style-policy',
    run({ pkg, report }) {
      const locale = pkg.manifest.style.locale.toLowerCase();
      const emojiAllowed = pkg.manifest.style.emoji;
      for (const q of pkg.bank.questions ?? []) {
        const text = styleText(q);
        if (locale === 'en-gb') {
          const m = text.match(AMERICANISMS);
          if (m) {
            report('style-policy', 'error', `${q.id}: American spelling "${m[0]}" — the bank uses British spelling`);
          }
        }
        if (!emojiAllowed && EMOJI.test(text)) {
          report('style-policy', 'error', `${q.id}: contains an emoji`);
        }
      }
    },
  },

  // ------------------------------------------------ provenance (new checks)

  {
    name: 'provenance-sources',
    run({ pkg, report }) {
      const err = (msg: string) => report('provenance-sources', 'error', msg);
      const p = pkg.manifest.provenance;
      if (!p || !Array.isArray(p.sources) || p.sources.length === 0) {
        err('provenance.sources must register at least one source');
      } else {
        const ids = p.sources.map((s) => s.id);
        if (new Set(ids).size !== ids.length) err('duplicate provenance source ids');
        for (const s of p.sources) {
          if (!s.id) err('provenance source with no id');
          if (!(SOURCE_TYPES as readonly string[]).includes(s.type)) {
            err(`source ${s.id}: unknown type "${s.type}"`);
          }
          if (!s.citation?.trim()) err(`source ${s.id}: citation is empty`);
        }
      }
      if (!p?.nda_statement?.trim()) err('provenance.nda_statement is empty');
    },
  },

  {
    name: 'licensed-import-license',
    run({ pkg, report }) {
      for (const s of pkg.manifest.provenance?.sources ?? []) {
        if (s.type !== 'licensed_import') continue;
        if (!s.license || !LICENSE_ALLOWLIST.includes(s.license)) {
          report(
            'licensed-import-license',
            'error',
            `source ${s.id}: license "${s.license ?? '(none)'}" is not in the commercial-compatible allowlist [${LICENSE_ALLOWLIST.join(', ')}]`,
          );
        }
        if (!s.attribution?.trim()) {
          report('licensed-import-license', 'error', `source ${s.id}: licensed_import requires attribution`);
        }
      }
    },
  },

  {
    name: 'derivation-present',
    run({ pkg, report }) {
      const dir = join(pkg.dir, 'derivation');
      const ok =
        existsSync(dir) &&
        statSync(dir).isDirectory() &&
        readdirSync(dir).some((f) => !f.startsWith('.'));
      if (!ok) {
        report(
          'derivation-present',
          'error',
          'derivation/ is missing or empty — every package must carry its derivation artefacts',
        );
      }
    },
  },

  {
    name: 'concept-source-registry',
    run({ pkg, report }) {
      const err = (msg: string) => report('concept-source-registry', 'error', msg);
      const registered = new Set((pkg.manifest.provenance?.sources ?? []).map((s) => s.id));
      for (const c of pkg.concepts.concepts ?? []) {
        if (!Array.isArray(c.sources) || c.sources.length === 0) {
          err(`${c.id}: no sources — every concept must be source-attributed`);
          continue;
        }
        for (const ref of c.sources) {
          if (!registered.has(ref.artefact)) {
            err(`${c.id}: sources reference unregistered source id "${ref.artefact}"`);
          }
        }
      }
    },
  },

  {
    name: 'source-derivation-link',
    run({ pkg, report }) {
      // The derivation-doc half of the provenance chain: a registered source
      // that no derivation artefact documents is a claim without evidence.
      // public_blueprint is exempt — its facts (domains, weights, totals) live
      // as manifest arithmetic, not in a distillation doc.
      const dir = join(pkg.dir, 'derivation');
      const registryPath = join(dir, 'sources.md');
      const registryText = existsSync(registryPath) ? readFileSync(registryPath, 'utf8') : '';
      for (const s of pkg.manifest.provenance?.sources ?? []) {
        if (s.type === 'public_blueprint') continue;
        const perSourceDoc = `source-${s.id}.md`;
        if (!existsSync(join(dir, perSourceDoc)) && !registryText.includes(s.id)) {
          report(
            'source-derivation-link',
            'error',
            `source ${s.id}: registered but undocumented — expected derivation/${perSourceDoc} ` +
              `or an entry for "${s.id}" in derivation/sources.md`,
          );
        }
      }
    },
  },

  {
    name: 'publication-preflight',
    when: (pkg) => pkg.manifest.status === 'published',
    run({ pkg, report }) {
      const err = (msg: string) => report('publication-preflight', 'error', msg);

      // The intro page block is a publication requirement (preflight item 7,
      // methodology/06-provenance-publishing.md#intro). Shape when present is
      // owned by `intro-presence`; absence at published is the error here.
      if (pkg.manifest.intro === undefined) {
        err(
          'manifest.intro is missing — a published exam must carry its introduction page block ' +
            '(methodology/06-provenance-publishing.md#intro)',
        );
      }

      // Artifact shapes are the contract in methodology/05-eval-rubric.md#artifact-shapes.
      const readEval = (rel: string): unknown => {
        const path = join(pkg.dir, rel);
        if (!existsSync(path)) {
          err(`${rel} is missing — publication requires the eval artifacts`);
          return undefined;
        }
        try {
          return JSON.parse(readFileSync(path, 'utf8'));
        } catch {
          err(`${rel} is not parseable JSON`);
          return undefined;
        }
      };

      // blind-solve: every recorded miss carries an adjudication verdict.
      const blind = readEval('eval/blind-solve.json') as
        | { items?: { id?: string; match?: boolean; adjudication?: string }[] }
        | undefined;
      if (blind !== undefined) {
        if (!Array.isArray(blind.items) || blind.items.length === 0) {
          err('eval/blind-solve.json has no items[] — an empty blind-solve proves nothing was solved');
        } else {
          for (const item of blind.items) {
            if (item?.match === false && !item?.adjudication?.trim()) {
              err(
                `eval/blind-solve.json: ${item?.id ?? '(no id)'} misses the key with no adjudication verdict`,
              );
            }
          }
        }
      }

      // judge-scores: every item scored on all six dimensions, none <= 2.
      const judge = readEval('eval/judge-scores.json') as
        | { items?: { id?: string; scores?: Record<string, unknown> }[] }
        | undefined;
      if (judge !== undefined) {
        if (!Array.isArray(judge.items) || judge.items.length === 0) {
          err('eval/judge-scores.json has no items[] — an empty judge record proves no thresholds');
        } else {
          for (const item of judge.items) {
            const id = item?.id ?? '(no id)';
            for (const dim of ['1', '2', '3', '4', '5', '6']) {
              const score = item?.scores?.[dim];
              if (typeof score !== 'number') {
                err(`eval/judge-scores.json: ${id} is missing dimension ${dim}`);
              } else if (score <= 2) {
                err(`eval/judge-scores.json: ${id} dimension ${dim} scored ${score} — no dimension <=2 ships`);
              }
            }
          }
        }
      }

      const overlap = join(pkg.dir, 'eval', 'overlap-report.md');
      if (!existsSync(overlap) || readFileSync(overlap, 'utf8').trim().length === 0) {
        err('eval/overlap-report.md is missing or empty — publication requires the originality-screen record');
      }

      const signoff = join(pkg.dir, 'derivation', 'signoff.md');
      if (!existsSync(signoff) || readFileSync(signoff, 'utf8').trim().length === 0) {
        err('derivation/signoff.md is missing or empty — publication requires recorded Gate 2 sign-off');
      }
    },
  },
];

// ---------------------------------------------------------------- runner

/**
 * Validate a loaded content package against the shared distractor-pattern
 * registry. Never throws on bad content: a crashing check is converted into
 * an error finding so one malformed field cannot hide the rest of the report.
 */
export function validateExam(
  pkg: ExamPackage,
  registry: DistractorPatternRegistry,
): ValidationResult {
  const findings: Finding[] = [];
  const checksRun: string[] = [];

  const patternIds = new Set<string>([
    ...(registry.patterns ?? []).map((p) => p.id),
    ...(pkg.authoring?.pattern_extensions ?? []).map((p) => p.id),
  ]);

  const ctx: Ctx = {
    pkg,
    patternIds,
    report: (check, level, message) => findings.push({ check, level, message }),
  };

  for (const check of CHECKS) {
    if (check.when && !check.when(pkg)) continue;
    checksRun.push(check.name);
    try {
      check.run(ctx);
    } catch (e) {
      findings.push({
        check: check.name,
        level: 'error',
        message: `check crashed: ${e instanceof Error ? e.message : String(e)}`,
      });
    }
  }

  return {
    ok: !findings.some((f) => f.level === 'error'),
    findings,
    checksRun,
  };
}

/** The full check inventory (unfiltered), for parity assertions and docs. */
export const CHECK_NAMES: string[] = CHECKS.map((c) => c.name);
