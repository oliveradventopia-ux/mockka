# Artefact B · Microsoft AI-901 study guide concepts

**What this is.** The AI-901 study guide states **29 objective bullets** across **7 objective
groups** in **2 skill areas**. Most bullets carry more than one testable idea. This document splits
each into its constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where practice
sources record what an author *believed* is tested, this records what the blueprint *actually
states* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the source. That is deliberate: a question that uses the
blueprint's own terms lets a candidate trace a missed item straight back to the objective.
Vocabulary terms are the only verbatim content permitted in any artefact.

> Source: `ms-ai901-blueprint` in [`sources.md`](sources.md) — *Study guide for Exam AI-901:
> Microsoft Azure AI Fundamentals*, skills measured as of **2026-04-15**, read in full 2026-08-17.
> Logistics facts (duration, scoring, item types) come from the vendor-wide pages named in the
> AI-900 source map, re-verified the same day. Credited in the exam README.

**Notation.** Concepts are keyed `b-<area>.<group>-<n>`. Cross-annotations against the one distilled
practice source use the id `akashp` (`akashp-ai901-simulator`,
[Artefact A](source-akashp-ai901-simulator.md)) and against the official curriculum `curric`
([Artefact B](source-ms-ai901-curriculum.md)).

---

## Skill area → exam domain mapping

Unusually for this project, the mapping is **1:1 and trivial** — the blueprint publishes exactly two
skill areas and the exam page's "Assessed on this exam" list repeats them verbatim. There is no
reconciliation to do, which is why `layers.syllabus_rules` should stay `false`.

| Blueprint skill area | Published weight | Proposed manifest domain |
|---|---|---|
| Identify AI concepts and capabilities | 40–45% | `d1` |
| Implement AI solutions by using Microsoft Foundry | 55–60% | `d2` |

**The structural fact that shapes every downstream decision:** this is a **two-domain** exam in
which the majority domain is *implementation*. Every prior Mockka exam has had four to six
describe-level domains. Two consequences carry into S3: per-domain item counts will be large and
coarse (so within-domain balance has to be managed by objective group, not by domain), and the
bigger domain's verbs (`Create`, `Deploy`, `Build`, `Implement`) do not naturally produce
recognition items — the authoring guide's scenario craft has to do the work that a `Describe`
objective would have done for free.

### Audience profile (verbatim, because it sets item difficulty)

*"As a candidate for this Microsoft Certification, you're at the beginning of your career in AI
solution development. For this exam, you should have conceptual knowledge of AI solutions in Azure
and the foundational technical skills to work with them. You also need knowledge of **Python coding
syntax and programming techniques**, and you should be familiar with **Azure resources**."*

Plus the exam-wide note: *"Most questions cover features that are **general availability (GA)**. The
exam may contain questions on **Preview** features if those features are commonly used. You should
be familiar with **REST APIs, SDKs, and CLIs**."*

**Authoring consequence.** Python literacy is *assumed*, so an item may show or describe code —
but the vocabulary is `Foundry SDK`, not any specific 2024-era client library. Preview features are
in scope but only when "commonly used", which is a boundary no source states precisely; S4 should
prefer GA surfaces and treat preview-only capabilities as out of scope unless the curriculum teaches
them (see `curric`).

---

## Skill area 1 · Identify AI concepts and capabilities (40–45%)

### Group 1.1 — Describe principles of responsible AI

Six bullets, one per principle, each phrased identically: *"Describe considerations for **X** in an
AI solution."* The verb is `Describe considerations for`, **not** `Describe the principle` — a
meaningful shift from AI-900, and the single most exploitable authoring seam in the concepts half.

| Concept | Vocabulary |
|---|---|
| b-1.1-1 · What a fairness consideration is: identifying where a system could allocate opportunity or accuracy unevenly across groups, and what to check for | *fairness*, *considerations for fairness in an AI solution* |
| b-1.1-2 · What a reliability-and-safety consideration is: how a system behaves under degraded, adversarial or out-of-distribution conditions, and what fallback exists | *reliability and safety* |
| b-1.1-3 · What a privacy-and-security consideration is: what data the system holds, who can reach it, and how it resists adversarial extraction | *privacy and security* |
| b-1.1-4 · What an inclusiveness consideration is: whether the solution is usable by, and works for, people across abilities and circumstances | *inclusiveness* |
| b-1.1-5 · What a transparency consideration is: what users must be told about how the system works, its limits, and that it is AI | *transparency* |
| b-1.1-6 · What an accountability consideration is: who remains answerable for outcomes and through what governance | *accountability* |
| b-1.1-7 · **Discrimination between principles under a scenario** — the testable skill implied by six parallel bullets is not recall of six names but assigning the *right* one to a described situation, including situations that plausibly engage two | *(no vendor term — an inference from the parallel structure, recorded as an inference)* |

