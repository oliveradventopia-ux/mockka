# Artefact B · AZ-900 study guide concepts

**What this is.** The AZ-900 study guide states **57 objective bullets across 12 skill groups in 3
skill areas**. Many bullets carry more than one testable idea — several are bare lists of named
services or terms, where each name is separately examinable. This document splits each bullet into
its constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where a practice
source records what an author *believed* is tested, this records what the vendor's blueprint
*actually declares* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the study guide. That is deliberate and is the only verbatim
content permitted in any artefact (`methodology/01-source-distillation.md#clean-room`): a question
that uses the guide's own terms lets a candidate trace a missed item straight back to the objective.
No objective prose, no explanatory sentences and no service descriptions are reproduced — only the
terms themselves.

> Source: `az900-studyguide` in [sources.md](sources.md) — "Skills measured as of July 20, 2026",
> read in full 2026-08-16. Credited in the exam README.

## Guide structure → exam domain mapping

The mapping is 1:1 — the study guide *is* the blueprint, so its three skill areas are the manifest's
three domains and no reconciliation is needed. What does need recording is the **skill-group** layer
beneath each area, because that is the level the concept inventory is built at and the level a
per-item "concept tested" claim should resolve to.

| Guide skill area | Manifest domain | Published weight band | Manifest `weight_pct` | Skill groups | Objective bullets |
|---|---|---|---|---|---|
| Describe cloud concepts | `d1` | 25–30% | 28 | 1.1, 1.2, 1.3 | 15 |
| Describe Azure architecture and services | `d2` | 35–40% | 38 | 2.1, 2.2, 2.3, 2.4 | 27 |
| Describe Azure management and governance | `d3` | 30–35% | 34 | 3.1, 3.2, 3.3, 3.4 | 15 |
| — | — | — | **100** | **12** | **57** |

