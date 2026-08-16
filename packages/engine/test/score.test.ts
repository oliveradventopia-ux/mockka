// Grading parity with ccar-p src/app.js — the tools/app-test.mjs scenarios
// reproduced as pure-function tests, without the DOM shim.

import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildPaper, loadExam } from '../src/load.ts';
import { gradeAttempt, isAnswered, isCorrect } from '../src/score.ts';
import type {
  AnswerValue,
  MultipleResponseQuestion,
  Question,
  ScenarioMatchingQuestion,
  SingleChoiceQuestion,
} from '../src/types.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
const paper = buildPaper(pkg.bank, pkg.selection);

function correctAnswer(q: Question): AnswerValue {
  if (q.type === 'single_choice') return q.answer;
  if (q.type === 'multiple_response') return [...q.answer];
  return { ...q.answer };
}

function wrongAnswer(q: Question): AnswerValue {
  if (q.type === 'single_choice') {
    return Object.keys(q.options).find((k) => k !== q.answer)!;
  }
  if (q.type === 'multiple_response') {
    return Object.keys(q.options)
      .filter((k) => !q.answer.includes(k))
      .slice(0, q.select_count);
  }
  const picks: Record<string, string> = {};
  for (const s of q.scenarios) {
    picks[s.id] = q.matching_options.find((o) => o !== q.answer[s.id])!;
  }
  return picks;
}

function sitting(correctCount: number): Record<string, AnswerValue> {
  const answers: Record<string, AnswerValue> = {};
  paper.forEach((q, i) => {
    answers[q.id] = i < correctCount ? correctAnswer(q) : wrongAnswer(q);
  });
  return answers;
}

test('an all-correct sitting scores 100% and passes', () => {
  const report = gradeAttempt(paper, sitting(paper.length), pkg.manifest, pkg.syllabusRules);
  assert.equal(report.totalItems, 63);
  assert.equal(report.totalCorrect, 63);
  assert.equal(report.pct, 100);
  assert.equal(report.passed, true);
  assert.equal(report.perDomain.length, 7);
  for (const d of report.perDomain) assert.equal(d.pct, 100);
  assert.deepEqual(report.weakRules, []);
});

test('an all-wrong sitting scores 0% and fails, flagging every rule', () => {
  const report = gradeAttempt(paper, sitting(0), pkg.manifest, pkg.syllabusRules);
  assert.equal(report.totalCorrect, 0);
  assert.equal(report.pct, 0);
  assert.equal(report.passed, false);
  for (const d of report.perDomain) assert.equal(d.pct, 0);
  // The exam covers all 24 syllabus rules (validator-enforced), so an
  // all-wrong sitting flags all 24 — parity with app-test.mjs.
  assert.equal(report.weakRules.length, 24);
  for (const r of report.weakRules) {
    assert.equal(r.correct, 0);
    assert.ok(r.missedItemIds.length > 0);
  }
});

test('47 of 63 rounds to 75% and passes the threshold; 46 does not', () => {
  const at47 = gradeAttempt(paper, sitting(47), pkg.manifest, pkg.syllabusRules);
  assert.equal(at47.pct, 75); // 74.6% rounds up — CCAR-P rounding
  assert.equal(at47.passed, true);

  const at46 = gradeAttempt(paper, sitting(46), pkg.manifest, pkg.syllabusRules);
  assert.equal(at46.pct, 73);
  assert.equal(at46.passed, false);
});

test('single choice: a wrong pick is answered but not correct', () => {
  const q = paper.find((x): x is SingleChoiceQuestion => x.type === 'single_choice')!;
  assert.equal(isAnswered(q, wrongAnswer(q)), true);
  assert.equal(isCorrect(q, wrongAnswer(q)), false);
  assert.equal(isCorrect(q, q.answer), true);
  assert.equal(isAnswered(q, null), false);
  assert.equal(isAnswered(q, ''), false);
});

test('multiple response: partial or mixed picks never count as correct', () => {
  const q = paper.find((x): x is MultipleResponseQuestion => x.type === 'multiple_response')!;
  const firstKey = q.answer[0]!;
  const wrongKey = Object.keys(q.options).find((k) => !q.answer.includes(k))!;

  // One of two picks: not even "answered", never correct.
  assert.equal(isAnswered(q, [firstKey]), false);
  assert.equal(isCorrect(q, [firstKey]), false);

  // Full pick count with one wrong member: answered, not correct.
  assert.equal(isAnswered(q, [firstKey, wrongKey]), true);
  assert.equal(isCorrect(q, [firstKey, wrongKey]), false);

  // Set equality — order must not matter.
  assert.equal(isCorrect(q, [...q.answer].reverse()), true);
});

test('scenario matching: every scenario must be answered and match', () => {
  const q = paper.find((x): x is ScenarioMatchingQuestion => x.type === 'scenario_matching')!;
  const all = correctAnswer(q) as Record<string, string>;

  assert.equal(isAnswered(q, all), true);
  assert.equal(isCorrect(q, all), true);

  const firstScenario = q.scenarios[0]!;

  // One scenario left blank: not answered, not correct.
  const partial = { ...all };
  delete partial[firstScenario.id];
  assert.equal(isAnswered(q, partial), false);
  assert.equal(isCorrect(q, partial), false);

  // One scenario mismatched: answered, not correct.
  const oneWrong = { ...all };
  oneWrong[firstScenario.id] = q.matching_options.find(
    (o) => o !== q.answer[firstScenario.id],
  )!;
  assert.equal(isAnswered(q, oneWrong), true);
  assert.equal(isCorrect(q, oneWrong), false);
});

test('weak-rules report is keyed by syllabus rule with the missed item ids', () => {
  const targetRule = paper[0]!.syllabus_rule!;
  const targetItems = paper.filter((q) => q.syllabus_rule === targetRule).map((q) => q.id);

  const answers: Record<string, AnswerValue> = {};
  for (const q of paper) {
    answers[q.id] = q.syllabus_rule === targetRule ? wrongAnswer(q) : correctAnswer(q);
  }

  const report = gradeAttempt(paper, answers, pkg.manifest, pkg.syllabusRules);
  assert.equal(report.weakRules.length, 1);
  const weak = report.weakRules[0]!;
  assert.equal(weak.ruleId, targetRule);
  assert.equal(weak.correct, 0);
  assert.equal(weak.total, targetItems.length);
  assert.deepEqual(weak.missedItemIds.sort(), targetItems.sort());
});

test('weak rules sort worst ratio first, then by rule id', () => {
  const report = gradeAttempt(paper, sitting(30), pkg.manifest, pkg.syllabusRules);
  for (let i = 1; i < report.weakRules.length; i++) {
    const prev = report.weakRules[i - 1]!;
    const cur = report.weakRules[i]!;
    const prevRatio = prev.correct / prev.total;
    const curRatio = cur.correct / cur.total;
    assert.ok(
      prevRatio < curRatio || (prevRatio === curRatio && prev.ruleId.localeCompare(cur.ruleId) <= 0),
      `weak rules out of order at index ${i}`,
    );
  }
});

test('without the syllabus-rules layer the weak-rules report stays empty', () => {
  const report = gradeAttempt(paper, sitting(0), pkg.manifest, undefined);
  assert.deepEqual(report.weakRules, []);
});

test('an empty sitting grades to zero without crashing', () => {
  const report = gradeAttempt(paper, {}, pkg.manifest, pkg.syllabusRules);
  assert.equal(report.totalCorrect, 0);
  assert.equal(report.pct, 0);
  assert.equal(report.passed, false);
});
