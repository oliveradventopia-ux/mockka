# Artefact A · `akashp18/ai901-exam-simulator` distillation

**What this is.** `akashp18`'s free, MIT-licensed AI-901 exam simulator contains **196 questions**
(seeded from `database.py`; the README advertises 210) written against the public exam blueprint.
This document records, for each item, **the concept it tests** and **how each wrong option is
constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question
"what does this source's author believe is tested?" — an independent reading of the blueprint.
For AI-901 it also answers a second, unusually load-bearing question: **what does the freely
available community material get wrong about this exam?**

**What it is not.** It is not a copy of the source material. No question text, option text, or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `akashp-ai901-simulator` in [`sources.md`](sources.md). MIT licence; used
> classification-only regardless. Credited in the exam README.

**Notation.** `b-…` ids refer to [Artefact B · blueprint](source-ms-ai901-blueprint.md); `c-…` ids
to [Artefact B · curriculum](source-ms-ai901-curriculum.md). Pattern codes are defined at the foot
of this document (§pattern registry) — `D…` from `methodology/distractor-patterns.json`, `E…` the
Microsoft-vendor extension registry first defined for AI-900 and **extended here** for the
implementation half. The template's *Theme* column is replaced by a **Blueprint** column: themes
are declared at S3 in `authoring.json` and do not exist yet for this exam, whereas blueprint
traceability is what S3 actually needs from this document.

---

## Provenance and confidence — read this before using the numbers

This source **passed the dump screen** (evidence in [`sources.md`](sources.md) §Dump screen), and it
is almost certainly **LLM-generated in a single pass**: the repository was created *and* fully
pushed on 2026-06-21, every item carries machine-uniform metadata fields, and the prose carries
generated-item tells throughout. That is not a legality problem — a generated bank is originally
authored, not recalled — but it changes what the source is *evidence of*.

Two consequences, both of which S3 must carry forward:

1. **Weak convergence.** A generated bank written against the same blueprint this project already
   holds is a *correlated* reading, not an independent one. Where this source agrees with the
   blueprint, that agreement is close to zero new information. Its value is concentrated in the
   places where it **disagrees** — those are informative, and they are catalogued below.
2. **Confidence: moderate for calibration of the concepts half, low for the implementation half.**
   The reason is stated in the census immediately below.

---

## Format mix observed

Counted across all 196 items. The source's own five item types are reported first, then mapped onto
Mockka's three.