Band-to-point arithmetic is recorded in [sources.md](sources.md#weight-band--point-weight-arithmetic-recorded-so-gate-1-can-check-it).

Three structural facts that shape authoring, all stated by the guide or its companion pages:

1. **The verb is "describe", never "configure".** Every one of the 12 skill groups and 51 of the 57
   bullets open with *describe*, *define*, *identify*, *compare* or *explore*. The audience profile
   is "a technology professional who wants to demonstrate **foundational knowledge**". Items must
   test *recognition, discrimination and appropriate-use judgment* — never implementation steps,
   portal click-paths, CLI syntax, quotas, SKU tables or price points. Any item whose key requires
   configuring something is off-blueprint.
2. **The named-service list is the answer space.** Unlike AWS, Microsoft publishes no explicit
   in-scope/out-of-scope service list — but the bullets name services directly, and that naming is
   the boundary. **The 2026-07-20 outline names roughly 35 services and names no databases,
   no messaging or eventing services, no analytics services, no IoT, no AI services, no Key Vault,
   no network security appliances (NSG, Azure Firewall, DDoS Protection) and no Azure Blueprints.**
   All of those appeared in earlier AZ-900 outlines and all of them still appear in the community
   practice sources — the single biggest calibration hazard in this build. The full extracted list
   is at the foot of this document.
3. **Two of Microsoft's own sample-question caveats are load-bearing.** The guide states "the
   bullets that follow each of the skills measured are intended to illustrate how we are assessing
   that skill; **related topics may be covered**", and "most questions cover features that are
   **general availability (GA)**; the exam may contain questions on Preview features if those
   features are commonly used". So a bullet is a floor, not a ceiling — but Preview-only material is
   a poor bet.

**Version-delta note (previous outline → 2026-07-20, from the guide's own change log).** The change
log records **no *Major* changes**. Three skill groups are marked *Minor* — *Describe Azure compute
and networking services* (2.2), *Describe features and tools for managing and deploying Azure
resources* (3.3), and *Describe monitoring tools in Azure* (3.4); the audience profile and both
other skill areas are marked *No change*. The change log does not name the individual bullets that
moved, so a bullet-level diff is not derivable from the public page `[UNVERIFIED]`. Practical
consequence: concepts in groups 2.2, 3.3 and 3.4 sourced from a pre-2026 practice set carry extra
staleness risk and should be re-checked against the current bullet text before authoring.

---

## Domain 1 · Describe cloud concepts (25–30%, manifest 28)

### Skill group 1.1 — Describe cloud computing (7 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.1-1 | What makes a delivery model "cloud" rather than hosted infrastructure | *cloud computing* |
| b-1.1-2 | Which party owns which layer of the stack, and how that split moves with the service type | *shared responsibility model* |
| b-1.1-3 | Telling the three deployment models apart from where the infrastructure sits and who else uses it | *public*, *private*, *hybrid* |
| b-1.1-4 | Reading a described situation and picking the deployment model that fits it | *appropriate use cases for each cloud model* |
| b-1.1-5 | Paying for what is used rather than what is provisioned, and what that does to the expenditure profile | *consumption-based model* |
| b-1.1-6 | Distinguishing the ways cloud capacity can be bought and what each optimises for | *cloud pricing models* |
| b-1.1-7 | What "serverless" removes from the customer's responsibility, and what it does not | *serverless* |

> **Practice-source coverage: strong, and the only place where all three practice sources agree.**
> `insidecloud-az900` alone carries 12 items on this group (deployment models, CapEx/OpEx,
> consumption). All three sources test b-1.1-3 and b-1.1-5. **b-1.1-2 (shared responsibility) is
> tested only by `ms-learn-az900-modules`**, and **b-1.1-6 (compare cloud pricing models) is barely
> touched by anyone** — a high-value authoring gap, since it is the bullet that lets an item contrast
> pay-as-you-go, reservations and spot without leaving d1.

### Skill group 1.2 — Describe the benefits of using cloud services (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.2-1 | Staying available through component failure, and growing capacity on demand — and the vertical/horizontal distinction inside "scalability" | *high availability*, *scalability* |
| b-1.2-2 | Recovering from failure and continuing to function, versus knowing in advance what performance and cost will be | *reliability*, *predictability* |
| b-1.2-3 | What the platform gives you for security and policy control that you would otherwise build | *security*, *governance* |
| b-1.2-4 | Managing resources through the platform's own tooling and automation rather than by hand | *manageability* |

> **Practice-source coverage: partial and lopsided.** All three sources test b-1.2-1 (usually as
> vertical-versus-horizontal, which is the single most-repeated d1 idea in the whole source set);
> `ms-learn-az900-modules` is the only source testing b-1.2-2 cleanly. **b-1.2-3 and b-1.2-4 are
> untested by every accessible source** — 2 of the 4 bullets in this group have no practice signal at
> all. Note also that `insidecloud-az900` tests *economies of scale* and `ms-learn-az900-modules`
> tests *sustainability*: both are legacy/adjacent framings that the 2026 bullets do not name.

### Skill group 1.3 — Describe cloud service types (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.3-1 | What the customer still owns when the provider supplies virtualised infrastructure | *infrastructure as a service (IaaS)* |
| b-1.3-2 | What the provider absorbs when it supplies the runtime and platform | *platform as a service (PaaS)* |
| b-1.3-3 | What is left to configure when the provider supplies the finished application | *software as a service (SaaS)* |
| b-1.3-4 | Reading a described workload — its control requirements and its team — and picking the service type | *appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)* |

> **Practice-source coverage: saturated.** This is the most heavily over-served group in every
> practice source (`insidecloud-az900` spends 8 of 100 items here, `tutorialsdojo-az900` 3 of 10).
> The dominant item shape is "service X belongs to which model?", which tests naming rather than the
> judgment b-1.3-4 asks for. Authoring should invert the emphasis: fewer classification items, more
> "which model does this constraint force?" items. Do **not** inherit this group's share of the paper.

---

## Domain 2 · Describe Azure architecture and services (35–40%, manifest 38)

### Skill group 2.1 — Describe the core architectural components of Azure (7 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.1-1 | What a region is, why regions are paired, and what makes a region sovereign | *Azure regions*, *region pairs*, *sovereign regions* |
| b-2.1-2 | Physically separated failure domains inside one region, and what class of failure they survive | *availability zones* |
| b-2.1-3 | The facility layer beneath a zone, and why the candidate never addresses it directly | *Azure datacenters* |
| b-2.1-4 | The unit of deployment versus the container that groups it, and what a resource group does and does not bound | *Azure resources*, *resource groups* |
| b-2.1-5 | The billing and access boundary that owns resource groups | *subscriptions* |
| b-2.1-6 | The container above subscriptions, and what it exists to apply | *management groups* |
| b-2.1-7 | Reading the containment chain in the right order and knowing what inherits down it | *hierarchy of resource groups, subscriptions, and management groups* |

> **Practice-source coverage: good on the hierarchy, thin on geography.** All three sources test
> b-2.1-4 and b-2.1-7 (inheritance direction, one-resource-one-group, permission inheritance).
> `ms-learn-az900-modules` alone tests b-2.1-1 (region pairs); `insidecloud-az900` alone tests
> sovereign regions. **b-2.1-3 (datacenters) is untested everywhere** — correctly so, it is the one
> bullet with almost no discriminating content, and it should absorb at most one bank item.

### Skill group 2.2 — Describe Azure compute and networking services (6 bullets, marked *Minor* change)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.2-1 | Choosing among the three compute shapes by what the workload needs you to manage | *containers*, *virtual machines*, *functions* |
| b-2.2-2 | The VM-family constructs and what each one buys: identical managed instances, staggered update/fault isolation, and a desktop delivered as a service | *Azure virtual machines*, *Azure Virtual Machine Scale Sets*, *availability sets*, *Azure Virtual Desktop* |
| b-2.2-3 | What a VM cannot exist without — the dependent resources created alongside it | *the resources required for virtual machines* |
| b-2.2-4 | Choosing where an application runs when all three hosts could technically serve it | *application hosting options*, *web apps*, *containers*, *virtual machines* |
| b-2.2-5 | The virtual-network building blocks: the network itself, its segments, network-to-network connectivity, name resolution, encrypted transit over the internet, and private circuit connectivity | *Azure virtual networks*, *subnets*, *peering*, *Azure DNS*, *Azure VPN Gateway*, *ExpressRoute* |
| b-2.2-6 | Reaching a service across the public internet versus over the Microsoft backbone from inside a virtual network | *public and private endpoints* |

> **Practice-source coverage: heavy but mis-aimed.** `insidecloud-az900` spends ~14 items here and
> `ms-learn-az900-modules` 8, but a large share test services this outline does not name (Event Grid,
> Service Bus, IoT Hub, Logic Apps, Load Balancer, Application Gateway, Front Door) or go below the
> outline's altitude (route-based versus policy-based VPN gateways). **b-2.2-3 (resources required
> for VMs) and b-2.2-6 (public and private endpoints) are untested by every accessible source** —
> b-2.2-6 in particular is a named bullet with zero practice signal and should be treated as a
> deliberate authoring target.

