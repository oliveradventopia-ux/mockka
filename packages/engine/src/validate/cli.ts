// pnpm validate [slug] — validate one or all content packages under content/.
// Exit 1 on any error-level finding. Runs directly under node's native
// TypeScript type-stripping; no build step. The walk logic lives in run.ts
// (testable); this file is the thin process entry.

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runValidate } from './run.ts';
import type { DistractorPatternRegistry } from '../types.ts';

// packages/engine/src/validate/cli.ts -> repo root is four levels up.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');

const registry = JSON.parse(
  readFileSync(join(ROOT, 'methodology', 'distractor-patterns.json'), 'utf8'),
) as DistractorPatternRegistry;

process.exit(
  runValidate({ contentDir: join(ROOT, 'content'), registry, slug: process.argv[2] }),
);
