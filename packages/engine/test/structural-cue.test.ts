// Negative fixtures for the two structural answer-cue checks landed from the
// aif-c01 S5 round-1 ratchet proposals (eval/judge-scores.json -> bank_defects):
// `key-position-distribution` (BD-1) and `answer-length-cue` (BD-2). Both run
// at WARN level this wave — calibrated 2026-08-16 against shipped ccar-p, which
// carries the same latent defects — so these tests assert warn findings and
// that the manifest knobs cannot be pushed out of bounds silently (L-0002).

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadExam } from '../src/load.ts';
import { validateExam } from '../src/validate/index.ts';
import type {
  DistractorPatternRegistry,
  ExamPackage,
  Question,
  SingleChoiceQuestion,
} from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');
const registry = JSON.parse(
  readFileSync(join(ROOT, 'methodology', 'distractor-patterns.json'), 'utf8'),
) as DistractorPatternRegistry;

/** The broken-exam fixture as a chassis; scratch banks are grafted in-memory. */
function scratch(
  questions: Question[],
  validation?: Partial<ExamPackage['manifest']['validation']>,
): ExamPackage {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  return {
    ...pkg,
    manifest: {
      ...pkg.manifest,
      validation: { ...pkg.manifest.validation, ...validation },
    },
    bank: { ...pkg.bank, questions },
  };
}

function sc(id: string, answer: string, options: Record<string, string>): SingleChoiceQuestion {
  const distractorKeys = Object.keys(options).filter((k) => k !== answer);
  return {
    id,
    type: 'single_choice',
    domain: 'd1',
    primary_concept: 'C-1',
    keywords: ['scratch'],
    question: `Scratch stem ${id}?`,
    options,
    answer,
    distractor_patterns: Object.fromEntries(distractorKeys.map((k, i) => [k, `D0${i + 1}`])),
    rationale: {
      correct: 'Scratch rationale long enough to pass the anti-drift length floor.',
      distractors: Object.fromEntries(
        distractorKeys.map((k) => [k, 'Scratch distractor rationale, long enough.']),
      ),
    },
  };
}

const PARALLEL = {
  A: 'Deploy the workload with a managed inference endpoint',
  B: 'Provision a self-managed cluster for the workload',
  C: 'Batch the workload through an offline scoring job',
  D: 'Route the workload through an edge runtime instead',
};

const findings = (pkg: ExamPackage, check: string) =>
  validateExam(pkg, registry).findings.filter((f) => f.check === check);

/* ------------------------------------------------- key-position-distribution */

test('a bank keyed to one letter trips key-position-distribution (BD-1, warn level)', () => {
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, 'A', PARALLEL));
  const got = findings(scratch(bank), 'key-position-distribution');
  assert.equal(got.length, 1);
  assert.equal(got[0]!.level, 'warn');
  assert.match(got[0]!.message, /key letter A carries 10\/10 single-choice items \(100%, bound 40%\)/);
});

test('a letter-balanced bank passes key-position-distribution', () => {
  const letters = ['A', 'B', 'C', 'D'];
  const bank = Array.from({ length: 12 }, (_, i) => sc(`s${i}`, letters[i % 4]!, PARALLEL));
  assert.deepEqual(findings(scratch(bank), 'key-position-distribution'), []);
});

test('below the sample floor the single-choice share bound stays silent', () => {
  // 3 items all keyed A is 100% share but statistically meaningless.
  const bank = Array.from({ length: 3 }, (_, i) => sc(`s${i}`, 'A', PARALLEL));
  assert.deepEqual(findings(scratch(bank), 'key-position-distribution'), []);
});

test('a constant multiple-response key set trips the MR share bound', () => {
  const bank: Question[] = Array.from({ length: 5 }, (_, i) => ({
    id: `m${i}`,
    type: 'multiple_response',
    domain: 'd1',
    primary_concept: 'C-1',
    keywords: ['scratch'],
    question: `Scratch MR stem ${i}?`,
    options: { ...PARALLEL, E: 'Defer the workload to a scheduled window' },
    select_count: 2,
    answer: ['A', 'B'],
    distractor_patterns: { C: 'D01', D: 'D02', E: 'D03' },
    rationale: {
      correct: 'Scratch rationale long enough to pass the anti-drift length floor.',
      distractors: {
        C: 'Scratch distractor rationale, long enough.',
        D: 'Scratch distractor rationale, long enough.',
        E: 'Scratch distractor rationale, long enough.',
      },
    },
  }));
  const got = findings(scratch(bank), 'key-position-distribution');
  assert.equal(got.length, 1);
  assert.match(got[0]!.message, /multiple-response key set \{A\+B\} carries 5\/5 items \(100%, bound 50%\)/);
});

test('a scenario-matching item mapping scenarios to options in listed order is flagged', () => {
  const listedOrder: Question = {
    id: 'sm1',
    type: 'scenario_matching',
    domain: 'd1',
    primary_concept: 'C-1',
    keywords: ['scratch'],
    question: 'Match each scratch scenario to its workflow.',
    matching_options: ['fixed workflow', 'agentic workflow', 'human review'],
    scenarios: [
      { id: 's1', text: 'First scratch scenario.' },
      { id: 's2', text: 'Second scratch scenario.' },
      { id: 's3', text: 'Third scratch scenario.' },
      { id: 's4', text: 'Fourth scratch scenario.' },
    ],
    answer: {
      s1: 'fixed workflow',
      s2: 'agentic workflow',
      s3: 'human review',
      s4: 'fixed workflow',
    },
    rationale: { correct: 'Scratch rationale long enough to pass the anti-drift length floor.' },
  };
  const permuted: Question = {
    ...listedOrder,
    id: 'sm2',
    answer: {
      s1: 'human review',
      s2: 'fixed workflow',
      s3: 'agentic workflow',
      s4: 'human review',
    },
  };
  const got = findings(scratch([listedOrder, permuted]), 'key-position-distribution');
  assert.equal(got.length, 1);
  assert.match(got[0]!.message, /sm1: the first 3 scenarios map to matching options in listed order/);
});