### Skill group 2.3 — Describe Azure storage services (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.3-1 | Telling the storage services apart by the access shape each one serves | *Azure Storage services* |
| b-2.3-2 | Trading retrieval cost and latency against storage cost over a data lifetime | *storage tiers* |
| b-2.3-3 | How many copies, how far apart, and what class of failure each option survives | *redundancy options* |
| b-2.3-4 | The account-level choices that constrain everything created inside the account | *storage account options*, *storage types* |
| b-2.3-5 | Choosing the file-movement tool that matches the direction, volume and repeat-frequency of the transfer | *AzCopy*, *Azure Storage Explorer*, *Azure File Sync* |
| b-2.3-6 | Choosing a migration path by data volume and by whether the network can carry it | *Azure Migrate*, *Azure Data Box* |

> **Practice-source coverage: partial.** All three sources cover b-2.3-1 and b-2.3-3;
> `insidecloud-az900` and `ms-learn-az900-modules` both cover b-2.3-2 and b-2.3-5.
> **b-2.3-6 (Azure Migrate, Azure Data Box) is untested by every accessible source**, despite being
> a named bullet with two named services and an obvious discriminating axis (network-feasible versus
> ship-the-disks). Highest-value single gap in d2.

### Skill group 2.4 — Describe Azure identity, access, and security (8 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.4-1 | The cloud directory, and the separate managed-domain service for workloads that still need legacy domain protocols | *Microsoft Entra ID*, *Microsoft Entra Domain Services* |
| b-2.4-2 | One sign-in across many applications, a second factor, and removing the password entirely | *single sign-on (SSO)*, *multifactor authentication (MFA)*, *passwordless* |
| b-2.4-3 | Letting people who are not in your tenant in, without giving them accounts in it | *external identities* |
| b-2.4-4 | Deciding *at sign-in time*, from signals, what the user must satisfy before access is granted | *Microsoft Entra Conditional Access* |
| b-2.4-5 | Granting the permissions a job needs at the scope it needs them, and how multiple assignments combine | *Azure role-based access control (RBAC)* |
| b-2.4-6 | Designing as though the network is already hostile, and what that changes about verification | *Zero Trust* |
| b-2.4-7 | Layered controls so that one breached layer is not a breach of the system | *defense-in-depth model* |
| b-2.4-8 | Continuous posture assessment and threat protection across the estate | *Microsoft Defender for Cloud* |

