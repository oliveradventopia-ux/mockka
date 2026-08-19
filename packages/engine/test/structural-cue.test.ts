// Negative fixtures for the structural answer-cue checks.
//
// BD-1/BD-2 (aif-c01 S5 round 1): `key-position-distribution` — promoted to
// ERROR 2026-08-19 after the ccar-p key rebalance closed its only violator —
// and `answer-length-cue`, still WARN until the ccar-p trim lane
// (fix/ccar-p-answer-cues d4–d7) lands.
//
// E1–E7 (adversarial cue sweep 2026-08-19, ADR-0006 follow-up):
// `key-length-rank-share`, `rider-balance`, `named-entity-parity`,
// `option-pair-similarity`, the generalised SM rotation (k>0, warn) and the
// bank∪form scope plumbing — all NEW detection reporting at WARN this wave.
// Every manifest knob stays bounds-checked so none can be pushed out of range
// silently (L-0002).

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
  forms?: { id: string; items: string[] }[],
): ExamPackage {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  return {
    ...pkg,
    manifest: {
      ...pkg.manifest,
      validation: { ...pkg.manifest.validation, ...validation },
    },
    bank: { ...pkg.bank, questions },
    // The fixture's own form references ids absent from the scratch bank, so
    // by default the form scope resolves empty and stays silent; tests that
    // exercise the E7 form scope pass their own forms.
    selection: forms ? { ...pkg.selection, forms } : pkg.selection,
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

test('a bank keyed to one letter trips key-position-distribution (BD-1, ERROR since 2026-08-19)', () => {
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, 'A', PARALLEL));
  const got = findings(scratch(bank), 'key-position-distribution');
  assert.equal(got.length, 1);
  assert.equal(got[0]!.level, 'error');
  assert.match(got[0]!.message, /\[bank\] key letter A carries 10\/10 single-choice items \(100%, bound 40%\)/);
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
  // This mapping LOOKS permuted but is opts rotated by k=2 — exactly the E4
  // hole: the k=0-only rule blessed it, and 4 live items shipped this shape.
  const rotated: Question = {
    ...listedOrder,
    id: 'sm2',
    answer: {
      s1: 'human review',
      s2: 'fixed workflow',
      s3: 'agentic workflow',
      s4: 'human review',
    },
  };
  // Genuinely acyclic: no single offset k maps the prefix.
  const acyclic: Question = {
    ...listedOrder,
    id: 'sm3',
    answer: {
      s1: 'human review',
      s2: 'agentic workflow',
      s3: 'fixed workflow',
      s4: 'human review',
    },
  };
  const got = findings(scratch([listedOrder, rotated, acyclic]), 'key-position-distribution');
  assert.equal(got.length, 2);
  const k0 = got.find((f) => f.message.startsWith('sm1'))!;
  assert.equal(k0.level, 'error');
  assert.match(k0.message, /sm1: the first 3 scenarios map to matching options in listed order — /);
  const k2 = got.find((f) => f.message.startsWith('sm2'))!;
  assert.equal(k2.level, 'warn');
  assert.match(k2.message, /sm2: the first 3 scenarios map to matching options in listed order rotated by 2/);
});

/* -------------------------------------------------------- answer-length-cue */

test('a keyed option far longer than every distractor trips the error tier', () => {
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
  // One length finding (error tier, promoted 2026-08-19) + one rider finding
  // ("since" only in the key), which stays warn until the seven-bank rework wave.
  assert.equal(got.length, 2);
  const byTier = Object.fromEntries(got.map((f) => [f.level, f]));
  assert.ok(byTier.error, 'the over-150% ratio finding is error tier');
  assert.ok(byTier.warn, 'the rider finding remains warn tier');
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

/* --------------------------------------------------- key-length-rank-share */

/** Options with strictly distinct trimmed lengths: A < B < C < D. */
const LADDER = {
  A: 'Enable the platform audit log',
  B: 'Enable the platform audit log for every project tier',
  C: 'Enable the platform audit log for every project tier with alerting turned on',
  D: 'Enable the platform audit log for every project tier with alerting and weekly exports turned on',
};

test('a key that is the strict longest option in an outsized share trips key-length-rank-share (E1)', () => {
  // 5/10 strict-longest keys = 50% > the 45% error tier (chance 25%).
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, i < 5 ? 'D' : 'B', LADDER));
  const got = findings(scratch(bank), 'key-length-rank-share');
  assert.equal(got.length, 1);
  assert.equal(got[0]!.level, 'warn'); // new checks land at warn this wave
  assert.match(
    got[0]!.message,
    /\[bank\] the key is the strict longest option in 5\/10 single-choice items \(50%, error-tier bound 45%, chance 25%\)/,
  );
});

