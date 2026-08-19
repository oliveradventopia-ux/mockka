# Artefact A · Whizlabs free Cloud Digital Leader question set distillation

**What this is.** Aditi Malhotra's freely published Cloud Digital Leader practice article on the
Whizlabs blog (2021-11-24) contains **30 questions** written against the CDL exam outline as it
stood at the time. This document records, for each item, **the concept it tests** and **how each
wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question “what
does an independent named author believe is tested?” — a second reading of the exam, and the only
one available that is not the vendor's own.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `whizlabs-cdl-free` in [sources.md](sources.md). Credited in the exam README.
> Read in full 2026-08-16 from the public article; no paywall, no login. **Dump-screened**
> against the ExamTopics CDL corpus at ids 1, 9 and 13: no correspondence at any probe, and the
> house style (console and operations mechanics, per-option rationales with `cloud.google.com`
> reference links) is absent from that corpus. Screening is evidence of absence, not proof of
> originality — recorded as such; full screening table in [sources.md](sources.md).
>
> **The load-bearing caveat: this source is five years old and organised under the superseded
> three-area CDL outline.** Fourteen of its thirty items have no home in the 2026-08-12 blueprint.
> Read every count below as “of a source that was calibrated to a different exam”.

## Theme set and pattern extensions

This document uses the G1–G7 theme set and the E01–E08 distractor-pattern extensions proposed in
[`source-gcp-cdl-samples.md`](source-gcp-cdl-samples.md). Declaring both is S3's call. Counts from
**this** source:

| id | Name | Count here |
|---|---|---|
| E01 | `product-role-swap` | 25 |
| E02 | `cloud-model-slip` | 7 |
| E03 | `hierarchy-scope-slip` | 10 |
| E04 | `migration-path-swap` | 0 |
| E05 | `sibling-term-substitution` | 18 |
| E06 | `benefit-mismatch` | 15 |
| E07 | `incomplete-answer` | 0 |
| E08 | `invented-name` | 9 |

D-patterns that transfer unchanged and are used below: D14 dogma.

## Format mix observed

| Domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| d1 Digital Transformation | 5 | 0 | 0 | 5 |
| d2 Data Transformation | 1 | 0 | 0 | 1 |
| d3 Innovating with AI | 1 | 0 | 0 | 1 |
| d4 Modernize Infrastructure and Applications | 1 | 0 | 0 | 1 |
| d5 Trust and Security | 1 | 0 | 0 | 1 |
| d6 Scaling with Operations | 7 | 0 | 0 | 7 |
| *(off-blueprint against the 2026 guide)* | 12 | 2 | 0 | 14 |
| **Total** | **28** | **2** | **0** | **30** |

Asymmetries worth preserving or correcting, explicitly:

- **Both multiple-response items are “choose 2” of five options**, and both are off-blueprint.
  They are the only multiple-select data points in the whole build — the official set has none.
  ~7% multiple response, from a stale source, is the single weakest number carried forward.
  `[UNVERIFIED]` as a guide to the real exam.
- **Nearly half the set (14/30) is off-blueprint against the current guide**, and the misses are
  systematic, not random: persistent-disk types, Local SSD, snapshot use cases, VM delete
  protection, Cloud Debugger, Cloud Asset Inventory, Secret Manager, Pub/Sub dead-letter topics,
  IoT product categories, and four items on Google Cloud support plans, case status strings and
  problem-type taxonomy. Every one of them fails the guide's own verb test — they ask what a
  practitioner *configures*, not what a leader *describes*.
- **Domain mix, over the 16 on-blueprint items:** d1 31% · d2 6% · d3 6% · d4 6% · d5 6% ·
  d6 44%, against a blueprint of 18/18/18/18/18/10. Operations is over-served four-fold and
  everything but d1 is starved. Combined with the official set — which also over-serves d6 — this
  is a **consistent bias across both practice sources**, and correcting it is a deliberate act S3
  must take, not something the union of sources will do by itself.
- **Zero scenario-matching items**, as expected: the format does not exist on this exam.

