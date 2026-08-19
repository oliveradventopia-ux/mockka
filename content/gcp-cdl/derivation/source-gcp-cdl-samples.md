# Artefact A · Google official Cloud Digital Leader sample questions distillation

**What this is.** Google's own free Cloud Digital Leader sample-question set — published as a
public Google Form linked from the certification page — contains **29 questions** written by the
certification owner. This document records, for each item, **the concept it tests** and **how each
wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory, and the only one written by
the vendor. It answers the question “what does the exam's own author think an item looks like?” —
the best available calibration for stem shape, option shape and difficulty pitch.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `gcp-cdl-samples` in [sources.md](sources.md). Credited in the exam README.
> Read 2026-08-16 from the public form; **no account, no sign-in and no submission**. Two caveats
> that this whole document must be read against:
> **(1) No answer key exists in the public payload.** The form grades server-side. Every “concept
> tested” claim below is *this session's own analytical inference* from the option set — never a
> vendor key. Two items where that inference is genuinely uncertain are marked `[UNVERIFIED]`.
> **(2) Google's own caveat, from the certification page:** the sample questions “do not represent
> the range of topics or level of difficulty of questions presented on the exam.” The vendor is
> telling us this set is a format sample, not a blueprint sample. The domain-mix analysis below
> confirms it.
> **(3) Version lag.** The form payload titles itself *“Cloud Digital Leader v4.0 - Sample
> Questions”* and names products by their pre-2026 identities. The blueprint it should serve was
> published 2026-08-12.

## Proposed theme set (for S3's `authoring.json`)

The T1–T8 starter themes in `methodology/03-authoring-guide.md#themes` were derived from an
architecture-professional exam and fit this exam poorly — no autonomy-level, trust-boundary or
blast-radius judgments exist at Digital Leader altitude. Both Artefact-A documents in this package
use the proposed set below; **declaring it is S3's call**, not this session's.

| id | Theme | Judgment exercised |
|---|---|---|
| G1 | Business-value articulation | name the business outcome a capability delivers, against statements that are true but answer a different question |
| G2 | Product selection | pick the Google Cloud product that performs the required job, against near neighbours that perform adjacent jobs |
| G3 | Concept discrimination | name the model, term or category the described situation belongs to |
| G4 | Modernization path choice | pick the migration or compute approach a stated constraint forces |
| G5 | Data & AI solution fit | match a data or AI approach to the business problem it actually solves |
| G6 | Trust & security judgment | the control, property or trust mechanism that meets the stated obligation |
| G7 | Cost & operations governance | spend accountability, consumption control, reliability measurement |

## Proposed distractor-pattern extensions (for S3's `authoring.json`)

Eight mechanisms recur across both practice sources that the shared D01–D20 registry does not
name. The registry's patterns are failures of *professional judgment*; this exam's dominant
distractors are failures of *business-technical discrimination*. Proposed extensions, with the
evidence count from **this** source:

| id | Name | Definition | Count here |
|---|---|---|---|
| E01 | `product-role-swap` | a real Google Cloud product that performs an adjacent but different job | 30 |
| E02 | `cloud-model-slip` | a deployment model (public/private/hybrid/multicloud) or service model (IaaS/PaaS/SaaS) substituted for the one the scenario describes | 2 |
| E03 | `hierarchy-scope-slip` | the wrong tier of Google's geography or resource hierarchy (zone for region, data centre for zone, project for folder or organization node) | 0 |
| E04 | `migration-path-swap` | rehost, replatform, refactor, retire, retain and reimagine substituted for one another | 3 |
| E05 | `sibling-term-substitution` | a neighbouring term from the same family offered as the definition (integrity for confidentiality, data warehouse for data lake) | 11 |
| E06 | `benefit-mismatch` | a **true** statement about the named product or capability that is not the benefit the scenario asks for | 15 |
| E07 | `incomplete-answer` | a true but incomplete part of the required set or practice, keyed against the complete option | 5 |
| E08 | `invented-name` | a plausible-sounding product, feature, category or term that does not exist | 2 |

