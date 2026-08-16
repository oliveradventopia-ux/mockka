'use client';

// Results tab, Classical construction (handoff 2a/2c): verdict header that
// states the gap in questions, coaching line behind the gold rule, domain
// rows barred against the threshold (a rule on the bar, never a colour),
// weak syllabus-rules cards (layer-gated) and the mistakes review. Every
// missed item links back into the exam tab via onJump. Result states are
// value-based — no green/red anywhere.

import type {
  ExamManifest,
  GradeReport,
  Question,
  SyllabusRules,
} from '@mockka/engine';

const NUM_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
] as const;

/** Smallest number of additional correct answers that would reach the pass
 *  line under the engine's Math.round pass rule. Presentation-only. */
function itemsShort(report: GradeReport, thresholdPct: number): number {
  let c = report.totalCorrect;
  while (
    c < report.totalItems &&
    Math.round((c / report.totalItems) * 100) < thresholdPct
  ) {
    c++;
  }
  return c - report.totalCorrect;
}

function verdictHeadline(report: GradeReport, thresholdPct: number): string {
  if (report.passed) return `Clear of the ${thresholdPct}% line`;
  const gap = itemsShort(report, thresholdPct);
  const word = NUM_WORDS[gap] ?? String(gap);
  return `${word} question${gap === 1 ? '' : 's'} short`;
}

export interface DashboardProps {
  manifest: ExamManifest;
  paper: Question[];
  syllabusRules: SyllabusRules | undefined;
  report: GradeReport | null;
  isCorrect(q: Question): boolean;
  elapsedLabel: string | null;
  onJump(questionId: string): void;
  onRequestSubmit(): void;
}

