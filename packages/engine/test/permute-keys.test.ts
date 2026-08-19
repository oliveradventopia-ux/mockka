// tools/permute-keys.mjs — the deterministic key-position rebalancer
// (ADR-0006 §1). Proves the two properties the tool's safety rests on:
// idempotence (same seed → same output, re-run → zero churn) and invariant
// preservation (texts, key semantics, and the option-keyed rationale map are
// byte-untouched; only letters move). Also pins the preflight refusals and,
// against the real ccar-p bank, the no-churn fixed point at the applied seed.

import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
// @ts-expect-error — plain .mjs tool module, no type declarations
import { hasRotationMapping, permuteBank, preflight, verifyInvariants } from '../../../tools/permute-keys.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');

// ------------------------------------------------------------ synthetic bank

function scQuestion(id: string, answer: string): Record<string, unknown> {
  const letters = ['A', 'B', 'C', 'D'];
  const options = Object.fromEntries(letters.map((L) => [L, `${id} option text ${L}`]));
  const rest = letters.filter((L) => L !== answer);
  return {
    id,
    type: 'single_choice',
    question: `Stem for ${id}?`,
    options,
    answer,
    distractor_patterns: Object.fromEntries(rest.map((L, i) => [L, `D0${i + 1}`])),
    rationale: {
      correct: `Why ${options[answer]} is right.`,
      distractors: Object.fromEntries(rest.map((L) => [L, `Why ${options[L]} is wrong.`])),
    },
  };
}

function mrQuestion(id: string, answer: string[]): Record<string, unknown> {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const options = Object.fromEntries(letters.map((L) => [L, `${id} option text ${L}`]));
  const rest = letters.filter((L) => !answer.includes(L));
  return {
    id,
    type: 'multiple_response',
    question: `Stem for ${id}? (Select TWO)`,
    options,
    select_count: 2,
    answer,
    distractor_patterns: Object.fromEntries(rest.map((L, i) => [L, `D0${i + 1}`])),
    rationale: {
      correct: `Why the pair is right.`,
      distractors: Object.fromEntries(rest.map((L) => [L, `Why ${options[L]} is wrong.`])),
    },
  };
}

function smQuestion(id: string): Record<string, unknown> {
  const opts = ['alpha pattern', 'beta pattern', 'gamma pattern', 'delta pattern'];
  return {
    id,
    type: 'scenario_matching',
    question: `Match the scenarios for ${id}.`,
    matching_options: [...opts],
    scenarios: opts.map((_, i) => ({ id: `s${i + 1}`, text: `Scenario ${i + 1}` })),
    // listed-order mapping — the defect the derangement must remove
    answer: Object.fromEntries(opts.map((o, i) => [`s${i + 1}`, o])),
    rationale: { correct: 'Because.' },
  };
}

/** 12 SC all keyed B + 6 MR all {A,B} + 1 listed-order SM — the ccar-p shape. */
function syntheticBank() {
  const questions = [
    ...Array.from({ length: 12 }, (_, i) => scQuestion(`1.${String(i + 1).padStart(2, '0')}`, 'B')),
    ...Array.from({ length: 6 }, (_, i) => mrQuestion(`2.${String(i + 1).padStart(2, '0')}`, ['A', 'B'])),
    smQuestion('3.01'),
  ];
  return { version: '1.0.0', questions };
}

// ------------------------------------------------------------------- tests

test('same seed → identical output (deterministic)', () => {
  const a = permuteBank(syntheticBank(), null, 'seed-x');
  const b = permuteBank(syntheticBank(), null, 'seed-x');
  assert.deepEqual(a.questions, b.questions);
});

test('re-running on its own output is the identity (idempotent, no churn)', () => {
  const once = permuteBank(syntheticBank(), null, 'seed-x');
  const twice = permuteBank({ version: '1.0.0', questions: once.questions }, null, 'seed-x');
  assert.deepEqual(twice.questions, once.questions);
});

test('invariants: texts, key semantics and rationale/pattern maps follow their options', () => {
  const bank = syntheticBank();
  const { questions } = permuteBank(bank, null, 'seed-y');
  assert.deepEqual(verifyInvariants(bank.questions, questions), []);

  for (let i = 0; i < bank.questions.length; i++) {
    const before = bank.questions[i] as Record<string, any>;
    const after = questions[i] as Record<string, any>;
    if (before.type === 'scenario_matching') {
      assert.deepEqual(after.answer, before.answer); // text-keyed, untouched
      continue;
    }
    // the keyed TEXT is preserved even when the letter moved
    const keyTexts = (ans: string | string[], q: Record<string, any>) =>
      (Array.isArray(ans) ? ans : [ans]).map((k) => q.options[k]).sort();
    assert.deepEqual(keyTexts(after.answer, after), keyTexts(before.answer, before));
    // each rationale entry still describes the option text at its letter
    for (const [L, text] of Object.entries(after.rationale.distractors as Record<string, string>)) {
      assert.equal(text, `Why ${after.options[L]} is wrong.`);
    }
  }
});

