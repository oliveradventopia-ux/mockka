# Artefact A · timothywarner/ai900 practice-item distillation

**What this is.** Tim Warner's MIT-licensed AI-900 courseware repository carries five
practice-item files — one per exam skill area — containing **25 questions** written against the
public study guide (each file's frontmatter records `generated: 2026-02-23` and each item names the
study-guide objective it targets). This document records, for each item, **the concept it tests**
and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does this source's author believe is tested?" — an independent reading of the 2025-05-02 blueprint,
and the only accessible reading of it that covers the generative-AI domain at all.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `warner-ai900` in [sources.md](sources.md). Credited in the exam README. Themes (A1–A7)
> and pattern extensions (E01–E08) are defined at the foot of this document and proposed there for
> S3 adoption.

## Format mix observed

| Domain | Single choice | Multiple response | Build list | Drag and drop | Hot area | Total |
|---|---|---|---|---|---|---|
| d1 AI workloads and considerations | 5 | 0 | 0 | 0 | 0 | 5 |
| d2 ML principles on Azure | 5 | 0 | 0 | 0 | 0 | 5 |
| d3 Computer vision workloads | 5 | 0 | 0 | 0 | 0 | 5 |
| d4 NLP workloads | 5 | 0 | 0 | 0 | 0 | 5 |
| d5 Generative AI workloads | 5 | 0 | 0 | 0 | 0 | 5 |
| **Total** | **25** | **0** | **0** | **0** | **0** | **25** |

Asymmetries worth preserving or correcting, explicitly:

- **Single format only.** Every item is four options, one key. None of the vendor's other item types
  (build list, drag and drop, hot area, active screen, case study, problem-solution set) appears.
  This source contributes **nothing** to format calibration — a real limitation given that Microsoft
  awards partial credit on multi-part items and Mockka does not.
- **Flat 5/5/5/5/5 domain mix (20% each)** against a blueprint of 15–20 / 15–20 / 15–20 / 15–20 /
  20–25. Under-weights d5 relative to its premium, but is the closest thing to blueprint-shaped
  calibration available here.
- **Every item is scenario-led**, on the standard Microsoft documentation personas (Contoso,
  Fabrikam, Northwind, Tailwind, Adatum), with a named vertical and a stated constraint. That is the
  right pitch for this exam and the opposite of `wrieden-ai900`'s definitional style — the contrast
  between the two sources is itself calibration data.
- **Key-letter distribution is badly skewed:** A 3, B 10, C 11, D 1. 84% of keys are B or C, and D
  is used once in 25 items. A candidate guessing C would score 44%. Mockka's
  `key-position-distribution` check exists precisely for this; do not inherit the skew.
- **Rationales are option-keyed** (a paragraph for the key and for each distractor, each explaining
  why the option fails) — structurally the same contract Mockka's schema enforces, which makes this
  source unusually easy to classify.

## Domain 1 · Describe AI workloads and considerations (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | recognising field extraction from mixed-format forms as a document-processing workload (b-1.1-3) | A3 | E02 ×3 workload-type-swap (NLP, image-classification CV, generative AI — each a real workload that fails on the "structured fields out of a scanned form" requirement) |
| 1.2 | naming fairness as the principle violated by systematic advantage to one group (b-1.2-1, b-1.2-7) | A5 | E04 ×3 principle-substitution (transparency, accountability, privacy and security) |
| 1.3 | needing per-object presence *and* position selects object detection, not classification (b-1.1-1, b-3.1-5) | A3 | E05 ×1 granularity-slip (whole-image classification for a per-object requirement), E02 ×2 workload-type-swap (NLP, document processing) |
| 1.4 | discharging transparency = explaining the decision to the affected person (b-1.2-5, b-1.2-8) | A5 | E04 ×3 principle-substitution **in action form** — retrain for bias (fairness), MFA on the portal (privacy/security), manual review of denials (accountability). Each is a *good* action that answers a different principle |
| 1.5 | text-to-image plus draft-generation is a generative-AI workload (b-1.1-4) | A3 | E02 ×3 workload-type-swap (NLP, CV, document processing) |

**Domain 1 observation.** Three of five items are the same underlying skill — read a scenario, name
the workload — which is exactly what the 2025 revision flagged as a **Major** change to this group,
so the emphasis is defensible. Item 1.4 is the best-constructed item in the source and the model to
copy: every option is an action a competent team might take, and only one discharges the *named*
principle. Nothing here tests reliability/safety or inclusiveness (b-1.2-2, b-1.2-4).

