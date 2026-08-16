// The validate runner — walk every content package, or validate one slug.
// Split from cli.ts so the walk behavior is testable without process.exit.

import { listExams, loadExam } from '../load.ts';
import { validateExam } from './index.ts';
import type { DistractorPatternRegistry, Finding } from '../types.ts';

const MAX_MESSAGES_PER_CHECK = 20;

export interface RunOptions {
  contentDir: string;
  registry: DistractorPatternRegistry;
  /** Explicit slug: validate that package fully, even a draft. */
  slug?: string;
  log?: (line: string) => void;
}

/** Returns the process exit code: 1 when any validated package fails. */
export function runValidate({ contentDir, registry, slug, log = console.log }: RunOptions): number {
  const slugs = slug ? [slug] : listExams(contentDir);
  if (slugs.length === 0) {
    log('no content packages found under content/');
    return 0;
  }

  let failed = false;

  for (const s of slugs) {
    let pkg;
    try {
      pkg = loadExam(contentDir, s);
    } catch (e) {
      log(`\n${s}: FAIL — could not load package: ${e instanceof Error ? e.message : String(e)}`);
      failed = true;
      continue;
    }

    // Draft semantics: the all-package walk skips drafts — a draft is
    // work-in-progress by definition and stays off the catalog/build too.
    // An explicit `pnpm validate <slug>` still validates a draft fully.
    if (!slug && pkg.manifest.status === 'draft') {
      log(`\n${s} — skipped (draft)`);
      continue;
    }

    const result = validateExam(pkg, registry);

    const byCheck = new Map<string, Finding[]>();
    for (const f of result.findings) {
      const list = byCheck.get(f.check) ?? [];
      list.push(f);
      byCheck.set(f.check, list);
    }
    const errors = result.findings.filter((f) => f.level === 'error').length;
    const warns = result.findings.length - errors;

    log(
      `\n${s} — ${result.checksRun.length} checks, ${errors} error(s), ${warns} warning(s)` +
        ` — ${result.ok ? 'PASS' : 'FAIL'}`,
    );
    for (const name of result.checksRun) {
      const findings = byCheck.get(name) ?? [];
      const hasError = findings.some((f) => f.level === 'error');
      const mark = hasError ? 'FAIL' : findings.length ? 'warn' : 'pass';
      log(`  [${mark}] ${name}${findings.length ? ` (${findings.length})` : ''}`);
      for (const f of findings.slice(0, MAX_MESSAGES_PER_CHECK)) {
        log(`         ${f.level}: ${f.message}`);
      }
      if (findings.length > MAX_MESSAGES_PER_CHECK) {
        log(`         … and ${findings.length - MAX_MESSAGES_PER_CHECK} more`);
      }
    }

    if (!result.ok) failed = true;
  }

  return failed ? 1 : 0;
}