> **`akashp` coverage: full, and over-weighted.** 26 of its 196 items sit here (13%), against a
> group that is at most a third of a 40–45% area. Nearly all are the AI-900-era form
> *"which principle is violated?"* rather than the AI-901 form *"what consideration applies?"*.
> Its 2 items that do reach the consideration form (a transparency-vs-security trade-off; a
> transparency-plus-accountability pairing) are the two worth learning from.
> **`curric` coverage: partial** — Responsible AI is a single unit inside one module
> ("Introduction to AI concepts" → *Responsible AI*), which under-represents the blueprint's
> six-bullet treatment. Convergence for this group therefore rests on the blueprint itself.

**Authoring consequence.** The `Describe considerations` phrasing licenses a whole item family that
`akashp` never builds: give a *design decision* and ask which principle it discharges, or give a
principle and ask which of four proposed controls actually serves it. Distractors come from the
other five principles (`E04 principle-substitution`) and, better, from an action that plausibly
sounds like the named principle but discharges a neighbour's obligation.

### Group 1.2 — Identify AI model components and configurations

| Concept | Vocabulary |
|---|---|
| b-1.2-1 · How a generative model produces output — the mechanism a candidate must be able to describe | *Describe how generative AI models work* |
| b-1.2-2 · That model choice is driven by **capability**, not brand: matching a required capability (text, chat, embedding, image, multimodal, speech) to a model class | *Identify an appropriate AI model, based on capabilities* |
| b-1.2-3 · That a model is **deployed** before it is used, and deployment has options to choose between | *appropriate model deployment options* |
| b-1.2-4 · That inference behaviour is governed by **configuration parameters** set at or around deployment | *configuration parameters* |

> **`akashp` coverage: partial, and drifted.** It covers b-1.2-1 well (tokenization, context window,
> foundation models, next-token prediction, hallucination, embeddings) and b-1.2-2 adequately
> (model-family matching). For b-1.2-3/b-1.2-4 it substitutes the **Azure OpenAI** deployment
> vocabulary of 2024 — *Provisioned Throughput (PTU)* vs *Standard (Pay-As-You-Go)* — which the
> AI-901 blueprint never names. **`curric` coverage: full and current** — the module *Get started
> with AI in Azure* teaches deployment through *Microsoft Foundry* and *Foundry endpoints*.
> Where the two disagree, `curric` wins: it is the vendor's own current teaching.

**Authoring consequence.** b-1.2-3 and b-1.2-4 are the highest-risk concepts in the concepts half,
because the only practice source available is calibrated on the superseded vocabulary. Items here
must be written from `curric` terminology and kept at the level the blueprint states
(*which* deployment option / *which* parameter for a stated behaviour), never at the level of a
pricing-tier trivia question.

### Group 1.3 — Identify AI workloads

Five bullets, and the widest concept surface in the exam.

| Concept | Vocabulary |
|---|---|
| b-1.3-1 · Recognising which workload class a described business scenario belongs to, across the **full** named set | *scenarios for common AI workloads*, *generative and agentic AI*, *text analysis*, *speech*, *computer vision*, *information extraction* |
| b-1.3-2 · That **agentic AI** is a named workload class distinct from generative AI — an autonomy tier, not a bigger model | *agentic AI* |
| b-1.3-3 · Keyword extraction as a text-analysis technique | *keyword extraction* |
| b-1.3-4 · Entity detection as a text-analysis technique | *entity detection* |
| b-1.3-5 · Sentiment analysis as a text-analysis technique | *sentiment analysis* |
| b-1.3-6 · Summarization as a text-analysis technique | *summarization* |
| b-1.3-7 · Speech **recognition** — what it does and what it can be asked for | *speech recognition* |
| b-1.3-8 · Speech **synthesis** — what it does and what it can be asked for | *speech synthesis* |
| b-1.3-9 · Computer-vision model capabilities — what a vision model can be asked to report about an image | *features and capabilities of computer vision* |
| b-1.3-10 · **Image-generation** model capabilities, as a capability class separate from vision analysis | *image-generation models* |
| b-1.3-11 · Extraction from **text** | *techniques to extract information from text* |
| b-1.3-12 · Extraction from **images** | *...images* |
| b-1.3-13 · Extraction from **audio** | *...audio* |
| b-1.3-14 · Extraction from **video** | *...and videos* |

