# AWS Certified Cloud Practitioner (CLF-C02) — Mockka practice exam

A 50-question, blueprint-weighted practice exam across four domains — 90 minutes, 70% to
pass — drawn from a 68-item originally-authored bank, built with the
[Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

These questions are **originally authored**. They were written against:

- the **official CLF-C02 exam guide** published by AWS — four domains and their weights, 19
  task statements, 135 objective bullets, the item types and the scoring model. The guide also
  publishes something unusually useful for an authoring project: an explicit **in-scope list of
  100 AWS offerings and an out-of-scope list of 46**, which is what kept this bank's answer
  space honest and rejected several otherwise-plausible practice concepts. AWS publishes no
  version string or change history for this exam, so the manifest records it as unversioned
  with the guide's PDF build date
- the **official certification page**, for the four logistics facts the guide omits — 65
  questions as sat, 90 minutes, the fee and the validity period
- **three freely published practice sets**, analyzed under a strict clean-room rule for
  classification only
- general AWS platform, cloud-economics and shared-responsibility knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes and the 41 merges behind the 68-concept inventory — arithmetic that is
machine-checkable, since every one of the guide's 136 concept rows is cited by exactly one
concept, none dropped and none double-counted.

**One independence caveat is load-bearing and is applied throughout.** Two of the three
practice sets are separately authored articles on the same publication drawing from the same
item pool, and one of them says so in its own text. They are registered separately because
they are separate publications with disjoint items, but for convergence purposes they count as
**one voice, not two**. So this build has two independent practice voices plus the blueprint —
not three. 34 of the 68 concepts are corroborated by at least one of them; the other 34 are
blueprint-only.

AWS's own free official practice question set is registered and was **not accessed**: it sits
behind an AWS Skill Builder account, and no account was created. It carries zero weight in the
inventory, and it is named in the registry so the gap is visible rather than silent.

### Prior art

Three freely published practice sets informed the concept derivation and distractor
calibration, credited here by name:

- **Cameron McKenzie's** CLF-C02 practice questions on TheServerSide —
  [`derivation/source-tss-mckenzie.md`](derivation/source-tss-mckenzie.md)
- **Darcy DeClute's** CLF-C02 practice questions on TheServerSide, drawn from the same item
  pool — [`derivation/source-tss-declute.md`](derivation/source-tss-declute.md)
- **Tutorials Dojo's** free CLF-C02 sample questions, the build's only practice voice
  independent of that pool —
  [`derivation/source-tutorialsdojo-sampler.md`](derivation/source-tutorialsdojo-sampler.md)

All three were used as classification-only sources — per-item concept mapping and
distractor-pattern frequencies — with **zero text reuse**. Screening assurance differs between
them and is recorded as such: the TheServerSide pool's author publishes an explicit
anti-braindump position, while no published originality statement was found for the third, so
its screen rests on structure and style alone.

This is the most dump-contaminated exam in the AWS catalogue, and the rejections are documented
at the same depth as the registrations. Deliberately not credited, because they were rejected:
the large recalled-item corpus and its mirrors; **two permissively licensed GitHub banks that
independently reproduce that corpus's numbering** — one reproduced its fourth question with the
same five options and the same key pair, the other did the same, which is how two unrelated
repositories betray a shared ancestor; a repository of notes from the author's own sitting; a
self-described "how I passed" bank; a Medium republication of the same corpus under a byline;
and two sampler pages with no author, licence or provenance statement to screen. A permissive
licence does not launder recalled exam content. Six candidate banks totalling well over 1,500
items were rejected, with the evidence in [`derivation/sources.md`](derivation/sources.md).

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the AWS Certified
Cloud Practitioner item bank, and no question reproduces an item encountered in a real sitting.
Actual exam content is confidential and protected by the AWS Certification NDA.

If you sit the certification, you are bound by that NDA too. Please do not open issues or pull
requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
Amazon Web Services, Inc. or Pearson VUE.** AWS, Amazon Web Services and AWS Certified Cloud
Practitioner are trademarks of Amazon.com, Inc. or its affiliates.

No practice set guarantees a pass. Use this alongside hands-on AWS experience and the official
AWS documentation and training.

### Format note

CLF-C02 uses exactly two item types — multiple choice and multiple response — and the exam
guide names no others. Both map one-to-one onto Mockka formats, so this mock reproduces **100%
of the real exam's item types**; the exam's format profile is a strict subset of the player's
three. Mockka's third format, scenario_matching, is not a CLF-C02 item type and is set to zero
in every domain.

So the disclosure the exam intro page carries (from the manifest's `format_coverage`) is about
fidelity rather than coverage. Two caveats stand. The blueprint permits multiple-response items
with more than two keys and more than five options, but every item across the three registered
practice sources is choose-two-of-five, so the corpus supplies no calibration for wider items
and this mock's shape follows the corpus rather than the blueprint's ceiling. And the blueprint
states no proportion of multiple-response items while the three sources disagree with each
other, so the format mix here is a documented authoring judgment rather than a measured value.
Two further facts sit alongside: the real sitting is 65 questions of which 50 are scored and 15
are unidentified pretest items, which this 50-item form models as the scored paper; and the
real pass mark is 700 on a scaled 100–1,000 range that is not publicly convertible to a raw
percentage, so the 70% here is a proxy.

### Revision note

This bank was audited in the same **August 2026** answer-position and option-shape cue sweep
that remediated the other banks in this repository, and — unlike them — **required no content
change**. Its key letters were already distributed and its option-length profile already sat
inside the tolerances, so no question was re-lettered, re-shaped or re-worded for cue reasons;
question meaning is untouched because nothing was touched. The defect class, its root cause and
the per-bank measurements that cleared this one are recorded in
[ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md); the standard the bank
is measured against is the cue-only solve ceiling in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
