# S5 overlap screen — ccao-f, round 1

Examiner: exam-examiner (fresh session, never authored this bank) · Date: 2026-08-18 ·
Protocol: `methodology/05-eval-rubric.md` §overlap.

**Verdict: FAIL with two item-level findings.** Two items reproduce vendor sample-question
stem prose verbatim and bounce for re-expression (`ccao-f-d3-q34`, `ccao-f-d6-q65`). A
process-level weakness in the clean-room chain is recorded for Gate 2. The other 79 items pass.

## Source posture

Per `derivation/sources.md` (§clean-room) and the manifest provenance block, no source is
held locally as text:

| Source | Type | Held as text? |
|---|---|---|
| `ccas-blueprint` (official CCAO-F exam guide v1.0, July 2026) | public_blueprint | No — distilled to `derivation/source-ccas-blueprint.md` (domains, objectives, canonical vocabulary; the doc's own header states no sample-question text, option text or rationale prose appears in it) |
| `ccas-guide-samples` (the guide's 3 sample items) | public_practice_set | No — Artefact A classification in `derivation/source-ccas-guide-samples.md`. **Exception found: this doc quotes two stem fragments verbatim as item-craft evidence — see findings.** |
| `ccas-course-recap` (own course notes, 35 rules) | own_course_notes | No — Artefact B distillation in `derivation/source-ccas-recap.md`; vocabulary verbatim only |
| `beecham-ccao-f` (MIT repo, 56 items) | public_practice_set | No — Artefact A classification only in `derivation/source-beecham-ccao-f.md`; used classification-only regardless of licence |
| `anthropic-prep-course` (lesson bodies) | own_course_notes | Never extracted — deliberately not opened (Gate 1 decision pending) |

Because the source texts were never retained, **no direct bank-vs-source shingle comparison is
possible for the sources themselves. The process control is the evidence** (§overlap, "where
sources were never held as text"). What *is* held is the derivation layer, so the supplementary
screen below runs against that — and it is what surfaced the two findings.

## Process control (the evidence)

1. The authoring session (S3, exam-author, 2026-08-17) worked from the derivation artefacts
   alone; `derivation/master-inventory.md` line 9 records the clean-room posture explicitly
   ("from these artefacts only (clean-room: no source was opened)").
2. `derivation/sources.md` §clean-room states that the S1–S2 session read the sources and that
   everything in `derivation/` is analytical classification, with canonical vocabulary as the
   single bounded exception (`methodology/01-source-distillation.md#clean-room`).
3. Artefact commits the control hangs on:
   - `c45059e` — `sources.md`, `source-ccas-blueprint.md`, `source-ccas-recap.md`,
     `source-ccas-guide-samples.md`, `source-beecham-ccao-f.md`, `master-inventory.md`,
     `gate1-checklist.md` (S1/S2)
   - `f8c8112` — `questions.json` final S3 authored state (the bank under this eval)

## Screens actually run

### 1 · 8-gram word-shingle, whole bank vs every derivation doc

Bank text = every stem, every option, the correct rationale and every distractor rationale
(81 items). Comparison text = all seven files in `derivation/`.

| Doc | Shared 8-gram shingles | Of those, verbatim `concepts.json` statements | Residual |
|---|---|---|---|
| `source-ccas-blueprint.md` | 126 | 118 | 8 |
| `source-beecham-ccao-f.md` | 61 | 58 | 3 |
| `source-ccas-recap.md` | 58 | 49 | 9 |
| `source-ccas-guide-samples.md` | 4 | 3 | 1 |
| `master-inventory.md` | 0 | — | 0 |
| `sources.md` | 0 | — | 0 |
| `gate1-checklist.md` | 0 | — | 0 |

**Reading.** 228 of 249 hits are the exam's own concept statements — the derivation docs state
each concept in the distiller's words, `concepts.json` carries that statement, and the keyed
rationale opens by restating it. That is the intended derivation chain, not source text; the
same pattern was found and accepted on `aif-c01` at smaller volume. Every one of the 21
residuals was inspected in context: they are light rewordings of the same concept rows
(e.g. "a task or evidence problem, not a wording problem") or canonical vocabulary sequences
that are lists by nature ("the requirements, the source material and professional standards";
"the prompt, the context, the feature choice") — the Artefact B bounded exception. **No source
body text found by this screen.**

### 2 · Quoted-span screen (the one that found the defects)

The shingle screen cannot distinguish "the distiller's own prose" from "prose the distiller
quoted". So a second screen extracted every quoted span of ≥5 words from the derivation docs
and searched the bank for it. `source-ccas-guide-samples.md` contains four such spans; two are
recorded there explicitly as quotations from the vendor's sample-question stems, and the bank
reproduces both verbatim.

## Findings

### F-1 · `ccao-f-d3-q34` — vendor sample-stem clause reproduced verbatim

`derivation/source-ccas-guide-samples.md` (item-craft section, "The stem states the constraint
that decides the item") quotes the vendor's own stem wording: *"speed and cost matter more than
deep reasoning"*. The bank stem reads:

> "…short, structured, high-volume work where **speed and cost matter more than deep
> reasoning**."

Eight words, exact, distinctive phrasing — not a technical term, so outside the vocabulary
exception and outside §overlap's "incidental technical phrases". **Bounces for re-expression**
(`eval/judge-scores.json` → `bounces[0]`, `defect_class: source-phrase-reuse`). The item scores
5 on all six rubric dimensions; only the wording is at issue.

### F-2 · `ccao-f-d6-q65` — vendor sample-stem clause reproduced verbatim

Same passage, same kind: the doc quotes *"organizational policy restricts sharing regulated
personal data"*. The bank stem reads:

> "**Organizational policy restricts sharing regulated personal data** with external tools, and
> the adjuster has asked for the summary within the hour."

Seven words, exact. **Bounces for re-expression** (`bounces[1]`). A secondary, non-blocking
dimension-1 observation is folded into the same fix instruction: the borrowed clause is also
what keeps option B alive (see the bounce record).

Not a finding: *"what is the most appropriate action"*. The same doc records this as the
vendor's superlative framing, and nearly every bank item uses it. Interrogative form is a format
convention, not source expression.

### F-3 · Process weakness in the clean-room chain (no item bounces; Gate 2 / ratchet)

`source-ccas-guide-samples.md` opens by asserting "No question text, option text or rationale
prose is reproduced here — only the analytical classification", and then quotes two stem
fragments to illustrate item craft. The illustration is genuinely useful to an author; the
problem is that the artefact then *is* a carrier of source expression while presenting itself
as clean, and the authoring session lifted both fragments straight into stems. Two levels:

- **S1/S2 (research-manager):** an Artefact A doc must not carry source prose even as craft
  evidence. Craft observations should be paraphrased, or marked with an explicit
  do-not-reuse fence.
- **Ratchet candidate** (`methodology/00-pipeline.md` §ratchet): this is machine-checkable. A
  validator check — *no bank stem/option/rationale may contain any quoted span of ≥5 words that
  appears inside a `derivation/source-*.md` file* — would have caught both items at S4, before
  they reached the examiner. Recommend raising it; the check is cheap and the failure mode is
  the one the whole anti-dumps rule exists to prevent.

## Verdict

- **79 items pass** the overlap screen on process control plus the two screens above.
- **2 items bounce** for re-expression (F-1, F-2), `defect_class: source-phrase-reuse`, bounce
  1 of 2 for each. Rework returns to exam-author; both items re-enter S5 and are re-scored fresh.
- **No dump lineage and no wholesale copying** was found anywhere in the bank. These are two
  short borrowed clauses in otherwise entirely original items, in a bank whose 243 distractors
  and 81 scenarios are demonstrably the author's own work.
- Residual risk is the one the methodology names: with no held source text, verbatim overlap
  with the four sources cannot be *measured*, only prevented by construction — and F-1/F-2 show
  the construction has a seam. The Gate 2 deep-read is the human backstop.
