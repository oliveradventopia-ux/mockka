#!/usr/bin/env node
/**
 * export-exam.mjs — render a content package into ONE self-contained HTML file.
 *
 *   node tools/export-exam.mjs <slug> [--out <path>] [--highlight <ids>]
 *
 * Output (default exports/<slug>.html) is dependency-free and opens from
 * file:// with zero external requests. Two modes in one file:
 *
 *   Candidate mode (default) — playable exam engine over the package's
 *   selection form, modeled on archive/initial-build/ (CCAR-P single-file
 *   app): intro | exam | dashboard tabs, three question formats, filters,
 *   submit-with-confirm, per-domain dashboard, localStorage persistence
 *   under `mockka-export.<slug>.v1`, optional timed mode, seeded display
 *   shuffle (apps/web/lib/shuffle.ts approach). Grading semantics replicate
 *   packages/engine/src/score.ts exactly (isAnswered / isCorrect /
 *   gradeAttempt incl. Math.round pass rule; MR = exact set; SM = every
 *   scenario correct).
 *
 *   Gate 2 review mode (toggle) — all bank items grouped by domain, form
 *   items marked, reserves labeled, keyed answers highlighted, option-keyed
 *   rationales, metadata line, Gate 2 deep-read sample highlighted (ids
 *   parsed from content/<slug>/derivation/gate2-checklist.md, overridable
 *   via --highlight "1.08,2.04,..."), round-2 judge dimension scores joined
 *   from eval/judge-scores.json when the shape allows.
 *
 * Style: CSS custom-property tokens are extracted from the design source
 * (apps/web/app/globals.css :root block) at build time — no hardcoded brand
 * values in this tool, no drift from the player.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const usage = 'usage: node tools/export-exam.mjs <slug> [--out <path>] [--highlight <ids>]';
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function fail(msg) {
  console.error(`export-exam: ${msg}`);
  process.exit(1);
}

// --- parse args ------------------------------------------------------------
const args = process.argv.slice(2);
let outPath = null;
let highlightArg = null;
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--out') {
    outPath = args[i + 1] ?? fail(`--out needs a value\n${usage}`);
    i++;
  } else if (args[i] === '--highlight') {
    highlightArg = args[i + 1] ?? fail(`--highlight needs a value\n${usage}`);
    i++;
  } else if (args[i].startsWith('--')) {
    fail(`unknown flag ${args[i]}\n${usage}`);
  } else {
    positional.push(args[i]);
  }
}
if (positional.length !== 1) fail(usage);
const slug = positional[0];

// --- load the package ------------------------------------------------------
const pkgDir = join(repoRoot, 'content', slug);
if (!existsSync(join(pkgDir, 'manifest.json'))) {
  const known = existsSync(join(repoRoot, 'content'))
    ? readdirSync(join(repoRoot, 'content'), { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(join(repoRoot, 'content', d.name, 'manifest.json')))
        .map((d) => d.name)
    : [];
  fail(`unknown slug "${slug}" — no content/${slug}/manifest.json. Known: ${known.join(', ') || '(none)'}`);
}
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
const manifest = readJson(join(pkgDir, 'manifest.json'));
const questions = readJson(join(pkgDir, 'questions.json')).questions;
const selection = readJson(join(pkgDir, 'selection.json'));
const form = selection.forms?.[0];
if (!form || !Array.isArray(form.items) || form.items.length === 0) {
  fail(`content/${slug}/selection.json has no forms[0].items`);
}
const bankIds = new Set(questions.map((q) => q.id));
for (const id of form.items) {
  if (!bankIds.has(id)) fail(`selection form "${form.id}" references unknown item ${id}`);
}

// --- design tokens from the design source (single source of truth) ---------
const globalsPath = join(repoRoot, 'apps', 'web', 'app', 'globals.css');
if (!existsSync(globalsPath)) fail(`design source missing: ${globalsPath} — tokens cannot be extracted`);
const globalsCss = readFileSync(globalsPath, 'utf8');
const rootMatch = globalsCss.match(/:root\s*\{([\s\S]*?)\}/);
if (!rootMatch) fail('no :root token block found in apps/web/app/globals.css');
const tokenBlock = `:root {${rootMatch[1]}}`;

// --- Gate 2 deep-read sample ids -------------------------------------------
// Parsed from the checklist with four targeted rules (auto-flag table, the
// scenario-matching line, standing-note bullets, the 10-random line), scoped
// to the "Gate 2 deep-read sample" section so substitute/reserve ids listed
// elsewhere are never collected. --highlight overrides the parse entirely.
function parseGate2Sample(md) {
  const section = md.split(/^## Gate 2 deep-read sample\s*$/m)[1]?.split(/^## /m)[0];
  if (!section) return null;
  const ids = new Set();
  const grabIds = (s) => {
    for (const m of s.matchAll(/\b(\d+\.\d{2})\b/g)) ids.add(m[1]);
  };
  for (const m of section.matchAll(/^\|\s*(\d+\.\d{2})\s*\|\s*dim/gm)) ids.add(m[1]); // auto-flag rows
  const sm = section.match(/\*\*Scenario-matching[\s\S]*?\*\*\s*([0-9., ]+)/);
  if (sm) grabIds(sm[1]);
  for (const m of section.matchAll(/^- {0,3}\*\*(\d+\.\d{2})\*\*/gm)) ids.add(m[1]); // standing notes
  const rnd = section.match(/\*\*10 random[\s\S]*?\*\*\s*([0-9., ]+)/);
  if (rnd) grabIds(rnd[1]);
  const declared = section.match(/Total sample:\s*\*\*(\d+)\s*items?\*\*/);
  return { ids: [...ids], declaredCount: declared ? Number(declared[1]) : null };
}

let gate2Ids = [];
let gate2Source = 'none';
if (highlightArg !== null) {
  gate2Ids = highlightArg.split(/[\s,]+/).filter(Boolean);
  gate2Source = '--highlight flag';
  for (const id of gate2Ids) {
    if (!bankIds.has(id)) fail(`--highlight id ${id} is not in the ${slug} bank`);
  }
} else {
  const checklistPath = join(pkgDir, 'derivation', 'gate2-checklist.md');
  if (existsSync(checklistPath)) {
    const parsed = parseGate2Sample(readFileSync(checklistPath, 'utf8'));
    if (!parsed || parsed.ids.length === 0) {
      fail(`could not parse the Gate 2 sample from ${checklistPath} — pass --highlight "1.08,2.04,..." explicitly`);
    }
    const unknown = parsed.ids.filter((id) => !bankIds.has(id));
    if (unknown.length > 0) {
      fail(`Gate 2 parse produced ids not in the bank (${unknown.join(', ')}) — pass --highlight explicitly`);
    }
    if (parsed.declaredCount !== null && parsed.ids.length !== parsed.declaredCount) {
      fail(
        `Gate 2 parse found ${parsed.ids.length} ids but the checklist declares ${parsed.declaredCount} — pass --highlight explicitly`,
      );
    }
    gate2Ids = parsed.ids;
    gate2Source = 'derivation/gate2-checklist.md';
  } else {
    console.warn(`export-exam: no gate2-checklist.md for ${slug} — review mode will carry no sample highlights`);
  }
}
gate2Ids.sort();

