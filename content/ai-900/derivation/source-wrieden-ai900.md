# Artefact A · olafwrieden/Azure-AI-900-Practice-Questions distillation

**What this is.** Olaf Wrieden's freely published AI-900 practice repository contains **29
questions** written against the exam blueprint as it stood in 2021. This document records, for each
item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory and the second independent
reading of the exam available to this build. It answers "what did this author believe was tested?"
— usefully, from a very different vantage point to
[`source-warner-ai900.md`](source-warner-ai900.md): where that source writes scenarios, this one
writes definitions and specification recall, and the contrast is itself calibration data. It is
also the source that establishes **what the 2025-05-02 blueprint revision removed**.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `wrieden-ai900` in [sources.md](sources.md), dump-screened on items 1, 4 and 8 with the
> result recorded there. Credited in the exam README. Themes (A1–A7) and pattern extensions
> (E01–E08) are defined in [`source-warner-ai900.md`](source-warner-ai900.md) and proposed there
> for S3.

> **Vintage warning, load-bearing.** This set was published in 2021 and last touched in 2022. It
> pre-dates the generative-AI skill area entirely, and it pre-dates the Azure AI service renaming
> (Cognitive Services → Azure AI services), the retirement of LUIS and QnA Maker, and the
> 2025-05-02 revision that trimmed the machine-learning domain. **22 of its 29 items (76%) test
> material that the final AI-900 blueprint does not name.** It is registered and distilled because
> it is the only accessible second reading, and because "what a competent community author thought
> was tested" is genuine calibration data — but it must not seed concepts unchecked. Every concept
> below carries an in-scope / off-blueprint verdict.

## Format mix observed

| Domain | Single choice | Multiple response | Build list | Drag and drop | Hot area | Total |
|---|---|---|---|---|---|---|
| d1 AI workloads and considerations | 2 | 0 | 0 | 0 | 0 | 2 |
| d2 ML principles on Azure | 16 | 0 | 0 | 0 | 0 | 16 |
| d3 Computer vision workloads | 8 | 0 | 0 | 0 | 0 | 8 |
| d4 NLP workloads | 3 | 0 | 0 | 0 | 0 | 3 |
| d5 Generative AI workloads | 0 | 0 | 0 | 0 | 0 | 0 |
| **Total** | **29** | **0** | **0** | **0** | **0** | **29** |

Asymmetries worth preserving or correcting, explicitly:

- **Domain mix 7 / 55 / 28 / 10 / 0%** against a blueprint of 15–20 / 15–20 / 15–20 / 15–20 /
  20–25. The machine-learning domain is over-served threefold; **the heaviest-weighted domain is
  entirely absent**. Nothing here calibrates d5.
- **Single format only**, four options, one key. No format calibration value.
- **Every item is definitional or specification recall; none is a scenario.** No item describes a
  company, a constraint or a symptom. Against an exam whose 2025 revision pushed *further* toward
  scenario-led items, this source calibrates vocabulary coverage only — never difficulty pitch.
- **Nine of 29 items (31%) use a negative stem** ("which is *not*…"). The study guide never phrases
  an objective negatively; negative stems reward reading speed over understanding, and they invert
  the distractor logic so that the three wrong options are the three *correct* facts.
- **Four option sets are reused across nine items** — the technique set (items 5, 6, 14), the metric
  set (19, 20, 21), the regression-type set (22, 23) and the Custom Vision metric set (9, 26). Cheap
  to write, and it teaches option-set memorisation rather than the concept.
- **Key-letter distribution is the one thing this source does better**: a 9 / b 8 / c 5 / d 7 across
  29 items — close to flat, and far healthier than `warner-ai900`'s 84% B-or-C skew.

## Domain 1 · Describe AI workloads and considerations (2 items)

