# Artefact B · AWS Certified AI Practitioner (AIF-C01) exam guide concepts

**What this is.** The AIF-C01 exam guide states **69 objectives across 14 task statements in 5
content domains**. Most objectives carry more than one testable idea — several are bare lists of
example terms, where each term is separately examinable. This document splits each objective into
its constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where a practice
source records what an author *believed* is tested, this records what the vendor's blueprint
*actually declares* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the exam guide. That is deliberate and is the only verbatim
content permitted in any artefact (`methodology/01-source-distillation.md#clean-room`): a question
that uses the guide's own terms lets a candidate trace a missed item straight back to the objective.
No objective prose, no example sentences and no service descriptions are reproduced — only the terms
themselves.

> Source: `aif-blueprint` in [sources.md](sources.md) — exam guide v1.1, published 2026-04-30, read
> in full 2026-08-16. Credited in the exam README.

## Guide structure → exam domain mapping

Unusually for a syllabus source, the mapping is 1:1 — the guide *is* the blueprint, so its content
domains are the manifest's domains and no reconciliation is needed. What does need recording is the
task-statement layer beneath each domain, because that is the level the concept inventory is built
at and the level a per-item "concept tested" claim should resolve to.

| Guide content domain | Manifest domain | Weight (of scored content) | Task statements | Objectives |
|---|---|---|---|---|
| Domain 1 · Fundamentals of AI and ML | `d1` | 20% | 1.1, 1.2, 1.3 | 17 |
| Domain 2 · Fundamentals of GenAI | `d2` | 24% | 2.1, 2.2, 2.3 | 14 |
| Domain 3 · Applications of Foundation Models | `d3` | 28% | 3.1, 3.2, 3.3, 3.4 | 19 |
| Domain 4 · Guidelines for Responsible AI | `d4` | 14% | 4.1, 4.2 | 11 |
| Domain 5 · Security, Compliance, and Governance for AI Solutions | `d5` | 14% | 5.1, 5.2 | 8 |
| — | — | **100%** | **14** | **69** |

Two structural facts that shape authoring, both stated by the guide:

