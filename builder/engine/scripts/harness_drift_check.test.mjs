import { test } from 'node:test';
import assert from 'node:assert/strict';
import { anchorsOf, localLinks } from './harness_drift_check.mjs';

test('anchorsOf collects declared anchors and flags duplicates', () => {
  const { set, dups } = anchorsOf('# A {#one}\n## B {#two}\n### C {#one}');
  assert.ok(set.has('one'));
  assert.ok(set.has('two'));
  assert.deepEqual(dups, ['one']);
});

test('anchorsOf ignores anchors inside fenced code blocks', () => {
  const { set } = anchorsOf('real {#real}\n```\nnot an anchor {#fake}\n```');
  assert.ok(set.has('real'));
  assert.ok(!set.has('fake'));
});

test('localLinks returns only local targets (not URLs)', () => {
  const links = localLinks('[a](./x.md) [b](https://y.com) [c](../z.md#anchor) [d](#local)');
  assert.deepEqual(links, ['./x.md', '../z.md#anchor']);
});
