# Artefact A · TheServerSide / DeClute CLF-C02 question set distillation

**What this is.** Darcy DeClute's freely published CLF-C02 preparation article on TheServerSide
(2025-06-12) contains 35 questions, attributed in the article to Cameron McKenzie's course pool.
This document records, for each item, **the concept it tests** and **how each wrong option is
constructed**.

**Why it exists.** It is one input to the master concept inventory. Its item set is **disjoint from
[`tss-mckenzie`](source-tss-mckenzie.md)** — 70 distinct items across the two articles — and it
reads the blueprint differently: where the other article is a service-selection drill, this one
leans on the shared-responsibility model, cloud-property vocabulary and storage classes.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `tss-declute` in [sources.md](sources.md). Credited in the exam README.
> Screened against the excluded dump corpora: no numbered correspondence, same distinct house style
> as its sibling article, and the article itself states the items are not dumps or braindumps.
>
> **Independence caveat:** this source and [`tss-mckenzie`](source-tss-mckenzie.md) draw from the
> same item pool. For convergence they count as **one** attestation, not two. A concept attested
> only by these two articles is a **single-source concept**. See
> [sources.md](sources.md#independence-warning--tss-mckenzie-and-tss-declute-are-one-voice-not-two).

Theme set (C1–C6) and pattern extensions (E01–E06) as proposed in
[`source-tss-mckenzie.md`](source-tss-mckenzie.md); the counts below are this source's own evidence
for the same extension set.

## Format mix observed

| Domain | Single choice | Multiple response | Ordering | Matching | Total |
|---|---|---|---|---|---|
| d1 Cloud Concepts | 5 | 0 | 0 | 0 | 5 |
| d2 Security and Compliance | 5 | 3 | 0 | 0 | 8 |
| d3 Cloud Technology and Services | 13 | 3 | 0 | 0 | 16 |
| d4 Billing, Pricing, and Support | 4 | 2 | 0 | 0 | 6 |
| **Total** | **27** | **8** | **0** | **0** | **35** |

Asymmetries worth preserving or correcting, explicitly:

- **Closer to blueprint shape than its sibling, still Domain-3-heavy.** Observed 14 / 23 / 46 / 17 %
  against 24 / 30 / 34 / 12 %. Domain 1 remains under-served, Domain 3 over-served by twelve points.
  Correct to blueprint weights.
- **Multiple response is 23% of items here** against 14% in the sibling article — the two halves of
  the same pool disagree with each other by nine points, which means neither is calibration for the
  real MR rate. The blueprint states no MR proportion. **S3 must set the MR share as a decision,
  not inherit it**; the honest input is "somewhere between 14% and 23%, unattested".
- Every MR item is again **choose 2 of 5**. Across all 80 registered practice items there is not one
  choose-3 item and not one 6-option item, though the blueprint permits both.
- **Two "which statement is *false*" items (9 and 16).** Negative stems are a legitimate exam form
  but these two are near-duplicates of each other, and both key on the same CAPEX/OPEX inversion.
  Authoring should carry at most one negative-stem item per domain.

## Domain 1 · Cloud Concepts (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.5 | The property that removes payment for idle capacity is elasticity, not raw growth capacity or resilience | C1 | E04 `scalability-for-elasticity`, E04 `fault-tolerance-for-elasticity`, E04 `availability-for-elasticity` |
| 1.9 | Identifying the *false* statement about cloud computing — the spend direction is operating, not capital | C1 | E05 `capex-for-opex` (as key), plus three true statements as foils |
| 1.16 | The same false-statement item under a different wrapper | C1 | E05 `capex-for-opex` (as key), plus three true statements as foils — **near-duplicate of 1.9** |
| 1.21 | The adoption benefit that matches spend to usage, stated as a direction of travel | C1 | D19 `elasticity-traded-away-claim`, E01 `tool-name-as-benefit`, D19 `security-traded-for-scale-claim` |
| 1.27 | The architectural characteristic that lets capacity track demand automatically, as distinct from the service that implements it | C1 | E04 `vertical-scaling-for-elasticity`, E01 `service-for-characteristic`, E04 `architecture-style-for-property` |

**Domain 1 observation.** Five items, four of which test the same two ideas (elasticity; capital vs
operating spend). The distinction between the *property* (elasticity) and the *service that
delivers it* (item 1.27) is the one genuinely useful discrimination here and is worth preserving as
an authoring pattern. Well-Architected, CAF, migration strategy, rightsizing, automation, BYOL and
economies of scale are all untested — identical blind spot to the sibling article, which is what
one expects from a shared pool.

## Domain 2 · Security and Compliance (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | When a control mandates customer-controlled, validated cryptographic hardware, a managed key service does not satisfy it | C5 | E01 `managed-keys-for-dedicated-hsm`, E01 `enclave-for-hsm` (also out-of-scope service), E01 `secret-store-for-hsm` |
| 2.7 | Which duty is the customer's under the shared-responsibility model — configuring network controls on their own instances | C3 | E02 `managed-service-internals-as-customer-duty`, E02 `physical-security-as-customer-duty`, E02 `edge-operation-as-customer-duty` |
| 2.12 | Which identity duties belong to the customer, as distinct from platform hardening (choose 2) | C3 | E02 `global-infrastructure-as-customer-duty`, E01 `service-name-as-answer` (malformed option), E02 `hypervisor-hardening-as-customer-duty` |
| 2.14 | Identity is a global construct — no per-Region duplication of identities is required | C5 | D01 `per-region-user-proliferation`, D19 `credential-sharing-as-practice`, D13 `account-per-user-per-region` |
| 2.19 | The principle that sizes a permission set to the task | C5 | E04 `mfa-for-least-privilege`, E04 `delegation-for-least-privilege`, E04 `org-guardrail-for-least-privilege` |
| 2.23 | Which access-management practices are recommended, as distinct from convenient (choose 2) | C5 | D19 `keys-in-source-code`, E04 `secret-store-instead-of-role`, E04 `inline-policy-preference` |
| 2.28 | Which security obligations remain the customer's — data protection and workforce practice (choose 2) | C3 | E02 `facility-access-as-customer-duty`, E02 `hardware-disposal-as-customer-duty`, E02 `hypervisor-patching-as-customer-duty` |
| 2.32 | Which duty is AWS's — operating and securing the platform's own edge estate | C3 | E02 `identity-config-as-aws-duty`, E02 `data-classification-as-aws-duty`, E02 `encryption-choice-as-aws-duty` |

**Domain 2 observation.** This is where the source earns its registration: **four
shared-responsibility items (2.7, 2.12, 2.28, 2.32) with twelve `E02` distractors between them**,
against exactly one such distractor in the whole sibling article. The two articles are complementary
inside the same domain — one drills identity, the other drills the responsibility boundary. Still
untested across both: the root-user cluster, AWS Artifact and compliance geography, and the boundary
*shifting* between EC2, RDS and Lambda (blueprint bullet b-2.1-6), which none of the four items
reaches.

## Domain 3 · Cloud Technology and Services (16 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.2 | Standardising infrastructure creation and application rollout are two managed-automation jobs, not compute, storage or traffic jobs (choose 2) | C2 | E01 `traffic-distribution-for-provisioning`, E01 `function-runtime-for-provisioning`, E01 `file-storage-for-provisioning` |
| 3.4 | Ephemeral host-local storage is the right choice when the data is scratch and must not outlive the instance | C2 | E04 `network-file-for-local-scratch`, E06 `out-of-scope-file-system-lure`, E04 `persistent-block-for-ephemeral` |
| 3.8 | Mapping the three storage models to the three services that embody them | C1 | E04 `mapping-permutation` ×3 (each wrong option permutes object/block/file across the same three services) |
| 3.11 | Which capabilities operate from the platform's edge estate (choose 2) | C1 | E01 `config-recorder-as-edge-service`, E01 `block-volume-as-edge-service`, E01 `private-interconnect-as-edge-service` |
| 3.13 | Continuous observation of health, performance and utilisation across accounts is the monitoring service's job, not the audit or configuration service's | C2 | E01 `landing-zone-for-monitoring`, E01 `api-audit-for-monitoring`, E01 `config-recorder-for-monitoring` |
| 3.15 | Managed testing against a fleet of real mobile devices | C2 | E01 `frontend-hosting-for-device-testing`, E01 `pipeline-for-device-testing`, E06 `iot-tester-lure` — **off-blueprint, see below** |
| 3.18 | Choosing the lowest-cost archival class when retention is long and access is essentially never | C4 | E03 `auto-tiering-for-deep-archive`, E03 `infrequent-access-for-archive`, E03 `flexible-retrieval-for-deep-archive` |
| 3.20 | Serverless business-intelligence dashboarding, as distinct from query engines and warehouses | C2 | E01 `query-engine-for-bi`, E01 `warehouse-for-bi`, E06 `out-of-scope-dashboard-lure` |
| 3.22 | Spreading inbound traffic over healthy instances across zones without touching application code | C2 | E01 `global-router-for-regional-balancer`, E01 `database-for-traffic-distribution`, E01 `cache-for-traffic-distribution` |
| 3.24 | What a prebuilt image-analysis service does out of the box, as distinct from adjacent media tasks | C2 | E01 `speech-task-for-vision-task`, D19 `image-manipulation-capability-claim`, D19 `pose-estimation-capability-claim` |
| 3.26 | Static anycast addressing with health-based cross-Region failover for TCP/UDP is a routing accelerator, not DNS, not a regional balancer, not a CDN | C2 | E01 `dns-for-anycast-routing`, E01 `regional-balancer-for-global-routing`, E01 `caching-for-routing` |
| 3.29 | Choosing the archival class when retrieval within hours is acceptable — one tier up from deep archive | C4 | E03 `auto-tiering-for-archive`, E03 `single-zone-ia-for-archive`, E03 `standard-for-archive` |
| 3.31 | A managed relational service that preserves an existing engine's compatibility while adding managed availability | C2 | E01 `graph-database-for-relational`, E01 `key-value-for-relational`, E01 `cache-for-relational` |
| 3.33 | When the requirement is OS-level control plus fine-grained billing, the answer is the instance service, not the simplified or serverless ones | C2 | E01 `simplified-vps-for-instances`, E01 `function-runtime-for-servers`, E01 `container-orchestrator-for-servers` |
| 3.34 | How the platform's Region/zone structure produces availability, stated against three false structural claims | C1 | D19 `subnet-as-physical-boundary-claim`, E01 `cdn-as-availability-mechanism`, D19 `choose-your-data-centre-claim` |
| 3.35 | Which database changes scale a managed instance without application changes (choose 2) | C2 | E01 `connection-proxy-for-scaling`, E04 `availability-feature-for-scaling`, E01 `autoscaler-for-instance-class` |

**Domain 3 observation.** Broader than the sibling article — storage classes, global infrastructure,
databases and analytics all get real coverage, and item 3.8's permutation form is the cleanest
distractor construction in the whole corpus. Two structural notes: item 3.35's
`availability-feature-for-scaling` distractor (offering a high-availability feature as a scaling
mechanism) is a genuinely instructive confusion and should be reused; item 3.15 is
**off-blueprint** (the service it keys on is on the guide's out-of-scope list). Task Statement 3.8's
long tail — end-user computing, frontend/mobile, IoT, business applications, developer tools — is
untested here too.

## Domain 4 · Billing, Pricing, and Support (6 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.3 | Analysing historical spend by service and account is the cost-analysis tool's job, not the estimator's or the audit log's | C6 | E01 `forward-estimator-for-historical`, E01 `api-audit-for-cost-analysis`, E01 `billing-container-for-cost-analysis` |
| 4.6 | Proactive warning that usage is approaching a service quota comes from the recommendation engine | C6 | E01 `health-events-for-quota-guidance`, E01 `spend-analysis-for-quota-guidance`, E01 `metrics-for-quota-guidance` |
| 4.10 | Compute metering granularity for a licensed operating system | C4 | E03 `granularity-slip` ×3 — **not a blueprint fact and historically unstable** `[UNVERIFIED]` |
| 4.17 | Continuous visualisation of spend and usage across linked accounts | C6 | E01 `alerting-for-visualisation`, E01 `estimator-for-visualisation`, E01 `api-audit-for-visualisation` — **near-duplicate of 4.3** |
| 4.25 | Which data-movement and storage patterns carry no charge (choose 2) | C4 | E03 `cross-region-replication-as-free`, E03 `egress-as-free`, E03 `storage-as-free` |
| 4.30 | How reservations apply across a consolidated-billing family, and the zone-label condition for sharing a zonal reservation (choose 2) | C4 | D19 `all-instances-discounted-claim`, D19 `no-sharing-claim`, E03 `region-condition-for-zone-condition` |

**Domain 4 observation.** Item 4.30 is **the hardest item in the entire 80-item corpus** and the
only one that requires arithmetic plus a conditional rule. It is also the only item touching
blueprint bullet b-4.1-5 (reservation behaviour in an organisation). Worth preserving as the model
for this exam's ceiling difficulty. Items 4.3 and 4.17 are a near-duplicate pair (same concept,
same key) — merge at S3. Item 4.10 should be dropped rather than merged: it asserts a billing
granularity the exam guide never states and that has changed over the platform's history.

## Distractor-pattern frequency across the 35 items

Counted from the tables above; 105 wrong options (27 single-choice × 3 + 8 multiple-response × 3).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` | 49 | 47% — high, but eleven points lower than the sibling article, because the responsibility items displace it |
| E02 `responsibility-side-flip` | 12 | **the reason to register this source.** All twelve come from four items |
| E04 `sibling-term-substitution` | 15 | includes the three-way `mapping-permutation` form (item 3.8), the best construction in the corpus |
| E03 `tier-or-option-slip` | 13 | storage classes and archival tiers dominate |
| D19 `false-technical-claim` | 8 | notably stronger here than in the sibling article; the "invented capability" family works well |
| E05 `cost-model-inversion` | 2 | both as the *key* of a negative-stem item rather than as a distractor |
| E06 `out-of-scope-service-lure` | 3 | again, should be zero in our bank |
| D01, D13 | 1 each | over-engineering and blast-radius appear once, in the identity-proliferation item |

**Consequences for authoring** (these merge with the sibling article's; where they differ, this
source's evidence is the reason):

1. **`E02` is achievable at scale** — four items produced twelve distractors without strain. The
   proposed 0.10 cap from the sibling artefact is a *floor* to aim at, not a ceiling to fear.
2. **Adopt the `mapping-permutation` sub-form of `E04`** (item 3.8) as a named construction in the
   authoring guide: N services × N categories, wrong options permute the mapping. It is cheap to
   author, impossible to guess, and tests exactly the recognition this exam is about.
3. **`D19` at ~0.10 is evidenced twice over** — this source lands eight false-capability distractors
   and they are among its strongest items.
4. **Negative-stem items ("which statement is false") cap at one per domain.** This source has two
   and they duplicate each other.
5. **Difficulty ceiling.** Item 4.30 shows the exam's hard end is *conditional rules over a small
   arithmetic*, not deep technical reasoning. One or two bank items should reach that ceiling; more
   would misrepresent the exam.

## Concepts this source tests that other sources do not spell out

- The shared-responsibility boundary in four separate framings — customer duty, AWS duty, identity
  duties, and security obligations (items 2.7, 2.12, 2.28, 2.32).
- Storage-class selection driven by an explicit retention period and an explicit retrieval
  tolerance (items 3.18, 3.29) — the sibling article tests retrieval speed but never retention.
- Reservation behaviour across a consolidated-billing family, including the zone-label condition
  (item 4.30).
- Which data movements are free (item 4.25) — the only coverage of blueprint bullet b-4.1-6 in the
  whole corpus.
- Elasticity as a *property* distinguished from the *service* that delivers it (item 1.27).
- Identity as a global rather than regional construct (item 2.14).
- Free-text-free storage-model mapping (item 3.8).

## Concepts other sources hold that this source does not test

The reconciliation belongs to `derivation/master-inventory.md` at S3. Pointing forward: this source
tests no CAF/partner/professional-services item (only `tutorialsdojo-sampler` does), no support-plan
item, no vulnerability-scanning or data-classification item, and no notification-fan-out item — all
supplied by the other two registered sources.