## Domain 1 · Digital Transformation with Google Cloud (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | sole-tenant operation plus internal hosting is the private-cloud deployment model (b-1.2-1) | G3 | E02 ×2 model-slip (public and hybrid offered against a sole-tenant, internally hosted requirement), D14 ×1 dogma (an “any of the above” option) |
| 1.2 | classifying a named offering by its service model — the platform product is PaaS, the productivity suite SaaS, the VM and disk products IaaS (b-1.2-5) — **the products named are absent from the 2026 guide; the classification concept is not** | G3 | E02 ×3 model-slip (three offerings from the other two service models) |
| 1.3 | reading a service model from *who patches the operating system* — the responsibility boundary, not the product (b-1.2-5/6) | G3 | E02 ×2 model-slip (the two models where the provider owns patching), E08 ×1 invented-name (a fourth “as-a-Service” category that does not exist) |
| 1.4 | Google's geography is nested: a region is a collection of zones, and zones sit above data centres (b-1.2-4) | G3 | E03 ×3 hierarchy-scope-slip (three wrong nestings of the same three tiers) |
| 1.5 | the deployment area *within* a region that delivers fault tolerance and high availability is the zone (b-1.2-4) | G3 | E03 ×1 hierarchy-scope-slip (the data-centre tier offered for the zone tier), E08 ×2 invented-name (two plausible-sounding geography tiers that do not exist) |

**Domain 1 observation.** This source's strongest domain and the one place it genuinely
complements the official set: it tests the **geography hierarchy** (b-1.2-4) twice and the
**service-model responsibility boundary** (b-1.2-5) twice, neither of which the official set
touches at all. Item 1.3 is the best-built item in the source — the discriminator is a
responsibility, not a name, which is exactly the altitude this exam wants. Note that item 1.2
names products the current guide does not list; carry the *classification* concept, drop the
products.

## Domain 2 · Exploring Data Transformation with Google Cloud (1 item)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | a scalable, zero-maintenance serverless document store is the document-database product, distinct from the relational, in-memory and wide-column products (b-2.2-1/2) | G2 | E01 ×3 product-role-swap (a globally consistent relational product, an in-memory store, a wide-column big-data store) |

**Domain 2 observation.** One item for an ~18% section. It converges with the official set on
**product selection by workload shape** (b-2.2-1), which is real convergence signal — but nothing
here touches data value, data types, the data supply chain, governance, storage classes, BI or
streaming.

## Domain 3 · Innovating with Google Cloud Artificial Intelligence (1 item)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | classifying unstructured text and scoring sentiment is a pre-trained language API job, not a model-building platform, a translation service or a conversational builder (b-3.2-3) — **the product named is absent from the 2026 guide, which routes this through the Agent Platform API family** | G2 | E01 ×3 product-role-swap (a model platform, a translation API, a conversational-agent builder) |

**Domain 3 observation.** One item, and it is a product-matching item keyed to a product name the
current guide has retired. Combined with the official set's two items, **the accessible practice
corpus offers three items in total for the ~18% section that the 2026 rewrite created, and all
three name superseded products.** Section 3 is a blueprint-only build in everything but form.

## Domain 4 · Modernize Infrastructure and Applications with Google Cloud (1 item)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | event-driven serverless code execution is the functions product (b-4.2-4) — **guide now names this Cloud Run functions** | G2 | E01 ×2 product-role-swap (a multicloud Kubernetes offering, an infrastructure-as-code toolkit), E08 ×1 invented-name (a plausible “Cloud Serverless” product that does not exist) |

**Domain 4 observation.** Converges with the official set on the event-driven-serverless concept
(b-4.2-4) — one of the few genuine two-source concepts in the build — but adds nothing on
migration paths, compute abstractions, modern application development, GKE, hybrid reach or APIs.

## Domain 5 · Trust and Security with Google Cloud (1 item)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | access is granted through roles, which bundle permissions — not by attaching permissions to a person directly and not by handing them a policy (b-5.1-11) | G3 | E05 ×2 sibling-term (direct permission grant; the policy object offered as the thing granted), E08 ×1 invented-name (a pre-authenticated URL mechanism that is not a Google Cloud access model) |

**Domain 5 observation.** One item for an ~18% section, and it sits *below* blueprint altitude —
the guide asks a candidate to differentiate authentication, authorization and auditing, not to
know how a role binding works. It converges weakly with the official set's IAM item (both reach
b-5.1-11) but from the mechanics side rather than the concept side. Nothing else in Section 5 is
touched.

