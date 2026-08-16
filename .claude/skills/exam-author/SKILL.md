---
name: exam-author
description: Author a Mockka exam's question bank (S4) in per-domain batches, or rework items bounced back from eval. Use when asked to "author questions", "write the bank", "run S4", "continue authoring <slug>", "rework the bounced items", or "apply the score report" for an exam package. Requires Gate 1 approval; clean-room — refuses in sessions that opened source texts.
---

# /exam-author — S4 authoring + bounce rework

Process contract for stage S4 of `methodology/00-pipeline.md`. Owner: exam-author.

## Preconditions — refuse if any fails

1. **Gate 1 is approved** for this exam (Oliver's approval on the `/exam-new` checklist). No
   approval → stop; do not author.
2. **Clean-room:** if this session has opened ANY registered source text (or any external prep
   material), **refuse** and instruct that authoring restart in a fresh session — per
   `methodology/01-source-distillation.md` §clean-room. Authoring works only from
   `content/<slug>/concepts.json`, `authoring.json`, `manifest.json`, and
   `content/<slug>/derivation/` artefacts.

## S4 — per-domain batches

For each domain, in blueprint order:

1. Author the domain's items into `content/<slug>/questions.json`, following the full procedure
   in `methodology/03-authoring-guide.md` (§procedure): uncovered concept → theme + underused
   vertical → scenario whose surface points AWAY from the right principle → each wrong option
   from a DIFFERENT distractor pattern (§patterns; respect manifest caps) → option-keyed
   rationale in canonical vocabulary. Difficulty pitch good-vs-best; style rules (manifest
   locale, no emoji, number consistency) apply.
2. **Run `pnpm validate <slug>` after each batch.** Fix reds before starting the next domain;
   never commit a red batch.
3. Commit per batch (feature branch, imperative message, e.g. `author <slug> domain 3 batch`).

When every concept is covered and the validator is green, hand off: S5 (`/exam-eval`) must run in
a **different, fresh session** — never evaluate what this session wrote.

## Bounce rework mode

When invoked with a score report from S5 (`eval/judge-scores.json` bounce entries, per
`methodology/05-eval-rubric.md` §bounce):

1. Rework **only the items and dimensions the report indicts** — the failing-dimension →
   procedure-step map is in `methodology/03-authoring-guide.md` (§bounce rework).
2. Respect the cap: an item at bounce 2 that would need a third pass goes to Gate 2 as a human
   decision — do not author a third rework.
3. Re-run `pnpm validate <slug>`, commit (`rework <slug> bounce <n>: <ids>`), and hand back for
   fresh S5 scoring.
