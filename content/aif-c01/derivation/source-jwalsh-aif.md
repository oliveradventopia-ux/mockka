# Artefact A · jwalsh/aif-c01 practice-test distillation

**What this is.** The MIT-licensed GitHub repository `jwalsh/aif-c01` carries five AIF-C01 practice
files containing 40 questions written against the public exam blueprint. This document records, for
each item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory, and the second independent
reading of the blueprint available to this build. It answers "what does this author believe is
tested?" — usefully, from a very different vantage point to
[`source-declute-serverside.md`](source-declute-serverside.md): where that source writes scenarios,
this one writes definitions, and the contrast is itself calibration data.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `jwalsh-aif` in [sources.md](sources.md). Credited in the exam README. Themes (A1–A7) and
> pattern extensions (E01–E05) are defined in
> [`source-declute-serverside.md`](source-declute-serverside.md) and proposed there for S3.

## Format mix observed

| Domain | Single choice | Multiple response | Ordering | Matching | Total |
|---|---|---|---|---|---|
| d1 Fundamentals of AI and ML | 12 | 0 | 0 | 0 | 12 |
| d2 Fundamentals of GenAI | 7 | 0 | 0 | 0 | 7 |
| d3 Applications of FMs | 9 | 0 | 0 | 0 | 9 |
| d4 Responsible AI | 8 | 0 | 0 | 0 | 8 |
| d5 Security, Compliance, Governance | 4 | 0 | 0 | 0 | 4 |
| **Total** | **40** | **0** | **0** | **0** | **40** |

Asymmetries worth preserving or correcting, explicitly:

- **Single format only.** Every item is four options, one key. Three of the real exam's four item
  types are absent. This source contributes nothing to format calibration.
- **Every item is definitional; none is a scenario.** No item describes a company, a symptom or a
  constraint — all 40 ask what a term means or which service performs a named function. The real
  exam's stems are scenario-led, so this source calibrates *vocabulary coverage* only, never
  difficulty pitch.
- **Domain mix 30/17.5/22.5/20/10%** against the blueprint's 20/24/28/14/14 — d1 and d4
  over-served, d5 badly under-served (four items for 14% of the exam).
- **Six items are near-duplicates of other items in the same set** (the fifth file re-asks RAG,
  few-shot, the responsible-AI principle, the Bedrock and Comprehend service identities with the
  same or nearly the same option sets). Effective distinct coverage is ~34 items, not 40.

## Domain 1 · Fundamentals of AI and ML (12 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.01 | ML is a subset of AI, not the reverse (b-1.1-1) | A1 | E05 ×1 relation-inversion, D19 ×2 false-property-claim (AI as data-driven vs ML as rule-based; supervision framed as the dividing line) |
| 1.02 | clustering as the canonical unsupervised task (b-1.1-12) | A1 | E05 ×3 paradigm-swap (regression, binary classification, image classification, all supervised) |
| 1.03 | text analysis tasks map to Amazon Comprehend (b-1.2-5) | A2 | E01 ×3 adjacent-service-capability (Rekognition, SageMaker, Polly) |
| 1.04 | feature engineering creates inputs that represent the problem better (b-1.3-1) | A1 | E03 ×3 stage-slip (dimensionality reduction, normalisation, outlier removal — all real data work, none the definition) |
| 1.05 | MLOps means repeatable, automated delivery of models (b-1.3-5) | A1 | D02 ×3 under-structuring (manual cleansing, one-time deployment, ad-hoc retraining — the practice MLOps exists to replace) |
| 1.06 | Amazon SageMaker AI builds, trains and deploys models at scale (b-1.3-4) | A2 | E01 ×3 adjacent-service-capability (database, compute management, content delivery) |
| 1.07 | conversational voice and text interfaces are Amazon Lex (b-1.2-5) | A2 | E01 ×3 adjacent-service-capability (Polly, Transcribe, Comprehend) |
| 1.08 | naming the stages of the ML lifecycle — *negative stem* (b-1.3-1) | A1 | inverted construction: the three wrong options are genuine stages; see craft note |
| 1.09 | a pre-trained model saves the time, data and compute of building from scratch (b-1.3-2) | A1 | D19 ×3 absolute-overclaim (perfect accuracy, no task-specific data needed, no further training needed) |
| 1.10 | production model quality decay is watched with SageMaker Model Monitor (b-1.3-6) | A2 | E01 ×3 adjacent-service-capability (CloudWatch, Config, Inspector) |
| 1.11 | Amazon Comprehend performs sentiment and entity analysis (b-1.2-5) — *near-duplicate of 1.03* | A2 | E01 ×3 adjacent-service-capability |
| 1.12 | speech-to-text is Amazon Transcribe (b-1.2-5) | A2 | E01 ×3 adjacent-service-capability (Polly, Translate, Comprehend) |

