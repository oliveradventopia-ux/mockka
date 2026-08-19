# Artefact B · Google Cloud Digital Leader exam guide concepts

**What this is.** The Cloud Digital Leader exam guide states **69 “considerations include”
bullets across 14 objectives in 6 sections**. Most bullets carry more than one testable idea —
many are bare lists of example terms, where each term is separately examinable. This document
splits each bullet into its constituent concepts and records the **canonical vocabulary** attached
to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where a practice
source records what an author *believed* is tested, this records what the vendor's blueprint
*actually declares* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the exam guide. That is deliberate and is the only verbatim
content permitted in any artefact (`methodology/01-source-distillation.md#clean-room`): a question
that uses the guide's own terms lets a candidate trace a missed item straight back to the
objective. No bullet prose, no example sentences and no product descriptions are reproduced — only
the terms themselves.

> Source: `gcp-cdl-guide` in [sources.md](sources.md) — exam guide footer *“launched on
> August 12, 2026”*, read in full 2026-08-16. Credited in the exam README.

## Guide structure → exam domain mapping

The mapping is 1:1 — the guide *is* the blueprint, so its sections are the manifest's domains and
no reconciliation is needed. What needs recording is the objective layer beneath each section,
because that is the level the concept inventory is built at and the level a per-item “concept
tested” claim should resolve to.

| Guide section | Manifest domain | Weight | Objectives | Bullets |
|---|---|---|---|---|
| Section 1 · Digital Transformation with Google Cloud | `d1` | ~18% | 1.1, 1.2 | 8 |
| Section 2 · Exploring Data Transformation with Google Cloud | `d2` | ~18% | 2.1, 2.2, 2.3 | 14 |
| Section 3 · Innovating with Google Cloud Artificial Intelligence | `d3` | ~18% | 3.1, 3.2 | 12 |
| Section 4 · Modernize Infrastructure and Applications with Google Cloud | `d4` | ~18% | 4.1, 4.2, 4.3 | 10 |
| Section 5 · Trust and Security with Google Cloud | `d5` | ~18% | 5.1, 5.2 | 15 |
| Section 6 · Scaling with Google Cloud Operations | `d6` | ~10% | 6.1, 6.2 | 10 |
| — | — | **100%** | **14** | **69** |

Three structural facts that shape authoring, all stated or implied by the guide:

1. **The candidate articulates; they do not build.** Every objective verb is *explain, describe,
   define, recognize, identify, differentiate, discuss, determine, match*. Not one is *configure,
   deploy, implement, optimise* or *troubleshoot*. An item whose key requires performing an
   operation — sizing a disk, writing a query, choosing a machine type — is off-blueprint no
   matter how cloud-flavoured it looks. This is the single most useful filter for this exam,
   because it is exactly the line both accessible practice sources cross.
2. **The named product list is the answer space.** The guide names roughly 60 Google Cloud
   products and features across its bullets. Distractors drawn from **that list** are fair;
   distractors naming products absent from it (App Engine, Cloud Debugger, Cloud Asset Inventory,
   Secret Manager, Container Registry, Anthos, Dataproc, Recommendations AI, Natural Language AI,
   Dialogflow, Memorystore, Filestore, Local SSD, persistent-disk types) are off-blueprint —
   a prepared candidate has never been told to know them.
3. **Business value is the recurring predicate.** “Business value”, “business use case” and
   “business problem” appear across every section. The keyed answer is usually not *what the
   product is* but *what it buys the organisation*. This is what separates a Digital Leader item
   from an Associate Cloud Engineer item, and it is the axis on which both accessible practice
   sources are weakest.

