#!/usr/bin/env node
/**
 * One-shot transform: ~/LifeOS/ccar-p-mock-exam/data/*.json -> content/ccar-p/.
 *
 * What generalizes (see the plan's Methodology section):
 *   - long domain strings ("Domain 1: Solution Design & Architecture") -> short
 *     ids d1..d7, titles moved into the manifest as display data;
 *   - recap_rule -> syllabus_rule everywhere (recap-rules.json -> syllabus-rules.json);
 *   - the flags the source concepts carried (source/purcell_items/convergent)
 *     -> sources[] refs against the manifest's registered provenance sources;
 *   - everything tools/validate.mjs hardcoded (85/63, FORMAT_MIX, D03/D04 caps,
 *     option counts, option reuse, en-GB no-emoji, 0.4 Jaccard) -> manifest data.
 *
 * Deterministic: same input -> byte-identical output. Re-run freely.
 * Source repo path can be overridden with CCARP_SRC.
 */

import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = process.env.CCARP_SRC ?? join(ROOT, '..', 'ccar-p-mock-exam');
const OUT = join(ROOT, 'content', 'ccar-p');

const read = (p) => JSON.parse(readFileSync(join(SRC, p), 'utf8'));
const write = (name, data) =>
  writeFileSync(join(OUT, name), JSON.stringify(data, null, 2) + '\n');

const srcConcepts = read('data/concepts.json');
const srcRules = read('data/recap-rules.json');
const srcBank = read('data/questions.json');
const srcSelection = read('data/exam-selection.json');

// ---------------------------------------------------------------- domains

/** Long name -> { id, title }, e.g. "Domain 1: Solution Design & Architecture" -> d1. */
const domainMap = new Map();
for (const long of Object.keys(srcConcepts.domains)) {
  const m = long.match(/^Domain (\d+): (.+)$/);
  if (!m) throw new Error(`unparseable domain name: "${long}"`);
  domainMap.set(long, { id: `d${m[1]}`, title: m[2] });
}
const shortDomain = (long) => {
  const d = domainMap.get(long);
  if (!d) throw new Error(`unknown domain: "${long}"`);
  return d.id;
};

/** Ported from ccar-p tools/validate.mjs FORMAT_MIX — the per-domain exam slice. */
const FORMAT_MIX = {
  'Domain 1: Solution Design & Architecture': { single_choice: 8, multiple_response: 2, scenario_matching: 1 },
  'Domain 2: Claude Models, Prompting & Context Engineering': { single_choice: 6, multiple_response: 2, scenario_matching: 0 },
  'Domain 3: Integration': { single_choice: 8, multiple_response: 3, scenario_matching: 1 },
  'Domain 4: Evaluation, Testing & Optimization': { single_choice: 7, multiple_response: 2, scenario_matching: 1 },
  'Domain 5: Governance, Safety & Risk Management': { single_choice: 6, multiple_response: 2, scenario_matching: 1 },
  'Domain 6: Stakeholder Communication & Lifecycle Management': { single_choice: 6, multiple_response: 2, scenario_matching: 1 },
  'Domain 7: Developer Productivity & Operational Enablement': { single_choice: 3, multiple_response: 1, scenario_matching: 0 },
};

const domains = Object.entries(srcConcepts.domains).map(([long, d]) => ({
  id: shortDomain(long),
  title: domainMap.get(long).title,
  weight_pct: d.weight,
  exam_items: d.exam_items,
  bank_items: d.bank_items,
  format_mix: FORMAT_MIX[long],
}));

const examTotal = domains.reduce((a, d) => a + d.exam_items, 0);
const bankTotal = domains.reduce((a, d) => a + d.bank_items, 0);

// ---------------------------------------------------------------- manifest

// Source registry ids referenced by concept sources[] below.
const SRC_BLUEPRINT = 'ccar-p-blueprint';
const SRC_PURCELL = 'purcell-practice-set';
const SRC_RECAP = 'ccar-p-course-recap';

