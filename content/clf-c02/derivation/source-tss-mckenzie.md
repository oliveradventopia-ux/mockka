# Artefact A · TheServerSide / McKenzie CLF-C02 question set distillation

**What this is.** Cameron McKenzie's freely published CLF-C02 practice article on TheServerSide
(2025-03-09) contains 35 questions written against the public exam blueprint. This document
records, for each item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does this author believe is tested?" — an independent reading of the blueprint by a named
practitioner who publishes his items with per-option refutations and a closing exam tip.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `tss-mckenzie` in [sources.md](sources.md). Credited in the exam README.
> Screened against the excluded dump corpora: **no numbered correspondence** (its items 1 and 4 are
> unrelated to ExamTopics CLF-C02 topic-1 questions 1 and 4), and the house style — invented
> company names carrying specific operational quantities in the stem — is absent from
> recall-sourced corpora. The author publishes an explicit anti-braindump position for this item
> pool. Screening is evidence of absence, not proof of originality; recorded as such.
>
> **Independence caveat:** this source and [`tss-declute`](source-tss-declute.md) draw from the
> same item pool. For convergence they count as **one** attestation, not two. See
> [sources.md](sources.md#independence-warning--tss-mckenzie-and-tss-declute-are-one-voice-not-two).

## Proposed theme set (for S3's `authoring.json`)

The T1–T8 starter themes in `methodology/03-authoring-guide.md#themes` were derived from an
architecture-professional exam and fit this exam even worse than they fit AIF-C01: CLF-C02
explicitly excludes designing architecture, coding and troubleshooting, so no theme built on
design judgment can be instantiated. Both Artefact-A documents in this package use the proposed
set below; **declaring it is S3's call**, not this session's.

| id | Theme | Judgment exercised |
|---|---|---|
| C1 | Concept identification | name the cloud property, economic idea or model behind a described situation |
| C2 | Service selection | pick the AWS service that performs the required job, against near neighbours that perform adjacent jobs |
| C3 | Responsibility placement | decide which side of the shared-responsibility boundary a duty falls on |
| C4 | Cost and purchasing judgment | choose the pricing model, purchasing option or storage tier a stated constraint implies |
| C5 | Control selection | pick the security, identity or governance control that meets an obligation |
| C6 | Where-to-find-it | know which resource, plan, partner or channel supplies a needed thing |

## Proposed distractor-pattern extensions (for S3's `authoring.json`)

The shared D01–D20 registry names failures of *professional judgment*. This exam's distractors are
almost entirely failures of *technical discrimination* at recognition altitude, so the same kind of
extension AIF-C01 needed is needed here — with a different mix. Proposed extensions, with the
evidence count from this source:

| id | Name | Definition | Count here |
|---|---|---|---|
| E01 | `service-role-swap` | a real, in-scope AWS service that performs an adjacent but different job | 61 |
| E02 | `responsibility-side-flip` | a duty taken from the other side of the shared-responsibility boundary | 1 |
| E03 | `tier-or-option-slip` | a neighbouring member of the same graded family — storage class, retrieval tier, support plan, purchasing option, billing granularity | 12 |
| E04 | `sibling-term-substitution` | a neighbouring term from the same family offered as the definition (scalability for elasticity, block for object, ALB for NLB, console password for access key) | 16 |
| E05 | `cost-model-inversion` | CAPEX/OPEX or fixed/variable stated backwards, or usage-based pricing described as a flat or one-time charge | 3 |
| E06 | `out-of-scope-service-lure` | a real AWS service that the exam guide places on its **out-of-scope** list — cheap, because a prepared candidate eliminates it without reading the scenario | 3 |

D-patterns that transfer unchanged and are used below: D01 over-engineering, D02 under-structuring,
D06 wrong-layer, D07 detective-for-preventative, D13 blast-radius-expansion, D19
false-technical-claim.

## Format mix observed

| Domain | Single choice | Multiple response | Ordering | Matching | Total |
|---|---|---|---|---|---|
| d1 Cloud Concepts | 1 | 2 | 0 | 0 | 3 |
| d2 Security and Compliance | 8 | 1 | 0 | 0 | 9 |
| d3 Cloud Technology and Services | 17 | 1 | 0 | 0 | 18 |
| d4 Billing, Pricing, and Support | 4 | 1 | 0 | 0 | 5 |
| **Total** | **30** | **5** | **0** | **0** | **35** |

Asymmetries worth preserving or correcting, explicitly:

- **The domain mix is badly off-blueprint.** Observed 9 / 26 / 51 / 14 % against the blueprint's
  24 / 30 / 34 / 12 %. Domain 1 is under-served by fifteen points and Domain 3 over-served by
  seventeen. A bank built to this source's shape would drill service recall and starve cloud
  concepts. **Correct to blueprint weights; do not inherit.**
- **Multiple response is 14% of items and always "choose 2 of 5".** The real exam permits two *or
  more* correct responses among *five or more* options. Every MR item in all three registered
  sources is choose-2-of-5, so the corpus gives no calibration at all for choose-3 or 6-option
  items. S3 should decide deliberately rather than inherit the corpus's silence.
- **Zero ordering and zero matching — and that is correct here.** Unlike AIF-C01, CLF-C02 has only
  the two item types, so this source's format profile matches the exam exactly. `scenario_matching`
  must be 0 for this exam.
- **Every stem is scenario-wrapped, including the pure-recall ones.** Even "what is an edge
  location" arrives with a company and a situation. The wrapper adds no discrimination in about a
  third of items; authoring should use scenario wrappers where they change the answer and drop
  them where they do not.

## Domain 1 · Cloud Concepts (3 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.4 | The primary cost benefit of cloud adoption is consumption-based billing, not a purchasing-model swap or an outsourcing of duty | C1 | E05 `capex-for-opex`, E05 `commitment-as-default`, E02 `total-outsourcing-claim` |
| 1.15 | Which cloud capabilities make a team faster, as distinct from cheaper or safer (choose 2) | C1 | E01 `service-for-benefit`, E04 `financial-benefit-for-operational`, E04 `security-benefit-for-operational` |
| 1.28 | Which billing behaviours actually reduce a monthly bill, as distinct from tools that only report on it (choose 2) | C4 | D19 `invented-line-item`, E05 `flat-fee-for-usage-based`, E01 `reporting-tool-for-pricing-model` |

**Domain 1 observation.** Three items for a 24%-weighted domain, and all three orbit the same
economic idea. The Well-Architected pillars (3 blueprint bullets), migration strategy, CAF,
rightsizing, automation and economies of scale are entirely absent. This source's reading of
Domain 1 is "cloud is cheaper and faster", which is the domain's thinnest possible interpretation.

## Domain 2 · Security and Compliance (9 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | Workforce single sign-on to external SaaS via SAML is IAM Identity Center's job, not IAM's and not Cognito's | C5 | E01 `customer-identity-for-workforce`, E01 `permissions-for-sso`, E01 `client-tool-for-identity` |
| 2.6 | Automated vulnerability and network-exposure assessment of instances is Inspector's job | C5 | E01 `config-compliance-for-vuln-scan`, E01 `threat-detection-for-vuln-scan`, E01 `data-classification-for-vuln-scan` |
| 2.11 | Distinguishing MFA factor types by the physical interaction each requires | C5 | E04 `totp-token-for-security-key`, E04 `virtual-mfa-for-hardware-key`, E04 `sms-otp-for-security-key` |
| 2.14 | Discovering and classifying sensitive data at rest in object storage is Macie's job | C5 | E01 `key-management-for-classification`, E01 `secret-store-for-classification`, E01 `threat-detection-for-classification` |
| 2.19 | Programmatic API calls are authenticated with access keys, not with certificates or SSH keys | C5 | E01 `certificate-service-for-credentials`, E04 `ssh-key-for-api-credential`, E04 `console-credential-for-programmatic` |
| 2.22 | Aggregating arbitrary application/system logs, filtering patterns into metrics and alarming on them is CloudWatch Logs' job | C2 | E01 `api-audit-for-app-logs`, E01 `tracing-for-log-aggregation`, E01 `search-engine-needing-a-pipeline` |
| 2.23 | Which credentials can be attached directly to an IAM user, as distinct from OS or compute credentials (choose 2) | C5 | E04 `instance-key-pair-for-user-credential`, E01 `certificate-for-login-credential`, E04 `os-credential-for-cloud-credential` |
| 2.27 | Long-lived access keys belong to a user identity, not to a role, a policy or a group | C5 | E04 `role-for-user`, E04 `policy-for-identity`, E04 `group-for-identity` |
| 2.32 | Compute that needs to call another service should assume a role, not hold static keys | C5 | E01 `key-management-for-authorization`, E01 `end-user-identity-for-workload-identity`, E04 `static-keys-for-assumed-role` |

**Domain 2 observation.** Well-weighted (26% observed against 30% blueprint) and genuinely strong
on access management — six of the nine items are IAM-shaped and they cover the credential families
carefully. But the coverage is lopsided *within* the domain: the shared-responsibility model, which
carries 6 of the domain's 31 blueprint bullets, is tested **zero** times here, and so are AWS
Artifact, compliance geography, and the root-user cluster. This source treats "security" as
"identity".

## Domain 3 · Cloud Technology and Services (18 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.2 | Coordinating multi-step work with visible state and built-in retries is an orchestrator's job, not an event bus's or a queue's | C2 | E01 `event-bus-for-orchestrator`, E01 `runtime-for-orchestrator`, E01 `queue-for-orchestrator` |
| 3.5 | A private link with predictable throughput is Direct Connect; encrypted tunnels over the internet are not | C2 | E01 `internet-tunnel-for-dedicated-link`, E01 `cdn-for-hybrid-link`, E04 `contact-centre-name-collision` |
| 3.7 | What an edge location *is* — a content-delivery point of presence, not a connectivity endpoint | C1 | E04 `interconnect-site-for-pop`, E04 `service-endpoint-for-pop`, E04 `vpn-endpoint-for-pop` |
| 3.9 | Serving object-storage assets worldwide with low latency is a CDN's job | C2 | E01 `app-platform-for-cdn`, E01 `function-runtime-for-cdn`, E01 `anycast-routing-for-caching` |
| 3.10 | Identifying a fully vendor-operated application by what the customer does *not* manage | C1 | E04 `iaas-for-saas`, E04 `paas-for-saas`, E04 `faas-for-saas` — **off-blueprint, see below** |
| 3.12 | Near-real-time log search and operational dashboards is a search/analytics engine's job, not BI's or batch's | C2 | E01 `bi-tool-for-search`, E01 `batch-engine-for-interactive`, E01 `sql-on-object-store-for-log-search` |
| 3.13 | Two different global-performance mechanisms — edge caching and optimised routing — solve a single-Region global audience together (choose 2) | C2 | E01 `upload-accelerator-for-delivery`, E01 `vpc-interconnect-for-user-latency`, E01 `private-link-for-public-audience` |
| 3.16 | Engine patching on a managed database is a managed-service setting, not an operator task | C2 | D07 `check-instead-of-remediate`, D02 `manual-quarterly-toil`, D06 `os-patcher-for-managed-engine` |
| 3.18 | Matching a load-balancer type to the layer at which the traffic must be balanced | C2 | E04 `layer-7-for-layer-4`, E04 `legacy-sibling`, E01 `global-router-for-regional-balancer` — **finer than the blueprint, see below** |
| 3.20 | A drop-in cache that preserves the existing data model differs from a general-purpose cache that requires application changes | C2 | E01 `general-cache-for-drop-in`, E01 `key-service-for-cache`, E01 `queue-for-cache` |
| 3.21 | What choosing a managed service actually buys: less operational work, not more control and not free durability | C1 | D19 `backups-unnecessary-claim`, E04 `control-benefit-for-ops-benefit`, D19 `replication-by-default-claim` |
| 3.25 | Accelerating *uploads* from distributed clients is a different mechanism from accelerating *delivery* to them | C2 | E01 `cdn-for-upload-path`, E01 `agent-migration-for-adhoc-upload`, D01 `dedicated-circuit-for-many-clients` |
| 3.26 | One managed service that fans out to both SMS and email, as distinct from routing, queuing or email-only services | C2 | E01 `event-router-for-notifier`, E01 `queue-for-notifier`, E01 `email-only-for-multi-channel` |
| 3.29 | Retrieval speed is a per-request tier choice within archival storage, not a network feature | C4 | E03 `hours-tier-for-minutes-tier`, E03 `bulk-tier-for-expedited`, E01 `network-feature-for-retrieval-tier` — **finer than the blueprint** |
| 3.31 | Compute placed inside a carrier network for mobile-edge latency | C2 | E01 `on-premises-rack-for-carrier-edge`, E06 `transfer-appliance-lure`, E01 `metro-zone-for-carrier-edge` — **off-blueprint, see below** |
| 3.33 | Choosing the container launch model that preserves host access | C2 | E04 `serverless-launch-type-for-hosted`, E01 `registry-for-orchestrator`, E01 `function-runtime-for-long-running-service` |
| 3.34 | Recognising a prebuilt, API-consumed AI capability as a finished application rather than a platform or an instance | C1 | E04 `paas-for-finished-app`, E04 `iaas-for-finished-app`, E04 `faas-for-finished-app` — **off-blueprint framing** |
| 3.35 | What a load balancer does, stated against three descriptions of other services | C1 | E01 `autoscaler-description`, E01 `interconnect-description`, E01 `dns-description` |

**Domain 3 observation.** Half the source sits here, and the coverage is real but narrow: it is
almost entirely *service selection by task* (theme C2). The blueprint's Task Statement 3.8 — the
largest in the exam, covering application integration, business applications, developer tools,
end-user computing, frontend/mobile and IoT — gets exactly two items (3.2, 3.26), both from the
messaging corner. Instance-family selection, VPC security controls, lifecycle policies, AWS Backup,
Storage Gateway and the migration tools are absent. Three items (3.10, 3.31, 3.34) are
**off-blueprint** and two more (3.18, 3.29) go finer than the guide's stated granularity — see the
rejection table in [Artefact B](source-clf-blueprint.md#off-blueprint-concepts-to-reject-at-s3).

## Domain 4 · Billing, Pricing, and Support (5 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.3 | The purchasing option defined by interruptibility in exchange for the deepest discount | C4 | E03 `on-demand-for-spot`, E03 `standard-reservation-for-spot`, E03 `convertible-reservation-for-spot` |
| 4.8 | The same interruptibility trade-off, reached from a bursty-workload framing | C4 | E03 `reservation-for-spot`, E03 `on-demand-for-spot`, D01 `dedicated-hardware-for-ephemeral-work` |
| 4.17 | What the no-cost support tier does and does not include (choose 2) | C6 | E03 `enterprise-only-service-in-basic`, E03 `paid-tier-guidance-in-basic`, E03 `paid-tier-tooling-in-basic` |
| 4.24 | Surfacing under-utilised resources is a recommendation engine's job, not a spend-analysis or raw-metrics job | C6 | E01 `spend-analysis-for-utilization`, E01 `raw-metrics-for-recommendation`, E01 `threshold-alerting-for-recommendation` |
| 4.30 | Commitment recommendations derived from historical usage come from the cost-analysis tool, not the alerting, raw-billing or forward-estimate tools | C6 | E01 `alerting-for-analysis`, E01 `raw-billing-data-for-recommendation`, E01 `forward-estimate-for-historical-analysis` |

**Domain 4 observation.** Correctly weighted (14% vs 12%) and the only domain in this source where
the item count roughly matches the blueprint. Items 4.3 and 4.8 are a **near-duplicate pair** —
same concept, same key, same distractor family, different wrapper; S3 should merge them into one
concept and the near-duplicate validator check should be expected to fire if both are ever
imported. Cost allocation tags, the Cost and Usage Report, RI flexibility and data-transfer
charging are untested.

## Distractor-pattern frequency across the 35 items

Counted from the tables above; 96 wrong options in total (30 single-choice items × 3 + 5
multiple-response items × 3 remaining options + 1 extra option where an MR item ran to 5).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` | 61 | **63% of all distractors.** This is the exam's native failure mode and it will need a cap, not encouragement |
| E04 `sibling-term-substitution` | 16 | healthy; the credential-family and storage-type discriminations are the best items in the source |
| E03 `tier-or-option-slip` | 12 | concentrated in purchasing options, support tiers and retrieval tiers |
| E05 `cost-model-inversion` | 3 | under-used given Domain 1's weight |
| E06 `out-of-scope-service-lure` | 3 | should be **zero** in our bank — these are free eliminations |
| D19 `false-technical-claim` | 3 | the "backups unnecessary" / "replication by default" family; effective and under-used |
| D01 `over-engineering` | 2 | rare at this altitude, but works when the scenario is small |
| D07, D02, D06, D13 | 1 each | judgment-shaped patterns barely appear; that is honest for a foundational exam |
| E02 `responsibility-side-flip` | 1 | **structurally under-used** — the blueprint gives this 6 bullets and the source gives it one distractor |

**Consequences for authoring.**

1. **Cap `E01` at 0.35 of all distractors.** Unchecked it becomes the whole exam, and a bank made of
   61% service-swap distractors teaches service lists rather than cloud concepts. AIF-C01 set
   `E01: 0.3`; this exam is more service-oriented, so 0.35 is the proposed manifest cap.
2. **Raise `E02` deliberately to ~0.10.** The shared-responsibility model is 6 blueprint bullets in
   a 30%-weighted domain and the whole practice corpus produces one distractor from it.
3. **Raise `E05` to ~0.08** and use it on the four untested cloud-economics bullets rather than on
   another CAPEX/OPEX restatement.
4. **Set `E06` to 0.** Any distractor naming a service on the guide's out-of-scope list is a free
   elimination; the validator should ideally learn the out-of-scope list as a check (ladder rung:
   *check*).
5. **Keep `D19` at ~0.10.** False-capability claims are the one judgment-shaped pattern that works
   at this altitude, and the source proves it.
6. **Cap near-duplicate concepts.** This source alone contains one exact concept duplicate (4.3 /
   4.8) and one within Domain 1 (1.4 / 1.28 share the pay-as-you-go idea). `near_duplicate_jaccard`
   should stay at or below AIF-C01's 0.4.

## Concepts this source tests that other sources do not spell out

- Drop-in caching for a NoSQL store versus general-purpose caching, framed as "no application
  change" (item 3.20) — the only item in the corpus that tests a *migration-cost* constraint.
- Upload acceleration as a distinct mechanism from content delivery (item 3.25).
- Managed-database engine patching as a service setting rather than an operator task (item 3.16) —
  the only item in the corpus that touches the responsibility boundary *shifting* by service, and
  it does so implicitly.
- The no-cost support tier's exact inclusions (item 4.17).
- MFA factor types distinguished by physical interaction (item 2.11).
- Notification fan-out across two channels from one service (item 3.26).

## Concepts other sources hold that this source does not test

The reconciliation belongs to `derivation/master-inventory.md` at S3. Pointing forward: this source
tests **no** shared-responsibility item, **no** Well-Architected item, **no** CAF or partner item,
and **no** storage-class-by-retention item — all of which the other two registered sources supply.
The complement is nearly clean, which is the strongest argument for keeping all three sources.