test('the rank bound is two-sided: a mostly-shortest key trips it too (the L-0021 overshoot)', () => {
  // 4/10 strict-shortest keys = 40%: over the 35% warn tier, under 45%.
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, i < 4 ? 'A' : 'C', LADDER));
  const got = findings(scratch(bank), 'key-length-rank-share');
  assert.equal(got.length, 1);
  assert.match(
    got[0]!.message,
    /the key is the strict shortest option in 4\/10 single-choice items \(40%, warn-tier bound 35%/,
  );
});

test('rank-balanced keys pass key-length-rank-share', () => {
  // longest-keyed 3/10 (30%), shortest-keyed 3/10 (30%) — both inside 35%.
  const letters = ['D', 'D', 'D', 'A', 'A', 'A', 'B', 'B', 'C', 'C'];
  const bank = letters.map((l, i) => sc(`s${i}`, l, LADDER));
  assert.deepEqual(findings(scratch(bank), 'key-length-rank-share'), []);
});

test('below the sample floor the rank share stays silent', () => {
  const bank = Array.from({ length: 7 }, (_, i) => sc(`s${i}`, 'D', LADDER));
  assert.deepEqual(findings(scratch(bank), 'key-length-rank-share'), []);
});

test('a tie at the extreme is not a rank cue — tied items are excluded', () => {
  // C and D share a length: no strict longest exists, so the longest
  // direction has no qualifying items; A stays strict shortest but never keys.
  const tied = {
    A: 'Enable the platform audit log',
    B: 'Enable the platform audit log for every project tier',
    C: 'Enable the platform audit log for every tier with alerting on',
    D: 'Enable the platform audit log for all the tiers with alert on',
  };
  assert.equal(tied.C.length, tied.D.length);
  const bank = Array.from({ length: 8 }, (_, i) => sc(`s${i}`, 'D', tied));
  assert.deepEqual(findings(scratch(bank), 'key-length-rank-share'), []);
});

