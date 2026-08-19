# Google Cloud Digital Leader — Mockka practice exam

A 60-question, blueprint-weighted practice exam across six sections — 90 minutes, 70% to
pass — drawn from an 83-item originally-authored bank, built with the
[Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

These questions are **originally authored**. They were written against:

- the **official Cloud Digital Leader exam guide** published by Google (the revision launched
  12 August 2026) — six sections and their approximate weights, 14 objectives and 69
  "considerations include" bullets, and the canonical product and concept vocabulary. Google
  publishes no version number for this document; the launch date in its footer is the only
  revision marker there is, and it is what `manifest.blueprint_version` records
- the **official certification page**, for the logistics the guide omits — the 50–60 question
  range, the 90-minute limit, delivery modes and validity
- **Google's own free sample-question set** — 29 items, published as a public form linked from
  the certification page and readable **without an account or a submission**. That is unusual
  among the vendors in this repo and worth saying plainly: the Tier-1 calibration source for
  this exam is genuinely public. It was read under the clean-room rule for analytical
  classification only, and because the form grades server-side, **no answer key was available
  or taken** — every "concept tested" judgment about those items is this project's own
  inference from the option set
- a **freely published third-party practice set**, analyzed for classification only
- general Google Cloud and cloud-adoption knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes, the 14 merges and 3 splits behind the 83-concept inventory, and the
sizing arithmetic.

**The honest limit on this build is age, not legality.** The blueprint was four days old when
it was distilled, and every accessible practice source predates it. Google's own sample set
still carries a "v4.0" title and names products by their pre-2026 identities; the third-party
set dates from 2021 and is organized under an outline Google no longer uses, so 14 of its 30
items are off-blueprint and were excluded. The consequence is stated rather than hidden: the
entire 2026 surface of this exam — agentic AI and the Gemini Enterprise agent platform, AI
Hypercomputer, Model Armor and AI Protection, the data supply chain, digital sovereignty — has
**no practice-source attestation at all** and was authored from the blueprint alone. That is
roughly the material the section weights push to the top of the paper. 30 of the 83 concepts
are corroborated by a practice source; the other 53 are blueprint-only.

Google's own learning path is registered in the source registry and was **not accessed** — it
sits behind a Google Skills account, and no account was created. It carries zero weight in the
inventory, and it is named there so the gap is visible rather than silent.

### Prior art

**Aditi Malhotra's** freely published Cloud Digital Leader practice questions (Whizlabs blog,
2021) informed the derivation and are credited here. Their role was analytical classification
only — per-item concept mapping and distractor-pattern frequencies, recorded in
[`derivation/source-whizlabs-cdl-free.md`](derivation/source-whizlabs-cdl-free.md) — with
**zero text reuse**. Their practical contribution was smaller than the item count suggests,
for the vintage reason above.

Several other candidate sources were **screened out and are deliberately not credited**. The
recalled-item corpus for this exam is large and mirrored under many brands; one GitHub
repository turned out to contain no questions at all, only marketing copy for a dump vendor;
another published harvested answer keys to Google's own graded module assessments — the same
class of appropriated vendor content as a brain dump, and precisely the material this project
declined to sign in for. Seven candidate classes were rejected, three of them screened
item-by-item against the dump corpus, with the evidence tabled in
[`derivation/sources.md`](derivation/sources.md).

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the Cloud Digital
Leader item bank, and no question reproduces an item encountered in a real sitting. Actual exam
content is confidential under the Google Cloud certification exam terms a candidate accepts
before testing.

If you sit the certification, you are bound by those terms too. Please do not open issues or
pull requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
Google LLC or its testing partners.** "Google Cloud", "Google" and "Cloud Digital Leader" are
trademarks of Google LLC.

No practice set guarantees a pass. Use this alongside the official learning path and hands-on
work in the console.

### Format note

The real exam uses two item formats — multiple choice and multiple select — and both map
exactly onto Mockka formats, so this exam's profile is a **subset** of what the player can
render. Mockka's third format, scenario_matching, has no counterpart on the real paper and is
set to zero throughout.

Two limits belong next to that, and the exam intro page carries them in full (from the
manifest's `format_coverage`). Google publishes no per-format count and its own sample set
contains no multiple-select item at all, so the real share is unpublished **and** unobserved;
the roughly 10% used here — one choose-two item per section — is this project's judgment.
And the real exam is delivered as 50–60 questions with **no published passing score** (Google
reports pass or fail only), so the 60-item form is built to the published upper bound and the
70% bar is a Mockka study aid, not a prediction of the real result.

### Revision note

This bank was remediated in **August 2026** for answer-position and option-shape cues. Option
sets across all six sections were brought to length parity so that the key's length rank
varies rather than sitting predictably at the top; distractors were given real sibling Google
Cloud services so that specificity no longer marks the key; and one near-duplicate option pair
was differentiated. Key letters were already near-uniformly distributed and were left as
authored. **No question's meaning, key or teaching point was changed by this work.** The defect
class, its root cause and the remediation are recorded in
[ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md); the standard the
result is measured against is the cue-only solve ceiling in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