## Domain 6 · Scaling with Google Cloud Operations (7 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 6.1 | a proposal section describing how service continues when a data centre is unavailable is a business-continuity plan, not monitoring, improvement or automation (b-6.2-3) | G3 | E05 ×3 sibling-term (three neighbouring planning disciplines) |
| 6.2 | fine-grained management and cost allocation come from the resource hierarchy itself, not from the controls layered on top of it (b-6.1-4/5) | G2 | E01 ×3 product-role-swap (billing access control, quotas and budgets — three real cost controls, none of which is the structuring mechanism) |
| 6.3 | an immediate pre-commitment cost estimate comes from the self-service estimation tool, not from a human channel or a manual price list (b-6.1-2) | G7 | E06 ×3 benefit-mismatch (three real routes to a number, each failing the “immediately” constraint) |
| 6.4 | **negative stem** — the strategy that does *not* survive the loss of a region is the one that stays inside a single zone (b-6.2-3) | G7 | E03 ×3 hierarchy-scope-slip inverted — the three non-keys all cross the regional boundary correctly; the key is the one that does not |
| 6.5 | every Google Cloud resource belongs to a project — and the scope of a resource (zonal, regional, global) is a property to be read, not assumed (b-6.1-4) | G3 | E03 ×3 hierarchy-scope-slip (three resources each assigned the wrong scope tier) |
| 6.6 | a resource has exactly one parent — the hierarchy is a tree, not a graph (b-6.1-4/5) | G3 | E05 ×2 sibling-term (two other cardinalities), D14 ×1 dogma (“depends on the resource type”) |
| 6.7 | searching and analysing logs, ingesting custom log writes and alerting on log content is the logging product, not the metrics, tracing or debugging products (b-6.2-1) | G2 | E01 ×3 product-role-swap (three sibling observability products, each answering an adjacent operational question) |

**Domain 6 observation.** The source's centre of gravity, at 44% of its on-blueprint items for a
~10% section. It contributes three things the official set does not: the **resource hierarchy**
(b-6.1-4/5, three items), the **observability product family** (b-6.2-1) and **resilience design
read through scope** (b-6.2-3, twice). Item 6.4 is the most interesting construction in either
practice source — a negative stem where the wrong options are all *correct designs*, so the
candidate must reason about regional scope rather than recognise a right answer. Worth copying,
sparingly. Nothing here reaches CapEx/OpEx/TCO, financial accountability, people-process-
technology, consumption controls or service-level terms.

## Off-blueprint items (14, recorded and excluded)

Recorded so the reconciliation in `master-inventory.md` shows the decision was made rather than
missed. **None may enter the concept inventory.**