| Item | Concept tested | Theme | Verdict | Distractor patterns |
|---|---|---|---|---|
| 27 | naming the service families offered under the (then) Cognitive Services umbrella | A1 | **off-blueprint** — brand retired; the guide names individual Azure AI services, never the umbrella catalogue | negative stem, inverted construction: the three wrong options are the real families; the key is an invented one |
| 29 | inclusiveness as the principle about empowering and engaging everyone (b-1.2-4) | A5 | in scope | E04 ×3 principle-substitution (transparency, accountability, fairness) |

**Domain 1 observation.** Two items for a 15–20% domain, one of which is retired branding. This
source contributes exactly one usable domain-1 concept, and it is the one both sources already
cover. Responsible AI is under-tested here relative to its blueprint weight — the mirror image of
the machine-learning domain.

## Domain 2 · Fundamental principles of machine learning on Azure (16 items)

| Item | Concept tested | Theme | Verdict | Distractor patterns |
|---|---|---|---|---|
| 4 | which resource types an Azure ML workspace can create | A1 | **off-blueprint** — resource-name recall; b-2.3-3 is about *what compute is for*, not its catalogue names | negative stem; E08 ×3 spec-trivia, one option an invented resource name |
| 5 | classification predicts which category an item belongs to (b-2.1-2) | A4 | in scope | E03 ×2 technique-paradigm-swap (k-means, clustering), E07 ×1 sibling-term (neural network) |
| 6 | clustering groups similar entities by their features (b-2.1-3) | A4 | in scope | E03 ×2 technique-paradigm-swap, E07 ×1 sibling-term — **same option set as item 5, complementary key** |
| 14 | which of four named things is not a technique category (b-2.1-4) | A4 | in scope, poor form | negative stem; E03 ×3 technique-paradigm-swap |
| 15 | naming a multiclass classification algorithm | A1 | **off-blueprint** — no algorithm is named anywhere in the 2025 objectives | E07 ×3 sibling-term (clustering, instance-based and anomaly-detection algorithms) |
| 16 | principal component analysis as the strongest-pattern technique | A1 | **off-blueprint** — not named at any level | E07 ×3 sibling-term |
| 17 | which data file formats Azure ML does not accept | A1 | **off-blueprint** — pure specification recall | negative stem; E08 ×3 spec-trivia |
| 18 | the goal of feature engineering | A1 | **off-blueprint** — the 2025 objective is *features and labels in a dataset* (b-2.2-1); feature engineering is a build-time activity the audience profile excludes | E07 ×3 sibling-term (normalisation, binning, imputation — all real preparation steps) |
| 19 | accuracy as the fraction of predictions that are correct | A1 | **off-blueprint** — evaluation metrics are not named in the 2025 objectives | E07 ×3 sibling-term (precision, recall, F1) |
| 20 | precision as the share of positive predictions that are right | A1 | **off-blueprint**, and **defective** — see the defect note below | E07 ×3 sibling-term — **same option set as 19 and 21** |
| 21 | recall as the share of true positives that were found | A1 | **off-blueprint** | E07 ×3 sibling-term |
| 22 | ordinal regression predicts an ordered category | A1 | **off-blueprint** — regression sub-types are designer-era material | E07 ×3 sibling-term |
| 23 | Poisson regression models counts | A1 | **off-blueprint** | E07 ×3 sibling-term — **same option set as 22, complementary key** |
| 24 | naming the three processes of statistical analysis | A1 | **off-blueprint**, and unsourceable — the triple is not a Microsoft framing | D19 ×3 false-technical-claim (three invented process triples) |
| 25 | what a hyperparameter is not | A1 | **off-blueprint** — hyperparameter tuning sits above this exam's audience profile | negative stem; E07 ×3 sibling-term |
| 26 | which metric does not apply to clustering models | A1 | **off-blueprint** — designer-era evaluation metrics | negative stem; E08 ×3 spec-trivia |

