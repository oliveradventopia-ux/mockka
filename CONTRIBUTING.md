# Contributing

Corrections and improvements are welcome. The most valuable contributions are:

1. **A keyed answer you believe is wrong** — with reasoning
2. **A distractor defensible enough to be a second correct answer** — these are genuine defects
3. **A rationale whose reasoning doesn't hold** — even if the keyed answer is right
4. **A concept from an exam's syllabus that no question tests**

## The one rule that cannot bend

**Never submit real exam content — from any certification programme.** No question,
option, or scenario from an actual exam sitting. Exam content is confidential and
NDA-protected. PRs containing it will be closed without merging and the content
removed. Mockka's provenance validation rejects banks that cannot document their
derivation, so harvested content cannot ship even if it slips past review.

## Contributing your own mock papers or question sets

If you own a question set and want it in Mockka, two lanes exist:

- **Licensed import:** your material carries (or you grant) a commercial-compatible
  license — CC BY, MIT, Apache-2.0, or an explicit author agreement. Items enter the
  bank with `licensed_import` provenance and attribution, and must pass the full eval
  gauntlet (validator + blind solve + judge rubric) before publication.
- **Classification source:** any freely-published material can serve as a distillation
  source — we record what concepts it tests, never its text.

Either way you must attest that the material is yours and contains no NDA-protected
exam content.

## Editing questions

Questions live in `content/<exam-slug>/questions.json`. Run the validator after any
edit:

```bash
pnpm validate <exam-slug>   # must pass
```

### Item schema (summary)

```jsonc
{
  "id": "1.1",
  "domain": "d1",                      // short id; titles live in manifest.json
  "primary_concept": "C-007",          // must exist in concepts.json
  "syllabus_rule": "1.03",             // optional layer; see manifest layers
  "theme": "T1",                       // per-exam theme set in authoring.json
  "vertical": "energy",
  "keywords": ["reference architectures", "live state"],
  "type": "single_choice",             // single_choice | multiple_response | scenario_matching
  "question": "...",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "answer": "B",
  "distractor_patterns": { "A": "D19", "C": "D10", "D": "D09" },
  "rationale": {
    "correct": "Why the keyed answer is right. Must NOT name an option letter.",
    "distractors": { "A": "…", "C": "…", "D": "…" }
  }
}
```

**The invariant that matters most:** no rationale text — `rationale.correct` or any
`rationale.distractors` value — may reference an option letter, and `rationale.distractors`
must have exactly one entry per non-answer option. The validator's `rationale-anti-drift`
and `rationale-letter-reference` checks enforce this on every run, so an explanation that
argues against its own answer key cannot pass the gate.

## Authoring a new question

Read `methodology/03-authoring-guide.md` first. In short:

1. Pick an uncovered concept from the exam's `concepts.json`
2. Pick a theme and a vertical not already overused
3. Write a scenario whose surface features point *away* from the right principle
4. Build each distractor from a **different** numbered pattern (D01–D20)
5. Write the rationale using the concept's canonical vocabulary

Whether an item enters the served exam form is a separate decision in
`selection.json` — propose the swap explicitly and say which item it replaces.

## Style

- Follow the exam's `manifest.json` style block (spelling locale, no emoji)
- Distractors must be *defensible but inferior*, never obviously wrong
- Numbers cited in a rationale must match the question stem exactly

## Reporting without a PR

Open an issue. Include the exam slug + question id and what you think is wrong.