## Domain 2 · Fundamental principles of machine learning on Azure (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | a continuous numeric target selects regression (b-2.1-1) | A4 | E03 ×2 technique-paradigm-swap (classification, clustering), E07 ×1 sibling-term (a CNN offered for tabular features) |
| 2.2 | absence of predefined labels selects clustering (b-2.1-3, b-2.1-4) | A4 | E03 ×3 technique-paradigm-swap (binary classification, regression, multiclass) — **each wrong option carries its own justification clause**, so the item cannot be solved by option length or hedging |
| 2.3 | AutoML is the low-code multi-algorithm search (b-2.3-1, b-2.3-2) | A2 | E01 ×3 within-product capability swap (designer, SDK v2 scripts, compute instances — all real Azure ML surfaces that answer different needs) |
| 2.4 | a large train-vs-validation gap diagnoses overfitting, and names the two splits (b-2.2-2, b-2.2-3) | A7 | E07 ×1 sibling-term (underfitting), D19 ×1 false-technical-claim (the gap is "expected"), D02 ×1 under-structuring (merge the splits — removes the only generalisation check) |
| 2.5 | a per-request consuming application selects a real-time online endpoint (b-2.3-5) | A7 | E06 ×1 mode-swap (batch pipeline on a schedule), D19 ×1 false-technical-claim (export the model as CSV), E01 ×1 within-product capability swap (rebuild in designer first) |

**Domain 2 observation.** This is the domain where the two sources diverge most sharply: this one
tests *what technique the data shape demands*, the other tests algorithm names and metric trivia.
The 2025 revision decreased this domain's weight and trimmed exactly the material the other source
drills, so this source's reading is the current one. Untested here: features vs labels (b-2.2-1),
the Transformer (b-2.1-6), deep learning as a choice (b-2.1-5), model registration (b-2.3-4).

## Domain 3 · Computer vision workloads on Azure (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | one label per whole image selects image classification (b-3.1-1, b-3.1-5) | A3 | E05 ×3 granularity/task slip within CV (object detection, OCR, facial detection) |
| 3.2 | type **and** location per instance selects object detection (b-3.1-2, b-3.1-5) | A3 | E05 ×3 granularity/task slip (whole-image classification, per-pixel segmentation, OCR) — segmentation is the sharpest distractor here because it *is* pixel-accurate but yields no instances |
| 3.3 | structured field extraction from handwritten forms selects a document-intelligence service (b-1.1-3) | A2 | E01 ×3 service-role-swap (general image analysis, face, language). **Key is off the blueprint's named answer space** — see craft note 6 |
| 3.4 | face detection with attribute estimation, explicitly *not* identification (b-3.1-4, b-3.2-2) | A2 | E01 ×3 service-role-swap (document intelligence, vision Read, language) |
| 3.5 | a natural-language description of an image selects the captioning feature (b-3.2-1) | A2 | E01 ×3 within-service feature swap (Read/OCR, face detection, smart crop — all features of the same service) |

**Domain 3 observation.** Two clean granularity items and three service-identification items. The
within-service feature swap in 3.5 is the more interesting construction and is under-used across
both sources: it forces a candidate to know what a service's features *do*, not merely which
service exists. Item 3.4's "does NOT need to identify individuals" clause is a good example of a
constraint that turns a lookup into a discrimination.

## Domain 4 · NLP workloads on Azure (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | polarity scoring over review text selects sentiment analysis (b-4.1-3, b-4.1-7) | A2 | E01 ×3 within-service feature swap (key phrase extraction, entity recognition, conversational understanding) |
| 4.2 | both speech directions in one service selects the speech service (b-4.1-5, b-4.2-2, b-4.2-3) | A2 | E01 ×3 service-role-swap (language, translator, vision) |
| 4.3 | typed extraction (organisation, location, date, amount) selects entity recognition (b-4.1-2, b-4.1-7) | A2 | E01 ×3 within-service feature swap (sentiment, key phrase, language detection) — key phrase is the load-bearing distractor: it surfaces the same words without typing them |
| 4.4 | bulk programmatic text translation selects the translation service (b-4.1-6) | A2 | E01 ×3 service-role-swap (speech, language, conversational understanding). **Key is off the blueprint's named answer space** — craft note 6 |
| 4.5 | intent plus entity extraction from utterances selects conversational language understanding (b-4.1-4) | A2 | E01 ×3 within-service feature swap (sentiment, key phrase, custom question answering) — question answering is the load-bearing distractor: it also serves a chat surface, but retrieves answers instead of classifying intent |

