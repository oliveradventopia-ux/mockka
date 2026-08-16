---
name: exam-eval
description: Run the S5 quality eval on a Mockka exam bank — blind solve, Codex advisory cross-solve, 6-dimension judge rubric, overlap screen, bounce reports. Use when asked to "eval the bank", "run S5", "blind-solve <slug>", "judge the questions", "score the exam", or after authoring completes. Independence-gated — refuses to run in any session that edited the exam's questions.json.
---

# /exam-eval — S5 quality eval

Process contract for stage S5 of `methodology/00-pipeline.md`. Owner: exam-examiner — a role that
**never authors**.

## Independence precondition — refuse, no override

If this session has written or edited `content/<slug>/questions.json` (any Write/Edit this
conversation), **refuse to run** and instruct that S5 be executed in a fresh session by
exam-examiner. Evaluating your own authoring is D20 self-review-anchoring
(`methodology/03-authoring-guide.md` §d20); the rule and its rationale are in
`methodology/05-eval-rubric.md` §independence. Also require `pnpm validate <slug>` green before
starting — eval measures quality, not well-formedness.

## Protocol — execute `methodology/05-eval-rubric.md` in order

1. **Blind solve** (§blind-solve): generate the keyless form (stems + options only); answer every
   item with confidence (high/medium/low) + one-line reasoning BEFORE consulting the key; diff
   against the key → `content/<slug>/eval/blind-solve.json`. Every high-confidence miss is a
   defect candidate queued for human adjudication (miskeyed / co-correct / legitimately hard).
2. **Codex advisory cross-solve** (§codex): same keyless form through the `codex` CLI; build the
   3-way Claude/Codex/key disagreement matrix into `blind-solve.json`. ANY disagreement →
   auto-add the item to the Gate 2 sample. Advisory only — never a blocker by itself; if `codex`
   is unavailable, record that and proceed.
3. **Judge rubric** (§judge): score every item 1–5 on the six dimensions, **arguing FOR each
   distractor first** → `content/<slug>/eval/judge-scores.json`. Thresholds: any dimension ≤2 →
   bounce; any 3 → Gate 2 sample.
4. **Bounce reports** (§bounce): for each below-threshold item, append the bounce entry
   (failing dimensions, judge case, defect_class, required_fix). Cap 2 bounces; cap-breakers go
   to the Gate 2 list, not back to the author.
5. **Overlap screen** (§overlap): shingle overlap vs lawfully-held source texts; where texts are
   not held, record the process control instead → `content/<slug>/eval/overlap-report.md`.

## Output

Commit `eval/*.json` + `overlap-report.md` (imperative message, e.g. `eval <slug>: s5 round <n>`),
then report: items passing / bounced (with score reports for `/exam-author`) / the assembled
Gate 2 sample list (§handoff), and the open human-adjudication queue.