**Domain 1 observation.** Half of this domain is a single question asked six ways: *which service
does X*. It is the cheapest item type to write and the cheapest to pass by memorisation. Nothing
here tests inference-mode selection (b-1.1-8), data-type recognition (b-1.1-10/11), when AI is
inappropriate (b-1.2-2), or the traditional-ML-versus-FM judgment (b-1.2-6).

## Domain 2 · Fundamentals of GenAI (7 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.01 | an FM is trained broadly and adapted to many tasks (b-2.1-6) | A1 | E05 ×1 sibling-term (small task-specific model), D19 ×2 false-property-claim (minimal compute, text-only) |
| 2.02 | prompt engineering shapes output through the input (b-2.1-4) | A1 | E03 ×1 stage-slip (framed as a training technique), E05 ×2 sibling-term (compression, visualisation) |
| 2.03 | Amazon Bedrock is the managed environment for building GenAI applications (b-2.3-1) | A2 | E01 ×3 adjacent-service-capability (SageMaker, Comprehend, Lambda) |
| 2.04 | hallucination as the headline GenAI limitation (b-2.2-2) | A1 | D19 ×3 absolute-overclaim (text-only, small datasets required, always accurate) |
| 2.05 | managed GenAI services lower the barrier to entry (b-2.3-2) | A1 | D19 ×3 absolute-overclaim (always free, guaranteed accuracy, no programming needed) |
| 2.06 | a token is the unit of text a model processes (b-2.1-1) | A1 | E05 ×3 sibling-term (credential, compute unit, network layer) |
| 2.07 | Amazon Bedrock serves foundation models via API (b-2.3-1) — *near-duplicate of 2.03* | A2 | E01 ×3 adjacent-service-capability |

**Domain 2 observation.** Seven items, five distinct concepts, all from the pre-v1.1 half of the
task statements. Token pricing, chunking, embeddings, context engineering, the agentic block and MCP
are all absent — the same gap as every accessible source, which is why the blueprint carries d2
almost alone.

## Domain 3 · Applications of Foundation Models (9 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.01 | RAG combines retrieval with generation for grounded answers (b-3.1-4) | A1 | E05 ×3 sibling-term (compression, GAN, interpretability visualisation) |
| 3.02 | embeddings are stored and searched in Amazon OpenSearch Service (b-3.1-5) | A2 | E01 ×3 adjacent-service-capability (DynamoDB, S3, RDS for MySQL) |
| 3.03 | temperature controls randomness and creativity (b-3.1-3) | A1 | E05 ×3 sibling-parameter (max length, throughput, learning rate) |
| 3.04 | few-shot prompting supplies in-prompt examples (b-3.2-2) | A1 | E04 ×2 customization-swap (training on small datasets, rapid fine-tuning), E05 ×1 sibling-term (model size reduction) |
| 3.05 | fine-tuning quality is governed by dataset quality and relevance (b-3.3-3) | A3 | D11 ×3 wrong-criterion (pre-training dataset size, parameter count, training hardware) |
| 3.06 | fine-tuning adapts a model to a task or domain (b-3.3-1) | A3 | E04 ×2 customization-swap (size reduction = distillation, broader general knowledge = continued pre-training), D19 ×1 false-mechanism-claim (makes the model forget prior training) |
| 3.07 | top-p limits candidates by cumulative probability (b-3.1-3) | A1 | E05 ×3 sibling-parameter (max length, speed, per-token minimum threshold) |
| 3.08 | RAG definition (b-3.1-4) — *duplicate of 3.01, same option set* | A1 | E05 ×3 sibling-term |
| 3.09 | few-shot purpose (b-3.2-2) — *near-duplicate of 3.04* | A1 | E04 ×1, E05 ×2 |

