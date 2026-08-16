import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkIndex } from './index_check.mjs';

test('a file listed in the index is not missing', () => {
  const indexText = 'see [x](../templates/harness/00_index.md)';
  assert.deepEqual(checkIndex(indexText, ['templates/harness/00_index.md']), []);
});

test('an unlisted file is reported missing', () => {
  const missing = checkIndex('nothing here', ['templates/harness/00_index.md']);
  assert.deepEqual(missing, ['templates/harness/00_index.md']);
});
