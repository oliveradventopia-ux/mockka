import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildScorecard } from './eval_scorecard.mjs';

test('empty registry → GREEN (nothing to regress yet)', () => {
  const card = buildScorecard({ dimensions: [] });
  assert.equal(card.overall, 'GREEN');
  assert.equal(card.count, 0);
});

test('a judged dimension with no runner → YELLOW (waiting, not RED)', () => {
  const card = buildScorecard({ dimensions: [{ id: 'fidelity', type: 'judged' }] });
  assert.equal(card.overall, 'YELLOW');
  assert.equal(card.dimensions[0].verdict, 'YELLOW');
});

test('deterministic dimensions default GREEN in the kernel', () => {
  const card = buildScorecard({ dimensions: [{ id: 'scoring', type: 'deterministic' }] });
  assert.equal(card.overall, 'GREEN');
});