**Product and concept vocabulary named in the guide, verbatim, as the authoring answer space.**
*(Data)* Cloud Storage, Spanner, Cloud SQL, AlloyDB, Bigtable, BigQuery, Firestore, Looker,
Pub/Sub, Dataflow, Managed Service for Apache Spark, BigQuery ML · *(Storage classes)* Standard,
Nearline, Coldline, Archive, Autoclass · *(AI)* Gemini, Gemini Enterprise Agent Platform, Agent
Platform API, Vision API, Cloud Translation API, Speech-to-Text API, Agent Studio on Agent
Platform, AutoML on Agent Platform, AI Hypercomputer, GPUs and TPUs · *(Compute/apps)* Compute
Engine, GKE, GKE Enterprise, Cloud Run, Cloud Run functions, Kubernetes, spot VMs, Apigee API
Management · *(Hybrid/multicloud)* AlloyDB Omni, BigQuery Omni, Cloud SQL, Looker · *(Security)*
Security Command Center, Google Security Operations, Gemini in Google Security Operations, AI
Protection, Model Armor, Google Threat Intelligence, Mandiant, VirusTotal, Cloud VPC, Cloud VPN,
Cloud Interconnect, firewalls, Cloud Armor, Cloud Logging, IAM, Sensitive Data Protection,
Confidential Computing, Certificate Manager, Identity-Aware Proxy, compliance resource manager ·
*(Operations)* Google Cloud Observability, operations suite, Cloud Monitoring, Cloud Logging,
Cloud Trace, Cloud Profiler, Error Reporting, Cloud Billing reports, Dynamic Workload Scheduler,
Spot VMs.

**Version-delta note.** Google publishes no change-history table for this guide, so no
objective-level diff is available `[UNVERIFIED]`. What *is* observable by comparing the current
guide against the outline both accessible practice sources are organised under: the exam moved
from a **three-area** outline (general cloud knowledge / general Google Cloud knowledge / Google
Cloud products and services) to **six weighted sections**, and a whole section (S3, Innovating
with AI, ~18%) now exists that had no counterpart. The 2026 surface — *agentic AI*, *Gemini
Enterprise Agent Platform*, *AI Hypercomputer*, *Model Armor*, *AI Protection*, *Google Threat
Intelligence*, *data supply chain*, *Autoclass*, *AlloyDB Omni*, *BigQuery Omni*, *Dynamic
Workload Scheduler*, *Managed Service for Apache Spark*, *digital sovereignty* — is new relative
to every accessible practice source. Any concept sourced from a pre-2026 practice set is suspect
on two axes: it may test a dropped objective, and it may name a product that has been renamed or
has left the list.

---

## Domain 1 · Digital Transformation with Google Cloud (~18%)

### Objective 1.1 — Explain why and how the cloud is revolutionizing businesses (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.1-1 | Telling the foundational terms apart — what each names and what it does not | *cloud*, *infrastructure*, *digital transformation* |
| b-1.1-2 | What makes AI *agentic* rather than a single model call | *agentic AI* |
| b-1.1-3 | Openness as two distinct commitments: the code and the specification | *open source*, *open standard* |
| b-1.1-4 | Matching a stated business pain to the cloud property that relieves it | *scalability*, *cost-effectiveness*, *agility*, *speed*, *flexibility* |
| b-1.1-5 | Reach and resilience as a benefit pair, distinct from raw capacity | *global reach and high availability* |
| b-1.1-6 | Cloud benefits that are not about cost or capacity at all | *enhanced security*, *data-driven insights*, *strategic value and focus* |
| b-1.1-7 | What actually compels an organisation to transform — the drivers, not the technology | *factors that motivate organizations to transform* |
| b-1.1-8 | The hurdles that stall transformation programmes | *common hurdles that can affect transformation* |
| b-1.1-9 | The cost of standing still, stated as risk | *implications and risks of not adopting cloud* |
| b-1.1-10 | What Google claims as its differentiators, and which claim answers which question | *world-leading AI*, *deep commitment to openness and interoperability*, *AI Hypercomputer*, *AI-ready data platform*, *security*, *global network* |

> **Practice-source coverage: weak.** `gcp-cdl-samples` covers b-1.1-4/b-1.1-6 once, obliquely
> (developers freed from on-premises limits). `whizlabs-cdl-free` covers none of this objective.
> **b-1.1-2 (agentic AI), b-1.1-3, b-1.1-7/8/9 and the whole of b-1.1-10 are untested by both** —
> and b-1.1-10 is a pure-recall concept the guide hands you verbatim, i.e. cheap, distinctive
> items that nobody else writes.

