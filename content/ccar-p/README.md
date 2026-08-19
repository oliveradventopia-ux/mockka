# Claude Certified Architect – Professional (CCAR-P) — Mockka practice exam

A 63-question, blueprint-weighted practice exam drawn from an 85-item originally-authored
bank, built with the [Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

These questions are **originally authored**. They were written against:

- the **CCAR-P course recap** — 24 architectural rules across five modules, held as own
  notes from the legitimately accessed official course, which supplied the concepts and
  the canonical vocabulary used throughout
- the **publicly published exam blueprint** — the seven domains and their percentage
  weights, plus the format profile
- a **freely published practice set**, analysed under a strict clean-room rule
  (concept-per-item and distractor-pattern classification only — never its text)
- general Claude platform and LLM systems-architecture knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts
each source contributes and where they converge — 38 of the 85 concepts are attested by
two independent readings of the same blueprint.

### Prior art

**Matthew Purcell's** freely published CCAR-P practice set demonstrated that a full-length
practice exam was both possible and wanted, and informed this project's structural
conventions. Its analytical derivation is recorded in
[`derivation/purcell-distillation.md`](derivation/purcell-distillation.md) — classification
only, containing no question, option, or rationale text from that set.

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the Claude
Certified Architect – Professional item bank, and no question reproduces an item
encountered in a real sitting. Actual exam content is confidential and protected by NDA.

If you sit the certification, you are bound by that NDA too. Please do not open issues or
pull requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected
to Anthropic, PBC or Pearson VUE.** Claude is a trademark of Anthropic, PBC.

No practice set guarantees a pass. Use this alongside hands-on architecture work and the
official course material.

### Revision note

This bank was remediated in August 2026 for answer-position and option-shape cues: keys
were redistributed across option letters and 63 items had their keyed option brought to
length parity with its distractors. Question meaning was not changed. The remediation and
its measured before/after are recorded in
[ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md), and the exam now
clears the cue-only solve ceiling defined in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
