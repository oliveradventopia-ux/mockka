# Artefact C · Master concept inventory — AZ-900

**What this is.** The union of [Artefact B](source-az900-studyguide.md) — the study-guide
distillation (57 objective bullets across 12 skill groups, plus the named-service register) — and
the three Artefact A practice distillations
([Microsoft Learn curriculum](source-ms-learn-az900-modules.md), 35 items;
[Tutorials Dojo](source-tutorialsdojo-az900.md), 10 items;
[Inside Cloud and Security](source-insidecloud-az900.md), 100 items). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only (clean-room: no source was opened).
It is the authoring contract: **every concept here is the primary concept of exactly one bank
item**, enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried there: each concept's `sources[]` entry for `az900-studyguide` lists the `b-x.y-z` rows of
Artefact B it absorbs.

---

## Result

**65 concepts** — one per bank item, 1.30× the 50-item modelled exam. Per-domain counts are the
blueprint weights applied to the bank size (largest-remainder rounding), and the union was driven
to land on them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · Describe cloud concepts | 28% | 18 | 14 | 13 |
| d2 · Describe Azure architecture and services | 38% | 25 | 19 | 21 |
| d3 · Describe Azure management and governance | 34% | 22 | 17 | 15 |
| **Total** | **100%** | **65** | **50** | **49** |

Candidate pool going in: 57 objective bullets (d1 15 / d2 27 / d3 15) + the practice-only
candidates that survived the outline screen ≈ **70 candidates → 65 concepts**, via 12 documented
splits, 4 documented merges, 1 cross-bullet synthesis, and the off-blueprint rejections tabled
below. Arithmetic: 57 bullets + 12 splits − 4 merges = 65 (the synthesis C-054 is one of d3's
splits in this count).

### Bank size 65 — the L-0008 computation

Exam form: 50 × {28, 38, 34}% = **14 / 19 / 17 exactly** (no rounding required). Bank candidates in
the 1.3–1.4× band, largest-remainder allocation per `builder/learning/LEARNING.md` L-0008:

| Bank | Ratio | d1 / d2 / d3 | Tie-free? |
|---|---|---|---|
| 65 | 1.30 | 18.20 / 24.70 / 22.10 → **18 / 25 / 22** | yes (.20/.70/.10 unique) |
| 66 | 1.32 | 19 / 25 / 22 | yes |
| 67 | 1.34 | 19 / 25 / 23 | yes |
| 68 | 1.36 | 19 / 26 / 23 | yes |
| 69 | 1.38 | 19 / 26 / 24 | yes |
| 70 | 1.40 | 19.60 / 26.60 / 23.80 | **no** — d1/d2 tie at .60 after d3 takes the first seat |

Tie-freeness does not discriminate among 65–69, so the size was chosen by **merge honesty**: 65 is
the size whose allocation the union meets without padding or forced thin splits. The honest merge
lands at d1 18 (15 bullets + 3 economics/benefit splits), d2 25 (27 bullets − 4 merges + 2 splits)
and d3 22 (15 bullets + 7 splits, every one separately attested or bullet-phrased). Every larger
size demands d1 = 19, and the 19th d1 concept does not exist without splitting a closed
discrimination family into flashcard halves — exactly the over-split → near-duplicate failure
methodology/02 warns about. The cost of 65 is a 1.30 ratio at the bottom of the band (reserves:
d1 4 / d2 6 / d3 5). Flagged as a Gate-1 decision with 67 (= two named thin splits: C-003/C-004
regrouped plus a C-056 Cloud Shell split) as the alternative if Oliver wants more S6 freedom.

## Source composition

