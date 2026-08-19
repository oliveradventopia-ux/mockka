# Microsoft Azure Fundamentals (AZ-900) — Mockka practice exam

A 50-question, blueprint-weighted practice exam across three skill areas — 45 minutes, 70% to
pass — drawn from a 65-item originally-authored bank, built with the
[Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

These questions are **originally authored**. They were written against:

- the **official AZ-900 study guide** on Microsoft Learn (skills measured as of 20 July 2026) —
  three skill areas with their published weight *bands*, 12 skill groups and 57 objective
  bullets, the canonical vocabulary and the change log. Microsoft publishes bands rather than
  point weights, so the manifest's 28/38/34 are band midpoints normalized to sum to 100, each
  still inside its published band; the arithmetic is tabled in
  [`derivation/sources.md`](derivation/sources.md) so it can be checked rather than trusted
- the **Microsoft Learn AZ-900 curriculum** — the three official learning paths, 12 modules and
  their 35 knowledge-check questions, free and readable without sign-in. Microsoft does not
  publish keys for those knowledge checks, so each item's key was determined analytically
  during distillation and marked where it was not unambiguous. That strengthens the clean-room
  position rather than weakening it — nothing was copied — but the attributions are judgment
- **two freely published third-party practice sets**, analyzed under a strict clean-room rule
  for classification only
- general Azure platform, cloud-economics and governance knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes, the 12 splits and 4 merges behind the 65-concept inventory, and why the
bank landed at 65 rather than 67 — the largest size the honest merge reaches without padding or
splitting a closed discrimination family into flashcard halves.

**Convergence here is counted more strictly than the raw source count would allow.** The study
guide and the Learn curriculum are both Microsoft and are treated as **one author**, so a
concept only reaches high priority when Microsoft plus at least one third party attest it. That
convention diverges from the validator's mechanical two-or-more-sources computation for exactly
five concepts; those five stay visible as warnings rather than being silenced, because a
documented authoring judgment should be arguable, not hidden.

Microsoft's own free practice assessment for AZ-900 is registered and was **not accessed**: it
sits behind a Microsoft Learn account, and no account was created. It carries zero weight in
the inventory, and the trade is worth stating plainly — it is the only Tier-1 practice source
for this exam, so without it **every format-mix claim in this package rests on third parties**.
One further source, a well-regarded free video course with per-episode practice tests, was
deferred rather than rejected: it is built against the pre-2021 outline and would have imported
a five-year-old paper shape.

### Prior art

Two freely published practice sets informed the concept derivation and distractor calibration,
credited here by name:

- **Jon Bonso / Tutorials Dojo's** free AZ-900 sample questions —
  [`derivation/source-tutorialsdojo-az900.md`](derivation/source-tutorialsdojo-az900.md).
  Small, but it earns a specific mention: it is the only accessible source demonstrating
  Microsoft's non-multiple-choice item shapes, and it is therefore the evidential basis for
  this package's format-coverage disclosure below
- **Inside Cloud and Security's** free 100-question AZ-900 quiz —
  [`derivation/source-insidecloud-az900.md`](derivation/source-insidecloud-az900.md). Credited
  with its limits attached: the page names no individual author and carries no licence
  statement, so its only permission basis is free public publication plus classification-only
  use, and 21 of its 100 items key outside the current skills outline and were excluded from
  concept evidence

Both were used as classification-only sources — per-item concept mapping, off-blueprint audit
and distractor-pattern frequencies — with **zero text reuse**.

Deliberately not credited, because they were rejected at intake: the recalled-item corpora and
their mirror sites; a 351-star GitHub bank with **no licence at all** whose lowest-numbered
items land squarely in that corpus and whose text carries OCR scars, the signature of material
lifted from screenshots rather than authored; and two MIT-licensed repositories that scraped
*that* bank and say so in their own READMEs — a permissive licence covers a repository, not the
provenance of the items inside it. Also excluded: a paid product behind a five-question teaser,
and homework-help sites re-hosting other people's items with the attribution stripped. The
evidence for each is in [`derivation/sources.md`](derivation/sources.md).

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the AZ-900 item
bank, and no question reproduces an item encountered in a real sitting. Actual exam content is
confidential and protected by the Microsoft Certification exam agreement.

If you sit the certification, you are bound by that agreement too. Please do not open issues or
pull requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
Microsoft Corporation or Pearson VUE.** "Microsoft", "Azure", "Microsoft Entra", "Microsoft
Purview" and "Microsoft Certified: Azure Fundamentals" are trademarks of the Microsoft group of
companies.

No practice set guarantees a pass. Use this alongside the official learning paths and hands-on
work in the Azure portal.

### Format note

Microsoft declines to publish the item types used on any given exam. What it does publish is
the sample list demoed in its exam sandbox — multiple choice, drag and drop, hot area, build
list, active screen and case studies — plus confirmation that problem-solution question sets
exist, where one scenario is restated with a different proposed solution and answered yes or
no. Mockka supports three formats, and the exam intro page carries the full mapping (from the
manifest's `format_coverage`).

In short: multiple choice maps exactly; multi-select maps to multiple response; drag and drop
is approximated by scenario matching; hot area is approximated by all-or-nothing multiple
response, which loses the per-statement no-branch; build list is approximated by single choice
over candidate orderings. The problem-solution *judgment* — does this proposal actually satisfy
the stated requirement? — is exercised inside standard four-option items, but neither its
two-option yes/no mechanic nor the series relationship is reproduced. **Active screen and case
studies are not represented at all**; their underlying concepts are authored as standalone
items.

Two scoring divergences sit alongside: the real exam awards partial credit on multi-part items
where this mock's multiple response is all-or-nothing, and the real exam reports a scaled
1–1,000 score with 700 to pass — which Microsoft states may not equal 70% of the points — where
this mock reports percent correct against a 70% bar. The 50-item form is likewise modelled, not
published: it is the midpoint of Microsoft's vendor-wide 40–60 band.

### Revision note

This bank was remediated in **August 2026** for answer-position and option-shape cues. Thin
distractors were argued up to the key's length band, distractors were given named-entity parity
with their keys so that naming a real Azure service no longer marks the key, justification
riders were balanced across keys and distractors, the matching items' option lists were
deranged so listed order carries no information, and key letters were rebalanced. **No
question's meaning, key or teaching point was changed by this work** — re-lettering is
structurally safe here because rationales are keyed to options rather than to letters, and the
validator enforces that invariant. The defect class, its root cause and the remediation are
recorded in [ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md); the
standard the result is measured against is the cue-only solve ceiling in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
