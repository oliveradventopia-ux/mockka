# Artefact C · Master concept inventory — CLF-C02

**What this is.** The union of [Artefact B](source-clf-blueprint.md) — the exam-guide distillation
(135 objective bullets across 19 task statements, split into 136 concept rows) — and the three
Artefact A practice distillations ([tss-mckenzie](source-tss-mckenzie.md), 35 items;
[tss-declute](source-tss-declute.md), 35 items; [tutorialsdojo-sampler](source-tutorialsdojo-sampler.md),
10 items). Built at S3 per `methodology/02-master-inventory.md`, from these artefacts only
(clean-room: no source was opened). It is the authoring contract: **every concept here is the
primary concept of exactly one bank item**, enforced by the validator's `concept-coverage` and
`concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried in `concepts.json` itself: each concept's `sources[]` entry for `clf-blueprint` lists the
`b-x.y-z` rows of Artefact B it absorbs.

**Independence rule applied throughout:** `tss-mckenzie` and `tss-declute` draw from one item pool
and count as **one independent voice** (see
[sources.md](sources.md#independence-warning--tss-mckenzie-and-tss-declute-are-one-voice-not-two)).
The build has two independent practice voices (the tss pool; Tutorials Dojo) plus the blueprint.
Because every concept in this inventory traces to `clf-blueprint`, the validator's computed signal
(`sources.length >= 2`) and the independence-adjusted signal coincide: any practice attestation
means at least two independent voices.

---

## Result

**68 concepts** — one per bank item, 1.36× the 50-item exam. Per-domain counts are the blueprint
weights applied to the bank size (largest-remainder rounding), and the merge was driven to land on
them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · Cloud Concepts | 24% | 16 | 12 | 4 |
| d2 · Security and Compliance | 30% | 21 | 15 | 9 |
| d3 · Cloud Technology and Services | 34% | 23 | 17 | 15 |
| d4 · Billing, Pricing, and Support | 12% | 8 | 6 | 6 |
| **Total** | **100%** | **68** | **50** | **34** |

**Bank size 68, per L-0008 (tie-free largest-remainder in the 1.3–1.4× band).** Candidate sizes
65–69 all produce tie-free allocations for these weights (70 ties d1/d3 at .8 and is rejected).
Between the two sizes nearest the ≈1.35 target — 67 (16/20/23/8) and 68 (16/21/23/8) — **68 was
chosen** because the natural merge floor in Domain 2 lands at 21: reaching 20 would force the
root-user cluster or the credential/authentication split to consolidate below the grain the
blueprint's 31 objective rows and the practice corpus's strongest coverage both support. 1.36 is
inside the band; the allocation is unique and tie-free.

Candidate pool going in: **136 Artefact B concept rows → 68 concepts** via 41 documented merges
(below), 3 cross-domain placements, and 8 off-blueprint rejections. The arithmetic is
machine-checked: every one of the 136 rows is cited by exactly one concept's `sources[]` entry —
the 41 consolidations absorb exactly the 68 surplus rows, with no row dropped and none
double-counted. There are **no practice-only
concepts**: the union was built blueprint-first, and every practice item either mapped onto a guide
objective or was rejected against the in-scope/out-of-scope service lists (the L-0009 pattern — the
guide *is* the syllabus, so composition percentages measure corroboration of the blueprint, not
union breadth).

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — blueprint + ≥1 independent practice voice (`priority: high`, computed) | 34 | 50% |
| — of which attested by all three voices (blueprint + tss pool + Tutorials Dojo) | 6 | 9% |
| — attested by the tss pool only (single practice voice) | 24 | 35% |
| — attested by Tutorials Dojo only (single practice voice) | 4 | 6% |
| **Blueprint-only** (`priority: normal`) | 34 | 50% |

Per-source attestation: `clf-blueprint` 68/68 · tss pool (either article) 30/68 —
`tss-mckenzie` 20, `tss-declute` 22 · `tutorialsdojo-sampler` 10/68.

Triple-voice concepts (the strongest corroboration this corpus can produce): C-011 (cost-structure
change), C-023 (governance services), C-045 (managed vs self-hosted database), C-051 (storage
models), C-061 (purchasing options), C-064 (cost visibility tools).

Two structural facts behind these numbers:

1. **Priority is computed, with zero divergences.** `priority: high` ⟺ `sources.length >= 2` for
   all 68 concepts; the validator's `concept-convergence` check should emit no warnings. One
   attestation is deliberately generous and is recorded here so it is visible: **C-020** (the
   responsibility boundary moving with the service model) cites `tss-mckenzie` 3.16, which its own
   Artefact A describes as touching the concept *implicitly* (managed-database engine patching as a
   service setting). It is the only practice contact that bullet has; the attestation stands as
   documented judgment, and C-020 remains a high-value authoring seed regardless.
2. **50% is uncorroborated — and that was predicted.** The S1/S2 convergence outlook expected
   blueprint-only concepts to dominate because the corpus has two independent practice voices, not
   three, and their coverage is near-disjoint. The uncorroborated half concentrates exactly where
   Artefact B's never-tested-bullet register said it would: see the degradation note below.

---

## Merge decisions

One row per consolidation that materially changed the count. "From" cites Artefact B rows
(`b-x.y-z`) and, where a practice source drove or corroborated the merge, its items.

| Merged into | From | Rationale |
|---|---|---|
| **C-009** CAF + outcomes | b-1.3-3 + b-1.3-4 | what CAF is and the four outcomes the guide attaches to it are definition and payoff of one framework; td 1.3 tests them as one idea (at perspective granularity the guide does not enumerate — concept carried, granularity not) |
| **C-011** cost-structure change | b-1.4-1 + b-1.4-2 + b-1.4-3 | the corpus's most over-drilled idea: six practice items (mckenzie 1.4/1.28, declute 1.9/1.16/1.21, td 1.10) all test the same CAPEX→OPEX direction; Artefact B's own instruction — "cap the CAPEX/OPEX concept at one bank item" — is materialised by this merge, since one concept = one item by contract |
| **C-017** model + components | b-2.1-1 + b-2.1-2 | that the model exists and what its two components are is one recognition; the sides themselves are C-018's discrimination |
| **C-018** boundary sides | b-2.1-3 + b-2.1-4 | customer duties and AWS duties are the same boundary discrimination read from both ends; declute 2.7/2.12/2.28/2.32 test the two directions interchangeably |
| **C-023** governance services | b-2.2-1 + b-2.2-3 + b-2.2-8 | the governance vocabulary, the log-location question, and the monitoring-vs-auditing-vs-configuration service split all resolve to the same CloudWatch/CloudTrail/Config discrimination (mckenzie 2.22, declute 3.13, td 2.7) |
| **C-025** compliance variance | b-2.2-5 + b-2.2-9 | obligations varying by geography/industry and programme coverage varying by service are one "compliance is not uniform" judgment with two axes |
| **C-026** security detectors | b-2.2-6 (+ Macie from the in-scope list) | Inspector/GuardDuty/Security Hub/Shield are the guide's own four-way row; Macie (mckenzie 2.14) is the same which-detector-for-which-problem family and merging it here prevents a near-duplicate detector item |
| **C-027** IAM building blocks | b-2.3-1 + b-2.3-7 | the service and its users/groups/policies building blocks are tested as one structure (mckenzie 2.27 role-vs-user-vs-policy-vs-group); declute 2.14 (identity is global) is a property of the same structure |
| **C-029** root protection | b-2.3-2 + b-2.3-9 | why the root user is a special risk and the measures that protect it are motive and mechanism of one concept; b-2.3-8 (root-only tasks) stays separate as pure enumerable recall |
| **C-032** authentication methods | b-2.3-4 + b-2.3-6 | IAM Identity Center is one of the authentication capabilities b-2.3-6 asks to be recognised; keeping it separate would seed two near-identical which-identity-service items (mckenzie 2.1, 2.11, 2.32) |
| **C-034** threat protection | b-2.4-1 + b-2.4-3 | "the catalogue of protective capabilities" is the category whose members b-2.4-3 names; one matching item exercises both |
| **C-035** security info destinations | b-2.4-2 + b-2.4-5 | the security documentation estate and the three named destinations are container and contents |
| **C-038** access & provisioning surfaces | b-3.1-1 + b-3.1-2 + b-3.1-3 + b-3.1-4 | provisioning ways, access ways, the console/programmatic/IaC choice, and one-time-vs-repeatable are four statements of one surface-selection judgment (declute 3.2) |
| **C-039** deployment models | b-3.1-5 + b-3.1-6 | naming the three models and recognising one from a described estate are the same knowledge tested forward and backward |
| **C-040** global units + edge | b-3.2-1 + b-3.2-4 + b-3.2-5 | the three units, their nesting, and what the edge estate buys are one mental map; the corpus's CloudFront/Global Accelerator items (mckenzie 3.9/3.13/3.25, declute 3.11/3.26) all exercise the edge half of this map |
| **C-041** resilience by geography | b-3.2-2 + b-3.2-3 + b-3.2-6 + b-3.2-7 + b-3.2-8 | multi-AZ-for-HA and multi-Region-for-DR/BC/latency/sovereignty are the two rungs of one which-spread-answers-which-need judgment; splitting them re-creates the corpus's habit of testing only the latency rung (declute 3.34) |
| **C-042** instance families | b-3.3-1 + b-3.3-2 | the compute category and matching a workload to an instance family are container and discrimination; the family half is uncorroborated (see degradation note) while the service-matching half is attested (declute 3.33) |
| **C-043** containers + serverless | b-3.3-3 + b-3.3-4 | ECS-vs-EKS and Fargate-vs-Lambda intersect in the launch-type choice (mckenzie 3.33 spans exactly this boundary) — one selection concept |
| **C-044** scaling + load balancing | b-3.3-5 + b-3.3-6 | auto scaling and load balancing are the two mechanisms candidates swap for each other (declute 3.35's availability-feature-for-scaling distractor); one item testing the discrimination beats two testing each alone |
| **C-045** managed vs self-hosted DB | b-3.4-1 + b-3.4-3 | the database category and the managed-vs-EC2-hosted choice are one judgment; td 3.4's both-are-valid construction plus mckenzie 3.21 (what managed buys) and declute 3.35 (scaling a managed instance) all sit on this line |
| **C-046** data model → database | b-3.4-4 + b-3.4-5 + b-3.4-6 | relational/NoSQL/in-memory are three rows of one match-the-data-model discrimination; one item with RDS-or-Aurora/DynamoDB/ElastiCache as its option space tests all three (declute 3.31, mckenzie 3.20) |
| **C-047** migration tooling | b-3.4-2 + b-3.4-7 | that database migration is a distinct problem, and the two tools that solve it, are one concept; DMS-vs-SCT is the discrimination (never tested by any source — seed) |
| **C-048** network blocks + DNS | b-3.5-1 + b-3.5-2 + b-3.5-4 | the network category, the VPC's components, and Route 53's purpose are all component-role identification; td 3.9 (tunnel-terminating gateway pair) is this concept's shape, and Route 53's three distractor appearances in the corpus argue for testing its real purpose here |
| **C-051** storage models | b-3.6-1 + b-3.6-2 + b-3.6-4 + b-3.6-5 | object/block/file mapped to S3/EBS-and-instance-store/EFS-FSx with lifetimes is one permutation discrimination — declute 3.8's mapping-permutation form and td 3.8 test it whole; declute 3.4 (ephemeral scratch) supplies the lifetime edge |
| **C-052** classes + lifecycle | b-3.6-3 + b-3.6-7 | lifecycle policies exist to move objects between the classes b-3.6-3 distinguishes — mechanism and motive of one concept (declute 3.18/3.29) |
| **C-053** backup + gateway | b-3.6-6 + b-3.6-8 | AWS Backup and Storage Gateway are the two never-tested data-management services around storage; each is a half of "protecting and extending storage" and neither supports a full item alone at this altitude |
| **C-054** AI/ML services | b-3.7-1 + b-3.7-3 | category and member-selection collapse into one which-service-does-this-task item |
| **C-055** analytics services | b-3.7-2 + b-3.7-4 | same structure as C-054 for the analytics family (mckenzie 3.12, declute 3.20) |
| **C-056** application integration | b-3.8-1 + b-3.8-8 | the three integration services and the delivery-mechanism skill are the same selection exercised as recognition and as choice (mckenzie 3.2, 3.26); Step Functions joins from the in-scope category and mckenzie 3.2's orchestrator key |
| **C-057** business applications | b-3.8-2 + b-3.8-9 | Connect/SES and the choose-for-a-business-need skill are one pairing |
| **C-058** developer tools | b-3.8-4 + b-3.8-11 | the three tools and the lifecycle-stage skill are one placement discrimination |
| **C-059** end-user computing | b-3.8-5 + b-3.8-12 | the three services and the present-VM-output skill are one family |
| **C-060** frontend + IoT | b-3.8-6 + b-3.8-7 + b-3.8-13 + b-3.8-14 | Amplify and IoT Core are two single-service categories; each pair of bullets (service + skill) is thin alone, and the combined concept is one purpose-built-vs-assembled judgment |
| **C-061** purchasing options | b-4.1-1 + b-4.1-3 | the seven-option set and the when-to-use-which skill are enumeration and application of one family (mckenzie 4.3/4.8, td 4.6) |
| **C-062** Organizations billing | b-4.1-4 + b-4.1-5 + b-4.2-3 + b-4.2-7 | RI flexibility, RI behaviour in an organisation, the Organizations container, and consolidated billing converge on one how-discounts-flow-through-a-family concept — declute 4.30, the corpus's hardest item, tests exactly this junction and is the difficulty-ceiling model |
| **C-063** transfer + storage pricing | b-4.1-2 + b-4.1-6 + b-4.1-7 | which movements and tiers are charged is one which-line-items-exist concept (declute 4.25) |
| **C-064** cost visibility tools | b-4.2-1 + b-4.2-2 + b-4.2-5 + b-4.2-6 + b-4.3-8 | Budgets-vs-Cost-Explorer-vs-Pricing-Calculator is the corpus's second-most-over-drilled discrimination (six items across all three sources); Artefact B's "cap at one bank item" is materialised by this merge; Trusted Advisor's recommendation role and the Health Dashboard join because the observed items (mckenzie 4.24, declute 4.6, td 4.5) discriminate exactly these tools against each other |
| **C-065** tags + CUR | b-4.2-4 + b-4.2-8 | tags as the attribution mechanism and the CUR as where they surface are mechanism and evidence (never tested — seed) |
| **C-066** support plans | b-4.3-2 + b-4.3-4 + b-4.3-7 + b-3.8-3 + b-3.8-10 | the plan family, the case channel, and the five-tier discrimination are one concept (mckenzie 4.17); absorbs Task Statement 3.8's customer-enablement bullets — see cross-domain placements |
| **C-067** partners + marketplace + ProServe | b-4.3-3 + b-4.3-10 + b-4.3-11 + b-4.3-12 + b-4.3-13 | who-helps-from-outside is one channel discrimination: partner categories (td 4.2), partner benefits, marketplace scope, and paid professional engagement (td 4.1) |
| **C-068** technical resources | b-4.3-1 + b-4.3-5 + b-4.3-6 + b-4.3-9 | the documentation estate, written-guidance types, the three named destinations, and the abuse-reporting channel are all where-to-find-it recall; four never-tested bullets that make one honest item |

Domain 3 absorbed the heaviest consolidation (56 rows → 23 concepts) because the guide enumerates
services at fine grain; the merges group by *discrimination* (which family, which member, which
mechanism) rather than by named bullet, which is what a 17-exam-item domain can actually
discriminate. Domain 4's Task Statement 4.3 (12 of its 13 rows → 3 concepts; the 13th, b-4.3-8,
joins C-064) is the single heaviest merge zone; the grain kept is the channel discrimination (support tiers / outside help / published
resources) the practice corpus shows to be the tested skill.

## Cross-domain placements

Where a concept's `domain` disagrees with where its source rows sit. The blueprint's weighting wins
placement; this table is what stops a later session "fixing" the disagreement.

| Concept | Source rows (guide module) | Exam domain | Why |
|---|---|---|---|
| C-066 support plans | b-3.8-3, b-3.8-10 (Domain 3, TS 3.8 customer enablement) + b-4.3-2/4/7 | **d4** | "customer enablement services / AWS Support" and "business support assistance" in TS 3.8 name the same offering Task Statement 4.3 details as the support-plan family; two half-concepts in two domains would ship near-duplicate support items. The d3 rows travel to the d4 concept |
| C-023 governance services | declute item 3.13 (classified under d3 in its Artefact A) attests b-2.2-3/8 | **d2** | the item's concept — CloudWatch monitoring vs CloudTrail audit vs Config recording — is the d2 governance-service discrimination regardless of the article's chapter |
| C-020 boundary shifts by service | mckenzie item 3.16 (classified under d3) attests b-2.1-6 | **d2** | managed-database engine patching as a service setting is the shared-responsibility boundary moving between EC2 and RDS, stated operationally; the attestation is implicit and is recorded as such above |

Also recorded (attestation reuse, not placement): td item 4.6 (Dedicated Hosts, a d4 item) attests
both C-061 (purchasing options, d4) and C-013 (BYOL, d1) — the Artefact B coverage note for
b-1.4-5 names it as the corpus's only BYOL contact.

## The high-value seed register

The CLF-C02 guide names no failure modes, so there is no named-risk register; the equivalent
diagnostic seeds are Artefact B's **never-tested bullets**. Where each landed:

| Seed (Artefact B) | Concept(s) | Status |
|---|---|---|
| Well-Architected pillars (3 bullets, zero coverage) | C-004, C-005, C-006 | 3 bank items — the corpus's largest blind spot gets a fifth of d1's uncorroborated slots |
| Root-user cluster (3 bullets, zero coverage) | C-029, C-030 | 2 bank items |
| Responsibility boundary shifting by service | C-020 | 1 item, the only reasoning-shaped bullet in TS 2.1 |
| Migration tooling DMS/SCT | C-047 | 1 item |
| TS 3.8 long tail (11 untested bullets) | C-057, C-058, C-059, C-060 (+ C-056's Step Functions edge) | 4 dedicated items in the exam's largest task statement |
| Compliance evidence (Artifact, geography, per-service) | C-024, C-025 | 2 items |
| Cost mechanics beyond CAPEX/OPEX | C-012, C-014, C-015, C-016 | 4 items — the over-drilled idea capped at one (C-011), the four untested ones get one each |
| Support/marketplace long tail | C-068 (+ halves of C-066, C-067) | 1 dedicated item plus merged coverage |
| SG vs NACL comparison (never tested as a comparison) | C-049 | 1 item |
| Storage data management (Gateway, lifecycle, Backup) | C-052 (lifecycle), C-053 | 2 items |
| Instance-family matching | C-042 | 1 item (family half uncorroborated) |
| Multi-Region beyond latency (sovereignty, BC) | C-041 | pitched into the concept statement |

## Reconciliation — both directions

**What the blueprint holds that no accessible practice source tests: the 34 blueprint-only
concepts.** This is the build's degradation note per
`methodology/02-master-inventory.md#single-source`, scoped to half the inventory rather than the
whole build: C-001, C-002, C-004–C-008, C-010, C-012, C-014–C-017, C-019, C-021, C-024, C-025,
C-029, C-030, C-033–C-037, C-039, C-047, C-049, C-053, C-057–C-060, C-065, C-068.
Consequences: no convergence signal exists for these; S6 seating priority falls back to blueprint
weight and authoring judgment; Gate 1 carries the lower-confidence flag for this slice. They are
also the concepts a drilled candidate is least likely to have seen — the artefacts' argument that
they are the highest-value items in the bank. **Exit recorded:** the Tier-1
`aws-official-question-set` (free, 20 items, Skill Builder account-walled — registered, never
accessed) is the one source that could corroborate part of this half; Oliver already authorised a
Skill Builder account at the AIF-C01 Gate 1, so the same account covers a later S2 top-up + S3
delta pass here (Gate 1 decision 1).

