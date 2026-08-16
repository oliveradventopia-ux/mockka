import { test } from 'node:test';
import assert from 'node:assert/strict';
import { withTimeout, LoopGuard, TimeoutError, IterationLimitError } from './guard.mjs';

test('withTimeout resolves a fast op', async () => {
  const r = await withTimeout(async () => 42, 100, 'fast');
  assert.equal(r, 42);
});

test('withTimeout rejects a slow op (fail-fast, not hang)', async () => {
  await assert.rejects(
    withTimeout(new Promise((r) => setTimeout(() => r(1), 100)), 10, 'slow'),
    TimeoutError,
  );
});

test('LoopGuard bounds iterations instead of spinning', () => {
  const g = new LoopGuard({ maxIterations: 3, label: 'x' });
  g.tick();
  g.tick();
  g.tick();
  assert.throws(() => g.tick(), IterationLimitError);
  assert.equal(g.iterations, 4);
});

test('LoopGuard.step enforces the per-step timeout', async () => {
  const g = new LoopGuard({ maxIterations: 5, timeoutMs: 10 });
  await assert.rejects(g.step(() => new Promise((r) => setTimeout(r, 100))), TimeoutError);
});
