// Draft semantics of the validate runner: the all-package walk skips drafts;
// an explicit slug validates a draft fully (the local preview path).

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runValidate } from '../src/validate/run.ts';
import type { DistractorPatternRegistry } from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');
const registry = JSON.parse(
  readFileSync(join(ROOT, 'methodology', 'distractor-patterns.json'), 'utf8'),
) as DistractorPatternRegistry;

test('the all-package walk skips draft packages', () => {
  // The fixtures dir holds only broken-exam, which is status draft.
  const lines: string[] = [];
  const code = runValidate({
    contentDir: join(HERE, 'fixtures'),
    registry,
    log: (l) => lines.push(l),
  });
  const out = lines.join('\n');
  assert.match(out, /broken-exam — skipped \(draft\)/);
  assert.ok(!out.includes('checks,'), 'no package should have been validated in the walk');
  assert.equal(code, 0);
});

test('an explicit slug validates a draft fully', () => {
  const lines: string[] = [];
  const code = runValidate({
    contentDir: join(HERE, 'fixtures'),
    registry,
    slug: 'broken-exam',
    log: (l) => lines.push(l),
  });
  assert.equal(code, 1);
  assert.match(lines.join('\n'), /broken-exam — \d+ checks, \d+ error\(s\)/);
});
