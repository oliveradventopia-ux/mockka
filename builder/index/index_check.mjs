#!/usr/bin/env node
// R7 drift-check: every doc-bearing markdown file is listed in INDEX.md, so the map can't rot.
// This is the free, flat alternative to a semantic index (see NON-GOALS.md).
import { walk, readText, exists, isMain } from '../engine/lib/fsx.mjs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const INDEX = join(ROOT, 'index', 'INDEX.md');
const DOC_DIRS = ['templates/harness', 'docs', 'orchestrator'];

export function checkIndex(indexText, files) {
  const missing = [];
  for (const relPath of files) {
    if (!indexText.includes(relPath)) missing.push(relPath);
  }
  return missing;
}

function main() {
  if (!exists(INDEX)) {
    console.error('index-check — index/INDEX.md missing');
    process.exit(1);
  }
  const files = DOC_DIRS.flatMap((d) => walk(join(ROOT, d), { ext: '.md' })).map((p) => p.replace(`${ROOT}/`, ''));
  const missing = checkIndex(readText(INDEX), files);
  if (missing.length) {
    console.error(`index-check (R7) FAIL — not listed in INDEX.md:\n - ${missing.join('\n - ')}`);
    process.exit(1);
  }
  console.log(`index-check (R7): OK — ${files.length} doc-bearing files all in INDEX.md`);
  process.exit(0);
}

if (isMain(import.meta.url)) main();
