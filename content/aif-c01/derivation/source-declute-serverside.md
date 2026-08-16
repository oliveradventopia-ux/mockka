# Artefact A · DeClute / TheServerSide AIF-C01 question set distillation

**What this is.** Darcy DeClute's freely published AIF-C01 practice article on TheServerSide
(2026-07-20) contains 35 questions written against the public exam blueprint. This document records,
for each item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does this author believe is tested?" — an independent reading of the blueprint by a named
practitioner, published after exam-guide v1.1.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `declute-serverside` in [sources.md](sources.md). Credited in the exam README.
> The author states on the page that the items are original and explicitly not braindumps, and
> attributes them to her own course material. Spot-screened against the excluded dump corpus:
> no numbered correspondence, and the house style (stems carrying specific operational
> quantities — request rates, latencies, document counts) is absent from that corpus. Screening
> is evidence of absence, not proof of originality — recorded as such.

## Proposed theme set (for S3's `authoring.json`)

The T1–T8 starter themes in `methodology/03-authoring-guide.md#themes` were derived from an
architecture-professional exam and fit this foundational exam poorly (no autonomy-level or
trust-boundary judgments exist at this altitude). Both Artefact-A documents in this package use the
proposed set below; **declaring it is S3's call**, not this session's.

| id | Theme | Judgment exercised |
|---|---|---|
| A1 | Capability identification | name the concept, learning paradigm, data type or application category behind a described situation |
| A2 | Service selection | pick the AWS service that performs the required job, against near neighbours that perform adjacent jobs |
| A3 | Technique selection & trade-off | choose among customization, prompting or inference approaches under a stated constraint (cost, latency, privacy, effort) |
| A4 | Measurement choice | pick the metric or evaluation approach that answers the question actually asked |
| A5 | Failure diagnosis | reason from a symptom back to the mechanism, then forward to the fix that addresses it |
| A6 | Responsible-AI judgment | fairness, transparency, sustainability, legal exposure |
| A7 | Control placement | the security or governance control that meets an obligation, at the right layer and the right time |

## Proposed distractor-pattern extensions (for S3's `authoring.json`)

Five mechanisms recur here that the shared D01–D20 registry does not name. The registry's patterns
are failures of *professional judgment*; this exam's dominant distractors are failures of
*technical discrimination*. Proposed extensions, with the evidence count from this source:

| id | Name | Definition | Count here |
|---|---|---|---|
| E01 | `service-role-swap` | a real, in-scope AWS service that performs an adjacent but different job | 24 |
| E02 | `metric-task-mismatch` | a legitimate metric applied to the wrong task type or question | 9 |
| E03 | `lifecycle-stage-slip` | a legitimate activity from a different stage of the AI/ML or FM lifecycle | 11 |
| E04 | `customization-swap` | RAG, fine-tuning, continued pre-training, distillation and in-context learning substituted for one another | 7 |
| E05 | `sibling-term-substitution` | a neighbouring term from the same family offered as the definition (top-k for top-p, BLEU for ROUGE, clustering for classification) | 14 |

D-patterns that transfer unchanged and are used below: D01 over-engineering, D04 knob-twiddling,
D05 symptom-treatment, D06 wrong-layer, D07 detective-for-preventative, D11
non-architectural-criteria, D13 blast-radius-expansion, D14 dogma, D16 refuse-the-mandate, D19
false-technical-claim.

## Format mix observed

| Domain | Single choice | Multiple response | Ordering | Matching | Total |
|---|---|---|---|---|---|
| d1 Fundamentals of AI and ML | 10 | 1 | 0 | 0 | 11 |
| d2 Fundamentals of GenAI | 3 | 1 | 0 | 0 | 4 |
| d3 Applications of FMs | 9 | 1 | 0 | 0 | 10 |
| d4 Responsible AI | 5 | 1 | 0 | 0 | 6 |
| d5 Security, Compliance, Governance | 4 | 0 | 0 | 0 | 4 |
| **Total** | **31** | **4** | **0** | **0** | **35** |

Asymmetries worth preserving or correcting, explicitly:

