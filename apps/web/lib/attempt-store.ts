// Attempt persistence seam (ADR-0001). P0 ships the localStorage adapter only;
// P1 login migration adds a Supabase adapter behind the same interface and
// upserts the identical state shape into attempts.state.

import type { AttemptState } from '@mockka/engine';

export interface AttemptStore {
  load(slug: string): AttemptState | null;
  save(slug: string, state: AttemptState): boolean;
  clear(slug: string): void;
}

export function emptyAttempt(): AttemptState {
  return {
    answers: {},
    flags: {},
    submitted: false,
    timed: false,
    endsAt: null,
    startedAt: null,
    finishedAt: null,
  };
}

export function storageKey(slug: string): string {
  return `mockka.${slug}.v1`;
}

/** Coerce an untrusted parsed payload into a well-formed AttemptState. */
function normalize(raw: unknown): AttemptState {
  const s = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const base = emptyAttempt();
  return {
    answers:
      s.answers && typeof s.answers === 'object' && !Array.isArray(s.answers)
        ? (s.answers as AttemptState['answers'])
        : base.answers,
    flags:
      s.flags && typeof s.flags === 'object' && !Array.isArray(s.flags)
        ? (s.flags as AttemptState['flags'])
        : base.flags,
    submitted: Boolean(s.submitted),
    timed: Boolean(s.timed),
    endsAt: typeof s.endsAt === 'number' ? s.endsAt : null,
    startedAt: typeof s.startedAt === 'number' ? s.startedAt : null,
    finishedAt: typeof s.finishedAt === 'number' ? s.finishedAt : null,
  };
}

export const localStorageAttemptStore: AttemptStore = {
  load(slug) {
    try {
      const raw = window.localStorage.getItem(storageKey(slug));
      if (!raw) return null;
      return normalize(JSON.parse(raw));
    } catch {
      return null; // corrupt payload or storage unavailable — start clean
    }
  },
  save(slug, state) {
    try {
      window.localStorage.setItem(storageKey(slug), JSON.stringify(state));
      return true;
    } catch {
      return false; // private browsing — run without persistence
    }
  },
  clear(slug) {
    try {
      window.localStorage.removeItem(storageKey(slug));
    } catch {
      /* storage unavailable — nothing to clear */
    }
  },
};