### Objective 1.2 — Describe fundamental cloud concepts (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.2-1 | Choosing a deployment model from a stated constraint — tenancy, control, regulatory pinning | *private cloud*, *hybrid cloud*, *multicloud* |
| b-1.2-2 | The networking primitives a non-engineer must still name correctly | *IP address*, *domain name service (DNS)*, *basic IP addresses* |
| b-1.2-3 | The two network properties that get confused with each other | *latency*, *bandwidth* |
| b-1.2-4 | The tiers of Google's physical geography, and what each guarantees | *regions*, *zones*, *edge locations* |
| b-1.2-5 | Reading a service model from who is responsible for what | *Infrastructure as a Service (IaaS)*, *Platform as a Service (PaaS)*, *Software as a Service (SaaS)* |
| b-1.2-6 | Service-model trade-offs — control traded against operational burden | *benefits and tradeoffs* |

> **Practice-source coverage: strong — the best-converged objective in the build.** Both sources
> cover b-1.2-1 (`gcp-cdl-samples` hybrid and public-cloud items; `whizlabs-cdl-free` private
> cloud) and b-1.2-5 (`whizlabs-cdl-free` twice, via PaaS classification and OS-patching
> responsibility). `whizlabs-cdl-free` alone covers b-1.2-4 twice. **b-1.2-2 and b-1.2-3 are
> untested by both**, and b-1.2-3 in particular (latency versus bandwidth) is a classic
> discrimination item.

---

## Domain 2 · Exploring Data Transformation with Google Cloud (~18%)

### Objective 2.1 — The intrinsic role data plays in digital transformation (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.1-1 | Why data has value, expressed as four different business outcomes | *generating real-time business insights*, *identifying trends*, *informing strategic decision making*, *fueling AI* |
| b-2.1-2 | Telling the three storage archetypes apart by what they accept and what they answer | *databases*, *data warehouses*, *data lakes* |
| b-2.1-3 | Classifying data by where it came from | *first-party*, *second-party*, *third-party* |
| b-2.1-4 | Classifying data by how much shape it carries | *structured*, *unstructured*, *semi-structured* |
| b-2.1-5 | The stages data passes through, and telling adjacent stages apart | *data supply chain*, *data genesis*, *data collection*, *data processing*, *data storage*, *data analysis*, *data activation* |
| b-2.1-6 | What data governance is as a process, and the consequence of not having it | *data governance process* |
| b-2.1-7 | Openness as the antidote to two named failure modes | *openness and interoperability*, *data silos*, *vendor lock-in* |

> **Practice-source coverage: thin.** `gcp-cdl-samples` covers b-2.1-2 once (data lake against
> warehouse/database/mesh) — a clean discrimination item. **b-2.1-1, b-2.1-3, b-2.1-5, b-2.1-6 and
> b-2.1-7 are untested by both sources.** The *data supply chain* (b-2.1-5) is a named,
> six-stage, ordered concept the guide hands you outright and no accessible source touches — the
> highest-value untouched seed in this domain.

### Objective 2.2 — Which data management products suit which business use case (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.2-1 | Matching a workload shape to the right managed data product | *Cloud Storage*, *Spanner*, *Cloud SQL*, *AlloyDB*, *Bigtable*, *BigQuery*, *Firestore* |
| b-2.2-2 | The data-model vocabulary that decides which product is even eligible | *relational*, *non-relational*, *object storage*, *structured query language [SQL]*, *NoSQL* |
| b-2.2-3 | Choosing a storage class from access frequency, not from size | *Standard*, *Nearline*, *Coldline*, *Archive* |
| b-2.2-4 | Letting the platform pick the class when access patterns are unknown | *Autoclass* |
| b-2.2-5 | The routes a database takes into the cloud, and which one a constraint forces | *migrate or modernize their current database* |

> **Practice-source coverage: partial.** `gcp-cdl-samples` covers b-2.2-1 twice (Spanner for
> globally consistent transactional growth; Cloud Storage for files and media) and
> `whizlabs-cdl-free` once (Firestore as a serverless document store) — genuine convergence on
> product selection. **b-2.2-3 and b-2.2-4 (storage classes, Autoclass) are untested by both**,
> despite storage-class choice being the most mechanical, most reliably examinable item shape in
> the whole domain. b-2.2-5 is untested by both.