test('distribution: no letter/set > 30%, SM rotation-free at every offset', () => {
  const { questions } = permuteBank(syntheticBank(), null, 'seed-z');
  const sc = questions.filter((q: any) => q.type === 'single_choice');
  const hist = new Map<string, number>();
  for (const q of sc as any[]) hist.set(q.answer, (hist.get(q.answer) ?? 0) + 1);
  for (const n of hist.values()) assert.ok(n / sc.length <= 0.3);

  const mr = questions.filter((q: any) => q.type === 'multiple_response');
  const sets = new Map<string, number>();
  for (const q of mr as any[]) {
    const k = [...q.answer].sort().join('+');
    sets.set(k, (sets.get(k) ?? 0) + 1);
  }
  for (const n of sets.values()) assert.ok(n / mr.length <= 0.3);

  const sm = questions.find((q: any) => q.type === 'scenario_matching') as any;
  assert.equal(hasRotationMapping(sm, sm.matching_options), false);
});

test('SM with fewer options than scenarios: no listed-order PREFIX at any offset', () => {
  // the ccar-p 5.06 shape — 3 options over 5 scenarios; the exploitable unit
  // is the min(#scenarios, #options) prefix, not the full wrapped sequence
  const opts = ['left', 'middle', 'right'];
  const q: Record<string, any> = {
    id: '9.10',
    type: 'scenario_matching',
    question: 'Match.',
    matching_options: [...opts],
    scenarios: Array.from({ length: 5 }, (_, i) => ({ id: `s${i + 1}`, text: `S${i + 1}` })),
    answer: { s1: 'left', s2: 'middle', s3: 'right', s4: 'left', s5: 'middle' },
    rationale: { correct: 'Because.' },
  };
  assert.equal(hasRotationMapping(q, opts), true); // defective as authored
  const { questions } = permuteBank({ version: '1', questions: [q] }, null, 'seed-q');
  const out = questions[0] as any;
  assert.equal(hasRotationMapping(out, out.matching_options), false);
  for (let k = 0; k < out.matching_options.length; k++) {
    const prefixMaps = out.scenarios
      .slice(0, out.matching_options.length)
      .every((s: any, i: number) => out.answer[s.id] === out.matching_options[(i + k) % out.matching_options.length]);
    assert.equal(prefixMaps, false, `offset ${k} still maps the prefix`);
  }
});

test('preflight refuses letter references, positional options, numeric-ascending sets, broken key maps', () => {
  const letterRef = scQuestion('9.01', 'B') as any;
  letterRef.options.C = 'Both A and B are required';
  assert.match(preflight([letterRef])[0] ?? '', /letter reference/);

  const stemRef = scQuestion('9.05', 'B') as any;
  stemRef.question = 'Which statement, unlike option D, holds?';
  assert.match(preflight([stemRef])[0] ?? '', /letter reference/);

  const positional = scQuestion('9.02', 'B') as any;
  positional.options.D = 'None of the above';
  assert.match(preflight([positional])[0] ?? '', /positional/);

  const numeric = scQuestion('9.03', 'B') as any;
  numeric.options = { A: '10', B: '20', C: '30', D: '40' };
  assert.match(preflight([numeric])[0] ?? '', /numeric-ascending/);

  const broken = scQuestion('9.04', 'B') as any;
  delete broken.distractor_patterns.C;
  assert.match(preflight([broken])[0] ?? '', /distractor_patterns/);

  // clean bank → no findings
  assert.deepEqual(preflight(syntheticBank().questions), []);
});

test('preflight refusal aborts permuteBank without output', () => {
  const bank = syntheticBank();
  (bank.questions[0] as any).options.C = 'All of the above';
  assert.throws(() => permuteBank(bank, null, 'seed-x'), /preflight refused/);
});

test('ccar-p: committed bank is the seed-1 fixed point (re-run → zero churn)', (t) => {
  const bankPath = join(ROOT, 'content', 'ccar-p', 'questions.json');
  if (!existsSync(bankPath)) return t.skip('no ccar-p content');
  const bank = JSON.parse(readFileSync(bankPath, 'utf8'));
  const selection = JSON.parse(
    readFileSync(join(ROOT, 'content', 'ccar-p', 'selection.json'), 'utf8'),
  );
  const formIds = new Set<string>(selection.forms[0].items);
  assert.deepEqual(preflight(bank.questions), []);
  const { questions } = permuteBank(bank, formIds, '1');
  assert.deepEqual(questions, bank.questions);
});
