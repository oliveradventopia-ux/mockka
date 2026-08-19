# Claude Certified Associate – Foundations (CCAO-F) — Mockka practice exam

A 60-question, blueprint-weighted practice exam across seven domains — 120 minutes, 72% to
pass — drawn from an 81-item originally-authored bank, built with the
[Mockka exam-compiler methodology](../../methodology/00-pipeline.md).

## Provenance and independence

These questions are **originally authored**. They were written against:

- the **official CCAO-F exam guide, version 1.0 (effective July 2026)** — Anthropic's public
  guide for the exam, which supplied the seven domains and their weights, the 30 objectives,
  the item formats, the scoring model and the scope-boundary statements that keep this bank at
  Associate altitude rather than drifting into developer or architect material
- **Oliver Lau's own recap notes from the official Claude Certified Associate – Foundations
  Prep Course** (Anthropic Partner Academy) — 35 key-takeaway rules across the seven content
  modules and the course closing, held as own notes from a legitimately accessed official
  course. This is the source that supplies the decision frameworks and the canonical study
  vocabulary, and it is unusual enough to be worth naming plainly: it is why this package
  carries a syllabus layer at all. The 35 rules live in
  [`syllabus-rules.json`](syllabus-rules.json) and every concept links the rule it teaches, so
  the player can report which rules a candidate is weakest on
- the **three sample questions published inside the exam guide** — Anthropic's own illustrative
  items, which the guide states are not drawn from the live item bank. Read for style
  calibration only, and the three objectives they touch are each carried by two adjacent bank
  concepts rather than one
- a **freely published community practice set**, analyzed under a strict clean-room rule
  (concept-per-item and distractor-pattern classification only — never its text)
- general Claude platform, prompting and applied-LLM knowledge

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes, the merges behind the 81-concept inventory, and — importantly — how much
weight to put on the word "convergent" here.

**One honest limit, stated up front.** Four sources sound like four readings of the exam; they
are not. The guide, its samples and the prep course are all Anthropic, so agreement between
them is coherence rather than corroboration. Only the community set is a genuinely independent
reading, and it is one Tier-4 bank. 42 of the 81 concepts are attested outside the vendor
family; the remaining 39 rest on Anthropic's own documents. The derivation records this as a
near-single-source build and says so at Gate 1 rather than quietly counting to two. The prep
course's per-lesson bodies were deliberately **not** extracted — only the recap layer was — so
no concept here derives from material that was not read.

### Prior art

**Ray Beecham's** freely published CCAO-F practice bank (MIT-licensed, on GitHub) is the only
independent practice voice this build had, and it is credited accordingly: it demonstrated
which parts of the blueprint a third party reads as examinable, and its measured
distractor-pattern frequencies calibrated this bank's pattern caps. Its analytical derivation
is [`derivation/source-beecham-ccao-f.md`](derivation/source-beecham-ccao-f.md) —
classification only, containing no question, option or rationale text from that set. Because it
was used classification-only and no text was reused, its MIT licence triggers no attribution
obligation; the credit is given because it is deserved, not because it is required.

Other candidate sets were **screened out**, and are deliberately not credited. Self-branded
dump vendors were rejected on legality. A large community bank was rejected on *validity*: its
free sample is Developer and Architect material — Claude Code, hooks, API parameters, agentic
design — mechanically re-tagged onto CCAO-F subdomains, when the exam guide explicitly places
that work outside the Associate scope. The evidence for every rejection is tabled in
[`derivation/sources.md`](derivation/sources.md).

The questions, concepts and reasoning in this exam are its own. Every scenario, option,
distractor and rationale is originally written.

### NDA statement

**This package contains no live exam content.** Nothing here is drawn from the Claude Certified
Associate – Foundations item bank, and no question reproduces an item encountered in a real
sitting. Actual exam content is confidential and proprietary to Anthropic and is protected by
the non-disclosure agreement every candidate accepts before the exam begins.

If you sit the certification, you are bound by that NDA too. Please do not open issues or pull
requests containing real exam questions — they will be closed without merging (see
[CONTRIBUTING](../../CONTRIBUTING.md)).

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
Anthropic, PBC or Pearson VUE.** "Anthropic", "Claude" and "Claude Certified Associate –
Foundations" are trademarks of Anthropic, PBC.

No practice set guarantees a pass. Use this alongside the official prep course and hands-on
work with the product.

### Format note

The real CCAO-F uses two item types — multiple choice and multiple response — and both map
exactly onto Mockka formats, so this exam's profile is a **subset** of what the player can
render rather than an approximation of something it cannot. Mockka's third format,
scenario_matching, is deliberately set to zero in every domain: the real exam contains no
matching items, and rehearsing an interaction you will never meet would be a disservice.

Two calibration caveats travel with that, and the exam intro page carries them in full (from
the manifest's `format_coverage`). The guide publishes no option count, no select-count and no
multiple-response share, so this mock's shape — five options, choose two, nine of the sixty
items — is a house decision rather than a measured property of the exam. And the real exam
reports a scaled 100–1,000 score with a 720 cut set by a standard-setting study; the 72% shown
here is a readable translation of that cut, not a claim that the real exam needs 72% correct.

### Revision note

This bank was remediated in **August 2026** for answer-position and option-shape cues. All
seven domains had their option sets brought to length-rank parity — thin distractors argued up
to the key's band, justification riders redistributed so that the keyed option is not
systematically the longest or the most specific — and two rewritten distractors were
subsequently neutralized for register and spelling parity. Key letters were distributed at
authoring time and needed no re-lettering. **No question's meaning, key or teaching point was
changed by this work.** The defect class, its root cause and the remediation are recorded in
[ADR-0006](../../docs/decisions/0006-answer-position-and-shape-cues.md); the standard the
result is measured against is the cue-only solve ceiling in
[`methodology/05-eval-rubric.md`](../../methodology/05-eval-rubric.md#cue-only-solve).

### Licence

Content: [CC BY 4.0](../../LICENSE-CONTENT) · Code: [MIT](../../LICENSE).
