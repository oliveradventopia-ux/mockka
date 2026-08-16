import test from 'node:test';
import assert from 'node:assert/strict';

test('engine module loads', async () => {
  const engine = await import('../src/index.ts');
  assert.ok(engine);
});
