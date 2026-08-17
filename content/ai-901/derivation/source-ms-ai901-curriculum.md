# Artefact B · Microsoft official AI-901 curriculum concepts

**What this is.** Microsoft's official course for this exam, **AI-901T00-A "Introduction to AI in
Azure"**, maps to exactly **two learning paths** comprising **14 modules and 103 units**
(568 minutes of self-paced content; the instructor-led course is listed at 24 hours / 1 day). This
document splits the curriculum into its constituent concepts and records the **canonical
vocabulary** attached to each.

**Why it exists.** The blueprint states 29 terse objective bullets; the curriculum is Microsoft's
own expansion of what those bullets mean, and it is the vocabulary source — the exact terms a
candidate will have met while studying. It is also the project's **only second authoritative
reading** of this exam: with the official practice assessment behind a sign-in wall and every
community bank being a generated derivative, this is what keeps the AI-901 build from being
single-source.

**Vocabulary is quoted verbatim** from the source (module titles, unit titles, module summaries).
Those are the only verbatim content permitted in any artefact, and here they carry almost all the
information: Microsoft's unit titles *are* the concept names.

> Source: `ms-ai901-curriculum` in [`sources.md`](sources.md) — course `AI-901T00-A`
> (catalog uid `course.ai-901t00`, `last_modified` 2026-06-17) → learning paths
> `learn.ai-technical-concepts` ("AI concepts for developers and technology professionals",
> 7 modules / 231 min) and `learn.wwl.get-started-ai-apps-agents` ("Get started with AI applications
> and agents on Azure", 7 modules / 337 min), both `last_modified` **2026-07-31**. Structure read
> via the public Microsoft Learn catalog API plus the module pages, 2026-08-17. Credited in the
> exam README.

**Notation.** Blueprint concept ids (`b-…`) refer to
[Artefact B · blueprint](source-ms-ai901-blueprint.md). Curriculum concepts are keyed
`c-<path>.<module>-<n>`. Cross-annotations against the one distilled practice source use the id
`akashp` ([Artefact A](source-akashp-ai901-simulator.md)).

---

## Module → exam domain mapping

The two learning paths align almost exactly with the two skill areas — concepts path to `d1`,
implementation path to `d2`. Almost: the mapping table below records the four places it does not.

| Learning path · module | Units | Maps to |
|---|---|---|
| **LP1 · AI concepts for developers and technology professionals** (231 min) | | **d1** |
| 1. Introduction to AI concepts | 10 | b-1.1-1…7, b-1.3-1…10 |
| 2. Introduction to generative AI and agents | 7 | b-1.2-1, b-1.3-2 |
| 3. Introduction to natural language processing concepts | 7 | b-1.3-3…6 |
| 4. Introduction to AI speech concepts | 7 | b-1.3-7, b-1.3-8 |
| 5. Introduction to computer vision concepts | 9 | b-1.3-9, b-1.3-10 |
| 6. Introduction to AI-powered information extraction concepts | 7 | b-1.3-11…14 |
| 7. Introduction to retrieval-augmented generation concepts | 8 | **no blueprint bullet** ⚑ |
| **LP2 · Get started with AI applications and agents on Azure** (337 min) | | **d2** |
| 1. Get started with AI in Azure | 8 | b-1.2-2…4, b-2.1-2 |
| 2. Get started with generative AI and agents in Azure | 7 | b-2.1-1…6 |
| 3. Get started with text analysis in Azure | 7 | b-2.2-1 |
| 4. Get started with speech in Azure | 7 | b-2.2-2, b-2.2-3 |
| 5. Get started with computer vision in Azure | 7 | b-2.3-1…4 |
| 6. Get started with AI-powered information extraction in Azure | 6 | b-2.4-1…5 |
| 7. Get started with Microsoft Foundry IQ | 7 | **no blueprint bullet** ⚑ |

**The four mapping frictions, recorded because S3 has to rule on each:**

1. **⚑ Two whole modules have no blueprint bullet** — LP1 module 7 (RAG, 34 min) and LP2 module 7
   (Foundry IQ, 38 min). That is 72 of 568 curriculum minutes — **12.7% of the official course** —
   teaching material the objective list never names.
2. **Both of those modules carry `last_modified` 2026-07-31**, i.e. **three and a half months after**
   the blueprint's "skills measured as of 2026-04-15" date, while the six concepts modules that map
   cleanly are dated 2026-03-18 to 2026-04-24. The curriculum is running ahead of the blueprint.
   The likely reading is that RAG/Foundry IQ were added to the course before the blueprint's first
   revision; the honest reading is that **we do not know whether they are on the exam**.
   `[UNVERIFIED]` — no Microsoft statement resolves it, and the study guide has no change log yet.
3. **LP2 module 1 straddles the domains.** *Get started with AI in Azure* teaches Azure basics,
   Foundry and endpoints — which is where b-1.2-2/3/4 (a **skill-area-1** objective group) is
   actually taught. So model-selection and deployment-parameter concepts live in the implementation
   path but weight against `d1`.
4. **The concepts path teaches mechanism the blueprint does not ask for** — convolutional neural
   networks, vision transformers, tokenization internals, statistical vs semantic text models.
   These are *explanatory* units supporting a `Describe`-level objective, not testable objectives
   themselves. Flagged so S3 does not mint concepts from them.

---

## LP1 · AI concepts for developers and technology professionals

### Module 1 · Introduction to AI concepts (10 units, 40 min, mod 2026-04-24)

Summary (verbatim): *"Curious about artificial intelligence? Want to understand what the buzz is
about? This module introduces you to the world of AI."*

| Concept | Vocabulary |
|---|---|
| c-1.1-1 · The workload map: AI is a set of distinguishable capability classes, and this module names them in one place | *Introduction to AI* |
| c-1.1-2 · Generative AI and agents as the headline class, introduced first | *Generative AI and agents* |
| c-1.1-3 · Text and natural language as a workload class | *Text and natural language* |
| c-1.1-4 · Speech as a workload class | *Speech* |
| c-1.1-5 · Computer vision as a workload class | *Computer vision* |
| c-1.1-6 · Information extraction as a workload class **of equal billing** with the others | *Information extraction* |
| c-1.1-7 · Responsible AI as a cross-cutting concern taught alongside the workloads, not after them | *Responsible AI* |

> **Blueprint alignment: strong.** This module is b-1.3-1's exact answer space, and the ordering of
> its units is the ordering of the blueprint's own workload bullet. **`akashp` coverage: partial** —
> it tests every one of c-1.1-3…6 heavily but frames them as *Azure service selection* rather than
> as workload recognition, and it gives *Information extraction* no standing as a class at all.

**Craft note.** Six workload classes taught as siblings is a ready-made `scenario_matching` answer
set, and the blueprint's b-1.3-1 bullet lists them in the same shape. This is the single most
reusable option set in the exam.

### Module 2 · Introduction to generative AI and agents (7 units, 37 min, mod 2026-07-21)

| Concept | Vocabulary |
|---|---|
| c-1.2-1 · What a large language model is and what it does | *Large language models (LLMs)* |
| c-1.2-2 · The prompt as the control surface for a model | *Prompts* |
| c-1.2-3 · An **AI agent** as a distinct construct from a model plus a prompt | *AI agents* |

> **Blueprint alignment:** b-1.2-1 (how generative models work) and b-1.3-2 (agentic AI as a
> workload). **`akashp` coverage: full on c-1.2-1 and c-1.2-2** (tokenization, context window,
> foundation models, system prompts, few-shot, chain-of-thought, temperature) and **partial on
> c-1.2-3** — it distinguishes chatbot / agent / orchestrated agent, which is the right axis.

### Module 3 · Introduction to natural language processing concepts (7 units, 30 min, mod 2026-03-18)

Summary (verbatim): *"Natural language processing (NLP) supports applications that can analyze text
to infer semantic meaning."*

| Concept | Vocabulary |
|---|---|
| c-1.3-1 · Text is broken into units before anything else can happen | *Tokenization* |
| c-1.3-2 · Frequency/statistical approaches to text — what they can and cannot infer | *Statistical text analysis* |
| c-1.3-3 · Meaning-based approaches, and why they supersede frequency for semantic tasks | *Semantic language models* |

> **Blueprint alignment: mechanism, not objective.** The blueprint's text bullets name four
> *techniques* (keyword extraction, entity detection, sentiment analysis, summarization); this
> module teaches the machinery underneath them. b-1.3-3…6 are the testable layer; c-1.3-1…3 explain
> why the techniques behave as they do. **`akashp` coverage: partial** — it tests tokenization
> directly (1 item) and all four techniques heavily, but never the statistical-vs-semantic contrast.

**Craft note.** c-1.3-2 vs c-1.3-3 is the mechanism behind the best distractor in the text family:
an option that would work if matching were lexical, offered against a task that needs semantics.

### Module 4 · Introduction to AI speech concepts (7 units, 28 min, mod 2026-03-18)

| Concept | Vocabulary |
|---|---|
| c-1.4-1 · What a speech-enabled solution is, as a solution shape rather than a service | *Speech-enabled solutions* |
| c-1.4-2 · Speech **recognition** — audio in, text out | *Speech recognition* |
| c-1.4-3 · Speech **synthesis** — text in, audio out | *Speech synthesis* |

> **Blueprint alignment: exact** — b-1.3-7 and b-1.3-8 are these two units. **`akashp` coverage:
> full but over-specified**: 20 speech items covering SSML, diarization, Custom Neural Voice,
> pronunciation assessment — feature depth the blueprint's *"features and capabilities"* phrasing
> does not reach, and product-bound to a service name the blueprint no longer uses.

### Module 5 · Introduction to computer vision concepts (9 units, 34 min, mod 2026-03-18)

| Concept | Vocabulary |
|---|---|
| c-1.5-1 · The task taxonomy of vision — what distinct things one can ask of an image | *Computer vision tasks and techniques* |
| c-1.5-2 · An image as data, and what "processing" it means | *Images and image processing* |
| c-1.5-3 · The classical architecture behind vision models | *Convolutional neural networks* |
| c-1.5-4 · The current architecture, and that a **multimodal** model handles vision within a language model | *Vision transformers and multimodal models* |
| c-1.5-5 · Producing images as a separate capability class from analysing them | *Image generation* |

> **Blueprint alignment:** c-1.5-1 → b-1.3-9, c-1.5-5 → b-1.3-10, and **c-1.5-4 is the conceptual
> bridge to the whole of b-2.3** (interpreting visual input by prompting a deployed multimodal
> model). c-1.5-2/3 are mechanism. **`akashp` coverage: partial and dated** — 25 vision items on
> OCR / image analysis / object detection / face / spatial analysis, and **nothing** on vision
> transformers or the multimodal route.

**Craft note.** c-1.5-4 is the most load-bearing concept in the vision family for this exam: the
AI-901 answer to "analyse this image" is increasingly *prompt a multimodal model*, and the
plausible wrong answer is *call the specialised vision service* — a distractor that was the **key**
on AI-900. Handle with care and keep it scenario-driven.

### Module 6 · Introduction to AI-powered information extraction concepts (7 units, 28 min, mod 2026-03-18)

| Concept | Vocabulary |
|---|---|
| c-1.6-1 · Information extraction as a workload in its own right, across content types | *Overview of information extraction* |
| c-1.6-2 · Reading characters off an image or scan | *Optical character recognition (OCR)* |
| c-1.6-3 · Getting **typed, named fields** out of content — the step beyond reading the characters | *Field extraction and mapping* |

> **Blueprint alignment: exact and important** — this module is b-1.3-11…14's concept base, and
> c-1.6-2 vs c-1.6-3 is precisely the discrimination the blueprint's *"techniques to extract
> information"* bullet asks for. **`akashp` coverage: weak** — it tests OCR and prebuilt-model
> selection but never separates *reading* from *field mapping* as concepts; that distinction is
> always bound to a product name in its items.

### Module 7 · Introduction to retrieval-augmented generation concepts (8 units, 34 min, mod 2026-07-31) ⚑

**No blueprint bullet names RAG.** Recorded in full anyway, because the curriculum teaches it and a
candidate will have studied it.

| Concept | Vocabulary |
|---|---|
| c-1.7-1 · What RAG is and what problem it solves | *Understand retrieval-augmented generation* |
| c-1.7-2 · That source content must be prepared before it can be retrieved | *Prepare data for retrieval* |
| c-1.7-3 · The two-step runtime: retrieve, then generate from what was retrieved | *Retrieve information and generate a response* |
| c-1.7-4 · That a RAG solution is **evaluated**, not just built | *Evaluate a RAG solution* |

> **Blueprint alignment: none stated.** ⚑ Gate-1 item. **`akashp` coverage: heavy** — roughly 15
> items on RAG (indexing, embeddings, vector vs hybrid search, semantic ranker, chunking, re-embed
> on model upgrade, groundedness vs relevance). Note the asymmetry: the community bank tests RAG
> hard, the curriculum teaches it, and the blueprint is silent. That is exactly the situation in
> which a mock over-tests a topic and misleads a candidate about the paper's shape.

### The named-risk register — from LP1

The curriculum names failure modes only glancingly at concepts level, but three are explicit enough
to seed diagnostic items:

| Named risk | Where | Diagnostic question shape |
|---|---|---|
| A statistical/lexical approach cannot infer meaning | c-1.3-2 vs c-1.3-3 | a retrieval or matching task that fails on exact terms and needs semantics |
| Reading characters ≠ extracting fields | c-1.6-2 vs c-1.6-3 | a scenario where OCR output exists but the business needs typed values |
| A generated response can be fluent and ungrounded | c-1.7-1, c-1.7-4 | a scenario in which output quality looks fine but is not traceable to source |

---

## LP2 · Get started with AI applications and agents on Azure

Every module in this path ends with an **Exercise** unit performed *in Microsoft Foundry*, which is
itself a fact about the exam's level: the curriculum expects hands-on portal work.

### Module 1 · Get started with AI in Azure (8 units, 56 min, mod 2026-06-23)

Summary (verbatim): *"This module introduces Azure and its capabilities for building AI solutions.
Explore the key features and benefits of using Microsoft Foundry for AI development."*

| Concept | Vocabulary |
|---|---|
| c-2.1-1 · Azure as the substrate — resources, and that AI services are resources | *Understand Azure* |
| c-2.1-2 · What building an AI app on Azure involves | *Developing AI apps on Azure* |
| c-2.1-3 · **Microsoft Foundry** as the named platform for AI development | *Microsoft Foundry for AI* |
| c-2.1-4 · That a deployed model or service is reached through an **endpoint** | *Using Microsoft Foundry endpoints* |
| c-2.1-5 · Getting a Foundry environment stood up (exercise) | *Get started with Microsoft Foundry* |

> **Blueprint alignment:** c-2.1-3/4 answer b-1.2-3 (deployment options) and b-2.1-2 (deploy a model
> and interact with it in the portal). **This is the module that replaces everything `akashp` says
> about hubs, projects, Prompt Flow and PTU.** **`akashp` coverage: superseded** — it has 41
> mentions of *Azure AI Foundry* and **zero** of *Microsoft Foundry*; its hub-vs-project and
> shared-compute items describe a resource model the current curriculum does not teach.

### Module 2 · Get started with generative AI and agents in Azure (7 units, 58 min, mod 2026-06-23)

| Concept | Vocabulary |
|---|---|
| c-2.2-1 · Choosing among **generative AI models** available in Foundry | *Generative AI models* |
| c-2.2-2 · Actually invoking a deployed model | *Using a generative AI model* |
| c-2.2-3 · Building an **agent** as a distinct create-action | *Creating an agent* |
| c-2.2-4 · Doing both in Foundry (exercise) | *Get started with generative AI and agents in Microsoft Foundry* |

> **Blueprint alignment: exact** — this module is b-2.1-1…6, unit for unit. **`akashp` coverage:
> partial** — good on prompts and on agent-vs-chatbot, absent on the Foundry SDK client-application
> bullets (b-2.1-3, b-2.1-5).

### Module 3 · Get started with text analysis in Azure (7 units, 45 min, mod 2026-06-23)

| Concept | Vocabulary |
|---|---|
| c-2.3-1 · Text analysis **as a Foundry capability**, not a separate service portal | *Understand text analysis in Foundry* |
| c-2.3-2 · Building a client application that analyses text | *Create a client application that analyzes text* |
| c-2.3-3 · Wiring language capability **into an agent** — the composition move | *Use Azure Language with an agent* |

> **Blueprint alignment:** b-2.2-1. Note c-2.3-3: the curriculum's framing is that text analysis is
> a **tool an agent uses**, which is a materially different mental model from AI-900's
> "pick the right service". **`akashp` coverage: partial** — 30-odd Azure AI Language items, all
> service/feature selection, none of them composing a capability into an agent.

### Module 4 · Get started with speech in Azure (7 units, 47 min, mod 2026-06-23)

Summary (verbatim): *"Learn how to use Azure Speech in Foundry Tools to recognize and synthesize
speech."*

| Concept | Vocabulary |
|---|---|
| c-2.4-1 · Recognition, implemented | *Speech recognition* |
| c-2.4-2 · Synthesis, implemented | *Speech synthesis* |
| c-2.4-3 · Composing both into a **speech-capable agent** | *Creating a speech-capable agent* |

> **Blueprint alignment:** b-2.2-3 exactly (*Azure Speech in Foundry Tools* is the module summary's
> own phrase), and c-2.4-3 supports b-2.2-2's multimodal route. **`akashp` coverage: partial** —
> rich on standalone speech features, silent on speech-capable agents.

### Module 5 · Get started with computer vision in Azure (7 units, 50 min, mod 2026-06-23)

Summary (verbatim): *"Vision-enabled models in Foundry enable developers to create intelligent
solutions that analysis images, and generate images and video."* (sic)

| Concept | Vocabulary |
|---|---|
| c-2.5-1 · Analysing an image by prompting a **multimodal model** | *Multimodal models for image analysis* |
| c-2.5-2 · Generating images | *Image generation models* |
| c-2.5-3 · Generating **video** — a capability class the blueprint does not name | *Video generation models* ⚑ |

> **Blueprint alignment:** c-2.5-1 → b-2.3-1, c-2.5-2 → b-2.3-2. **c-2.5-3 has no blueprint
> bullet** (b-2.3-2 says *"visual outputs"*, which arguably covers video — an inference, not a
> statement). **`akashp` coverage: none for c-2.5-1 and c-2.5-3**; c-2.5-2 only as DALL-E model
> selection.

### Module 6 · Get started with AI-powered information extraction in Azure (6 units, 43 min, mod 2026-06-23)

Summary (verbatim): *"Learn how to use Azure Content Understanding in Foundry Tools to extract
information from content."*

| Concept | Vocabulary |
|---|---|
| c-2.6-1 · Extracting from documents with **Content Understanding** | *Extract information from documents*, *Azure Content Understanding in Foundry Tools* |
| c-2.6-2 · Extracting from **audio and video** with the same tool | *Extract information from audio and video* |
| c-2.6-3 · That it is one tool across content types (implied by 6 units covering four modalities) | *Content Understanding* |

> **Blueprint alignment: exact** — b-2.4-1…5. **`akashp` coverage: none** — two mentions of
> *Content Understanding* in 196 items, against ~20 items built on the superseded
> Document Intelligence model catalogue. **This module is the sole usable source for b-2.4.**

### Module 7 · Get started with Microsoft Foundry IQ (7 units, 38 min, mod 2026-07-31) ⚑

Summary (verbatim): *"Learn how Microsoft Foundry IQ helps AI agents retrieve relevant information
from enterprise data and generate grounded, citation-backed responses."*

| Concept | Vocabulary |
|---|---|
| c-2.7-1 · What Foundry IQ is | *What is Foundry IQ?* |
| c-2.7-2 · The **knowledge base** as the unit of grounded enterprise content | *Knowledge bases* |
| c-2.7-3 · Attaching a knowledge base to an agent | *Connect an agent to Foundry IQ* |
| c-2.7-4 · That grounded answers carry **citations** | *grounded, citation-backed responses* |

> **Blueprint alignment: none stated.** ⚑ Gate-1 item, paired with LP1 module 7. Together they are
> the platform's answer to grounding, taught in 72 minutes of official course time and named in
> zero objective bullets. **`akashp` coverage: none by name** (it teaches the same job in
> Azure AI Search vocabulary).

---

## Consequences for authoring

1. **Write the implementation half from this document, not from any practice source.** The
   curriculum is the only current, authoritative statement of what "implement in Foundry" means.
   Every b-2.x concept has a matching `c-2.x` unit; the practice source has a matching product
   name from a previous generation.
2. **Do not mint concepts from the mechanism units** — c-1.3-1…3, c-1.5-2, c-1.5-3. They exist to
   explain a `Describe`-level objective, and an item that turns on convolutional-vs-transformer
   architecture is off-blueprint for a fundamentals exam.
3. **Use the six-workload option set (c-1.1-2…7) as the anchor `scenario_matching` answer set.**
   It is vendor-stated, mutually exclusive, and exactly the discrimination b-1.3-1 asks for.
4. **⚑ Rule on RAG/Foundry IQ at Gate 1 before authoring d2.** Three defensible positions:
   (a) exclude — the blueprint is the contract, and 12.7% of course time on unnamed material is
   the curriculum getting ahead of the exam; (b) include at low weight as *grounding* concepts
   attached to b-2.1-4/5 (agents that retrieve), never as RAG-mechanics trivia; (c) include fully
   and disclose. **Recommendation: (b).** It matches how the curriculum itself frames Foundry IQ —
   as something an *agent* connects to — and it avoids the failure mode where the mock's shape
   diverges from the paper's because a community bank over-tests a fashionable topic.
5. **The vocabulary drift is the exam's own trap and must not become the mock's trap.** Items
   should be answerable in current terms without requiring the candidate to know that a term was
   renamed. Never key an item on a rename.

## Concepts this source states that no other source spells out

- **c-1.5-4** vision transformers / multimodal models as the mechanism behind prompt-based image
  analysis — the bridge concept for the whole of b-2.3.
- **c-1.6-3** *field extraction and mapping* as distinct from OCR.
- **c-2.3-3 / c-2.4-3** composing a capability **into an agent** — the curriculum's recurring
  implementation shape, and one no practice source tests.
- **c-2.5-3** video generation.
- **c-2.7-1…4** Foundry IQ, knowledge bases, citation-backed grounding.
- **c-2.1-4** endpoints as the access mechanism for anything deployed in Foundry.

## Concepts other sources hold that this source does not teach

Deferred to `master-inventory.md` (S3). The large class is everything `akashp` carries about
classical machine learning (regression, clustering, AutoML, accuracy/recall/R², overfitting) and
about the pre-Foundry Azure AI service catalogue — **neither the blueprint nor this curriculum
contains any of it**, which is the two-source agreement that lets S3 classify those items as
off-blueprint with confidence rather than by assertion.
