#!/usr/bin/env node
/**
 * S5 advisory cross-solve (methodology/05-eval-rubric.md).
 *
 * Sits the keyless exam using a DIFFERENT model family, then diffs against the
 * answer key. The point is not accuracy — it is decorrelation: our author and
 * our examiner share weights, so a confident shared error is invisible to both.
 * Any item where Codex and the key disagree goes to the Gate 2 human sample.
 *
 * Advisory by design: never blocks a gate, never overrides the examiner.
 *
 * Run:  node tools/codex-crosssolve.mjs <slug> [--batch 10] [--bank]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const slug = argv.find((a) => !a.startsWith('--'));
if (!slug) {
  console.error('usage: node tools/codex-crosssolve.mjs <slug> [--batch N] [--bank]');
  process.exit(2);
}
const batchSize = Number(argv[argv.indexOf('--batch') + 1]) || 10;
const useBank = argv.includes('--bank');

const dir = join(ROOT, 'content', slug);
const read = (p) => JSON.parse(readFileSync(join(dir, p), 'utf8'));
const bank = read('questions.json').questions ?? [];
const byId = new Map(bank.map((q) => [q.id, q]));

let items = bank;
if (!useBank && existsSync(join(dir, 'selection.json'))) {
  const ids = read('selection.json').forms?.[0]?.items ?? [];
  const form = ids.map((id) => byId.get(id)).filter(Boolean);
  if (form.length) items = form;
}

/** Keyless rendering — the solver must never see answer, patterns or rationale. */
function render(q, n) {
  const lines = [`Q${n}. ${q.question}`];
  if (q.type === 'scenario_matching') {
    lines.push(`Options: ${(q.matching_options ?? []).map((o, i) => `${i + 1}) ${o}`).join('  ')}`);
    for (const s of q.scenarios ?? []) lines.push(`  ${s.id}: ${s.text}`);
    lines.push(`Answer format: ${(q.scenarios ?? []).map((s) => `${s.id}=<option number>`).join(', ')}`);
  } else {
    for (const [k, v] of Object.entries(q.options ?? {})) lines.push(`  ${k}) ${v}`);
    lines.push(
      q.type === 'multiple_response'
        ? `Answer format: exactly ${q.select_count ?? 2} letters, e.g. A,C`
        : 'Answer format: one letter',
    );
  }
  return lines.join('\n');
}

function ask(batch, startIdx) {
  const prompt = [
    'You are sitting a certification practice exam. Answer from subject knowledge.',
    'Reply with ONLY the answers, one per line, formatted exactly as "Q<n>: <answer>".',
    'No explanation, no reasoning, no extra text.',
    '',
    ...batch.map((q, i) => render(q, startIdx + i + 1)),
  ].join('\n');
  try {
    return execFileSync('codex', ['exec', '--skip-git-repo-check', prompt], {
      encoding: 'utf8',
      timeout: 300000,
      maxBuffer: 10 * 1024 * 1024,
    });
  } catch (err) {
    return String(err.stdout ?? '');
  }
}

const parse = (out) => {
  const map = new Map();
  for (const m of out.matchAll(/Q(\d+)\s*[:.]\s*([^\n]+)/g)) map.set(Number(m[1]), m[2].trim());
  return map;
};

const norm = (q, raw) => {
  if (!raw) return null;
  if (q.type === 'single_choice') return (raw.match(/\b([A-E])\b/) ?? [])[1] ?? null;
  if (q.type === 'multiple_response') {
    const ls = [...raw.matchAll(/\b([A-E])\b/g)].map((m) => m[1]);
    return ls.length ? [...new Set(ls)].sort() : null;
  }
  const out = {};
  for (const m of raw.matchAll(/(s\d+)\s*=\s*(\d+)/gi)) {
    const opt = (q.matching_options ?? [])[Number(m[2]) - 1];
    if (opt) out[m[1].toLowerCase()] = opt;
  }
  return Object.keys(out).length ? out : null;
};

const same = (q, a) => {
  if (a == null) return null;
  if (q.type === 'single_choice') return a === q.answer;
  if (q.type === 'multiple_response') {
    return JSON.stringify(a) === JSON.stringify([...(q.answer ?? [])].sort());
  }
  return (q.scenarios ?? []).every((s) => a[s.id] === q.answer?.[s.id]);
};

const results = [];
for (let i = 0; i < items.length; i += batchSize) {
  const batch = items.slice(i, i + batchSize);
  const answers = parse(ask(batch, i));
  batch.forEach((q, j) => {
    const raw = answers.get(i + j + 1) ?? null;
    const a = norm(q, raw);
    results.push({ id: q.id, type: q.type, codex: a, raw, agrees: same(q, a) });
  });
  process.stderr.write(`  ${Math.min(i + batchSize, items.length)}/${items.length}\r`);
}

const answered = results.filter((r) => r.agrees !== null);
const disagree = answered.filter((r) => r.agrees === false);
const unparsed = results.filter((r) => r.agrees === null);

const out = {
  $comment:
    'S5 advisory cross-solve. A different model family sits the keyless exam; disagreements go to the Gate 2 sample. Advisory only — never blocks a gate.',
  slug,
  scope: useBank ? 'bank' : 'form',
  solver: 'codex-cli (ChatGPT auth)',
  items: results.length,
  answered: answered.length,
  agreed: answered.length - disagree.length,
  disagreed: disagree.length,
  unparsed: unparsed.length,
  agreement_rate: answered.length ? +(1 - disagree.length / answered.length).toFixed(3) : null,
  disagreements: disagree.map((r) => ({ id: r.id, type: r.type, codex: r.codex, key: byId.get(r.id)?.answer })),
  results,
};
mkdirSync(join(dir, 'eval'), { recursive: true });
writeFileSync(join(dir, 'eval', 'codex-solve.json'), JSON.stringify(out, null, 2) + '\n');
console.log(
  `\n${slug}: ${out.agreed}/${out.answered} agree (${Math.round((out.agreement_rate ?? 0) * 100)}%), ` +
    `${out.disagreed} disagreements${out.unparsed ? `, ${out.unparsed} unparsed` : ''} → eval/codex-solve.json`,
);