const manifest = {
  $comment:
    'Migrated from ~/LifeOS/ccar-p-mock-exam by tools/import-ccar-p.mjs. Everything the original tools/validate.mjs hardcoded is data here. status in_review here means: imported legacy content, servable, unaudited — S5 never ran on this bank.',
  slug: 'ccar-p',
  title: 'Claude Certified Architect – Professional (CCAR-P) Mock Exam',
  vendor: 'Anthropic',
  status: 'in_review',
  version: '1.0.0',
  blueprint_version: '2026-blueprint',
  source_checked_date: '2026-08-16',
  exam: { item_count: examTotal, time_limit_minutes: 120, pass_threshold_pct: 75 },
  bank: { item_count: bankTotal },
  domains,
  formats: {
    single_choice: { options: 4 },
    multiple_response: { options: 5, select_count: [2] },
    scenario_matching: { min_options: 3, min_scenarios: 4, require_option_reuse: true },
  },
  style: { locale: 'en-GB', emoji: false },
  validation: {
    pattern_caps: { D03: 0.1, D04: 0.1 },
    near_duplicate_jaccard: 0.4,
  },
  layers: { syllabus_rules: true },
  provenance: {
    sources: [
      {
        id: SRC_BLUEPRINT,
        type: 'public_blueprint',
        citation:
          'Official CCAR-P exam blueprint (public): domain list, weights and format profile. Backbone for the domain arithmetic in this manifest.',
      },
      {
        id: SRC_PURCELL,
        type: 'public_practice_set',
        citation:
          'Purcell practice set (freely published practice material). Used under the clean-room rule for analytical classification only — per-item concept mapping and distractor-pattern frequencies in derivation/purcell-distillation.md. No text reused.',
      },
      {
        id: SRC_RECAP,
        type: 'own_course_notes',
        citation:
          'Own recap notes from the legitimately accessed CCAR-P course (proof-of-access basis). Distilled into the 24 architectural rules and concept vocabulary in derivation/recap-concepts.md.',
      },
    ],
    nda_statement:
      'This package contains no live exam content. Nothing here is drawn from the CCAR-P item bank, and no question reproduces an item encountered in a real sitting. Actual exam content is confidential and protected by NDA. This is an independent study tool: it is not affiliated with, endorsed by, or connected to Anthropic, PBC or Pearson VUE. "Claude" and "Anthropic" are trademarks of Anthropic, PBC.',
  },
};

// ---------------------------------------------------------------- concepts

const concepts = srcConcepts.concepts.map((c) => {
  const sources = [];
  if (c.source === 'purcell-only' || c.source === 'both') {
    sources.push(
      c.purcell_items?.length
        ? { artefact: SRC_PURCELL, items: c.purcell_items }
        : { artefact: SRC_PURCELL },
    );
  }
  if (c.source === 'recap-only' || c.source === 'both') {
    sources.push({ artefact: SRC_RECAP });
  }
  if (sources.length === 0) throw new Error(`${c.id}: unmapped source "${c.source}"`);
  return {
    id: c.id,
    domain: shortDomain(c.domain),
    statement: c.statement,
    vocabulary: c.vocabulary,
    priority: c.priority,
    sources,
    syllabus_rule: c.recap_rule,
  };
});

// ---------------------------------------------------------------- questions

const questions = srcBank.questions.map((q) => {
  const out = {
    id: q.id,
    domain: shortDomain(q.domain),
    primary_concept: q.primary_concept,
    secondary_concepts: q.secondary_concepts ?? [],
    syllabus_rule: q.recap_rule,
    theme: q.theme,
    vertical: q.vertical,
    keywords: q.keywords,
    type: q.type,
    question: q.question,
  };
  if (q.type === 'scenario_matching') {
    out.matching_options = q.matching_options;
    out.scenarios = q.scenarios;
    out.answer = q.answer;
    out.rationale = { correct: q.rationale.correct };
  } else {
    out.options = q.options;
    if (q.type === 'multiple_response') out.select_count = q.select_count;
    out.answer = q.answer;
    out.distractor_patterns = q.distractor_patterns;
    out.rationale = { correct: q.rationale.correct, distractors: q.rationale.distractors };
  }
  return out;
});

// ------------------------------------------------------- selection / layers

const selection = {
  $comment: 'Multi-form-ready; v1 ships the single migrated CCAR-P form.',
  version: '1.0.0',
  forms: [
    {
      id: 'form-1',
      items: srcSelection.exam,
      notes: srcSelection.selection_notes,
    },
  ],
};

