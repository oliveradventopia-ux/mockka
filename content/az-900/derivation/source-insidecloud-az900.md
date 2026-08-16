# Artefact A · Inside Cloud and Security AZ-900 quiz distillation

**What this is.** The freely published AZ-900 practice quiz on `insidethemicrosoftcloud.com`
contains **100 questions** written against the public exam outline. This document records, for each
item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does an independent, non-vendor author believe is tested?" — and at 100 items it is the only source
in this package large enough to produce a meaningful distractor-pattern frequency baseline.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `insidecloud-az900` in [sources.md](sources.md). Credited in the exam README.
> Screened against the dump corpus lowest-id-first — item 5 has no external match at all and item 2
> surfaces only on homework-help re-hosts that quote *this* quiz; there is no numbered correspondence
> to any ExamTopics topic/question index, and where a topic overlaps the dump corpus the option sets
> and keys differ. Screening is evidence of absence, not proof of originality — recorded as such.
> **Attribution caveat:** the page names no individual author, and none was verifiable at S1
> `[UNVERIFIED]`; the registry credits the site/channel operator.
>
> **Key-determination note.** Keys are published by the source for most items but are revealed
> client-side; where the source's key is contestable against the current outline or against its own
> other items, that is called out in the tables and totalled in the defects section. Two items are
> keyed in ways I judge outright wrong (5.x below) — flagged, not silently corrected.

