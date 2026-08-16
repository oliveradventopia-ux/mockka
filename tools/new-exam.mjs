#!/usr/bin/env node
/**
 * new-exam.mjs — scaffold a Mockka content package (pipeline stage S1).
 *
 *   node tools/new-exam.mjs <slug> "<Title>" [--out <dir>]
 *
 * Creates <out>/<slug>/ (default out: content/) with skeleton files carrying
 * TODO markers for every value Gate 1 verifies. Refuses if the directory
 * already exists. Dependency-free by design.
 *
 * Process: methodology/00-pipeline.md (S1) via .claude/skills/exam-new.
 * Authoritative field shapes: methodology/schema/ — the skeletons here are
 * starting points; `pnpm validate <slug>` is the arbiter.
 */

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const usage = 'usage: node tools/new-exam.mjs <slug> "<Title>" [--out <dir>]';

function fail(msg) {
  console.error(`new-exam: ${msg}`);
  process.exit(1);
}

// --- parse args ------------------------------------------------------------
const args = process.argv.slice(2);
let outDir = null;
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--out') {
    outDir = args[i + 1] ?? fail(`--out needs a value\n${usage}`);
    i++;
  } else if (args[i].startsWith('--')) {
    fail(`unknown flag ${args[i]}\n${usage}`);
  } else {
    positional.push(args[i]);
  }
}
const [slug, title] = positional;
if (!slug || !title || positional.length > 2) fail(usage);
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  fail(`slug must be lowercase alphanumeric with hyphens (got "${slug}")`);
}

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = outDir ? resolve(outDir) : join(repoRoot, 'content');
const dir = join(base, slug);
if (existsSync(dir)) fail(`refusing to scaffold: ${dir} already exists`);

const today = new Date().toISOString().slice(0, 10);

// --- file contents ---------------------------------------------------------
const TODO = 'TODO';

const manifest = {
  $comment:
    'Exam manifest skeleton scaffolded by tools/new-exam.mjs. Every TODO is Gate 1 material — fill from the OFFICIAL blueprint page (one domains[] entry per blueprint domain, weights summing to 100; pattern_caps from the Artefact A frequency analysis), then run `pnpm validate ' + slug + '`. Authoritative schema: methodology/schema/manifest.schema.json.',
  slug,
  title,
  vendor: TODO,
  status: 'draft',
  version: '0.1.0',
  blueprint_version: TODO,
  source_checked_date: today,
  exam: {
    item_count: TODO,
    time_limit_minutes: TODO,
    pass_threshold_pct: TODO,
  },
  bank: {
    item_count: `${TODO} (target ~1.35x exam item_count — methodology/02-master-inventory.md)`,
  },
  domains: [
    {
      id: 'd1',
      title: TODO,
      weight_pct: TODO,
      exam_items: TODO,
      bank_items: TODO,
      format_mix: { single_choice: TODO, multiple_response: TODO, scenario_matching: TODO },
    },
  ],
  formats: {
    single_choice: { options: TODO },
    multiple_response: { options: TODO, select_count: [TODO] },
    scenario_matching: { min_options: TODO, min_scenarios: TODO, require_option_reuse: true },
  },
  style: {
    locale: `${TODO} e.g. en-GB`,
    emoji: false,
  },
  validation: {
    pattern_caps: {},
    near_duplicate_jaccard: TODO,
  },
  layers: {
    syllabus_rules: false,
  },
  // Intro page block — optional while status is draft; the validator's
  // intro-presence check warns from in_review and the publication preflight
  // errors without it. Rules + field guide: methodology/06-provenance-publishing.md#intro.
  intro: {
    about: `${TODO} — executive summary: what the certification validates, domains covered`,
    audience: `${TODO} — who the certification is for, as roles`,
    materials: [
      {
        title: `${TODO} — e.g. "<N>-question practice exam"`,
        description: `${TODO} — what THIS mock provides: bank size, formats, dashboard, review depth`,
      },
    ],
    official_resources: [
      {
        label: `${TODO} — official cert portal / exam guide link text`,
        url: `https://${TODO}`,
      },
    ],
    disclaimer: `${TODO} — independence + provenance + NDA notice, exam-specific, aligned with the package README (cite, don't contradict)`,
  },
  format_coverage: `${TODO} — disclosure per methodology/06-provenance-publishing.md#format-coverage`,
  provenance: {
    sources: [],
    nda_statement: `${TODO} — see methodology/06-provenance-publishing.md#readme-template`,
  },
};

const questions = { version: '0.1.0', questions: [] };

const concepts = {
  $comment:
    'Master concept inventory (Artefact C, machine-readable). Built at S3 per methodology/02-master-inventory.md; schema: methodology/schema/concepts.schema.json. priority is COMPUTED (sources.length >= 2 => high) and surfaced by the validator concept-convergence WARN check; divergence is allowed as documented authoring judgment.',
  version: '0.1.0',
  concepts: [],
};

const selection = {
  $comment:
    'Exam form(s). v1 ships one form; schema is multi-form-ready. Built at S6 per .claude/skills/exam-publish.',
  version: '0.1.0',
  forms: [{ id: 'form-a', items: [] }],
};

const authoring = {
  $comment:
    'Per-exam authoring contract: theme set, pattern-registry extensions (E01...), vertical list. See methodology/03-authoring-guide.md#themes — architecture-style exams may adopt starter themes T1-T8.',
  version: '0.1.0',
  themes: [],
  pattern_extensions: [],
  verticals: [],
};

const sourcesMd = `# Source registry · ${title}

Written at S1, before distillation. Format + tier rules:
\`methodology/01-source-distillation.md\` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| src-blueprint | public_blueprint | TODO | TODO | ${today} | public publication | blueprint data |

Derivation docs: one \`source-<id>.md\` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).
`;

const files = [
  ['manifest.json', JSON.stringify(manifest, null, 2) + '\n'],
  ['questions.json', JSON.stringify(questions, null, 2) + '\n'],
  ['concepts.json', JSON.stringify(concepts, null, 2) + '\n'],
  ['selection.json', JSON.stringify(selection, null, 2) + '\n'],
  ['authoring.json', JSON.stringify(authoring, null, 2) + '\n'],
  [join('derivation', 'sources.md'), sourcesMd],
  [join('eval', '.gitkeep'), ''],
];

// --- write -----------------------------------------------------------------
mkdirSync(join(dir, 'derivation'), { recursive: true });
mkdirSync(join(dir, 'eval'), { recursive: true });
for (const [rel, content] of files) {
  writeFileSync(join(dir, rel), content);
}

console.log(`scaffolded ${dir}`);
for (const [rel] of files) console.log(`  ${join(slug, rel)}`);
console.log(
  `\nnext: register sources in derivation/sources.md, then follow .claude/skills/exam-new (S1-S3, stop at Gate 1).`
);