const syllabusRules = {
  $comment:
    'Generalized from ccar-p data/recap-rules.json (recap_rule -> syllabus_rule). The 24 architectural rules behind the weak-rule report.',
  version: srcRules.version,
  modules: srcRules.modules,
  rules: srcRules.rules,
};

const authoring = {
  $comment:
    'Per-exam authoring config: theme set and verticals observed in the migrated bank. Theme definitions are reconstructed in methodology/03-authoring-guide.md; pattern ids live in methodology/distractor-patterns.json.',
  version: '1.0.0',
  themes: [...new Set(srcBank.questions.map((q) => q.theme))].sort(),
  pattern_extensions: [],
  verticals: [...new Set(srcBank.questions.map((q) => q.vertical))].sort(),
};

// ---------------------------------------------------------------- write

mkdirSync(OUT, { recursive: true });
mkdirSync(join(OUT, 'derivation'), { recursive: true });

write('manifest.json', manifest);
write('concepts.json', { version: srcConcepts.version, concepts });
write('questions.json', { version: srcBank.version, questions });
write('selection.json', selection);
write('syllabus-rules.json', syllabusRules);
write('authoring.json', authoring);

// Derivation artefacts: copy the distillation docs verbatim — except
// master-inventory.md, which gets a provenance header prepended (body
// untouched) because its relative citations refer to the SOURCE repo.
// Injected on every run so re-runs stay byte-identical.
const MASTER_INVENTORY_HEADER = `> **Provenance header — added by Mockka's \`tools/import-ccar-p.mjs\`; body verbatim.**
> This file was copied unchanged from the \`ccar-p-mock-exam\` repo
> (\`docs/concepts/master-inventory.md\`). Its relative citations —
> \`data/concepts.json\`, \`tools/validate.mjs\`, \`../../data/…\` links — refer to
> paths in that SOURCE repo, not to this package. The Mockka equivalents are
> \`content/ccar-p/concepts.json\` and \`packages/engine/src/validate/\`.

`;

for (const f of readdirSync(join(SRC, 'docs', 'concepts'))) {
  if (!f.endsWith('.md')) continue;
  if (f === 'master-inventory.md') {
    writeFileSync(
      join(OUT, 'derivation', f),
      MASTER_INVENTORY_HEADER + readFileSync(join(SRC, 'docs', 'concepts', f), 'utf8'),
    );
  } else {
    copyFileSync(join(SRC, 'docs', 'concepts', f), join(OUT, 'derivation', f));
  }
}

writeFileSync(
  join(OUT, 'derivation', 'sources.md'),
  `# Source registry — ccar-p

Every concept in \`concepts.json\` attributes its \`sources[]\` to the ids below;
the manifest's \`provenance.sources\` block registers the same ids. This file is
the human-readable end of that chain (question -> concept -> derivation doc ->
registered source).

| id | type | licence basis | derivation artefact |
|---|---|---|---|
| ${SRC_BLUEPRINT} | public_blueprint | public document; facts only (domains, weights, format profile) | manifest domain arithmetic |
| ${SRC_PURCELL} | public_practice_set | freely published practice set; clean-room analytical classification only, zero text reuse | [purcell-distillation.md](purcell-distillation.md) |
| ${SRC_RECAP} | own_course_notes | own notes from the legitimately accessed official course (proof-of-access basis) | [recap-concepts.md](recap-concepts.md) |

The consolidated concept inventory across both artefacts is
[master-inventory.md](master-inventory.md).

## Clean-room statement

Distillation sessions read the sources listed above and produced the derivation
artefacts in this directory. Authoring sessions never opened the source texts —
every question was written from these artefacts alone. No source text, and no
live-exam content, is reproduced anywhere in this package.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the
CCAR-P item bank, and no question reproduces an item encountered in a real
sitting. Actual exam content is confidential and protected by NDA. This is an
independent study tool: it is not affiliated with, endorsed by, or connected to
Anthropic, PBC or Pearson VUE.
`,
);

console.log(`wrote content/ccar-p: ${questions.length} items, ${concepts.length} concepts, ` +
  `${syllabusRules.rules.length} rules, ${selection.forms[0].items.length} exam slots, ` +
  `${domains.length} domains (exam ${examTotal} / bank ${bankTotal})`);