**Domain 2 observation.** Sixteen items, of which **twelve are off-blueprint** against the final
revision — this is the single clearest demonstration of what the 2025-05-02 change log means when it
records that this domain's share "decreased" and that *Identify common machine learning techniques*
changed. The three usable concepts (5, 6, 14) are the regression/classification/clustering triad
that `warner-ai900` also covers, so this domain's contribution to the inventory is **convergence
confirmation on three concepts and nothing else**.

**Defect note — items 19 and 20.** Two near-identical stems ("the fraction of time when the model is
correct" / "how often the model is correct") over the *same option set*, keyed to different answers
(accuracy, then precision). As written, item 20's stem is a fair description of item 19's key. This
is exactly the class Mockka's `near-duplicate-stems` check exists to prevent, and it is a reminder
that a source's internal consistency is not a given: **the concept may be inherited, the item pair
may not.**

## Domain 3 · Computer vision workloads on Azure (8 items)

| Item | Concept tested | Theme | Verdict | Distractor patterns |
|---|---|---|---|---|
| 1 | per-pixel classification as a distinct vision task | A1 | **off-blueprint** — semantic segmentation is not named in the 2025 objectives; the concept is real, the exam relevance is not | E05 ×3 granularity-slip (object detection, image analysis, OCR) |
| 2 | OCR reads text that exists in an image (b-3.1-3) | A1 | in scope | E05 ×3 granularity/task slip — **same option set as item 1, complementary key** |
| 7 | which resource types the vision service is created with | A1 | **off-blueprint** — provisioning trivia, retired branding | E08 ×3 spec-trivia (invented resource-name pairs) |
| 8 | the two specialised domain models of the vision service | A1 | **off-blueprint** — not in the 2025 objectives | E08 ×3 spec-trivia |
| 9 | which metric is not reported when training a Custom Vision model | A1 | **off-blueprint** — Custom Vision is not a named service in this blueprint | negative stem; E08 ×3 spec-trivia |
| 10 | which image format the face service does not accept | A1 | **off-blueprint** — pure specification recall | negative stem; E08 ×3 spec-trivia |
| 11 | the hierarchy the OCR API returns | A1 | **off-blueprint** — API response shape is below this exam's altitude | negative stem; E08 ×3 spec-trivia |
| 28 | tagging as a feature of the vision service (b-3.2-1) | A2 | in scope | D19 ×3 false-technical-claim (three plausible-sounding capabilities the service does not offer) |

**Domain 3 observation.** Eight items, six of them specification recall. Items 2 and 28 are the only
blueprint-aligned contributions, and both are already covered by `warner-ai900` — again,
convergence confirmation rather than new coverage. Item 1's near-duplicate relationship with item 2
(same option set, complementary keys) is the same cheap construction seen in domain 2.

## Domain 4 · NLP workloads on Azure (3 items)

| Item | Concept tested | Theme | Verdict | Distractor patterns |
|---|---|---|---|---|
| 3 | which service builds a conversational question-answering experience | A2 | **off-blueprint key** — keyed to a retired product; the current equivalent is a feature of the named Language service (b-4.2-1) | E01 ×3 service-role-swap, one option an invented service name |
| 12 | the translation service uses neural machine translation | A1 | borderline — translation is in scope (b-4.1-6); the *model family behind it* is not named | E07 ×2 sibling-term, D19 ×1 false-technical-claim (invented model name) |
| 13 | which entity type a language-understanding app does not support | A1 | **off-blueprint** — keyed to a retired product's schema | negative stem; E08 ×3 spec-trivia |

**Domain 4 observation.** Three items for a 15–20% domain, two keyed to retired products. Sentiment
analysis, key phrase extraction, entity recognition, speech recognition and synthesis — four of the
six blueprint bullets — are untested. Domain 4 is effectively uncovered by this source.

## Domain 5 · Generative AI workloads on Azure (0 items)

Empty. The domain did not exist when this source was written. **The heaviest-weighted domain of the
exam (20–25%) has zero coverage here**, which is the structural reason the d5 concept inventory
cannot reach two-source convergence — see the Gate-1 note in [sources.md](sources.md).

## Distractor-pattern frequency across the 29 items

Counted from the tables above; 87 distractor slots (29 items × 3).

| Pattern | Approx. count | Note |
|---|---|---|
| E07 `sibling-term-substitution` | 31 | the definitional workhorse, consistent with a source that writes only definitions |
| E08 `spec-trivia` | 27 | **31% of every wrong option** — formats, limits, resource names, API fields. The pattern to cap near zero |
| D19 false-technical-claim | 7 | mostly invented service, model and process names offered as plausible options |
| E03 `technique-paradigm-swap` | 7 | the three usable machine-learning items |
| E05 `granularity-slip` | 6 | items 1 and 2 only |
| E01 `service-role-swap` | 3 | one item |
| E04 `principle-substitution` | 3 | one item |
| inverted (negative-stem) construction | 3 | item 27, where the wrong options are the true facts |
| E02 `workload-type-swap`, E06 `mode-swap` | 0 | **absent** — no scenario-shaped item exists in this source |
| D01–D18, D20 | 0 | absent |

**Consequences for authoring.**

1. **Cap E08 `spec-trivia` at or near zero.** 31% of this source's wrong options — and by extension
   a large share of the community AI-900 corpus — are eliminable by recalling a specification rather
   than by understanding a concept. The AI-900 audience profile explicitly does not require
   engineering experience; a spec-recall item measures study-guide-adjacent memorisation, not the
   skill the exam claims. Proposed manifest `pattern_caps`: `E08: 0.05` (a hard ceiling that
   effectively forbids it, kept non-zero only so the cap is expressible).
2. **Do not inherit negative stems.** 31% here; the study guide never phrases an objective
   negatively. Proposed S4 rule: **no negative stems**, with the single exception of an item whose
   *concept* is a boundary (what a service does not do), argued in the rationale.
3. **Do not reuse an option set across items.** Four families cover nine items here. Mockka's
   `near-duplicate-stems` check catches the extreme case; the authoring rule should be stricter —
   an option set is used once.
4. **Vintage check is a standing S3 rule.** 22 of 29 items (76%) are off-blueprint against the final
   revision, and three key to retired products. **Every concept lifted from this source is re-checked
   against the study guide's objective bullets and against current Azure AI service naming before it
   enters `concepts.json`.** This is the same rule the AWS build derived at a 5% off-blueprint rate;
   here the rate is fifteen times higher, so the check is not optional.
5. **Keep the key-letter discipline.** This source's near-flat key distribution (9/8/5/7) is the
   behaviour to copy; `warner-ai900`'s is not.
6. **Treat this source as convergence confirmation only.** Its six in-scope concepts are all
   independently covered by `warner-ai900` or the blueprint. Its real contribution to the build is
   negative evidence: it maps what the 2025 revision removed, which is exactly the material a
   candidate studying old community sets will over-prepare.

## Concepts this source tests that other sources do not spell out

- Nothing that survives the blueprint check. Every in-scope concept here (OCR as text extraction,
  classification, clustering, technique categories, vision tagging, inclusiveness) is independently
  covered by `warner-ai900` or named in the study guide.
- Its distinctive contribution is the **off-blueprint register**: the concrete list of retired
  brands (Cognitive Services, LUIS, QnA Maker), designer-era metrics, algorithm names, regression
  sub-types and API specifications that circulate in community AI-900 material and must be kept out
  of the bank — or used deliberately as distractors, which is the one legitimate use for all of it.

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: every scenario-shaped concept, all
workload discrimination, the whole generative-AI domain, the Azure ML capability and deployment
material, the responsible-AI action form, and all of the Language and Speech service feature
discrimination — which come from [`source-warner-ai900.md`](source-warner-ai900.md) and
[`source-ms-ai900-blueprint.md`](source-ms-ai900-blueprint.md).