test('E7 form scope: a rank-balanced bank still trips on a skewed served form, named as such', () => {
  // Bank: 8/24 longest-keyed = 33% (inside 35%). Form: exactly those 8 = 100%.
  const bank = Array.from({ length: 24 }, (_, i) => sc(`s${i}`, i < 8 ? 'D' : 'B', LADDER));
  const form = [{ id: 'form-1', items: Array.from({ length: 8 }, (_, i) => `s${i}`) }];
  const got = findings(scratch(bank, undefined, form), 'key-length-rank-share');
  assert.equal(got.length, 1);
  assert.match(
    got[0]!.message,
    /\[form form-1\] the key is the strict longest option in 8\/8 single-choice items \(100%, error-tier bound 45%/,
  );
});

/* ------------------------------------------------------------ rider-balance */

test('riders evacuated into distractors trip rider-balance from below (E2 inversion)', () => {
  // 8 items, each with exactly one rider-carrying option, never the key —
  // "whereas" is on the widened list only, proving the E2 phrase widening.
  const bank = Array.from({ length: 8 }, (_, i) =>
    sc(`s${i}`, 'A', {
      A: 'Scale the worker fleet horizontally across zones',
      B: 'Scale the worker fleet vertically, whereas horizontal scaling would spread the load',
      C: 'Batch the queued work into an overnight processing window',
      D: 'Route the queued work through a regional relay first',
    }),
  );
  const got = findings(scratch(bank), 'rider-balance');
  assert.equal(got.length, 1);
  assert.equal(got[0]!.level, 'warn');
  assert.match(
    got[0]!.message,
    /\[bank\] a justification\/contrast rider marks the key in only 0\/8 rider-carrying options \(0%, floor 10%, chance 25%\)/,
  );
  assert.match(got[0]!.message, /evacuated into distractors/);
});

test('riders concentrated on the key trip rider-balance from above (the original BD-2 face)', () => {
  const bank = Array.from({ length: 8 }, (_, i) =>
    sc(`s${i}`, 'A', {
      A: 'Rotate the credentials early to ensure the exposed key cannot be reused',
      B: 'Publish the incident notice on the internal status page',
      C: 'Archive the affected repository and freeze its deploy pipeline',
      D: 'Escalate the finding to the on-call security review rotation',
    }),
  );
  const got = findings(scratch(bank), 'rider-balance');
  assert.equal(got.length, 1);
  assert.match(
    got[0]!.message,
    /\[bank\] a justification\/contrast rider marks the key in 8\/8 rider-carrying options \(100%, ceiling 45%, chance 25%\)/,
  );
});

test('riders spread across keys and distractors at chance rate pass rider-balance', () => {
  // 2 key-riders + 6 distractor-riders = 2/8 = 25%, exactly chance.
  const keyRider = (id: string) =>
    sc(id, 'A', {
      A: 'Rotate the credentials early to ensure the exposed key cannot be reused',
      B: 'Publish the incident notice on the internal status page',
      C: 'Archive the affected repository and freeze its deploy pipeline',
      D: 'Escalate the finding to the on-call security review rotation',
    });
  const distractorRider = (id: string) =>
    sc(id, 'A', {
      A: 'Scale the worker fleet horizontally across zones',
      B: 'Scale the worker fleet vertically, whereas horizontal scaling would spread the load',
      C: 'Batch the queued work into an overnight processing window',
      D: 'Route the queued work through a regional relay first',
    });
  const bank = [
    keyRider('k0'),
    keyRider('k1'),
    ...Array.from({ length: 6 }, (_, i) => distractorRider(`d${i}`)),
  ];
  assert.deepEqual(findings(scratch(bank), 'rider-balance'), []);
});

test('below the rider floor the balance stays silent', () => {
  const bank = Array.from({ length: 4 }, (_, i) =>
    sc(`s${i}`, 'A', {
      A: 'Scale the worker fleet horizontally across zones',
      B: 'Scale the worker fleet vertically, whereas horizontal scaling would spread the load',
      C: 'Batch the queued work into an overnight processing window',
      D: 'Route the queued work through a regional relay first',
    }),
  );
  assert.deepEqual(findings(scratch(bank), 'rider-balance'), []);
});

/* ------------------------------------------------------ named-entity-parity */

const ENTITY_KEYED = {
  A: 'Migrate the workload onto Amazon SageMaker Studio',
  B: 'Retrain the model on a larger labelled corpus',
  C: 'Tune the existing inference cluster for throughput',
  D: 'Cache the most frequent responses at the edge',
};

test('a lone entity-naming option that is always the key trips named-entity-parity (E3)', () => {
  const bank = Array.from({ length: 6 }, (_, i) => sc(`s${i}`, 'A', ENTITY_KEYED));
  const got = findings(scratch(bank), 'named-entity-parity');
  assert.equal(got.length, 1);
  assert.equal(got[0]!.level, 'warn');
  assert.match(
    got[0]!.message,
    /\[bank\] the single option naming the most proper-noun entities is the key in 6\/6 qualifying single-choice items \(100%, error-tier bound 55%, chance 25%\)/,
  );
});

test('entity-naming distractors keep named-entity-parity silent — presence is not the cue, correlation is', () => {
  // The lone entity option is the key in only 2/6 qualifying items (33%).
  const entityDistractor = {
    A: 'Retrain the model on a larger labelled corpus',
    B: 'Migrate the workload onto Amazon SageMaker Studio',
    C: 'Tune the existing inference cluster for throughput',
    D: 'Cache the most frequent responses at the edge',
  };
  const bank = [
    sc('k0', 'A', ENTITY_KEYED),
    sc('k1', 'A', ENTITY_KEYED),
    ...Array.from({ length: 4 }, (_, i) => sc(`d${i}`, 'A', entityDistractor)),
  ];
  assert.deepEqual(findings(scratch(bank), 'named-entity-parity'), []);
});

test('entity-count ties disqualify an item — parity across options is the fix working', () => {
  const parity = {
    A: 'Migrate the workload onto Amazon SageMaker Studio',
    B: 'Retrain the model with Amazon SageMaker Autopilot',
    C: 'Serve the model through Amazon Bedrock Agents',
    D: 'Batch the scoring through AWS Glue DataBrew jobs',
  };
  const bank = Array.from({ length: 8 }, (_, i) => sc(`s${i}`, 'A', parity));
  assert.deepEqual(findings(scratch(bank), 'named-entity-parity'), []);
});

test('below the qualifying-item floor named-entity-parity stays silent', () => {
  const bank = Array.from({ length: 5 }, (_, i) => sc(`s${i}`, 'A', ENTITY_KEYED));
  assert.deepEqual(findings(scratch(bank), 'named-entity-parity'), []);
});

/* --------------------------------------------------- option-pair-similarity */

test('a near-duplicate option pair trips option-pair-similarity at the error tier (E6)', () => {
  const bank = [
    sc('dup1', 'B', {
      A: 'Publish the incident notice on the internal status page',
      B: 'Rotate every exposed access credential immediately then revoke every stale delegation grant quickly',
      C: 'Archive the affected repository and freeze its deploy pipeline',
      D: 'Rotate every exposed access credential immediately then revoke every stale delegation grant today',
    }),
  ];
  const got = findings(scratch(bank), 'option-pair-similarity');
  assert.equal(got.length, 1);
  assert.equal(got[0]!.level, 'warn');
  assert.match(
    got[0]!.message,
    /dup1: options B and D are 83% similar \(error-tier bound 75%\)/,
  );
  assert.match(got[0]!.message, /collapses the item to a two-way guess/);
});

test('a moderately similar pair lands in the warn tier', () => {
  const bank = [
    sc('dup2', 'B', {
      A: 'Publish the incident notice on the internal status page',
      B: 'Rotate every exposed access credential immediately then revoke every stale delegation grant',
      C: 'Archive the affected repository and freeze its deploy pipeline',
      D: 'Rotate every exposed access credential immediately then revoke every stale permission grant',
    }),
  ];
  const got = findings(scratch(bank), 'option-pair-similarity');
  assert.equal(got.length, 1);
  assert.match(got[0]!.message, /dup2: options B and D are 67% similar \(warn-tier bound 60%\)/);
});

test('distinct options pass option-pair-similarity', () => {
  assert.deepEqual(findings(scratch([sc('ok2', 'C', PARALLEL)]), 'option-pair-similarity'), []);
});

/* ------------------------------------------- bounded knobs, new checks (L-0002) */

test('out-of-range E1/E2/E3/E6 knobs fail manifest-shape and the checks fall back to defaults', () => {
  // 10 items strict-longest-keyed: fires on the default 0.35/0.45 bounds.
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, 'D', LADDER));
  const pkg = scratch(bank, {
    key_length_rank_warn_share: 0.99,
    key_length_rank_error_share: 0.99,
    rider_balance_min_share: 0.4,
    rider_balance_max_share: 0.99,
    named_entity_parity_warn_share: 0.99,
    named_entity_parity_error_share: 0.99,
    option_pair_jaccard_warn: 0.99,
    option_pair_jaccard_error: 0.99,
  });
  const result = validateExam(pkg, registry);

  const shape = result.findings
    .filter((f) => f.check === 'manifest-shape' && f.level === 'error')
    .map((f) => f.message)
    .join('\n');
  assert.match(shape, /key_length_rank_warn_share 0\.99 is outside \[0\.25, 0\.45\]/);
  assert.match(shape, /key_length_rank_error_share 0\.99 is outside \[0\.35, 0\.55\]/);
  assert.match(shape, /rider_balance_min_share 0\.4 is outside \[0\.02, 0\.2\]/);
  assert.match(shape, /rider_balance_max_share 0\.99 is outside \[0\.3, 0\.6\]/);
  assert.match(shape, /named_entity_parity_warn_share 0\.99 is outside \[0\.3, 0\.55\]/);
  assert.match(shape, /named_entity_parity_error_share 0\.99 is outside \[0\.4, 0\.7\]/);
  assert.match(shape, /option_pair_jaccard_warn 0\.99 is outside \[0\.4, 0\.75\]/);
  assert.match(shape, /option_pair_jaccard_error 0\.99 is outside \[0\.6, 0\.9\]/);

  // The rank check still fired on its coded defaults — the knob cannot loosen it.
  const rank = result.findings.filter((f) => f.check === 'key-length-rank-share');
  assert.equal(rank.length, 1);
  assert.match(rank[0]!.message, /error-tier bound 45%/);
});

test('a rank warn tier above its error tier fails manifest-shape', () => {
  const pkg = scratch([sc('ok1', 'C', PARALLEL)], {
    key_length_rank_warn_share: 0.45,
    key_length_rank_error_share: 0.35,
  });
  const shape = validateExam(pkg, registry)
    .findings.filter((f) => f.check === 'manifest-shape')
    .map((f) => f.message)
    .join('\n');
  assert.match(shape, /key_length_rank_warn_share 0\.45 exceeds key_length_rank_error_share 0\.35/);
});

test('in-range rank knobs move the bound', () => {
  // 4/10 longest-keyed = 40%: over the 0.35 default, under a declared 0.45.
  const bank = Array.from({ length: 10 }, (_, i) => sc(`s${i}`, i < 4 ? 'D' : 'B', LADDER));
  assert.equal(findings(scratch(bank), 'key-length-rank-share').length, 1);
  assert.deepEqual(
    findings(
      scratch(bank, { key_length_rank_warn_share: 0.45, key_length_rank_error_share: 0.5 }),
      'key-length-rank-share',
    ),
    [],
  );
});
