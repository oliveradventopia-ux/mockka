// Grading — pure functions ported from ccar-p-mock-exam src/app.js.
// Semantics are kept exactly: answer-shape guards, set equality for
// multiple response, all-scenarios-required for matching, Math.round
// percentages (47/63 -> 75), pass at pct >= threshold.

import type {
  AnswerValue,
  DomainScore,
  ExamManifest,
  GradeReport,
  Question,
  SyllabusRules,
  WeakRule,
} from './types.ts';

/** True when the question counts as answered (MR requires exactly select_count picks). */
export function isAnswered(q: Question, answer: AnswerValue | null | undefined): boolean {
  if (answer == null) return false;
  if (q.type === 'single_choice') {
    return typeof answer === 'string' && answer.length > 0;
  }
  if (q.type === 'multiple_response') {
    return Array.isArray(answer) && answer.length === q.select_count;
  }
  if (typeof answer !== 'object' || Array.isArray(answer)) return false;
  const picks = answer as Record<string, string>;
  return q.scenarios.every((s) => Boolean(picks[s.id]));
}

/** Exact-match grading per format. Partial multiple-response credit does not exist. */
export function isCorrect(q: Question, answer: AnswerValue | null | undefined): boolean {
  if (answer == null) return false;
  if (q.type === 'single_choice') {
    return answer === q.answer;
  }
  if (q.type === 'multiple_response') {
    return (
      Array.isArray(answer) &&
      answer.length === q.answer.length &&
      q.answer.every((k) => answer.includes(k))
    );
  }
  if (typeof answer !== 'object' || Array.isArray(answer)) return false;
  const picks = answer as Record<string, string>;
  return q.scenarios.every((s) => picks[s.id] === q.answer[s.id]);
}

/**
 * Grade a full sitting. `weakRules` is populated only when the syllabus-rules
 * layer is on and rules are supplied; it mirrors the CCAR-P dashboard: every
 * rule with at least one miss, sorted worst-ratio first, then by rule id.
 */
export function gradeAttempt(
  paper: Question[],
  answers: Record<string, AnswerValue>,
  manifest: ExamManifest,
  syllabusRules?: SyllabusRules,
): GradeReport {
  const totalItems = paper.length;
  const totalCorrect = paper.filter((q) => isCorrect(q, answers[q.id])).length;
  const pct = totalItems === 0 ? 0 : Math.round((totalCorrect / totalItems) * 100);
  const passed = pct >= manifest.exam.pass_threshold_pct;

  const perDomain: DomainScore[] = [];
  for (const d of manifest.domains) {
    const items = paper.filter((q) => q.domain === d.id);
    if (items.length === 0) continue;
    const correct = items.filter((q) => isCorrect(q, answers[q.id])).length;
    perDomain.push({
      domainId: d.id,
      correct,
      total: items.length,
      pct: Math.round((correct / items.length) * 100),
    });
  }

  const weakRules: WeakRule[] = [];
  if (syllabusRules && manifest.layers.syllabus_rules) {
    const byRule = new Map<string, { total: number; correct: number; missed: string[] }>();
    for (const q of paper) {
      const ruleId = q.syllabus_rule;
      if (!ruleId) continue;
      let s = byRule.get(ruleId);
      if (!s) {
        s = { total: 0, correct: 0, missed: [] };
        byRule.set(ruleId, s);
      }
      s.total += 1;
      if (isCorrect(q, answers[q.id])) s.correct += 1;
      else s.missed.push(q.id);
    }
    for (const [ruleId, s] of byRule) {
      if (s.missed.length > 0) {
        weakRules.push({ ruleId, correct: s.correct, total: s.total, missedItemIds: s.missed });
      }
    }
    weakRules.sort(
      (a, b) => a.correct / a.total - b.correct / b.total || a.ruleId.localeCompare(b.ruleId),
    );
  }

  return { totalCorrect, totalItems, pct, passed, perDomain, weakRules };
}
