// pnpm validate [slug] — validate one or all content packages under content/.
// Exit 1 on any error-level finding. Runs directly under node's native
// TypeScript type-stripping; no build step.

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { listExams, loadExam } from '../load.ts';
import { validateExam } from './index.ts';
import type { DistractorPatternRegistry, Finding } from '../types.ts';

// packages/engine/src/validate/cli.ts -> repo root is four levels up.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..');
const CONTENT_DIR = join(ROOT, 'content');
const REGISTRY_PATH = join(ROOT, 'methodology', 'distractor-patterns.json');

const MAX_MESSAGES_PER_CHECK = 20;

function main(): number {
  const registry = JSON.parse(readFileSync(REGISTRY_PATH, 'utf8')) as DistractorPatternRegistry;

  const slugArg = process.argv[2];
  const slugs = slugArg ? [slugArg] : listExams(CONTENT_DIR);
  if (slugs.length === 0) {
    console.log('no content packages found under content/');
    return 0;
  }

  let failed = false;

  for (const slug of slugs) {
    let result;
    try {
      const pkg = loadExam(CONTENT_DIR, slug);
      result = validateExam(pkg, registry);
    } catch (e) {
      console.error(`\n${slug}: FAIL — could not load package: ${e instanceof Error ? e.message : String(e)}`);
      failed = true;
      continue;
    }

    const byCheck = new Map<string, Finding[]>();
    for (const f of result.findings) {
      const list = byCheck.get(f.check) ?? [];
      list.push(f);
      byCheck.set(f.check, list);
    }
    const errors = result.findings.filter((f) => f.level === 'error').length;
    const warns = result.findings.length - errors;

    console.log(
      `\n${slug} — ${result.checksRun.length} checks, ${errors} error(s), ${warns} warning(s)` +
        ` — ${result.ok ? 'PASS' : 'FAIL'}`,
    );
    for (const name of result.checksRun) {
      const findings = byCheck.get(name) ?? [];
      const hasError = findings.some((f) => f.level === 'error');
      const mark = hasError ? 'FAIL' : findings.length ? 'warn' : 'pass';
      console.log(`  [${mark}] ${name}${findings.length ? ` (${findings.length})` : ''}`);
      for (const f of findings.slice(0, MAX_MESSAGES_PER_CHECK)) {
        console.log(`         ${f.level}: ${f.message}`);
      }
      if (findings.length > MAX_MESSAGES_PER_CHECK) {
        console.log(`         … and ${findings.length - MAX_MESSAGES_PER_CHECK} more`);
      }
    }

    if (!result.ok) failed = true;
  }

  return failed ? 1 : 0;
}

process.exit(main());