1. **The candidate uses but does not build.** Model coding, feature engineering, hyperparameter
   tuning, pipeline/infrastructure construction, statistical analysis of models, and implementing
   security/compliance protocols or governance frameworks are all declared out of scope for the
   target candidate (up to 6 months' exposure). Items must test *selection, recognition and
   judgment*, not implementation. Any item whose key requires building something is off-blueprint.
2. **The service lists are the answer space.** The guide publishes an in-scope service list
   (~50 offerings across 11 categories) and a much longer out-of-scope list. Distractors drawn from
   the **in-scope** list are fair; distractors naming out-of-scope services are cheap, because a
   prepared candidate eliminates them without reasoning about the scenario.

**In-scope service list, verbatim, as the authoring answer space** (Analytics) AWS Data Exchange,
Amazon EMR, AWS Glue, AWS Glue DataBrew, AWS Lake Formation, Amazon OpenSearch Service, Amazon
Quick, Amazon Redshift · (Cloud Financial Management) AWS Budgets, AWS Cost Explorer · (Compute)
Amazon EC2, AWS Lambda · (Containers) Amazon ECS, Amazon EKS · (Database) Amazon Aurora, Amazon
DocumentDB, Amazon DynamoDB, Amazon ElastiCache, Amazon Neptune, Amazon RDS · (Developer Tools)
Kiro, Strands Agents, Amazon Q · (Machine Learning) Amazon Augmented AI (Amazon A2I), Amazon
Bedrock, Amazon Bedrock AgentCore, Amazon Comprehend, Amazon Lex, Amazon Nova, Amazon Personalize,
Amazon Polly, Amazon Rekognition, Amazon SageMaker AI, Amazon SageMaker JumpStart, Amazon Textract,
Amazon Transcribe, Amazon Translate, AWS Transform · (Management and Governance) AWS CloudTrail,
Amazon CloudWatch, AWS Config, AWS Trusted Advisor, AWS Well-Architected Tool · (Networking and
Content Delivery) Amazon CloudFront, Amazon VPC · (Security, Identity, and Compliance) AWS Artifact,
AWS Identity and Access Management (IAM), Amazon Inspector, AWS Key Management Service (AWS KMS),
Amazon Macie, AWS Secrets Manager · (Storage) Amazon S3, Amazon S3 Glacier.

**Version-delta note (v1.0 → v1.1, from the guide's own diff tables).** Eight objectives were added
and fourteen reworded; the additions are all recent-AWS surface: agentic AI concepts including
**Model Context Protocol (MCP)**, **context engineering**, **token-based pricing**, **prompt
caching**, **model distillation**, **LLM-as-a-judge**, **Amazon Bedrock Prompt Management**,
**business-objective alignment metrics**, **hallucination detection and grounding**, and expanded
security wording (**data leakage prevention**, **output filtering and validation**, **audit trail
and logging**, **toxicity**). Services added in-scope: Amazon Aurora, Amazon Bedrock AgentCore,
Kiro, Strands Agents, Amazon Q, Amazon SageMaker JumpStart, AWS Transform; **Amazon MemoryDB was
removed**. Amazon Bedrock PartyRock and Amazon Bedrock Data Automation, named in v1.0 objective
2.3.1, are **not named in v1.1**. Any concept sourced from a pre-2026 practice set is therefore
suspect on two axes — it may test a dropped objective, and it may name a service that has left the
list.

---

## Domain 1 · Fundamentals of AI and ML (20%)

### Task Statement 1.1 — Explain basic AI concepts and terminologies (5 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.1-1 | The field hierarchy: which of these terms contains which | *AI*, *ML*, *deep learning*, *neural networks*, *generative AI [GenAI]*, *agentic AI* |
| b-1.1-2 | Naming the discipline that handles a given input modality | *computer vision*, *natural language processing [NLP]* |
| b-1.1-3 | Separating the learned artefact from the procedure that produced it | *model*, *algorithm* |
| b-1.1-4 | Separating the phase that learns from the phase that predicts | *training*, *inferencing* |
| b-1.1-5 | Quality vocabulary a practitioner must recognise before Domain 4 uses it | *bias*, *fairness*, *fit* |
| b-1.1-6 | What makes a language model "large", and how an LLM differs from a general ML model | *large language model [LLM]* |
| b-1.1-7 | What distinguishes agentic AI from a single model call | *agentic AI* |
| b-1.1-8 | Choosing an inference mode from a workload's latency and volume shape | *batch*, *real-time*, *asynchronous*, *serverless* |
| b-1.1-9 | Whether data carries supervision signal | *labeled*, *unlabeled* |
| b-1.1-10 | Recognising a data shape from how it is described | *tabular*, *time-series*, *image*, *text* |
| b-1.1-11 | Structure as a property of data, distinct from its modality | *structured*, *unstructured* |
| b-1.1-12 | Matching a learning paradigm to what the data offers | *supervised learning*, *unsupervised learning*, *reinforcement learning methods* |

> **Practice-source coverage: partial.** Both Artefact-A sources cover b-1.1-1, b-1.1-9/12
> (supervised vs unsupervised, always via a clustering-versus-labels contrast) and b-1.1-4;
> `jwalsh-aif` also covers tokens. Neither tests **agentic AI** (b-1.1-7), **asynchronous or
> serverless inference** (b-1.1-8) or **structured/unstructured** (b-1.1-11) — all v1.1 wording.
> Single-source concepts for the inventory.

### Task Statement 1.2 — Identify practical use cases for AI (6 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.2-1 | Where AI adds value that conventional software does not | *assist human decision making*, *solution scalability*, *automation* |
| b-1.2-2 | Recognising when AI/ML is the wrong tool — deterministic answer required, or cost exceeds benefit | *cost-benefit analyses*, *prediction* |
| b-1.2-3 | Matching a problem to a technique by the shape of its output | *regression*, *classification*, *clustering* |
| b-1.2-4 | Identifying the AI application category behind a described product | *computer vision*, *NLP*, *speech recognition*, *recommendation systems*, *fraud detection*, *forecasting*, *knowledge bases*, *agentic AI* |
| b-1.2-5 | Which managed AWS service performs which AI task, and the direction of that task | *Amazon SageMaker AI*, *Amazon Transcribe*, *Amazon Translate*, *Amazon Comprehend*, *Amazon Lex*, *Amazon Polly* |
| b-1.2-6 | Choosing traditional ML over an FM when regulation, explainability or operational limits dominate | *regulatory concerns*, *explainability requirements*, *operational constraints*, *foundation models [FMs]* |

> **Practice-source coverage: strong on b-1.2-4/5, absent elsewhere.** The service-identification
> concept (b-1.2-5) is the single most-tested idea across both practice sources. Neither source
> tests **when AI is inappropriate** (b-1.2-2) — a high-value diagnostic gap, since a candidate who
> only drills service matching never meets it. `declute-serverside` alone touches b-1.2-6 (edge and
> offline constraints favouring a small model).

### Task Statement 1.3 — Describe the AI/ML development lifecycle (6 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.3-1 | Naming the stages of an AI/ML pipeline and telling adjacent stages apart | *AI/ML pipeline*, *exploratory data analysis [EDA]*, *data pre-processing*, *feature engineering*, *model training*, *hyperparameter tuning*, *evaluation*, *deployment*, *monitoring* |
| b-1.3-2 | Where a foundation model comes from: reuse versus build | *open source pre-trained models*, *training custom models* |
| b-1.3-3 | How a model is served, and what each option makes you responsible for | *managed API service*, *self-hosted API* |
| b-1.3-4 | Which AWS service belongs at which pipeline stage | *Amazon Bedrock*, *Amazon Q*, *Amazon Quick*, *Kiro*, *SageMaker AI* |
| b-1.3-5 | MLOps as repeatability rather than tooling | *MLOps*, *experimentation*, *repeatable processes*, *scalable systems*, *managing technical debt*, *production readiness* |
| b-1.3-6 | Why a deployed model degrades and what the response is | *model monitoring*, *model re-training* |
| b-1.3-7 | Choosing a model-performance metric that fits the task type | *accuracy*, *precision*, *recall*, *F1 score* |
| b-1.3-8 | Business metrics as the other half of evaluation | *cost per user*, *development costs*, *customer feedback*, *return on investment [ROI]* |
| b-1.3-9 | Reading the training/production performance gap | *fit* (over- and under-) |

> **Practice-source coverage: partial.** Both sources cover b-1.3-1, b-1.3-6 and b-1.3-9;
> `declute-serverside` covers b-1.3-7 well (threshold-independent versus single-operating-point
> metrics) and adds a feature-store concept that is *below* this blueprint's altitude. Neither
> covers b-1.3-3 (**managed versus self-hosted serving**) or b-1.3-8 as a paired judgment.

---

## Domain 2 · Fundamentals of GenAI (24%)

### Task Statement 2.1 — Explain the basic concepts of generative AI (6 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.1-1 | The unit a model reads and bills in | *tokens* |
| b-2.1-2 | Splitting a document for retrieval, and why the split size matters | *chunking* |
| b-2.1-3 | Meaning as geometry — what an embedding is, distinct from what stores it | *embeddings*, *vectors* |
| b-2.1-4 | Shaping model behaviour through the input rather than the weights | *prompt engineering* |
| b-2.1-5 | The architecture family behind current LLMs | *transformer-based large language models [LLMs]* |
| b-2.1-6 | What makes a model "foundation" — pre-trained breadth, adaptable to many tasks | *foundation models [FMs]* |
| b-2.1-7 | Choosing a model family by modality | *multi-modal models*, *diffusion models* |
| b-2.1-8 | Recognising GenAI use cases by "new artefact produced" | *image, video, and audio generation*, *summarization*, *AI assistants*, *translation*, *code generation*, *customer service agents*, *search*, *recommendation engines* |
| b-2.1-9 | The FM lifecycle and the order of its stages | *data selection*, *model selection*, *pre-training*, *fine-tuning*, *evaluation*, *deployment*, *feedback* |
| b-2.1-10 | How token pricing turns prompt design into a cost decision | *token-based pricing model*, *inference* |
| b-2.1-11 | Assembling and prioritising what goes into a model call — distinct from prompt engineering and from fine-tuning | *context engineering* |
| b-2.1-12 | Agentic building blocks: what an agent adds beyond an FM call | *tool usage*, *memory management*, *workflow orchestration* |
| b-2.1-13 | Multi-agent structure and communication | *multi-agent system patterns*, *multi-agent communication patterns* |
| b-2.1-14 | The open protocol that connects agents to external systems | *Model Context Protocol [MCP]* |

> **Practice-source coverage: thin and dated.** Both sources cover b-2.1-1, b-2.1-4 and b-2.1-6;
> `declute-serverside` covers b-2.1-8. **Nothing in either source tests b-2.1-10 through b-2.1-14**
> — the entire v1.1 agentic/context/pricing block, which is ~24% of this task statement's
> objectives and sits in the heaviest-weighted half of the exam. This is the largest single coverage
> gap in the build and it is exactly where the Tier-1 official set (pending access) would help most.

### Task Statement 2.2 — Capabilities and limitations of GenAI for business problems (4 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.2-1 | Why GenAI generalises where rule systems need rewriting | *adaptability*, *responsiveness*, *conversational capabilities*, *ability to generate content* |
| b-2.2-2 | Confident wrongness as a first-class failure mode | *hallucinations*, *inaccuracy* |
| b-2.2-3 | Why the same prompt need not give the same answer, and what that costs | *nondeterminism* |
| b-2.2-4 | Why an FM's reasoning is hard to account for | *interpretability* |
| b-2.2-5 | Selecting a model against competing constraints rather than one score | *model types*, *performance requirements*, *capabilities*, *constraints*, *compliance*, *cost*, *latency*, *model complexity* |
| b-2.2-6 | Measuring a GenAI application in business terms | *cross-domain performance*, *ROI*, *efficiency*, *conversion rate*, *average revenue per user*, *accuracy*, *customer lifetime value* |

> **Practice-source coverage: partial.** Hallucination (b-2.2-2) is covered by both sources — it is
> the most reliably tested GenAI limitation. `declute-serverside` covers b-2.2-1 indirectly.
> **Nondeterminism (b-2.2-3) and the multi-constraint selection judgment (b-2.2-5) are untested by
> both**, despite b-2.2-5 being the natural home of scenario items.

### Task Statement 2.3 — AWS infrastructure and technologies for GenAI applications (4 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.3-1 | Which AWS service to reach for when building a GenAI application | *Amazon Bedrock*, *Amazon SageMaker AI*, *SageMaker JumpStart*, *Amazon Quick*, *Kiro*, *Strands Agents*, *Amazon Bedrock AgentCore* |
| b-2.3-2 | Why a managed GenAI service beats self-assembly for a team without ML infrastructure | *accessibility*, *lower barrier to entry*, *efficiency*, *cost-effectiveness*, *speed to market* |
| b-2.3-3 | What the platform provides that a self-built stack would have to earn | *security*, *compliance*, *responsibility*, *safety* |
| b-2.3-4 | Reading a GenAI cost/benefit trade-off | *responsiveness*, *availability*, *redundancy*, *performance*, *regional coverage*, *token-based pricing*, *provisioned throughput*, *custom models* |

> **Practice-source coverage: partial.** Both sources identify Amazon Bedrock (b-2.3-1) and
> `jwalsh-aif` covers b-2.3-2. `declute-serverside` is the only source to test b-2.3-4 (provisioned
> throughput under load). Neither names **Kiro, Strands Agents, Amazon Quick or AgentCore** — all
> v1.1 additions; `declute-serverside` does test Agents for Amazon Bedrock, the predecessor framing.

---

## Domain 3 · Applications of Foundation Models (28%)

### Task Statement 3.1 — Design considerations for applications that use FMs (6 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.1-1 | Selecting an FM against the requirement that dominates | *cost*, *modality*, *latency*, *multi-lingual*, *model size*, *model complexity*, *customization*, *input/output length* |
| b-3.1-2 | Reusing a repeated prompt prefix to cut cost and latency | *prompt caching* |
| b-3.1-3 | Which inference parameter moves which property of the output | *temperature*, *input/output length* |
| b-3.1-4 | What RAG is and which business problem it solves | *Retrieval Augmented Generation (RAG)*, *Amazon Bedrock Knowledge Bases* |
| b-3.1-5 | Where embeddings live on AWS | *Amazon OpenSearch Service*, *Amazon Aurora*, *Amazon Neptune*, *Amazon RDS for PostgreSQL* |
| b-3.1-6 | Ranking customization approaches by cost and effort | *pre-training*, *fine-tuning*, *in-context learning*, *RAG*, *model distillation* |
| b-3.1-7 | What an agent is for, in business terms | *AI agents* |

> **Practice-source coverage: strong.** Both sources cover b-3.1-4 and b-3.1-5; both cover b-3.1-3
> (temperature). `declute-serverside` covers b-3.1-6 as an ordering-of-complexity item and b-3.1-7.
> **b-3.1-2 (prompt caching) is v1.1-only and untested by both.**

### Task Statement 3.2 — Choose effective prompt engineering techniques (5 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.2-1 | The parts a prompt is built from | *context*, *instruction*, *negative prompts* |
| b-3.2-2 | Naming a prompting technique from a described setup | *chain-of-thought*, *zero-shot*, *single-shot*, *few-shot*, *prompt templates* |
| b-3.2-3 | What good prompting buys, and how you get there | *response quality improvement*, *experimentation*, *discovery*, *specificity and concision* |
| b-3.2-4 | Constraining model behaviour at the boundary of the prompt | *guardrails* |
| b-3.2-5 | Adversarial prompt risks, told apart by their objective | *exposure*, *poisoning*, *hijacking*, *jailbreaking* |
| b-3.2-6 | Treating prompts as versioned artefacts | *prompt versioning*, *Amazon Bedrock Prompt Management* |

> **Practice-source coverage: partial.** Both cover b-3.2-2 (few-shot); `declute-serverside` adds
> Top-K/Top-P precision and the prompt-technique-versus-tool-call distinction. **b-3.2-5 is covered
> only at the prompt-injection level** — the four risks are not distinguished from each other in
> either source, and **b-3.2-6 (v1.1) is untested by both**.

### Task Statement 3.3 — Training and fine-tuning process for FMs (3 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.3-1 | The four ways a model's weights get changed, and what each is for | *pre-training*, *fine-tuning*, *continuous pre-training*, *distillation* |
| b-3.3-2 | Fine-tuning variants named by their objective | *instruction tuning*, *adapting models for specific domains*, *transfer learning* |
| b-3.3-3 | What fine-tuning data must look like | *data curation*, *governance*, *size*, *labeling*, *representativeness* |
| b-3.3-4 | Learning from human preference rather than labels | *reinforcement learning from human feedback [RLHF]* |

> **Practice-source coverage: strong.** Both sources cover b-3.3-1 and b-3.3-3;
> `declute-serverside` covers b-3.3-2 (domain adaptation versus continued pre-training) and RLHF as
> a distractor. This is the best-converged task statement in the build.

### Task Statement 3.4 — Methods to evaluate FM performance (5 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.4-1 | Choosing an evaluation approach when the quality criterion is subjective | *human-in-the-loop evaluation*, *benchmark datasets*, *Amazon Bedrock Model Evaluation* |
| b-3.4-2 | Matching a generation metric to what it actually measures | *Recall-Oriented Understudy for Gisting Evaluation [ROUGE]*, *Bilingual Evaluation Understudy [BLEU]*, *BERTScore* |
| b-3.4-3 | Using a model as the grader | *LLM-as-a-judge* |
| b-3.4-4 | Deciding whether the model serves the business, not the benchmark | *productivity*, *user engagement*, *task engineering* |
| b-3.4-5 | Evaluating the *application* rather than the model | *RAG*, *agents*, *workflows* |
| b-3.4-6 | Business-alignment metrics for an AI application | *task completion rate*, *user satisfaction*, *cost per interaction* |

> **Practice-source coverage: partial.** ROUGE/BLEU/BERTScore (b-3.4-2) are covered by
> `declute-serverside` and heavily by the excluded dump corpus; b-3.4-1 and b-3.4-4 appear in
> `declute-serverside`. **b-3.4-3 (LLM-as-a-judge), b-3.4-5 (evaluating RAG/agent applications) and
> b-3.4-6 (business-alignment metrics) are v1.1 additions untested by both sources.**

---

## Domain 4 · Guidelines for Responsible AI (14%)

### Task Statement 4.1 — Explain the development of AI systems that are responsible (7 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.1-1 | The named dimensions of responsible AI | *bias*, *fairness*, *inclusivity*, *robustness*, *safety*, *veracity* |
| b-4.1-2 | The AWS control that enforces content and topic policy on model output | *Amazon Bedrock Guardrails* |
| b-4.1-3 | Model choice as an environmental decision | *environmental considerations*, *sustainability* |
| b-4.1-4 | The legal exposure GenAI creates | *intellectual property infringement claims*, *biased model outputs*, *loss of customer trust*, *end user risk*, *hallucinations* |
| b-4.1-5 | What a responsible dataset looks like | *inclusivity*, *diversity*, *curated data sources*, *balanced datasets* |
| b-4.1-6 | Bias and variance as the mechanism behind unfair and inaccurate models | *overfitting*, *underfitting*, *effects on demographic groups*, *inaccuracy* |
| b-4.1-7 | How bias is actually detected in practice | *analyzing label quality*, *human audits*, *subgroup analysis*, *Amazon Augmented A I [Amazon A2I]* |

> **Practice-source coverage: partial.** Both sources cover b-4.1-1 (fairness) and b-4.1-2;
> `declute-serverside` covers b-4.1-7 well (subgroup analysis of uneven per-division accuracy) and
> b-4.1-4 indirectly. **b-4.1-3 (sustainability) is untested by both** despite being an easy,
> distinctive item. Note: both sources reach for *SageMaker Clarify* as the bias tool — the guide
> names Clarify only under objective 4.2.2 (v1.1) and names **Amazon A2I** here.

### Task Statement 4.2 — Transparent and explainable models (4 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.2-1 | What makes a model transparent or explainable, and what does not | *transparent*, *explainable* |
| b-4.2-2 | The artefacts and tools that carry explainability | *Amazon SageMaker Model Cards*, *SageMaker Clarify*, *Amazon Bedrock Model Evaluations*, *open source models*, *data*, *licensing* |
| b-4.2-3 | The trade-off between safety and transparency | *interpretability*, *performance* |
| b-4.2-4 | Designing the human side of an explainable system | *human-centered design*, *user-feedback mechanisms*, *AI decision transparency* |

> **Practice-source coverage: strong on b-4.2-1/2, absent on the rest.** Both sources cover model
> cards. **b-4.2-3 (the safety/transparency trade-off) is untested by both** — and, being a genuine
> trade-off, it is the highest-value diagnostic seed in this domain.

---

## Domain 5 · Security, Compliance, and Governance for AI Solutions (14%)

### Task Statement 5.1 — Methods to secure AI systems (5 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-5.1-1 | Access control as the first AI security control | *IAM roles, policies, and permissions* |
| b-5.1-2 | Encryption of data and model artefacts, and who holds the key | *encryption*, *encryption at rest and in transit* |
| b-5.1-3 | Finding sensitive data before it reaches a model | *Amazon Macie* |
| b-5.1-4 | Keeping model traffic off the public internet | *AWS PrivateLink* |
| b-5.1-5 | Who is responsible for what, in an AI context | *AWS shared responsibility model* |
| b-5.1-6 | Identity and policy for agents specifically | *Amazon Bedrock AgentCore Identity*, *Policy in AgentCore* |
| b-5.1-7 | Output-side enforcement | *Amazon Bedrock Guardrails* |
| b-5.1-8 | Knowing where an answer came from | *source citation*, *data lineage*, *data cataloging*, *Amazon SageMaker Model Cards* |
| b-5.1-9 | Secure data engineering practices | *data quality*, *privacy-enhancing technologies*, *data access control*, *data integrity* |
| b-5.1-10 | Application and infrastructure security around the model | *application security*, *threat detection*, *vulnerability management*, *infrastructure protection* |
| b-5.1-11 | The GenAI-native attack, and the controls that actually stop it | *prompt injection* |
| b-5.1-12 | Preventing the model from emitting what it should not | *data leakage prevention*, *output filtering and validation*, *toxicity* |
| b-5.1-13 | Recording AI interactions for audit | *audit trail and logging requirements for AI interactions* |
| b-5.1-14 | Catching a hallucination before the user does | *hallucination detection*, *grounding*, *RAG grounding*, *output validation*, *confidence scoring* |

> **Practice-source coverage: partial.** Both sources cover b-5.1-1, b-5.1-2 and b-5.1-3;
> `jwalsh-aif` covers b-5.1-11. **b-5.1-6 (AgentCore Identity/Policy), b-5.1-12, b-5.1-13 and
> b-5.1-14 are all v1.1 additions untested by both sources** — a second concentration of v1.1 gaps,
> in the domain where the guide expanded most.

### Task Statement 5.2 — Governance and compliance regulations for AI systems (3 objectives)

| id | Concept | Vocabulary |
|---|---|---|
| b-5.2-1 | Which AWS service answers which governance question | *AWS Config*, *Amazon Inspector*, *AWS Artifact*, *AWS CloudTrail*, *AWS Trusted Advisor* |
| b-5.2-2 | Data governance as a lifecycle discipline | *data lifecycles*, *logging*, *residency*, *monitoring*, *observation*, *retention* |
| b-5.2-3 | The named framework for scoping GenAI security responsibility | *Generative AI Security Scoping Matrix* |
| b-5.2-4 | How governance is actually operated | *policies*, *review cadence*, *review strategies*, *transparency standards*, *team training requirements* |

> **Practice-source coverage: weak.** `declute-serverside` covers b-5.2-1 (Trusted Advisor) and
> `jwalsh-aif` covers b-5.2-2 — but `jwalsh-aif` keys a compliance item to **AWS Audit Manager**,
> which is **not on the in-scope service list**; that item is off-blueprint and must not propagate
> into the inventory. **b-5.2-3 (the Scoping Matrix) is untested by both accessible sources** even
> though the guide names it explicitly — it appears only in the excluded dump corpus, which is a
> signal it is genuinely examined.

---

## The named-risk register

The guide names failure modes rather than leaving them implicit. Each is a high-value
diagnostic-item seed, because each names a specific way a competent-looking design fails.

| Named risk | Objective | Diagnostic question shape |
|---|---|---|
| *hallucinations* | 2.2.2, 4.1.4, 5.1.5 | output is fluent, confident and wrong — which control catches it *before* the user sees it (grounding/validation/confidence scoring), rather than which control makes it rarer |
| *nondeterminism* | 2.2.2 | a workflow assumes a repeatable answer; what breaks, and what does the team change |
| *interpretability* / opacity | 2.2.2, 4.2.1 | a regulated decision must be explained; which property of the model decides whether it can be |
| *overfitting* / *underfitting* | 4.1.6 | training score and production score diverge (or both are poor) — read the gap, then act |
| bias effects on *demographic groups* | 4.1.6, 4.1.7 | aggregate accuracy looks fine; per-subgroup accuracy does not — how is that discovered |
| *intellectual property infringement claims* | 4.1.4 | generated output resembles protected work — name the risk class, choose the mitigation |
| *prompt injection* | 5.1.4 | untrusted text carries instructions; which layer stops it |
| *poisoning*, *hijacking*, *jailbreaking*, *exposure* | 3.2.4 | four adversarial prompt risks told apart by attacker objective, not by mechanism |
| *data leakage* | 5.1.4 | confidential data already reached the model — which remedies actually work (retrain on cleaned data) versus which only look like they do (encrypt/mask the output) |
| *toxicity* | 5.1.4 | harmful output as a filtering and policy problem |
| loss of *veracity* / grounding failure | 4.1.1, 5.1.5 | answer is unsupported by any source document |
| *end user risk*, *loss of customer trust* | 4.1.4 | the business consequence of shipping the above |

**The strongest seed in the set** is *data leakage after training* (5.1.4 with 3.3.3): the family of
"encrypt it / mask it / guardrail it" responses is exactly the plausible-looking wrong answer, and
the correct action — remove the data and retrain — is unpopular and therefore diagnostic.

## Concepts this source holds that no accessible practice source tests

Carried into the master inventory as blueprint-only entries (S3 will mark them single-source,
lower-confidence per `methodology/02-master-inventory.md#single-source`):

- **The whole v1.1 agentic block** — b-2.1-11 through b-2.1-14 (context engineering, tool use,
  memory, orchestration, multi-agent patterns, MCP) and b-5.1-6 (AgentCore Identity/Policy)
- **Token economics** — b-2.1-10 (token-based pricing), b-3.1-2 (prompt caching), b-2.3-4
  (provisioned throughput as a cost lever)
- **Evaluation of applications rather than models** — b-3.4-3 (LLM-as-a-judge), b-3.4-5,
  b-3.4-6
- **The v1.1 security expansion** — b-5.1-12 (data leakage prevention, output filtering, toxicity),
  b-5.1-13 (audit trail for AI interactions), b-5.1-14 (hallucination detection and grounding)
- **Judgment concepts with no service attached** — b-1.2-2 (when AI is *not* appropriate), b-4.1-3
  (sustainability in model selection), b-4.2-3 (safety versus transparency), b-5.2-3 (Generative AI
  Security Scoping Matrix), b-1.3-3 (managed versus self-hosted serving)

These are also, not coincidentally, the concepts a candidate is least likely to have drilled — which
makes them the highest-value items in the bank, and the reason a blueprint-first build beats a
practice-set-first build for this exam.

## Concepts other sources hold that this source does not spell out

`declute-serverside` tests several ideas one level below the blueprint's altitude (SageMaker Feature
Store, Kinesis Data Streams ingestion, one-hot encoding and standardisation as feature engineering,
p95 latency under a stated request rate). The guide's out-of-scope job-task list explicitly excludes
data/feature engineering and pipeline construction, so these are **off-blueprint and must not enter
the inventory** — recorded here so the reconciliation in `master-inventory.md` shows the decision
was made rather than missed.