### Objective 2.3 — Smart analytics, BI tools and streaming analytics (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.3-1 | What “democratising data” actually means as a business outcome | *Looker*, *democratizes access to data* |
| b-2.3-2 | What you gain by putting BI on top of the warehouse rather than beside it | *real-time reports*, *dashboards*, *integrating data into workflows*, *BigQuery* |
| b-2.3-3 | Why a business needs answers before the batch window closes | *real-time streaming analytics* |
| b-2.3-4 | Which product occupies which stage of a modern data pipeline | *Pub/Sub*, *Dataflow*, *Managed Service for Apache Spark* |

> **Practice-source coverage: partial.** `gcp-cdl-samples` covers b-2.3-1 (Looker as the BI
> answer) and b-2.3-4 (Pub/Sub as the ingestion answer, with Dataflow as the near-neighbour
> distractor — the sharpest item in the official set). **b-2.3-2 and b-2.3-3 are untested by
> both**, and *Managed Service for Apache Spark* appears in no source but the guide.

---

## Domain 3 · Innovating with Google Cloud Artificial Intelligence (~18%)

### Objective 3.1 — Fundamental AI/ML concepts and the business value they create (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.1-1 | The field hierarchy — which term contains which | *artificial intelligence (AI)*, *machine learning (ML)*, *generative AI (gen AI)* |
| b-3.1-2 | Telling analysis of the past from generation of the new | *data analytics*, *business intelligence* |
| b-3.1-3 | Where agentic AI changes the work, named function by function | *workforce productivity*, *customer support*, *sales experiences*, *product innovation*, *operations*, *research* |
| b-3.1-4 | Google's claimed AI advantages, and which claim answers which question | *best infrastructure for AI*, *AI-ready data cloud*, *sophisticated 1P models*, *all-in-one AI developer platform*, *pre-built AI agents and applications* |
| b-3.1-5 | Recognising the business problems ML is the right tool for | *replacing or simplifying rule-based systems*, *deriving business insights from large datasets*, *scaling business decisions* |
| b-3.1-6 | Naming the dimension of data quality a described defect violates | *completeness*, *uniqueness*, *timeliness*, *validity*, *accuracy*, *consistency* |
| b-3.1-7 | Why an organisation cannot ship an AI system it cannot explain or defend | *explainable and responsible AI*, *business implications* |

> **Practice-source coverage: almost none — the worst gap in the build.** `gcp-cdl-samples` covers
> b-3.1-7 once, in a responsible-use framing that predates the current guide's wording.
> `whizlabs-cdl-free` covers none of this objective. **b-3.1-1 through b-3.1-6 are entirely
> untested by both sources**, including the six named data-quality dimensions (b-3.1-6), which
> the guide enumerates and which are ideal, unambiguous item material. Section 3 carries ~18% of
> the paper and is the section the 2026 rewrite created; the accessible practice sources
> contribute essentially nothing to it.

### Objective 3.2 — How Google Cloud's AI offerings create business value (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.2-1 | Choosing an AI approach against the constraint that dominates | *implementation speed*, *development effort*, *potential for business differentiation*, *technical expertise requirements*, *choice and flexibility* |
| b-3.2-2 | What the agent platform is for, in business terms | *Gemini Enterprise Agent Platform* |
| b-3.2-3 | Matching a pre-trained API to the modality the use case needs | *Agent Platform API*, *Vision API*, *Cloud Translation API*, *Speech-to-Text API*, *Gemini* |
| b-3.2-4 | Building on your own data — and which route suits which level of expertise | *Agent Studio on Agent Platform*, *AutoML on Agent Platform* |
| b-3.2-5 | What the AI infrastructure layer is made of, and what it buys | *AI Hypercomputer*, *GPUs and TPUs*, *industry-leading software and open standards*, *cost control with flexible consumption models* |
| b-3.2-6 | Running ML where the data already lives, in the language analysts already speak | *BigQuery ML*, *standard SQL queries* |

> **Practice-source coverage: nominal, and dated where it exists.** Both sources have exactly one
> item each in this territory: `gcp-cdl-samples` keys custom model building to **Vertex AI**, and
> `whizlabs-cdl-free` keys text classification to **Natural Language AI**. Neither product is
> named in the current guide, which routes the same concepts through *Agent Studio on Agent
> Platform* / *AutoML on Agent Platform* and the *Agent Platform API*. **The concepts transfer;
> the product names do not.** Carry the concept, drop the product. **b-3.2-1, b-3.2-2, b-3.2-5 and
> b-3.2-6 are untested by both.**

