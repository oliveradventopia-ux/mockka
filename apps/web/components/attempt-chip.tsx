'use client';

// Catalog attempt-status chip. Reads the stored attempt after mount (the
// server-rendered card is state-free, so hydration never mismatches).

import { useEffect, useState } from 'react';
import { localStorageAttemptStore } from '../lib/attempt-store.ts';

type ChipState =
  | { kind: 'none' }
  | { kind: 'in-progress'; answered: number }
  | { kind: 'submitted' };

export function AttemptChip({ slug, itemCount }: { slug: string; itemCount: number }) {
  const [chip, setChip] = useState<ChipState>({ kind: 'none' });

  useEffect(() => {
    const state = localStorageAttemptStore.load(slug);
    if (!state) return;
    if (state.submitted) setChip({ kind: 'submitted' });
    else if (Object.keys(state.answers).length > 0) {
      setChip({ kind: 'in-progress', answered: Object.keys(state.answers).length });
    }
  }, [slug]);

  if (chip.kind === 'submitted') {
    return (
      <span className="attempt-chip" data-state="submitted">
        Submitted — results ready
      </span>
    );
  }
  if (chip.kind === 'in-progress') {
    return (
      <span className="attempt-chip" data-state="in-progress">
        In progress — {chip.answered} of {itemCount}
      </span>
    );
  }
  return <span className="attempt-chip">Not started</span>;
}
