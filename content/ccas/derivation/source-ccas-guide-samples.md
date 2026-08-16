# Artefact A · CCAO-F exam-guide sample-question distillation

**What this is.** Anthropic's official CCAO-F exam guide publishes **3 sample questions** (section
8) written by the certification owner against its own blueprint. This document records, for each
item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory, and the only one written by the
people who write the real exam. It answers "what does the vendor consider an exam-shaped item?" —
which makes it the calibration reference for style, difficulty pitch and option construction, in a
way no community source can be. Three items is a thin sample, but a vendor-authored item is worth
more per item than a community one.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `ccas-guide-samples` in [`sources.md`](sources.md) — the guide states these items are
> illustrative and are **not drawn from the live item bank**. Credited in the exam README.

---

## Proposed theme set for CCAO-F

CCAO-F is a practitioner-productivity exam, not an architecture exam, so the T1–T8 starter set in
`methodology/03-authoring-guide.md#themes` does not transfer. A CCAO-F-specific set is derived at
S2 per that section's instruction ("other exam shapes re-derive… name 5–10 judgment types"). The
clustering evidence is in [`source-beecham-ccao-f.md`](source-beecham-ccao-f.md); the set is
**proposed here and declared by S3 in `authoring.json`**:

| id | Theme | Judgment exercised |
|---|---|---|
| T1 | Entry-point & capability selection | Pick the surface, model tier or capability layer that fits the task's shape |
| T2 | Request specification | Turn a vague ask into a complete, decomposable request; name the missing component |
| T3 | Verification before release | Decide what must be checked, against which reference, with what evidence, before it ships |
| T4 | Review-threshold judgment | Decide whether human review is mandatory and who is qualified to give it |
| T5 | Delegation boundary | Split a workflow into AI-appropriate / human-retained / collaborative; place the gate; escalate beyond Associate scope |
| T6 | Configuration placement & trust boundaries | Put a durable requirement in the right mechanism; decide what may carry authority |
| T7 | Permitted-use & data-sensitivity screening | Classify the data and the use case against policy before acting |
| T8 | Diagnosis & controlled change | Isolate the actual cause; change one variable; measure against a baseline |

Two **pattern extensions** are proposed alongside the theme set, for S3 to declare in
`authoring.json.pattern_extensions` — derivation and frequency evidence in
[`source-beecham-ccao-f.md`](source-beecham-ccao-f.md):

- **E01 · confounded-change** — several variables changed at once, or one changed with no baseline,
  so no outcome is attributable.
- **E02 · fluency-as-evidence** — confident, fluent output, or the model's own confidence report or
  self-assessment, treated as evidence that it is correct. The signature CCAO-F distractor: **the
  vendor uses it twice in one three-distractor item below.**

## Format mix observed

| Domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| D2 Output Evaluation and Validation | 1 | 0 | 0 | 1 |
| D3 Product and Model Selection | 1 | 0 | 0 | 1 |
| D6 Governance, Risk, and Responsible Use | 1 | 0 | 0 | 1 |
| **Total** | **3** | **0** | **0** | **3** |

All three are 4-option single-choice. **This does not mean the exam is single-choice only** — the
guide's §5 format row explicitly names multiple-response items as well. The samples are a style
illustration, not a format census, and no format-mix inference should be drawn from n=3. The
authoritative statement about formats is the guide's §5 row, distilled in
[`source-ccas-blueprint.md`](source-ccas-blueprint.md).

**Asymmetry worth noting, not preserving:** all three keys are option **B**. With n=3 that is
noise, not a pattern; recorded only so no one later reads it as vendor practice.

## The three items

| Item | Domain | Concept tested | Theme | Distractor patterns |
|---|---|---|---|---|
| G.1 | D2 (obj 2.2 + 2.4) | A confident output carries a checkable specific bound for a consequential audience; the required step is validating that specific against the authoritative source before it leaves your hands | T3 | E02 *confidence-as-verification* (treats a self-reported certainty signal as evidence of accuracy); E02 + D20 *self-rating-as-review* (asks the producing context to grade its own work); D05 *polish-instead-of-verify* (improves the register of the prose, leaving the unverified claim intact) |
| G.2 | D3 (obj 3.3) | Model selection is a constrained optimisation — the cheapest, fastest tier that still meets the quality the task actually demands, on straightforward high-volume work | T1 | D01 *top-tier-by-default* (buys maximum capability for work that does not need it, spending cost and latency as if they were free); D16 *strip-capability-for-cost* (hits the cost goal by removing features instead of by choosing the right tier); D11 *change-vendor-instead-of-tier* (answers a tier-selection question with a platform switch that never engages the trade-off) |
| G.3 | D6 (obj 6.2) | Regulated identifiers are removed or anonymised **before** data enters the tool, which is what lets a policy-restricted analysis proceed rather than being abandoned | T7 | D13 *internal-means-safe* (achieves the goal while widening exposure, on the theory that an internal audience is not a disclosure); D06 *instruction-as-data-control* (right kind of control, wrong layer — a request to the model standing in for a data-handling control); D16 *abandon-the-task* (refuses the mandate instead of solving within it) |