**Convergence semantics for this package.** `az900-studyguide` and `ms-learn-az900-modules` are
both Microsoft and are **one author** for convergence purposes
([sources.md](sources.md#why-ms-learn-az900-modules-is-one-source-not-two)); the independent signal
is `tutorialsdojo-az900` + `insidecloud-az900`. So: **`priority: high` ⟺ attested by ≥2 independent
authors** — which, since the union is blueprint-first, means Microsoft plus at least one third
party. This diverges from the validator's raw `sources.length >= 2` computation for exactly five
concepts (below); those five WARN findings are intended, documented authoring judgment per
methodology/02 §method.

| Origin | Count | Share |
|---|---|---|
| **Convergent** — blueprint + ≥1 independent third party (`priority: high`) | 49 | 75% |
| **Microsoft-pair only** — study guide + Microsoft's own curriculum (`priority: normal`, hand-set) | 5 | 8% |
| **Blueprint-only** — study guide alone (`priority: normal`, computed) | 11 | 17% |

Per-source attestation: `az900-studyguide` 65/65 · `ms-learn-az900-modules` 33/65 ·
`insidecloud-az900` 36/65 · `tutorialsdojo-az900` 10/65.

### The five documented priority divergences (validator WARNs, intended)

| Concept | Sources | Why normal despite two entries |
|---|---|---|
| C-001 cloud computing definition | studyguide + ms-learn 1.1 | same author twice — no independent corroboration |
| C-012 reliability vs predictability | studyguide + ms-learn 1.5 | same |
| C-057 Azure Arc | studyguide + ms-learn 3.6 | same |
| C-058 infrastructure as code | studyguide + ms-learn 3.7 | same |
| C-061 health surfaces triad | studyguide + ms-learn 3.9 | same |

Two structural facts behind the composition numbers:

1. **Every concept traces to the blueprint.** The union was built blueprint-first against the
   named-service register: every practice-only candidate either mapped onto a 2026-07-20 bullet
   (and merged into it) or failed the outline screen and was rejected (table below). There are no
   practice-only concepts in this inventory — with a 21%-off-blueprint practice source in the
   package, source agreement without the outline in hand is evidence about the *old* exam.
2. **Convergence was computed after the outline filter, never before** — the
   insidecloud artefact's own instruction. A concept "attested by two practice sources" is not
   attested by the exam if the outline does not name it.

## Split decisions

One row per bullet that produced more than one concept (the count-changing half of the union;
methodology/02 §sizing: too few concepts → split multi-idea rules, never pad):

| Bullet | Into | Rationale |
|---|---|---|
| b-1.1-5 consumption-based model | C-005 + C-006 | pay-for-use as a pricing property and CapEx→OpEx as the accounting consequence are separately examinable — insidecloud tests them as separate items (1.5 vs 1.4/1.12) |
| b-1.1-6 cloud pricing models | C-007 + C-008 | commitment-vs-PAYG (steady load) and spot (interruptible load) are two different judgments with different binding constraints, attested by different sources |
| b-1.2-1 high availability, scalability | C-010 + C-011 | the bullet names two benefits; vertical-vs-horizontal is the single most-repeated practice idea in the package while HA-as-benefit has zero practice signal — one item cannot serve both honestly |
| b-2.1-1 regions, region pairs, sovereign regions | C-019 + C-020 | sovereign regions are a compliance-boundary idea, not a geography-ladder idea; insidecloud attests each separately (2.16 vs 2.42) |
| b-2.2-5 virtual-network building blocks | C-029 + C-030 | six named services in one bullet, two genuinely different judgments: network-internal semantics (isolation/segmentation/name resolution) vs connectivity-construct selection (who is connecting, under which constraint) |
| b-3.1-1 factors that affect costs | C-044 + C-045 | billing mechanics of the running estate (stopped-VM storage, free resource groups) vs design-time levers (region, egress, licensing) — the first is insidecloud's best-attested d3 material, the second has no practice signal at all |
| b-3.1-3 cost management capabilities | C-047 + C-048 | the bullet's own verbs: *analysing* (retrospective) vs *budgeting and alerting* (proactive) — two capabilities, two distractor spaces |
| b-3.2-2 Azure Policy | C-051 + C-052 | prevent-at-creation and audit-the-existing-estate are the bullet's own two named jobs; insidecloud exercises both, from different foils |
| b-3.4-3 Azure Monitor, including Log Analytics, alerts, Application Insights | C-062 + C-063 + C-064 + C-065 | the richest attested cluster in d3 (six insidecloud items + tutorialsdojo 3.1) and the site of the package's one genuine cross-source key conflict; four concepts whose statements encode the containment relationship is what stops the two-answers-as-written failure recurring |
| — synthesis — b-3.2-2 × b-3.2-3 × b-2.4-5 | C-054 | the discrimination *between* the control classes (policy gates creation / lock protects existing / RBAC authorises) that insidecloud asks five times without ever keying correctly and no source builds as one item; the natural d3 scenario-matching seat |

## Merge decisions

| Merged into | From | Rationale |
|---|---|---|
| **C-019** region geography | b-2.1-1 + b-2.1-3 | the study-guide artefact's own verdict: datacenters carry almost no discriminating content alone ("at most one bank item") — the facility layer is the bottom rung of the geography ladder, and insidecloud 2.16 tests exactly that containment (region ≠ facility ≠ zone) |
| **C-024** containment hierarchy | b-2.1-6 + b-2.1-7 | "management groups exist to apply governance above subscriptions" and "the chain and what inherits down it" are one placement judgment; every attestation (ms-learn 2.2, insidecloud 2.9/2.30) exercises level-choice and inheritance together |
| **C-032** storage services and types | b-2.3-1 + b-2.3-4 | services-by-access-shape and types-below-the-service resolve to the same discrimination (blob/files/disks/queues/tables); the practice sources treat them as one storage-type-swap family; account-level options are carried as vocabulary |
| **C-038** authentication vs authorization + methods | b-2.4-2 + the insidecloud authn/authz cluster (2.38/2.41/2.43) | the proving-who vs deciding-what contrast is the boundary of this bullet against b-2.4-5; carrying it inside the methods concept absorbs a 5-item practice cluster without minting an off-outline concept |
| **C-042** security models | b-2.4-6 + b-2.4-7 | Zero Trust and defense-in-depth are each other's natural E03 foil (ms-learn 2.16 uses exactly that pair); one item testing the discrimination between the two models is stronger than two definitional items that would shingle |

Domain 2 absorbed all the merging (27 rows → 25 concepts) because its groups enumerate named
services at fine grain; d1 and d3 needed splits instead — the mirror image of the bullet-to-weight
tension recorded in [sources.md](sources.md#weight-band--point-weight-arithmetic-recorded-so-gate-1-can-check-it)
(d2 holds 47% of the bullets against 38% of the weight).

## Cross-domain placements

The blueprint wins placement; this table stops a later session "fixing" the disagreement.

| Concept | Attesting items live under | Exam domain | Why |
|---|---|---|---|
| C-007 commitment pricing | d3 cost items (TD 3.4; insidecloud 3.1/3.23; the sources file purchase-model items under cost management) | **d1** | the blueprint names *compare cloud pricing models* at 1.1 (b-1.1-6); b-3.1-1 keeps the bill-mechanics half (C-044/C-045) |
| C-008 spot capacity | ms-learn 3.3 (filed under cost management) | **d1** | same split: purchase-model judgment is d1; what-bills-when is d3 |
| C-009 serverless | d2 compute items (ms-learn 2.5, insidecloud 2.1 test it through Functions) | **d1** | b-1.1-7 is a d1 bullet; the d2 concept C-025 keeps service *selection*, C-009 keeps what serverless *means* — S4 must keep the two pitches distinct |
| C-054 control boundary | b-2.4-5 contributes the RBAC leg (d2) | **d3** | the judgment is governance-control placement (skill group 3.2); C-041 keeps RBAC mechanics as its own d2 item |

## Key-conflict resolutions (S3 decisions, binding on S4)

1. **"Correlate/collect events from many resources centrally" — Azure Monitor, not Log
   Analytics.** The one genuine cross-source disagreement (insidecloud 3.4 vs 3.11 vs
   tutorialsdojo 3.1). Resolution follows the outline's own phrasing — *Azure Monitor, including
   Log Analytics…* — which encodes containment: estate-wide collect/correlate/act keys to the
   platform (C-062); querying and analysing the collected logs keys to Log Analytics (C-063);
   notifying keys to alerts (C-064); application-internal telemetry keys to Application Insights
   (C-065). Every item in this family must carry the containment cue in the stem so only one
   reading survives; the surfaces are never offered as rivals to the platform without that cue.
2. **"Does the estate meet a regulatory standard?" — Microsoft Defender for Cloud, not Purview**
   (insidecloud's 2.49-vs-3.16 self-contradiction). The outline scopes Purview to the *data*
   estate (b-3.2-1) and Defender for Cloud to security posture including regulatory compliance of
   the infrastructure (b-2.4-8). C-043 and C-050 encode the boundary in their statements; items
   never offer the two against each other without a data-vs-infrastructure cue in the stem.
3. **"Stop anyone creating resources here" ambiguity** (insidecloud 3.20: read-only lock vs deny
   policy both defensible): items on C-051/C-053/C-054 must state the action being stopped
   (*creation* → policy; *deletion/modification of what exists* → lock) so the key is unique.

## What the blueprint holds that no accessible practice source tests

**11 blueprint-only concepts (17%)** — the degradation note per
`methodology/02-master-inventory.md#single-source`, scoped to a slice, plus the folded halves:

- **Whole concepts:** C-010 high availability as a benefit, C-013 security/governance as a
  benefit, C-014 manageability, C-027 resources required for VMs, C-031 public and private
  endpoints, C-036 Azure Migrate / Data Box, C-039 external identities, C-045 design-time cost
  drivers, C-048 budgets and alerts, C-055 the portal, C-056 the command surfaces.
- **Blueprint-only halves folded into converged concepts** (auditable because the host's
  `priority: high` comes from its other half): Azure Virtual Desktop inside C-026, Microsoft
  Entra Domain Services inside C-037, the datacenter rung inside C-019, defense-in-depth inside
  C-042, point-to-site inside C-030.
- **Microsoft-pair-only concepts** (vendor-corroborated but not independently): C-001, C-012,
  C-057, C-058, C-061 — the five documented divergences above.
- **Consequences:** no independent convergence signal exists for these; S6 seating priority falls
  back to blueprint weight and authoring judgment, and Gate 1 carries the lower-confidence flag
  for the slice. The artefacts' own reading stands: several of them (endpoints, Migrate/Data Box,
  external identities, pricing-model comparison) are precisely what a candidate drilled on stale
  community sets will never have seen — the highest-value items in the bank.
- **Exit recorded:** the Tier-1 `ms-practice-assessment` (free, unlimited retakes,
  account-walled — registered, never accessed) is the one source that could corroborate this
  slice AND the only vendor-authored calibration for format mix and difficulty. Gate-1 decision
  for Oliver; if authorised, a later S2 top-up + S3 delta pass recomputes convergence.

## What practice sources test that the blueprint does not spell out — reconciliation

**Carried in** (mapped onto blueprint bullets): the authentication-vs-authorization contrast
(→ C-038), one-tenant-many-subscriptions (→ C-023, C-037), resource-groups-do-not-bound-region
(→ C-022), VNet-isolated-by-default vs subnets-route-by-default as a deliberate pair (→ C-029),
stopped-VM and free-resource-group billing mechanics (→ C-044), cheapest-redundancy-because-
expendable (→ C-034), OTP tokens as a second factor (→ C-038), spot as the interruption-tolerant
lever (→ C-008), site-to-site vs point-to-site decided by who connects (→ C-030), the
estimate-versus-analyse discrimination in keyed-No form (→ C-046/C-047, and pattern E04).

**Rejected — off-blueprint.** Screened against the named-service register (every candidate key,
not just distractors — the tutorialsdojo artefact's rule 5). Recorded so the reconciliation shows
the decisions were made, not missed:

| Candidate | From | Why rejected |
|---|---|---|
| elasticity as a named benefit | insidecloud 1.11 | the 2026-07-20 outline's word for the capability is *scalability* (→ C-011); the legacy term is E05 distractor material only |
| economies of scale | insidecloud 1.13 | dropped from the current outline's benefit bullets |
| sustainability as a benefit | ms-learn 1.6 | not among the four benefit bullets of skill group 1.2 — the vendor's own curriculum exceeding the vendor's own outline |
| Azure AI services as a keyed concept | ms-learn 2.7 | no AI service is named anywhere in the outline |
| Azure Key Vault as a keyed concept | ms-learn 2.18 | not named; the identity/security bullets stop at Defender for Cloud |
| route-based vs policy-based VPN gateway types | ms-learn 2.10 | configuration distinction below "describe the purpose of Azure VPN Gateway" |
| Azure SQL Database as an item key | tutorialsdojo 1.2 | service not named; the *concept* (a managed data service is PaaS) is carried in C-016 against named services |
| Azure Blueprints | tutorialsdojo 3.3, insidecloud 3.17 | retired service, not in the outline — the single clearest demonstration of why agreement between stale sources is not exam evidence |
| NSG / Azure Firewall / DDoS Protection items | insidecloud 2.25, 2.26, 2.57 | the network-security appliance surface is absent from the current outline |
| identity-protection / PIM / endpoint-protection items | insidecloud 2.28, 2.31, 2.40 (partial) | products beyond the outline's stop at Defender for Cloud; 2.31 also mis-keys within its own family |
| eventing, low-code workflow, alert automation | insidecloud 3.10, 3.29 + eventing item | messaging/automation surface absent from the current outline |
| portal-URL trivia, TLS enforcement, on-premises gateway object | insidecloud 2.19, 2.12, 2.29 | below blueprint altitude — configuration or trivia, not description |

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   18/25/22.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered practice source has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with **exactly five**, all tabled above; any sixth is an error against this document.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 65 = 1.30× the 50-item modelled exam** — the L-0008 table above; Gate-1 ratification item.
- **Format mix (exam form): 42 single_choice + 5 multiple_response + 3 scenario_matching**
  (d1 12/1/1 · d2 16/2/1 · d3 14/2/1). Microsoft publishes no per-type counts and 135 of the 145
  accessible items are single choice, so the mix is MC-dominant by construction and **every
  format-mix number is low-confidence** until the Tier-1 assessment is accessible — disclosed in
  the manifest. Scenario-matching seats: the d1 service-model selection (C-018), the d2
  containment hierarchy or connectivity family (C-024/C-030, S4's choice), and the d3 control
  boundary (C-054, its natural home). `single_choice.options = 4` per the ms-learn artefact
  (do not inherit the vendor's 3); `multiple_response` = choose 2 of 5, all-or-nothing.
- **Problem-solution and hot-area approximations decided once, here.** The validator enforces an
  exact option count per format (engine `bank-shape`), so the S1-S2 sketch of two-option
  problem-solution members is **not representable** at `options: 4`. S3 amendment: the
  problem-solution *judgment* ("does this proposal satisfy the stated requirement?") is authored
  into standard four-option single_choice items — e.g. the assert-and-refute construction
  (insidecloud 1.14) with four candidate verdicts-plus-reasons, or "which proposal meets the
  requirement" — and the two-option Yes/No mechanic itself joins the series linkage as
  NOT reproduced, disclosed in `format_coverage`. Hot area is approximated as all-or-nothing
  `multiple_response` (loses the per-statement No branch and partial credit — disclosed); build
  list as single_choice over orderings; drag-and-drop as scenario_matching.
- **Pass threshold 70% (modelled)** and **item count 50 (modelled)** stand as manifested —
  both Gate-1 ratification items ([sources.md](sources.md#two-numbers-the-vendor-does-not-publish--modelling-decisions-for-gate-1)).
- **Pattern caps:** `E01: 0.30` (service-role-swap — 36–45% of wrong options across the two large
  sources; the cap forces the stem to carry a constraint rather than a service name),
  `E03: 0.35` (sibling-term-substitution — 36–56%; right for the closed families, corrosive
  beyond them), plus registry-standard `D03/D04: 0.10`. Near-duplicate threshold `0.4` (ccar-p
  precedent). Note per L-0012: the one-pattern-per-item structural rule already bounds both E-caps
  from above; they are guards, not the binding constraint.
- **Raise-targets (not caps):** `E02 scope-level-slip` — zero instances in 135 items across two
  sources against two ready-made containment chains; the highest-signal pattern available to this
  exam, targeted at skill groups 2.1 and 3.2. `E04 estimate-versus-analyse` — the package's best
  discrimination, generalised to recommend-vs-enforce (Advisor/Policy), observe-vs-prevent
  (Monitor/Policy), protect-vs-authorise (lock/RBAC).
- **S4 rules swept from the artefacts per L-0014** (each an authoring-contract rule here; ratchet
  candidates flagged at Gate 1):
  1. Every wrong option names something inside the named-service register — an out-of-register
     distractor is an elimination gift, and an out-of-register **key** is banned outright.
  2. No invented-term distractors (8/70 of the vendor's own slots waste the slot).
  3. E05 retired-or-offblueprint-service: sparingly as a distractor, never as a key.
  4. Adopt the mirror-pair construction (one concept, two constraints, two non-leaking stems) —
     within the 1:1 contract this means pitching *pairs of adjacent concepts* as mirrors
     (C-046/C-047, C-033 both ends, C-051/C-053), never two items on one concept.
  5. All-of-the-above keys and bare-label options are banned; option shapes stay parallel
     (`answer-length-cue` enforces the length half).
  6. d1's service-model items favour "which model does this constraint force?" over "service X is
     which model?" — do not inherit the classification-quiz shape.
  7. Monitor-family and Defender/Purview items carry the containment/boundary cue per the
     key-conflict resolutions above.
  8. Groups 2.2, 3.3, 3.4 carry the change-log *Minor* flag: author strictly from the artefacts'
     current-outline reading; treat any pre-2026 practice framing there as suspect. Bicep is
     colour at most (the outline names ARM templates).
- **`layers.syllabus_rules: false`** — the study guide *is* the syllabus and maps 1:1 onto the
  manifest domains (Artefact B §mapping); the ms-learn curriculum's module structure adds no
  independent rule layer (12 modules → the same 12 skill groups, one split). A rules layer would
  duplicate the skill-group references already carried in `concepts.json`. Weak-concept reporting
  is the honest grain; no `syllabus-rules.json` is written.
