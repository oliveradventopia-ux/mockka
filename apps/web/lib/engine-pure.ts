// Client-safe engine surface. The @mockka/engine barrel re-exports load.ts
// and the validator, which import node:fs/node:path — webpack refuses those in
// a client bundle. Grading is pure, so client components import it from the
// score module directly through this seam. Server components keep using the
// barrel; types are erased and safe from either.

export {
  gradeAttempt,
  isAnswered,
  isCorrect,
} from '../../../packages/engine/src/score.ts';
