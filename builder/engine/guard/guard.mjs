// guard/ — the generic loop-guard.
// Closes the "agent loops instead of failing" class (fail-fast, not spin):
//   - withTimeout: any op that hangs past `ms` rejects instead of blocking forever.
//   - LoopGuard: a bounded iteration + per-step timeout wrapper for agentic loops.

export class TimeoutError extends Error {
  constructor(message) { super(message); this.name = 'TimeoutError'; }
}

export class IterationLimitError extends Error {
  constructor(message) { super(message); this.name = 'IterationLimitError'; }
}

/** Race a promise (or a thunk returning one) against a timeout. */
export function withTimeout(input, ms, label = 'operation') {
  const work = typeof input === 'function' ? Promise.resolve().then(input) : Promise.resolve(input);
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new TimeoutError(`${label} exceeded ${ms}ms`)), ms);
  });
  return Promise.race([work, timeout]).finally(() => clearTimeout(timer));
}

/** Bounds an iterative/agentic loop: caps iterations and times out each step. */
export class LoopGuard {
  constructor({ maxIterations = 10, timeoutMs = 30_000, label = 'loop' } = {}) {
    this.maxIterations = maxIterations;
    this.timeoutMs = timeoutMs;
    this.label = label;
    this.iterations = 0;
  }

  /** Advance one iteration; throws once the cap is exceeded (fail-fast). */
  tick() {
    if (++this.iterations > this.maxIterations) {
      throw new IterationLimitError(`${this.label} exceeded ${this.maxIterations} iterations`);
    }
    return this.iterations;
  }

  /** tick() + run `fn` under the per-step timeout. */
  async step(fn) {
    this.tick();
    return withTimeout(fn, this.timeoutMs, `${this.label} step ${this.iterations}`);
  }
}
