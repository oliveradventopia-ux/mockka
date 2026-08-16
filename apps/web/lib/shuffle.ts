// Seeded display shuffle — BD-1 render hardening (aif-c01 S5 eval-report §8).
//
// Option display order derives from (attempt seed, question id): stable across
// refresh within an attempt (the seed persists in AttemptState), varied between
// attempts (reset mints a new seed), and identical for every scenario dropdown
// within one item (same salt). Display-only: the option keys/values and answer
// semantics never change, so grading stays letter-correct and the rationale's
// option letters still match what the candidate saw. A null seed returns the
// identity order — the server render and pre-hydration client paint use it, so
// hydration never mismatches. Data-level key balance is still required (the
// `key-position-distribution` check): exports and print forms see JSON order.

/** 32-bit FNV-1a — a cheap deterministic string hash for seed mixing. */
export function hashString(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** mulberry32 — a tiny deterministic PRNG; plenty for a display shuffle. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fisher–Yates over a copy, seeded by (seed, salt). Null seed = identity
 * order. Salt with the question id so each item shuffles independently.
 */
export function seededOrder<T>(items: readonly T[], seed: number | null, salt: string): T[] {
  const out = [...items];
  if (seed === null || out.length < 2) return out;
  const rand = mulberry32(hashString(`${seed}:${salt}`) || 1);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = out[i]!;
    out[i] = out[j]!;
    out[j] = tmp;
  }
  return out;
}

/** Mint a per-attempt seed. Not security-relevant — it orders a display list. */
export function newShuffleSeed(): number {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const a = new Uint32Array(1);
    crypto.getRandomValues(a);
    return a[0]!;
  }
  return Math.floor(Math.random() * 0x100000000);
}