Theme set (Z1–Z7) and pattern extensions (E01–E05) are the ones proposed in
[`source-ms-learn-az900-modules.md`](source-ms-learn-az900-modules.md#proposed-theme-set-for-s3s-authoringjson).

## Format mix observed

| Domain | Single choice (3–4 options) | Binary (Yes/No, True/False) | Multiple response | Matching | Total |
|---|---|---|---|---|---|
| d1 Describe cloud concepts | 13 | 1 | 0 | 0 | 14 |
| d2 Describe Azure architecture and services | 43 | 14 | 0 | 0 | 57 |
| d3 Describe Azure management and governance | 24 | 5 | 0 | 0 | 29 |
| **Total** | **80** | **20** | **0** | **0** | **100** |

Asymmetries worth preserving or correcting, explicitly:

- **A fifth of the paper is binary.** Twenty Yes/No or True/False items, several written in
  Microsoft's problem-solution shape (a scenario, a proposed solution, "does this meet the
  requirement?"). This independently corroborates `tutorialsdojo-az900`'s two problem-solution items
  and Microsoft's own statement that such sets exist — three independent attestations, which is why
  the format profile treats the shape as real rather than as one author's habit. **But 20% is far too
  high**: a binary item is worth half a four-option item in discrimination and the same in reading
  time. Recommend the mock cap the shape well below this.
- **Zero multiple-response, zero matching, zero ordering, zero hot-area.** Together with
  `ms-learn-az900-modules`, that is 135 items across two sources with **no multi-select at all**.
  Only `tutorialsdojo-az900` demonstrates the non-single-choice shapes. Treat any format-mix number
  in this package as low-confidence.
- **Domain mix is 14/57/29% against the manifest's 28/38/34.** d2 is over-served by 19 points and d1
  under-served by 14. A bank built to this shape would badly under-drill cloud concepts. Do not
  inherit it.
- **Option counts vary (2, 3 and 4) without a stated rule.** The mock should fix four for
  single choice and two for the problem-solution shape.

## Domain 1 · Describe cloud concepts (14 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | consuming only vendor-run services makes an estate public cloud (b-1.1-3) | Z1 | E03 ×2 deployment-model-swap (private, hybrid), D19 ×1 category-error (a sovereign cloud offered as a deployment model) |
| 1.2 | with a finished application the customer configures features and nothing beneath them (b-1.3-3, b-1.1-2) | Z1 | E03 ×3 responsibility-ladder-slip (three IaaS/PaaS-level responsibilities offered as SaaS ones) |
| 1.3 | shared virtualisation owned and used by one organisation is private cloud, wherever it sits (b-1.1-3) | Z1 | E03 ×3 deployment-model-swap |
| 1.4 | a managed cloud data service is operating expenditure; an owned on-premises cluster is capital (b-1.1-5) | Z4 | E03 ×3 permutation of the same two labels. **Keyed to a service the outline does not name** |
| 1.5 | paying only for what is used is the consumption-based model (b-1.1-5) | Z1 | E03 ×1 pricing-model-swap (fixed price) — two-option item |
| 1.6 | virtual machines are infrastructure as a service (b-1.3-1) | Z1 | E03 ×3 service-model-swap (incl. FaaS, a term the outline does not use) |
| 1.7 | managed app-hosting and managed data services are platform as a service (b-1.3-2) | Z1 | E03 ×3 service-model-swap. Named services are outside the outline |
| 1.8 | needing capacity while minimising *both* capital and operating expenditure points at public cloud (b-1.1-4) | Z1 | E03 ×2 deployment-model-swap, D01 ×1 over-engineering (buy more on-premises servers) |
| 1.9 | classifying three named products across all three service models at once (b-1.3-4) | Z1 | E03 ×2 permutation. **One of the three named products is outside the outline** |
| 1.10 | a managed relational database service is platform as a service (b-1.3-2) | Z1 | E03 ×3 service-model-swap. Named service outside the outline |
| 1.11 | capacity that expands for a month-end spike and contracts afterwards — **elasticity, a term this outline does not name**; the outline's own word for the capability is scalability (b-1.2-1) | Z1 | E03 ×3 benefit-term-swap (scalability, fault tolerance, high availability) |
| 1.12 | moving owned servers to rented ones converts capital to operating expenditure (b-1.1-5) | Z4 | E03 ×1 expenditure-swap, D19 ×2 invented-category (two labels that are not expenditure types) |
| 1.13 | unit cost falling as aggregate volume grows — **economies of scale, which this outline does not name** | Z1 | E03 ×3 benefit-term-swap |
| 1.14 | *binary, keyed False* — the cheapest-over-time option is not the most flexible one; the source states the relationship inverted and asks the candidate to catch it (b-1.1-6) | Z4 | D19 ×1 inverted-claim |

**Domain 1 observation.** Fourteen items, and **eight of them are the same service-model or
deployment-model classification** in different clothes. The domain's real content — shared
responsibility (b-1.1-2), appropriate use cases (b-1.1-4), the four benefit bullets, serverless
(b-1.1-7) — is barely touched, and two items (1.11, 1.13) test vocabulary the 2026 outline dropped.
Item **1.14 is the most valuable item in the whole source**: it is the only item anywhere in this
package that attacks *comparing cloud pricing models* (b-1.1-6) head-on, and it does it by asserting
a plausible inversion and making the candidate refute it. That construction — D19 inverted-claim in
a binary shell — is worth adopting as a house shape.

## Domain 2 · Describe Azure architecture and services (57 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | *binary, keyed Yes* — an event-driven function host beats a VM for an occasional script on both cost and maintenance (b-2.2-1, b-1.1-7) | Z2 | E03 ×1 compute-shape-swap |
| 2.2 | a managed SMB file service beats blob, a VM-hosted share, or a scale set for a plain file share (b-2.3-1) | Z2 | E01 ×3 service-role-swap, one of which (build it on a VM) is also over-engineering |
| 2.3 | *binary, keyed Yes* — a resource group can hold resources from multiple regions; it is a management boundary, not a placement one (b-2.1-4) | Z3 | D19 ×1 false-mechanism-claim |
| 2.4 | on-demand execution of scripted tasks at lowest cost is the function host (b-2.2-1) | Z2 | E01 ×3 service-role-swap (a telemetry service, a browser shell, an automation service) |
| 2.5 | a zone protects against the loss of a whole datacenter, where an in-datacenter construct does not (b-2.1-2) | Z5 | E03 ×3 resilience-construct-swap (availability set, scale set, single VM) |
| 2.6 | the tier priced highest for storage and lowest for access is the frequent-access tier (b-2.3-2) | Z1 | E03 ×3 tier-ladder-swap |
| 2.7 | the tier priced lowest for storage and highest for retrieval is the archive tier (b-2.3-2) | Z1 | E03 ×3 tier-ladder-swap — deliberate mirror of 2.6, and a legitimate pairing |
| 2.8 | a large volume of small messages retrieved over authenticated HTTP is the queue service (b-2.3-4) | Z2 | E03 ×3 storage-type-swap |
| 2.9 | applying policy across many subscriptions requires the container *above* subscriptions (b-2.1-6/7) | Z3 | E02 ×1 scope-level-slip (resource group), E01 ×1 service-role-swap (RBAC), D19 ×1 invented-term |
| 2.10 | a private circuit, not a tunnel over the internet, when latency and security both dominate (b-2.2-5) | Z2 | E03 ×2 connectivity-sibling, E01 ×1 (an application-layer service, outside the outline) |
| 2.11 | a tunnel over the internet, not a private circuit, when the pilot must stay cheap (b-2.2-5) | Z2/Z4 | E03 ×2 connectivity-sibling, E01 ×1 — deliberate mirror of 2.10, and the best-constructed pair in the source |
| 2.12 | *binary* — **enforcing a specific TLS version on a managed app host: below blueprint altitude** | Z1 | D19 ×1 |
| 2.13 | an SMB share on a UNC path with least administration is the managed file service (b-2.3-1) | Z2 | E01 ×2 service-role-swap (two collaboration products outside the outline), D01 ×1 over-engineering (run it on a VM) |
| 2.14 | VM operating-system and data volumes live on the disk service (b-2.3-4) | Z1 | E03 ×3 storage-type-swap |
| 2.15 | *binary, keyed Yes* — many subscriptions can trust one directory tenant (b-2.1-5, b-2.4-1) | Z3 | D19 ×1 false-mechanism-claim |
| 2.16 | a region is a latency-bounded set of datacenters, not a single facility and not a zone (b-2.1-1/3) | Z3 | E03 ×3 geography-ladder-swap (zone, geography, datacenter) |
| 2.17 | the geo-plus-zone option is the redundancy ceiling (b-2.3-3) | Z5 | E03 ×3 redundancy-ladder-swap |
| 2.18 | an availability set isolates update, power and network failure *inside* a datacenter (b-2.2-2) | Z5 | E03 ×3 resilience-construct-swap — deliberate mirror of 2.5 |
| 2.19 | **the portal's URL: below blueprint altitude** (b-3.3-1 at best) | Z1 | D19 ×3 invented-hostname |
| 2.20 | hosting code with no server to manage is the function service (b-2.2-1) | Z2 | E01 ×3 service-role-swap — **all three wrong options are outside the outline** |
| 2.21 | unstructured binary and text at scale is the blob service (b-2.3-1/4) | Z1 | E03 ×3 storage-type-swap |
| 2.22 | posture and best-practice recommendations for a container platform come from the security posture service (b-2.4-8) | Z7 | E01 ×3 service-role-swap |
| 2.23 | *binary, keyed False* — virtual networks are isolated by default; connectivity must be created (b-2.2-5) | Z3 | D19 ×1 false-mechanism-claim |
| 2.24 | the passwordless mechanism on Windows endpoints (b-2.4-2) | Z6 | E01 ×3 identity-feature-swap. **Keyed to a mechanism the outline names only as the category "passwordless"** |
| 2.25 | *binary* — **opening an inbound rule on a network security group: the service is outside the outline** | Z6 | D19 ×1 |
| 2.26 | **a network firewall across many virtual networks: outside the outline** | Z2 | E01 ×3 |
| 2.27 | defining and enforcing standards across subscriptions is the policy service (b-3.2-2) | Z7 | E01 ×3 service-role-swap (two outside the outline) |
| 2.28 | **cloud identity threat protection: the service is outside the outline** | Z6 | E01 ×3 |
| 2.29 | **the on-premises side of a site-to-site pairing: below blueprint altitude** (b-2.2-5) | Z3 | E01 ×3 |
| 2.30 | *binary, keyed Yes* — permissions assigned at a resource group flow to the resources in it (b-2.1-7, b-2.4-5) | Z3 | D19 ×1 false-mechanism-claim |
| 2.31 | **on-premises identity threat protection: the service is outside the outline, and the source's key names the wrong product even within its own family** — see defects | Z6 | E01 ×3 |
| 2.32 | signals such as location and device state deciding what a sign-in must satisfy (b-2.4-4) | Z6 | E01 ×3 identity-feature-swap (all three outside the outline) |
| 2.33 | prompting for a second factor only from outside trusted locations (b-2.4-4) | Z6 | E01 ×3 — **near-duplicate of 2.32** |
| 2.34 | hardware/software one-time-password tokens as a second factor (b-2.4-2) | Z6 | E01 ×3 identity-feature-swap |
| 2.35 | the three principles of the assume-breach security model (b-2.4-6) | Z6 | E03 ×3 principle-permutation — each wrong option swaps exactly one of the three terms, which is the correct way to build this item |
| 2.36 | *binary, keyed Yes* — one directory can serve both cloud and synchronised on-premises identities for sign-on and second factor (b-2.4-1/2) | Z6 | D19 ×1 |
| 2.37 | the group type used to assign permissions, versus containers that group *resources* (b-2.4-5) | Z6 | E02 ×2 scope-level-slip (resource group, management group offered as identity containers), E01 ×1 |
| 2.38 | proving who the user is, as distinct from what they may do (b-2.4-2) | Z6 | E03 ×3 security-property-swap |
| 2.39 | keeping an on-premises share and a cloud file service in step in both directions (b-2.3-5) | Z2 | E01 ×3 tool-role-swap — **all three wrong options are inside the outline**, which makes this the cleanest item in the source |
| 2.40 | combining signal-based access decisions with risk detection (b-2.4-4) | Z6 | E01 ×3 — partly outside the outline |
| 2.41 | deciding what an authenticated principal may do (b-2.4-5) | Z6 | E03 ×3 security-property-swap — **mirror of 2.38** |
| 2.42 | nationally isolated cloud instances are sovereign regions (b-2.1-1) | Z3 | E03 ×2 geography-term-swap, E02 ×1 (a management container offered as a geography) |
| 2.43 | defining authentication a third time (b-2.4-2) | Z1 | E03 ×3 — **second near-duplicate of 2.38** |
| 2.44 | scripting bulk copy to and from a storage account from the command line (b-2.3-5) | Z2 | E01 ×3 tool-role-swap — all three inside the outline; pairs with 2.39 |
| 2.45 | the cheapest redundancy option, for data whose loss is tolerable (b-2.3-3) | Z4/Z5 | E03 ×3 redundancy-ladder-swap — mirror of 2.17 |
| 2.46 | *binary, keyed Yes* — a scale set is the construct for a seasonal traffic spike on a load-balanced tier (b-2.2-2) | Z5 | E03 ×1 |
| 2.47 | schemaless key/attribute storage is the table service (b-2.3-4) | Z1 | E03 ×3 storage-type-swap |
| 2.48 | finding deviations from security best practice across the estate (b-2.4-8) | Z7 | E01 ×3 — key contestable against the recommendation service, see defects |
| 2.49 | demonstrating regulatory-standard compliance of the Azure estate (b-2.4-8) | Z7 | E01 ×3 — **key contradicts item 3.20 in this same source**, see defects |
| 2.50 | a gateway that carries encrypted traffic between a virtual network and on-premises over the internet (b-2.2-5) | Z1 | E01 ×2, E03 ×1 |
| 2.51 | *binary, keyed Yes* — spreading instances across zones survives one datacenter failing (b-2.1-2) | Z5 | D19 ×1 |
| 2.52 | the managed app host serves web, mobile and API workloads alike (b-2.2-4) | Z1 | E03 ×3 partial-truth — three individually true options against an all-of-the-above key, which is a construction tell |
| 2.53 | staggered updates plus varied power and network is the availability-set construct (b-2.2-2) | Z5 | E03 ×1 sibling-construct, E01 ×1, D19 ×1 invented-term — **near-duplicate of 2.18** |
| 2.54 | *binary, keyed Yes* — containers can run without a host to manage (b-2.2-1) | Z1 | D19 ×1. Concept in the outline; keyed to a service the outline does not name |
| 2.55 | *binary* — **container bursting into a managed orchestrator: outside the outline and below altitude** | Z2 | D19 ×1 |
| 2.56 | *binary, keyed Yes* — subnets inside one virtual network are routable by default (b-2.2-5) | Z3 | D19 ×1 — deliberate contrast with 2.23, and the pair is genuinely diagnostic |
| 2.57 | *binary* — **the tier names of a network DDoS product: outside the outline, and the names are stale** | Z1 | D19 ×1 |
| 2.58 | *(no item — d2 count is 57; see the totals row)* | | |

*(Row 2.58 is a numbering artefact of the table above; the domain contains 57 classified items,
2.1–2.57 inclusive plus the low-code-workflow item and the eventing item recorded under §off-blueprint
below, which are counted in d2 for domain-mix purposes because that is where the source places them.)*

**Domain 2 observation.** Fifty-seven items, and the source's judgment about *what* d2 contains is
five years out of date: eleven items are keyed to services this outline does not name, three sit
below its altitude, and the identity block spends four items on products (risk-based identity
protection, privileged access, endpoint protection) that the outline stops short of. What it does
well is worth extracting: the **deliberate mirror pairs** — 2.10/2.11 (private circuit vs tunnel,
decided by cost against latency), 2.6/2.7 (tier ladder from both ends), 2.17/2.45 (redundancy ladder
from both ends), 2.5/2.18 (zone vs set by failure class), 2.23/2.56 (isolation across virtual
networks vs routing within one) — are the single best authoring idea in the package. Each pair takes
one concept and forces the candidate to reason from the *constraint in the stem* rather than from
recall, and neither member is answerable by having memorised the other. Nothing here tests **b-2.2-3**
(resources required for VMs), **b-2.2-6** (public and private endpoints), **b-2.3-6** (Migrate, Data
Box) or **b-2.4-3** (external identities); **b-2.4-7** (defense-in-depth) appears only as a
distractor.

## Domain 3 · Describe Azure management and governance (29 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | a term commitment converts unpredictable consumption spend into a predictable one (b-3.1-1, b-1.1-6) | Z4 | E03 ×1 pricing-model-swap, E01 ×2 service-role-swap (a scaling construct and a purchasing channel) |
| 3.2 | declarative templates give identical repeat deployments (b-3.3-5) | Z2 | E01 ×2 service-role-swap (both outside the outline), E02 ×1 (a governance container offered as a deployment mechanism) |
| 3.3 | *binary, keyed Yes* — a stopped VM still bills for its attached storage (b-3.1-1) | Z4 | D19 ×1 false-mechanism-claim |
| 3.4 | consolidating events from many resources into one queryable store (b-3.4-3) | Z2 | E01 ×3 service-role-swap — all three outside the outline. **Key conflicts with 3.11 and with `tutorialsdojo-az900`**, see defects |
| 3.5 | health and availability of a container platform through the telemetry service (b-3.4-3) | Z2 | E01 ×3 — key contestable against its own application-telemetry surface |
| 3.6 | *binary, keyed Yes* — estimating spend for a design not yet deployed is the calculator's job (b-3.1-2) | Z4 | E04 ×1 estimate-versus-analyse |
| 3.7 | classifying and protecting sensitive documents wherever they travel (b-3.2-1) | Z7 | E01 ×3 — two wrong options outside the outline |
| 3.8 | *binary, keyed Yes* — the recommendation service reports on resources that already exist (b-3.4-1) | Z2 | D19 ×1 |
| 3.9 | application-level performance anomaly detection (b-3.4-3) | Z2 | E01 ×3 — all three outside the outline |
| 3.10 | **automating a response to a telemetry alert: keyed to a service outside the outline** | Z2 | E01 ×3 |
| 3.11 | centrally collecting, storing and acting on events across the estate (b-3.4-3) | Z2 | E03 ×1 containment-confusion (an application-telemetry surface *of* the platform offered against the platform), E01 ×2 |
| 3.12 | alerting when a service instance stops running (b-3.4-3) | Z2 | E03 ×2 containment-confusion (query store, application telemetry), E01 ×1 |
| 3.13 | defining and enforcing corporate standards on new and existing resources (b-3.2-2) | Z7 | E01 ×3 |
| 3.14 | preventing accidental deletion regardless of who holds permissions (b-3.2-3) | Z7 | E01 ×2, D19 ×1 |
| 3.15 | restricting the regions in which resources may be created (b-3.2-2) | Z7 | E01 ×2, E05 ×1 retired-service (a retired packaging service offered as the control) |
| 3.16 | verifying that the estate meets a regulator's requirements (b-3.2-1) | Z7 | E01 ×3 — **key contradicts item 2.49**, see defects |
| 3.17 | **a repeatable package of templates, roles and policies: keyed to a retired service** | Z7 | E01 ×2, E05 ×1 |
| 3.18 | metadata that lets spend be sliced by department for chargeback (b-3.1-4) | Z4 | E01 ×1, E02 ×2 scope-level-slip (grouping containers offered as a labelling mechanism) |
| 3.19 | identifying and enforcing standards across new and existing deployments (b-3.2-2) | Z7 | E05 ×1 retired-service, E01 ×2 — **near-duplicate of 3.13** |
| 3.20 | preventing any principal, including an owner, from creating resources in a group (b-3.2-3) | Z7 | E01 ×3 — key contestable against the policy service, see defects |
| 3.21 | tracking consumption by application and department (b-3.1-4) | Z4 | E01 ×1, E02 ×1, D19 ×1 malformed-option — **near-duplicate of 3.18** |
| 3.22 | costing a set of resources before deploying them (b-3.1-2) | Z4 | E04 ×1 estimate-versus-analyse, E01 ×1, E05 ×1 retired-calculator |
| 3.23 | a multi-year commitment as the lever for long-lived steady VM capacity (b-3.1-1) | Z4 | E04 ×1, E01 ×2 |
| 3.24 | recommendations for reducing the cost of running resources (b-3.4-1, b-3.1-3) | Z2 | E01 ×3 |
| 3.25 | *binary, keyed No* — the spend-analysis service reports what has been spent; it does not price a design that does not exist (b-3.1-2/3) | Z4 | E04 ×1 — **the single best-constructed item in the source**, see below |
| 3.26 | *binary, keyed No* — a resource group is free; only the resources in it bill (b-3.1-1) | Z4 | D19 ×1 |
| 3.27 | recommendations for reducing VM cost, asked a second way (b-3.4-1) | Z2 | E04 ×2 estimate-versus-analyse (the calculator and the spend analyser offered against the recommender), E01 ×1 — **near-duplicate of 3.24** |
| 3.28 | *binary, keyed Yes* — zone-spread instances survive a datacenter loss *(counted in d2 as 2.51; listed here only because the source files it under management)* | Z5 | — |
| 3.29 | **a low-code workflow builder for non-developers: outside the outline** | Z2 | E01 ×3 |

**Domain 3 observation.** The strongest domain in this source and the one worth learning from. Three
findings:

1. **The estimate-versus-analyse discrimination is exercised four times from four directions** (3.6,
   3.22, 3.25, 3.27), including once as a keyed-**No** problem-solution (3.25) — the hardest and best
   version of it. This is the source's real contribution, it is independently corroborated by
   `tutorialsdojo-az900` and by `ms-learn-az900-modules`, and it is the evidential basis for pattern
   `E04`.
2. **The telemetry family is treated as four rival products rather than one platform with named
   surfaces.** Items 3.4, 3.5, 3.9, 3.11, 3.12 and 3.24 collectively offer the platform, its query
   store, its application-telemetry surface and its alerting layer *against each other*, and at least
   three of the six are answerable two ways as written. The outline's own phrasing — *Azure Monitor,
   including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights* — encodes
   containment, and authoring must build that containment into the key rather than pretend the
   surfaces compete.
3. **The governance block is nearly right and repeatedly duplicated.** Policy-versus-lock is asked
   five times (3.13, 3.14, 3.15, 3.19, 3.20) and never once as the discrimination that actually
   matters: a policy stops the *creation* of something non-compliant, a lock stops the *deletion* of
   something that exists, and RBAC decides who may attempt either. One well-built item replaces all
   five.

## Off-blueprint audit — the reason this source cannot be trusted concept-for-concept

Screened every key against the named-service register in
[`source-az900-studyguide.md`](source-az900-studyguide.md#named-service-register-the-answer-space).
**21 of 100 items are unusable as concept evidence:**

| Bucket | Count | Items |
|---|---|---|
| (a) key concept is outside the 2026-07-20 outline entirely | 12 | elasticity as a named benefit (1.11) · economies of scale (1.13) · low-code workflow (3.29) · eventing/relay service · alert-response automation (3.10) · network security group rule (2.25) · network firewall (2.26) · cloud identity risk protection (2.28) · on-premises identity protection (2.31) · combined risk + access services (2.40) · the retired packaging service (3.17) · DDoS product tiers (2.57) |
| (b) concept is in the outline but the key names a service the outline does not | 6 | service-model classification keyed to an eventing service (1.9) · container instances (2.54, 2.55) · the Windows passwordless mechanism (2.24) · container-platform monitoring (3.5) · container-platform posture (2.22) |
| (c) below blueprint altitude — configuration or trivia, not description | 3 | TLS version enforcement (2.12) · the portal hostname (2.19) · the on-premises gateway object (2.29) |

The 12 in bucket (a) map almost exactly onto skill groups that the **pre-2021 AZ-900 outline**
contained and the current one does not. The inference recorded for S3: **this source is calibrated to
an earlier blueprint**, so agreement between it and any other pre-2026 source is evidence about the
old exam, not the current one. Convergence must be computed *after* filtering against the named-service
register, never before.

## Internal defects and key conflicts (recorded, not corrected)

| Defect | Items | Note |
|---|---|---|
| **Direct key contradiction** | 2.49 vs 3.16 | "which service tells me whether the estate meets HIPAA/PCI?" is keyed to the security-posture service in one item and to the data-governance service in the other. Both are defensible readings; the source holds both simultaneously |
| **Cross-source key conflict** | 3.4 vs 3.11, and both vs `tutorialsdojo-az900` 3.1 | "correlate events from many resources into a central repository" is keyed to the query store here, to the platform there, and to the platform again in the third-party source. The concept is real; the key depends on how finely the author reads the platform/surface boundary. **This is the one concept in the package where the sources genuinely disagree, and S3 must resolve it explicitly rather than averaging it** |
| **Wrong product within the right family** | 2.31 | protecting *on-premises* directory identities is keyed to the endpoint-protection product; the product that actually does that job is not among the options |
| **Contestable key** | 2.48, 3.20 | "deviations from security best practice" is answerable by the recommendation service as well as the posture service; "stop anyone creating resources here" is answerable by a read-only lock *or* a deny policy |
| **Malformed option** | 3.21 | one option is a bare product-family name with no predicate — an instant tell |
| **Stale product naming** | 2.57, and the security items generally | tier names and product names that have since been renamed |
| **Near-duplicate clusters** | 6 clusters, 14 items | authentication-vs-authorization asked three times (2.38, 2.41, 2.43); conditional access twice (2.32, 2.33); policy-for-standards twice (3.13, 3.19); recommendation-service-for-cost twice (3.24, 3.27); tags-for-chargeback twice (3.18, 3.21); availability sets twice (2.18, 2.53) |

**14 of 100 items are near-duplicates of another item in the same source.** Combined with the 21
off-blueprint items, roughly a third of this source carries no independent information. Its effective
size for inventory purposes is closer to **65 items**, and S3 should weight it accordingly.

## Distractor-pattern frequency across the 100 items

Distractor slots ≈ **257** (80 single-choice items at 1–3 wrong options, mostly 3, plus 20 binary
items at 1).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` | 116 | **45% of every wrong option.** Twenty-one items are built *entirely* from it. This is the exam's natural distractor and the source's crutch |
| E03 `sibling-term-substitution` | 93 | **36%.** Concentrated in d1's service-model spine and in the storage/redundancy/tier ladders, where it is the correct pattern |
| D19 false-technical-claim | 27 | 18 of these are the binary items' wrong branch (mostly good, mechanism-level claims); the rest split between invented terms and one malformed option |
| E02 `scope-level-slip` | 8 | 3% — under-used, and every instance is one of the source's better items (2.9, 2.37, 3.18) |
| E04 `estimate-versus-analyse` | 6 | small count, outsized value: the only pattern in the package that separates candidates who know *what a tool is for* from those who know *what it is called* |
| E05 `retired-or-offblueprint-service` | 4 | present as a distractor only four times, but present as a **key** twenty-one times — the inverse and more dangerous failure |
| D01 over-engineering | 2 | build-it-on-a-VM offered against a managed service; effective when used |
| D14, D05, D06, D07, D11, D13 | 0 | the shared registry's judgment patterns do not appear at all. Expected at this altitude: a fundamentals exam tests discrimination, not professional judgment |

**Consequences for authoring.**

1. **Cap `E01 service-role-swap` at 0.30 of items.** At 45% of wrong options here and 36% in the
   vendor's own curriculum, it is the pattern that will run away with the bank if uncapped. The cap
   forces the stem to carry a constraint rather than a service name.
2. **Cap `E03 sibling-term-substitution` at 0.35 of items.** Right for the closed families (service
   models, tiers, redundancy ladders, resilience constructs) and only those.
3. **Raise `E02 scope-level-slip` hard.** Eight instances in 257 slots across the largest source in
   the package, and zero in the other two — 135 items with none at all. The outline hands you two
   containment chains and neither is being used to build distractors. Target it as the primary
   wrong-option family for skill group 2.1 and for the governance items in 3.2.
4. **Raise `E04 estimate-versus-analyse`** and generalise it: the same shape works for
   *recommend vs enforce* (Advisor vs Policy), *observe vs prevent* (Monitor vs Policy) and
   *protect vs authorise* (lock vs RBAC). Every one of those is a named-bullet pair.
5. **Use `E05` deliberately and sparingly as a distractor, never as a key.** A retired or
   out-of-outline service is legitimate as *one* wrong option — it rewards a candidate who knows the
   current boundary — but two of ten items in `tutorialsdojo-az900` and twenty-one of a hundred here
   are keyed to one, which teaches the wrong exam.
6. **Adopt the mirror-pair construction** (2.10/2.11, 2.6/2.7, 2.17/2.45, 2.5/2.18, 2.23/2.56). It is
   the highest-value structural idea in the package and it is free: each pair is one concept, two
   constraints, two items, and neither leaks the other.
7. **Cap the binary problem-solution shape well below 20% of the paper.** It is a real AZ-900 item
   type and should appear, but at this frequency it halves the paper's discrimination.
8. **Ban the all-of-the-above key** (2.52) and the bare-label option (3.21).
9. **Do not inherit the domain mix** — d1 needs roughly double this source's share.

## Concepts this source tests that other sources do not spell out

- comparing cloud pricing models head-on, as an inverted claim to refute (b-1.1-6) — item 1.14, the
  only attestation of that bullet anywhere in the package
- the spend-analyser-is-not-an-estimator discrimination as a keyed-**No** problem-solution (b-3.1-2/3)
- resource groups as a management boundary that does **not** bound region (b-2.1-4)
- many subscriptions trusting one directory tenant (b-2.1-5 × b-2.4-1)
- virtual-network isolation by default versus subnet routing by default, as a deliberate pair (b-2.2-5)
- resource groups themselves are free (b-3.1-1)
- sovereign regions as nationally isolated instances rather than as a deployment model (b-2.1-1)
- the cheapest redundancy option chosen *because* the data is expendable (b-2.3-3) — cost as the
  driver of a resilience choice, which no other source does
- one-time-password tokens as a second-factor mechanism (b-2.4-2)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the shared responsibility model as
its own item (only `ms-learn-az900-modules` has it), region pairs, the union semantics of multiple
role assignments, Azure Arc, infrastructure as code as a concept, the Azure Status / Service Health /
Resource Health triad, spot capacity, and every one of the 11 blueprint-only bullets listed in
[`source-az900-studyguide.md`](source-az900-studyguide.md#concepts-this-source-holds-that-no-practice-source-tests).
