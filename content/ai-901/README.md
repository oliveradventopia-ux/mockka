# Microsoft Azure AI Fundamentals (AI-901) — Mockka practice exam

A 42-question, blueprint-weighted practice exam across two skill areas — 45 minutes, 70% to
pass — drawn from a 56-item originally-authored bank, built with the
[Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

**Read this first: AI-901 is a new exam, not a renumbered AI-900.** Microsoft retired AI-900 on
30 June 2026 and replaced it; *Microsoft Certified: Azure AI Fundamentals* now requires AI-901.
The two exams are not close relatives. AI-900 had five describe-level skill areas and an
audience profile that explicitly required no code; AI-901 has **two** areas, gives 55–60% of
its weight to *implementing* solutions in Microsoft Foundry, and assumes Python syntax and
familiarity with REST APIs, SDKs and CLIs. AI-900's entire machine-learning-on-Azure area —
regression, classification, clustering, AutoML, evaluation metrics — has no counterpart
anywhere in the AI-901 objectives, and the service taxonomy it tested has been renamed and
re-platformed. This repository also holds an `ai-900` package. **Nothing was carried across
from it** — no concept, no vocabulary term, no distractor annotation. This blueprint was
distilled from scratch, and the discontinuity is itemized in
[`derivation/sources.md`](derivation/sources.md).

These questions are **originally authored**. They were written against:

- the **official AI-901 study guide** (skills measured as of 15 April 2026) — the two skill
  areas and their published weight ranges, the 29 objective bullets, the audience profile and
  the canonical vocabulary. This is the exam's *first* blueprint, so there is no change log to
  diff against yet
- the **official AI-901T00-A curriculum** and the two Microsoft Learn paths it maps to — 14
  modules and 103 units, free and readable without an account. The blueprint's bullets are
  terse and name the current implementation surface only in passing; the curriculum is where
  Microsoft Foundry, the Foundry SDK, Foundry Tools, Azure Content Understanding and Foundry IQ
  are actually taught, so it supplies the vocabulary the implementation half of this exam needs
- a **freely published community practice bank** (MIT-licensed, 196 items), analyzed under a
  strict clean-room rule for classification only
- general applied-AI, agent and Azure platform knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes, the 19 merges and 4 splits behind the 56-concept inventory, and the reasons
behind the three numbers Microsoft does not publish (the point weights, the item count, the
pass line).

**A convergence figure here needs a discount attached, so here it is.** 49 of the 56 concepts
compute to high priority on the mechanical "two or more sources" rule — but two of the three
attesting artefacts are Microsoft, and the third is a bank that was almost certainly generated
in a single LLM pass against the same public blueprint. Independence is thinner than 49/56
suggests. The number that carries real information is **vendor-external attestation: 37 of 56
concepts**, and it is unevenly spread — 22 of 24 in the concepts area against 15 of 32 in the
Foundry implementation area. The newest, heaviest half of this exam is the half with the least
outside corroboration. The full discount is written out in
[`derivation/master-inventory.md`](derivation/master-inventory.md).

Microsoft's own free practice assessment for AI-901 is registered and was **not accessed**: it
has moved to AI Skills Navigator and requires a signed-in account, and no account was created.
It carries zero weight in the inventory. It is named in the registry so the gap is visible
rather than silent, and it remains the single highest-value unlock for this package.

### Prior art

The freely published, MIT-licensed **`akashp18/ai901-exam-simulator`** bank on GitHub informed
the concept derivation and supplied every distractor-pattern frequency this package's caps are
set from. Its role was analytical classification only — recorded in
[`derivation/source-akashp-ai901-simulator.md`](derivation/source-akashp-ai901-simulator.md) —
with **zero text reuse**. It is credited with its limits attached, because the derivation
records them: it reads as a single-pass generated bank, and a quarter of its items are off the
AI-901 blueprint.

One further set deserves a mention precisely because it was *not* used. A well-built 210-item
community bank passed the dump screen cleanly and would have been easy to distil — and was
deliberately left out, because its own stated provenance is the two Microsoft sources this
package already holds directly. Adding it would have inflated the convergence count with a
derived reading of material already registered, which is convergence breadth bought at the cost
of convergence honesty.

Deliberately not credited, because they were rejected at intake: the AI-901 dump corpus across
ten named sites; a paid vendor advertising "latest real exam questions"; three freemium or
paywalled teasers; a repository whose items are mechanically generated from Microsoft Learn
unit text by committed scripts, and unlicensed besides; several unlicensed, pseudonymous
single-day repository drops with no methodology and nothing to screen. The evidence for each is
tabled in [`derivation/sources.md`](derivation/sources.md).

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the AI-901 item
bank, and no question reproduces an item encountered in a real sitting. Actual exam content is
confidential and protected by the Microsoft Certification Exam Candidate Agreement.

If you sit the certification, you are bound by that agreement too. Please do not open issues or
pull requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
Microsoft Corporation or Pearson VUE.** "Microsoft", "Azure", "Microsoft Foundry" and
"Microsoft Certified: Azure AI Fundamentals" are trademarks of the Microsoft group of
companies.

No practice set guarantees a pass. Use this alongside the official learning paths and hands-on
work in Microsoft Foundry.

### Format note

Microsoft draws from a wide item-type repertoire — multiple choice, multi-select and multi-part
items, build list, drag and drop, hot area, active screen, case studies and problem-solution
sets — and does not publish which of them appear on any given exam. Mockka supports three
formats, and the exam intro page carries the full mapping (from the manifest's
`format_coverage`). In short: multiple choice maps exactly; multi-part and multi-select map to
multiple response, **but this mock scores them all-or-nothing where Microsoft awards a point
per correct component, so scoring here is stricter than the real exam's**; drag and drop is
approximated by scenario matching. Build list, hot area, active screen, case studies and
problem-solution sets are **not rehearsed at all**.

That matters more for AI-901 than for a describe-level fundamentals exam. The majority of this
exam's weight sits on implementing solutions in Microsoft Foundry — work whose real assessment
involves portal screens, SDK code and CLI invocations — so a text-only mock necessarily tests
**recognition of the right implementation move rather than performance of it**. Format shares
here are a documented default rather than observed calibration, since the official practice
assessment was not accessed. And the 42-item form is a documented choice from Microsoft's
vendor-wide 40–60 band, sized to the 56 concepts the inventory supports; the 45-minute limit is
the vendor's real published exam time, kept unchanged, which makes a 42-item sitting here
slightly more generous per item than a 60-item one would be. The real exam mixes unidentified
unscored pilot items into the paper and reports a scaled 1–1,000 score with a 700 pass mark
that Microsoft says may not equal 70% of the points, so no percentage from this mock converts
to a Microsoft score.

### Revision note

This bank was remediated in **August 2026** for answer-position and option-shape cues. Thin
distractors were argued up to the key's length band, real sibling Azure and Foundry services
were named in distractors so that specificity no longer marks the key, justification riders
were spread across keys and distractors rather than clustering on the key, and key letters were
redistributed with the repository's deterministic seeded permutation tool. **No question's
meaning, key or teaching point was changed by this work** — re-lettering is structurally safe
here because rationales are keyed to options rather than to letters, and the validator enforces
that invariant. The defect class, its root cause and the remediation are recorded in
[ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md); the standard the
result is measured against is the cue-only solve ceiling in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
