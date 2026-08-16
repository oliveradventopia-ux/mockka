'use client';

// The in-page 3-tab exam player (intro | exam | dashboard), porting the proven
// CCAR-P interaction model: filters, navigator, flag-for-review, opt-in timer
// that survives refresh, focus-trapped submit confirm and the results
// dashboard. State persists per ADR-0001 via useAttempt/AttemptStore.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  gradeAttempt,
  isAnswered as engineIsAnswered,
  isCorrect as engineIsCorrect,
} from '../lib/engine-pure.ts';
import type {
  ExamManifest,
  Question,
  SyllabusRules,
} from '@mockka/engine';
import { useAttempt } from '../lib/use-attempt.ts';
import { QuestionCard } from './question-card.tsx';
import { Navigator } from './navigator.tsx';
import { Dashboard } from './dashboard.tsx';
import { SubmitModal } from './submit-modal.tsx';

export interface ExamPlayerProps {
  slug: string;
  manifest: ExamManifest;
  paper: Question[];
  syllabusRules?: SyllabusRules;
}

const TABS = ['intro', 'exam', 'dashboard'] as const;
type TabName = (typeof TABS)[number];
const TAB_LABEL: Record<TabName, string> = {
  intro: 'Introduction',
  exam: 'Exam',
  dashboard: 'Dashboard',
};