**Domain 3 observation.** The customization vocabulary (fine-tuning vs distillation vs continued
pre-training) is genuinely well covered here — item 3.06 is the best-constructed item in the source
because every wrong option is a *real* technique that answers a *different* question. That is the
E04 pattern working as intended and is worth copying. Prompt-risk taxonomy, prompt versioning,
evaluation metrics and FM selection criteria are all absent.

## Domain 4 · Guidelines for Responsible AI (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.01 | fairness and non-discrimination as a responsible-AI principle (b-4.1-1) | A6 | D14 ×1 dogma (maximise complexity), D11 ×1 wrong-criterion (speed over accuracy), D17 ×1 secrecy-as-strategy |
| 4.02 | bias detection and monitoring tooling (b-4.1-7 / b-4.2-2) | A2 | E01 ×3 adjacent-service-capability (Rekognition, Comprehend, CloudTrail) — **keyed to SageMaker Clarify; the guide names Amazon A2I under 4.1.7 and Clarify only under v1.1's 4.2.2, so the concept is right and the placement is not** |
| 4.03 | explainability builds auditable trust (b-4.2-1) | A6 | D19 ×2 absolute-overclaim (always more accurate, cheaper to run), D19 ×1 false-property-claim (removes the need for human oversight) |
| 4.04 | responsible-AI principle (b-4.1-1) — *duplicate of 4.01, same distractor family* | A6 | D14 ×1, D11 ×1, D17 ×1 |
| 4.05 | overfitting means learning the training data's noise (b-4.1-6) | A1 | E05 ×1 sibling-term (underfitting), E03 ×2 stage-slip (training duration, compute demand) |
| 4.06 | transparency and explainability as a responsible-AI requirement (b-4.2-1) — *near-duplicate of 4.03* | A6 | D14 ×1, D17 ×1, D11 ×1 |
| 4.07 | a model card documents purpose, use and limitations (b-4.2-2) | A1 | E05 ×1 sibling-term, D19 ×2 false-property-claim (encrypting parameters, optimising performance) |
| 4.08 | generated content can infringe copyright or carry bias (b-4.1-4) | A6 | D11 ×3 wrong-criterion (generation speed, storage consumption, single-language output — operational annoyances offered against a legal-risk question) |

**Domain 4 observation.** Over-served by item count and under-served by concept: three of eight
items are the same "which principle" question. The blueprint's harder Domain 4 material — the
safety/transparency trade-off, sustainability, dataset characteristics, human-centred design — is
untouched. Item 4.08 is the source's only genuine legal-risk item and its distractor family (real
but irrelevant operational concerns) is a good pattern that neither source exploits enough.

## Domain 5 · Security, Compliance, and Governance (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.01 | continuous compliance auditing against regulatory standards (b-5.2-1) | A2 | E01 ×3 adjacent-service-capability — **keyed to AWS Audit Manager, which is NOT on the exam guide's in-scope service list. Off-blueprint: carry the concept, drop the service** |
| 5.02 | data governance spans quality, privacy and appropriate use across the lifecycle (b-5.2-2) | A7 | D13 ×3 blast-radius-expansion (collect without restriction, retain indefinitely, publish everything) |
| 5.03 | discovering sensitive data in storage is Amazon Macie (b-5.1-3) | A2 | E01 ×3 adjacent-service-capability (Rekognition, Comprehend, Textract) |
| 5.04 | prompt injection manipulates behaviour through crafted input (b-5.1-11) | A1 | E05 ×2 sibling-term (knowledge injection without retraining, rapid fine-tuning), E03 ×1 stage-slip (framed as a training optimisation) |

