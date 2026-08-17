# Artefact C · Master concept inventory — SY0-701

**What this is.** The union of [Artefact B](source-comptia-sy0701-objectives.md) — the exam-objectives
distillation (28 objectives split into 237 concept rows plus the 14-entry named-risk register) — and
the two Artefact A practice distillations ([CompTIA official V7 sampler](source-comptia-practice-v7.md),
10 items; [jealarue/exam90](source-jealarue-exam90.md), 145 items). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only (clean-room: no source was opened).
It is the authoring contract: **every concept here is the primary concept of exactly one bank item**,
enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried in `concepts.json` itself: each concept's `sources[]` entry for `comptia-sy0701-objectives`
lists the `b-x.y-z` rows of Artefact B it absorbs.

---

## The sizing decision this build had to make first

Artefact B closes with a structural fact: 237 blueprint concept rows against a methodology bank of
≈1.35× a 90-item exam. Its three honest options were **merge to fit**, **grow the bank to ≈237**, or
**weight-proportional selection** (keep all 237 rows in `concepts.json`, mark ≈122 bank-eligible —
the artefact's own recommendation). S3 chose **merge to fit**, overriding the artefact's
recommendation, for a reason the artefact could not see from its seat: the validator's
`concept-inventory` check pins per-domain concept counts to `bank_items` exactly, and
`concepts.schema.json` has no bank-eligible flag — option 3 is unrepresentable in the current
contract without weakening a check the methodology calls load-bearing. Merging keeps the 1:1
concept-to-item contract auditable; what option 3 wanted to preserve — the full 237-row blueprint
map — survives anyway, because Artefact B keeps every row and every concept's `sources[].items`
records exactly which rows it absorbs. A later top-up pass (bigger bank after SY0-801, or a Gate-1
request) can split any merged family back out by walking those references.

The consequence to own honestly: **a bank item now covers a family of blueprint terms, not always a
single term.** The merges below group rows by *the judgment that discriminates them* — the same
principle the objectives' own "compare and contrast" verbs use — so an item written against a merged
concept tests the discrimination the family exists to teach, with the family's own members as the
distractor set.

## Result

**122 concepts** — one per bank item, 1.36× the 90-item exam (the size in the 1.3–1.4× band whose
largest-remainder allocation is tie-free, per LEARNING `L-0008`: 122 → 15/27/22/34/24 with clean
remainder seating; 125 ties d2/d3 at the boundary). Per-domain counts are the blueprint weights
applied to the bank size, and the merge was driven to land on them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · General Security Concepts | 12% | 15 | 11 | 10 |
| d2 · Threats, Vulnerabilities, and Mitigations | 22% | 27 | 20 | 19 |
| d3 · Security Architecture | 18% | 22 | 16 | 13 |
| d4 · Security Operations | 28% | 34 | 25 | 23 |
| d5 · Security Program Management and Oversight | 20% | 24 | 18 | 17 |
| **Total** | **100%** | **122** | **90** | **82** |

Candidate pool going in: 237 Artefact B concept rows (the 14 named-risk-register entries live inside
them) + 0 surviving practice-only candidates ≈ **237 candidates → 122 concepts**, via 73 documented
multi-row merges (49 concepts carry a single row), 2 cross-domain placements, 1 cross-objective
consolidation, and the off-blueprint rejections inherited from the Artefact A filters (all below).

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — blueprint + ≥1 practice source (`priority: high`, computed) | 82 | 67% |
| **Blueprint-only** (`priority: normal`) | 40 | 33% |

Per-source attestation: `comptia-sy0701-objectives` 122/122 · `jealarue-exam90` 78/122 ·
`comptia-practice-v7` 10/122.

Structural facts behind these numbers:

1. **Every concept traces to the blueprint** — the union was built blueprint-first, and the
   objectives document is the syllabus (1:1 domain mapping, `layers.syllabus_rules: false`), so the
   practice-only share is 0% (LEARNING `L-0009`: convergence here measures *corroboration of the
   blueprint*, not union breadth). Every practice-only candidate either mapped onto an objective row
   (and merged into its concept) or failed the off-blueprint filter and was rejected — the filter
   list is Artefact B's, applied as a standing S3 rule.
2. **Effective independence is thin: ~1.2 practice sources.** The S1 handoff's own estimate. The
   official sampler is 10 items and contributes calibration more than corroboration; jealarue-exam90
   carries nearly all the convergence signal alone. If it fails Gate 1 (licence item), 68 of the 82
   high-priority concepts lose their second source and the build degrades to
   blueprint + 10 official items — a single-source build in all but name, flagged lower-confidence.
3. **Priority is computed, with zero divergences.** `priority: high` ⟺ `sources.length >= 2` for all
   122 concepts; the validator's `concept-convergence` check emits no warnings on this build.
4. **Attestation counting rule** (documented because the sources disagree in strength): jealarue's
   acronym-framed items count as attestations only where its Artefact A maps them to an objective
   row (the Artefact B coverage notes themselves count them, e.g. item 1.16 for AAA); pure acronym
   expansions with no row mapping (ZTNA, MFA, IOC, PII…) attest nothing. Two attestations rest on an
   Artefact-A coverage note with no item row (C-081 ← "covers b-4.5-2", C-119 ← "covers b-5.5-4
   partially") and are recorded per the aif-c01 precedent as a bare `{"artefact": "jealarue-exam90"}`
   entry.

**And 33% is uncorroborated**, concentrated exactly where Artefact B predicted — the degradation
note below lists it. It is also the bank's value argument: those are the concepts no accessible
practice resource covers, i.e. where an originally-authored bank beats the dump-saturated market.

---

## Merge decisions

One row per consolidation that materially changed the count (73 multi-row concepts; the 49
single-row concepts are direct carries). "From" cites Artefact B rows; where a practice source drove
the merge shape, its items are named. Grouped by domain.

### Domain 1 (37 rows → 15)

| Merged into | From | Rationale |
|---|---|---|
| **C-002** control types | b-1.1-2 + b-1.1-4 + b-1.1-5 + b-1.1-6 | deterrent-vs-preventive, compensating and directive are members of the type list exercised as discriminations — one type-judgment concept, its own list as distractor space |
| **C-006** AAA + identity fundamentals | b-1.2-3 + b-1.2-4 + b-1.2-5 + b-1.2-6 | the objective's remaining fundamentals are one "who may do what, and where do we stand" cluster; splitting re-creates flashcards |
| **C-007** Zero Trust | b-1.2-7 + b-1.2-8 + b-1.2-9 | the plane split only means anything with its components; one concept carries decide-vs-enforce with both planes' vocabulary |
| **C-008** physical security | b-1.2-10 + b-1.2-11 | barriers and sensors are the two halves of one physical-control selection |
| **C-010** change process + backout | b-1.3-1 + b-1.3-2 | the backout plan is a precondition *of* the approval spine; jealarue 1.7/1.18 test them as one process |
| **C-011** change consequences | b-1.3-3 + b-1.3-4 + b-1.3-5 | technical implications, documentation drift and version control are all "what the change does to the environment's truth" |
| **C-012** PKI trust machinery | b-1.4-1 + b-1.4-2 + b-1.4-13 + b-1.4-14 | key pair, escrow, issuance chain and revocation checking are one trust-lifecycle judgment; jealarue tests them as one cluster (1.9/1.10/1.15) |
| **C-013** encryption choices | b-1.4-3 + b-1.4-4 + b-1.4-5 + b-1.4-6 | level, transport, symmetry and strength are the four inputs to one "what/where/how to encrypt" decision |
| **C-015** integrity machinery | b-1.4-9 + b-1.4-10 + b-1.4-11 + b-1.4-12 | hashing/salting/stretching/signatures/ledgers share the judgment "which mechanism proves what"; blockchain alone is a trivia item |

### Domain 2 (52 rows → 27)

| Merged into | From | Rationale |
|---|---|---|
| **C-016** actor from attributes | b-2.1-1 + b-2.1-2 | the attribute IS the evidence for the actor — practice-v7 2.2's craft lesson |
| **C-017** motivation axis | b-2.1-3 + b-2.1-4 | motivation-as-axis and reading actor from motivation+capability are the same judgment forward and backward |
| **C-019** channel-named social engineering | b-2.2-1 + b-2.2-8 | phishing/vishing/smishing ARE the message channels wearing attack names — one discrimination |
| **C-021** trust-poisoning vectors | b-2.2-9 + b-2.2-11 + b-2.2-12 | typosquatting, watering hole and disinformation share one mechanism: poison what the target trusts, never touch the target |
| **C-022** payload vectors | b-2.2-2 + b-2.2-3 | non-message carriers plus the client/agentless reachability property — one "how does the payload arrive" concept |
| **C-023** exposed-surface family | b-2.2-4 + b-2.2-5 + b-2.2-6 | unsupported software, unsecured media, open ports and defaults are all "surface left open or as shipped" |
| **C-024** supply chain, whole | b-2.2-7 + b-2.3-3 + b-2.3-9 | cross-objective consolidation: vector (2.2), compromised link (2.3) and malicious update (2.3) are one supply-chain judgment; jealarue 2.18 tests all three faces at once |
| **C-025** memory & timing flaws | b-2.3-1 + b-2.3-2 | both break a silent assumption (bounds; nothing-changed-in-between); TOC/TOU is the mechanism the item will pitch |
| **C-027** platform flaws | b-2.3-4 + b-2.3-6 | OS-based and firmware/EOL/legacy are one "below the application, hard or forbidden to patch" class |
| **C-029** hygiene-class vulns | b-2.3-8 + b-2.3-10 + b-2.3-11 + b-2.3-12 | cloud-specific, cryptographic, misconfiguration and side-loading/jailbreaking are all setup-caused, not code-caused; misconfiguration's "boring answer" pitch is the item angle |
| **C-033** manufactured volume + DNS | b-2.4-3 + b-2.4-4 | amplification/reflection and DNS attacks are the two infrastructure-abuse families; jealarue tests them adjacently (2.21/2.22) |
| **C-036** attacks on secrets | b-2.4-6 + b-2.4-8 + b-2.4-9 | replay, spraying/brute-force and downgrade/collision/birthday all target authentication material — told apart by what is exhausted or broken; the spray-vs-brute log-counting pitch (jealarue 2.9) leads |
| **C-037** indicator families | b-2.4-10 + b-2.4-11 + b-2.4-12 | account-state, resource and logging indicators form the objective's "read the evidence" half — one concept, natural scenario_matching seat |
| **C-038** segmentation & isolation | b-2.5-1 + b-2.5-4 | the same containment judgment at two severities |
| **C-039** access mitigations | b-2.5-2 + b-2.5-7 | ACL/permissions and least privilege are expression and principle of one access decision |
| **C-040** intended = enforced | b-2.5-3 + b-2.5-8 | allow-listing executables and enforcing configuration are the same default-deny posture applied to code and to config |
| **C-042** lifecycle mitigations | b-2.5-5 + b-2.5-6 + b-2.5-9 | patch/encrypt+monitor/decommission are the mitigations that act over an asset's lifetime rather than at an event |

### Domain 3 (35 rows +1 imported → 22)

| Merged into | From | Rationale |
|---|---|---|
| **C-044** where it runs, who controls | b-3.1-2 + b-3.1-8 | on-prem, hybrid and centralized/decentralized are one locus-of-control comparison; jealarue 3.16's deployment-model item maps here at blueprint altitude |
| **C-045** code-shaped architecture | b-3.1-3 + b-3.1-4 + b-3.1-5 | IaC, serverless and microservices share the security consequence "what becomes reviewable/patchable" |
| **C-049** specialized systems + axes | b-3.1-10 + b-3.1-11 | Artefact B's own pairing: *inability to patch* (an axis) is exactly what makes ICS/RTOS/embedded special — the axes are how the item discriminates |
| **C-050** placement + selection | b-3.2-1 + b-3.2-9 | "where the control sits" and "select the effective control" are the objective's opening and closing meta-rows — one requirement-matching judgment |
| **C-052** appliance + presence | b-3.2-3 + b-3.2-4 | inline/tap and active/passive are what separate the appliances; jealarue 3.10 tests the pair as one property |
| **C-055** connectivity across foreign networks | b-3.2-7 + b-3.2-8 | VPN/TLS/IPSec and SD-WAN/SASE are the classic and cloud-era answers to the same problem — heavy jealarue attestation on both halves |
| **C-056** what the data is | b-3.3-1 + b-3.3-2 + b-3.3-3 | type-by-obligation, readability and classification labels are three properties read off one dataset description |
| **C-059** unusable-if-taken methods | b-3.3-6 + b-1.4-8 (cross-domain) | the obfuscation family (1.4) and the data-protection methods (3.3) share four of five terms — keeping both ships a near-duplicate; placed in d3 where the discrimination is taught |
| **C-061** redundancy architecture | b-3.4-1 + b-3.4-2 | load-balancing-vs-clustering and site temperatures are the two "more than one of it" decisions, capacity and readiness |
| **C-062** continuity inputs | b-3.4-3 + b-3.4-4 + b-3.4-5 | diversity, continuity of operations and capacity planning are the non-hardware inputs to staying up |
| **C-064** backups + power | b-3.4-7 + b-3.4-8 | surviving data loss and surviving power loss are the two "keep it recoverable" families; practice-v7 3.2 anchors the backup half |

### Domain 4 (69 rows −1 exported → 34)

| Merged into | From | Rationale |
|---|---|---|
| **C-065** baselines across targets | b-4.1-1 + b-4.1-2 | the three-verb lifecycle only means something applied to the target list; jealarue 4.1 tests exactly that pairing |
| **C-066** mobile & wireless estate | b-4.1-3 + b-4.1-4 + b-4.1-5 | ownership models, radios and coverage design are one estate-management cluster — the single largest untested block in the build, kept whole so one strong item owns it |
| **C-068** app security build-to-run | b-4.1-7 + b-4.1-8 | build-time controls and run-time containment are the two ends of one application-security judgment; jealarue 2.27 attests the sandbox half |
| **C-069** asset accountability | b-4.2-1 + b-4.2-2 + b-4.2-3 | acquisition, assignment and tracking are "you cannot protect what is not on the list" in three tenses |
| **C-071** find + confirm | b-4.3-1 + b-4.3-2 + b-4.3-7 | scanning/analysis produce findings; confirmation (FP/FN) decides if they are real — one evidence-quality judgment, FP-vs-FN as the pitch |
| **C-073** attack + invitation | b-4.3-4 + b-4.3-5 | pen test, responsible disclosure and bug bounty differ by contract and scope — practice-v7 4.2's exact discrimination |
| **C-074** identify + prioritise | b-4.3-8 + b-4.3-9 | CVSS/CVE and environment-driven prioritisation are the score and its context — jealarue 4.21's item shape |
| **C-075** respond + prove + report | b-4.3-10 + b-4.3-11 + b-4.3-12 | treatment (incl. the exception path — the named-risk register's strongest seed), verification and reporting close one loop |
| **C-076** monitoring pipeline + telemetry | b-4.4-1 + b-4.4-2 + b-4.4-7 + b-4.4-8 + b-4.4-9 | what is watched, the pipeline stages and the feeding tools are one plumbing concept; the judgment items (tuning, SIEM, SCAP) are split out |
| **C-078** machine-read compliance | b-4.4-4 + b-4.4-5 | SCAP/benchmarks and agent/agentless are "how the checking reaches the host"; jealarue 4.40 anchors benchmarks |
| **C-081** detection by match | b-4.5-2 + b-4.5-8 + b-4.5-12 | IDS/IPS, FIM and UBA are the same selection question — what does it match on: signature, file change, account behaviour |
| **C-082** enforce the secure variant | b-4.5-4 + b-4.5-5 | protocol/port selection and GPO/SELinux are choosing and enforcing the secure configuration — wire and host |
| **C-084** edge control suite | b-4.5-3 + b-4.5-6 + b-4.5-9 + b-4.5-10 + b-4.5-11 | web/DNS filter, NAC, DLP, EDR/XDR are told apart by the question each answers (reach/join/leave/run) — the E02 adjacent-control-swap family in one concept |
| **C-085** account lifecycle | b-4.6-1 + b-4.6-2 + b-4.6-3 | provisioning ends, permission implications and identity proofing are the account's birth-to-death hygiene |
| **C-086** password discipline | b-4.6-10 + b-4.6-11 | the policy levers and the take-the-password-away tools are one modern-password judgment (length beats complexity is the pitch) |
| **C-087** federation & SSO | b-4.6-4 + b-4.6-5 + b-4.6-6 | trusting another org's authentication, SSO and its protocols, and interoperability/attestation are one identity-trust cluster; jealarue 4.8 |
| **C-089** MFA factors + implementations | b-4.6-8 + b-4.6-9 | categories and implementations are the same discrimination — why two of the same kind are not MFA |
| **C-092** automation benefits vs costs | b-4.7-2 + b-4.7-3 | the objective's own two-sided framing; the cost half (SPOF, tech debt) is the diagnostic seed |
| **C-093** IR process + placement | b-4.8-1 + b-4.8-2 | the seven steps and which-step-does-this-belong-to are list and judgment of one concept — re-keyed to CompTIA's seven, not jealarue's NIST four |
| **C-095** beyond the incident | b-4.8-4 + b-4.8-5 | RCA and threat hunting both investigate past the visible incident — cause behind, misses ahead |
| **C-098** non-log sources | b-4.9-2 + b-4.9-3 | metadata and the non-log investigative sources are one "evidence that is not a log" concept |

### Domain 5 (44 rows +1 imported → 24)

| Merged into | From | Rationale |
|---|---|---|
| **C-099** document hierarchy + instances | b-5.1-1 + b-5.1-2 + b-5.1-3 + b-5.1-4 | the hierarchy is the discrimination; the named policies/standards/procedures are its instances and the item's option pool |
| **C-101** governance upkeep + structures | b-5.1-6 + b-5.1-7 | maintained-not-written-once and who-governs are the two operating facts of governance |
| **C-103** identify + cadence | b-5.2-1 + b-5.2-2 | finding the risk and choosing how often to look are the process's front door |
| **C-104** analysis modes + inputs | b-5.2-3 + b-5.2-5 | qualitative/quantitative and their inputs are mode and material of one honesty judgment; jealarue 5.18 |
| **C-107** tolerance vs appetite + postures | b-5.2-7 + b-5.2-8 | bearable-vs-wanted plus the three appetite postures — one calibration concept |
| **C-108** treatments + proper acceptance | b-5.2-9 + b-5.2-10 | exception/exemption is acceptance done properly — the named-risk register's "reads like an excuse and is not" seed |
| **C-109** reporting + BIA + metrics | b-5.2-11 + b-5.2-12 | risk reporting, BIA and RTO/RPO/MTTR/MTBF are how risk is told to the business; heavy jealarue attestation on the metric half |
| **C-111** diligence + monitoring | b-5.3-2 + b-5.3-4 | choosing honestly and watching continuously are the before/after of one vendor-trust judgment |
| **C-114** reporting + consequences | b-5.4-1 + b-5.4-2 | who the report is for and what non-compliance costs are one accountability concept |
| **C-116** privacy jurisdiction + roles | b-5.4-4 + b-5.4-5 | scope and roles are the two things every privacy scenario asks; statute names stay off-blueprint |
| **C-117** inventory/retention + erasure | b-5.4-6 + b-5.4-7 | knowing what you hold and the right to be forgotten are obligation and its limit |
| **C-118** attestation + audit independence | b-5.5-1 + b-5.5-2 + b-5.5-3 + b-4.3-6 (cross-domain) | asserting, self-assessing, being examined — one independence ladder; the 4.3 system/process audit row is the same instrument filed under vulnerability management |
| **C-119** offensive testing shapes | b-5.5-4 + b-5.5-5 | test shape and knowledge level are the two dials of one engagement design |
| **C-121** campaigns + behaviour diagnosis | b-5.6-1 + b-5.6-2 | the campaign trains recognition; risky/unexpected/unintentional is what you conclude from what you observe |
| **C-122** awareness programme | b-5.6-3 + b-5.6-4 + b-5.6-5 + b-5.6-6 | guidance, topics, reporting and lifecycle are one programme concept — execution, not theory |

Domain 4 absorbed the heaviest consolidation (69 rows → 34) because objectives 4.4–4.6 enumerate
tooling at product grain; the merges group by *the question the control answers* (match-on-what,
reach/join/leave/run, factor category) rather than by named product, which is what a 25-exam-item
domain can actually discriminate — and it is exactly the E02 `adjacent-control-swap` shape both
practice sources use as their second workhorse.

## Cross-domain placements

Where a concept's `domain` disagrees with the module its source rows sit under. The blueprint wins
placement; this table is what stops a later session "fixing" the disagreement.

| Concept | Source rows (objective) | Exam domain | Why |
|---|---|---|---|
| C-059 unusable-if-taken methods | b-3.3-6 (3.3) + b-1.4-8 (1.4) | **d3** | tokenization/masking/obfuscation/steganography appear in both objectives with four of five terms shared; one concept, seated where objective 3.3 teaches the discrimination. d1 keeps no duplicate — C-013/C-015 carry the crypto-mechanism side |
| C-118 attestation + audits | b-5.5-1/2/3 (5.5) + b-4.3-6 (4.3) | **d5** | a system/process audit is the same independence instrument objective 5.5 grades; keeping a d4 twin would ship a near-duplicate. d4's C-075 retains *audit* only as a verification step in the remediation loop — S4 must keep the two pitches distinct (proving the fix landed vs grading independence) |

Cross-objective (within d2), recorded for the same reason: C-024 consolidates b-2.2-7 + b-2.3-3 +
b-2.3-9 — supply chain as vector, malicious update, and compromised link are one judgment the
sources test as one (jealarue 2.18).

## The named-risk register → concept map

Artefact B's 14 named risks are the highest-value diagnostic seeds. Where each lands:

| Named risk | Concept |
|---|---|
| implicit trust zones | C-007 |
| fail-open / fail-closed | C-051 |
| inability to patch (ICS/RTOS/embedded) | C-049 |
| legacy applications / dependencies | C-011 |
| missing logs / out-of-cycle logging | C-037 |
| impossible travel / concurrent sessions | C-037 |
| resource reuse / VM escape | C-028 |
| alert tuning | C-077 |
| false negative | C-071 |
| exceptions and exemptions | C-075 (ops side), C-108 (governance side) |
| single point of failure (automation) | C-092 |
| shadow IT | C-018 |
| right to be forgotten / data sovereignty | C-117, C-058 |
| conflict of interest | C-111 |

The strongest seed remains *exceptions and exemptions*: S4 must pitch C-075 and C-108 differently
(a scan finding accepted with a compensating control, vs risk acceptance as a governance treatment)
— the shared vocabulary is the near-duplicate hazard the Jaccard check will police.

---

## What the blueprint holds that no accessible practice source tests

40 blueprint-only concepts (33%), concentrated exactly where Artefact B predicted. This is the
build's degradation note per `methodology/02-master-inventory.md#single-source`, scoped to a slice —
and, because the convergence signal rests almost entirely on one unlicensed community source, the
slice grows to the whole build if jealarue-exam90 fails Gate 1.

- **d1:** C-003 two-axis control classification, C-008 physical security, C-009 deception
  technology, C-011 change consequences, C-013 encryption choices
- **d2:** C-018 shadow IT, C-022 payload vectors, C-023 exposed-surface family, C-027 platform
  flaws, C-029 hygiene-class vulnerabilities, C-032 physical/proximity attacks, C-037 indicator
  families, C-042 lifecycle mitigations
- **d3:** C-045 code-shaped architecture, C-049 specialized systems + comparison axes, C-050
  placement + selection, C-051 fail-open/fail-closed, C-053 port security/802.1X, C-058 sovereignty,
  C-060 reach-blocking protections, C-062 continuity inputs, C-063 resilience testing methods
- **d4:** C-066 mobile/wireless estate, C-069 asset accountability, C-076 monitoring pipeline,
  C-077 alert tuning, C-083 email authentication, C-085 account lifecycle, C-086 password
  discipline, C-088 access control models, C-092 automation costs, C-094 IR rehearsal, C-098
  non-log sources
- **d5:** C-100 obligations by scope, C-101 governance structures, C-102 the four data roles,
  C-103 risk identification/cadence, C-114 compliance reporting/consequences, C-115 compliance
  monitoring, C-120 reconnaissance modes

**Consequences:** no convergence signal exists for these; S6 seating priority for them falls back to
blueprint weight and authoring judgment, and Gate 1 carries the lower-confidence flag for the slice.
They are also the concepts a candidate is least likely to have drilled — Artefact B's argument that
they are the highest-value items in the bank stands, and several are the named-risk seeds (alert
tuning, fail modes, indicators, automation SPOF).

**Exit recorded:** the two registered-not-distilled sources
([`sources.md`](sources.md) §registered-but-not-distilled) are the natural convergence top-up —
Professor Messer's pop-quiz archive (N interactions for N keys) and ExamCompass (~600 items behind
server-side scoring). Either would corroborate large parts of this list; both are mechanical-effort
decisions for Oliver, not legality questions. An SY0-801 blueprint (previewed for late 2026) resets
the question entirely.

## What practice sources test that the blueprint does not spell out — reconciliation

Carried in (mapped onto blueprint rows): the firewall-rule-direction construction and the
PBQ-as-single-choice precedent (practice-v7 4.1 → C-080), rules-of-engagement discriminated from
its co-occurring artefacts (practice-v7 5.1 → C-113), requirement-verb discrimination for recovery
(practice-v7 3.2 → C-064), emergency change as an expedited track (jealarue 1.18 → C-010),
shared-responsibility at two altitudes (jealarue 3.1/3.21 → C-043), container-vs-VM isolation
boundary and SDN plane split as attribute-inversion seats (jealarue 3.19/3.25 → C-048/C-047),
evidence-selection under a named symptom (jealarue 4.14/4.32 → C-097), quantitative risk arithmetic
with transformation distractors (jealarue 5.22 → C-105), and the "least likely" stem framing
(jealarue 5.21 → one or two bank items at most, recorded in the S4 emphases below).

**Rejected — off-blueprint.** The Artefact A filters were applied as a standing S3 rule: the
*concept* is carried where an objective row exists, the *term* is dropped. Every entry below was
re-checked against Artefact B's off-blueprint filter (§"Off-blueprint filter"):

| Candidate | From | Disposition |
|---|---|---|
| evil twin, ARP poisoning | jealarue 2.8, 2.13 | terms dropped; on-path/wireless concept carried in C-034 |
| DNSSEC, DoT/DoH | jealarue 2.21 | terms dropped; DNS-attack concept carried in C-033 |
| DEP/NX, stack canaries, heap-vs-stack, ASLR | jealarue 2.16, 2.25, 2.31 | rejected whole — below blueprint altitude ("mathematical analysis of models"-class exclusion: memory-mitigation internals are not in any objective); C-025 carries memory flaws at blueprint altitude |
| RAID levels | jealarue 3.7 | rejected — RAID is acronym-list-only; no objective names levels |
| differential/incremental backups, 3-2-1 rule | jealarue 3.13, 4.37 | rejected — objective 3.4 names snapshots/frequency/replication/journaling instead; C-064 carries the blueprint's own backup vocabulary |
| IaaS/PaaS/SaaS framing, cloud deployment models | jealarue 3.1, 3.16, 3.21 | concepts carried (C-043, C-044) framed by the *responsibility matrix* the blueprint names; service-model acronyms do not enter items |
| BYOK | jealarue 3.2 | term dropped; customer-controlled-key concept carried in C-059 |
| split tunnelling | jealarue 3.24 | term dropped; VPN concept carried in C-055 |
| CASB | jealarue 3.22 | rejected — acronym-list-only, no objective row |
| TACACS+ | jealarue 4.10 | term dropped; AAA-protocol-selection concept carried in C-067 |
| TOTP/HOTP | jealarue 4.19 | terms dropped; token-implementation concept carried in C-089 |
| order of volatility | jealarue 4.15 | term dropped; acquisition/preservation concept carried in C-096 |
| NTP | jealarue 4.32 | term dropped; log-correlation integrity carried in C-097's evidence judgment |
| HIPAA, GDPR, named statutes | jealarue 5.9, 5.10, 5.19 | names dropped; jurisdictional-scope concept carried in C-116 — the exam tests controller-vs-processor, not which statute covers health data |
| NIST SP 800-53, SOC 2, ISO 27001 | jealarue 5.17, 5.20 | names dropped; attestation-vs-certification concept carried in C-118; no framework is named by the objectives |
| NIST four-phase IR grouping | jealarue 4.3/4.5/4.24/4.39 | re-keyed: C-093 carries CompTIA's seven steps; a candidate keyed to NIST's grouping misplaces at least one boundary |
| pure acronym expansions (ZTNA, MFA, IOC, PII…) | jealarue ×24 items | contribute no concept; acronyms remain legitimate vocabulary in stems and rationales |

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   15/27/22/34/24.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered practice source has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with zero.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 122 = 1.36× the 90-item exam.** The size in the 1.3–1.4× band whose largest-remainder
  allocation is tie-free (L-0008): 122 → 15/27/22/34/24 with remainders .96/.84/.64 seating d3/d2/d1
  cleanly; 125 ties d2/d3 at the boundary. 122 also happens to be the figure Artefact B's own
  closing arithmetic named.
- **Format mix (exam form): 78 single_choice + 9 multiple_response + 3 scenario_matching.**
  The real exam is MC (incl. select-two/three) + PBQs with no published ratio. MR at 10%: the only
  sizeable source observes 2.8% and flags it as "almost certainly below the real paper"; 10% makes
  the format rehearsable without inventing a vendor ratio. `select_count: [2,3]` per the S1 format
  profile (CompTIA uses select-three stems; observed items are all select-two — widening is
  S1-grounded, exercising it is S4's choice). SM seated at the artefact-named PBQ-approximation
  seats: d2 (indicators→attack mapping, C-037's natural home), d4 (investigative questions→log
  sources, C-097), d5 (situations→agreement types, C-112). d1/d3 carry none — no mapping-shaped
  objective exists there; their PBQ approximation is the scenario-led single_choice route
  (fail-modes, firewall-rule reading).
- **Pass threshold 81%** — a documented linear proxy: CompTIA's scale runs 100–900 with a 750 pass
  mark and no public raw conversion; (750−100)/(900−100) = 81.25% → 81. The same logic aif-c01's
  ratified 70% used against AWS's 100–1,000/700 scale. Gate-1 ratification item; disclosed in
  `manifest.$comment` and `format_coverage`.
- **Time limit 90 minutes** — the vendor's number for the same nominal item count; no scaling
  question arises (unlike aif-c01). The real paper's PBQs consume more time per item, so this mock's
  pacing is slightly generous by construction; disclosed in `format_coverage`.
- **Pattern caps:** `E01: 0.35` (39–40% of wrong options in both sources — the cap forces scenario
  reasoning into the paper), plus registry-standard `D03/D04: 0.10`. Note L-0012: the
  one-pattern-per-item rule may bind before the E01 cap does — treat the cap as a guard.
  `near_duplicate_jaccard: 0.4` (ccar-p/aif-c01 precedent).
- **E04 `acronym-decoy-expansion` is banned structurally**: deliberately not declared in
  `authoring.json`, so any item tagging it fails the pattern-registry check. Evidence: 0/30 vendor
  wrong options vs 72/435 community; it tests the acronym table, not an objective. The E-numbering
  skips E04 to keep the artefacts' labels citable.
- **`layers.syllabus_rules: false`** — the objectives document *is* the syllabus and maps 1:1 onto
  the manifest domains (Artefact B); a rules layer would duplicate the concept inventory it was
  built from. Weak-concept reporting is the honest grain for this exam.

### S4 authoring emphases inherited from the artefacts (L-0014 sweep)

Every "authoring must/should/never" sentence in the three derivation docs, converted to a named
rule with an owner (exam-author at S4) so it survives the stage boundary; the validator-enforceable
ones are marked:

1. **Blueprint-term rule** — every distractor is a real term from the objectives body or acronym
   list (9/10 vendor items do this); invented options are a tell. *Review rule; spot-checked at S5.*
2. **Ban joke distractors** — every wrong option must be something a reasonable practitioner could
   propose (jealarue 5.28 is the counter-example). *Review rule.*
3. **One discriminating attribute per stem, stems short** — six of ten vendor items are one
   sentence; a second discriminating attribute makes an item easier, not harder. *Review rule.*
4. **Scenario surface points away from the principle** — a third of jealarue's scenario stems name
   the answer's own vocabulary; never inherit that. *Review rule (S5 dimension 6).*
5. **Raise E05 attribute-inversion** — the only construction vocabulary recognition cannot defeat
   (RTO/RPO swap, source/destination swap, kernel-sharing reversal); it is also the PBQ
   approximation device (practice-v7 4.1). *Mix target, visible in the pattern-frequency table.*
6. **Raise E03 lifecycle-stage-slip** across IR (C-093), change management (C-010) and
   vulnerability management (C-071/C-075). *Mix target.*
7. **Raise D07 detective-for-preventative** — objective 1.1 names both control functions; the
   community source used it twice in 435 slots. *Mix target.*
8. **Category items name exactly one artefact** — jealarue 1.4 bundles a policy and training and
   keys to Managerial; an item mixing two categories is unanswerable. *Review rule.*
9. **Re-key IR to CompTIA's seven steps** — never NIST's four-phase grouping. *Review rule; C-093
   vocabulary is the check.*
10. **Number-consistency and option-shape parallelism** — validator-enforced (`number-drift`,
    `answer-length-cue`); keep key lengths mid-band (L-0021).
11. **"Least likely" stem framing** — at most one or two items bank-wide (jealarue 5.21 precedent);
    negative stems are otherwise banned by the shared style rules.
12. **C-075 vs C-108 and C-118 vs C-075 pitch separation** (exceptions; audit) — the two
    shared-vocabulary pairs the Jaccard check will police; pitch decisions recorded above. *Review
    rule.*