function prefersReducedMotion(): boolean {
  return (
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function ExamPlayer({ slug, manifest, paper, syllabusRules }: ExamPlayerProps) {
  const attempt = useAttempt(slug);
  const { state } = attempt;

  const [tab, setTab] = useState<TabName>('intro');
  const [domainFilter, setDomainFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [modal, setModal] = useState<'submit' | 'reset' | null>(null);
  const [jumpTarget, setJumpTarget] = useState<{ id: string } | null>(null);
  const [timerNow, setTimerNow] = useState<number | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const openedResults = useRef(false);

  const answered = useCallback(
    (q: Question) => engineIsAnswered(q, state.answers[q.id]),
    [state.answers],
  );
  const correct = useCallback(
    (q: Question) => engineIsCorrect(q, state.answers[q.id]),
    [state.answers],
  );

  const answeredCount = paper.filter(answered).length;
  const flaggedCount = paper.filter((q) => state.flags[q.id]).length;

  const ruleById = useMemo(
    () => new Map((syllabusRules?.rules ?? []).map((r) => [r.id, r])),
    [syllabusRules],
  );
  const domainIndex = useMemo(
    () => new Map(manifest.domains.map((d, i) => [d.id, i])),
    [manifest],
  );
  const domainLabel = useCallback(
    (id: string) => {
      const i = domainIndex.get(id);
      return i === undefined ? id : `Domain ${i + 1}`;
    },
    [domainIndex],
  );

  const report = useMemo(
    () =>
      state.submitted
        ? gradeAttempt(paper, state.answers, manifest, syllabusRules)
        : null,
    [state.submitted, state.answers, paper, manifest, syllabusRules],
  );

  /* ------------------------------------------------------------ tab logic */

  const showTab = useCallback((name: TabName, focusTab = false) => {
    setTab(name);
    if (focusTab) {
      // The target tab button may re-render; focus after paint.
      setTimeout(() => document.getElementById(`tab-${name}`)?.focus(), 0);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // A submitted attempt reopens on its results (CCAR-P parity).
  useEffect(() => {
    if (attempt.hydrated && state.submitted && !openedResults.current) {
      openedResults.current = true;
      setTab('dashboard');
    }
  }, [attempt.hydrated, state.submitted]);

  function onTabKey(e: React.KeyboardEvent<HTMLButtonElement>) {
    const i = TABS.indexOf(e.currentTarget.id.replace('tab-', '') as TabName);
    if (i === -1) return;
    let next: TabName | null = null;
    if (e.key === 'ArrowRight') next = TABS[(i + 1) % TABS.length] ?? null;
    else if (e.key === 'ArrowLeft') next = TABS[(i - 1 + TABS.length) % TABS.length] ?? null;
    else if (e.key === 'Home') next = TABS[0];
    else if (e.key === 'End') next = TABS[TABS.length - 1] ?? null;
    if (!next) return;
    e.preventDefault();
    showTab(next, true);
  }

  /* --------------------------------------------------------------- submit */

  // Depends on the stable submit callback, not the attempt object identity —
  // the timer effect below holds finalise in its deps, so finalise must not
  // change while the timer runs (the F3 re-render loop).
  const { submit: submitAttempt } = attempt;
  const finalise = useCallback(() => {
    submitAttempt();
    setModal(null);
    showTab('dashboard');
  }, [submitAttempt, showTab]);

  const requestSubmit = useCallback(() => {
    const missing = paper.length - paper.filter(answered).length;
    if (missing > 0) {
      lastFocused.current = document.activeElement as HTMLElement | null;
      setModal('submit');
      return;
    }
    finalise();
  }, [paper, answered, finalise]);

  function closeModal() {
    setModal(null);
    lastFocused.current?.focus();
    lastFocused.current = null;
  }

  function requestReset() {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setModal('reset');
  }

  function doReset() {
    attempt.reset();
    openedResults.current = false;
    setModal(null);
    setDomainFilter('ALL');
    setStatusFilter('ALL');
    showTab('intro');
  }

  /* ---------------------------------------------------------------- timer */

  const { timed, endsAt, submitted } = state;
  useEffect(() => {
    if (!attempt.hydrated || !timed || !endsAt || submitted) return;
    const check = () => {
      setTimerNow(Date.now());
      if (Date.now() >= endsAt) finalise();
    };
    check();
    const tick = setInterval(check, 1000);
    return () => clearInterval(tick);
  }, [attempt.hydrated, timed, endsAt, submitted, finalise]);

  const timerVisible = timed && !submitted && endsAt !== null && timerNow !== null;
  const msLeft = timerVisible ? Math.max(0, (endsAt as number) - (timerNow as number)) : 0;
  const timerMins = Math.floor(msLeft / 60000);
  const timerSecs = Math.floor((msLeft % 60000) / 1000);
  const timerState = msLeft <= 5 * 60000 ? 'critical' : msLeft <= 15 * 60000 ? 'warn' : '';

  function startTimed() {
    attempt.startTimed(manifest.exam.time_limit_minutes);
    showTab('exam');
  }

  const elapsedLabel =
    state.startedAt && state.finishedAt
      ? `${Math.floor((state.finishedAt - state.startedAt) / 60000)} of ${manifest.exam.time_limit_minutes} minutes`
      : null;

  /* ----------------------------------------------------------------- jump */

  const onJump = useCallback((id: string) => {
    setDomainFilter('ALL');
    setStatusFilter('ALL');
    setTab('exam');
    setJumpTarget({ id });
  }, []);

  // Runs post-commit, so the filter reset and tab switch from onJump are
  // already in the DOM. Resetting jumpTarget first would re-fire the effect,
  // so the lookup happens before the reset.
  useEffect(() => {
    if (!jumpTarget) return;
    const el = document.getElementById(`q-${jumpTarget.id}`);
    setJumpTarget(null);
    if (!el) return;
    el.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'center',
    });
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 2000);
    // Move the caret with the viewport so keyboard users land on the question.
    const firstInput = el.querySelector<HTMLElement>('input, select');
    if (firstInput && !firstInput.hasAttribute('disabled')) {
      firstInput.focus({ preventScroll: true });
    }
  }, [jumpTarget]);

  /* -------------------------------------------------------------- filters */

  const visible = paper
    .map((q, i) => ({ q, num: i + 1 }))
    .filter(({ q }) => {
      if (domainFilter !== 'ALL' && q.domain !== domainFilter) return false;
      const isDone = answered(q);
      if (statusFilter === 'ANSWERED' && !isDone) return false;
      if (statusFilter === 'UNANSWERED' && isDone) return false;
      if (statusFilter === 'FLAGGED' && !state.flags[q.id]) return false;
      return true;
    });

  /* --------------------------------------------------------------- render */

  const missing = paper.length - answeredCount;

  return (
    <div className="exam-shell">
      <header className="site">
        <div className="header-inner">
          <div className="brand">
            <a className="back-link" href="/">
              ← All exams
            </a>
            <h1>{manifest.title}</h1>
            <p>
              Original practice questions for the {manifest.vendor} certification —
              never live exam content.
            </p>
          </div>
          <div className="header-tools">
            <span className="pill" id="progressPill">
              {answeredCount} / {paper.length}
            </span>
            {flaggedCount > 0 && !submitted ? (
              <span className="pill">{flaggedCount} flagged</span>
            ) : null}
            <span
              className={`pill${attempt.saveLabel === 'Saved' ? ' saved' : ''}`}
              role="status"
            >
              {attempt.saveLabel}
            </span>
            {timerVisible ? (
              <span
                className="timer"
                data-state={timerState}
                aria-label={`${timerMins} minutes ${timerSecs} seconds remaining`}
              >
                {timerMins}:{timerSecs < 10 ? `0${timerSecs}` : timerSecs}
              </span>
            ) : null}
            <button type="button" className="btn btn-ghost btn-sm" onClick={requestReset}>
              Reset
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => (submitted ? showTab('dashboard') : requestSubmit())}
            >
              {submitted ? 'View results' : 'Submit exam'}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <div className="tabs" role="tablist" aria-label="Exam sections">
          {TABS.map((t) => (
            <button
              type="button"
              role="tab"
              key={t}
              id={`tab-${t}`}
              className="tab"
              aria-selected={tab === t}
              aria-controls={`panel-${t}`}
              tabIndex={tab === t ? 0 : -1}
              onClick={() => showTab(t)}
              onKeyDown={onTabKey}
            >
              {TAB_LABEL[t]}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------- intro */}
        <div
          role="tabpanel"
          id="panel-intro"
          aria-labelledby="tab-intro"
          hidden={tab !== 'intro'}
        >
          <div className="card">
            <h2>About this exam</h2>
            {manifest.status !== 'published' ? (
              <p className="status-note">
                This exam is {manifest.status === 'in_review' ? 'in review' : manifest.status} —
                content may still be refined before publication.
              </p>
            ) : null}
            <ul className="overview">
              <li>
                <strong>{manifest.exam.item_count} questions</strong> weighted to the
                official blueprint across {manifest.domains.length} domains:
                <ul className="tight" style={{ marginTop: 8 }}>
                  {manifest.domains.map((d, i) => (
                    <li key={d.id}>
                      Domain {i + 1}: {d.title} — {d.exam_items} items
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>{manifest.exam.time_limit_minutes} minutes</strong> in timed
                mode, or take it untimed as open practice. The timer keeps running
                across a page reload and submits for you at zero.
              </li>
              <li>
                <strong>Pass threshold: {manifest.exam.pass_threshold_pct}%.</strong>{' '}
                After submitting you get a per-domain breakdown, the rationale for
                every answer and a review list of what to revise.
              </li>
              <li>
                <strong>Answers autosave in this browser.</strong> Leave and come
                back any time — your attempt resumes where you stopped. Nothing is
                uploaded.
              </li>
            </ul>
            {manifest.format_coverage ? (
              <div className="notice info">
                <strong>Format coverage</strong>
                {manifest.format_coverage}
              </div>
            ) : null}
            {attempt.hydrated && !submitted && answeredCount > 0 ? (
              <div className="notice info">
                <strong>Attempt in progress</strong>
                You have answered {answeredCount} of {paper.length} questions.
                Continue below — your answers are saved.
              </div>
            ) : null}
            <div className="start-row">
              {!submitted ? (
                <>
                  <button type="button" className="btn" onClick={startTimed} disabled={timed}>
                    {timed
                      ? 'Timed exam running'
                      : `Start timed exam (${manifest.exam.time_limit_minutes} min)`}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => showTab('exam')}
                  >
                    {answeredCount > 0 ? 'Continue practice' : 'Practice untimed'}
                  </button>
                </>
              ) : (
                <button type="button" className="btn" onClick={() => showTab('dashboard')}>
                  View results
                </button>
              )}
            </div>
            <div className="colophon">
              <p className="fineprint">{manifest.provenance.nda_statement}</p>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- exam */}
        <div
          role="tabpanel"
          id="panel-exam"
          aria-labelledby="tab-exam"
          hidden={tab !== 'exam'}
        >
          <Navigator
            paper={paper}
            isAnswered={answered}
            isCorrect={correct}
            flags={state.flags}
            submitted={submitted}
            onJump={onJump}
          />

          <div className="filters">
            <label htmlFor="filterDomain">Domain</label>
            <select
              id="filterDomain"
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
            >
              <option value="ALL">All domains ({paper.length})</option>
              {manifest.domains.map((d, i) => {
                const n = paper.filter((q) => q.domain === d.id).length;
                if (n === 0) return null;
                return (
                  <option value={d.id} key={d.id}>
                    Domain {i + 1}: {d.title} ({n})
                  </option>
                );
              })}
            </select>
            <label htmlFor="filterStatus">Show</label>
            <select
              id="filterStatus"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All questions</option>
              <option value="ANSWERED">Answered</option>
              <option value="UNANSWERED">Unanswered</option>
              <option value="FLAGGED">Flagged</option>
            </select>
          </div>

          <div>
            {visible.length === 0 ? (
              <div className="empty">No questions match these filters.</div>
            ) : (
              visible.map(({ q, num }) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  num={num}
                  answer={state.answers[q.id]}
                  flagged={Boolean(state.flags[q.id])}
                  answered={answered(q)}
                  correct={correct(q)}
                  submitted={submitted}
                  domainLabel={domainLabel(q.domain)}
                  rule={q.syllabus_rule ? ruleById.get(q.syllabus_rule) : undefined}
                  onAnswer={attempt.setAnswer}
                  onToggleFlag={attempt.toggleFlag}
                />
              ))
            )}
          </div>
        </div>

        {/* --------------------------------------------------- dashboard */}
        <div
          role="tabpanel"
          id="panel-dashboard"
          aria-labelledby="tab-dashboard"
          hidden={tab !== 'dashboard'}
        >
          <Dashboard
            manifest={manifest}
            paper={paper}
            syllabusRules={syllabusRules}
            report={report}
            isCorrect={correct}
            elapsedLabel={elapsedLabel}
            onJump={onJump}
            onRequestSubmit={requestSubmit}
          />
        </div>
      </main>

      <footer className="exam-foot">
        <div className="footer-inner">
          <div className="progress">
            Answered {answeredCount} of {paper.length} <span>questions</span>
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => (submitted ? showTab('dashboard') : requestSubmit())}
          >
            {submitted ? 'View results' : 'Submit exam'}
          </button>
        </div>
      </footer>

      {modal === 'submit' ? (
        <SubmitModal
          title={`Submit with ${missing} unanswered?`}
          confirmLabel="Submit anyway"
          onConfirm={finalise}
          onCancel={closeModal}
        >
          <p>
            You have {missing} unanswered question{missing === 1 ? '' : 's'}.
            Submitting locks your answers and reveals the answer key and rationales
            for every question.
          </p>
        </SubmitModal>
      ) : null}
      {modal === 'reset' ? (
        <SubmitModal
          title="Reset the exam?"
          confirmLabel="Reset everything"
          onConfirm={doReset}
          onCancel={closeModal}
        >
          <p>
            This clears all {paper.length} answers, your flags and the timer, and
            cannot be undone.
          </p>
        </SubmitModal>
      ) : null}
    </div>
  );
}
