import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findControlBytes, checkFiles } from './control_byte_check.mjs';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// NOTE: control bytes below are CONSTRUCTED (Buffer.from([...])) — never authored raw.
// Authoring them raw is exactly the L-0002 bug this check enforces against; writing this
// test file the naive way reproduced the bug (a third time) before being constructed.

test('clean text has no hits; tab/newline/CR allowed', () => {
  assert.deepEqual(findControlBytes(Buffer.from('hello\tworld\r\n')), []);
});

test('a NUL byte is caught (the L-0002 bug)', () => {
  const hits = findControlBytes(Buffer.from([0x61, 0x00, 0x62])); // "a<NUL>b"
  assert.equal(hits.length, 1);
  assert.equal(hits[0].byte, 0);
});

test('DEL and other C0 controls are caught', () => {
  const hits = findControlBytes(Buffer.from([0x41, 0x7f, 0x42, 0x01]));
  assert.equal(hits.length, 2);
});

test('checkFiles flags a source file containing a control byte, skips non-text ext', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'cbc-'));
  try {
    const bad = Buffer.concat([Buffer.from('const d = "a'), Buffer.from([0x00]), Buffer.from('b";\n')]);
    writeFileSync(join(tmp, 'bad.mjs'), bad);
    writeFileSync(join(tmp, 'good.mjs'), 'const ok = true;\n');
    writeFileSync(join(tmp, 'photo.png'), Buffer.from([0x00, 0x01, 0x02])); // non-text ext ignored
    const problems = checkFiles(['bad.mjs', 'good.mjs', 'photo.png'], tmp);
    assert.equal(problems.length, 1);
    assert.ok(problems[0].includes('bad.mjs'));
    assert.ok(problems[0].includes('0x00'));
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});