> **`akashp` coverage: partial with a systematic hole.** Workload recognition (b-1.3-1, b-1.3-3
> through b-1.3-10) is its strongest area — 30-odd clean scenario→workload items. But b-1.3-2
> (*agentic AI* as a named workload) appears only as a chatbot-vs-agent distinction inside its
> implementation section, and **b-1.3-11 to b-1.3-14 are essentially absent**: the source has two
> mentions of *Content Understanding* in 196 items and frames all extraction work as
> *Document Intelligence* prebuilt models. **`curric` coverage: full** — an entire concepts module
> (*Introduction to AI-powered information extraction concepts*) plus an entire implementation
> module maps onto b-1.3-11…14.

**Authoring consequence.** The four extraction-modality concepts (text / images / audio / video) are
a clean, blueprint-explicit four-way discrimination that no practice source tests. They are the
best diagnostic seeds in the concepts half, and `scenario_matching` is the natural format for them.

---

## Skill area 2 · Implement AI solutions by using Microsoft Foundry (55–60%)

Every bullet in this area is an **action**. Nothing here is `Describe`. The whole area is phrased
around one platform noun — **Microsoft Foundry** — and its named parts: the **Foundry portal**, the
**Foundry SDK**, and **Foundry Tools** (which is where *Azure Speech* and *Azure Content
Understanding* now live, per the bullets' own phrasing).

### Group 2.1 — Implement generative AI apps and agents by using Foundry

| Concept | Vocabulary |
|---|---|
| b-2.1-1 · What makes a **system prompt** effective, and how it differs in role from a user prompt | *effective system and user prompts*, *system prompt*, *user prompt* |
| b-2.1-2 · That a model must be **deployed** in the portal before it can be interacted with, and where that interaction happens | *Deploy a model and interact with it in the Foundry portal*, *Foundry portal* |
| b-2.1-3 · What a **lightweight chat client** built on the SDK consists of, and what the SDK is for | *lightweight chat client application*, *Foundry SDK* |
| b-2.1-4 · Creating and **testing** a single-agent solution in the portal — including that testing is part of the named task | *single-agent solution*, *create and test* |
| b-2.1-5 · That an **agent** also gets a client application, distinct from a chat client over a model | *lightweight client application for an agent* |
| b-2.1-6 · The **model → agent** distinction implied by 2.1-2/2.1-3 sitting beside 2.1-4/2.1-5: the same platform, two different things to build against | *(inference from the bullet pairing — recorded as an inference)* |

> **`akashp` coverage: partial, on the wrong platform generation.** Prompts (b-2.1-1) are covered
> well — system prompts, message roles, few-shot, chain-of-thought. Agents (b-2.1-4/5) get 6 items,
> good on the chatbot-vs-agent-vs-orchestrated-agent tiering. But b-2.1-2, b-2.1-3 and the whole
> SDK bullet are answered in **Azure AI Foundry hub/project/Prompt Flow** terms — 20 mentions of
> *Prompt Flow*, a construct the AI-901 blueprint does not name — and **zero** mentions of
> *Foundry SDK*. **`curric` coverage: full** (*Get started with generative AI and agents in Azure*
> teaches exactly this bullet list, unit for unit).

### Group 2.2 — Implement AI solutions for text and speech by using Foundry

| Concept | Vocabulary |
|---|---|
| b-2.2-1 · Building an application that performs **text analysis** — the applied form of b-1.3-3…6 | *lightweight application that includes text analysis* |
| b-2.2-2 · Responding to **spoken prompts** using a deployed **multimodal model** — i.e. speech handled by the model itself, not by a separate speech service | *Respond to spoken prompts by using a deployed multimodal model*, *multimodal model* |
| b-2.2-3 · Building on **Azure Speech in Foundry Tools** — the dedicated-service route, offered *alongside* the multimodal route | *Azure Speech in Foundry Tools* |
| b-2.2-4 · The **choice** between b-2.2-2 and b-2.2-3: two supported ways to handle speech, with different fits | *(inference from the bullets being adjacent and distinct — recorded as an inference)* |

> **`akashp` coverage: partial and superseded.** 20 speech items, all of them
> *Azure AI Speech* service-selection questions (STT, TTS, SSML, diarization, Custom Neural Voice,
> translation) — the AI-900/AI-102 framing. It has **no** item on the multimodal-model route to
> speech, which is half of what this group now asks. **`curric` coverage: full** (*Get started with
> speech in Azure* → *Creating a speech-capable agent*; and the vision module's multimodal units).

**Authoring consequence.** b-2.2-4 — *dedicated speech service vs multimodal model* — is a genuine
design trade-off that the blueprint puts on the page and no source tests. High-value item seed.

### Group 2.3 — Implement AI solutions with computer vision and image-generation capabilities by using Foundry

| Concept | Vocabulary |
|---|---|
| b-2.3-1 · Passing **visual input in a prompt** to a deployed multimodal model and interpreting what comes back | *Interpret visual input in prompts*, *deployed multimodal model* |
| b-2.3-2 · **Generating** new images (and, per the curriculum, video) with generative models | *Create new visual outputs by using generative models* |
| b-2.3-3 · Building an application that carries vision capability end-to-end | *lightweight application that includes vision capabilities* |
| b-2.3-4 · The analyse-vs-generate split: the same area covers reading images and making them, and they are different model classes | *(inference from 2.3-1 vs 2.3-2 — recorded as an inference)* |

> **`akashp` coverage: partial and superseded.** 25 vision items, framed as *Azure AI Vision*
> capability selection (OCR, image analysis, object detection, custom classification, Face API,
> and **34 mentions of Spatial Analysis** — a capability the AI-901 blueprint does not name at all).
> Image generation appears only as *DALL-E 3* model selection. **`curric` coverage: full** —
> *Get started with computer vision in Azure* has units for *Multimodal models for image analysis*,
> *Image generation models* and *Video generation models*.

### Group 2.4 — Implement AI solutions for information extraction by using Foundry

Four bullets, all naming one tool. This is the group with the largest gap between what the blueprint
asks and what any freely available practice source tests.

| Concept | Vocabulary |
|---|---|
| b-2.4-1 · Extracting from **documents and forms** using the named tool | *Extract information from documents and forms*, *Azure Content Understanding in Foundry Tools* |
| b-2.4-2 · Extracting from **images** using the same tool | *Extract information from images by using Content Understanding* |
| b-2.4-3 · Extracting from **audio and video** using the same tool | *Extract information from audio and video* |
| b-2.4-4 · Building an application with extraction capability | *lightweight application with information extraction capabilities* |
| b-2.4-5 · That **one tool spans all four modalities** — the unifying claim the four parallel bullets make | *Content Understanding* |

> **`akashp` coverage: effectively none.** *Content Understanding* appears **twice** in 196 items,
> once as a slash-alternative to OCR. Its 20-odd extraction items are all *Azure AI Document
> Intelligence* prebuilt/custom model selection — the superseded product. **`curric` coverage:
> full** (*Get started with AI-powered information extraction in Azure*: extract from documents;
> extract from audio and video).

**Authoring consequence.** b-2.4-5 is the concept the whole group is built on and the one a
candidate coming from AI-900 will get wrong: they will reach for a per-modality service. Every item
in this group must be written from `curric` vocabulary. Treat `akashp`'s extraction items as a
**negative** calibration signal — a catalogue of the wrong answers a stale study path produces.

---

## The vocabulary-drift register

This blueprint's most exam-relevant property is a rename. Recorded as a register because it is the
highest-value diagnostic seed in the package: every row is a way a competent-looking answer is now
wrong, and every left-hand term is live in the community material a candidate will find.

| Superseded term (still everywhere in community prep) | AI-901 blueprint term | Where the blueprint says it |
|---|---|---|
| Azure AI Foundry / AI Foundry portal (Studio) | **Microsoft Foundry**, *the Foundry portal* | b-2.1-2, area title |
| Azure AI Foundry hub + project + Prompt Flow | *(not named anywhere in the objectives)* | — |
| Azure OpenAI Service, PTU vs Standard deployments | *model deployment options and configuration parameters* | b-1.2-3, b-1.2-4 |
| Azure AI Document Intelligence (prebuilt/layout/custom models) | **Azure Content Understanding in Foundry Tools** | b-2.4-1…4 |
| Azure AI Speech (as a standalone service) | **Azure Speech in Foundry Tools** — *or* a deployed multimodal model | b-2.2-2, b-2.2-3 |
| Azure AI Vision (Image Analysis, OCR, Spatial Analysis, Face API) | *computer vision and image-generation models*, *deployed multimodal model* | b-1.3-9, b-1.3-10, b-2.3-1 |
| Azure AI Language (CLU, NER, PII, key phrases as service features) | *text analysis*, and its four named techniques | b-1.3-2…6, b-2.2-1 |
| Azure Machine Learning / AutoML / regression / clustering / evaluation metrics | **absent — no counterpart in any AI-901 objective** | — |

**Reading the register honestly.** It records that the *blueprint's* vocabulary changed. It does
**not** establish that the older service names are wrong answers on the live exam — Microsoft
publishes no per-exam item content, and the exam page's own marketing blurb is still stale
(see [`sources.md`](sources.md) §Source map, note 4). What it does establish is where a mock built
on community material would drift off the stated objectives, and that is enough to steer authoring:
**write to the right-hand column, and never make an item turn on a left-hand term.**

## Logistics facts (for the manifest, cited)

| Fact | Value | Where stated |
|---|---|---|
| Passing score | **700** on a **1–1,000** scale; *"may not equal 70% of the points"* | exam detail page; exam-scoring-reports page |
| Exam time / seat time | **45 / 65 minutes** (Fundamentals) | exam-duration-exam-experience page |
| Question count | **not published per exam**; vendor-wide *"typically contain between 40-60 questions"* | exam-duration-exam-experience page |
| Partial credit | *"one point for each correctly answered component"* on multi-part questions | exam-scoring-reports page |
| Guessing penalty | none | exam-scoring-reports page |
| Unscored items | present, **unidentified** | exam-scoring-reports page |
| Per-section bar | none; the bar chart *"can't be used to calculate the number of questions answered correctly"* | exam-scoring-reports page |
| Retirement | **none** | exam detail page, *Schedule exam* |
| Languages | 13, English updated **2026-04-15**, localised versions ~8 weeks later | exam detail page |
| Learn access during exam | **not available on Fundamentals exams** | exam-duration-exam-experience page |
| Item types (vendor-wide sandbox list) | active screen, build list, case studies, drag and drop, hot area, multiple choice, labs; plus problem-solution sets | exam-duration-exam-experience page |

## Concepts this source states that no other source spells out

- **b-1.1-1…6 as *considerations*** rather than as principle definitions — the phrasing is the
  objective, and only the blueprint carries it.
- **b-1.2-3 / b-1.2-4** as a *generic* deployment-and-parameters concept, deliberately not bound to
  a product's pricing tiers.
- **b-1.3-2 agentic AI as a named workload class** sitting inside the *concepts* area, not the
  implementation area — i.e. a candidate must recognise agentic scenarios before building anything.
- **b-2.2-2 vs b-2.2-3** — that speech has two supported implementation routes.
- **b-2.4-5** — that one tool, Content Understanding, spans documents, images, audio and video.

## Concepts other sources hold that this source does not state

Deferred to the reconciliation in `master-inventory.md` (S3). The large classes are: everything
`akashp` carries about the superseded Azure AI service taxonomy and about classical machine learning
(both **off-blueprint** — see [Artefact A](source-akashp-ai901-simulator.md) §off-blueprint census),
and the RAG / grounding / knowledge-base material that `curric` teaches in depth
(*Introduction to retrieval-augmented generation concepts*, *Get started with Microsoft Foundry IQ*)
but which the blueprint's bullets **never name**. That RAG gap is the single most consequential
reconciliation S3 has to rule on, and it is flagged for Gate 1.
