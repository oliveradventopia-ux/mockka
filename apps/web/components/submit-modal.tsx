'use client';

// Focus-trapped confirm dialog. Focus lands on the confirm button on open, Tab
// cycles inside the card, Escape cancels, and the caller restores focus to the
// invoking control on close (see ExamPlayer).

import { useEffect, useRef, type ReactNode } from 'react';

export interface SubmitModalProps {
  title: string;
  confirmLabel: string;
  onConfirm(): void;
  onCancel(): void;
  children: ReactNode;
}

const FOCUSABLE =
  'button, [href], select, input, [tabindex]:not([tabindex="-1"])';

export function SubmitModal({ title, confirmLabel, onConfirm, onCancel, children }: SubmitModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    confirmRef.current?.focus();
  }, []);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onCancel();
      return;
    }
    if (e.key !== 'Tab' || !cardRef.current) return;
    const focusable = Array.from(
      cardRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
    ).filter((n) => !n.hasAttribute('disabled'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="modal"
      role="presentation"
      onKeyDown={onKeyDown}
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        ref={cardRef}
      >
        <h3 id="modalTitle">{title}</h3>
        <div>{children}</div>
        <div className="modal-actions">
          <button type="button" className="btn btn-outline" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="btn" onClick={onConfirm} ref={confirmRef}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