---

## Domain 4 · Modernize Infrastructure and Applications with Google Cloud (~18%)

### Objective 4.1 — How Google Cloud helps organizations transition to the cloud (2 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.1-1 | What gets migrated, and what the assessment step is for | *workload*, *discovery and assessment* |
| b-4.1-2 | Choosing a migration path from what the organisation will and will not change | *retire*, *retain*, *rehost [lift and shift]*, *replatform [move and improve]*, *refactor*, *reimagine* |
| b-4.1-3 | The compute abstractions, ordered by how much the customer still operates | *virtual machines (VMs)*, *containerization and containers*, *serverless computing*, *managed services* |
| b-4.1-4 | How an application is decomposed, and why | *applications and microservices* |
| b-4.1-5 | The orchestration and elasticity vocabulary | *Kubernetes*, *autoscaling and load balancing* |
| b-4.1-6 | Interruptible capacity as a cost lever, and what it costs you in return | *spot VMs* |

> **Practice-source coverage: partial.** `gcp-cdl-samples` covers b-4.1-2 cleanly (a
> no-code-change constraint keyed to rehost, with the other paths as distractors) — the single
> best-built item in the official set. Both sources touch b-4.1-3 through product-selection items.
> **b-4.1-1 (discovery and assessment), b-4.1-4, b-4.1-5 and b-4.1-6 (spot VMs) are untested by
> both** — note that *spot VMs* also appears in objective 6.1 as a consumption control, so it is
> a genuine cross-domain concept and S3 must place it deliberately.

### Objective 4.2 — Functionality, use cases and business value of infrastructure offerings (5 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.2-1 | When running your own VMs is still the right answer | *Compute Engine* |
| b-4.2-2 | What modern application development buys the business, stated as outcomes | *flexible architectures like microservices*, *accelerated deployment processes through managed services*, *cost optimization*, *enhanced scalability and resilience*, *improved operational efficiency* |
| b-4.2-3 | When managed Kubernetes is the right level of abstraction | *GKE* |
| b-4.2-4 | When you should not be thinking about servers at all | *Cloud Run*, *Cloud Run functions* |
| b-4.2-5 | Which products follow you off Google Cloud | *AlloyDB Omni*, *BigQuery Omni*, *GKE Enterprise*, *Cloud SQL*, *Looker* |

> **Practice-source coverage: strong on b-4.2-1/4, absent on the rest.** `gcp-cdl-samples` covers
> b-4.2-1 (VM migration to Compute Engine), b-4.2-4 twice (a language-and-tools requirement keyed
> to Cloud Run; an event-driven notification keyed to the functions product) and
> `whizlabs-cdl-free` covers b-4.2-4 once. Both name the functions product by its **pre-2026
> identity** — the guide now says *Cloud Run functions*. **b-4.2-2 (the business-value bullet, the
> most Digital-Leader-shaped content in the domain), b-4.2-3 and b-4.2-5 (the entire hybrid /
> multicloud product list) are untested by both.**

### Objective 4.3 — Business value of APIs (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.3-1 | What an API is, at a level a non-engineer can use | *application programming interface (API)* |
| b-4.3-2 | APIs as revenue, not as plumbing | *exposing and monetizing public-facing APIs*, *new business opportunities* |
| b-4.3-3 | What an API management layer adds beyond the API itself | *Apigee API Management* |

> **Practice-source coverage: partial.** `gcp-cdl-samples` covers b-4.3-1 well — a legacy-system
> integration scenario where the API is the connector — but **b-4.3-2 and b-4.3-3 are untested by
> both sources**, and *Apigee* appears nowhere outside the guide. API monetisation (b-4.3-2) is a
> pure business-value concept with a clean right answer, which makes it exactly the kind of item
> an originally-authored bank can own.

---

## Domain 5 · Trust and Security with Google Cloud (~18%)