// --- optional joins: judge scores + concept statements ---------------------
let judgeScores = null; // { itemId: { "1": 5, ... } }
const judgePath = join(pkgDir, 'eval', 'judge-scores.json');
if (existsSync(judgePath)) {
  try {
    const judge = readJson(judgePath);
    const ok =
      Array.isArray(judge.items) &&
      judge.items.every((it) => typeof it.id === 'string' && it.scores && typeof it.scores === 'object');
    if (ok) {
      judgeScores = {};
      for (const it of judge.items) {
        if (bankIds.has(it.id)) judgeScores[it.id] = it.scores;
      }
    }
  } catch {
    judgeScores = null; // unreadable → skip cleanly, the join is a nice-to-have
  }
}

let conceptStatements = {}; // { "C-001": "statement…" }
const conceptsPath = join(pkgDir, 'concepts.json');
if (existsSync(conceptsPath)) {
  try {
    for (const c of readJson(conceptsPath).concepts ?? []) {
      if (typeof c.id === 'string' && typeof c.statement === 'string') conceptStatements[c.id] = c.statement;
    }
  } catch {
    conceptStatements = {};
  }
}

// --- payload ---------------------------------------------------------------
const payload = {
  slug,
  generatedAt: new Date().toISOString().slice(0, 10),
  manifest,
  questions,
  formId: form.id,
  formItems: form.items,
  gate2Ids,
  judgeScores,
  conceptStatements,
};
// <-escape so no "</script>" or "<!--" sequence can terminate the block.
const payloadJs = JSON.stringify(payload).replace(/</g, '\\u003c');