export function Dashboard(props: DashboardProps) {
  const { manifest, report } = props;
  const threshold = manifest.exam.pass_threshold_pct;

  if (!report) {
    return (
      <div className="card">
        <p className="mono-label">{manifest.title} · in progress</p>
        <h2 className="verdict-line">Scoring stays sealed</h2>
        <p className="lede" style={{ maxWidth: '44em', marginTop: 10 }}>
          A score built on partial answers would flatter you. Submit the exam
          to see your score, the per-domain breakdown against the {threshold}%
          line, and a review of every missed question with its rationale.
        </p>
        <div className="start-row">
          <button type="button" className="btn" onClick={props.onRequestSubmit}>
            Submit exam
          </button>
        </div>
      </div>
    );
  }

  const hasCoarseDomain = report.perDomain.some((d) => d.total < 5);

  return (
    <>
      <div className="card">
        <div className="verdict">
          <div>
            <p className="mono-label">
              {manifest.title} · {report.totalItems} items
            </p>
            <h2 className="verdict-line">{verdictHeadline(report, threshold)}</h2>
          </div>
          <div className="verdict-figures">
            <div>
              <p className="mono-label">Score</p>
              <p className="fig-lg num">
                {report.pct}
                <span className="fig-unit">%</span>
              </p>
            </div>
            <div>
              <p className="mono-label">Threshold</p>
              <p className="fig-md num muted-fig">{threshold}%</p>
            </div>
            <div>
              <p className="mono-label">Correct</p>
              <p className="fig-md num">
                {report.totalCorrect} / {report.totalItems}
              </p>
            </div>
          </div>
        </div>
        <div className="coach">
          <p>
            {report.passed
              ? `At or above the ${threshold}% pass threshold — ${report.totalCorrect} of ${report.totalItems} correct.`
              : `A pass needs ${threshold}% overall; ${itemsShort(report, threshold)} more correct answer${itemsShort(report, threshold) === 1 ? '' : 's'} would have reached the line.`}
            {props.elapsedLabel ? ` Completed in ${props.elapsedLabel}.` : ''}
          </p>
        </div>

        <h3>
          Domain performance
          <span className="h-note">
            bar = your score · rule = the {threshold}% line
          </span>
        </h3>
        <div className="grid">
          {report.perDomain.map((d) => {
            const idx = manifest.domains.findIndex((m) => m.id === d.domainId);
            const spec = idx === -1 ? undefined : manifest.domains[idx];
            const name = spec ? `Domain ${idx + 1}: ${spec.title}` : d.domainId;
            let needed = d.correct;
            while (
              needed < d.total &&
              Math.round((needed / d.total) * 100) < threshold
            ) {
              needed++;
            }
            const gap = needed - d.correct;
            // gap === 0 means the rounded pct sits at or above the line;
            // exactly on it reads "at the line", above it reads "clear".
            const atLine = gap === 0 && d.pct <= threshold;
            return (
              <div className="domain-card" key={d.domainId}>
                <div className="top">
                  <span className="name">{name}</span>
                  <span className="pct num">{d.pct}%</span>
                </div>
                <div className="bar">
                  <i
                    className={d.total < 5 ? 'pale' : undefined}
                    style={{ width: `${d.pct}%` }}
                  />
                  <span className="bar-rule" style={{ left: `${threshold}%` }} aria-hidden="true" />
                </div>
                <div className="sub num">
                  <span>
                    {d.correct} of {d.total} correct
                  </span>
                  <span className={`to-line${gap === 0 ? ' clear' : ''}`}>
                    {gap === 0 ? (atLine ? 'at the line' : 'clear') : `+${gap} item${gap === 1 ? '' : 's'}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {hasCoarseDomain ? (
          <p className="bar-footnote">
            Pale bar = fewer than 5 items in the domain; the percentage is too
            coarse to act on alone.
          </p>
        ) : null}
      </div>

      {manifest.layers.syllabus_rules && props.syllabusRules ? (
        <div className="card">
          <h2>Rules to revise</h2>
          <WeakRules {...props} />
        </div>
      ) : null}

      <div className="card">
        <h2>Mistakes review</h2>
        <Mistakes {...props} />
      </div>
    </>
  );
}

function WeakRules({ report, syllabusRules, paper, onJump }: DashboardProps) {
  if (!report || !syllabusRules) return null;
  const ruleById = new Map(syllabusRules.rules.map((r) => [r.id, r]));

  if (report.weakRules.length === 0) {
    const covered = new Set(
      paper.map((q) => q.syllabus_rule).filter((r): r is string => Boolean(r)),
    ).size;
    return (
      <div className="notice info">
        <strong>Every rule covered.</strong>
        You answered at least one question correctly against all {covered} syllabus
        rules, with no misses.
      </div>
    );
  }

  return (
    <>
      {report.weakRules.map((w) => {
        const rule = ruleById.get(w.ruleId);
        return (
          <div className="rule-card" key={w.ruleId}>
            <div className="rule-id">Rule {w.ruleId}</div>
            <div className="rule-title">{rule ? rule.title : w.ruleId}</div>
            {rule ? <div className="rule-gloss">{rule.gloss}</div> : null}
            <div className="rule-score">
              {w.correct} of {w.total} correct &nbsp;·&nbsp;{' '}
              {w.missedItemIds.map((id) => (
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  key={id}
                  onClick={() => onJump(id)}
                >
                  Review {id}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

function Mistakes({ manifest, paper, isCorrect, onJump }: DashboardProps) {
  const groups = manifest.domains
    .map((spec, idx) => ({
      name: `Domain ${idx + 1}: ${spec.title}`,
      missed: paper.filter((q) => q.domain === spec.id && !isCorrect(q)),
    }))
    .filter((g) => g.missed.length > 0);

  if (groups.length === 0) {
    return (
      <div className="notice info">
        <strong>Perfect score.</strong>
        Every question answered correctly.
      </div>
    );
  }

  return (
    <>
      {groups.map((g) => (
        <div className="miss-group" key={g.name}>
          <h4>
            {g.name} — {g.missed.length} missed
          </h4>
          {g.missed.map((q) => (
            <div className="miss" key={q.id}>
              <span className="stem">{q.question.slice(0, 130)}…</span>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => onJump(q.id)}
              >
                Review
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
