# CompTIA Security+ (SY0-701) — Mockka practice exam

A 90-question, blueprint-weighted practice exam across five domains — 90 minutes, 81% to
pass — drawn from a 122-item originally-authored bank, built with the
[Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

These questions are **originally authored**. They were written against:

- the **CompTIA Security+ SY0-701 Exam Objectives, Version 5.0** — the certification owner's
  own objectives document: five domains and their weights, 28 objectives with their enumerated
  vocabulary, the test details and the acronym list. CompTIA does not link this PDF from the
  certification page and routes its own download through a lead-capture form, which no one
  here filled in; the copy used was taken from CompTIA's own content CDN and verified
  byte-identical against an authorized partner mirror before a word was distilled from it, with
  the hash recorded
- **CompTIA's own free practice questions** — the 10-item sampler published on comptia.org with
  no paywall and no sign-in, answer key printed on the same page. Small, but it is the only
  vendor-authored calibration available without paying, and it is what fixed this bank's
  four-option single-choice shape and its scenario-led register
- a **freely published community practice bank** (145 items), analyzed under a strict
  clean-room rule for classification only
- general security-operations, architecture and governance knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes and the merge decisions behind the 122-concept inventory. 82 of the 122
concepts are corroborated by at least one practice source; the other 40 are objectives-only.

**The structural decision worth knowing about** is that the objectives document yields 237
distinct concept rows and this bank holds 122 items. Rather than pad the bank or silently drop
two-fifths of the blueprint, related rows were **merged into families grouped by the judgment
that discriminates them** — the same move the objectives' own "compare and contrast" verbs
make. So a bank item here often tests a family of related terms with the family's own members
as its distractor set, and every one of the 237 rows is still traceable to the concept that
absorbed it. The reasoning, and what it costs, is written out in
[`derivation/master-inventory.md`](derivation/master-inventory.md).

Two open items are recorded rather than smoothed over: the community bank carries **no licence
file**, so its author retains copyright and its classification-only use is flagged for
sign-off rather than assumed; and third-party document sites reference a Version 6.0 of the
objectives whose existence could not be confirmed from CompTIA's own download — every
secondary description reports identical domains, weights and test details, so the blueprint
data is not at risk, but the revision string is marked unverified. Professor Messer's pop-quiz
archive and the ExamCompass practice tests were registered and **not** distilled: both are free
and legitimate, but each withholds its answer key behind a per-item interaction, and a practice
source whose keys cannot be read cannot be classified honestly.

### Prior art

The freely published **`jealarue/exam90`** SY0-701 practice bank on GitHub informed the concept
derivation and the distractor-pattern frequency analysis, and is credited here. Its role was
analytical classification only — per-item concept mapping and pattern labels, recorded in
[`derivation/source-jealarue-exam90.md`](derivation/source-jealarue-exam90.md) — with **zero
text reuse**.

Security+ is the most dump-saturated exam in this repository, so screening ran **before**
distillation and the rejections are as documented as the registrations. Deliberately not
credited, because they were rejected: the recalled-item corpora and their mirror sites; five
GitHub repositories that describe themselves as dumps; a repository whose MIT licence covered
the application while the banks inside it were exports of a paid course and a "premium" PDF —
a permissive licence cannot launder someone else's material any more than it can launder
recalled exam content; and a repository advertising notes from the author's own sitting. The
evidence for each is in [`derivation/sources.md`](derivation/sources.md).

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the SY0-701 item
bank, and no question reproduces an item encountered in a real sitting. Actual exam content is
confidential and protected by the CompTIA Candidate Agreement.

For this certification the stakes are higher than good manners. CompTIA's own Authorized
Materials Use Policy — printed in the objectives document — states that candidates who prepare
with unauthorized "brain dump" material **have their certifications revoked and are suspended
from future testing**. Using a dump is not merely dubious here; it is disqualifying for the
learner. If you sit the exam, you are bound by that agreement too. Please do not open issues or
pull requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
CompTIA, Inc. or Pearson VUE.** "CompTIA", "Security+" and "CompTIA Security+" are trademarks
of CompTIA, Inc.

No practice set guarantees a pass. Use this alongside hands-on security work and the official
objectives.

### Format note

This is the widest format gap of any exam in this repository, and it is disclosed rather than
hidden. The real SY0-701 uses multiple-choice items — including select-two and select-three
stems, both of which map exactly onto Mockka formats — **and performance-based questions
(PBQs)**, which do not map at all. A PBQ is an interactive simulation: building a firewall
ruleset, dragging controls onto a topology, classifying log lines, completing a matrix. Mockka
has no simulation surface.

PBQ *reasoning* is approximated two ways here, both demonstrated by CompTIA's own sampler: as
scenario_matching where the task is genuinely a mapping (investigative questions onto log
sources, situations onto agreement types, observed indicators onto attacks), and as
scenario-led single choice over candidate configurations where the task has one defensible
outcome. The consequence, stated plainly: **the underlying judgment is rehearsed, the
interaction is not.** You will meet the drag-and-drop and configuration-editor interfaces for
the first time in the real exam, and real PBQs typically carry more marks each than a
multiple-choice item.

Two further disclosures travel on the exam intro page (from the manifest's `format_coverage`):
CompTIA states a *maximum* of 90 questions, so a live form may be shorter than this mock; and
the real pass mark is 750 on a 100–900 scale with no published raw conversion, so the 81% here
is a linear proxy for that scaled mark, not a vendor-published percentage.

### Revision note

This bank was remediated in **August 2026** for answer-position and option-shape cues. Option
length bands were brought to parity across all five domains so that the key's length rank
varies rather than sitting predictably at the top, and two near-duplicate option pairs were
differentiated. Key letters were distributed at authoring time and needed no re-lettering.
**No question's meaning, key or teaching point was changed by this work.** The defect class,
its root cause and the remediation are recorded in
[ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md); the standard the
result is measured against is the cue-only solve ceiling in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
