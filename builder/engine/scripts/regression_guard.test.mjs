import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateRegistry } from './regression_guard.mjs';

test('empty registry is valid', () => {
  assert.deepEqual(validateRegistry({ agenticPaths: [], harnessPaths: [], dimensions: [] }), []);
});

test('missing arrays are flagged', () => {
  const errors = validateRegistry({});
  assert.ok(errors.length >= 3);
});

test('bad dimension type and duplicate ids are flagged', () => {
  const errors = validateRegistry({
    agenticPaths: [],
    harnessPaths: [],
    dimensions: [
      { id: 'a', type: 'nope' },
      { id: 'a' },
    ],
  });
  assert.ok(errors.some((e) => e.includes("type")));
  assert.ok(errors.some((e) => e.includes('duplicate')));
});

test('non-numeric floor is flagged', () => {
  const errors = validateRegistry({
    agenticPaths: [],
    harnessPaths: [],
    dimensions: [{ id: 'a', floor: 'high' }],
  });
  assert.ok(errors.some((e) => e.includes('floor')));
});
