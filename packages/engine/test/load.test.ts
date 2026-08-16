// Loader round-trip: content/ccar-p loads completely and buildPaper serves
// the paper in selection order.

import test from 'node:test';
import assert from 'node:assert/strict';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildPaper, listExams, loadExam } from '../src/load.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const CONTENT = join(ROOT, 'content');

test('listExams finds the ccar-p package', () => {
  assert.ok(listExams(CONTENT).includes('ccar-p'));
});

test('listExams on a missing directory returns empty', () => {
  assert.deepEqual(listExams(join(ROOT, 'no-such-dir')), []);
});

test('loadExam round-trips the full ccar-p package', () => {
  const pkg = loadExam(CONTENT, 'ccar-p');

  assert.equal(pkg.manifest.slug, 'ccar-p');
  assert.equal(pkg.manifest.exam.item_count, 63);
  assert.equal(pkg.manifest.bank.item_count, 85);
  assert.equal(pkg.manifest.exam.pass_threshold_pct, 75);
  assert.equal(pkg.manifest.exam.time_limit_minutes, 120);
  assert.equal(pkg.manifest.domains.length, 7);
  assert.equal(pkg.bank.questions.length, 85);
  assert.equal(pkg.concepts.concepts.length, 85);
  assert.equal(pkg.selection.forms.length, 1);

  // Optional layers present for ccar-p.
  assert.ok(pkg.syllabusRules);
  assert.equal(pkg.syllabusRules.rules.length, 24);
  assert.ok(pkg.authoring);
  assert.deepEqual(pkg.authoring.themes, ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8']);
  assert.ok(pkg.authoring.verticals.length > 0);

  // The dir is carried for filesystem checks (derivation/, eval/).
  assert.equal(pkg.dir, join(CONTENT, 'ccar-p'));
});

test('loadExam throws a clear error for a missing package', () => {
  assert.throws(() => loadExam(CONTENT, 'no-such-exam'), /no content package/);
});

test('buildPaper returns the paper in selection order', () => {
  const pkg = loadExam(CONTENT, 'ccar-p');
  const form = pkg.selection.forms[0]!;

  const paper = buildPaper(pkg.bank, pkg.selection);
  assert.equal(paper.length, 63);
  assert.deepEqual(paper.map((q) => q.id), form.items);

  // Explicit form id resolves to the same paper.
  const byId = buildPaper(pkg.bank, pkg.selection, form.id);
  assert.deepEqual(byId.map((q) => q.id), form.items);
});

test('buildPaper rejects unknown forms and unresolvable items', () => {
  const pkg = loadExam(CONTENT, 'ccar-p');
  assert.throws(() => buildPaper(pkg.bank, pkg.selection, 'no-such-form'), /unknown form/);
  assert.throws(
    () => buildPaper(pkg.bank, { forms: [{ id: 'f', items: ['ghost-item'] }] }),
    /unknown item "ghost-item"/,
  );
  assert.throws(() => buildPaper(pkg.bank, { forms: [] }), /no forms/);
});