| Group (this document's blueprint mapping) | Single choice | Multi-choice | True/false matrix | Dropdown-hotspot | Drag-drop | Total |
|---|---|---|---|---|---|---|
| d1 · Responsible AI (b-1.1) | 20 | 2 | 0 | 1 | 1 | **24** |
| d1 · Model components & configuration (b-1.2) | 15 | 1 | 3 | 0 | 2 | **21** |
| d1 · Workload identification (b-1.3) | 7 | 0 | 0 | 0 | 0 | **7** |
| d2 · GenAI apps & agents (b-2.1) | 22 | 0 | 2 | 1 | 1 | **26** |
| d2 · Text & speech (b-2.2) | 29 | 1 | 3 | 4 | 1 | **38** |
| d2 · Vision & image generation (b-2.3) | 9 | 1 | 2 | 0 | 1 | **13** |
| d2 · Information extraction (b-2.4) | 14 | 0 | 1 | 2 | 1 | **18** |
| ⚑ RAG / grounding (**no blueprint bullet**) | 12 | 0 | 2 | 3 | 1 | **18** |
| ⚑ Off-blueprint (see census) | 30 | 0 | 0 | 0 | 1 | **31** |
| **Total** | **158** | **5** | **13** | **11** | **9** | **196** |

**Asymmetries worth preserving or correcting, stated explicitly:**

- **81% single choice.** Every other form is a garnish. Mockka's own default should not copy that
  ratio blindly, because the vendor's real repertoire is far wider — but it is corroborating
  evidence that multiple choice dominates a fundamentals paper.
- **Option counts are rigid:** 160 of the 163 option-bearing items have exactly **4 options**; the
  three exceptions are 5-option multi-selects. Mockka's `single_choice` at 4 options is therefore
  the right default for this exam, and `multiple_response` at 5 is a deliberate, disclosed stretch.
- **Multi-select is almost absent** (5 items, 2.6%) and is **all-or-nothing** in this source. The
  real exam awards a point per component. Neither this source nor Mockka rehearses partial credit.
- **The 11 dropdown-hotspot items are mostly fill-in-the-blank over a Python snippet.** That is the
  source's proxy for the vendor's *hot area* / *active screen* forms, and it is the one place a
  practice source has attempted the implementation-half interaction. Mockka cannot render it at all.
- **Difficulty skews easy/medium** (62 easy / 93 medium / 41 hard) and — a real finding — the *hard*
  items cluster in the areas the source understands least: 6 of 18 RAG items and 5 of 18 extraction
  items are `hard`, while the workload-identification group has **no hard items at all**.

### The Mockka-format translation

| Source form | Count | Mockka form | Note |
|---|---|---|---|
| single-choice | 158 | `single_choice` | direct |
| multi-choice | 5 | `multiple_response` | source is 4–5 options selecting 2–3 |
| drag-drop | 9 | `scenario_matching` | source's matchings are 3-pair; Mockka requires option reuse, which the source does not do |
| true-false-matrix | 13 | *(none)* | a 3-statement yes/no block; closest Mockka analogue is `multiple_response`, but the semantics differ (an unselected statement means "No", not "unanswered") |
| dropdown-hotspot | 11 | *(none)* | fill-in-the-blank over code or a UI; not renderable |

**24 of 196 items (12%) are in forms Mockka cannot express.** That is the empirical ceiling on how
faithfully this exam's format profile can be reproduced, and it should be quoted in
`format_coverage`.

---

## The blueprint census — the headline finding

Every item was re-mapped onto the AI-901 objective list. The source's own two-way label
(`Objective 1` / `Objective 2`) was **not** trusted, because it mislabels: it files classical
machine-learning items under Objective 1 and Azure Machine Learning endpoint items under Objective 2,
neither of which exists in the AI-901 blueprint.

| Bucket | Items | Share |
|---|---|---|
| Maps to a stated AI-901 objective bullet | **147** | 75% |
| ⚑ RAG / grounding — taught by the official curriculum, **named by no objective bullet** | **18** | 9% |
| ⚑ Off-blueprint — no counterpart in the blueprint **or** the curriculum | **31** | 16% |

And, within the 147 that do map, a second problem: **the vocabulary is a generation behind.**
Counted over the full source text:

| Term | Occurrences | Status |
|---|---|---|
| *Azure AI Foundry* | 41 | superseded name |
| **Microsoft Foundry** | **0** | the blueprint's name for the platform in its own area title |
| **Foundry SDK** | **0** | named in b-2.1-3 |
| **Foundry Tools** | **0** | named in b-2.2-3 and b-2.4-1 |
| **Foundry IQ** | **0** | a whole curriculum module |
| *Azure AI Document Intelligence* | 95 | superseded by Content Understanding for b-2.4 |
| **Content Understanding** | **2** | named in four consecutive objective bullets |
| *Prompt Flow* | 20 | named nowhere in the blueprint |
| *Spatial Analysis* | 34 | named nowhere in the blueprint |

**Reading it plainly:** the source is a competent bank for the exam AI-901 *replaced*. Its
concepts half is usable calibration; its implementation half tests the pre-Foundry Azure AI service
catalogue and therefore mostly answers a question the blueprint no longer asks. Every place it is
strongest — vision service selection, speech feature depth, Document Intelligence model choice — is
a place the blueprint moved on from. **This is the source's most valuable contribution: it is a
precise map of how a candidate studying from community material will be mis-prepared, and every row
of that map is a diagnostic item seed.**

### ⚑ Off-blueprint census (31 items) — recorded item by item

| Item | What it tests | Why it is off-blueprint |
|---|---|---|
| Q6 | classification vs regression vs clustering, matched to business goals | classical ML — no AI-901 objective; was AI-900 d2 |
| Q126 | supervised classification vs unsupervised clustering, from labelled data | same |
| Q165 | unsupervised learning defined | same |
| Q166 | regression as the task for a numeric forecast | same |
| Q169 | clustering as the task for unlabelled segmentation | same |
| Q172 | multiclass vs binary classification | same |
| Q174 | *features* as the term for model inputs | same |
| Q177 | overfitting from a train/test accuracy gap | same |
| Q170 | accuracy as a misleading metric on imbalanced data | ML evaluation metrics — no AI-901 objective |
| Q171 | recall as the metric to maximise when false negatives are costly | same |
| Q175 | interpreting R² = 0.92 | same |
| Q168 | MAE as the metric to minimise for average deviation | same |
| Q167 | ordering an AutoML pipeline | AutoML — no AI-901 objective |
| Q173 | the role of a bearer token against a deployed scoring endpoint | Azure ML managed-endpoint framing; b-2.1 uses Foundry endpoints |
| Q176 | real-time endpoint vs batch inference | adjacent to b-1.2-3 (deployment options) but framed in Azure ML terms the blueprint does not use — **the closest call in this table** |
| Q34, Q82, Q179, Q182 | Spatial Analysis: zone intrusion, dwell time, line crossing, anonymity guarantees | *Spatial Analysis* is named nowhere in the blueprint or curriculum |
| Q66, Q67, Q75, Q139 | Azure AI Foundry hub vs project; where network policy and shared connections belong | the hub/project resource model is absent from the AI-901 objective list and from the current curriculum |
| Q106, Q146 | Prompt Flow as the visual multi-step orchestrator | *Prompt Flow* named nowhere in the blueprint |
| Q72, Q147 | Provisioned Throughput (PTU) vs Standard pay-as-you-go | Azure OpenAI pricing tiers; b-1.2-3 says "deployment options", not pricing SKUs |
| Q74 | tuning content-filter severity thresholds low/medium/high | configuration spec-trivia beneath the blueprint's level |
| Q149 | that disabling default content filters requires a Microsoft approval request | vendor policy trivia |
| Q89 | that the Face API returns a pixel bounding box | API response-shape trivia |
| Q164 | diagnosing an HTTP 403 from an Azure AI client | operations trivia; no objective covers HTTP status debugging |

**Consequence.** A bank that spends 16% of its items on material with no objective bullet will
mis-shape a candidate's preparation more than it helps. This census is the concrete reason the
AI-901 build cannot lean on community calibration for its item mix, and it should be cited in the
S3 master inventory when the off-blueprint concepts are dropped.

---

## d1 · Responsible AI (24 items) — b-1.1

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q1 | a hiring screen that inherits a demographic skew from its training data is a fairness failure | b-1.1-1 | E04 ×3 principle-substitution (safety, transparency, accountability) |
| Q10 | adversarial and extreme-condition testing is how reliability and safety is discharged | b-1.1-2 | E04 ×3 principle-substitution |
| Q17 | training across the full range of users so accuracy is uniform is inclusiveness, not fairness | b-1.1-4 | E04 ×3 — **the fairness option is the load-bearing distractor**; the two principles genuinely overlap here |
| Q20 | accountability is about who remains answerable, not about what the system explains | b-1.1-6 | E04 ×3 |
| Q26 | publishing model choice, data provenance and known limits is transparency | b-1.1-5 | E04 ×3 |
| Q30 | leaking confidential records through unencrypted cache is a privacy-and-security failure | b-1.1-3 | E04 ×3 |
| Q39 | deepfakes and synthetic disinformation are the named societal harm of multimodal generation | b-1.1-2, b-1.1-5 | D19 ×3 false-technical-claim (storage efficiency, electricity consumption, firewall removal) — **crude**; the wrong options are not plausible at all |
| Q41 | a systematic performance gap traced to historical data is algorithmic bias | b-1.1-1 | E07 ×2 sibling-term-substitution (*high transparency*, *perfect fairness optimization* — real words, wrong referent), D19 ×1 |
| Q45 | telling a rejected applicant which factors drove the decision serves transparency **and** accountability together | b-1.1-5 + b-1.1-6 | E04 ×3 principle-pair substitution — **the best-constructed item in this group**: the pairing form forces genuine discrimination |
| Q51 | matching three business actions to the principles they uphold | b-1.1-1/3/2 | *(drag-drop; distractors are the unused principle set)* E04 by construction |
| Q52 | selecting the principle for each of two scenarios from a dropdown | b-1.1-1, b-1.1-5 | E04 by construction |
| Q53 | one-line definition of accountability, distinguished from encryption, accessibility and explainability | b-1.1-6 | E04 ×3 (each wrong option is a *different principle's* action, not a wrong definition — the strong form) |
| Q54 | defending against adversarial prompts that try to extract private data is privacy and security | b-1.1-3 | E04 ×3 |
| Q55 | a low-confidence-route-to-human fallback rule serves reliability and safety | b-1.1-2 | E04 ×3 |
| Q117 | checking approval rates across demographic groups is a fairness check | b-1.1-1 | E04 ×3 |
| Q127 | documenting which input factors drive a risk score is transparency | b-1.1-5 | E04 ×3 |
| Q141 | publishing fraud-detection logic would satisfy transparency while defeating security — the principles **conflict** | b-1.1-5 vs b-1.1-3 | E04 ×3 in *paired* form. **The single most valuable item in the source**: the only one that treats principles as competing rather than as labels |
| Q157 | feature-attribution reporting addresses transparency **and** accountability (select two) | b-1.1-5 + b-1.1-6 | E04 ×3 (multi-response; the three unchosen principles) |
| Q158 | a diagnostic tool trained on one region's population failing elsewhere is a fairness omission | b-1.1-1 | E04 ×3 — near-duplicate of Q1's concept in a different vertical |
| Q159 | screen-reader and text-to-speech affordances are how inclusiveness is discharged in a UI | b-1.1-4 | E04 ×2, E08 ×1 spec-trivia (a 30-day retention limit) |
| Q161 | degrading unsafely when telemetry drops is a reliability-and-safety failure | b-1.1-2 | E04 ×3 |
| Q162 | scanning personal correspondence without consent is a privacy failure, not a transparency one | b-1.1-3 | E04 ×3 |
| Q163 | a policy requiring human-readable denial reasons satisfies transparency | b-1.1-5 | E04 ×3 |
| Q5 | which two operational guidelines actually discharge transparency (select two) | b-1.1-5 | E04 ×2 — the wrong options are a *safety* fallback and a *privacy* control, i.e. real controls serving neighbouring principles. **The strong distractor form** |

**Domain observation.** 24 items, 20 of them the same shape: a one-paragraph scenario, four
principle names, pick one. `E04 principle-substitution` accounts for **68 of the 72 wrong options in
this group** — the most concentrated single-pattern dependence anywhere in the source. Three items
break the mould (Q5, Q45, Q141) and all three are markedly better, because they force a candidate to
reason about what a principle *obliges* rather than what it is *called*. That is also the form the
AI-901 blueprint's phrasing (*"describe considerations for…"*) actually asks for. The
source over-serves this group (24 items ≈ 12% of the bank for one of three objective groups inside a
40–45% area) and under-serves the form the exam wants.

---

## d1 · Model components and configuration (21 items) — b-1.2

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q4 | a confidently fabricated clinical detail is hallucination, and grounding is the lower-complexity remedy vs retraining | b-1.2-1 | E07 ×1 (*data drift*), E07 ×1 (*model variance*), E07 ×1 (*underfitting*) — each pairs a real-but-wrong failure name with a real-but-wrong remedy. **Compound-option form**: two decisions in one option, which doubles the discrimination but also lets a candidate solve it from half the option |
| Q12 | three-statement yes/no block on foundation-model behaviour and prompt parameters | b-1.2-1, b-1.2-4 | *(matrix; no discrete options)* |
| Q14 | which capabilities are genuinely generative (code, image synthesis, summarisation) vs data-plumbing tasks | b-1.2-2 | E03 ×1 technique-paradigm-swap (clustering over relational partitions), D19 ×1 false-technical-claim (clearing routing hardware) |
| Q22 | raising temperature increases output variation — the parameter→behaviour direction | b-1.2-4 | D04 ×1 knob-twiddling (temperature 0.0 for creativity — the correct knob, wrong direction), E06 ×1 mode-swap (disable system prompts), E08 ×1 (token cap of 5) |
| Q24 | a base LLM predicts the next token from pre-training; it does not store records or self-update | b-1.2-1 | D19 ×3 false-technical-claim (weights as a credit-card store; live internet scraping into weights; hardware telemetry) — **the wrong options here are the source's best**, because each is a specific false belief a beginner actually holds |
| Q35 | *foundation model* as the term for a large pre-trained transformer used as a starting point | b-1.2-1 | E03 ×3 technique-paradigm-swap (SVM, linear regression, decision forest) |
| Q43 | fine-tuning defined as adjusting weights on a domain dataset | b-1.2-2 | E06 ×2 mode-swap (zero-shot prompting, RAG indexing offered as the same thing), D19 ×1 |
| Q61 | code assistance requires a model pre-trained on source code — a capability-driven model choice | b-1.2-2 | E03 ×3 (regression network, segmentation network, clustering network) |
| Q62 | a menu-reading voice assistant needs multimodal vision-to-text **plus** STT **plus** TTS | b-1.2-2 | E05 ×1 granularity-slip (pure OCR + anomaly detection), E02 ×2 workload-type-swap |
| Q63 | three-statement yes/no block on what model classes can and cannot do | b-1.2-2 | *(matrix)* |
| Q64 | matching three customer requirements to translation / image generation / sentiment classification | b-1.2-2 | *(drag-drop)* E02 by construction |
| Q65 | a language model cannot forecast the future because it is a statistical text generator | b-1.2-1 | D19 ×1, D04 ×1 knob-twiddling (temperature 0.0 as the explanation), E07 ×1 |
| Q68 | picking a multimodal chat model when the requirement spans text, code and image reading | b-1.2-2 | E01 ×3 model-role-swap (embeddings, image generation, speech) — clean and well-made |
| Q70 | fine-tuning as the adaptation route for a specialised vocabulary | b-1.2-2 | E06 ×2 (RAG, zero-shot), D04 ×1 (raise temperature) |
| Q73 | the model catalog as the place to compare open-weight and hosted models | b-1.2-2 | E09 ×3 platform-surface-swap (Prompt Flow, hub connections, content filters) — **⚑ vocabulary-stale**: the surfaces named are the previous platform generation |
| Q76 | three-statement yes/no block on Azure OpenAI service behaviour | b-1.2-3 | *(matrix)* ⚑ stale |
| Q77 | matching model families to primary capability (embedding / multimodal chat / speech) | b-1.2-2 | *(drag-drop)* E01 by construction |
| Q142 | data that changes every minute demands retrieval at query time, not repeated fine-tuning | b-1.2-2 | E06 ×1 mode-swap (fine-tune every minute — the load-bearing distractor), E03 ×1 (regression forecast), D04 ×1 |
| Q192 | a fluent, specific, unsupported claim is a hallucination | b-1.2-1 | E07 ×3 sibling-term-substitution (truncation, overfitting variance, context-window overflow) — all real terms, all wrong referents. Strong |
| Q194 | tokenization as the step that turns text into units a model can process | b-1.2-1 | E02 ×2 workload-type-swap (OCR bounding boxes, video downsampling), D19 ×1 (password encryption) |
| Q196 | exceeding the context window as the reason a very long prompt is rejected | b-1.2-1 | E07 ×3 (temperature threshold, bias metric, tool-calling capability) |

**Domain observation.** The strongest group in the source, and the one most reusable for AI-901 —
because generative-model mechanics did **not** get renamed in April 2026. `E07
sibling-term-substitution` is the workhorse here (real terminology, wrong referent) and it is well
executed: Q24, Q192 and Q196 all build every wrong option from a term the candidate has definitely
met. The weakness is b-1.2-3/b-1.2-4: the source answers "deployment options and configuration
parameters" with Azure OpenAI pricing tiers and content-filter severity dials, which is a level
below the objective and in superseded vocabulary.

---

## d1 · Workload identification (7 items) — b-1.3

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q49 | delineating regions of interest in an aerial image is a computer-vision workload | b-1.3-1, b-1.3-9 | E02 ×3 workload-type-swap (fraud detection, translation, clustering) |
| Q56 | tagging the objects present in an uploaded image is image analysis | b-1.3-9 | E02 ×3 |
| Q57 | speak-in-one-language, hear-another is speech translation, not text translation | b-1.3-7 | E02 ×3 — *sentiment analysis*, *OCR*, *object detection* are too distant to be load-bearing |
| Q58 | condensing a long document into an action list is summarization | b-1.3-6 | E02 ×2, E03 ×1 |
| Q59 | classifying posts as positive/neutral/negative is sentiment analysis | b-1.3-5 | E05 ×1 granularity-slip (NER surfaces entities, not polarity), E02 ×2 |
| Q60 | counting people and estimating attributes without identifying them is face **analysis**, not recognition | b-1.3-9 | E05 ×2 granularity-slip (OCR; object-detection boxes), E01 ×1 |
| Q116 | reading characters off a plate photo is OCR | b-1.3-11, b-1.3-12 | E02 ×2, E05 ×1 |

**Domain observation.** Only **7 items — 3.6% of the bank — for the objective group that names the
widest concept surface in skill area 1** (b-1.3 has 14 constituent concepts). And every one is
`easy` or `medium`; there are no hard items here at all. The source treats workload identification
as trivia because, in its mental model, "which workload?" collapses into "which Azure service?" —
which is why 38 items sit in the text/speech group instead. For AI-901, where b-1.3 explicitly names
*generative and agentic AI*, *information extraction* and four extraction modalities as workload
classes, this group is **the largest coverage hole in the source**.

---

## d2 · Generative AI apps and agents (26 items) — b-2.1

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q7 | platform-level content filtering is the low-effort way to block unsafe generation | b-1.2-4 | E09 ×1 platform-surface-swap (RBAC), D01 ×1 over-engineering (hand-rolled Python filter), E06 ×1 (system-prompt constraints as a substitute for a filter) ⚑ stale name |
| Q8 | recognising the required arguments of a chat-completion call | b-2.1-3 | *(hotspot)* ⚑ stale SDK |
| Q19 | a captions-plus-diagram-plus-Q&A assistant needs speech + vision + generation composed on one platform | b-2.1-6 | E05 ×1 granularity-slip (two services "only"), E01 ×1, D19 ×1 (log analytics "without AI models") |
| Q28 | supplying worked examples inside the prompt is few-shot | b-2.1-1 | E06 ×1 mode-swap (fine-tuning as the same thing — load-bearing), E07 ×2 |
| Q29 | the unified platform is where frontier models are deployed | b-2.1-2 | E01 ×3 service-role-swap (Data Factory, Cosmos DB, DevOps) — too distant to discriminate ⚑ stale name |
| Q32 | the system prompt sets persona, boundaries and standing rules | b-2.1-1 | D19 ×3 false-technical-claim (cost evaluation, compression, firewall) — weak options |
| Q33 | yes/no block on what distinguishes an agent from a conversational bot | b-2.1-4 | *(matrix)* |
| Q37 | matching zero-shot / chain-of-thought / prompt-injection to their definitions | b-2.1-1 | *(drag-drop)* E07 by construction |
| Q42 | yes/no block on how content filtering behaves on input and output | b-1.2-4 | *(matrix)* |
| Q47 | instructing step-by-step reasoning is chain-of-thought prompting | b-2.1-1 | E07 ×3 |
| Q50 | an assistant that consults a managed knowledge source and acts is an orchestrated agent with tools | b-2.1-4 | E11 ×1 agentic-tier-slip (static prompt matrix), E02 ×2 |
| Q69 | blocking violent or self-harm input before it reaches the model is content filtering | b-1.2-4 | E09 ×3 platform-surface-swap (Prompt Flow, system prompts, fine-tuning) ⚑ stale |
| Q71 | a custom blocklist is the right instrument for blocking named strings | b-1.2-4 | D04 ×1 knob-twiddling (raise the hate threshold), D01 ×1 over-engineering (ten-page system prompt), D04 ×1 ⚑ stale |
| Q78 | a no-code portal playground is where a non-developer tests completions | b-2.1-2 | E09 ×3 platform-surface-swap (resource manager, CLI, storage explorer) ⚑ stale name |
| Q104 | a bot that only returns matched FAQ text is a stateless chatbot, not an agent | b-2.1-4 | E11 ×1 agentic-tier-slip (**the key discrimination**), E02 ×2 |
| Q109 | an assistant that calls APIs and takes actions is an agent with tool calling | b-2.1-4/5 | E11 ×1 agentic-tier-slip (stateless chatbot), E02 ×2 |
| Q123 | a standing behavioural instruction is a system prompt | b-2.1-1 | E07 ×2 (user prompt, few-shot examples), D04 ×1 |
| Q125 | portal playgrounds are the browser route to testing chat completions | b-2.1-2 | E09 ×3 ⚑ stale name; near-duplicate of Q78 |
| Q131 | behavioural instructions belong in the system message, not the user turn | b-2.1-1 | E07 ×1, D04 ×1 (temperature), E09 ×1 |
| Q133 | fine-tuning requires a prepared training dataset before anything else | b-1.2-2 | D19 ×2 (disable filters; buy a GPU), E09 ×1 |
| Q143 | a custom blocklist blocks named competitor terms | b-1.2-4 | D04 ×2 (threshold; temperature), E12 ×1 ⚑ near-duplicate of Q71 |
| Q160 | authenticating a client with a raw key requires the key-credential wrapper | b-2.1-3 | E10 ×3 sdk-symbol-swap (three real-looking credential classes) ⚑ stale SDK |
| Q190 | lowering temperature to zero makes output deterministic and consistent | b-1.2-4 | D04 ×2 (raise temperature; top-p), E06 ×1 (remove the system message) |
| Q191 | standing behavioural instructions go in the `system` role | b-2.1-1 | E07 ×3 (user, assistant, tool — all real roles) — **clean**; near-duplicate of Q131 |
| Q193 | classifying which content-safety category caught a discriminatory prompt | b-1.2-4 | E07 ×3 (the other three categories) |
| Q195 | a solution that loops through tool calls until a goal is met is a single-agent system | b-2.1-4 | E03 ×2, E11 ×1 |

**Domain observation.** The prompt-craft half (b-2.1-1) is genuinely good — and it is
version-independent, so it transfers. The agent tiering (chatbot → agent-with-tools →
orchestrated-agent) is the source's best original contribution: `E11 agentic-tier-slip` is a
pattern worth adopting outright. Everything else is **⚑ stale**: the platform is named *Azure AI
Foundry*, the surfaces are hub/project/Prompt Flow, the SDK is the Azure OpenAI Python client, and
`Foundry SDK` — which b-2.1-3 and b-2.1-5 explicitly require — appears **zero times**. There is also
visible internal duplication (Q78/Q125, Q131/Q191, Q71/Q143), which is a generated-bank artefact and
a warning for Mockka's own near-duplicate check.

---

## d2 · Text and speech (38 items) — b-2.2

The largest group in the source, and the one where "which capability?" is most often flattened into
"which Azure service?".

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q3 | routing on message polarity is a text-analysis job | b-2.2-1, b-1.3-5 | E01 ×3 service-role-swap ⚑ stale |
| Q13 | a voice IVR needs both speech directions from one capability | b-2.2-3 | E01 ×3 |
| Q18 | yes/no block on speech workload behaviour | b-2.2-3 | *(matrix)* |
| Q25 | routing posts by learned category needs a **custom** text classifier, not a prebuilt entity model | b-2.2-1 | E05 ×2 granularity-slip (NER, language detection), E06 ×1 |
| Q31 | which two capabilities belong to text analysis rather than speech (select two) | b-1.3-3/6 | E02 ×2 workload-type-swap (transcription, synthesis) — clean |
| Q38 | flagging aggression while suppressing personal data needs sentiment **and** PII detection together | b-2.2-1 | E05 ×2, E01 ×1 — good compound requirement |
| Q44 | converting recorded calls to text is speech recognition | b-2.2-3, b-1.3-7 | E01 ×3 |
| Q46 | yes/no block on NLP workload claims | b-2.2-1 | *(matrix)* |
| Q91 | translating static web copy is a text-translation job | b-2.2-1 | E01 ×3 |
| Q92 | dictation to text is speech recognition | b-1.3-7 | E02 ×3 |
| Q93 | spoken navigation prompts are speech synthesis | b-1.3-8 | E02 ×3 |
| Q94 | mapping an utterance to an intent plus slots is conversational understanding | b-2.2-1 | E05 ×2 (NER, sentiment), E02 ×1 ⚑ stale (CLU) |
| Q95 | redacting card numbers and contact details is PII detection | b-2.2-1 | E05 ×3 |
| Q96 | reproducing a specific consented voice is custom neural voice | b-1.3-8 | E05 ×2, E01 ×1 — **feature depth beyond the blueprint's level** |
| Q97 | a prebuilt summarizer beats prompting a large model when cost and latency dominate | b-2.2-1 | E06 ×1 mode-swap (prompt a frontier model), E01 ×2. **One of the source's best items** — a genuine build-vs-buy trade-off |
| Q98 | labelling who spoke when is diarization | b-1.3-7 | E05 ×1, E08 ×2 spec-trivia (SSML, pronunciation assessment) |
| Q99 | a voice-analytics pipeline is recognition **then** text analysis, in order | b-2.2-1/3 | *(hotspot)* E12 ×1 pipeline-stage-swap by construction |
| Q100 | yes/no block on text and speech capability claims | b-2.2-1/3 | *(matrix)* |
| Q103 | identifying which client library a speech configuration call belongs to | b-2.2-3 | E10 ×3 sdk-symbol-swap ⚑ stale SDK |
| Q107 | identifying the service behind a sentiment-analysis client call | b-2.2-1 | E10 ×3 ⚑ stale SDK |
| Q119 | tagging organisation mentions is entity detection | b-1.3-4 | E05 ×3 |
| Q120 | producing subtitles from audio is speech recognition | b-1.3-7 | E02 ×3 |
| Q124 | translating documents between languages | b-2.2-1 | E01 ×3 — near-duplicate of Q91 |
| Q129 | extracting standard dates and amounts without training is prebuilt entity detection | b-1.3-4 | E05 ×2, E06 ×1 (custom classification when prebuilt suffices) |
| Q130 | controlling emphasis, pause and pitch needs the synthesis markup language | b-1.3-8 | E08 ×3 spec-trivia (HTML5, Markdown, XSD) — **the weakest distractor set in the group** |
| Q135 | in an utterance, a place name is an entity, not an intent | b-2.2-1 | E07 ×3 (intent, utterance, prompt — the correct vocabulary family) ⚑ stale (CLU) |
| Q136 | choosing a prebuilt sentiment capability vs a general model per pipeline stage | b-2.2-1 | *(hotspot)* E06 by construction — good trade-off framing |
| Q137 | a voice-ticket pipeline needs recognition then PII handling | b-2.2-1/3 | *(hotspot)* E12 |
| Q140 | recognising the role of a recogniser object in a speech client | b-2.2-3 | E02 ×3 ⚑ stale SDK |
| Q151 | matching diarization / markup / custom voice to business goals | b-1.3-7/8 | *(drag-drop)* E05 by construction |
| Q154 | supplying a file source instead of the default microphone | b-2.2-3 | *(hotspot)* E10 ⚑ stale SDK |
| Q156 | recalling the property that carries per-label confidence on a sentiment result | b-2.2-1 | E10 ×3 sdk-symbol-swap — **pure API spec trivia; E08-class and off-blueprint in substance** |
| Q184 | extracting the main talking points is keyword extraction | b-1.3-3 | E05 ×3 — clean four-way discrimination inside one capability family |
| Q185 | masking card numbers and addresses before export is PII detection | b-2.2-1 | E05 ×3 — near-duplicate of Q95 |
| Q186 | narrating long scripts with natural voices is speech synthesis | b-1.3-8 | E02 ×3 |
| Q187 | live cross-language transcript from speech is speech translation | b-1.3-7 | E05 ×1, E02 ×2 |
| Q188 | the client expects a sequence of documents, not a bare string | b-2.2-1 | E10 ×3 ⚑ stale SDK; API-shape trivia |
| Q189 | attributing sentiment to individual aspects rather than the whole document is opinion mining | b-1.3-5 | E05 ×3 — **strong granularity item**: the document-level score is the plausible wrong answer |

**Domain observation.** 38 items, 19% of the bank, for one objective group. `E05 granularity-slip`
is the group's real workhorse and it is well made — Q189, Q184, Q129, Q60 all turn on *right
modality, wrong output granularity*, which is exactly the discrimination b-1.3-2…6 asks for and the
most transferable craft in the entire source. Against that: 8 items are SDK-symbol or API-shape
trivia (Q103, Q107, Q140, Q154, Q156, Q188 plus two hotspots), the vocabulary is uniformly the
pre-Foundry service catalogue, and **not one item** touches b-2.2-2 — responding to spoken prompts
through a deployed multimodal model — which is a third of what this objective group now asks.

---

## d2 · Vision and image generation (13 items) — b-2.3

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q15 | locating landmarks, detecting subjects and describing an image are all vision-analysis jobs | b-2.3-1 | E01 ×3 ⚑ stale |
| Q27 | yes/no block on vision capability claims | b-2.3-1 | *(matrix)* |
| Q48 | detecting a domain-specific object class from your own examples requires a custom-trained detector | b-2.3-3 | E01 ×3 ⚑ stale (custom-model training is not in the AI-901 objective list) |
| Q81 | tagging subjects and screening for mature content is image analysis | b-2.3-1 | E01 ×3 |
| Q86 | one pipeline needing detection, character reading and label recognition needs three distinct vision tasks | b-2.3-1/3 | E05 ×1 (one model for all three), E01 ×1, E02 ×1 — good compound item |
| Q87 | yes/no block spanning vision and document capabilities | b-2.3-1, b-2.4-1 | *(matrix)* |
| Q88 | matching challenges to reading / identity-document / spatial capabilities | b-2.3-1 | *(drag-drop)* ⚑ one arm is off-blueprint (spatial) |
| Q118 | detecting facial attributes without identification | b-2.3-1 | E05 ×2, E02 ×1 |
| Q121 | producing an original illustration from a description needs an image-generation model | b-2.3-2 | E01 ×3 model-role-swap (chat, embedding, speech) — clean |
| Q128 | distinguishing your own product variants from photos needs a custom classifier | b-2.3-3 | E05 ×1, E01 ×1, E06 ×1 (prompt a general model — **the AI-901-era answer, marked wrong here**) ⚑ |
| Q178 | locating and counting instances with boxes is object detection, not classification | b-2.3-1 | E05 ×3 granularity-slip — **textbook**: whole-image label vs per-instance boxes |
| Q181 | inferring the task from a response carrying per-item boxes | b-2.3-1 | E05 ×1, E02 ×2 |
| Q183 | one drone scenario needing classification **and** detection **and** character reading (select three) | b-2.3-1 | E02 ×1, E05 ×1 — the strongest multi-select in the source |

**Domain observation.** Only 13 items for an objective group carrying three action bullets, and the
mapping is the worst in the source: **zero items** on b-2.3-1 as the blueprint states it
(*interpret visual input in prompts by using a deployed multimodal model*), and image generation
reduced to one model-name-recall item. `E05 granularity-slip` is again the best craft on display
(Q178, Q181). Note Q128, where prompting a general-purpose model is written as a *wrong* answer —
under the current curriculum (`c-2.5-1`) that is arguably the right one. **A worked example of the
source being a generation behind, and a specific item pattern Mockka must not copy.**

---

## d2 · Information extraction (18 items) — b-2.4

| Item | Concept tested | Blueprint | Distractor patterns |
|---|---|---|---|
| Q2 | yes/no block on document-extraction capability claims | b-2.4-1 | *(matrix)* ⚑ stale |
| Q9 | splitting a legal-document pipeline between structural extraction and text analysis | b-2.4-1 | *(drag-drop)* E01 by construction |
| Q11 | reading printed identifiers off a photographed label | b-2.4-2 | E01 ×3 ⚑ stale |
| Q21 | pulling named fields out of multi-page forms | b-2.4-1 | E01 ×3 |
| Q40 | a receipt is a common enough document type to have a prebuilt extractor | b-2.4-1 | E01 ×3 ⚑ stale |
| Q79 | retrieving text content from a photographed sign is character reading | b-2.4-2 | E05 ×2, E01 ×1 |
| Q80 | prebuilt beats custom when the document type is standard | b-2.4-1 | E06 ×1 (raw character reading when typed fields are needed — **the load-bearing distractor**, and exactly `c-1.6-2` vs `c-1.6-3`), E01 ×2 |
| Q83 | preserving table structure needs layout-aware extraction, not plain reading | b-2.4-1 | E05 ×3 granularity-slip ⚑ stale model names |
| Q84 | a proprietary form template requires a custom-trained extractor with labelled samples | b-2.4-1 | E06 ×1 (prebuilt for a bespoke template), D01 ×1 over-engineering (regex over raw text), D19 ×1 |
| Q85 | choosing between image understanding and document extraction per retail task | b-2.4-1/2 | *(hotspot)* E01 by construction |
| Q90 | sorting a mixed archive by type before extracting requires classification first | b-2.4-1 | E12 ×1 pipeline-stage-swap (extract before classify — **the best sequencing distractor in the source**), E01 ×2 |
| Q111 | why a long-running analysis call returns a poller | b-2.4-4 | E10 ×3 ⚑ stale SDK; API-shape trivia |
| Q122 | plain text retrieval when no structural tags are needed | b-2.4-1 | E05 ×3 ⚑ stale model names |
| Q132 | invoices are standard enough for a prebuilt extractor | b-2.4-1 | E06 ×1, D01 ×1, E01 ×1 — near-duplicate of Q80/Q40 |
| Q144 | variable-layout handwriting needs reading; standard tables need structural extraction | b-2.4-1/2 | E05 ×1, E01 ×2 — good split-the-pipeline item |
| Q148 | what happens when a long-running result is awaited | b-2.4-4 | E10 ×3 ⚑ stale SDK; near-duplicate of Q111 |
| Q153 | supplying the right credential wrapper to an extraction client | b-2.4-4 | *(hotspot)* E10 ⚑ stale SDK |
| Q180 | reading merchant, date and line-item values off scanned receipts | b-2.4-1/2 | E02 ×3 — **the only item in the source whose key names Content Understanding**, and even then as a slash-alternative |

**Domain observation.** 18 items for a four-bullet objective group, and **not one of them is written
in the blueprint's vocabulary**. Every item is Document Intelligence model selection (read / layout /
prebuilt-receipt / prebuilt-invoice / custom-extraction / custom-classifier), which is the AI-102
answer space. b-2.4-2 (images) is touched incidentally, b-2.4-3 (**audio and video**) is **entirely
absent** — a whole blueprint bullet with zero coverage. The transferable craft is real but narrow:
Q80 and Q90 encode *reading vs field-mapping* and *classify-before-extract*, both of which are
concepts (`c-1.6-2`, `c-1.6-3`) rather than product facts, and both survive the rename.

---

## ⚑ RAG and grounding (18 items) — no blueprint bullet

Recorded in full because the official curriculum teaches this material (`c-1.7-*`, `c-2.7-*`) and
Gate 1 has to rule on it.

| Item | Concept tested | Curriculum | Distractor patterns |
|---|---|---|---|
| Q16 | connecting a model to an indexed private corpus at query time is retrieval-augmented generation | c-1.7-1 | E06 ×1 (fine-tuning as the same thing — load-bearing), E03 ×2 |
| Q23 | ordering ingest → embed → index → retrieve | c-1.7-2/3 | *(hotspot)* E12 pipeline-stage-swap by construction |
| Q36 | an embedding model is what turns text into semantic vectors | c-1.7-2 | E01 ×3 model-role-swap (image generation, chat, speech) — clean |
| Q101 | the search index is the store for vectors and metadata | c-2.7-2 | E09 ×3 platform-surface-swap |
| Q102 | selecting an embedding model rather than a chat model for vectorisation | c-1.7-2 | E01 ×3 — near-duplicate of Q36 |
| Q105 | vector search matches meaning where keyword search matches strings | c-1.7-3 | D19 ×1, E03 ×2 |
| Q108 | groundedness is the metric for "is the answer supported by what was retrieved" | c-1.7-4 | E07 ×3 (coherence, fluency, relevance — the neighbouring metrics). Strong |
| Q110 | changing embedding model forces re-embedding and re-indexing of the whole corpus | c-1.7-2 | D19 ×1 (index updates itself — the load-bearing false claim), D04 ×2 |
| Q112 | yes/no block on RAG system claims | c-1.7-1 | *(matrix)* |
| Q113 | matching retrieval / orchestration / agency to application roles | c-1.7-3 | *(drag-drop)* ⚑ one arm is off-blueprint (Prompt Flow) |
| Q114 | selecting the embedding-model and groundedness terms in context | c-1.7-2/4 | *(hotspot)* |
| Q115 | exact identifiers plus fuzzy concepts in one query calls for hybrid retrieval | c-1.7-3 | E06 ×1 (keyword only), D04 ×2 |
| Q134 | the query must be embedded with the same model as the corpus | c-1.7-2/3 | E12 ×1, E02 ×2 — **the sharpest RAG item in the source** |
| Q138 | relevance is the metric for "did it answer the question asked" | c-1.7-4 | E07 ×3 — mirror of Q108, and the pair together is a good discrimination |
| Q145 | re-ranking improves precision when vector recall is noisy | c-1.7-3 | E06 ×1, D04 ×2 |
| Q150 | yes/no block on search-integration claims | c-1.7-3 | *(matrix)* |
| Q152 | chunk size and overlap trade specificity against context | c-1.7-2 | E12 ×1, D04 ×2 — good trade-off framing |
| Q155 | recognising the shape of an embeddings call | c-1.7-2 | *(hotspot)* E10 ⚑ stale SDK |

**Group observation.** 18 items — as many as the entire information-extraction group, and more than
the vision group — on material the blueprint never names. The craft is above the source's average
(Q108/Q138 as a metric pair, Q110 and Q134 as consequence-of-mechanism items, Q152 as a genuine
trade-off), which makes it tempting. **Resist proportionally.** The curriculum's own framing
(`c-2.7-3`: connect an *agent* to a knowledge base) is the shape to borrow if Gate 1 admits this
material at all — grounding as something an agent does, not RAG mechanics as a subject.

---

## Distractor-pattern frequency across the 196 items

Counted from the per-item tables above, over the **485 wrong options** carried by the 163
option-bearing items (33 items are matrix/hotspot/drag-drop forms with no discrete distractor set).
Counts are analyst-assigned per option; a compound option carrying two errors is counted once under
its dominant pattern.

| Pattern | Approx. count | Note |
|---|---|---|
| `E01` service/model-role-swap | ~120 | **over-used — ~25% of all wrong options.** In the AI-900 distillation of a different source this pattern hit 43%; here it is lower only because `E04` absorbs the responsible-AI group. Still the default reflex, and ~30 items are built from nothing else. **Cap it.** |
| `E04` principle-substitution | ~68 | almost entirely inside the 24 responsible-AI items, where it accounts for 68 of 72 wrong options. Correct pattern for the group, catastrophically over-concentrated within it |
| `E05` granularity-slip | ~60 | **the source's best craft** — right modality, wrong output granularity (Q178, Q189, Q184, Q60, Q129). The most transferable pattern in the document and the one to *raise* |
| `E02` workload-type-swap | ~45 | concentrated in the 7-item workload group and the easy end of vision/speech; often too distant to be load-bearing |
| `E07` sibling-term-substitution | ~35 | strong where used (Q192, Q196, Q108, Q138, Q135) — real terminology, wrong referent |
| `E06` mode-swap / customisation-swap | ~25 | fine-tune-vs-retrieve, prebuilt-vs-custom, batch-vs-realtime. Well made and under-used |
| `E10` sdk-symbol-swap **(new)** | ~24 | a real SDK package, class, property or parameter from the wrong client or call. Almost all of it is API-shape trivia; **cap near zero** |
| `D04` knob-twiddling | ~21 | *"adjust the temperature"* offered against a problem temperature cannot solve, in **17 separate items**. The source's single worst tic — it is a filler distractor, not a diagnostic one |
| `E09` platform-surface-swap **(new)** | ~20 | a real platform surface (portal, catalog, filters, flow designer) offered against the one that does the job. Good pattern, but every instance is written in superseded vocabulary |
| `D19` false-technical-claim | ~18 | excellent when it encodes a real beginner misconception (Q24, Q110); filler when it is absurd (Q39) |
| `E03` technique-paradigm-swap | ~18 | classical-ML paradigms offered against generative tasks. Mostly attached to off-blueprint items |
| `E12` pipeline-stage-swap **(new)** | ~8 | a real step at the wrong point in a sequence (Q90, Q134, Q23). Rare and consistently good |
| `E11` agentic-tier-slip **(new)** | ~6 | chatbot / model / agent / orchestrated agent confused. **The source's most original contribution** and badly under-used |
| `D01` over-engineering | ~5 | hand-rolled code where the platform provides the control (Q7, Q84, Q71) |
| `E08` spec-trivia | ~12 | file formats, markup names, retention windows, response fields. **Off-blueprint for a fundamentals exam; cap near zero** |

## Consequences for authoring

1. **Cap `E01` at 0.25 of items.** At ~25% of wrong options and ~30 items built from nothing else,
   service/model-role-swap is this source's reflex, and on AI-901 it is also the *stalest* reflex —
   most of its instances name services the blueprint no longer uses. Manifest: `E01: 0.25`.
2. **Cap `E04` at 0.20 of items.** Correct pattern, wrong concentration: 68 of 72 wrong options in
   the responsible-AI group. A cap forces the group's items toward the *considerations* form
   (Q5/Q45/Q141) that b-1.1 actually asks for. Manifest: `E04: 0.20`.
3. **Cap `D04` at 0.05.** Seventeen items reach for "change the temperature" as filler. A distractor
   that is never plausible teaches nothing and shrinks the effective option count.
   Manifest: `D04: 0.05`.
4. **Cap `E08` and `E10` at 0.05 each.** Spec trivia and SDK-symbol recall are below the level of a
   fundamentals exam whose objectives are stated as capabilities, and the AI-900 build already
   registered `E08` for exactly this purpose. Note the tension to disclose: AI-901's audience
   profile *does* assume Python, so an item may **show** code — but it must turn on what the code
   is doing, not on which property name carries the score. Manifest: `E08: 0.05`, `E10: 0.05`.
5. **Raise `E05 granularity-slip` deliberately.** It is the best-made pattern here and it maps
   directly onto the blueprint's four text techniques, the vision task taxonomy, and `c-1.6-2` vs
   `c-1.6-3`. Target it as the primary pattern for b-1.3 and b-2.4.
6. **Adopt `E11 agentic-tier-slip` as a first-class pattern.** b-1.3-2 names *agentic AI* as a
   workload and b-2.1-4/5 separate agents from models. The chatbot/model/agent/orchestrated-agent
   ladder is the discrimination this exam is built on, and the source uses it in 6 items out of 196.
7. **Set `key_letter_max_share`** — the source's key positions are not obviously skewed but were
   not audited item-by-item, and the AI-900 build converted exactly this observation into a machine
   check (L-0014). Carry it forward at 0.4 rather than re-deriving it.
8. **Set `near_duplicate_jaccard` at 0.4 and expect it to bite.** This source contains at least six
   near-duplicate pairs (Q78/Q125, Q131/Q191, Q71/Q143, Q95/Q185, Q111/Q148, Q36/Q102, Q40/Q80/Q132).
   That is a characteristic failure of bulk generation and a live risk for Mockka's own authoring.
9. **Do not inherit the format ratio.** 81% single choice is corroborating, not authoritative:
   12% of this source's items are in forms Mockka cannot render, and the source has no way of
   knowing the vendor's true mix either. Mockka's mix should be a documented default, disclosed as
   such, exactly as the AI-900 manifest did.
10. **Treat the ⚑-marked items as negative calibration.** The stale-vocabulary items are a catalogue
    of the plausible-but-superseded answers a candidate will bring from community study. Several of
    them are excellent *distractors* for AI-901 items — which is the one place this source's
    obsolescence is an asset.

## Pattern registry — Microsoft vendor extension {#pattern-registry}

`E01`–`E08` were defined for the AI-900 build and are reused unchanged so pattern caps stay
comparable across the vendor's exams. `E09`–`E12` are **new**, proposed here for AI-901's
implementation half, and should be declared in `authoring.json` at S3.

| Code | Name | What it is |
|---|---|---|
| E01 | `service-role-swap` | a real service — or a real feature of the right service, or a real model of the right family — that performs a different job |
| E02 | `workload-type-swap` | a sibling AI workload category (vision / text / speech / extraction / generative / agentic) offered against the right one |
| E03 | `technique-paradigm-swap` | a classical-ML paradigm (regression / classification / clustering) offered against a generative or perceptual task |
| E04 | `principle-substitution` | a different responsible-AI principle — or an action that discharges a different principle — offered against the right one |
| E05 | `granularity-slip` | right modality, wrong output granularity (whole-image label for a per-instance job; document-level sentiment for aspect-level; raw text for typed fields) |
| E06 | `mode-swap` | right capability, wrong operating mode (fine-tuning for retrieval; custom training where prebuilt suffices; batch for real-time) |
| E07 | `sibling-term-substitution` | an adjacent technical term that is real but answers a different question |
| E08 | `spec-trivia` | a non-conceptual implementation detail (file formats, markup names, retention windows, API response fields). Registered so it can be capped near zero |
| **E09** | `platform-surface-swap` | **new.** A real surface of the AI platform — portal playground, model catalog, content filters, agent designer, endpoint settings — offered against the surface that actually performs the stated task. The implementation-half analogue of E01 |
| **E10** | `sdk-symbol-swap` | **new.** A real SDK package, client class, credential type, method or keyword argument that exists but belongs to a different client or a different call. Capped near zero: legitimate where the item turns on *what the code does*, illegitimate where it turns on recalling a symbol |
| **E11** | `agentic-tier-slip` | **new.** Right technology, wrong autonomy tier — a stateless bot offered where an agent is required, a bare model where tool-calling is required, or a multi-agent orchestration where a single agent suffices. The discrimination b-1.3-2 and b-2.1-4/5 are built on |
| **E12** | `pipeline-stage-swap` | **new.** A real step of a multi-stage solution placed at the wrong point, or omitted — classify after extracting instead of before, retrieve before embedding the query, index before chunking. The pattern behind every ordering and sequencing item |

## Concepts this source tests that other sources do not spell out

- **The agent autonomy ladder** — stateless bot → model with a prompt → agent with tool calling →
  orchestrated agent with a managed knowledge source (Q104, Q109, Q50, Q195, Q33). The blueprint
  names *agentic AI* and *single-agent solution*; only this source operationalises the boundary.
- **Build-vs-buy inside a capability** — a prebuilt task model versus prompting a general-purpose
  model, judged on cost and latency (Q97, Q136). A live AI-901 design decision that neither the
  blueprint nor the curriculum poses as a choice.
- **Consequence-of-mechanism items** — changing the embedding model invalidates the whole index
  (Q110); the query must be embedded with the corpus's model (Q134); chunk size trades specificity
  against context (Q152). These test understanding rather than recall and are the best-constructed
  items in the source.
- **Classify-before-extract** as a pipeline ordering constraint (Q90).
- **Principles in conflict** — transparency against security (Q141). Rare and valuable.

## Concepts other sources hold that this source does not test

Pointer to the reconciliation in `master-inventory.md` (S3). The material gaps, restated so S3 does
not have to re-derive them:

- **b-2.4-3** extraction from **audio and video** — zero items.
- **b-2.2-2** responding to spoken prompts via a deployed **multimodal model** — zero items.
- **b-2.3-1** interpreting **visual input in a prompt** — zero items (and Q128 marks the current
  answer as wrong).
- **b-2.1-3 / b-2.1-5** building client applications with the **Foundry SDK** — zero items; the SDK
  is named zero times.
- **b-1.3-11…14** the four extraction **modalities** as a concept set — zero items.
- **b-1.3-2** *agentic AI* as a **workload class** in the concepts area — tested only as an
  implementation distinction.
- **b-1.1** in its *"describe considerations for…"* form — 3 items out of 24.
- **c-2.3-3 / c-2.4-3** composing a capability **into an agent** — zero items.
- **c-2.7-*** Foundry IQ, knowledge bases, citation-backed grounding — zero items by name.