**Domain 4 observation.** Five service-identification items in a row: this domain is where the
source is most repetitive in *form* while still being discriminating in *content*, because three of
the five build their wrong options from sibling features of the **same** service rather than from
other services. That is the construction worth inheriting; five items of "which service" in a row
is not.

## Domain 5 · Generative AI workloads on Azure (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | text-to-image generation selects an image-generation model, not a multimodal chat model (b-5.1-2, b-5.1-3) | A6 | E01 ×3 model-role-swap (a multimodal LLM that *reads* images, an embeddings model, a speech-to-text model) |
| 5.2 | persistent behavioural constraints belong in the system message, not in each prompt (b-5.2-5) | A6 | E06 ×1 mode-swap (per-prompt examples for a persistent rule), D04 ×1 knob-twiddling (raise temperature), E01 ×1 model-role-swap (embeddings model as a filter) |
| 5.3 | grounding answers in a private corpus selects retrieval-augmented generation (b-5.1-4, b-5.2-6) | A6 | E06 ×1 customisation-swap (fine-tune to inject facts), D19 ×1 false-technical-claim (raise the token limit until every document fits), E01 ×1 model-role-swap (image generation for document search) |
| 5.4 | layered mitigation for fabricated output: platform filter **plus** grounding instruction (b-5.1-4, b-5.1-5) | A6 | D19 ×1 false-technical-claim (an older model hallucinates less), D02 ×2 under-structuring (remove the system message; disable content filtering — each strips a mitigation layer) |
| 5.5 | browsing, comparing and deploying models from multiple providers selects the Foundry model catalog (b-5.2-1, b-5.2-3) | A2 | E01 ×3 service-role-swap (ML designer, AI Search, AI Language) |

**Domain 5 observation.** The only accessible coverage of the heaviest domain, and it is decent:
5.3 and 5.4 are genuine judgment items whose wrong options are *real* techniques that answer
different questions. Two cautions. First, 5.2 and 5.3 test prompt engineering and RAG, which the
2025 study guide does **not** name as bullets (see the Artefact B caveat on b-5.2-5/b-5.2-6) — the
concepts are defensible as related topics but must be carried flagged. Second, 5.5 keys to
**"Microsoft Foundry"**, the rebrand of the guide's *Azure AI Foundry*: the concept is right, the
vocabulary has drifted past the blueprint.

## Distractor-pattern frequency across the 25 items

