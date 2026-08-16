'use client';

// Results tab: score ring vs the manifest pass threshold, per-domain grid,
// weak syllabus-rules cards (layer-gated) and the mistakes review. Every
// missed item links back into the exam tab via onJump.

import type {
  ExamManifest,
  GradeReport,
  Question,
  SyllabusRules,
} from '@mockka/engine';

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
        <h2>Results dashboard</h2>
        <p className="lede">
          Submit the exam to see your score, the per-domain breakdown and a
          review of every missed question with its rationale.
        </p>
        <div className="start-row">
          <button type="button" className="btn" onClick={props.onRequestSubmit}>
            Submit exam
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card">
        <h2>Your result</h2>
        <div className="score-card">
          <div className={`ring ${report.passed ? 'pass' : 'fail'}`}>
            <div className="pct">{report.pct}%</div>
            <div className="frac">
              {report.totalCorrect} / {report.totalItems}
            </div>
          </div>
          <div>
            <h3 style={{ margin: 0 }}>
              {report.passed
                ? `Pass — at or above the ${threshold}% threshold`
                : `Below the ${threshold}% threshold`}
            </h3>
            <p className="lede" style={{ margin: '6px 0 0' }}>
              A pass needs {threshold}% overall.
              {props.elapsedLabel ? ` Completed in ${props.elapsedLabel}.` : ''}
            </p>
          </div>
        </div>

        <h3>By domain</h3>
        <div className="grid">
          {report.perDomain.map((d) => {
            const idx = manifest.domains.findIndex((m) => m.id === d.domainId);
            const spec = idx === -1 ? undefined : manifest.domains[idx];
            const name = spec ? `Domain ${idx + 1}: ${spec.title}` : d.domainId;
            const colour =
              d.pct >= threshold ? 'var(--ok)' : d.pct >= 60 ? 'var(--warn)' : 'var(--bad)';
            return (
              <div className="domain-card" key={d.domainId}>
                <div className="top">
                  <span className="name">{name}</span>
                  <span className="pct" style={{ color: colour }}>
                    {d.pct}%
                  </span>
                </div>
                <div className="sub">
                  {d.correct} of {d.total} correct
                </div>
                <div className="bar">
                  <i style={{ width: `${d.pct}%`, background: colour }} />
                </div>
              </div>
            );
          })}
        </div>
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
