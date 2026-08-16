// The generalization acceptance test (ccar-p must pass with zero errors and
// the full check inventory must run) plus the negative test: a deliberately
// broken fixture bank must fail with the expected findings.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadExam } from '../src/load.ts';
import { CHECK_NAMES, validateExam } from '../src/validate/index.ts';
import type { DistractorPatternRegistry } from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');
const registry = JSON.parse(
  readFileSync(join(ROOT, 'methodology', 'distractor-patterns.json'), 'utf8'),
) as DistractorPatternRegistry;

/** The complete check inventory, in execution order. Kept explicit so any
 *  added/removed/renamed check is a deliberate, reviewed change. */
const ALL_CHECKS = [
  'manifest-shape',
  'concept-inventory',
  'concept-syllabus-rules',
  'blueprint-arithmetic',
  'bank-shape',
  'item-metadata',
  'keyword-presence',
  'single-choice-shape',
  'multiple-response-shape',
  'scenario-matching-shape',
  'rationale-anti-drift',
  'rationale-letter-reference',
  'distractor-patterns',
  'pattern-frequency-caps',
  'concept-coverage',
  'syllabus-rule-bank-coverage',
  'syllabus-rule-form-coverage',
  'selection-shape',
  'selection-format-mix',
  'selection-concept-uniqueness',
  'number-drift',
  'mojibake',
  'near-duplicate-stems',
  'style-policy',
  'provenance-sources',
  'licensed-import-license',
  'derivation-present',
  'concept-source-registry',
  'publication-preflight',
];

test('the shared registry holds exactly D01–D20', () => {
  const ids = registry.patterns.map((p) => p.id);
  const expected = Array.from({ length: 20 }, (_, i) => `D${String(i + 1).padStart(2, '0')}`);
  assert.deepEqual(ids, expected);
  for (const p of registry.patterns) assert.ok(p.name.length > 0, `${p.id} has no name`);
});

test('the validator declares the full check inventory', () => {
  assert.deepEqual(CHECK_NAMES, ALL_CHECKS);
});

test('content/ccar-p passes with zero errors — the generalization acceptance test', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const result = validateExam(pkg, registry);

  const errors = result.findings.filter((f) => f.level === 'error');
  assert.deepEqual(errors, [], `unexpected errors:\n${JSON.stringify(errors.slice(0, 15), null, 2)}`);
  assert.equal(result.ok, true);
});

test('ccar-p runs every check except the publication preflight (status is in_review)', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const result = validateExam(pkg, registry);

  // Check-count parity: everything the original hardcoded validate.mjs
  // enforced runs here as a manifest-driven check, plus the provenance layer.
  // publication-preflight is gated on status === 'published'.
  assert.deepEqual(
    result.checksRun,
    ALL_CHECKS.filter((c) => c !== 'publication-preflight'),
  );
});

test('a published package without eval artifacts fails the preflight', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const published = { ...pkg, manifest: { ...pkg.manifest, status: 'published' as const } };
  const result = validateExam(published, registry);

  assert.equal(result.ok, false);
  assert.ok(result.checksRun.includes('publication-preflight'));
  const preflight = result.findings.filter((f) => f.check === 'publication-preflight');
  const messages = preflight.map((f) => f.message).join('\n');
  assert.match(messages, /blind-solve\.json/);
  assert.match(messages, /judge-scores\.json/);
  assert.match(messages, /signoff\.md/);
});

test('the broken fixture bank fails with the expected findings — the gate gates', () => {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  const result = validateExam(pkg, registry);

  assert.equal(result.ok, false);

  const errorsBy = (check: string) =>
    result.findings.filter((f) => f.check === check && f.level === 'error');
  const messages = (check: string) => errorsBy(check).map((f) => f.message).join('\n');

  // Planted defect -> expected finding.
  assert.match(messages('single-choice-shape'), /b1: answer "E" is not an option/);
  assert.match(messages('rationale-letter-reference'), /b2/);
  assert.match(messages('rationale-anti-drift'), /b2: rationale explains \[B,C\] but the non-answer options are \[B,C,D\]/);
  assert.match(messages('distractor-patterns'), /b2: unknown distractor pattern "D99"/);
  assert.match(messages('concept-coverage'), /C-2: primary concept of 2 bank items \(b2, b3\)/);
  assert.match(messages('concept-coverage'), /C-3: no bank item tests this concept as primary/);
  assert.match(messages('selection-format-mix'), /d1 has 2 single_choice items, expected 1/);
  assert.match(messages('selection-format-mix'), /d1 has 0 multiple_response items, expected 1/);
  assert.match(messages('provenance-sources'), /at least one source/);
  assert.match(messages('provenance-sources'), /nda_statement is empty/);
  assert.match(messages('derivation-present'), /missing or empty/);
  assert.match(messages('concept-source-registry'), /unregistered source id "unregistered-source"/);

  // The fixture is otherwise well-formed: its defects are planted, not noise.
  for (const clean of [
    'manifest-shape',
    'concept-inventory',
    'blueprint-arithmetic',
    'bank-shape',
    'item-metadata',
    'keyword-presence',
    'multiple-response-shape',
    'scenario-matching-shape',
    'pattern-frequency-caps',
    'selection-shape',
    'selection-concept-uniqueness',
    'number-drift',
    'mojibake',
    'near-duplicate-stems',
    'style-policy',
    'licensed-import-license',
  ]) {
    assert.deepEqual(errorsBy(clean), [], `expected no ${clean} errors`);
  }

  // Layer gating: syllabus_rules is off, so no rule check ran.
  assert.ok(!result.checksRun.includes('concept-syllabus-rules'));
  assert.ok(!result.checksRun.includes('syllabus-rule-bank-coverage'));
  assert.ok(!result.checksRun.includes('syllabus-rule-form-coverage'));
});