### Objective 5.1 — Fundamental cloud security concepts (7 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-5.1-1 | Naming a threat from how it behaves and what it costs the business | *DDoS*, *ransomware*, *cryptomining*, *malware*, *viruses*, *phishing* |
| b-5.1-2 | Threats that are not attacks — the ones an organisation causes itself | *misconfiguration*, *unsecured third party systems*, *physical damage* |
| b-5.1-3 | The threat class the AI era added | *LLM attacks* |
| b-5.1-4 | What genuinely differs between securing the cloud and securing a data centre | *cloud security*, *on-premises security* |
| b-5.1-5 | The properties a security model is judged against | *control*, *compliance*, *confidentiality*, *integrity*, *availability* |
| b-5.1-6 | Access-discipline vocabulary, told apart by what each actually restricts | *privileged access*, *least privilege*, *zero-trust architecture* |
| b-5.1-7 | Posture vocabulary — the state of a system rather than a control on it | *security by default*, *security posture*, *cyber resilience* |
| b-5.1-8 | The mechanisms themselves, and what each does not protect | *data loss prevention*, *firewall*, *encryption*, *decryption* |
| b-5.1-9 | Matching an encryption control to the state the data is in | *in use*, *in transit*, *at rest* |
| b-5.1-10 | The three A's, told apart by the question each answers | *authentication*, *authorization*, *auditing* |
| b-5.1-11 | The identity controls that implement them | *multi-factor authentication*, *two-step verification [2SV]*, *IAM* |
| b-5.1-12 | Security operations as a discipline with named stages | *security posture*, *threat intelligence*, *threat response* |

> **Practice-source coverage: partial and shallow.** `gcp-cdl-samples` covers b-5.1-5
> (confidentiality against the other properties), b-5.1-1 (a silent-theft threat keyed to
> malware), b-5.1-11 (access control keyed to IAM) and, obliquely, b-5.1-8 (encryption by
> default). `whizlabs-cdl-free` covers b-5.1-11 once, at role-granting mechanics.
> **b-5.1-2, b-5.1-3 (LLM attacks), b-5.1-4, b-5.1-6, b-5.1-7, b-5.1-9 and b-5.1-12 are untested
> by both.** b-5.1-3 and b-5.1-12 are 2026 additions; b-5.1-9 (encryption by data state) is a
> three-way discrimination the guide sets up explicitly and nobody uses.

### Objective 5.2 — Google as part of the security team: defense in depth (8 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-5.2-1 | The layers of the AI stack that each need securing | *infrastructure*, *data*, *models*, *platform*, *agents* |
| b-5.2-2 | What threat intelligence is for, as opposed to detection | *Google Threat Intelligence*, *proactive insights into cyber threats* |
| b-5.2-3 | Why the three intelligence sources are different in kind | *Google's vast global visibility*, *Mandiant's frontline incident response expertise*, *VirusTotal's crowd sourced threat detection* |
| b-5.2-4 | Finding what is wrong before an attacker does | *Security Command Center*, *discover, prioritize, and remediate*, *misconfigurations* |
| b-5.2-5 | What unifying security operations buys — telemetry in one place | *unified security operations platform*, *Google Security Operations*, *ingest telemetry*, *threat detection and response* |
| b-5.2-6 | Security you inherit rather than configure | *secure-by-design*, *core infrastructure*, *proprietary data centers*, *purpose-built servers and networking*, *custom security hardware and software* |
| b-5.2-7 | Securing AI, and securing *with* AI — two different offerings | *Gemini in Google Security Operations*, *AI Protection*, *Model Armor* |
| b-5.2-8 | Matching a security obligation to the product that meets it | *Cloud VPC*, *Cloud VPN*, *Cloud Interconnect*, *firewalls*, *Cloud Armor*, *Cloud Logging*, *IAM*, *Sensitive Data Protection*, *Confidential Computing*, *Certificate Manager*, *Identity-Aware Proxy* |
| b-5.2-9 | How trust is evidenced rather than asserted | *transparency reports*, *third-party audits*, *compliance resource manager* |
| b-5.2-10 | Where data lives, and who can reach it — as a jurisdictional question | *digital sovereignty*, *data residency* |