**What practice sources test that the blueprint does not spell out — carried in, mapped onto
blueprint objectives:** the property-vs-implementing-service distinction (declute 1.27 → C-003's
pitch), the mapping-permutation construction (declute 3.8, td 1.10 → named E04 sub-form in
`authoring.json`), the name-lure construction (td 2.7, 4.5 → named E04 sub-form), the
both-are-valid multiple-response shape (td 3.4 → C-045's pitch), drop-in-vs-general cache as a
migration-cost constraint (mckenzie 3.20 → C-046), upload-vs-delivery acceleration (mckenzie 3.25
→ C-040), the conditional-rule difficulty ceiling (declute 4.30 → C-062), identity-is-global
(declute 2.14 → C-027).

**Rejected — off-blueprint.** Recorded so the reconciliation shows the decision was made, not
missed. Every candidate was checked against the guide's in-scope/out-of-scope service lists and
stated granularity (Artefact B §"Off-blueprint concepts to reject at S3"):

| Candidate | From | Why rejected |
|---|---|---|
| IaaS / PaaS / SaaS / FaaS service-model identification | mckenzie 3.10, 3.34 | vocabulary appears nowhere in the guide; its models are cloud / hybrid / on-premises (C-039 carries those) |
| AWS Wavelength carrier-edge compute | mckenzie 3.31 | Wavelength is on the guide's out-of-scope list |
| AWS Device Farm | declute 3.15 | out-of-scope list |
| S3 Glacier retrieval-tier timings as a tested grain | mckenzie 3.29 | finer than "differences in Amazon S3 storage classes"; the class-level idea is carried in C-052, the tier-timing grain is not (S4 rule: at most one retrieval-tier framing) |
| NLB vs ALB vs CLB by OSI layer | mckenzie 3.18 | finer than "purposes of load balancers"; C-044 tests the purpose, not the product line |
| AWS CAF perspectives | td 1.3 | the guide names CAF and its four business outcomes, not its perspectives; C-009 carries the concept at guide granularity |
| Per-second billing granularity for Windows On-Demand | declute 4.10 | not a guide fact and historically unstable `[UNVERIFIED]` — dropped entirely, not merged |
| FSx for Lustre, Managed Grafana, Nitro Enclaves, Kendra, AppSync, Snow family, Local Zones, DynamoDB DAX as option material | distractors across all three sources | not on the in-scope list; the E06 pattern cap (effective ban) keeps them out of the bank |

---

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   16/21/23/8.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered practice source has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with zero.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 68 = 1.36× the 50-item exam** — tie-free largest-remainder allocation 16/21/23/8
  (L-0008; sizing rationale above).
- **Format mix (exam form): 41 single_choice + 9 multiple_response + 0 scenario_matching.**
  CLF-C02 has exactly two item types and both map 1:1 onto Mockka formats, so `scenario_matching`
  is 0 in every domain (a fidelity statement, not a gap — see `manifest.format_coverage`). The MR
  share is **an S3 decision, not a measurement**: the blueprint states no proportion and the three
  sources disagree (14% / 23% / 30%); 9/50 = 18% sits inside the observed band and is disclosed.
  Per-domain: d1 10+2 · d2 12+3 · d3 14+3 · d4 5+1. All MR items are choose-2-of-5 — the corpus's
  unanimous shape across 80 items; the blueprint's wider ceiling (2+ of 5+) is disclosed as
  uncalibrated.
- **Pass threshold 70%** — a raw-score proxy for AWS's scaled 700-of-1,000 compensatory model
  (not publicly convertible to a raw percent); disclosed in `manifest.$comment`, ratification at
  Gate 1. Precedent: identical proxy ratified for AIF-C01.
- **Time limit 90 minutes** — the vendor number for the 65-question sitting kept for this 50-item
  mock (~28% generous); disclose-vs-scale flagged to Gate 1, matching the AIF-C01 ratified
  disclosure.
- **Pattern caps** (`manifest.validation.pattern_caps`): `E01: 0.35` (service-role-swap observed
  at 63% / 47% / 43% of wrong options across the three sources — the cap forces concept reasoning
  back into the paper; note L-0012: the one-pattern-per-item structural rule already bounds
  per-item repetition, so the cap acts as a bank-level guard), `D19: 0.10` (false-technical-claim
  kept sparse per the registry guidance and both Artefact A recommendations), `E06: 0.004` — an
  **effective ban**: the `pattern-frequency-caps` check fires at `share >= cap`, so a single
  out-of-scope-service lure in a ~204-distractor bank (share ≈ 0.005) trips it while zero uses
  pass. Registry-standard `D03/D04: 0.10`. Near-duplicate threshold `0.4` (ccar-p/aif-c01
  precedent).
- **`layers.syllabus_rules: false`** — the blueprint *is* the syllabus and maps 1:1 onto the
  manifest domains (Artefact B); a rules layer would duplicate `concepts.json`. Weak-concept
  reporting is the honest grain.

### S4 authoring rules — distillation warnings converted at the S2→S3 handoff (L-0014)

Each "authoring must/should" sentence in the derivation docs either became a validator-enforced
cap (above) or one of these named checklist rules, owned by exam-author at S4:

1. **Blueprint weights, not corpus shape** — per-domain counts are manifest data (structural ✓).
2. **E02 responsibility-side-flip is a floor, not a cap:** aim ≈10% of wrong options; the
   blueprint gives the boundary 6 bullets while the corpus produced 13 such distractors total.
   Concentrate on C-017–C-020. (Caps cannot express floors; rule.)
3. **E05 cost-model-inversion ≈8%**, spent on the untested economics concepts (C-012, C-014–C-016),
   never on another CAPEX/OPEX restatement.
4. **Negative stems ("which statement is false") ≤1 per domain** — the corpus's two are
   near-duplicates of each other.
5. **Scenario wrappers only where they change the answer** — a third of the tss items wrap pure
   recall in an invented company to no effect; Tutorials Dojo's bare recall stems are the
   counterweight precedent.
6. **At most one retrieval-tier framing (C-052) and no load-balancer product-line granularity
   (C-044)** — both are finer than the guide's stated grain.
7. **Canonical names from the guide**: *Amazon SageMaker AI*, *Amazon Quick Sight*,
   *Amazon WorkSpaces Secure Browser* — two practice sources use stale names; `vocabulary[]`
   carries the correct forms.
8. **Named E04 sub-forms available**: `mapping-permutation` (same vocabulary, permuted
   arrangements — declute 3.8, td 1.10) and `name-lure` (option name shares a stem word, names an
   unrelated offering — td 2.7, 4.5). Use deliberately; they are the corpus's best constructions.
9. **Both-are-valid multiple response** (td 3.4) sparingly — the second key must be a legitimate
   approach, not an afterthought.
10. **Difficulty ceiling = conditional rule over small arithmetic** (declute 4.30 model): 1–2 bank
    items at that ceiling, seated at C-062; more would misrepresent the exam.
11. **Option shapes parallel; key length toward the middle of the band** — enforced by
    `answer-length-cue` (L-0015/L-0021).
12. **Keep C-037 (Trusted Advisor security) and C-064 (Trusted Advisor cost) pitched apart** —
    security recommendations vs cost/utilisation recommendations; likewise C-026 vs C-034 (detect
    vs protect) and C-040 vs C-041 (what the units are vs which spread answers which need).