| Items | What they test | Why excluded |
|---|---|---|
| 4 items | Google Cloud support: plan tiers and their phone-support entitlements, case status strings, the problem-type taxonomy, and support-tier cost comparison | Google Cloud Customer Care and support plans appear nowhere in the 2026-08-12 guide |
| 3 items | Persistent-disk types and their backing media; Local SSD use cases; persistent-disk snapshot use cases *(2 of these are the source's only multiple-response items)* | storage-device selection is an operator task; the guide's verbs stop at *describe*, and none of these products is named |
| 2 items | VM delete protection; the enumeration of ways to connect to Google Cloud | configuration mechanics; also a **negative-stem inversion** in the connect-methods item, where the key is an invented product name and all three non-keys are true |
| 2 items | Cloud Asset Inventory as a metadata inventory; Secret Manager for API keys and certificates | neither product is named in the guide; the security bullet routes secrets through *Sensitive Data Protection* and the IAM/encryption family |
| 1 item | Cloud Debugger for injecting logging and snapshotting production state | the product has been retired, and the guide's observability list names *Cloud Profiler* and *Error Reporting* instead |
| 1 item | Pub/Sub dead-letter topics | feature-level mechanics; the guide names Pub/Sub only as a pipeline product |
| 1 item | which cloud-provider product category collects field/sensor data | the IoT product category is absent from the 2026 guide |

## Distractor-pattern frequency across the 30 items

Counted from the tables above; total distractor slots = 90 (28 single-choice × 3 + 2
multiple-response × 3).

| Pattern | Count | Share | Note |
|---|---|---|---|
| E01 `product-role-swap` | 25 | 28% | the workhorse, same as in the official set — and here it is often a *sibling within one product family* (four observability products, four database products), which is the good form of it |
| E05 `sibling-term-substitution` | 18 | 20% | heavy, and mostly on non-product vocabulary (planning disciplines, cardinalities, status strings). Produces flat, scenario-free items |
| E06 `benefit-mismatch` | 15 | 17% | almost identical share to the official set — evidence this really is the exam's signature pattern rather than one author's habit |
| E03 `hierarchy-scope-slip` | 10 | 11% | **this source's distinctive contribution.** The official set uses it zero times; here it carries four items, two of them well |
| E08 `invented-name` | 9 | 10% | **over-used, and weak.** An option naming a product that does not exist is eliminable by anyone who has read a product page. Six of the nine are pure padding |
| E02 `cloud-model-slip` | 7 | 8% | concentrated in the three service/deployment-model items, and used properly in all three |
| D14 dogma | 3 | 3% | all three are “any of the above” / “depends” options — a shape defect more than a pattern |
| E04 `migration-path-swap` | 0 | — | absent; the official set is the only source for it |
| E07 `incomplete-answer` | 0 | — | **absent entirely** — this source never builds a half-measure distractor, which is the single biggest craft gap between it and the official set |
| *negative-stem inversion* | 3 | 3% | **craft note, not a pattern** — see below |

**Consequences for authoring.**

1. **`E03 hierarchy-scope-slip` is a real, under-used pattern and belongs in the bank.** This
   source proves it works at this altitude; the official set never uses it. Both hierarchies the
   guide names — geography (regions/zones/edge locations, b-1.2-4) and resources
   (resources/projects/folders/organization node, b-6.1-4) — support it directly.
2. **Cap `E08 invented-name` hard — proposed 0.10 of items, and never more than one per item.**
   Nine instances here, mostly padding. An invented product name is the cheapest distractor to
   write and the cheapest to eliminate.
3. **Ban “any of the above” / “depends on the type” options outright.** All three `D14` instances
   are this shape. It is an option that concedes the item.
4. **Keep `E05` for genuinely definitional items only.** At 20% it is what makes this source feel
   like a flashcard deck rather than a scenario exam.
5. **Negative stems are allowed but capped — proposed one per domain.** Three items here invert
   the item (“which is *not*…”, “which strategy is *not* suitable”). Item 6.4 shows the good form
   — the non-keys are all correct designs and the candidate must reason about scope. The
   connect-methods item shows the bad form — the key is an invented name and the item degrades to
   spot-the-fake.
6. **Do not inherit the domain mix**, and note that this source's bias runs the *same direction*
   as the official set's (d6 over-served, d3 starved). Two sources agreeing on a distortion is not
   convergence — it is a shared blind spot, and S3 must correct against the blueprint, not against
   the union.
7. **Apply the guide's verb test as an inventory gate.** Fourteen off-blueprint items here all
   fail one test: they ask what a practitioner configures. Any candidate concept whose natural
   item requires an operational action should be rejected at S3, not caught at S5.

## Concepts this source tests that other sources do not spell out

- the nesting of Google's geography — region above zone above data centre (b-1.2-4), twice
- the zone as the fault-tolerance boundary *within* a region (b-1.2-4)
- service-model classification read from the **responsibility boundary** (who patches) rather than
  from a product name (b-1.2-5/6)
- deployment-model choice driven by sole tenancy and hosting location (b-1.2-1)
- the resource hierarchy as the structuring mechanism for management and cost allocation, distinct
  from the controls layered on it (b-6.1-4/5)
- every resource belongs to a project; every resource has exactly one parent (b-6.1-4)
- resource scope (zonal / regional / global) as a property that decides survivability (b-6.2-3)
- observability product selection across the logging / metrics / tracing family (b-6.2-1)
- business continuity as a named planning discipline (b-6.2-3)
- self-service cost estimation before commitment (b-6.1-2)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: migration-path selection, the
compute-abstraction ladder, TCO and the CapEx→OpEx shift, financial accountability and the cloud
centre of excellence, encryption-by-default, security-property discrimination, threat
classification, privacy as a concept, ingestion-versus-processing, data-lake classification, BI
value and responsible-AI judgment — all from
[`source-gcp-cdl-samples.md`](source-gcp-cdl-samples.md) — plus the entire 2026 surface of the
blueprint, which comes from [`source-gcp-cdl-guide.md`](source-gcp-cdl-guide.md) alone.
