# Artefact B · AI-900 study guide (skills measured as of 2025-05-02) concepts

**What this is.** The AI-900 study guide states **40 objective bullets across 11 functional groups
in 5 skill areas**. Most bullets carry more than one testable idea — several are bare capability
names, where each named capability is separately examinable. This document splits each bullet into
its constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where a practice
source records what an author *believed* is tested, this records what the vendor's blueprint
*actually declares* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the study guide. That is deliberate and is the only verbatim
content permitted in any artefact (`methodology/01-source-distillation.md#clean-room`): a question
that uses the guide's own terms lets a candidate trace a missed item straight back to the objective.
No prose beyond the objective terminology is reproduced.

> Source: `ms-ai900-blueprint` in [sources.md](sources.md) — study guide for Exam AI-900, skills
> measured as of 2025-05-02, page read in full 2026-08-16. Credited in the exam README.

> **Standing caveat: this blueprint describes a retired exam.** AI-900 was retired 2026-06-30 and
> replaced by AI-901 — see [sources.md §Retirement](sources.md#retirement). The distillation below
> is faithful to the final AI-900 blueprint; it is not a blueprint for any exam a candidate can
> currently sit.

## Guide structure → exam domain mapping

The mapping is 1:1 — the study guide *is* the blueprint, so its skill areas are the manifest's
domains and no reconciliation is needed. What needs recording is the **functional-group** layer
beneath each skill area, because that is the level the concept inventory is built at and the level
a per-item "concept tested" claim should resolve to.

| Guide skill area | Manifest domain | Published weight | Functional groups | Objective bullets |
|---|---|---|---|---|
| Describe Artificial Intelligence workloads and considerations | `d1` | 15–20% | 1.1, 1.2 | 10 |
| Describe fundamental principles of machine learning on Azure | `d2` | 15–20% | 2.1, 2.2, 2.3 | 10 |
| Describe features of computer vision workloads on Azure | `d3` | 15–20% | 3.1, 3.2 | 6 |
| Describe features of Natural Language Processing (NLP) workloads on Azure | `d4` | 15–20% | 4.1, 4.2 | 8 |
| Describe features of generative AI workloads on Azure | `d5` | 20–25% | 5.1, 5.2 | 6 |
| — | — | **80–105%** | **11** | **40** |

Four structural facts that shape authoring, all stated by the guide or the vendor's exam pages:

1. **The weights are ranges, and they do not sum to 100.** Minimums sum to 80, maximums to 105.
   The manifest's point weights are a *documented normalisation*, not a vendor fact — see
   [sources.md](sources.md) §"Two arithmetic consequences Gate 1 must ratify".
2. **The candidate describes; they do not build.** Every functional group is phrased as *Identify*
   or *Describe*. The audience profile states the exam "is intended for you if you have both
   technical and non-technical backgrounds" and that "data science and software engineering
   experience are not required". Any item whose key requires writing code, configuring a resource,
   or reasoning about SDK/CLI specifics is off-blueprint. (Note this is exactly the line AI-901
   moves: its audience profile *adds* Python and REST/SDK/CLI familiarity.)
3. **Preview features are in scope when common.** The guide states: "Most questions cover features
   that are general availability (GA). The exam may contain questions on Preview features if those
   features are commonly used." Items may therefore test a preview capability, but should not hinge
   on preview-only limits.
4. **The bullets are illustrative, not exhaustive.** "The bullets that follow each of the skills
   measured are intended to illustrate how we are assessing that skill. Related topics may be
   covered in the exam." So a concept adjacent to a bullet is legitimate; a concept in a *different*
   skill area is not.

**There is no in-scope service list.** Unlike the AWS exam guides, the AI-900 study guide names only
the services that appear inside objective bullets — Azure Machine Learning, Azure AI Vision, Azure
AI Face, Azure AI Language, Azure AI Speech, Azure AI Foundry, Azure OpenAI Service, and the Azure
AI Foundry model catalog. **That closed list is the answer space for service-identification items.**
Anything outside it (Azure AI Document Intelligence, Azure AI Search, Azure AI Translator, Azure AI
Content Safety, Custom Vision, Azure Bot Service) is *documented Azure surface but not
blueprint-named*, and is a legitimate distractor while being an illegitimate key. This is the
sharpest single authoring constraint this blueprint imposes, and it is the rule both practice
sources break (see the coverage annotations).

**Version-delta note (pre-2025-05-02 → 2025-05-02, from the guide's own change log).** Four rows
are recorded: *Identify features of common AI workloads* — **Major** change; *Describe fundamental
principles of machine learning on Azure* — **% of the exam decreased**; *Identify common machine
learning techniques* — Minor; and the generative-AI group *Identify capabilities of Azure OpenAI
Service* was replaced by *Identify generative AI services and capabilities in Microsoft Azure* —
**Major** — while the generative-AI skill area's **% of the exam increased**. Consequences: any
concept sourced from a pre-2025 practice set is suspect on two axes — the ML domain has been
trimmed toward core concepts (algorithm internals, designer metrics and regression sub-types are
gone), and the GenAI domain is no longer Azure-OpenAI-shaped but Foundry-shaped. Two further naming
drifts post-date even this revision: **Azure AI Foundry has been rebranded Microsoft Foundry** in
current documentation (the guide still says *Azure AI Foundry*), and **Cognitive Services** /
**LUIS** / **QnA Maker** — which older community sets still key to — are retired brands.

---

## Domain 1 · Describe Artificial Intelligence workloads and considerations (15–20%)

### Functional group 1.1 — Identify features of common AI workloads (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.1-1 | Recognising a described product or task as a computer-vision workload | *computer vision workloads* |
| b-1.1-2 | Recognising a described product or task as an NLP workload | *natural language processing workloads* |
| b-1.1-3 | Recognising a described product or task as a document-processing workload, and telling it apart from generic OCR | *document processing workloads* |
| b-1.1-4 | Recognising a described product or task as a generative-AI workload — content is *created*, not classified | *features of generative AI workloads* |
| b-1.1-5 | Discriminating between the four workload types when a scenario carries surface features of more than one | *AI workloads* |

> **Practice-source coverage: strong (`warner-ai900`), absent (`wrieden-ai900`).** `warner-ai900`
> devotes 3 of its 5 domain-1 items to workload discrimination and builds every wrong option from a
> sibling workload type — the cleanest calibration signal in either source. `wrieden-ai900` has no
> workload-recognition item at all: it pre-dates the 2025 revision that made this group Major.
> b-1.1-5 (the discrimination skill itself, as opposed to the four definitions) is the concept the
> exam actually tests and is worth over-provisioning.

### Functional group 1.2 — Identify guiding principles for responsible AI (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.2-1 | Fairness: equitable treatment of similarly situated people; recognising a bias symptom as a fairness failure | *fairness* |
| b-1.2-2 | Reliability and safety: consistent, safe behaviour under expected and unexpected conditions | *reliability and safety* |
| b-1.2-3 | Privacy and security: protecting personal data and securing the system | *privacy and security* |
| b-1.2-4 | Inclusiveness: engaging and empowering everyone, including people with disabilities | *inclusiveness* |
| b-1.2-5 | Transparency: making how and why a system decides intelligible to the people it affects | *transparency* |
| b-1.2-6 | Accountability: humans remain answerable for the system's operation and effects | *accountability* |
| b-1.2-7 | Choosing *which* principle a described failure most directly violates when two plausibly apply | *guiding principles for responsible AI*, *considerations* |
| b-1.2-8 | Choosing the *action* that discharges a named principle, as opposed to naming the principle | *considerations for … in an AI solution* |

> **Practice-source coverage: partial in both.** Both sources test "name the principle from a
> one-line description" (`wrieden-ai900` 29, `warner-ai900` 1.2). Only `warner-ai900` tests b-1.2-8
> — the harder and more diagnostic form, where all four options are *plausible actions* and only one
> discharges the named principle. Neither source touches **reliability and safety** (b-1.2-2) or
> **inclusiveness** as a design consideration rather than a definition. The six principles are the
> most memorisable content on the exam and therefore the easiest place to write items that measure
> recall instead of judgment; b-1.2-7 and b-1.2-8 are where the discrimination lives.

---

## Domain 2 · Describe fundamental principles of machine learning on Azure (15–20%)

### Functional group 2.1 — Identify common machine learning techniques (5 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.1-1 | Recognising a regression scenario by its output shape: a continuous numeric prediction | *regression machine learning scenarios* |
| b-2.1-2 | Recognising a classification scenario by its output shape: a categorical label; binary vs multiclass | *classification machine learning scenarios* |
| b-2.1-3 | Recognising a clustering scenario by the *absence of labels* and the goal of discovering groupings | *clustering machine learning scenarios* |
| b-2.1-4 | Supervision as the dividing line: which of the three techniques need labelled data | *machine learning techniques* |
| b-2.1-5 | What makes a technique "deep learning" — layered neural networks learning representations | *features of deep learning techniques* |
| b-2.1-6 | What the Transformer architecture contributes, and why modern language models rest on it | *features of the Transformer architecture* |

> **Practice-source coverage: strong on b-2.1-1/2/3, absent on b-2.1-5/6.** The
> regression/classification/clustering triad is the single most-tested idea in both practice sources
> (`warner-ai900` 2.1, 2.2; `wrieden-ai900` 5, 6, 14). Neither source tests **the Transformer
> architecture** (b-2.1-6) — a 2025-revision addition — beyond one incidental mention, and neither
> tests deep learning as a technique choice. `wrieden-ai900` instead tests *algorithm names*
> (decision forest, k-means, PCA, ordinal/Poisson regression), which the 2025 blueprint does not
> name at any level: off-blueprint, and a trap for a bank that inherits from it uncritically.

### Functional group 2.2 — Describe core machine learning concepts (2 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.2-1 | Telling a feature from a label in a described dataset — which column the model is given, which it must predict | *features and labels in a dataset* |
| b-2.2-2 | Why data is split, and what each split is for | *training and validation datasets* |
| b-2.2-3 | Reading a train-versus-validation performance gap as a generalisation failure | *training and validation datasets* |

> **Practice-source coverage: `warner-ai900` only.** Its item 2.4 covers b-2.2-2 and b-2.2-3
> together, keyed to overfitting, and is the best-constructed item in that source because every
> wrong option is a *real* diagnosis that fits a *different* symptom pattern. `wrieden-ai900`
> touches feature engineering and hyperparameters instead — both dropped from the 2025 blueprint.
> b-2.2-1 (feature vs label) is untested by either source and is a single-source concept.

### Functional group 2.3 — Describe Azure Machine Learning capabilities (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.3-1 | What automated machine learning does, and the candidate profile it exists for | *automated machine learning* |
| b-2.3-2 | Which Azure ML capability suits which job: AutoML vs designer vs notebooks/SDK | *Azure Machine Learning* |
| b-2.3-3 | Separating compute resources from training capabilities | *data and compute services for data science and machine learning* |
| b-2.3-4 | Registering, versioning and managing a trained model | *model management … capabilities in Azure Machine Learning* |
| b-2.3-5 | Serving a model: real-time endpoint versus batch, chosen from the consuming application's needs | *deployment capabilities in Azure Machine Learning* |

> **Practice-source coverage: `warner-ai900` only, and cleanly.** Its 2.3 covers b-2.3-1/b-2.3-2 by
> forcing a choice between four *real* Azure ML capabilities, and its 2.5 covers b-2.3-5 by making
> the consuming application's latency need the discriminator. `wrieden-ai900`'s Azure ML items are
> resource-name and file-format trivia (b-2.3-3 adjacent at best) and should not seed concepts.

---

## Domain 3 · Describe features of computer vision workloads on Azure (15–20%)

### Functional group 3.1 — Identify common types of computer vision solution (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.1-1 | Image classification: one label for the whole image | *features of image classification solutions* |
| b-3.1-2 | Object detection: class **plus location** for each instance, and when the location is what the scenario needs | *features of object detection solutions* |
| b-3.1-3 | Optical character recognition: extracting text that already exists in an image | *features of optical character recognition solutions* |
| b-3.1-4 | Facial detection and facial analysis: locating faces and describing attributes, distinct from identifying a person | *features of facial detection and facial analysis solutions* |
| b-3.1-5 | Choosing between the four by the **granularity of the required output**, not by the subject matter | *types of computer vision solution* |

> **Practice-source coverage: strong in both, with a vintage caveat.** `warner-ai900` 3.1 and 3.2
> test b-3.1-5 directly (classification vs detection decided by "do you need the location?").
> `wrieden-ai900` items 1 and 2 test the same axis but include **semantic segmentation**, which the
> 2025 blueprint does not name — the concept is real, the exam relevance is not. Neither source
> tests the detection-versus-*identification* line inside b-3.1-4, which is where responsible-AI
> considerations meet computer vision.

### Functional group 3.2 — Identify Azure tools and services for computer vision tasks (2 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.2-1 | What Azure AI Vision does: image analysis, captioning, tagging, OCR/Read | *capabilities of the Azure AI Vision service* |
| b-3.2-2 | What Azure AI Face does, and the boundary between it and Azure AI Vision's people detection | *capabilities of the Azure AI Face detection service* |
| b-3.2-3 | Matching a described vision requirement to the right one of the two named services | *Azure tools and services for computer vision tasks* |

> **Practice-source coverage: mixed, and this is where the answer-space rule bites.**
> `warner-ai900` 3.3 keys to **Azure AI Document Intelligence** and 3.5 to an Azure AI Vision
> feature name; only the second is inside this blueprint's named answer space. Document
> Intelligence is a legitimate *distractor* for a document-processing item (b-1.1-3) and an
> illegitimate *key* for a vision-service item. `wrieden-ai900` keys to Cognitive Services /
> Computer Vision resource types — retired branding. **Standing S3 rule: every service name lifted
> from a practice source is re-checked against the eight blueprint-named services before it enters
> `concepts.json`.**

---

## Domain 4 · Describe features of NLP workloads on Azure (15–20%)

### Functional group 4.1 — Identify features of common NLP workload scenarios (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.1-1 | Key phrase extraction: surfacing the main talking points, without typing them | *key phrase extraction* |
| b-4.1-2 | Entity recognition: finding and **categorising** typed items (person, place, organisation, quantity, date) | *entity recognition* |
| b-4.1-3 | Sentiment analysis: scoring opinion polarity over a document or sentence | *sentiment analysis* |
| b-4.1-4 | Language modelling: mapping an utterance to an **intent** and pulling its entities | *language modeling* |
| b-4.1-5 | Speech recognition and synthesis as two directions of one capability | *speech recognition and synthesis* |
| b-4.1-6 | Translation between languages, for text and for speech | *translation* |
| b-4.1-7 | Choosing between key phrase extraction, entity recognition and sentiment analysis when a scenario mentions "extract information from text" | *NLP workload scenarios* |

> **Practice-source coverage: `warner-ai900` covers 5 of 7, `wrieden-ai900` covers 2 badly.**
> `warner-ai900` 4.1/4.3/4.5 all exploit b-4.1-7 — three items whose wrong options are the sibling
> Language features — which is exactly how the real exam separates candidates who memorised feature
> names from candidates who can read a requirement. `wrieden-ai900` keys an intent item to **LUIS**
> and a conversational-AI item to **QnA Maker**, both retired brands replaced by Conversational
> Language Understanding and Custom Question Answering: the concepts survive, the keys do not.

### Functional group 4.2 — Identify Azure tools and services for NLP workloads (2 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.2-1 | What Azure AI Language covers: the text-analytics family plus conversational understanding and question answering | *capabilities of the Azure AI Language service* |
| b-4.2-2 | What Azure AI Speech covers: speech-to-text, text-to-speech, and speech translation | *capabilities of the Azure AI Speech service* |
| b-4.2-3 | Matching a described language requirement to the right one of the two named services, including the speech/text boundary | *Azure tools and services for NLP workloads* |

> **Practice-source coverage: `warner-ai900` 4.2 and 4.4 cover b-4.2-3 well** (a kiosk needing both
> speech directions; a bulk text-translation job). Note that 4.4 keys to **Azure AI Translator**,
> which is not one of this blueprint's two named NLP services — same answer-space caution as
> b-3.2-3. Translation as a *capability* (b-4.1-6) is in scope; Translator as a *keyed service* is
> a stretch the blueprint does not support.

---

## Domain 5 · Describe features of generative AI workloads on Azure (20–25%)

### Functional group 5.1 — Identify features of generative AI solutions (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-5.1-1 | What makes a model generative: it produces new content rather than a label or a score | *features of generative AI models* |
| b-5.1-2 | Recognising the model family a requirement needs: language, image, embedding, speech | *generative AI models* |
| b-5.1-3 | The common scenario shapes: natural-language generation, summarisation, code generation, image generation, conversational assistance | *common scenarios for generative AI* |
| b-5.1-4 | Hallucination as the headline limitation, and grounding as the response | *responsible AI considerations for generative AI* |
| b-5.1-5 | Layered mitigation: platform-level content filtering plus application-level instruction | *responsible AI considerations for generative AI* |
| b-5.1-6 | Transparency obligations specific to generated content | *responsible AI considerations for generative AI* |

> **Practice-source coverage: `warner-ai900` only; `wrieden-ai900` contributes nothing at all.**
> This is the heaviest-weighted domain (20–25%) and one of the two accessible practice sources has
> **zero** items in it — the source pre-dates the domain's existence. `warner-ai900` covers b-5.1-3
> (5.1), b-5.1-4/5 (5.4) and prompt-shaping (5.2). **The whole of Domain 5 rests on the blueprint
> plus one practice source; convergence here is structurally unavailable and must be flagged
> lower-confidence at Gate 1.**

### Functional group 5.2 — Identify generative AI services and capabilities in Microsoft Azure (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-5.2-1 | What Azure AI Foundry is: the portal/platform for building, testing and deploying generative AI solutions | *features and capabilities of Azure AI Foundry* |
| b-5.2-2 | What Azure OpenAI Service provides, and where it sits relative to Foundry | *features and capabilities of Azure OpenAI service* |
| b-5.2-3 | What the model catalog is for: browsing, comparing and deploying models from multiple providers | *features and capabilities of Azure AI Foundry model catalog* |
| b-5.2-4 | Choosing between building in Foundry and calling a model directly, from what the scenario needs | *generative AI services and capabilities in Microsoft Azure* |
| b-5.2-5 | Prompt shaping as the persistent-instruction mechanism (system message) versus per-request examples | *(no guide vocabulary — inferred from the group title; see caveat)* |
| b-5.2-6 | Grounding generated answers in an organisation's own content | *(no guide vocabulary — inferred; see caveat)* |

> **Caveat on b-5.2-5 and b-5.2-6.** The AI-900 study guide's bullets for this group name only
> Foundry, Azure OpenAI Service and the model catalog. Prompt engineering and retrieval-augmented
> generation are *not* named bullets in this revision, although both are heavily tested by
> `warner-ai900` (items 5.2 and 5.3) and are unambiguously "related topics" under the guide's own
> illustrative-bullets note. **S3 decision required:** carry them as lower-priority related-topic
> concepts, or drop them. Recommendation: carry, flagged, because the guide's note explicitly
> permits related topics and no candidate meets Foundry without meeting prompts and grounding.

> **Practice-source coverage: `warner-ai900` 5.5 covers b-5.2-1/b-5.2-3** — but keys to
> **"Microsoft Foundry"**, the post-guide rebrand of Azure AI Foundry. The concept is correct and
> the vocabulary has drifted; authoring must use the guide's term (*Azure AI Foundry*) with the new
> name acknowledged, or the item will read as wrong to a candidate studying the guide and as stale
> to one reading current docs.

---

## The named-risk register

The AI-900 guide does not attach named failure modes to its objectives the way an
architecture-review syllabus does — there is no equivalent of the CCAR-P named-risk list. The
nearest equivalents, and the highest-value diagnostic seeds available from this blueprint, are:

| Named risk | Group | Diagnostic question shape |
|---|---|---|
| Bias against similarly situated groups | 1.2 | a measured outcome disparity is described; the candidate must name fairness and reject three plausible-but-other principles |
| Unexplained automated decision | 1.2 | an affected person asks *why*; candidate must separate transparency (explain) from accountability (own) and from a technical fix |
| Overfitting | 2.2 | a train/validation gap is given as numbers; candidate must diagnose generalisation failure rather than data volume |
| Hallucination / ungrounded output | 5.1 | a deployed assistant states plausible falsehoods; candidate must choose grounding + filtering over model swap or prompt removal |
| Ungrounded enterprise Q&A | 5.2 | thousands of internal documents, answers must cite them; candidate must choose retrieval over fine-tuning or a larger context window |
| Wrong-granularity vision choice | 3.1 | a scenario needs *where*, not just *what*; candidate must reject whole-image classification |

Each names a specific way a competent-looking design fails, which is what makes them worth more
than a definition item.

## Concepts this source holds that no practice source tests

- Reliability and safety, and inclusiveness, as *design considerations* rather than principle names
  (b-1.2-2, b-1.2-4)
- Feature versus label identification in a described dataset (b-2.2-1)
- The Transformer architecture (b-2.1-6) — a 2025-revision addition
- Deep learning as a technique choice rather than a buzzword (b-2.1-5)
- Model registration, versioning and management (b-2.3-4)
- The facial *detection* versus *identification* boundary (b-3.1-4)
- Transparency obligations specific to generated content (b-5.1-6)
- Foundry-versus-direct-model-call judgment (b-5.2-4)

## Concepts the practice sources hold that this guide does not name

See the reconciliation in `master-inventory.md` (S3). In outline: Azure AI Document Intelligence,
Azure AI Search, Azure AI Translator, semantic segmentation, Custom Vision metrics, algorithm names
(decision forest, k-means, PCA), regression sub-types, hyperparameters, feature engineering, and the
retired Cognitive Services / LUIS / QnA Maker brands. Every one of these is **distractor material,
not key material**, under the answer-space rule above.
