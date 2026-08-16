'use client';

// Attempt state hook: hydrates from the AttemptStore after mount (the server
// render is answer-free, so hydration never mismatches), persists every
// mutation, and drives the "Saved" autosave flash.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { AnswerValue, AttemptState } from '@mockka/engine';
import {
  emptyAttempt,
  localStorageAttemptStore,
  type AttemptStore,
} from './attempt-store.ts';
import { newShuffleSeed } from './shuffle.ts';

export interface UseAttempt {
  state: AttemptState;
  /** False until the stored attempt has been read (first client render). */
  hydrated: boolean;
  /** 'Saved' for ~1.2s after each write, then back to 'Autosaved'. */
  saveLabel: 'Autosaved' | 'Saved';
  setAnswer(questionId: string, value: AnswerValue): void;
  toggleFlag(questionId: string): void;
  startTimed(minutes: number): void;
  submit(): void;
  reset(): void;
}

export function useAttempt(
  slug: string,
  store: AttemptStore = localStorageAttemptStore,
): UseAttempt {
  const [state, setState] = useState<AttemptState>(emptyAttempt);
  const [hydrated, setHydrated] = useState(false);
  const [saveLabel, setSaveLabel] = useState<'Autosaved' | 'Saved'>('Autosaved');
  const stateRef = useRef(state);
  stateRef.current = state;
  const flashTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const stored = store.load(slug);
    if (stored && stored.seed !== null) {
      setState(stored);
    } else {
      // New attempt (or one saved before shuffle seeds existed): mint the
      // display-shuffle seed and persist immediately, so option order is
      // stable across refresh from the very first paint of this attempt.
      const seeded = { ...(stored ?? emptyAttempt()), seed: newShuffleSeed() };
      setState(seeded);
      store.save(slug, seeded);
    }
    setHydrated(true);
  }, [slug, store]);

  useEffect(() => () => clearTimeout(flashTimer.current), []);

  const persist = useCallback(
    (next: AttemptState) => {
      setState(next);
      stateRef.current = next;
      if (store.save(slug, next)) {
        setSaveLabel('Saved');
        clearTimeout(flashTimer.current);
        flashTimer.current = setTimeout(() => setSaveLabel('Autosaved'), 1200);
      }
    },
    [slug, store],
  );

  const setAnswer = useCallback(
    (questionId: string, value: AnswerValue) => {
      const cur = stateRef.current;
      if (cur.submitted) return;
      persist({ ...cur, answers: { ...cur.answers, [questionId]: value } });
    },
    [persist],
  );

  const toggleFlag = useCallback(
    (questionId: string) => {
      const cur = stateRef.current;
      if (cur.submitted) return;
      persist({ ...cur, flags: { ...cur.flags, [questionId]: !cur.flags[questionId] } });
    },
    [persist],
  );

  const startTimed = useCallback(
    (minutes: number) => {
      const cur = stateRef.current;
      if (cur.submitted) return;
      const now = Date.now();
      persist({ ...cur, timed: true, startedAt: now, endsAt: now + minutes * 60000 });
    },
    [persist],
  );

  const submit = useCallback(() => {
    const cur = stateRef.current;
    if (cur.submitted) return;
    persist({ ...cur, submitted: true, finishedAt: Date.now() });
  }, [persist]);

  const reset = useCallback(() => {
    store.clear(slug);
    // A reset starts a new attempt, so it gets a new shuffle seed (options
    // land in a different order — BD-1 hardening); persisted so the new order
    // also survives refresh. clear-then-save keeps storage empty, not stale,
    // if the save fails (private browsing).
    const fresh = { ...emptyAttempt(), seed: newShuffleSeed() };
    setState(fresh);
    stateRef.current = fresh;
    store.save(slug, fresh);
  }, [slug, store]);

  // Memoized: consumers hold this object in effect/callback deps (e.g. the
  // exam-player timer effect). A fresh object per render re-fired those deps
  // every render — the F3 timer re-render loop.
  return useMemo(
    () => ({ state, hydrated, saveLabel, setAnswer, toggleFlag, startTimed, submit, reset }),
    [state, hydrated, saveLabel, setAnswer, toggleFlag, startTimed, submit, reset],
  );
}
