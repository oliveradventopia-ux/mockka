'use client';

// One exam item. Dispatches on question.type to the three format renderers and
// carries the post-submit verdict, rationales and syllabus-rule reference.
// Class names mirror ccar-p src/styles.css so the ported CSS applies as-is.

import type {
  AnswerValue,
  MultipleResponseQuestion,
  Question,
  ScenarioMatchingQuestion,
  SingleChoiceQuestion,
  SyllabusRule,
} from '@mockka/engine';

const TYPE_LABEL: Record<Question['type'], string> = {
  single_choice: 'Multiple choice',
  multiple_response: 'Multiple response',
  scenario_matching: 'Scenario matching',
};

export interface QuestionCardProps {
  question: Question;
  /** 1-based position in the paper (stable across filtering). */
  num: number;
  answer: AnswerValue | undefined;
  flagged: boolean;
  answered: boolean;
  correct: boolean;
  submitted: boolean;
  domainLabel: string;
  rule: SyllabusRule | undefined;
  onAnswer(questionId: string, value: AnswerValue): void;
  onToggleFlag(questionId: string): void;
}

export function QuestionCard(props: QuestionCardProps) {
  const { question: q, num, submitted, answered, correct, flagged, rule } = props;
  const cls =
    'q' + (submitted ? (correct ? ' correct' : ' incorrect') : answered ? ' answered' : '');

  return (
    <article className={cls} id={`q-${q.id}`}>
      <div className="q-head">
        <div className="q-meta">
          <span className="q-num">Question {num}</span>
          <span className="tag">{props.domainLabel}</span>
          <span className="tag type">{TYPE_LABEL[q.type]}</span>
          {submitted && rule ? <span className="tag rule">Rule {rule.id}</span> : null}
        </div>
        <div className="q-meta">
          {submitted ? (
            <span className={`badge ${correct ? 'ok' : 'bad'}`}>
              {correct ? 'Correct' : 'Incorrect'}
            </span>
          ) : (
            <button
              type="button"
              className="flag-btn"
              aria-pressed={flagged}
              onClick={() => props.onToggleFlag(q.id)}
            >
              {flagged ? 'Flagged' : 'Flag for review'}
            </button>
          )}
        </div>
      </div>

      <div className="q-text">{q.question}</div>

      {q.type === 'single_choice' ? (
        <SingleChoice {...props} question={q} />
      ) : q.type === 'multiple_response' ? (
        <MultipleResponse {...props} question={q} />
      ) : (
        <ScenarioMatching {...props} question={q} />
      )}

      {submitted ? <Rationale question={q} rule={rule} /> : null}
    </article>
  );
}

/* ------------------------------------------------------------ single choice */

function SingleChoice(
  props: QuestionCardProps & { question: SingleChoiceQuestion },
) {
  const { question: q, submitted, answer } = props;
  const chosen = typeof answer === 'string' ? answer : null;

  return (
    <fieldset>
      <legend>{q.question}</legend>
      <div className="opts">
        {Object.entries(q.options).map(([key, text]) => {
          const picked = chosen === key;
          let cls = 'opt';
          if (submitted) {
            if (key === q.answer) cls += ' is-answer';
            else if (picked) cls += ' is-chosen-wrong';
          }
          return (
            <label className={cls} key={key}>
              <input
                type="radio"
                name={`q_${q.id}`}
                value={key}
                checked={picked}
                disabled={submitted}
                onChange={() => props.onAnswer(q.id, key)}
              />
              <span>
                <span className="key">{key}.</span>
                {text}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/* -------------------------------------------------------- multiple response */

function MultipleResponse(
  props: QuestionCardProps & { question: MultipleResponseQuestion },
) {
  const { question: q, submitted, answer } = props;
  const chosen = Array.isArray(answer) ? answer : [];
  const full = chosen.length >= q.select_count;

  function toggle(key: string) {
    const i = chosen.indexOf(key);
    const next =
      i !== -1 ? chosen.filter((k) => k !== key) : full ? chosen : [...chosen, key];
    if (next !== chosen) props.onAnswer(q.id, next);
  }

  return (
    <>
      <p className="q-instruction">Select {q.select_count}.</p>
      <fieldset>
        <legend>{q.question}</legend>
        <div className="opts">
          {Object.entries(q.options).map(([key, text]) => {
            const picked = chosen.includes(key);
            // At the selection limit the remaining boxes disable (with the hint
            // below) instead of the reference build's silent revert / alert().
            const locked = submitted || (full && !picked);
            let cls = 'opt';
            if (submitted) {
              if (q.answer.includes(key)) cls += ' is-answer';
              else if (picked) cls += ' is-chosen-wrong';
            }
            return (
              <label className={cls} key={key}>
                <input
                  type="checkbox"
                  name={`q_${q.id}`}
                  value={key}
                  checked={picked}
                  disabled={locked}
                  onChange={() => toggle(key)}
                />
                <span>
                  <span className="key">{key}.</span>
                  {text}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {!submitted && full ? (
        <p className="select-limit" role="status">
          All {q.select_count} selections used — untick one to change your answer.
        </p>
      ) : null}
    </>
  );
}

/* -------------------------------------------------------- scenario matching */

function ScenarioMatching(
  props: QuestionCardProps & { question: ScenarioMatchingQuestion },
) {
  const { question: q, submitted, answer } = props;
  const chosen: Record<string, string> =
    answer && typeof answer === 'object' && !Array.isArray(answer) ? answer : {};

  return (
    <>
      <p className="q-instruction">Options may be used more than once.</p>
      <div className="opts">
        {q.scenarios.map((s, i) => {
          const picked = chosen[s.id] ?? '';
          const right = q.answer[s.id];
          let cls = 'scenario';
          if (submitted) cls += picked === right ? ' is-correct' : ' is-wrong';
          return (
            <div className={cls} key={s.id}>
              <p>
                <strong>{i + 1}.</strong> {s.text}
              </p>
              <select
                value={picked}
                disabled={submitted}
                aria-label={`Answer for scenario ${i + 1}`}
                onChange={(e) =>
                  props.onAnswer(q.id, { ...chosen, [s.id]: e.target.value })
                }
              >
                <option value="">Select…</option>
                {q.matching_options.map((opt) => (
                  <option value={opt} key={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {submitted ? (
                picked === right ? (
                  <div className="verdict ok">Correct</div>
                ) : (
                  <div className="verdict bad">Correct answer: {right}</div>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- rationale */

function Rationale({
  question: q,
  rule,
}: {
  question: Question;
  rule: SyllabusRule | undefined;
}) {
  const distractors =
    q.type === 'scenario_matching' ? null : q.rationale.distractors;
  return (
    <div className="rationale">
      <h4>Why this is the answer</h4>
      <p>{q.rationale.correct}</p>
      {distractors && Object.keys(distractors).length > 0 ? (
        <div className="why-not">
          <h4>Why not the others</h4>
          {Object.entries(distractors).map(([key, text]) => (
            <div key={key}>
              <strong>{key}.</strong> {text}
            </div>
          ))}
        </div>
      ) : null}
      {rule ? (
        <div className="rule-ref">
          <strong>
            Rule {rule.id} — {rule.title}.
          </strong>{' '}
          {rule.gloss}
        </div>
      ) : null}
    </div>
  );
}