// ===========================================================================
// Component CSS — references design tokens only (values live in tokenBlock).
// ===========================================================================
const componentCss = String.raw`
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-text-size-adjust: 100%; }
body {
  background: var(--bg); color: var(--text);
  font-family: var(--font); line-height: 1.6; padding-bottom: 88px;
}
button { font-family: inherit; }
.mono { font-family: var(--mono); }

/* header */
header {
  background: var(--header-bg); color: var(--header-text);
  padding: 18px 24px; position: sticky; top: 0; z-index: 100; box-shadow: var(--shadow);
}
.header-inner {
  max-width: var(--maxw); margin: 0 auto; display: flex; flex-wrap: wrap;
  justify-content: space-between; align-items: center; gap: 12px 20px;
}
.header-title h1 { font-size: 1.25rem; font-weight: 700; }
.header-title p { font-size: 0.8rem; color: var(--header-muted); margin-top: 2px; }
.header-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.stat-badge {
  background: rgba(255, 255, 255, 0.12); color: var(--header-text);
  padding: 6px 14px; border-radius: 999px; font-size: 0.85rem; font-weight: 600;
}
.stat-badge.timer-low { background: var(--bad); color: var(--on-bad); }

/* buttons */
.btn {
  background: var(--primary); color: var(--on-primary); border: none;
  padding: 10px 18px; font-size: 0.92rem; font-weight: 600; border-radius: var(--radius-sm);
  cursor: pointer; transition: background 0.15s ease;
}
.btn:hover { background: var(--primary-hover); }
.btn:focus-visible, .tab-btn:focus-visible, .option:focus-within, a:focus-visible {
  outline: 2px solid var(--primary); outline-offset: 2px;
}
.btn-ghost { background: transparent; border: 1px solid var(--header-muted); color: var(--header-text); }
.btn-ghost:hover { background: rgba(255, 255, 255, 0.1); }
.btn-review { background: transparent; border: 1px solid var(--accent); color: var(--header-text); }
.btn-review:hover { background: rgba(255, 255, 255, 0.1); }
.btn-review[aria-pressed="true"] { background: var(--primary); border-color: var(--primary); }
.btn-quiet { background: var(--surface-2); color: var(--text); border: 1px solid var(--border); }
.btn-quiet:hover { background: var(--border); }

/* layout + tabs */
main { max-width: var(--maxw); margin: 28px auto; padding: 0 20px; }
.tabs {
  display: flex; gap: 8px; margin-bottom: 22px; border-bottom: 2px solid var(--border);
  padding-bottom: 6px; overflow-x: auto;
}
.tab-btn {
  background: none; border: none; padding: 9px 16px; font-size: 0.98rem; font-weight: 600;
  color: var(--text-muted); cursor: pointer; border-radius: var(--radius-sm); white-space: nowrap;
}
.tab-btn[aria-selected="true"] { color: var(--primary); background: var(--primary-soft); }

/* cards */
.card {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 26px; box-shadow: var(--shadow); margin-bottom: 24px;
}
.card h2 {
  font-size: 1.3rem; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid var(--accent);
}
.card h3 { font-size: 1.05rem; margin: 20px 0 8px; }

/* intro */
.intro-copy { margin: 4px 0 12px; max-width: 88ch; }
.intro-list { padding-left: 20px; margin: 6px 0 4px; display: flex; flex-direction: column; gap: 6px; }
.intro-list a { color: var(--primary); }
.fact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin: 14px 0 4px; }
.fact { background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px 14px; }
.fact .k { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
.fact .v { font-size: 1.15rem; font-weight: 700; margin-top: 2px; }
.domain-table { width: 100%; border-collapse: collapse; font-size: 0.92rem; margin-top: 6px; }
.domain-table th, .domain-table td { text-align: left; padding: 7px 10px; border-bottom: 1px solid var(--border); }
.domain-table th { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); }
.domain-table td.num, .domain-table th.num { text-align: right; }
.callout { border-radius: var(--radius-sm); padding: 14px 18px; margin-top: 18px; font-size: 0.92rem; }
.callout .callout-title { font-weight: 700; margin-bottom: 4px; }
.callout-warn { background: var(--warn-bg); border-left: 4px solid var(--warn); color: var(--warn); }
.callout-warn .callout-body { color: var(--text); }
.callout-muted { background: var(--surface-2); border-left: 4px solid var(--border); color: var(--text-muted); }
.timed-row { display: flex; align-items: flex-start; gap: 10px; margin-top: 20px; font-size: 0.95rem; }
.timed-row input { width: 18px; height: 18px; margin-top: 3px; accent-color: var(--primary); }
.start-row { margin-top: 18px; }

/* filters */
.filter-bar { display: flex; gap: 10px 14px; align-items: center; flex-wrap: wrap; margin-bottom: 18px; }
.filter-bar label { font-weight: 600; font-size: 0.88rem; }
.filter-select {
  padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border);
  background: var(--surface); font-size: 0.9rem; color: var(--text); max-width: 100%;
}

/* question cards */
.q-card {
  background: var(--surface); border: 1px solid var(--border); border-left: 5px solid var(--border);
  border-radius: var(--radius); padding: 22px; margin-bottom: 20px; box-shadow: var(--shadow);
}
.q-card.answered { border-left-color: var(--info); }
.q-card.graded-correct { border-left-color: var(--ok); }
.q-card.graded-incorrect { border-left-color: var(--bad); }
.q-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.q-head-left { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.q-num { font-weight: 700; color: var(--primary); font-size: 1.05rem; }
.q-id { font-family: var(--mono); font-size: 0.8rem; color: var(--text-muted); }
.chip {
  display: inline-block; font-size: 0.72rem; font-weight: 700; padding: 3px 8px;
  border-radius: 4px; letter-spacing: 0.03em; text-transform: uppercase; white-space: nowrap;
}
.chip-domain { background: var(--surface-2); color: var(--text-muted); border: 1px solid var(--border); white-space: normal; }
.chip-format { background: var(--info-bg); color: var(--info); }
.chip-ok { background: var(--ok-bg); color: var(--ok); }
.chip-bad { background: var(--bad-bg); color: var(--bad); }
.chip-warn { background: var(--warn-bg); color: var(--warn); }
.chip-form { background: var(--info-bg); color: var(--info); }
.chip-reserve { background: var(--warn-bg); color: var(--warn); }
.chip-gate2 { background: var(--primary); color: var(--on-primary); }
.q-text { font-size: 1.02rem; font-weight: 500; margin-bottom: 14px; }
.options { display: flex; flex-direction: column; gap: 9px; }
.option {
  display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px;
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  background: var(--surface-2); cursor: pointer; transition: border-color 0.15s ease;
}
.option:hover { border-color: var(--accent); }
.option input { margin-top: 5px; accent-color: var(--primary); flex-shrink: 0; }
.option.disabled { cursor: default; }
.option.disabled:hover { border-color: var(--border); }
.option .letter { font-weight: 700; }
.option.is-key { background: var(--ok-bg); border-color: var(--ok); }
.option.is-miss { background: var(--bad-bg); border-color: var(--bad); }
.mr-hint { font-size: 0.85rem; color: var(--bad); font-weight: 600; margin-top: 8px; min-height: 1.2em; }
.scenario { margin-bottom: 12px; padding: 12px 14px; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm); }
.scenario.is-key { background: var(--ok-bg); border-color: var(--ok); }
.scenario.is-miss { background: var(--bad-bg); border-color: var(--bad); }
.scenario .sc-text { font-weight: 500; font-size: 0.95rem; }
.scenario select {
  width: 100%; margin-top: 8px; padding: 8px 10px; border-radius: var(--radius-sm);
  border: 1px solid var(--border); background: var(--surface); font-size: 0.92rem; color: var(--text);
}
.sc-verdict { font-size: 0.85rem; font-weight: 600; margin-top: 6px; }
.sc-verdict.ok { color: var(--ok); }
.sc-verdict.bad { color: var(--bad); }

/* rationale */
.rationale { margin-top: 16px; padding: 16px; border-radius: var(--radius-sm); background: var(--surface-2); border: 1px solid var(--border); }
.rationale .r-key { font-weight: 700; margin-bottom: 6px; }
.rationale .r-correct { margin-bottom: 10px; }
.r-distractors { display: flex; flex-direction: column; gap: 6px; font-size: 0.92rem; }
.r-distractors .r-row { display: flex; gap: 8px; align-items: baseline; }
.r-distractors .r-letter { font-weight: 700; font-family: var(--mono); flex-shrink: 0; }
.r-distractors .r-pattern { font-family: var(--mono); font-size: 0.75rem; color: var(--text-muted); flex-shrink: 0; }

/* dashboard */
.score-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 26px; }
.score-circle {
  width: 96px; height: 96px; border-radius: 50%; display: flex; flex-direction: column;
  justify-content: center; align-items: center; font-weight: 700; flex-shrink: 0;
}
.score-circle.pass { background: var(--ok); color: var(--on-ok); }
.score-circle.fail { background: var(--bad); color: var(--on-bad); }
.score-circle .pct { font-size: 1.5rem; }
.score-circle .frac { font-size: 0.75rem; }
.domain-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-top: 16px; }
.domain-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 14px 16px; }
.domain-card .d-head { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
.domain-card .d-pct { font-weight: 700; }
.d-pct.ok { color: var(--ok); } .d-pct.warn { color: var(--warn); } .d-pct.bad { color: var(--bad); }
.bar { background: var(--border); height: 9px; border-radius: 5px; overflow: hidden; margin-top: 8px; }
.bar > div { height: 100%; transition: width 0.4s ease; }
.bar .fill-ok { background: var(--ok); } .bar .fill-warn { background: var(--warn); } .bar .fill-bad { background: var(--bad); }
.mistake-group { background: var(--bad-bg); border: 1px solid var(--bad); border-radius: var(--radius-sm); padding: 14px 16px; margin-bottom: 12px; }
.mistake-group h4 { color: var(--bad); margin-bottom: 6px; font-size: 0.95rem; }
.mistake-item { background: var(--surface); border-left: 4px solid var(--bad); padding: 10px 14px; margin-top: 8px; border-radius: 4px; }
.mistake-item .m-head { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; }
.mistake-item .m-snippet { font-size: 0.88rem; color: var(--text-muted); margin-top: 4px; }
.all-correct { padding: 14px 16px; background: var(--ok-bg); color: var(--ok); border-radius: var(--radius-sm); font-weight: 600; }

/* review mode */
.review-banner {
  background: var(--primary); color: var(--on-primary); border-radius: var(--radius);
  padding: 16px 22px; margin-bottom: 22px;
}
.review-banner strong { display: block; font-size: 1.05rem; }
.review-banner span { font-size: 0.88rem; }
.review-domain-head {
  font-size: 1.15rem; margin: 28px 0 14px; padding-bottom: 8px; border-bottom: 2px solid var(--accent);
}
.review-domain-head .rd-meta { font-size: 0.82rem; font-weight: 400; color: var(--text-muted); margin-left: 8px; }
.q-card.gate2 { border-color: var(--primary); border-left: 5px solid var(--primary); background: var(--primary-soft); }
.meta-line { font-family: var(--mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 12px; overflow-wrap: anywhere; }
.concept-line { font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; }
.judge-line { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; margin-top: 8px; font-size: 0.78rem; }
.judge-line .j-label { font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; font-size: 0.72rem; }
.judge-dim { font-family: var(--mono); padding: 2px 7px; border-radius: 4px; background: var(--surface-2); border: 1px solid var(--border); }
.judge-dim.low { background: var(--warn-bg); color: var(--warn); border-color: var(--warn); font-weight: 700; }
.matching-options { margin: 8px 0 12px; display: flex; flex-wrap: wrap; gap: 8px; }
.matching-options .mo { background: var(--surface-2); border: 1px solid var(--border); border-radius: 999px; padding: 4px 12px; font-size: 0.85rem; }

/* footer */
footer {
  position: fixed; bottom: 0; left: 0; right: 0; background: var(--surface);
  border-top: 1px solid var(--border); padding: 12px 20px; display: flex;
  justify-content: space-between; align-items: center; gap: 12px; z-index: 99; flex-wrap: wrap;
}
footer .foot-progress { font-weight: 600; font-size: 0.92rem; }
body.no-footer footer { display: none; }
body.no-footer { padding-bottom: 24px; }

/* modal */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); display: flex;
  justify-content: center; align-items: center; z-index: 1000; opacity: 0;
  pointer-events: none; transition: opacity 0.15s ease; padding: 20px;
}
.modal-overlay.active { opacity: 1; pointer-events: auto; }
.modal-card { background: var(--surface); padding: 26px; border-radius: var(--radius); max-width: 480px; width: 100%; box-shadow: var(--shadow); }
.modal-card h3 { margin-bottom: 10px; }
.modal-card p { color: var(--text-muted); margin-bottom: 20px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 10px; }

@media (max-width: 640px) {
  header { padding: 14px 16px; }
  main { padding: 0 14px; margin-top: 20px; }
  .card, .q-card { padding: 18px 16px; }
  .header-title h1 { font-size: 1.05rem; }
  .domain-grid { grid-template-columns: minmax(0, 1fr); }
  .btn { padding: 10px 14px; }
}
`;