> **Practice-source coverage: strong on RBAC and Conditional Access, absent on the two hardest
> bullets.** All three sources test b-2.4-4 and b-2.4-5; `insidecloud-az900` adds b-2.4-2
> (passwordless via Windows Hello for Business, MFA) and the authentication-versus-authorization
> distinction, which no bullet names explicitly but which sits under b-2.4-2/b-2.4-5.
> **b-2.4-3 (external identities) and b-2.4-7 (defense-in-depth) are untested everywhere**, and
> b-2.4-1's *Domain Services* half is untested. Meanwhile several practice items key on Key Vault,
> Sentinel, Identity Protection and Privileged Identity Management — **none of which this outline
> names**.

---

## Domain 3 · Describe Azure management and governance (30–35%, manifest 34)

### Skill group 3.1 — Describe cost management in Azure (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.1-1 | What actually moves an Azure bill — resource type, region, egress, commitment and licensing choices | *factors that can affect costs in Azure* |
| b-3.1-2 | Estimating spend for a design that does not exist yet | *the pricing calculator* |
| b-3.1-3 | Analysing, budgeting and alerting on spend that has already happened | *cost management capabilities in Azure* |
| b-3.1-4 | Attaching metadata to resources so cost and ownership can be sliced after the fact | *tags* |

> **Practice-source coverage: the strongest agreement in the package.** All three sources test
> b-3.1-2 and b-3.1-4, and `insidecloud-az900` tests b-3.1-1 from five angles (reservations, spot,
> stopped-VM charges, resource-group charges, PAYG). The **estimate-versus-analyse** discrimination
> (b-3.1-2 against b-3.1-3) is independently exercised by `tutorialsdojo-az900` and
> `insidecloud-az900` in near-identical shape — the clearest convergent distractor mechanism in the
> whole source set, and the basis of pattern `E04` below.

### Skill group 3.2 — Describe features and tools in Azure for governance and compliance (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.2-1 | Governing and classifying the *data* estate rather than the resource estate | *Microsoft Purview in Azure* |
| b-3.2-2 | Preventing non-compliant resources from being created, and auditing the ones that exist | *Azure Policy* |
| b-3.2-3 | Blocking deletion or modification of a resource independently of who has permission on it | *resource locks* |

> **Practice-source coverage: complete but shallow.** All three sources test b-3.2-2 and b-3.2-3,
> almost always as a two-way lock-versus-policy discrimination. b-3.2-1 is tested only by
> `insidecloud-az900`, twice, and once **incorrectly for this outline** (keying a compliance-posture
> question to Defender for Cloud). The genuinely diagnostic item in this group — *policy prevents,
> a lock protects, RBAC authorises, and only one of the three stops an owner deleting something* —
> is written by nobody and should be authored.

### Skill group 3.3 — Describe features and tools for managing and deploying Azure resources (5 bullets, marked *Minor* change)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.3-1 | The graphical control plane and what it is and is not good for | *the Azure portal* |
| b-3.3-2 | The three command surfaces and what distinguishes them: a browser-hosted shell, and two command languages | *Azure Cloud Shell*, *Azure CLI*, *Azure PowerShell* |
| b-3.3-3 | Bringing non-Azure and other-cloud resources under Azure management | *Azure Arc* |
| b-3.3-4 | Declaring the desired estate as a versioned artefact rather than clicking it into existence | *infrastructure as code (IaC)* |
| b-3.3-5 | The control-plane service every deployment goes through, and its declarative template format | *Azure Resource Manager (ARM)*, *ARM templates* |

> **Practice-source coverage: partial, and the practice sources are behind the outline.**
> `ms-learn-az900-modules` covers b-3.3-3 and b-3.3-4 (and names **Bicep**, which the outline does
> *not*); `insidecloud-az900` covers b-3.3-5 once. **b-3.3-1 and b-3.3-2 are untested by every
> source except one portal-URL trivia item** that is below blueprint altitude. This group carries a
> *Minor* change flag in the change log, so it is also the group where a stale source is most likely
> to be wrong rather than merely thin.

### Skill group 3.4 — Describe monitoring tools in Azure (3 bullets, marked *Minor* change)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.4-1 | Personalised best-practice recommendations across cost, security, reliability, performance and operational excellence | *Azure Advisor* |
| b-3.4-2 | Knowing whether a platform-side incident is affecting *your* resources | *Azure Service Health* |
| b-3.4-3 | The telemetry platform and its three named surfaces: the query store, the notification layer, and application-level telemetry | *Azure Monitor*, *Log Analytics*, *Azure Monitor alerts*, *Azure Monitor Application Insights* |

