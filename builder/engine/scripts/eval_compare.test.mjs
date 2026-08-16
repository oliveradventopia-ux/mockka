import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compare } from './eval_compare.mjs';

test('no flips when verdicts match', () => {
  const s = { dimensions: [{ id: 'a', verdict: 'GREEN' }] };
  assert.deepEqual(compare(s, s), []);
});

test('detects a GREEN → RED flip', () => {
  const cur = { dimensions: [{ id: 'a', verdict: 'RED' }] };
  const snap = { dimensions: [{ id: 'a', verdict: 'GREEN' }] };
  assert.deepEqual(compare(cur, snap), [{ id: 'a', from: 'GREEN', to: 'RED' }]);
});

test('new dimension not in snapshot is not a flip', () => {
  const cur = { dimensions: [{ id: 'b', verdict: 'GREEN' }] };
  const snap = { dimensions: [{ id: 'a', verdict: 'GREEN' }] };
  assert.deepEqual(compare(cur, snap), []);
});