- **Domain mix is roughly blueprint-shaped but under-weights d5.** Observed 31/11/29/17/11% against
  the blueprint's 20/24/28/14/14%: d1 is over-served and d2 under-served by about ten points. A
  bank built to this source's shape would over-drill fundamentals and under-drill GenAI — correct
  to blueprint weights, do not inherit.
- **All multiple-response items are "choose 2" of 5.** The real exam permits two *or more* correct
  responses out of *five or more* options. Four items are positively identifiable as multiple
  response in the retrieved content while the page's own summary claims seven; the three I could
  not identify are recorded as unresolved and do not change any conclusion below. `[UNVERIFIED]`
- **Zero ordering and zero matching items.** Two of the four real item types are entirely absent
  from this source — see the format-coverage consequence at the end.
- **One item delivers an ordering concept in single-choice form** (rank three customization
  approaches by implementation complexity, presented as four permutations). That is the exact
  approximation Mockka's `format_coverage` disclosure has to describe, demonstrated by an
  independent author — useful precedent, worth copying.

## Domain 1 · Fundamentals of AI and ML (11 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | clustering unlabelled records by similarity is unsupervised learning (b-1.1-12) | A1 | E05 ×3 paradigm-swap (supervised, reinforcement, semi-supervised offered as siblings) |
| 1.2 | AUC-ROC compares classifiers across every decision threshold, unlike single-operating-point metrics (b-1.3-7) | A4 | E02 ×3 single-point-for-threshold-sweep (confusion matrix at one cutoff, F1 at one operating point, average precision) |
| 1.3 | recommending items similar to the one being viewed is a recommendation-engine capability (b-1.2-4/5) | A2 | E01 ×3 adjacent-service-capability (enterprise search, workflow automation, document layout extraction) |
| 1.4 | overfitting shows strong training and weak validation; underfitting fails on both (b-4.1-6) — *multiple response* | A1 | E05 ×1 definition-inversion (the two swapped), D14 ×1 complexity-dogma ("more complex always wins"), plus one bare-label option (see craft note) |
| 1.5 | speech-to-text conversion of call audio is Amazon Transcribe (b-1.2-5) | A2 | E01 ×3 adjacent-service-capability (Lex, Comprehend, Model Monitor) |
| 1.6 | reading text from live video frames is Amazon Rekognition (b-1.2-5) | A2 | E01 ×3 adjacent-service-capability (Bedrock, Kendra, Comprehend) |
| 1.7 | deep learning trains by iteratively updating weights via backpropagation (b-1.1-1) | A1 | D19 ×2 false-mechanism-claim (manual weight setting, no dataset needed), plus one bare-label option |
| 1.8 | feature engineering converts raw data into more informative inputs (b-1.3-1) | A1 | E03 ×2 lifecycle-stage-slip (algorithm selection, hyperparameter search), plus one bare-label option |
| 1.9 | a feature store centralises reusable, versioned features across teams | A2 | E01 ×3 adjacent-service-capability (three sibling SageMaker capabilities) — **off-blueprint, see below** |
| 1.10 | thumbs-up/down signals as a reward make this reinforcement learning (b-1.1-12) | A1 | E05 ×3 paradigm-swap (supervised twice with different framings, unsupervised clustering) |
| 1.11 | tagging reviews into known sentiment classes is supervised learning (b-1.1-12) | A1 | E05 ×3 paradigm-swap (clustering, unsupervised, reinforcement) |