// ===========================================================================
// Runtime script — vanilla, no backticks (this file wraps it in a template
// literal). DOM is built with createElement/textContent, so package text can
// never be interpreted as markup.
// ===========================================================================
const runtimeJs = String.raw`
'use strict';
var DATA = __PAYLOAD__;

/* ---------- grading: replicated from packages/engine/src/score.ts ---------- */
function isAnswered(q, answer) {
  if (answer == null) return false;
  if (q.type === 'single_choice') return typeof answer === 'string' && answer.length > 0;
  if (q.type === 'multiple_response') return Array.isArray(answer) && answer.length === q.select_count;
  if (typeof answer !== 'object' || Array.isArray(answer)) return false;
  return q.scenarios.every(function (s) { return Boolean(answer[s.id]); });
}
function isCorrect(q, answer) {
  if (answer == null) return false;
  if (q.type === 'single_choice') return answer === q.answer;
  if (q.type === 'multiple_response') {
    return Array.isArray(answer) && answer.length === q.answer.length &&
      q.answer.every(function (k) { return answer.indexOf(k) !== -1; });
  }
  if (typeof answer !== 'object' || Array.isArray(answer)) return false;
  return q.scenarios.every(function (s) { return answer[s.id] === q.answer[s.id]; });
}
function gradeAttempt(paper, answers, manifest) {
  var totalItems = paper.length;
  var totalCorrect = paper.filter(function (q) { return isCorrect(q, answers[q.id]); }).length;
  var pct = totalItems === 0 ? 0 : Math.round((totalCorrect / totalItems) * 100);
  var passed = pct >= manifest.exam.pass_threshold_pct;
  var perDomain = [];
  manifest.domains.forEach(function (d) {
    var items = paper.filter(function (q) { return q.domain === d.id; });
    if (items.length === 0) return;
    var correct = items.filter(function (q) { return isCorrect(q, answers[q.id]); }).length;
    perDomain.push({ domainId: d.id, correct: correct, total: items.length, pct: Math.round((correct / items.length) * 100) });
  });
  return { totalCorrect: totalCorrect, totalItems: totalItems, pct: pct, passed: passed, perDomain: perDomain };
}

/* ---------- seeded display shuffle: apps/web/lib/shuffle.ts approach ------- */
function hashString(s) {
  var h = 0x811c9dc5;
  for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}
function mulberry32(seed) {
  var a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function seededOrder(items, seed, salt) {
  var out = items.slice();
  if (seed === null || out.length < 2) return out;
  var rand = mulberry32(hashString(String(seed) + ':' + salt) || 1);
  for (var i = out.length - 1; i > 0; i--) {
    var j = Math.floor(rand() * (i + 1));
    var tmp = out[i]; out[i] = out[j]; out[j] = tmp;
  }
  return out;
}
function newShuffleSeed() {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0];
  }
  return Math.floor(Math.random() * 0x100000000);
}

/* ---------- state (localStorage, namespaced) ------------------------------- */
var STORE_KEY = 'mockka-export.' + DATA.slug + '.v1';
var storageOk = true;
try { localStorage.setItem(STORE_KEY + '.probe', '1'); localStorage.removeItem(STORE_KEY + '.probe'); }
catch (e) { storageOk = false; }

function freshState() {
  return { answers: {}, submitted: false, seed: newShuffleSeed(), timed: false, startedAt: null };
}
function loadState() {
  if (!storageOk) return freshState();
  try {
    var raw = localStorage.getItem(STORE_KEY);
    if (!raw) return freshState();
    var s = JSON.parse(raw);
    if (!s || typeof s !== 'object' || typeof s.answers !== 'object') return freshState();
    if (typeof s.seed !== 'number') s.seed = newShuffleSeed();
    return s;
  } catch (e) { return freshState(); }
}
function saveState() {
  if (!storageOk) return;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* full/denied: keep going */ }
}
var state = loadState();

/* ---------- data prep ------------------------------------------------------ */
var manifest = DATA.manifest;
var byId = {};
DATA.questions.forEach(function (q) { byId[q.id] = q; });
var paper = DATA.formItems.map(function (id) { return byId[id]; }); // selection order
var formSet = {};
DATA.formItems.forEach(function (id, i) { formSet[id] = i + 1; });
var gate2Set = {};
DATA.gate2Ids.forEach(function (id) { gate2Set[id] = true; });
var domainTitle = {};
manifest.domains.forEach(function (d) { domainTitle[d.id] = d.title; });
var timeLimitMs = (manifest.exam.time_limit_minutes || 0) * 60 * 1000;

/* ---------- tiny DOM helpers ---------------------------------------------- */
function el(tag, cls, text) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}
function chip(cls, text) { return el('span', 'chip ' + cls, text); }
function byIdEl(id) { return document.getElementById(id); }
function cardDomId(qid) { return 'qcard-' + qid.replace(/\./g, '-'); }

/* ---------- header / chrome ------------------------------------------------ */
var currentTab = 'intro';
var reviewMode = false;

function updateProgress() {
  var count = paper.filter(function (q) { return isAnswered(q, state.answers[q.id]); }).length;
  byIdEl('progressBadge').textContent = 'Answered ' + count + ' / ' + paper.length;
  byIdEl('footProgress').textContent = 'Answered ' + count + ' of ' + paper.length + ' questions';
}
function updateChrome() {
  document.body.classList.toggle('no-footer', reviewMode || currentTab === 'intro');
  byIdEl('candidateRoot').hidden = reviewMode;
  byIdEl('reviewRoot').hidden = !reviewMode;
  var toggle = byIdEl('reviewToggle');
  toggle.setAttribute('aria-pressed', reviewMode ? 'true' : 'false');
  toggle.textContent = reviewMode ? 'Exit Gate 2 review' : 'Gate 2 review';
  byIdEl('submitBtn').textContent = state.submitted ? 'View results dashboard' : 'Submit exam and reveal answers';
}
function switchTab(tab) {
  currentTab = tab;
  ['intro', 'exam', 'dash'].forEach(function (t) {
    byIdEl('tab-' + t).setAttribute('aria-selected', t === tab ? 'true' : 'false');
    byIdEl('view-' + t).hidden = t !== tab;
  });
  if (tab === 'exam') maybeStartTimer();
  if (tab === 'dash') renderDashboard();
  updateChrome();
}
function setReviewMode(on) {
  reviewMode = on;
  if (on && !byIdEl('reviewRoot').hasChildNodes()) renderReview();
  updateChrome();
  window.scrollTo(0, 0);
}

/* ---------- timer ---------------------------------------------------------- */
var timerInterval = null;
function maybeStartTimer() {
  if (!state.timed || state.submitted || timeLimitMs === 0) return;
  if (!state.startedAt) { state.startedAt = Date.now(); saveState(); }
  if (!timerInterval) timerInterval = setInterval(timerTick, 1000);
  timerTick();
}
function timerTick() {
  var badge = byIdEl('timerBadge');
  if (!state.timed || !state.startedAt || state.submitted) {
    badge.hidden = true;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    return;
  }
  var left = timeLimitMs - (Date.now() - state.startedAt);
  if (left <= 0) {
    badge.hidden = true;
    clearInterval(timerInterval); timerInterval = null;
    executeSubmission();
    showModal('Time expired', 'The ' + manifest.exam.time_limit_minutes +
      '-minute limit is up. Your attempt was submitted automatically.', null, 'Ok');
    return;
  }
  var mins = Math.floor(left / 60000);
  var secs = Math.floor((left % 60000) / 1000);
  badge.hidden = false;
  badge.textContent = 'Time left ' + mins + ':' + (secs < 10 ? '0' : '') + secs;
  badge.classList.toggle('timer-low', left < 5 * 60 * 1000);
}

/* ---------- intro tab ------------------------------------------------------ */
function renderIntro() {
  var root = byIdEl('view-intro');
  root.textContent = '';
  var card = el('div', 'card');
  card.appendChild(el('h2', null, 'Exam overview'));

  // Intro page block (methodology/06-provenance-publishing.md#intro) — same
  // content and order as the player's intro tab.
  var intro = manifest.intro || null;
  if (intro) {
    card.appendChild(el('p', 'intro-copy', intro.about));
    card.appendChild(el('h3', null, 'Who this certification is for'));
    card.appendChild(el('p', 'intro-copy', intro.audience));
  }

  var facts = el('div', 'fact-grid');
  [['Scored items', String(manifest.exam.item_count)],
   ['Time limit', manifest.exam.time_limit_minutes + ' min (optional)'],
   ['Pass threshold', manifest.exam.pass_threshold_pct + '%'],
   ['Form', DATA.formId + ' of ' + DATA.questions.length + '-item bank']
  ].forEach(function (f) {
    var box = el('div', 'fact');
    box.appendChild(el('div', 'k', f[0]));
    box.appendChild(el('div', 'v', f[1]));
    facts.appendChild(box);
  });
  card.appendChild(facts);

  card.appendChild(el('h3', null, 'Domains and weights'));
  var table = el('table', 'domain-table');
  var thead = el('thead'); var hr = el('tr');
  ['Domain', 'Weight', 'Items on this form'].forEach(function (h, i) {
    hr.appendChild(el('th', i > 0 ? 'num' : null, h));
  });
  thead.appendChild(hr); table.appendChild(thead);
  var tbody = el('tbody');
  manifest.domains.forEach(function (d) {
    var tr = el('tr');
    tr.appendChild(el('td', null, d.title));
    tr.appendChild(el('td', 'num', d.weight_pct + '%'));
    tr.appendChild(el('td', 'num', String(d.exam_items)));
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  card.appendChild(table);

  if (intro) {
    card.appendChild(el('h3', null, 'What this mock provides'));
    var mats = el('ul', 'intro-list');
    intro.materials.forEach(function (m) {
      var mLi = el('li');
      mLi.appendChild(el('strong', null, m.title + '.'));
      mLi.appendChild(document.createTextNode(' ' + m.description));
      mats.appendChild(mLi);
    });
    card.appendChild(mats);

    card.appendChild(el('h3', null, 'Official resources'));
    var resources = el('ul', 'intro-list');
    intro.official_resources.forEach(function (r) {
      var rLi = el('li');
      var link = el('a', null, r.label);
      link.href = r.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      rLi.appendChild(link);
      resources.appendChild(rLi);
    });
    card.appendChild(resources);
  }

  if (manifest.format_coverage) {
    var cov = el('div', 'callout callout-warn');
    cov.appendChild(el('div', 'callout-title', 'Format coverage disclosure'));
    cov.appendChild(el('div', 'callout-body', manifest.format_coverage));
    card.appendChild(cov);
  }
  if (intro) {
    // The disclaimer covers the NDA/independence ground (06#intro), so the raw
    // nda_statement callout is skipped — no duplicated fine print.
    var disc = el('div', 'callout callout-warn');
    disc.appendChild(el('div', 'callout-title', 'Disclaimer'));
    disc.appendChild(el('div', 'callout-body', intro.disclaimer));
    card.appendChild(disc);
  } else if (manifest.provenance && manifest.provenance.nda_statement) {
    var nda = el('div', 'callout callout-muted');
    nda.appendChild(el('div', 'callout-title', 'Provenance and independence'));
    nda.appendChild(el('div', null, manifest.provenance.nda_statement));
    card.appendChild(nda);
  }
  if (!storageOk) {
    var warn = el('div', 'callout callout-warn');
    warn.appendChild(el('div', 'callout-title', 'Persistence unavailable'));
    warn.appendChild(el('div', 'callout-body',
      'This browser blocks localStorage for file:// pages, so answers will not survive a refresh.'));
    card.appendChild(warn);
  }

  var timedRow = el('label', 'timed-row');
  var timedBox = el('input');
  timedBox.type = 'checkbox';
  timedBox.checked = state.timed;
  timedBox.disabled = state.submitted || Boolean(state.startedAt);
  timedBox.addEventListener('change', function () {
    state.timed = timedBox.checked; saveState();
  });
  timedRow.appendChild(timedBox);
  timedRow.appendChild(el('span', null, 'Timed attempt: ' + manifest.exam.time_limit_minutes +
    ' minutes, counting from when you first open the exam tab. Auto-submits at zero. ' +
    'Leave unchecked for an untimed sitting.'));
  card.appendChild(timedRow);

  var startRow = el('div', 'start-row');
  var startBtn = el('button', 'btn', state.submitted ? 'Review your graded attempt' : 'Go to the exam');
  startBtn.addEventListener('click', function () { switchTab('exam'); });
  startRow.appendChild(startBtn);
  card.appendChild(startRow);
  root.appendChild(card);
}

/* ---------- exam tab ------------------------------------------------------- */
function renderFilterBar() {
  var dSel = byIdEl('domainFilter');
  dSel.textContent = '';
  var optAll = el('option', null, 'All domains (' + paper.length + ')');
  optAll.value = 'ALL';
  dSel.appendChild(optAll);
  manifest.domains.forEach(function (d) {
    var n = paper.filter(function (q) { return q.domain === d.id; }).length;
    var o = el('option', null, d.title + ' (' + n + ')');
    o.value = d.id;
    dSel.appendChild(o);
  });
}

function optionRow(q, letter, text, mode) {
  // mode: 'sc' | 'mr'; renders one selectable option row
  var label = el('label', 'option' + (state.submitted ? ' disabled' : ''));
  var input = el('input');
  input.type = mode === 'sc' ? 'radio' : 'checkbox';
  input.name = 'q-' + q.id;
  input.value = letter;
  input.disabled = state.submitted;
  var current = state.answers[q.id];
  if (mode === 'sc') input.checked = current === letter;
  else input.checked = Array.isArray(current) && current.indexOf(letter) !== -1;
  if (state.submitted) {
    var keys = mode === 'sc' ? [q.answer] : q.answer;
    var picked = input.checked;
    if (keys.indexOf(letter) !== -1) label.classList.add('is-key');
    else if (picked) label.classList.add('is-miss');
  }
  input.addEventListener('change', function () {
    if (mode === 'sc') onSingleChoice(q, letter);
    else onMultiResponse(q, letter, input);
  });
  var body = el('div');
  body.appendChild(el('span', 'letter', letter + '. '));
  body.appendChild(document.createTextNode(text));
  label.appendChild(input);
  label.appendChild(body);
  return label;
}

function scenarioRow(q, sc, displayOptions) {
  var row = el('div', 'scenario');
  row.appendChild(el('div', 'sc-text', sc.text));
  var sel = el('select');
  sel.disabled = state.submitted;
  sel.setAttribute('aria-label', 'Answer for scenario: ' + sc.text);
  var placeholder = el('option', null, '-- Select an option --');
  placeholder.value = '';
  sel.appendChild(placeholder);
  var current = state.answers[q.id] || {};
  displayOptions.forEach(function (opt) {
    var o = el('option', null, opt);
    o.value = opt;
    if (current[sc.id] === opt) o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener('change', function () { onScenarioMatch(q, sc.id, sel.value); });
  row.appendChild(sel);
  if (state.submitted) {
    var pick = current[sc.id];
    var good = pick === q.answer[sc.id];
    row.classList.add(good ? 'is-key' : 'is-miss');
    var verdict = el('div', 'sc-verdict ' + (good ? 'ok' : 'bad'),
      good ? 'Correct: ' + q.answer[sc.id]
           : 'Your pick: ' + (pick || 'none') + ' - key: ' + q.answer[sc.id]);
    row.appendChild(verdict);
  }
  return row;
}

function rationaleBlock(q, forReview) {
  var box = el('div', 'rationale');
  var keyText;
  if (q.type === 'single_choice') keyText = q.answer;
  else if (q.type === 'multiple_response') keyText = q.answer.join(', ');
  else keyText = q.scenarios.map(function (s) { return s.id + ': ' + q.answer[s.id]; }).join(' · ');
  box.appendChild(el('div', 'r-key', 'Key: ' + keyText));
  if (q.rationale && q.rationale.correct) box.appendChild(el('div', 'r-correct', q.rationale.correct));
  if (q.rationale && q.rationale.distractors) {
    var list = el('div', 'r-distractors');
    Object.keys(q.rationale.distractors).sort().forEach(function (letter) {
      var row = el('div', 'r-row');
      row.appendChild(el('span', 'r-letter', letter));
      if (forReview && q.distractor_patterns && q.distractor_patterns[letter]) {
        row.appendChild(el('span', 'r-pattern', '[' + q.distractor_patterns[letter] + ']'));
      }
      row.appendChild(el('span', null, q.rationale.distractors[letter]));
      list.appendChild(row);
    });
    box.appendChild(list);
  }
  return box;
}

function formatChip(q) {
  if (q.type === 'single_choice') return chip('chip-format', 'Single choice');
  if (q.type === 'multiple_response') return chip('chip-format', 'Select ' + q.select_count);
  return chip('chip-format', 'Scenario matching');
}

function renderExam() {
  var container = byIdEl('questions');
  container.textContent = '';
  var dFilter = byIdEl('domainFilter').value;
  var sFilter = byIdEl('statusFilter').value;

  paper.forEach(function (q, idx) {
    if (dFilter !== 'ALL' && q.domain !== dFilter) return;
    var answered = isAnswered(q, state.answers[q.id]);
    if (sFilter === 'ANSWERED' && !answered) return;
    if (sFilter === 'UNANSWERED' && answered) return;

    var card = el('article', 'q-card' + (answered ? ' answered' : ''));
    card.id = cardDomId(q.id);
    var graded = state.submitted ? isCorrect(q, state.answers[q.id]) : null;
    if (state.submitted) card.classList.add(graded ? 'graded-correct' : 'graded-incorrect');

    var head = el('div', 'q-head');
    var left = el('div', 'q-head-left');
    left.appendChild(el('span', 'q-num', 'Q' + (idx + 1)));
    left.appendChild(el('span', 'q-id', q.id));
    left.appendChild(chip('chip-domain', domainTitle[q.domain] || q.domain));
    left.appendChild(formatChip(q));
    head.appendChild(left);
    if (state.submitted) head.appendChild(chip(graded ? 'chip-ok' : 'chip-bad', graded ? 'Correct' : 'Incorrect'));
    card.appendChild(head);
    card.appendChild(el('div', 'q-text', q.question));

    if (q.type === 'single_choice' || q.type === 'multiple_response') {
      var mode = q.type === 'single_choice' ? 'sc' : 'mr';
      var letters = seededOrder(Object.keys(q.options), state.seed, q.id);
      var opts = el('div', 'options');
      letters.forEach(function (letter) { opts.appendChild(optionRow(q, letter, q.options[letter], mode)); });
      card.appendChild(opts);
      if (mode === 'mr' && !state.submitted) {
        var hint = el('div', 'mr-hint', '');
        hint.id = 'mr-hint-' + cardDomId(q.id);
        card.appendChild(hint);
      }
    } else {
      var displayOptions = seededOrder(q.matching_options, state.seed, q.id); // same salt: one order per item
      var wrap = el('div');
      q.scenarios.forEach(function (sc) { wrap.appendChild(scenarioRow(q, sc, displayOptions)); });
      card.appendChild(wrap);
    }

    if (state.submitted) card.appendChild(rationaleBlock(q, false));
    container.appendChild(card);
  });
}

/* ---------- answer handlers ------------------------------------------------ */
function onSingleChoice(q, letter) {
  if (state.submitted) return;
  state.answers[q.id] = letter;
  saveState(); updateProgress();
  var card = byIdEl(cardDomId(q.id));
  if (card) card.classList.add('answered');
}
function onMultiResponse(q, letter, input) {
  if (state.submitted) return;
  var current = Array.isArray(state.answers[q.id]) ? state.answers[q.id].slice() : [];
  var at = current.indexOf(letter);
  if (at !== -1) current.splice(at, 1);
  else if (current.length < q.select_count) current.push(letter);
  else {
    input.checked = false; // refuse the extra pick (select_count enforcement)
    var hint = byIdEl('mr-hint-' + cardDomId(q.id));
    if (hint) {
      hint.textContent = 'Select exactly ' + q.select_count + ' - deselect one first.';
      setTimeout(function () { hint.textContent = ''; }, 2500);
    }
    return;
  }
  state.answers[q.id] = current;
  saveState(); updateProgress();
  var card = byIdEl(cardDomId(q.id));
  if (card) card.classList.toggle('answered', isAnswered(q, current));
}
function onScenarioMatch(q, scenarioId, value) {
  if (state.submitted) return;
  var current = state.answers[q.id];
  if (!current || typeof current !== 'object' || Array.isArray(current)) current = {};
  if (value) current[scenarioId] = value; else delete current[scenarioId];
  state.answers[q.id] = current;
  saveState(); updateProgress();
  var card = byIdEl(cardDomId(q.id));
  if (card) card.classList.toggle('answered', isAnswered(q, current));
}

/* ---------- submit / reset ------------------------------------------------- */
function submitExam() {
  if (state.submitted) { switchTab('dash'); return; }
  var unanswered = paper.filter(function (q) { return !isAnswered(q, state.answers[q.id]); }).length;
  var body = unanswered > 0
    ? 'You have ' + unanswered + ' unanswered question' + (unanswered === 1 ? '' : 's') +
      '. Submit now and reveal the answers and rationales? Unanswered items grade as incorrect.'
    : 'All ' + paper.length + ' questions are answered. Submit and reveal the answers and rationales?';
  showModal('Submit exam', body, function () { executeSubmission(); switchTab('dash'); }, 'Submit');
}
function executeSubmission() {
  state.submitted = true;
  saveState();
  closeModal();
  renderExam();
  renderIntro();
  timerTick();
  updateChrome();
}
function confirmReset() {
  showModal('Reset attempt',
    'This clears all saved answers, the grade, and the timer for this exam, and mints a new option-shuffle seed. It cannot be undone.',
    function () {
      state = freshState();
      if (storageOk) { try { localStorage.removeItem(STORE_KEY); } catch (e) {} }
      saveState();
      closeModal();
      renderIntro(); renderExam(); updateProgress(); timerTick(); updateChrome();
      switchTab('intro');
    }, 'Reset');
}

/* ---------- dashboard ------------------------------------------------------ */
function renderDashboard() {
  var root = byIdEl('view-dash');
  root.textContent = '';
  var card = el('div', 'card');
  card.appendChild(el('h2', null, 'Results dashboard'));

  if (!state.submitted) {
    var prompt = el('div', 'callout callout-muted');
    prompt.appendChild(el('div', 'callout-title', 'Not graded yet'));
    prompt.appendChild(el('div', null,
      'Submit the exam to see your overall score, the per-domain breakdown, and every rationale.'));
    card.appendChild(prompt);
    var btnRow = el('div', 'start-row');
    var b = el('button', 'btn', 'Submit current answers');
    b.addEventListener('click', submitExam);
    btnRow.appendChild(b);
    card.appendChild(btnRow);
    root.appendChild(card);
    return;
  }

  var report = gradeAttempt(paper, state.answers, manifest);
  var row = el('div', 'score-row');
  var circle = el('div', 'score-circle ' + (report.passed ? 'pass' : 'fail'));
  circle.appendChild(el('span', 'pct', report.pct + '%'));
  circle.appendChild(el('span', 'frac', report.totalCorrect + ' / ' + report.totalItems));
  row.appendChild(circle);
  var summary = el('div');
  summary.appendChild(el('h3', null, report.passed ? 'Result: PASS' : 'Result: below the pass threshold'));
  summary.appendChild(el('div', null, 'Pass threshold: ' + manifest.exam.pass_threshold_pct +
    '% (raw-score proxy; percentages round per the engine rule).'));
  row.appendChild(summary);
  card.appendChild(row);

  card.appendChild(el('h3', null, 'Per-domain performance'));
  var grid = el('div', 'domain-grid');
  report.perDomain.forEach(function (d) {
    var thr = manifest.exam.pass_threshold_pct;
    var tone = d.pct >= thr ? 'ok' : d.pct >= 60 ? 'warn' : 'bad';
    var dc = el('div', 'domain-card');
    var head = el('div', 'd-head');
    head.appendChild(el('strong', null, domainTitle[d.domainId] || d.domainId));
    head.appendChild(el('span', 'd-pct ' + tone, d.pct + '%'));
    dc.appendChild(head);
    dc.appendChild(el('div', null, d.correct + ' of ' + d.total + ' correct'));
    var bar = el('div', 'bar');
    var fill = el('div', 'fill-' + tone);
    fill.style.width = d.pct + '%';
    bar.appendChild(fill);
    dc.appendChild(bar);
    grid.appendChild(dc);
  });
  card.appendChild(grid);

  card.appendChild(el('h3', null, 'Missed questions'));
  var missed = paper.filter(function (q) { return !isCorrect(q, state.answers[q.id]); });
  if (missed.length === 0) {
    card.appendChild(el('div', 'all-correct', 'Perfect score - nothing missed.'));
  } else {
    manifest.domains.forEach(function (d) {
      var misses = missed.filter(function (q) { return q.domain === d.id; });
      if (misses.length === 0) return;
      var group = el('div', 'mistake-group');
      group.appendChild(el('h4', null, d.title + ' - ' + misses.length + ' missed'));
      misses.forEach(function (q) {
        var item = el('div', 'mistake-item');
        var head = el('div', 'm-head');
        head.appendChild(el('strong', null, 'Q' + formSet[q.id] + ' (' + q.id + ')'));
        var jump = el('button', 'btn btn-quiet', 'Review question');
        jump.addEventListener('click', function () { jumpToQuestion(q.id); });
        head.appendChild(jump);
        item.appendChild(head);
        item.appendChild(el('div', 'm-snippet', q.question.slice(0, 140) + (q.question.length > 140 ? '...' : '')));
        group.appendChild(item);
      });
      card.appendChild(group);
    });
  }
  root.appendChild(card);
}
function jumpToQuestion(qid) {
  byIdEl('domainFilter').value = 'ALL';
  byIdEl('statusFilter').value = 'ALL';
  switchTab('exam');
  renderExam();
  var target = byIdEl(cardDomId(qid)); // look up AFTER the re-render, scroll synchronously
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ---------- Gate 2 review mode --------------------------------------------- */
function reviewOptionRow(q, letter) {
  var isKey = q.type === 'single_choice' ? q.answer === letter : q.answer.indexOf(letter) !== -1;
  var rowEl = el('div', 'option disabled' + (isKey ? ' is-key' : ''));
  var body = el('div');
  body.appendChild(el('span', 'letter', letter + '. '));
  body.appendChild(document.createTextNode(q.options[letter]));
  rowEl.appendChild(body);
  if (isKey) rowEl.appendChild(chip('chip-ok', 'Key'));
  return rowEl;
}
function renderReview() {
  var root = byIdEl('reviewRoot');
  root.textContent = '';

  var banner = el('div', 'review-banner');
  banner.appendChild(el('strong', null, 'Gate 2 review - full bank with keys, rationales, and metadata'));
  banner.appendChild(el('span', null,
    DATA.questions.length + ' bank items - ' + DATA.formItems.length + ' on ' + DATA.formId +
    ', ' + (DATA.questions.length - DATA.formItems.length) + ' reserves - ' +
    DATA.gate2Ids.length + ' deep-read sample items highlighted' +
    (DATA.gate2Ids.length ? ' (' + DATA.gate2Ids.join(', ') + ')' : '') +
    (DATA.judgeScores ? ' - round-2 judge scores joined' : '') + '.'));
  root.appendChild(banner);

  manifest.domains.forEach(function (d) {
    var items = DATA.questions.filter(function (q) { return q.domain === d.id; });
    if (items.length === 0) return;
    var head = el('h2', 'review-domain-head', d.title);
    head.appendChild(el('span', 'rd-meta',
      d.weight_pct + '% weight - ' + items.length + ' bank / ' + d.exam_items + ' form'));
    root.appendChild(head);

    items.forEach(function (q) {
      var isGate2 = Boolean(gate2Set[q.id]);
      var card = el('article', 'q-card' + (isGate2 ? ' gate2' : ''));
      card.id = 'review-' + cardDomId(q.id);

      var headRow = el('div', 'q-head');
      var left = el('div', 'q-head-left');
      left.appendChild(el('span', 'q-num', q.id));
      if (formSet[q.id]) left.appendChild(chip('chip-form', DATA.formId + ' - Q' + formSet[q.id]));
      else left.appendChild(chip('chip-reserve', 'Reserve'));
      left.appendChild(formatChip(q));
      headRow.appendChild(left);
      if (isGate2) headRow.appendChild(chip('chip-gate2', 'Gate 2 sample'));
      card.appendChild(headRow);

      card.appendChild(el('div', 'q-text', q.question));

      if (q.type === 'scenario_matching') {
        var mo = el('div', 'matching-options');
        q.matching_options.forEach(function (opt) { mo.appendChild(el('span', 'mo', opt)); });
        card.appendChild(mo);
        q.scenarios.forEach(function (sc) {
          var row = el('div', 'scenario is-key');
          row.appendChild(el('div', 'sc-text', sc.text));
          row.appendChild(el('div', 'sc-verdict ok', 'Key: ' + q.answer[sc.id]));
          card.appendChild(row);
        });
      } else {
        var opts = el('div', 'options');
        Object.keys(q.options).sort().forEach(function (letter) { opts.appendChild(reviewOptionRow(q, letter)); });
        card.appendChild(opts);
      }

      card.appendChild(rationaleBlock(q, true));

      var patterns = q.distractor_patterns
        ? Object.keys(q.distractor_patterns).sort().map(function (k) { return k + '=' + q.distractor_patterns[k]; }).join(' ')
        : 'n/a';
      card.appendChild(el('div', 'meta-line',
        q.id + ' - ' + q.primary_concept +
        (q.secondary_concepts && q.secondary_concepts.length ? ' (+' + q.secondary_concepts.join(', ') + ')' : '') +
        ' - theme ' + q.theme + ' - vertical: ' + q.vertical + ' - patterns: ' + patterns));
      if (DATA.conceptStatements[q.primary_concept]) {
        card.appendChild(el('div', 'concept-line', q.primary_concept + ': ' + DATA.conceptStatements[q.primary_concept]));
      }
      if (DATA.judgeScores && DATA.judgeScores[q.id]) {
        var jl = el('div', 'judge-line');
        jl.appendChild(el('span', 'j-label', 'Judge r2'));
        var scores = DATA.judgeScores[q.id];
        Object.keys(scores).sort().forEach(function (dim) {
          var v = scores[dim];
          jl.appendChild(el('span', 'judge-dim' + (v <= 3 ? ' low' : ''), 'd' + dim + ':' + v));
        });
        card.appendChild(jl);
      }
      root.appendChild(card);
    });
  });
}

/* ---------- modal ---------------------------------------------------------- */
function showModal(title, body, onConfirm, confirmLabel) {
  byIdEl('modalTitle').textContent = title;
  byIdEl('modalBody').textContent = body;
  var confirmBtn = byIdEl('modalConfirm');
  var cancelBtn = byIdEl('modalCancel');
  confirmBtn.textContent = confirmLabel || 'Confirm';
  cancelBtn.hidden = !onConfirm;
  confirmBtn.onclick = onConfirm || closeModal;
  byIdEl('modalOverlay').classList.add('active');
  confirmBtn.focus();
}
function closeModal() { byIdEl('modalOverlay').classList.remove('active'); }

/* ---------- boot ----------------------------------------------------------- */
byIdEl('tab-intro').addEventListener('click', function () { switchTab('intro'); });
byIdEl('tab-exam').addEventListener('click', function () { switchTab('exam'); });
byIdEl('tab-dash').addEventListener('click', function () { switchTab('dash'); });
byIdEl('reviewToggle').addEventListener('click', function () { setReviewMode(!reviewMode); });
byIdEl('resetBtn').addEventListener('click', confirmReset);
byIdEl('submitBtn').addEventListener('click', submitExam);
byIdEl('domainFilter').addEventListener('change', renderExam);
byIdEl('statusFilter').addEventListener('change', renderExam);
byIdEl('modalCancel').addEventListener('click', closeModal);
byIdEl('modalOverlay').addEventListener('click', function (e) { if (e.target === byIdEl('modalOverlay')) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

renderFilterBar();
renderIntro();
renderExam();
updateProgress();
updateChrome();
switchTab('intro');
if (state.timed && state.startedAt && !state.submitted) maybeStartTimer();
`;