> **Practice-source coverage: almost none.** `gcp-cdl-samples` reaches b-5.2-8 once, and only via
> the encryption-by-default item that names *Security Command Center* and *Cloud Data Loss
> Prevention* (now *Sensitive Data Protection*) as distractors. **b-5.2-1 through b-5.2-7,
> b-5.2-9 and b-5.2-10 are untested by both sources.** This is the second concentration of
> blueprint-only content, and it sits in an ~18% section. *Model Armor*, *AI Protection*, *Google
> Threat Intelligence*, *Mandiant*, *VirusTotal* and *digital sovereignty* appear in no accessible
> practice source at all.

---

## Domain 6 · Scaling with Google Cloud Operations (~10%)

### Objective 6.1 — How Google Cloud supports controlling cloud costs (5 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-6.1-1 | The expenditure shift, and what it does to the total cost picture | *capital expenditures (CapEx)*, *operational expenditures (OpEx)*, *total cost of ownership (TCO)* |
| b-6.1-2 | Who is accountable for cloud spend, and why it cannot be nobody | *cloud financial governance*, *identify who manages cloud costs* |
| b-6.1-3 | That cost control is an organisational problem before it is a tooling one | *people, process, and technology* |
| b-6.1-4 | The tiers of the resource hierarchy, in order | *resources*, *projects*, *folders*, *organization node* |
| b-6.1-5 | What the hierarchy buys once it exists | *access control*, *inheritance and propagation rules*, *security and compliance*, *visibility and auditing capabilities* |
| b-6.1-6 | Controls that cap consumption before the money is spent | *resource quota policies*, *budget threshold rules* |
| b-6.1-7 | Seeing what was spent, and where | *Cloud Billing reports* |
| b-6.1-8 | Buying capacity on the platform's terms to pay less | *Dynamic Workload Scheduler*, *Spot VMs* |

> **Practice-source coverage: strong — and over-served.** This is the one objective both sources
> attack hard. `gcp-cdl-samples` covers b-6.1-1 three times (TCO components; the CapEx→OpEx
> direction; the personnel-cost consequence of migration), b-6.1-2 twice (project-level ownership
> and accountability; the cross-functional centre of excellence) and b-6.1-7 once.
> `whizlabs-cdl-free` covers b-6.1-4/5 three times and b-6.1-2 once (a pricing-estimation tool).
> **b-6.1-3, b-6.1-6 and b-6.1-8 (Dynamic Workload Scheduler, Spot VMs as a consumption control)
> are untested by both.** Note the trap for S3: this is a **~10% section that both practice
> sources treat as ~25%** — inheriting their mix would badly distort the paper.

### Objective 6.2 — Modern operations, reliability and resilience (5 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-6.2-1 | Which observability product answers which operational question | *Google Cloud's Observability*, *operations suite*, *Cloud Monitoring*, *Cloud Logging*, *Cloud Trace*, *Cloud Profiler*, *Error Reporting* |
| b-6.2-2 | Operational vocabulary, told apart by what each promises | *operational excellence*, *reliability*, *high availability* |
| b-6.2-3 | The design moves that make a system survive failure | *redundancy*, *replication*, *scalable infrastructure*, *backups* |
| b-6.2-4 | The four signals a system is measured by, and what each reveals | *latency*, *traffic*, *saturation*, *errors* |
| b-6.2-5 | The three service-level terms, told apart by who they bind | *service level indicators*, *service level objectives*, *service level agreements* |

> **Practice-source coverage: partial.** `gcp-cdl-samples` covers b-6.2-4/b-6.2-5 once, in a
> genuinely good item about why a traffic indicator is worth watching. `whizlabs-cdl-free` covers
> b-6.2-1 once (log search and alerting) and b-6.2-3 twice (business continuity; a negative-stem
> region-loss item). **b-6.2-2 is untested by both**, and *Cloud Profiler* and *Error Reporting*
> appear in no source but the guide.

---

## The named-risk register

The guide names failure modes rather than leaving them implicit. Each is a high-value
diagnostic-item seed, because each names a specific way a competent-looking decision fails.

