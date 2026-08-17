# S5 overlap screen — ccao-f, round 2

Examiner: exam-examiner (fresh session, never authored this bank, never opened the round-1 eval
artifacts until after the round-2 blind solve was written to disk) · Date: 2026-08-18 ·
Protocol: `methodology/05-eval-rubric.md` §overlap · Round 1 preserved verbatim at
`overlap-report-r1.md`.

**Verdict: PASS.** Both round-1 findings are discharged. The two bounced items no longer
reproduce vendor sample-stem prose, no new borrowed span appeared anywhere in the bank, and all
81 items pass. One process-level weakness is **carried forward unresolved** — it is not an item
defect and cannot be fixed by re-authoring items.

## Source posture (unchanged from round 1)

No source is held locally as text, so no direct bank-vs-source shingle comparison is possible for
the sources themselves; the clean-room process control is the evidence
(§overlap, "where sources were never held as text"). What is held is the derivation layer, and
both screens below run against that.

| Source | Type | Held as text? |
|---|---|---|
| `ccas-blueprint` (official CCAO-F exam guide v1.0) | public_blueprint | No — distilled to `derivation/source-ccas-blueprint.md` |
| `ccas-guide-samples` (the guide's 3 sample items) | public_practice_set | No — Artefact A classification, but see §carried-forward |
| `ccas-course-recap` (own course notes, 35 rules) | own_course_notes | No — Artefact B distillation; vocabulary verbatim only |
| `beecham-ccao-f` (MIT repo, 56 items) | public_practice_set | No — Artefact A classification only |
| `anthropic-prep-course` (lesson bodies) | own_course_notes | Never extracted |

Artefact commits the control hangs on: `c45059e` (S1/S2 derivation layer), `f8c8112` (S3 authored
bank), `d7cb9e4` (the round-1 bounce rework under evaluation here).

## Screens re-run this round

### 1 · Quoted-span screen — the one that found the round-1 defects

Every quoted span of ≥5 words in any `derivation/*.md` file, searched against every stem, option,
correct rationale and distractor rationale in the bank (81 items).

| Round | Hits | Detail |
|---|---|---|
| 1 | 2 | `d3-q34` ("speed and cost matter more than deep reasoning", 8 words) · `d6-q65` ("organizational policy restricts sharing regulated personal data", 7 words) |
| 2 | **0 substantive** | Both clauses are gone. The single mechanical hit is `"what is the most appropriate action"` in `d6-q65`'s stem — the vendor's superlative interrogative framing, explicitly recorded as **not a finding** in round 1 (§F-2) because interrogative form is a format convention, not source expression, and nearly every bank item uses it. Re-confirmed as not a finding. |

Verification of the two reworked stems:

- **`d3-q34`** now states the workload's properties in the bank's own words ("The messages are
  short and follow a fixed structure, so what the office optimizes on this work is turnaround and
  per-message cost, not analytical depth"). The decision content — a stated constraint that both
  tiers cleared — survives intact, which was the required-fix condition.
- **`d6-q65`** now reads "Under the team's handling rules, regulated identifiers must not leave
  the team's own systems for any outside service, though the claim narrative itself carries no
  such restriction." The borrowed clause is gone, and the added second half discharges the
  round-1 secondary finding by making the restriction's object explicit (closing option B; dim 1
  rises 4 → 5).

Both fixes did what the bounce reports asked, and nothing more — no scope creep into other items.

### 2 · 8-gram word-shingle, whole bank vs every derivation doc

| Doc | Shared 8-gram shingles | Of those, verbatim `concepts.json` statements | Residual |
|---|---|---|---|
| `source-ccas-blueprint.md` | 128 | 120 | 8 |
| `source-ccas-recap.md` | 59 | 50 | 9 |
| `source-beecham-ccao-f.md` | 61 | 58 | 3 |
| `source-ccas-guide-samples.md` | 3 | 3 | 0 |
| `master-inventory.md` · `sources.md` · `gate1-checklist.md` | 0 | — | 0 |

**Reading.** 231 of 251 hits are the exam's own concept statements — the derivation doc states the
concept in the distiller's words, `concepts.json` carries that statement, and the keyed rationale
opens by restating it. That is the intended derivation chain, not source text. All 20 residuals
were inspected in context and are the same two families round 1 accepted: light rewordings of
concept rows ("a task or evidence problem, not a wording problem") and canonical vocabulary
sequences that are lists by nature ("the requirements, the source material and professional
standards"; "the prompt, the context, the feature choice") — the Artefact B bounded exception
(`01-source-distillation.md#artefact-b`). Notably, `source-ccas-guide-samples.md` — the doc that
carried both round-1 defects — now shares **zero** residual shingles with the bank.

## Carried forward, unresolved {#carried-forward}

**F-3 (round 1) · the clean-room chain has a seam.** `derivation/source-ccas-guide-samples.md`
opens by asserting that no question text, option text or rationale prose is reproduced in it, and
then quotes two vendor stem fragments as item-craft evidence. The authoring session lifted both
straight into stems. Re-authoring the two items removed the *symptom*; the artefact is still a
carrier of source expression while presenting itself as clean, so the same failure can recur on
the next exam built from a doc written the same way.

This is **not an item defect and not a bounce** — no item can fix it. Two dispositions for Gate 2:

- **S1/S2 rule (research-manager):** an Artefact A doc must not carry source prose even as craft
  evidence; craft observations get paraphrased or fenced with an explicit do-not-reuse marker.
- **Ratchet candidate** (`00-pipeline.md` §ratchet): the check is machine-checkable and cheap —
  *no bank stem, option or rationale may contain any quoted span of ≥5 words that appears inside a
  `derivation/source-*.md` file*. It would have caught both items at S4, before the examiner ever
  saw them. This round's screen is a working reference implementation; recommend promoting it to a
  validator check. **Recommendation restated at strength: the failure mode it catches is the one
  the whole anti-dumps hard rule exists to prevent.**

## Verdict

- **81 of 81 items pass** the overlap screen on process control plus both screens above.
- **0 items bounce.** The two round-1 bounces (`d3-q34`, `d6-q65`, `defect_class:
  source-phrase-reuse`, bounce 1 of 2 each) are **discharged and closed** — neither reaches the
  bounce cap.
- **No dump lineage and no wholesale copying** anywhere in the bank.
- Residual risk is unchanged and is the one the methodology names: with no held source text,
  verbatim overlap with the four sources cannot be *measured*, only prevented by construction.
  Round 1 proved the construction has a seam; the seam is still open at the S1/S2 layer. The
  Gate 2 deep-read remains the human backstop.