D-patterns that transfer unchanged and are used below: D02 under-structuring, D06 wrong-layer,
D11 non-architectural-criteria, D14 dogma, D19 false-technical-claim.

## Format mix observed

| Domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| d1 Digital Transformation | 3 | 0 | 0 | 3 |
| d2 Data Transformation | 5 | 0 | 0 | 5 |
| d3 Innovating with AI | 2 | 0 | 0 | 2 |
| d4 Modernize Infrastructure and Applications | 5 | 0 | 0 | 5 |
| d5 Trust and Security | 5 | 0 | 0 | 5 |
| d6 Scaling with Operations | 7 | 0 | 0 | 7 |
| *(off-blueprint — no home in the 2026 guide)* | 2 | 0 | 0 | 2 |
| **Total** | **29** | **0** | **0** | **29** |

Asymmetries worth preserving or correcting, explicitly:

- **Every item is single choice with exactly four options.** Not one multiple-select item appears,
  even though the certification page names multiple select as an exam format. The guide states no
  per-format count. **The real multiple-select share is unpublished and unobserved** —
  S3 must set it by judgment and record that it did. `[UNVERIFIED]`
- **The domain mix is badly off blueprint, in a specific and instructive direction.** Against the
  27 on-blueprint items the observed shares are d1 11% · d2 19% · d3 **7%** · d4 19% · d5 19% ·
  d6 **26%**, against a blueprint of 18/18/18/18/18/**10**. Operations is served at two and a half
  times its weight; **the AI section is served at under half of its weight**, by two items, both
  of which name products the current guide no longer uses. Google's own caveat says as much —
  believe it, and do not inherit this mix.
- **Two items have no home in the 2026 guide at all** — data-centre sustainability credentials and
  Customer Care case escalation. Both were objectives under earlier CDL outlines. They are
  recorded below for completeness and marked off-blueprint; they must not enter the inventory.
- **Stem style is worth copying exactly.** 24 of 29 stems open with an organisation and a business
  situation (“an organization wants/needs/is…”), state one operative constraint, and ask which
  product, model or approach fits. That is the house style of this exam and it is what makes an
  item Digital-Leader-shaped rather than engineer-shaped.

## Domain 1 · Digital Transformation with Google Cloud (3 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | a workload that must stay partly on-premises for compliance while being centrally managed describes hybrid cloud (b-1.2-1) | G3 | E02 ×1 model-slip (multicloud offered for a cloud-plus-on-premises situation), D06 ×2 wrong-layer (a compute abstraction and a packaging abstraction offered where a deployment model is asked) |
| 1.2 | near-unlimited capacity without procuring hardware is the defining property of public cloud (b-1.2-1) | G3 | E02 ×1 model-slip (private cloud, which still requires procurement), D06 ×2 wrong-layer (architecture and packaging choices offered as sourcing models) |
| 1.3 | the developer-facing benefit of cloud is new capability and better resource utilisation, not relief from on-premises chores (b-1.1-4/6) | G1 | D19 ×2 absolute-claim (a 100% availability promise; a claim that serverless limitations are what cloud avoids), E06 ×1 benefit-mismatch (optimising the on-premises estate — true work, wrong direction) |

**Domain 1 observation.** Three items, all definitional, all resolving on a single distinguishing
property. Nothing here tests the *drivers* of transformation, the *hurdles*, the *risk of not
adopting* (b-1.1-7/8/9), Google's stated differentiators (b-1.1-10), or the networking primitives
(b-1.2-2/3). Note the recurring wrong-option shape in 1.1 and 1.2: options that answer at the
wrong layer of abstraction. It is cheap for a candidate to eliminate and should be used sparingly.

## Domain 2 · Exploring Data Transformation with Google Cloud (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | high-frequency sensor readings arriving continuously need an ingestion and messaging layer, not a processing or storage layer (b-2.3-4) | G5 | E01 ×3 product-role-swap — one is a genuine **pipeline-stage neighbour** (the processing product offered for the ingestion job, the sharpest distractor in the whole set), the other two are a relational store and an object store |
| 2.2 | a repository that takes structured, semi-structured and unstructured data in native form is a data lake (b-2.1-2/4) | G3 | E05 ×3 sibling-term (data warehouse, database, and a fourth architecture term from the same family) |
| 2.3 | the BI layer's business benefit is analytics reach, not storage or access control (b-2.3-1) | G2 | E01 ×3 product-role-swap (an identity capability, a warehousing capability, and a data-recovery capability each offered as the BI benefit) |
| 2.4 | globally consistent transactional writes with effectively unbounded growth is the discriminating pair for the horizontally scalable relational product (b-2.2-1/2) | G2 | E01 ×3 product-role-swap (an analytics warehouse, a single-region managed relational service, an object store) |
| 2.5 | files, images and video, stored economically and shared securely, is object storage (b-2.2-1/2) | G2 | E01 ×3 product-role-swap (two relational products and an analytics warehouse offered for unstructured objects) |

**Domain 2 observation.** Four of five items are product selection, and all four are built
entirely from `E01`. Item 2.1 is the model to learn from — its wrong options are not random
products but the *adjacent stages of the same pipeline*, which cannot be eliminated by reading the
stem's surface. Nothing tests the data supply chain (b-2.1-5), data governance (b-2.1-6), data
provenance classes (b-2.1-3), storage classes or Autoclass (b-2.2-3/4), or streaming's business
rationale (b-2.3-3).

## Domain 3 · Innovating with Google Cloud Artificial Intelligence (2 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | building custom end-to-end models needs the platform product, not a pre-built recommendation service or general compute (b-3.2-4) — **product name is pre-2026; the guide now routes this through Agent Studio / AutoML on Agent Platform** | G2 | E01 ×3 product-role-swap (a vertical AI application, a managed analytics product, a raw compute product) |
| 3.2 | responsible-AI judgment: the irresponsible use is the one that produces volume without accountable purpose, not the ones that apply AI to legitimate business analysis (b-3.1-7) | G6 | E06 ×3 benefit-mismatch — all three are ordinary, defensible business applications offered as if they were the violation `[UNVERIFIED — key inferred; the discriminating principle is stated only in Google's AI principles, not in the option set]` |

**Domain 3 observation.** Two items for an ~18% section, and this is the section the 2026 rewrite
created. Neither item touches *agentic AI* (b-3.1-3), the AI-offering benefit claims (b-3.1-4),
the six data-quality dimensions (b-3.1-6), the selection trade-offs (b-3.2-1), the agent platform
(b-3.2-2), the pre-trained API family (b-3.2-3), AI Hypercomputer (b-3.2-5) or BigQuery ML
(b-3.2-6). **The official vendor sample set contributes almost nothing to the heaviest new part of
its own exam.** This is the single most consequential finding in this artefact.

## Domain 4 · Modernize Infrastructure and Applications with Google Cloud (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | an API's business role is to connect a new application to an existing system, not to move data or manage hardware (b-4.3-1) | G1 | E06 ×3 benefit-mismatch (remote hardware update, disaster-recovery migration, and cloud connectivity each offered as the reason an API is needed) |
| 4.2 | “my own language and tools, minimal infrastructure management” is the serverless-container answer (b-4.2-4) | G4 | E01 ×3 product-role-swap — one is a **requirement inversion** (a dedicated-hardware offering for a minimise-management requirement), the others are an analytics product and a messaging product |
| 4.3 | a legacy application that must move without code changes is rehost / lift and shift (b-4.1-2) | G4 | E04 ×3 migration-path-swap (the three neighbouring paths, each of which implies a change the constraint forbids) |
| 4.4 | a small, event-triggered piece of code wants the functions product, not a cluster or a VM (b-4.2-4) — **guide now names this Cloud Run functions** | G2 | E01 ×3 product-role-swap ordered by decreasing abstraction (managed Kubernetes, container service, raw VMs) |
| 4.5 | migrating existing virtual machines lands on the VM product (b-4.2-1) | G2 | E01 ×3 product-role-swap (three higher-abstraction compute products offered for a lift-and-shift of VMs) |

**Domain 4 observation.** The best-constructed domain in the set. Item 4.3 is the strongest single
item Google publishes here: the constraint (“without making any changes to the code”) does all the
work, and every distractor is a real migration path that violates exactly that constraint — a
model of how `E04` should be used. Items 4.2, 4.4 and 4.5 form a deliberate ladder across the
compute abstraction spectrum, which is worth copying as a *set*. Untested: discovery and
assessment (b-4.1-1), microservices (b-4.1-4), Kubernetes/autoscaling vocabulary (b-4.1-5), spot
VMs (b-4.1-6), the business-value bullet (b-4.2-2), GKE on its own terms (b-4.2-3), the hybrid and
multicloud product list (b-4.2-5), API monetisation (b-4.3-2) and Apigee (b-4.3-3).

## Domain 5 · Trust and Security with Google Cloud (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | keeping information secret is the confidentiality property, distinct from the other properties a security model is judged on (b-5.1-5) | G3 | E05 ×3 sibling-term (integrity, availability, and a governance term from the same list) |
| 5.2 | a threat that steals or damages without the user noticing is the silent-infection class, not the one that announces itself by demanding payment (b-5.1-1) | G3 | E05 ×1 sibling-term (the announcing threat offered for the silent one), D11 ×2 category-outsider (a contractual failure and a data-entry defect offered as cybersecurity threats) |
| 5.3 | controlling who can reach which resources is the identity-and-access product, not a network path or a hardware control (b-5.1-11) | G2 | E01 ×2 product-role-swap (two private-connectivity products), D06 ×1 wrong-layer (a hardware encryption control offered as an access control) |
| 5.4 | data in Google Cloud is protected because encryption is the default state, not because a tool or a tag switches it on (b-5.1-8, b-5.2-6) | G6 | E01 ×2 product-role-swap (a posture-management product and a data-discovery product offered as the encryptor), D19 ×1 false-mechanism (encryption conditioned on applying a tag) |
| 5.5 | privacy is about restriction of access and sharing — distinct from authentication, from compliance, and from breach exposure (b-5.1-5/10) | G3 | E05 ×3 sibling-term (identity verification, regulatory conformance, and breach susceptibility each offered as the definition of privacy) |

**Domain 5 observation.** Competent on vocabulary, silent on everything Google actually sells.
Three of five items are pure term discrimination. Item 5.4 is the only one that reaches
objective 5.2, and it does so only in passing. **Nothing tests the AI-stack layers (b-5.2-1),
threat intelligence and its three named sources (b-5.2-2/3), Security Command Center (b-5.2-4),
unified security operations (b-5.2-5), the AI security offerings — Model Armor, AI Protection
(b-5.2-7) — the trust-evidence mechanisms (b-5.2-9) or digital sovereignty and data residency
(b-5.2-10).** Section 5 will be a substantially blueprint-only build.

## Domain 6 · Scaling with Google Cloud Operations (7 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 6.1 | a traffic indicator earns its place because its history informs capacity planning, not because volume maps onto experience (b-6.2-4/5) | G7 | D19 ×2 absolute-claim (two options universally quantified — “always” — which a prepared candidate eliminates on shape alone), E06 ×1 benefit-mismatch (a real correlation offered as the reason to monitor) |
| 6.2 | understanding spend *and* getting optimisation recommendations is the billing-reporting surface, not a consumption cap or a pricing commitment (b-6.1-7) | G7 | E01 ×2 product-role-swap (a consumption control and a discount mechanism offered as an analysis tool), E06 ×1 benefit-mismatch (the billing record offered as the analysis) |
| 6.3 | a real TCO comparison includes hardware investment, operational overhead **and** opportunity cost — not any one of them alone (b-6.1-1) | G7 | E07 ×3 incomplete-answer (three single true components, each keyed against the complete set) |
| 6.4 | migrating off-premises reduces infrastructure-management cost; it does not create hardware-management cost in the cloud (b-6.1-1) | G7 | D19 ×2 false-claim (a cost that rises when you leave, and a cloud hardware-management cost that does not exist), E06 ×1 benefit-mismatch (a licensing effect offered for an operations-and-personnel question) |
| 6.5 | a cross-functional cloud centre of excellence buys visibility into ongoing spend; it does not take over budgets or devolve security (b-6.1-2/3) | G7 | D02 ×1 under-structuring (each project team applying its own security approach — the situation a CoE exists to end), D19 ×1 overreach-claim (the CoE owning all budgets), E06 ×1 benefit-mismatch (a review cadence offered as the benefit) |
| 6.6 | financial governance across many teams works by pairing project ownership **with** financial accountability at the owner — not by splitting the two (b-6.1-2) | G7 | E07 ×2 incomplete-answer (ownership without accountability; accountability without ownership), D14 ×1 dogma (a single fixed budget applied across all projects regardless of workload) |
| 6.7 | adopting cloud moves spend from capital expenditure toward operational expenditure (b-6.1-1) | G7 | D19 ×1 direction-inversion (the shift stated backwards), E08 ×2 invented-name (“cost management” offered as an expenditure category, which is not one) |

**Domain 6 observation.** Seven items for a ~10% section — the most over-served domain by a wide
margin, and the only one where the set reaches genuine judgment rather than recall. Items 6.3,
6.5 and 6.6 are the three best judgment items Google publishes: each has a plausible half-measure
as its most attractive wrong option, which is the `E07` mechanism and the one worth raising across
the whole bank. Nothing tests people/process/technology as a triad (b-6.1-3), the resource
hierarchy (b-6.1-4/5), consumption controls (b-6.1-6), Dynamic Workload Scheduler or Spot VMs as
cost levers (b-6.1-8), the observability product family (b-6.2-1), reliability versus high
availability (b-6.2-2) or resilience design (b-6.2-3).

## Off-blueprint items (2, recorded and excluded)

| Item | Concept tested | Why excluded |
|---|---|---|
| X.1 | a provider's environmental credentials are evidenced by independent certification of data-centre performance, not by an absolute emissions claim (G1; D19 ×1 absolute-claim, E06 ×2 benefit-mismatch) | **sustainability appears nowhere in the 2026-08-12 guide.** It was an objective under earlier CDL outlines. Good item, wrong exam version — do not carry into the inventory |
| X.2 | a support case is escalated on business impact and urgency, not on administrative dissatisfaction with how it was handled (G7; E06 ×2, E05 ×1) `[UNVERIFIED — key inferred; two of the four options are defensible escalation reasons in Google's own published guidance]` | **Google Cloud Customer Care appears nowhere in the 2026-08-12 guide.** Same verdict |

## Distractor-pattern frequency across the 29 items

Counted from the tables above; total distractor slots = 87 (29 single-choice items × 3 wrong
options).

| Pattern | Count | Share | Note |
|---|---|---|---|
| E01 `product-role-swap` | 30 | 34% | **over-used** — a third of every wrong option. Nine items are built *entirely* from it |
| E06 `benefit-mismatch` | 15 | 17% | the exam's signature pattern and the one that makes an item Digital-Leader-shaped: the option is true, and it answers a different question |
| E05 `sibling-term-substitution` | 11 | 13% | the definitional workhorse; healthy at this altitude but produces flat, scenario-free items |
| D19 false-technical-claim | 10 | 11% | **half of these are quantified absolutes** (“always”, “100%”) — cheap to eliminate on shape alone. Craft defect more than a pattern |
| E07 `incomplete-answer` | 5 | 6% | **the most diagnostic pattern in the set** — a half-measure that a candidate who half-understands will pick. Under-used |
| D06 wrong-layer | 5 | 6% | strong when the layers are genuinely adjacent; weak when the option is a different category of thing entirely |
| E04 `migration-path-swap` | 3 | 3% | concentrated in one item, and that item is the best in the set |
| E02 `cloud-model-slip` | 2 | 2% | under-used given that objective 1.2 hands you the model vocabulary directly |
| D11 category-outsider | 2 | 2% | present, incidental |
| E08 `invented-name` | 2 | 2% | used only for category names, never for products |
| D02, D14 | 1 each | — | present, incidental |
| E03 `hierarchy-scope-slip` | 0 | — | **absent entirely** — see the note below |

**Consequences for authoring.**

1. **Cap `E01 product-role-swap` at 0.30 of items** (proposed `validation.pattern_caps` entry). It
   is the natural distractor for a product-heavy exam and cannot be banned, but at 34% of all
   wrong options it produces a bank that tests product trivia rather than business judgment. A cap
   forces the scenario back into the middle of the item.
2. **Raise `E06 benefit-mismatch` to be the primary wrong-option family.** It is the pattern that
   most reliably separates a candidate who can articulate business value from one who has
   memorised a product catalogue — which is the stated purpose of this certification. It is also
   the pattern the excluded dump corpus does not use, because recalled items lose it first.
3. **Raise `E07 incomplete-answer` sharply**, especially in d6 and d1. The three strongest items in
   the whole set are built on it, and it is at 6%.
4. **Use `E03 hierarchy-scope-slip` deliberately** — objectives 1.2 (regions/zones/edge locations)
   and 6.1 (resources/projects/folders/organization node) both hand you an ordered hierarchy, and
   the official set never once builds a distractor from getting the tier wrong. The other practice
   source uses it heavily; see [`source-whizlabs-cdl-free.md`](source-whizlabs-cdl-free.md).
5. **Ban quantified absolutes as distractors.** Five of the ten `D19` instances are options
   containing “always” or “100%”. They are eliminable without reading the stem. If a false claim
   is used, it must be false on substance, not on quantifier.
6. **Do not inherit the domain mix** — build to blueprint weights. d3 needs roughly **two and a
   half times** this source's share and d6 roughly **two fifths** of it.
7. **Copy the stem grammar exactly**: organisation → business situation → one operative constraint
   → “which product / model / approach”. It is the vendor's own house style, and it is the cheapest
   available fidelity win.

## Concepts this source tests that other sources do not spell out

- migration-path selection under a no-code-change constraint (b-4.1-2) — the only `E04` item in
  any accessible source
- the compute-abstraction ladder tested as a set across three items (b-4.2-1/4)
- TCO as a **complete** cost picture rather than any single component (b-6.1-1) — the half-answer
  item shape
- a cross-functional cloud centre of excellence as a spend-visibility mechanism (b-6.1-2/3)
- the pairing of project ownership with financial accountability as the governance answer
  (b-6.1-2)
- encryption-by-default as an inherited platform property rather than a configured control
  (b-5.1-8, b-5.2-6)
- ingestion versus processing as adjacent, confusable pipeline stages (b-2.3-4)
- responsible AI as a use-legitimacy judgment (b-3.1-7)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the geography and resource
hierarchies (regions/zones; resources/projects/folders/organization node), service-model
classification by responsibility, observability product selection, and resilience design — all
covered by [`source-whizlabs-cdl-free.md`](source-whizlabs-cdl-free.md) — plus the entire 2026
surface of the blueprint (agentic AI, the agent platform, AI Hypercomputer, data quality
dimensions, the data supply chain, storage classes, hybrid/multicloud product reach, API
monetisation, the security product and threat-intelligence families, digital sovereignty,
consumption controls), which comes from
[`source-gcp-cdl-guide.md`](source-gcp-cdl-guide.md) alone.
