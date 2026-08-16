# Artefact A · Microsoft Learn AZ-900 curriculum distillation

**What this is.** Microsoft's own free AZ-900 learning paths ("Introduction to Cloud Infrastructure",
parts 1–3) contain **12 modules**, each ending in a knowledge check — **35 questions** in total,
written by the certification owner against its own outline. This document records, for each item,
**the concept it tests** and **how each wrong option is constructed**, plus the module→domain
reconciliation.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does the vendor's *own curriculum* believe is tested?" — the closest accessible proxy for the
Tier-1 Practice Assessment that sits behind an account wall (see
[sources.md](sources.md#ms-practice-assessment--pending-access-deliberately-not-accessed)).

**What it is not.** It is not a copy of the source material. No question text, option text or
explanatory prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `ms-learn-az900-modules` in [sources.md](sources.md). Credited in the exam README.
> Registered **once** although it is both a syllabus and a practice source, so that S3 does not
> compute convergence between two readings of the same material.
>
> **Key-determination note.** Microsoft renders knowledge-check stems and options server-side but
> validates the key through an authenticated progress API, so no key is published. Every key below
> was **determined analytically** during distillation. All 35 are unambiguous at this altitude; none
> is marked contested. This is recorded because it is a real epistemic difference from the other two
> Artefact-A sources, where the author publishes the key.

## Proposed theme set (for S3's `authoring.json`)

The T1–T8 starter themes in `methodology/03-authoring-guide.md#themes` were derived from an
architecture-professional exam and fit this foundational exam poorly (no autonomy-level or
trust-boundary judgments exist at this altitude). All three Artefact-A documents in this package use
the proposed set below; **declaring it is S3's call**, not this session's.

| id | Theme | Judgment exercised |
|---|---|---|
| Z1 | Concept identification | name the cloud concept, deployment model, service model or benefit behind a described situation |
| Z2 | Service selection | pick the Azure service that performs the required job, against near neighbours that perform adjacent jobs |
| Z3 | Scope & topology placement | put the thing at the right level — resource group vs subscription vs management group, region vs zone vs region pair, VNet vs subnet vs peering |
| Z4 | Cost & commercial judgment | pricing model, cost lever, or the difference between estimating spend and analysing it |
| Z5 | Resilience judgment | choose the construct that survives the *stated* failure — component, rack, datacenter, zone, region |
| Z6 | Identity & access judgment | authentication vs authorization, conditional signals, role scope and combination |
| Z7 | Governance control placement | the control that meets the obligation — prevent vs protect vs authorise vs classify vs observe |

## Proposed distractor-pattern extensions (for S3's `authoring.json`)

Five mechanisms recur across this exam's sources that the shared D01–D20 registry does not name. The
registry's patterns are failures of *professional judgment*; a fundamentals exam's dominant
distractors are failures of *technical discrimination*. Proposed extensions, with the evidence count
**from this source**:

| id | Name | Definition | Count here |
|---|---|---|---|
| E01 | `service-role-swap` | a real Azure service that performs an adjacent but different job | 25 |
| E02 | `scope-level-slip` | the right mechanism offered at the wrong level of the containment hierarchy (resource group for subscription, region for zone, subnet for VNet) | 0 |
| E03 | `sibling-term-substitution` | a neighbouring term from the same closed family offered as the answer — IaaS/PaaS/SaaS, vertical/horizontal, LRS/ZRS/GRS/GZRS, availability set/zone/scale set, public/private/hybrid | 27 |
| E04 | `estimate-versus-analyse` | a tool that reports spend already incurred offered where a pre-deployment estimate is required, or the reverse | 1 |
| E05 | `retired-or-offblueprint-service` | an option naming a service that is retired, renamed, or outside the current skills outline | 0 |

D-patterns that transfer unchanged and are used below: **D14** dogma (absolute claims), **D19**
false-technical-claim — which for this exam splits into two useful sub-forms, *false-mechanism-claim*
(a plausible but wrong account of how something works) and *invented-term* (a label that does not
exist in Azure at all).

## Format mix observed

| Domain | Single choice | Multiple response | Ordering | Matching | Total |
|---|---|---|---|---|---|
| d1 Describe cloud concepts | 8 | 0 | 0 | 0 | 8 |
| d2 Describe Azure architecture and services | 18 | 0 | 0 | 0 | 18 |
| d3 Describe Azure management and governance | 9 | 0 | 0 | 0 | 9 |
| **Total** | **35** | **0** | **0** | **0** | **35** |

Asymmetries worth preserving or correcting, explicitly:

- **Every item is single choice with exactly three options.** The real exam's multiple choice uses
  four (both third-party sources use four, and Microsoft's sandbox multiple-choice demo shows four).
  Three options makes a guess worth 33% and compresses the distractor space to two slots — do **not**
  inherit the option count. Recommend `formats.single_choice.options = 4`.
- **Zero multi-select, zero drag-and-drop, zero hot-area, zero build-list.** The vendor's own sample
  list has six item types; its own curriculum demonstrates one. This source therefore carries **no
  format-mix signal at all** — the format profile in
  [sources.md](sources.md#format-profile-vs-mockkas-three-formats) rests on the vendor's published
  sample list plus `tutorialsdojo-az900`, not on this.
- **Domain mix is close to blueprint shape.** Observed 23/51/26% against the manifest's 28/38/34: d2
  over-served by about 13 points, d1 and d3 under-served by 5 and 8. Correct to blueprint weights.
- **Coverage is one-item-per-module-unit, not one-item-per-objective.** 35 items against 57 bullets,
  so even the vendor's own curriculum leaves a third of the outline unexercised.

## Module → exam domain mapping

| Learning path / module | Maps to | Skill group | Items |
|---|---|---|---|
| Cloud concepts › Describe cloud computing | d1 | 1.1 | 3 |
| Cloud concepts › Describe the benefits of using cloud services | d1 | 1.2 | 3 |
| Cloud concepts › Describe cloud service types | d1 | 1.3 | 2 |
| Architecture & services › Describe the core architectural components of Azure | d2 | 2.1 | 3 |
| Architecture & services › Describe Azure compute services | d2 | 2.2 | 4 |
| Architecture & services › Describe Azure networking services | d2 | 2.2 | 4 |
| Architecture & services › Describe Azure storage services | d2 | 2.3 | 3 |
| Architecture & services › Describe Azure identity, access, and security | d2 | 2.4 | 4 |
| Management & governance › Describe cost management in Azure | d3 | 3.1 | 3 |
| Management & governance › Describe features and tools in Azure for governance and compliance | d3 | 3.2 | 2 |
| Management & governance › Describe features and tools for managing and deploying Azure resources | d3 | 3.3 | 2 |
| Management & governance › Describe monitoring tools in Azure | d3 | 3.4 | 2 |

The curriculum **splits** skill group 2.2 across two modules (compute, then networking) where the
outline keeps it as one bullet group — the only place the mapping is not 1:1. A fourth learning path
("Apply Azure skills in guided projects", 8 hands-on modules) exists and is deliberately **not**
distilled: it teaches portal procedure, which this outline explicitly does not test.

## Domain 1 · Describe cloud concepts (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | cloud computing is the delivery of *computing services* over the internet, not of one service class (b-1.1-1) | Z1 | E03 ×2 scope-narrowed-definition (storage-only, websites-only) |
| 1.2 | a mix of shared multi-tenant capacity and single-customer capacity is hybrid (b-1.1-3) | Z1 | E03 ×2 deployment-model-swap (public, multicloud — *multicloud* is not a term this outline uses) |
| 1.3 | responsibility shifts with service type; IaaS leaves the customer the most (b-1.1-2) | Z1 | E03 ×2 service-model-swap (SaaS and PaaS offered against the responsibility ladder) |
| 1.4 | adding or removing instances is horizontal scaling (b-1.2-1) | Z1 | E03 ×1 sibling-axis (vertical), D19 ×1 invented-term ("direct scaling") |
| 1.5 | recovering from failure and continuing to function is reliability (b-1.2-2) | Z1 | E03 ×2 benefit-term-swap (predictability, scalability) |
| 1.6 | scaling down when demand drops as a sustainability practice — **off-blueprint**, see below | Z1 | D14 ×2 absolute-claim (always-on peak capacity, on-premises only) |
| 1.7 | lift-and-shift migration lands on IaaS (b-1.3-1/4) | Z1 | E03 ×2 service-model-swap (PaaS, SaaS) |
| 1.8 | a finished finance/expense application consumed as-is is SaaS (b-1.3-3/4) | Z1 | E03 ×2 service-model-swap (IaaS, PaaS) |

**Domain 1 observation.** The vendor's own curriculum reads d1 as pure **term discrimination** —
eight items, eight closed families, and in every case the key differs from its distractors by exactly
one defining property. That is the right pitch for the domain, but it means d1 items produce almost
no scenario surface. Item 1.6 tests **sustainability**, which the 2026-07-20 outline does *not* name
in skill group 1.2 (its four bullets are availability/scalability, reliability/predictability,
security/governance, manageability) — carry the item's *shape* if useful, not its concept. Nothing
here tests **b-1.1-6 compare cloud pricing models**, **b-1.2-3 security and governance as a
benefit**, or **b-1.2-4 manageability**.

## Domain 2 · Describe Azure architecture and services (18 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | a resource belongs to exactly one resource group at a time (b-2.1-4) | Z3 | D19 ×2 false-mechanism-claim (two, three — numeric foils implying multi-membership) |
| 2.2 | a setting applied at resource-group level reaches current *and* future members (b-2.1-4/7) | Z3 | D19 ×2 false-mechanism-claim (the two half-inheritance stories) |
| 2.3 | region pairs are the ≥300-mile replication relationship, distinct from in-region zones (b-2.1-1) | Z5 | E03 ×2 geography-term-swap (availability zones, sovereign regions) |
| 2.4 | availability sets stagger maintenance and isolate hardware failure via update and fault domains (b-2.2-2) | Z5 | E03 ×1 sibling-construct (scale sets), D19 ×1 invented-term ("update sets") |
| 2.5 | event-driven code with no instance to manage is Azure Functions (b-2.2-1, b-1.1-7) | Z2 | E01 ×2 service-role-swap (virtual machines, container instances) |
| 2.6 | hosting web apps and APIs without managing the host is App Service (b-2.2-4) | Z2 | E01 ×2 service-role-swap (virtual machines, ExpressRoute — the second is category-distant and cheap) |
| 2.7 | prebuilt vision/speech/language APIs — **off-blueprint**, see below | Z2 | E01 ×2 service-role-swap (virtual machines, virtual networks) |
| 2.8 | a subnet is the segmentation unit inside a virtual network (b-2.2-5) | Z3 | E01 ×2 cross-group-service-swap (availability sets, resource locks — both from other domains entirely) |
| 2.9 | private, predictable on-premises-to-Azure connectivity is ExpressRoute (b-2.2-5) | Z2 | E01 ×2 service-role-swap (Front Door, Load Balancer — **both outside this outline**) |
| 2.10 | route-based gateways are the recommended VPN gateway type for VNet-to-VNet and multisite — **below blueprint altitude**, see below | Z2 | E03 ×1 sibling-type (policy-based), D19 ×1 invented-term ("point-based") |
| 2.11 | Azure DNS lets you manage DNS records with the same credentials and tooling as the rest of Azure (b-2.2-5) | Z1 | D19 ×1 false-capability-claim (built-in registrar for all domains), D14 ×1 absolute-claim (removes the need for all network security controls) |
| 2.12 | keeping an on-premises Windows server and Azure Files continuously in step is Azure File Sync (b-2.3-5) | Z2 | E01 ×2 tool-role-swap (Storage Explorer, AzCopy) — all three options come from the same outline bullet, which is what makes this item honest |
| 2.13 | the geo-plus-zone redundancy option is the durability ceiling (b-2.3-3) | Z5 | E03 ×2 redundancy-ladder-swap (LRS, ZRS) |
| 2.14 | unstructured text and binary at analytics scale is the blob service (b-2.3-1/4) | Z2 | E01 ×2 storage-service-swap (files, disks) |
| 2.15 | varying the sign-in requirement from signals such as location is Conditional Access (b-2.4-4) | Z6 | E01 ×2 identity-feature-swap (guest access, passwordless) |
| 2.16 | assuming breach and verifying regardless of network position is Zero Trust (b-2.4-6) | Z6 | E03 ×2 security-model-swap (defense-in-depth, RBAC) |
| 2.17 | multiple RBAC assignments are additive — the union, not the intersection or the last one (b-2.4-5) | Z6 | D19 ×2 false-mechanism-claim (read-only, write-only: both model permissions as overriding rather than accumulating) |
| 2.18 | a dedicated store for secrets, certificates and keys — **off-blueprint**, see below | Z2 | E01 ×2 service-role-swap (Azure Policy, Azure Monitor) |

**Domain 2 observation.** Half the exam's weight and half this source's items, and it is where the
curriculum most visibly exceeds its own outline. Three items sit outside the 2026-07-20 skills
measured: **2.7** (Azure AI services are not named anywhere in the outline), **2.18** (Key Vault is
not named — the identity/security bullets stop at Defender for Cloud), and **2.10** (route-based
versus policy-based gateway *types* is a configuration distinction below "describe the purpose of
Azure VPN Gateway"). None of the three should enter the inventory as a concept. Item **2.17** is the
best-built item in the whole source — it is the only one whose distractors encode a *mechanism*
error rather than a naming error, and it is the model d2 authoring should follow. Nothing here tests
**b-2.2-3** (resources required for VMs), **b-2.2-6** (public and private endpoints), **b-2.3-6**
(Azure Migrate, Azure Data Box), **b-2.4-3** (external identities) or **b-2.4-7** (defense-in-depth
as its own idea rather than as a Zero Trust distractor).

## Domain 3 · Describe Azure management and governance (9 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | metadata attached to resources for organisation and usage tracking is tags (b-3.1-4) | Z4 | D19 ×2 invented-term ("tracers", "values") |
| 3.2 | costing a deployment that does not exist yet is the pricing calculator (b-3.1-2) | Z4 | E04 ×1 estimate-versus-analyse (cost analysis, which reports spend already incurred), E01 ×1 service-role-swap (Advisor) |
| 3.3 | an interruption-tolerant workload at the lowest compute price is spot capacity (b-3.1-1, b-1.1-6) | Z4 | E03 ×2 pricing-model-swap (reservations, pay-as-you-go) |
| 3.4 | preventing non-compliant resources from being created without evaluating each one by hand is Azure Policy (b-3.2-2) | Z7 | E01 ×1 governance-control-swap (Purview), D19 ×1 invented-term ("Azure Resource Monitor") |
| 3.5 | stopping inadvertent deletion regardless of permission is a resource lock (b-3.2-3) | Z7 | E01 ×2 governance-control-swap (Azure Policy, Purview) — the policy-versus-lock discrimination, and the most transferable item in the source |
| 3.6 | bringing on-premises and other-cloud resources under Azure management is Azure Arc (b-3.3-3) | Z2 | E01 ×1 service-role-swap (Azure Policy), D19 ×1 invented-term ("Azure Cloud Manager") |
| 3.7 | declarative deployment artefacts are the infrastructure-as-code surface (b-3.3-4/5) | Z2 | E01 ×2 pairing-swap (Policy+Arc, Monitor+Arc — governance and observability services offered as deployment tooling) |
| 3.8 | Azure Advisor's recommendation categories, tested by exclusion (b-3.4-1) | Z1 | E03 ×2 category-list-recall (two real categories offered against one that is not) |
| 3.9 | telling platform-wide status from personalised service impact from per-resource health (b-3.4-2) | Z1 | E03 ×2 health-surface-swap (Azure Status, Resource Health) |

**Domain 3 observation.** The most *blueprint-faithful* section of the source: every item maps to a
named bullet, and 3.5 and 3.9 are the two items in the whole set that test a real discrimination
rather than a name. One wording hazard: item 3.7's key names **Bicep**, which the outline does not,
so the inventory should carry the concept as *infrastructure as code, expressed through ARM
templates* — the outline's own vocabulary — and treat Bicep as optional colour at most. Nothing here
tests **b-3.3-1** (the portal), **b-3.3-2** (Cloud Shell / CLI / PowerShell as a three-way choice),
**b-3.2-1** (Purview as a subject rather than as a distractor), or **b-3.1-3** (cost management
capabilities in their own right — cost analysis appears only as a wrong option).

## Distractor-pattern frequency across the 35 items

Distractor slots = 35 items × 2 wrong options = **70**.

| Pattern | Count | Note |
|---|---|---|
| E03 `sibling-term-substitution` | 27 | **39% of every wrong option** — the definitional workhorse. Appropriate for a fundamentals exam and appropriate at d1, corrosive if it dominates d2/d3 |
| E01 `service-role-swap` | 25 | **36%** — the other half of the set. Four items are built entirely from it, and two of those (2.6, 2.8) reach across domains for a distractor, which is cheap |
| D19 false-technical-claim | 14 | splits 6 *false-mechanism-claim* (the good half — 2.1, 2.2, 2.17) and 8 *invented-term* (the cheap half — "update sets", "direct scaling", "tracers", "Azure Cloud Manager", …) |
| D14 dogma / absolute-claim | 3 | always/never/removes-all-need phrasing; eliminable without reading the stem |
| E04 `estimate-versus-analyse` | 1 | under-used here; the third-party sources exploit it far better |
| E02 `scope-level-slip` | 0 | **absent** — striking, given that d2 has a seven-bullet hierarchy group. The vendor never once offers "subscription" against "management group" |
| E05 `retired-or-offblueprint-service` | 0 | absent, as expected: the vendor does not put its own retired services in options. The off-blueprint problem in this source is in **keys**, not distractors |

**Consequences for authoring.**

1. **Cap `E03 sibling-term-substitution` at 0.35 of items** (proposed `validation.pattern_caps`
   entry). It is unavoidable on a vocabulary-heavy fundamentals exam and it is the correct pattern
   for d1, but at 39% of all wrong options it produces a bank that feels like flashcards.
2. **Cap `E01 service-role-swap` at 0.30 of items.** Same reasoning as the AIF-C01 build: it is the
   natural Azure distractor and cannot be banned, but unchecked it makes the paper a service-name
   quiz rather than a judgment test.
3. **Raise `E02 scope-level-slip` deliberately.** Zero instances in 70 slots is a gap, not a
   finding: the outline hands you a four-level containment chain (resource → resource group →
   subscription → management group) plus a three-level geography chain (datacenter → zone → region →
   region pair), and a wrong-scope distractor is never eliminable by surface reading. This is the
   highest-signal pattern available to this exam and nobody uses it.
4. **Raise `E04 estimate-versus-analyse`.** One instance here, but the concept (b-3.1-2 vs b-3.1-3)
   is worth several items and is independently attested by both third-party sources.
5. **Ban the invented-term distractor.** Eight of 70 wrong options are labels that do not exist in
   Azure ("update sets", "direct scaling", "point-based VPN gateway", "tracers", "values", "Azure
   Resource Monitor", "Azure Cloud Manager", "virtual cluster"). A candidate who has read anything
   eliminates them instantly, so they waste an option slot. Every wrong option must name something
   real.
6. **Use four options, not three.** See the format-mix note above.
7. **Do not inherit the domain mix** — d2 is over-served by 13 points here.

## Concepts this source tests that other sources do not spell out

- resource-group setting inheritance reaching **future** members, not only current ones (b-2.1-4/7)
- region pairs as a distinct construct from availability zones, with the ≥300-mile separation as the
  discriminator (b-2.1-1)
- the **union** semantics of multiple RBAC role assignments (b-2.4-5) — the single best-built item in
  the package
- Azure Status vs Service Health vs Resource Health as three different questions about the same
  outage (b-3.4-2)
- spot capacity as the interruption-tolerant cost lever (b-3.1-1)
- Azure Arc as the multicloud/on-premises management plane (b-3.3-3)
- the file-movement tool triad chosen by direction and repeat-frequency (b-2.3-5)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the whole CapEx/OpEx and
consumption-economics block that `insidecloud-az900` covers heavily; the problem-solution item shape;
Microsoft Purview as a subject; authentication-versus-authorization as an explicit contrast; storage
account *types* below the service level (queue and table); and every one of the 11 blueprint-only
bullets listed in [`source-az900-studyguide.md`](source-az900-studyguide.md#concepts-this-source-holds-that-no-practice-source-tests).
