// Server-side content-package location. Next runs `next build`/`next dev` with
// process.cwd() = apps/web, while the packages live at the repo root, so the
// directory is resolved by walking upward until a content/ dir that actually
// holds exam manifests appears. Never import from client components.

import { dirname, join } from 'node:path';
import { listExams } from '@mockka/engine';

let cached: string | null = null;

/** Absolute path of the repo's content/ dir (first ancestor holding manifests). */
export function contentDir(): string {
  if (cached) return cached;
  let dir = process.cwd();
  for (;;) {
    const candidate = join(dir, 'content');
    if (listExams(candidate).length > 0) {
      cached = candidate;
      return candidate;
    }
    const parent = dirname(dir);
    if (parent === dir) {
      throw new Error(
        `no content/ directory with exam manifests found above ${process.cwd()}`,
      );
    }
    dir = parent;
  }
}