/* -------------------------------------------------------- answer-length-cue */

test('a keyed option far longer than every distractor trips the error tier (warn level this wave)', () => {
  const bank = [
    sc('long1', 'B', {
      A: 'Provision a self-managed cluster for the workload',
      B:
        'Deploy the workload with a managed inference endpoint, since managed scaling ' +
        'absorbs burst traffic rather than requiring capacity planning, and the provider ' +
        'patches the runtime while usage-based pricing keeps idle cost near zero',
      C: 'Batch the workload through an offline scoring job',
      D: 'Route the workload through an edge runtime instead',
    }),
  ];
  const got = findings(scratch(bank), 'answer-length-cue');
  // One length finding (error tier) + one rider finding ("since" only in the key).
  assert.equal(got.length, 2);
  assert.ok(got.every((f) => f.level === 'warn'));
  const messages = got.map((f) => f.message).join('\n');
  assert.match(messages, /long1: keyed option is \d+% the length of the longest distractor \(error-tier bound 150%\)/);
  assert.match(messages, /long1: only the keyed option carries a justification rider/);
});

test('a mildly long keyed option lands in the warn tier', () => {
  const bank = [
    sc('mid1', 'B', {
      A: 'Provision a self-managed compute cluster for the whole workload',
      B: 'Deploy the workload with a managed inference endpoint and let the provider handle scaling',
      C: 'Batch the workload through a nightly offline scoring job',
      D: 'Route the workload through a regional edge runtime layer',
    }),
  ];
  const got = findings(scratch(bank), 'answer-length-cue');
  assert.equal(got.length, 1);
  assert.match(got[0]!.message, /warn-tier bound 125%/);
});

test('shape-parallel options pass answer-length-cue', () => {
  assert.deepEqual(findings(scratch([sc('ok1', 'C', PARALLEL)]), 'answer-length-cue'), []);
});

test('a rider present in a distractor too is not a key marker', () => {
  const bank = [
    sc('rider2', 'A', {
      A: 'Use a managed endpoint, since managed scaling absorbs burst traffic here',
      B: 'Use a self-managed cluster, since full control simplifies compliance work',
      C: 'Use an offline batch scoring job for the recurring nightly workload runs',
      D: 'Use an edge runtime layer to keep the request path regional and shorter',
    }),
  ];
  assert.deepEqual(findings(scratch(bank), 'answer-length-cue'), []);
});

/* ------------------------------------------------------- bounded knobs (L-0002) */

test('out-of-range structural-cue knobs fail manifest-shape and fall back to defaults', () => {
  // The disabled form: knobs pushed past the bounds would neuter both checks.
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, 'A', PARALLEL));
  const pkg = scratch(bank, {
    key_letter_max_share: 0.99,
    mr_key_set_max_share: 0.99,
    answer_length_ratio_warn: 9,
    answer_length_ratio_error: 9,
  });
  const result = validateExam(pkg, registry);

  const shape = result.findings
    .filter((f) => f.check === 'manifest-shape' && f.level === 'error')
    .map((f) => f.message)
    .join('\n');
  assert.match(shape, /key_letter_max_share 0\.99 is outside \[0\.25, 0\.6\]/);
  assert.match(shape, /mr_key_set_max_share 0\.99 is outside \[0\.25, 0\.75\]/);
  assert.match(shape, /answer_length_ratio_warn 9 is outside \[1\.05, 1\.5\]/);
  assert.match(shape, /answer_length_ratio_error 9 is outside \[1\.2, 2\]/);

  // And the check still fired on its coded default — the knob cannot loosen it.
  const bd1 = result.findings.filter((f) => f.check === 'key-position-distribution');
  assert.equal(bd1.length, 1);
  assert.match(bd1[0]!.message, /bound 40%/);
});

test('a warn tier above the error tier fails manifest-shape', () => {
  const pkg = scratch([sc('ok1', 'C', PARALLEL)], {
    answer_length_ratio_warn: 1.5,
    answer_length_ratio_error: 1.3,
  });
  const shape = validateExam(pkg, registry)
    .findings.filter((f) => f.check === 'manifest-shape')
    .map((f) => f.message)
    .join('\n');
  assert.match(shape, /answer_length_ratio_warn 1\.5 exceeds answer_length_ratio_error 1\.3/);
});

test('in-range knobs move the bound', () => {
  // 5/10 items keyed A = 50%: over the 0.4 default, under a declared 0.6.
  const letters = ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D'];
  const bank = letters.map((l, i) => sc(`s${i}`, l, PARALLEL));
  assert.equal(findings(scratch(bank), 'key-position-distribution').length, 1);
  assert.deepEqual(
    findings(scratch(bank, { key_letter_max_share: 0.6 }), 'key-position-distribution'),
    [],
  );
});
