'use client';

// Per-question overview grid. Under a clock the thing a candidate needs most is
// to see what is still outstanding and reach it in one action, which scrolling
// and filters do not give. Every cell carries a state-describing aria-label.

import { useState } from 'react';
import type { Question } from '@mockka/engine';

export interface NavigatorProps {
  paper: Question[];
  isAnswered(q: Question): boolean;
  isCorrect(q: Question): boolean;
  flags: Record<string, boolean>;
  submitted: boolean;
  onJump(questionId: string): void;
}

export function Navigator({ paper, isAnswered, isCorrect, flags, submitted, onJump }: NavigatorProps) {
  const [open, setOpen] = useState(true);
  const answered = paper.filter(isAnswered).length;
  const flagged = paper.filter((q) => flags[q.id]).length;
  const counts = submitted
    ? `${paper.filter(isCorrect).length} of ${paper.length} correct`
    : `${answered} answered, ${paper.length - answered} left` +
      (flagged ? `, ${flagged} flagged` : '');

  return (
    <div className="nav-panel">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="navBody"
        onClick={() => setOpen((v) => !v)}
      >
        <span>
          Question navigator <span aria-hidden className="chev">▸</span>
        </span>
        <span className="counts">{counts}</span>
      </button>
      <div className="nav-body" id="navBody" hidden={!open}>
        <div className="nav-grid">
          {paper.map((q, i) => {
            const done = isAnswered(q);
            const isFlagged = Boolean(flags[q.id]);
            let label = `Question ${i + 1}`;
            const attrs: Record<string, string> = {
              'data-answered': String(done),
              'data-flagged': String(isFlagged),
            };
            if (submitted) {
              const ok = isCorrect(q);
              attrs['data-correct'] = String(ok);
              label += ok ? ', correct' : ', incorrect';
            } else {
              label += done ? ', answered' : ', not yet answered';
              if (isFlagged) label += ', flagged for review';
            }
            return (
              <button
                type="button"
                className="nav-cell"
                key={q.id}
                aria-label={label}
                onClick={() => onJump(q.id)}
                {...attrs}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <div className="nav-key" aria-hidden>
          <span>
            <i /> Unanswered
          </span>
          <span>
            <i className="done" /> Answered
          </span>
          <span>
            <i className="flag" /> Flagged
          </span>
        </div>
      </div>
    </div>
  );
}