// ===========================================================================
// Assemble the document
// ===========================================================================
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const html = `<!DOCTYPE html>
<html lang="${esc(manifest.style?.locale || 'en')}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(manifest.title)} — Mockka standalone exam</title>
<style>
/* Design tokens — extracted at build time from apps/web/app/globals.css (the
   design source of truth; WCAG-contrast-tested there). Do not edit here. */
${tokenBlock}
${componentCss}
</style>
</head>
<body>

<header>
  <div class="header-inner">
    <div class="header-title">
      <h1>${esc(manifest.title)}</h1>
      <p>Mockka standalone export — package v${esc(manifest.version)} (${esc(manifest.status)}) — generated ${payload.generatedAt} by tools/export-exam.mjs</p>
    </div>
    <div class="header-actions">
      <span class="stat-badge" id="progressBadge">Answered 0 / ${form.items.length}</span>
      <span class="stat-badge" id="timerBadge" hidden></span>
      <button class="btn btn-ghost" id="resetBtn" type="button">Reset attempt</button>
      <button class="btn btn-review" id="reviewToggle" type="button" aria-pressed="false">Gate 2 review</button>
    </div>
  </div>
</header>

<main>
  <div id="candidateRoot">
    <nav class="tabs" role="tablist" aria-label="Exam sections">
      <button class="tab-btn" id="tab-intro" role="tab" aria-selected="true" type="button">Overview</button>
      <button class="tab-btn" id="tab-exam" role="tab" aria-selected="false" type="button">Exam</button>
      <button class="tab-btn" id="tab-dash" role="tab" aria-selected="false" type="button">Dashboard</button>
    </nav>
    <section id="view-intro" role="tabpanel" aria-label="Overview"></section>
    <section id="view-exam" role="tabpanel" aria-label="Exam" hidden>
      <div class="filter-bar">
        <label for="domainFilter">Domain</label>
        <select id="domainFilter" class="filter-select"></select>
        <label for="statusFilter">Status</label>
        <select id="statusFilter" class="filter-select">
          <option value="ALL">All questions</option>
          <option value="ANSWERED">Answered</option>
          <option value="UNANSWERED">Unanswered</option>
        </select>
      </div>
      <div id="questions"></div>
    </section>
    <section id="view-dash" role="tabpanel" aria-label="Dashboard" hidden></section>
  </div>
  <div id="reviewRoot" hidden></div>
</main>

<footer>
  <span class="foot-progress" id="footProgress">Answered 0 of ${form.items.length} questions</span>
  <button class="btn" id="submitBtn" type="button">Submit exam and reveal answers</button>
</footer>

<div class="modal-overlay" id="modalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal-card">
    <h3 id="modalTitle">Confirm</h3>
    <p id="modalBody"></p>
    <div class="modal-actions">
      <button class="btn btn-quiet" id="modalCancel" type="button">Cancel</button>
      <button class="btn" id="modalConfirm" type="button">Confirm</button>
    </div>
  </div>
</div>

<script>
${runtimeJs.replace('__PAYLOAD__', payloadJs)}
</script>
</body>
</html>
`;

// --- write -----------------------------------------------------------------
const outAbs = outPath
  ? isAbsolute(outPath) ? outPath : resolve(process.cwd(), outPath)
  : join(repoRoot, 'exports', `${slug}.html`);
mkdirSync(dirname(outAbs), { recursive: true });
writeFileSync(outAbs, html);

const reserves = questions.length - form.items.length;
console.log(`export-exam: ${slug} — bank ${questions.length}, form ${form.id} ${form.items.length}, reserves ${reserves}`);
console.log(`export-exam: Gate 2 sample (${gate2Source}): ${gate2Ids.length} items${gate2Ids.length ? ' — ' + gate2Ids.join(', ') : ''}`);
console.log(`export-exam: judge scores ${judgeScores ? `joined for ${Object.keys(judgeScores).length} items` : 'not joined (shape mismatch or absent)'}`);
console.log(outAbs);