Counted from the tables above; 75 distractor slots (25 items × 3).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` (incl. within-service feature swap and model-role swap) | 32 | **over-used** — 43% of all wrong options; 8 of 25 items are built from nothing else. Cap it |
| E02 `workload-type-swap` | 8 | concentrated in d1; the right pattern for that domain |
| E05 `granularity-slip` | 7 | the d3 workhorse, and the most transferable pattern in the source |
| E03 `technique-paradigm-swap` | 5 | d2 only |
| E04 `principle-substitution` | 6 | d1 only; item 1.4's *action-form* variant is the valuable one |
| E06 `mode-swap` / customisation-swap | 3 | present and well-made where used (2.5, 5.2, 5.3) |
| D19 false-technical-claim | 4 | all four are plausible-sounding mechanism claims, not lazy absolutes |
| D02 under-structuring | 3 | 2.4 and 5.4 — removing a safeguard as the wrong answer |
| E07 sibling-term-substitution | 2 | incidental |
| D04 knob-twiddling | 1 | 5.2 (temperature offered against a governance requirement) |
| E08 `spec-trivia` | 0 | **absent — and that is correct.** Contrast `wrieden-ai900`, where it is the dominant pattern |
| D01, D03, D05–D18, D20 | 0 | absent |

**Consequences for authoring.**

1. **Cap E01 at 0.30 of items.** At 43% of wrong options and 8 items built solely from it, service
   swapping is this source's crutch — and it is the pattern a candidate defeats by memorising a
   service list rather than by reading the scenario. Proposed manifest `pattern_caps`:
   `E01: 0.30`.
2. **Promote E05 `granularity-slip` and the action-form E04.** These two are where AI-900 actually
   discriminates: same subject matter, wrong output shape (classification for a detection job); and
   same good intention, wrong principle (retraining offered against a transparency complaint).
   Deliberately over-provision both in d1 and d3.
3. **Inherit the within-service feature swap, not the service swap.** Items 3.5, 4.1, 4.3 and 4.5
   force a choice among features of *one* service. This is strictly harder and strictly more
   blueprint-aligned than "which of four unrelated services".
4. **Fix the key-letter distribution.** A 3 / B 10 / C 11 / D 1 is a live answer-key tell. Mockka's
   `key-position-distribution` check must be on for this bank; set `key_letter_max_share` rather
   than trusting authoring discipline.
5. **Equalise option length.** In several items (1.4, 5.4, 5.5) the key is the longest and most
   qualified option. Item 2.2 shows the fix — attach a justification clause to *every* option — and
   that pattern should be the house style for technique-selection items.
6. **Standing S3 rule — re-check every keyed service against the blueprint's named answer space.**
   Two of 25 items (3.3 → a document-intelligence service; 4.4 → a translation service) key to
   Azure services the AI-900 study guide never names. Rate: **8%**. The concepts are in scope; the
   *keys* are not, and both are better re-cast with a blueprint-named key and the off-list service
   demoted to a distractor.
7. **Do not inherit the flat 20% domain mix.** d5 carries a 20–25% premium; the bank must reflect
   the normalised weights, not this source's convenience split.

## Concepts this source tests that other sources do not spell out

- Workload discrimination as a skill in its own right (b-1.1-5) — three separate items
- Discharging a responsible-AI principle through an *action* rather than naming it (b-1.2-8)
- Train/validation split read as a generalisation diagnosis (b-2.2-2, b-2.2-3)
- Real-time endpoint versus batch chosen from the consuming application (b-2.3-5)
- AutoML as the answer to a *candidate-profile* constraint, not a capability list (b-2.3-1)
- Within-service feature discrimination across the Language service (b-4.1-7)
- The entire generative-AI domain: model-family selection, system messages, retrieval grounding,
  layered hallucination mitigation, the model catalog (b-5.1-*, b-5.2-*)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the definitional half of the
vocabulary (`wrieden-ai900`), and everything in the Artefact B list "concepts this source holds that
no practice source tests" — reliability/safety, inclusiveness, features vs labels, the Transformer,
deep learning as a choice, model registration, and the detection-versus-identification boundary —
which come from [`source-ms-ai900-blueprint.md`](source-ms-ai900-blueprint.md) alone.

---

## Proposed theme set and pattern extensions (for S3 adoption)

**Themes** — the recurring scenario shapes this exam supports:

| id | Theme |
|---|---|
| A1 | concept-definition — what a term means, tested without a scenario |
| A2 | service-selection — which Azure service, or which feature of one service, performs a described task |
| A3 | workload-recognition — which AI workload category a described product is |
| A4 | technique-selection — which ML technique the data shape and target demand |
| A5 | responsible-AI judgment — which principle a failure violates, or which action discharges it |
| A6 | generative-AI design — model family, prompt shaping, grounding, mitigation |
| A7 | lifecycle-and-deployment — split, evaluate, deploy, serve |

**Verticals observed** (useful for the authoring guide's vertical rotation): insurance, HR/recruiting,
retail warehousing, real estate, hospitality, manufacturing, logistics, legal/contracts, marketing,
internal IT support, e-commerce, agriculture, field service.

**Pattern extensions** — proposed `E` ids for `authoring.json.pattern_extensions`:

| id | Name | Definition |
|---|---|---|
| E01 | `service-role-swap` | a real Azure service — or a real feature of the right service, or a real model of the right family — that performs a different job |
| E02 | `workload-type-swap` | a sibling AI workload category (vision / NLP / document / generative) offered against the right one |
| E03 | `technique-paradigm-swap` | regression / classification / clustering swapped, or supervision assumed where none exists |
| E04 | `principle-substitution` | a different responsible-AI principle — or an action that discharges a different principle — offered against the right one |
| E05 | `granularity-slip` | right modality, wrong output granularity (whole-image label for a per-instance job; untyped phrases for typed entities) |
| E06 | `mode-swap` | right service or model, wrong operating mode (batch for real-time; fine-tuning for retrieval; per-prompt examples for a persistent instruction) |
| E07 | `sibling-term-substitution` | an adjacent technical term that is real but answers a different question |
| E08 | `spec-trivia` | a non-conceptual implementation detail (supported file formats, resource-type names, API response fields). **Registered so it can be capped near zero** — it is the dominant pattern in `wrieden-ai900` and is off-blueprint for a describe-level exam |
