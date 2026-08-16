import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RunMeter, BudgetExceededError, estimateCostMicros } from './meter.mjs';

test('RunMeter accumulates events', () => {
  const m = new RunMeter({ label: 't' });
  m.record({ tokens: 100, ms: 5 });
  m.record({ tokens: 50, ms: 3 });
  const s = m.summary();
  assert.equal(s.tokens, 150);
  assert.equal(s.ms, 8);
  assert.equal(s.events, 2);
  assert.equal(s.overBudget, false);
});

test('RunMeter halts on a budget crossing (fail-closed, not lament)', () => {
  const m = new RunMeter({ budgetTokens: 100, label: 't' });
  m.record({ tokens: 90 });
  assert.throws(() => m.record({ tokens: 20 }), BudgetExceededError);
});

test('estimateCostMicros is positive and tier-ordered (opus > haiku)', () => {
  const opus = estimateCostMicros('opus', 1000, 'out');
  const haiku = estimateCostMicros('haiku', 1000, 'out');
  assert.ok(opus > 0);
  assert.ok(opus > haiku);
});