**Domain 1 observation.** This source reads Domain 1 as *vocabulary discrimination* — nine of
eleven items are "name the thing", and the correct answer is almost always separated from its
distractors by a single defining property. Two items sit outside the blueprint's altitude: 1.9
(SageMaker Feature Store is not on the in-scope service list, and feature engineering is a declared
out-of-scope job task) and 1.7 (backpropagation mechanics edges into the excluded "mathematical
analysis of models"). Neither should enter the inventory. Nothing here tests *when AI is the wrong
tool* (b-1.2-2) or *managed versus self-hosted serving* (b-1.3-3).

## Domain 2 · Fundamentals of GenAI (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | Amazon Q is a business assistant; Amazon Bedrock is the platform with the FM catalogue (b-2.3-1) — *multiple response* | A2 | D19 ×1 capability-inversion (the two roles reversed), E01 ×1 category-conflation (both framed as prepackaged apps), plus one bare-label option |
| 2.2 | Amazon S3 is the storage Amazon Bedrock reads datasets from (b-2.3-1) | A2 | E01 ×3 adjacent-service-capability (RDS, EBS, EFS — block/file/relational offered against object storage) |
| 2.3 | rising p95 latency at a stated request rate is a throughput problem: raise provisioned throughput and concurrency (b-2.3-4) | A5 | E04 ×1 customization-swap (fine-tune for a capacity symptom), D04 ×1 output-knob (cap max tokens), D06 ×1 wrong-layer (a network accelerator for a model-capacity limit) |
| 2.4 | generative models sample novel output from statistical patterns learned in training (b-2.1-5/6) | A1 | D19 ×2 false-mechanism-claim (fixed rules and templates, arbitrary randomness), plus one bare-label option |

**Domain 2 observation.** Under-served relative to its 24% weight, and the four items cluster on
service identity and one capacity-diagnosis. The whole v1.1 conceptual block — token pricing,
context engineering, agentic patterns, MCP, memory, orchestration — is absent. For the heaviest
half of the exam this source contributes almost nothing the blueprint does not already give.

## Domain 3 · Applications of Foundation Models (10 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | a model that misses fast-changing events needs fresh data at inference, not retraining (b-3.1-4) | A5 | E04 ×1 customization-swap (fine-tuning for a freshness problem), E03 ×1 stage-slip (indexing offered as the fix), plus one bare-label option — **keyed to an out-of-scope service, see below** |
| 3.2 | grounding answers in a large private document corpus is RAG (b-3.1-4) | A3 | E04 ×2 customization-swap (generic fine-tune, pretrained model with no external access), E03 ×1 stage-slip (retrieval with no generation step) |
| 3.3 | customizing an FM on private labelled data means a private fine-tuned copy, not training the base model (b-3.3-1) | A3 | E04 ×1 customization-swap (train the base FM directly), D01 ×1 over-engineering (build a model from scratch), D13 ×1 exposure-expansion (publicly shareable copy) |
| 3.4 | an assistant stays current by retrieving synced business content at answer time (b-3.1-4) | A3 | E03 ×1 stage-slip (answer from training data alone), D19 ×1 false-mechanism-claim (static rule-driven base described as current), D06 ×1 wrong-layer (guardrails offered instead of retrieval) |
| 3.5 | shortening repeated prompts by fine-tuning domain knowledge into the model reduces token spend (b-3.1-6, b-2.1-10) | A3 | D04 ×1 knob-twiddling (temperature for cost), E04 ×1 customization-swap (full continued pre-training), D05 ×1 symptom-treatment (cap the response length) |
| 3.6 | customization approaches ranked by implementation complexity: prompting, then RAG, then fine-tuning (b-3.1-6) | A3 | E04 ×3 ordering-permutation — the three wrong permutations of the same three techniques |
| 3.7 | an agent's value is orchestrating multi-step work through tool and API calls (b-3.1-7) | A1 | D19 ×1 false-capability-claim (agents train new FMs), E01 ×1 adjacent-service (a workflow service offered as the mechanism), E01 ×1 role-swap (model switching described as the agent benefit) |
| 3.8 | top-p limits candidates to the smallest set reaching a cumulative probability (b-3.1-3) | A1 | E05 ×3 sibling-parameter (temperature, top-k, epochs) |
| 3.9 | specialising an FM into a domain expert means continued pre-training plus domain-adaptation fine-tuning (b-3.3-1/2) — *multiple response* | A3 | E04 ×3 customization-swap (RLHF, supervised task training, incremental learning) |
| 3.10 | top-k sets how many highest-probability tokens are eligible (b-3.1-3) | A1 | E05 ×3 sibling-parameter (stop sequences, top-p's cumulative mass, temperature's randomness) |

**Domain 3 observation.** The strongest domain in this source and the one worth learning from: it
tests the *customization ladder* (prompting → RAG → fine-tuning → continued pre-training →
distillation) from four different angles, which is exactly how the blueprint frames objective 3.1.5.
Item 3.1 is keyed to Amazon Kinesis Data Streams, which is **not on the in-scope service list** —
the concept (freshness needs ingestion, not retraining) is sound and portable, the service is not;
the inventory should carry the concept and drop the service. Prompt-injection risk taxonomy
(b-3.2-5) and prompt versioning (b-3.2-6) are absent.

## Domain 4 · Guidelines for Responsible AI (6 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | open-source models are transparent because the code can be inspected and adapted (b-4.2-1/2) | A6 | D19 ×1 false-capability-claim (automatic per-prediction explanations), D11 ×1 wrong-criterion (commercial-use permission framed as transparency), plus one bare-label option |
| 4.2 | Amazon Bedrock Guardrails enforce safe, consistent, on-policy responses (b-4.1-2) | A7 | E01 ×3 adjacent-service-capability (Model Monitor, Polly, Rekognition) |
| 4.3 | uneven accuracy across organisational groups is found by subgroup evaluation (b-4.1-7) | A6 | E03 ×1 stage-slip (hyperparameter tuning as the remedy), plus two bare-label options |
| 4.4 | SageMaker Clarify flags dataset bias during data preparation (b-4.2-2) | A6 | E01 ×3 adjacent-service-capability (Model Monitor, Model Cards, Knowledge Bases) |
| 4.5 | preventing discriminatory outcomes is a bias detection and mitigation capability (b-4.1-1) | A6 | E03 ×2 stage-slip (compression, cross-validation), plus one bare-label option |
| 4.6 | overfitting versus underfitting, told apart by the training/validation pattern (b-4.1-6) — *counted in d1 above* | A1 | *see item 1.4* |

**Domain 4 observation.** Competent on tooling, thin on judgment. Every item resolves to a tool or a
technique; none tests the trade-offs the blueprint actually names — safety versus transparency
(b-4.2-3), sustainability in model selection (b-4.1-3), or human-centred design (b-4.2-4). This is
where an originally-authored bank can beat every practice source on the market, because the
trade-off items are the ones nobody writes.

## Domain 5 · Security, Compliance, and Governance (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | continuous best-practice evaluation with prioritised remediation is AWS Trusted Advisor (b-5.2-1) | A2 | E01 ×3 adjacent-service-capability (Macie, Well-Architected Tool, CloudTrail) |
| 5.2 | least-privilege access to confidential datasets is IAM roles with fine-grained policies (b-5.1-1) | A7 | D05 ×1 symptom-treatment (encrypt but leave access open), D07 ×1 detective-for-preventative (audit logging offered as access control), plus one bare-label option |
| 5.3 | reducing disclosure risk means encrypting with a managed key service *and* restricting access by policy (b-5.1-1/2) — *multiple response* | A7 | D11 ×1 wrong-criterion (change the datastore), D13 ×1 blast-radius-expansion (disable API logging), plus one bare-label option |
| 5.4 | the risk of an assistant surfacing proprietary internal method is an AI risk-management discipline (b-5.2-4) | A7 | D06 ×3 wrong-layer (identity, network segmentation, logging offered against a disclosure-risk question) |

**Domain 5 observation.** Four items for 14% of the exam, and all four are control-selection.
Neither the Generative AI Security Scoping Matrix (b-5.2-3) nor the whole v1.1 security expansion
(data leakage prevention, output filtering, toxicity, AI audit trails, hallucination grounding) is
touched. Domain 5 will be a substantially blueprint-only build.

## Distractor-pattern frequency across the 35 items

Counted from the tables above; total distractor slots ≈ 112 (31 single-choice × 3 + 4
multiple-response × ~3.3 wrong options).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` | 24 | **over-used** — 21% of every wrong option. Six items are *entirely* built from it |
| E05 `sibling-term-substitution` | 14 | the definitional workhorse; healthy at this level but produces flat, scenario-free items |
| E03 `lifecycle-stage-slip` | 11 | good pattern, under-exploited — most instances are incidental rather than designed |
| E02 `metric-task-mismatch` | 9 | concentrated in two items; the exam's own objectives (1.3.6, 3.4.2) support far more |
| E04 `customization-swap` | 7 | the most *diagnostic* pattern in the set — a candidate who confuses RAG with fine-tuning fails these and only these |
| D19 false-technical-claim | 8 | mostly absolutes ("always", "guaranteed", "no data needed") — cheap to eliminate |
| D06 wrong-layer | 6 | strong when the layers are genuinely adjacent (identity vs network vs logging) |
| D04 knob-twiddling | 3 | temperature/token-cap offered against non-randomness problems |
| D05 symptom-treatment | 3 | under-used given how well the exam's data-leakage material supports it |
| D01, D07, D11, D13, D14 | 2 each or fewer | present but incidental |
| D16 refuse-the-mandate | 0 | absent here (it is common in the excluded corpus) |
| *bare-label option* | 11 | **craft defect, not a pattern** — see below |

**Consequences for authoring.**

1. **Cap `E01 service-role-swap` at 0.30 of items** (proposed `validation.pattern_caps` entry). It
   is the natural distractor for this exam and cannot be banned, but at 21% of all wrong options in
   this source it produces a bank that tests service trivia rather than judgment. A cap forces
   scenario reasoning back into the middle of the paper.
2. **Raise `E04 customization-swap`** — it is the highest-signal pattern available (it separates
   candidates who understand the customization ladder from those who memorised its names), and it
   is under-used at 7 instances. Target it as the primary wrong-option family across d3.
3. **Raise `E02 metric-task-mismatch`** in d1 and d3 — objectives 1.3.6 and 3.4.2 hand you the
   metric vocabulary directly, and a wrong-metric distractor is never eliminable by surface reading.
4. **Keep `E05 sibling-term-substitution` sparse outside definitional items.** It is what makes a
   bank feel like flashcards; useful for the 1.1/2.1 vocabulary spine, corrosive elsewhere.
5. **Ban the bare-label option.** Eleven wrong options in this set are a bare service or feature
   name sitting among full-sentence options — an instant tell, since the option shape gives away
   that it was padding. Mockka's validator should treat conspicuous option-length asymmetry as a
   finding; at minimum, authoring must keep option shapes parallel within an item.
6. **Ban near-duplicate options.** One item offers two options expressing the same idea in different
   words, only one keyed — unanswerable as written. The near-duplicate check that exists across
   *items* (`near_duplicate_jaccard`) should be applied *within* an item's option set too.
7. **Do not inherit the domain mix** — build to blueprint weights (d2 and d5 need roughly double
   this source's share).

## Concepts this source tests that other sources do not spell out

- threshold-independent versus single-operating-point classification metrics (AUC-ROC as a
  comparison tool) — note the guide's v1.1 objective 1.3.6 dropped AUC in favour of
  precision/recall, so this is **dated**, carry the *concept* not the metric
- provisioned throughput and concurrency as the response to a load-driven latency regression
  (b-2.3-4) — the only cost/performance-lever item in any accessible source
- customization approaches ranked by *implementation complexity* rather than by capability
  (b-3.1-6) — and the demonstration that an ordering concept can be delivered as single choice
- subgroup evaluation as the discovery mechanism for uneven fairness (b-4.1-7)
- domain-adaptation fine-tuning distinguished from continued pre-training (b-3.3-2)
- edge and offline operating constraints as the reason to prefer a small/traditional model
  (b-1.2-6)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the entire v1.1 agentic and
context-engineering block, prompt-risk taxonomy beyond injection, prompt versioning, LLM-as-a-judge,
business-alignment metrics, the Generative AI Security Scoping Matrix, and the v1.1 security
expansion — none of which any accessible practice source reaches, and all of which come from
[`source-aif-blueprint.md`](source-aif-blueprint.md) alone.