> **Practice-source coverage: the most over-served group in the package relative to its size.**
> `insidecloud-az900` alone spends ~10 items on three bullets, and `tutorialsdojo-az900` two of ten.
> Every source tests b-3.4-1 and b-3.4-3. The recurring weakness is that they treat Log Analytics,
> Application Insights and Azure Monitor as *rivals* rather than as **one platform and its
> surfaces** — several items are answerable two ways as written. Authoring must respect the
> outline's own phrasing (*Azure Monitor, including …*) and build the containment relationship into
> the key. b-3.4-2's real discrimination — Azure Status versus Service Health versus Resource
> Health — is tested only by `ms-learn-az900-modules`.

---

## Named-service register (the answer space)

The outline names no explicit service allowlist, so this is the list extracted from the bullets
themselves. Distractors drawn from **inside** it are fair; distractors naming anything outside it
are cheap, because a prepared candidate eliminates them without reasoning about the scenario — and
worse, they teach the wrong boundary.

**In the outline (verbatim names).** Azure virtual machines · Azure Virtual Machine Scale Sets ·
availability sets · Azure Virtual Desktop · containers · functions · web apps · Azure virtual
networks · subnets · peering · Azure DNS · Azure VPN Gateway · ExpressRoute · public and private
endpoints · Azure Storage services · storage tiers · redundancy options · storage account options
and storage types · AzCopy · Azure Storage Explorer · Azure File Sync · Azure Migrate · Azure Data
Box · Microsoft Entra ID · Microsoft Entra Domain Services · SSO · MFA · passwordless · external
identities · Microsoft Entra Conditional Access · Azure RBAC · Zero Trust · defense-in-depth ·
Microsoft Defender for Cloud · the pricing calculator · cost management capabilities · tags ·
Microsoft Purview · Azure Policy · resource locks · the Azure portal · Azure Cloud Shell · Azure CLI
· Azure PowerShell · Azure Arc · infrastructure as code · Azure Resource Manager and ARM templates ·
Azure Advisor · Azure Service Health · Azure Monitor · Log Analytics · Azure Monitor alerts ·
Azure Monitor Application Insights.

**Named by an accessible practice source but NOT in this outline** — every one of these is an
`E05 retired-or-offblueprint-service` trap waiting to be inherited: Azure Blueprints (retired) ·
Azure SQL Database · Azure Database for MySQL · Cosmos DB · Azure Synapse · Azure Data Lake ·
Event Grid · Event Hubs · Service Bus · IoT Hub · Logic Apps · Power Automate · Azure Automation ·
WebJobs · Azure AI services · Azure Key Vault · network security groups · Azure Firewall · Azure DDoS
Protection · Application Gateway · Front Door · Load Balancer · API Management · Microsoft Sentinel ·
Microsoft Defender for Endpoint · Microsoft Defender for Cloud Apps · Microsoft Entra ID Protection ·
Privileged Identity Management · Azure Information Protection · Microsoft 365 groups · Azure TCO
Calculator · Bicep · Azure Kubernetes Service (containers are named as a *concept*; AKS is not named
as a service) · Azure Container Instances (same).

That second list is 33 services long. It is the reason this package's convergence signal must be
read with the blueprint in hand: **a concept attested by two practice sources is not attested by the
exam if the outline does not name it.**

## Concepts this source holds that no practice source tests

Carried into the master inventory at S3 as blueprint-only entries — 11 bullets with zero practice
signal, roughly one in five of the whole outline:

- b-1.2-3 security and governance as a *benefit* of the cloud
- b-1.2-4 manageability as a *benefit* of the cloud
- b-2.1-3 Azure datacenters as an addressable concept
- b-2.2-3 the resources required for virtual machines
- b-2.2-6 public and private endpoints
- b-2.3-6 Azure Migrate and Azure Data Box
- b-2.4-3 external identities
- b-2.4-7 the defense-in-depth model
- b-3.3-1 the Azure portal
- b-3.3-2 Azure Cloud Shell / Azure CLI / Azure PowerShell as a three-way choice
- b-1.1-6 comparing cloud pricing models (touched only glancingly)

Plus the half-covered ones: b-2.4-1's *Microsoft Entra Domain Services*, b-3.2-1's *Purview*, and
b-3.4-2's *Azure Status / Service Health / Resource Health* triad.

## Concepts other sources hold that this source does not name

See the reconciliation in `master-inventory.md` (S3). In outline: the entire messaging, analytics,
IoT and database surface; the network-security appliance surface (NSG, Firewall, DDoS); Key Vault;
the Microsoft security-product family beyond Defender for Cloud; Azure Blueprints; and economies of
scale as a named benefit. Every one of them is a **legacy-outline artefact**, and the S3 inventory
should carry none of them as concepts — only as `E05` distractor material.