**Domain 5 observation.** Four items, one of them keyed to an out-of-scope service. Domain 5 is
effectively uncovered by this source. Every v1.1 security concept, the Scoping Matrix, encryption,
IAM, PrivateLink, shared responsibility and AI audit trails are all absent.

## Distractor-pattern frequency across the 40 items

Counted from the tables above; 120 distractor slots (40 items × 3).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` | 39 | **over-used** — a third of every wrong option in the source; 13 of 40 items are built from nothing else |
| E05 `sibling-term-substitution` | 30 | the definitional workhorse, consistent with a source that writes only definitions |
| D19 false-technical-claim | 22 | **almost all are absolutes** — "always", "guaranteed", "100%", "eliminates the need for". Eliminable without any subject knowledge |
| E03 `lifecycle-stage-slip` | 9 | mostly incidental |
| D11 non-architectural-criteria | 8 | strongest instances are 4.08 and 3.05 |
| E04 `customization-swap` | 5 | present and well-made where used (3.06) |
| D13 blast-radius-expansion | 3 | one item, all three options |
| D02 under-structuring | 3 | one item, all three options — the MLOps anti-practice triple |
| D14 dogma / D17 secrecy-as-strategy | 3 each | the repeated responsible-AI distractor family |
| E02 `metric-task-mismatch` | 0 | **absent** — no evaluation-metric item exists in this source |
| D01, D04, D05, D06, D07, D16 | 0 | absent |

**Consequences for authoring.**

1. **Absolutes are the failure mode to design against.** 22 of 120 wrong options here are
   eliminable purely by spotting "always/guaranteed/100%/eliminates". A bank built on this pattern
   measures test-wiseness, not knowledge. Proposed rule for S4 and for the validator's lint pass:
   **no unqualified absolute in any wrong option** unless the absolute is itself the misconception
   being tested (which is rare and should be argued in the rationale).
2. **The same E01 cap applies, harder.** At 33% of wrong options this source is even more
   service-trivia-heavy than the other. Confirms the proposed `E01` cap at 0.30 of items.
3. **E02 is a genuine hole across both sources** — no evaluation-metric distractors here at all,
   and only nine in the other source, against a blueprint that names metrics in objectives 1.3.6,
   3.4.2 and 3.4.6. Deliberately over-provision E02 in d1 and d3 authoring.
4. **Copy item 3.06's construction.** Every wrong option a real technique that answers a different
   question — that is the model for the whole customization cluster.
5. **Watch the length tell.** In most items here the key is the longest and most qualified option.
   Mockka's authoring must equalise option length within an item; a length-based blind solve should
   score at chance.
6. **Do not inherit the negative stem.** Item 1.08 asks which option is *not* a lifecycle stage;
   the blueprint never phrases objectives negatively, and negative stems reward reading speed over
   understanding.
7. **Two off-blueprint keys found across 40 items** (AWS Audit Manager; SageMaker Clarify placed
   under bias detection where the guide names Amazon A2I). Rate: 5%. Every concept lifted from a
   practice source must be re-checked against the guide's in-scope service list before it enters
   `concepts.json` — this is a standing S3 rule, not a one-off.

## Concepts this source tests that other sources do not spell out

- MLOps as the replacement for manual, one-off, ad-hoc practice (b-1.3-5) — the only source to
  frame MLOps as a discipline rather than a toolchain
- prompt injection defined by attacker objective (b-5.1-11)
- data governance as a lifecycle obligation spanning quality, privacy and retention (b-5.2-2)
- pre-trained model reuse as a time/data/compute saving with explicit limits (b-1.3-2)
- model cards as documentation of *limitations*, not just performance (b-4.2-2)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: everything scenario-shaped
(`declute-serverside`), all evaluation metrics, all cost and latency levers, the entire v1.1 block,
and almost all of Domain 5 — which come from
[`source-aif-blueprint.md`](source-aif-blueprint.md), and in a handful of cases from
[`source-declute-serverside.md`](source-declute-serverside.md), alone.
