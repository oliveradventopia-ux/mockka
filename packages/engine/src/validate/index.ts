// The manifest-driven content validator — one engine, per-exam data.
//
// Every check the CCAR-P tools/validate.mjs hardcoded is ported here as a
// data-driven invariant: format mix, item totals, themes, patterns, caps,
// option counts, option-reuse, spelling/emoji policy all come from the
// package's manifest/authoring config. The invariants themselves stay code.
//
// The check that matters most is still `rationale-anti-drift`: distractor
// rationales must hold exactly one entry per non-answer option, and the
// correct rationale must never name an option letter. That combination makes
// it structurally impossible to ship a rationale that argues against its own
// answer key.
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

/** Catches "Correct: C.", "unlike B,", "the answer is C" — ported verbatim. */
const LETTER_REF =
  /(?:^|[^A-Za-z])(?:option\s+)?[A-E][.),:]|(?:^|\s)(?:answer|correct|choice)\s+is\s+[A-E]\b/;

const AMERICANISMS =
  /\b(analyze|organize|prioritize|optimize[sd]?|recognize|summarize|behavior|labeled|modeling|fulfill|catalog)\b/i;

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

/** UTF-8 read as Latin-1 leaves Â/â/Ã + a continuation byte; U+FFFD is the replacement char. */
const MOJIBAKE = /[ÂâÃ][-¿]|�/;

const domainIds = (pkg: ExamPackage) => new Set((pkg.manifest.domains ?? []).map((d) => d.id));
const rulesLayerOn = (pkg: ExamPackage) => pkg.manifest.layers?.syllabus_rules === true;

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
      if (typeof m.layers?.syllabus_rules !== 'boolean') err('manifest.layers.syllabus_rules missing');
      if (!m.provenance) err('manifest.provenance missing');
      const ids = (m.domains ?? []).map((d) => d.id);
      if (new Set(ids).size !== ids.length) err('duplicate domain ids in manifest');
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
      for (const q of pkg.bank.questions ?? []) {
        if (LETTER_REF.test(q.rationale?.correct ?? '')) {
          report(
            'rationale-letter-reference',
            'error',
            `${q.id}: correct rationale references an option letter — it must describe the reasoning, not the position`,
          );
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