| Named risk | Objective | Diagnostic question shape |
|---|---|---|
| *implications and risks of not adopting cloud* | 1.1 | the do-nothing option is on the table and looks prudent — name what it actually costs |
| *common hurdles that can affect transformation* | 1.1 | the technology worked and the programme still stalled — which hurdle is described |
| *vendor lock-in*, *data silos* | 2.1 | a platform choice is cheapest today and traps the organisation later; which property (openness, interoperability) is being traded away |
| poor *data quality* — *completeness*, *uniqueness*, *timeliness*, *validity*, *accuracy*, *consistency* | 3.1 | the model underperforms and the data is the reason — name the dimension the defect violates |
| absence of *explainable and responsible AI* | 3.1 | a model performs well and cannot be deployed; which property blocks it and what is the business consequence |
| *misconfiguration*, *unsecured third party systems* | 5.1 | nobody attacked anything — the exposure was self-inflicted |
| *LLM attacks* | 5.1 | untrusted input reaches a model; which layer of the AI stack is the one to defend |
| *ransomware* vs *malware* vs *cryptomining* | 5.1 | told apart by attacker objective and by whether the victim ever notices |
| loss of *digital sovereignty* / *data residency* | 5.2 | a jurisdiction, not a threat actor, is the constraint |
| unmanaged consumption | 6.1 | the bill arrived and nobody owned it — which control would have caught it *before* the spend |
| zonal-only design | 6.2 | the architecture is highly available right up until the failure it was never designed for |

**The strongest seed in the set** is *the do-nothing risk* (1.1 with 6.1): an organisation declines
to move, the “savings” look real, and the correct answer names the compounding cost — a judgment
item with no product in it at all, which is precisely what a Digital Leader exam is for and
precisely what no practice source on the market writes.

## Concepts this source holds that no accessible practice source tests

Carried into the master inventory as blueprint-only entries (S3 will mark them single-source,
lower-confidence per `methodology/02-master-inventory.md#single-source`):

- **The whole of Section 3's 2026 surface** — b-3.1-3 (agentic AI reshaping work), b-3.1-4,
  b-3.1-6 (the six data-quality dimensions), b-3.2-1, b-3.2-2 (Gemini Enterprise Agent Platform),
  b-3.2-5 (AI Hypercomputer), b-3.2-6 (BigQuery ML)
- **Almost all of objective 5.2** — b-5.2-1 through b-5.2-7, b-5.2-9, b-5.2-10 (Model Armor, AI
  Protection, Google Threat Intelligence, Mandiant, VirusTotal, Security Command Center, Google
  Security Operations, digital sovereignty, data residency)
- **The data-lifecycle and governance block** — b-2.1-3, b-2.1-5 (data supply chain), b-2.1-6,
  b-2.1-7
- **Storage-class economics** — b-2.2-3, b-2.2-4 (Autoclass)
- **Hybrid and multicloud product reach** — b-4.2-5 (AlloyDB Omni, BigQuery Omni, GKE Enterprise)
- **API monetisation and management** — b-4.3-2, b-4.3-3 (Apigee)
- **Consumption controls** — b-6.1-6, b-6.1-8 (Dynamic Workload Scheduler, Spot VMs as a cost
  lever)
- **Judgment concepts with no product attached** — b-1.1-7/8/9 (drivers, hurdles, the cost of
  standing still), b-1.1-3 (open source versus open standard), b-1.2-3 (latency versus bandwidth),
  b-5.1-4 (what genuinely differs about cloud security), b-6.1-3 (people, process, technology),
  b-6.2-2 (reliability versus high availability)

These are also, not coincidentally, the concepts a candidate is least likely to have drilled —
which makes them the highest-value items in the bank, and the reason a blueprint-first build beats
a practice-set-first build for this exam by a wider margin than usual.

## Concepts other sources hold that this source does not spell out

`whizlabs-cdl-free` tests fourteen ideas below or beside this blueprint's altitude — persistent
disk types, Local SSD, snapshot use cases, delete protection, Cloud Debugger, Cloud Asset
Inventory, Secret Manager, Pub/Sub dead-letter topics, IoT product categories, and four items on
Google Cloud support plans, case status strings and problem-type taxonomy. `gcp-cdl-samples` adds
two: data-centre sustainability credentials, and Customer Care case escalation. **None of these
has a home in the current guide**, whose objective verbs stop at *describe* and whose product list
excludes every one of the named products. They are off-blueprint and must not enter the inventory
— recorded here so the reconciliation in `master-inventory.md` shows the decision was made rather
than missed.