## Distractor-pattern frequency across the 3 items

| Pattern | Count | Note |
|---|---|---|
| **E02 fluency-as-evidence** | 2 | both wrong answers in the D2 item — the vendor's own confirmation that this is the signature CCAO-F distractor |
| D16 refuse-the-mandate | 2 | appears in both non-D2 items, in two different sub-forms — the vendor's habitual "over-correct" distractor |
| D20 self-review-anchoring | 1 | co-labelled with E02 on *self-rating-as-review* |
| D05 symptom-treatment | 1 | as cosmetic polish |
| D01 over-engineering | 1 | as top-tier-by-default |
| D11 non-architectural-criteria | 1 | as change-vendor |
| D06 wrong-layer | 1 | as instruction-standing-in-for-control |
| D13 blast-radius-expansion | 1 | as internal-means-safe |

n=9 wrong options carrying 10 labels (G.1's self-rating option is co-labelled E02 + D20): far too
small to set caps from. Its value is **qualitative**, and three properties
are worth transferring:

1. **Every wrong option is a real professional error**, not a joke option. The weakest option in
   the set (G.2's platform switch) is still something a stakeholder says out loud.
2. **Each item's three distractors come from three different patterns** — the authoring guide's
   own rule, independently confirmed by the vendor.
3. **The keyed option carries a "why", not just a "what"** — each key names the action *and* the
   condition that makes it right ("before sharing", "consistent with policy", "suited to
   straightforward, high-volume tasks"). Rationales in this bank should mirror that shape.

## Style calibration — the measurement that matters most

The keyed option's length relative to the longest distractor, computed over the three items:

| Source | median ratio | mean ratio | key is the longest option |
|---|---|---|---|
| **`ccas-guide-samples` (vendor)** | **1.11** | **1.23** | 2 of 3 |
| `beecham-ccao-f` (community) | 2.24 | 2.25 | 55 of 56 |

The vendor writes options of roughly equal length; the community source does not. Mockka's own
`answer-length-cue` check (BD-2) defaults to warn at 1.25 and error at 1.50 — the vendor's items sit
inside the warn tier, and the community source would fail the error tier on 49 of 56 items. **This
package should author to the vendor profile**, i.e. keep the defaults and treat any breach as a
defect rather than raising the knob.

Other style facts read off the vendor items:

- **Scenario-style stems**, one short situation then a decision question — matching the course
  closing's statement that the exam asks the candidate "to apply a skill or make a judgment rather
  than recall a fact". No definition-recall items.
- **Roles, not names**: the actors are "an associate", "a project manager" — generic job roles,
  no invented company or person names.
- **The stem states the constraint that decides the item** ("speed and cost matter more than deep
  reasoning", "organizational policy restricts sharing regulated personal data"). The item is
  good-vs-best on a stated constraint, never a trick.
- **Superlative framing**: "what is the *most appropriate* action", "which choice *best* fits".
- **US spelling** throughout the vendor's material ("anonymize", "Optimization", "organizational" —
  the last two inside domain titles that must be reproduced exactly). `style.locale` is therefore set
  to **en-US**, following the `aif-c01` precedent of matching the vendor rather than the house
  default. `ccar-p` uses en-GB; the divergence between the two Anthropic packages is deliberate and
  recorded here so Gate 2 does not re-litigate it.

## Concepts this source tests that other sources do not spell out

None — all three concepts are already stated as blueprint objectives and as recap rules. That is
expected: the samples exist to illustrate, not to extend. Their contribution to the inventory is
**confirmatory weight** on three specific concepts (2.2/2.4 citation verification, 3.3 tier
alignment, 6.2 anonymise-before-upload), each of which should be treated as certain to appear on
the real exam and therefore authored with more than one bank item.

## Concepts other sources hold that this source does not test

Everything else — 4 of the 7 domains (D1, D4, D5, D7) have no sample item at all. See
[`source-ccas-blueprint.md`](source-ccas-blueprint.md) and
[`source-ccas-recap.md`](source-ccas-recap.md) for full coverage; reconciliation is in
`master-inventory.md` at S3.
