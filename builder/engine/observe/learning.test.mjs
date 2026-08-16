import { test } from 'node:test';
import assert from 'node:assert/strict';
import { learningPayoff } from './learning.mjs';

test('no learnings captured → not paying off', () => {
  const p = learningPayoff({ learningsCaptured: 0 });
  assert.equal(p.payingOff, false);
});

test('acting on learnings + low repeat defects → paying off', () => {
  const p = learningPayoff({ learningsCaptured: 8, learningsActedOn: 4, repeatDefects: 1, totalDefects: 10 });
  assert.equal(p.actedOnRate, 0.5);
  assert.equal(p.payingOff, true);
});

test('learnings captured but never acted on → not paying off', () => {
  const p = learningPayoff({ learningsCaptured: 10, learningsActedOn: 0 });
  assert.equal(p.payingOff, false);
});

test('high repeat-defect rate → not paying off even if acted on', () => {
  const p = learningPayoff({ learningsCaptured: 5, learningsActedOn: 5, repeatDefects: 8, totalDefects: 10 });
  assert.equal(p.payingOff, false);
});
