# Artefact C · Master concept inventory — Google Cloud Digital Leader

**What this is.** The union of [Artefact B](source-gcp-cdl-guide.md) — the exam-guide distillation
(69 "considerations include" bullets split into 94 concept rows plus the 11-entry named-risk
register) — and the two Artefact A practice distillations
([Google's official sample set](source-gcp-cdl-samples.md), 29 items;
[Whizlabs free set](source-whizlabs-cdl-free.md), 30 items). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only (clean-room: no source was opened).
It is the authoring contract: **every concept here is the primary concept of exactly one bank
item**, enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried in `concepts.json` itself: each concept's `sources[]` entry for `gcp-cdl-guide` lists the
`b-x.y-z` rows of Artefact B it absorbs.

---

## Result

**83 concepts** — one per bank item, 1.38× the 60-item exam. Per-domain counts are the blueprint
weights applied to the bank size (largest-remainder rounding), and the merge/split work was driven
to land on them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · Digital Transformation | ~18% | 15 | 10 | 5 |
| d2 · Data Transformation | ~18% | 15 | 11 | 5 |
| d3 · Innovating with AI | ~18% | 15 | 11 | 3 |
| d4 · Modernize Infrastructure and Applications | ~18% | 15 | 11 | 6 |
| d5 · Trust and Security | ~18% | 15 | 11 | 4 |
| d6 · Scaling with Operations | ~10% | 8 | 6 | 7 |
| **Total** | **100%** | **83** | **60** | **30** |

Candidate pool going in: 94 Artefact B concept rows + 11 named-risk-register entries (every one
maps onto an existing row — none added a concept) + **zero surviving practice-only candidates**
(all 43 on-blueprint practice items map onto guide rows; all 16 off-blueprint items were rejected)
≈ **94 candidates → 83 concepts**, via 14 documented merges, 3 documented splits, and 16
off-blueprint practice-item rejections (all below).

### Sizing decisions (L-0008 applied)

- **Bank 83 = 1.38×** the 60-item exam. Within the 1.3–1.4× band (78–84), the tie-free
  largest-remainder sizes are 78, 83 and 84; sizes 79–82 all strand seats in a multi-way tie among
  the five equally weighted domains (0.18N remainders are identical for d1–d5, so a tie occurs
  whenever 1–4 leftover seats must be split among them). **83 is the tie-free size nearest the
  methodology's ≈1.35 target**: quotas 14.94 ×5 + 8.30, floors 14×5+8=78, and the 5 leftover
  seats go exactly to the five domains tied at .94 — no arbitrary choice. Result: 15/15/15/15/15/8.
- **Exam 60 is NOT tie-free** — this is a structural consequence of Google's weights (five equal
  ~18% domains) and the S1–S2 upper-bound choice of 60: quotas 10.8 ×5 + 6.0, floors 56, and 4
  leftover seats must be split among five domains tied at .8. **Documented tiebreak:** the four
  extra seats go to the four tied domains with the most blueprint consideration-bullets
  (d5: 15, d2: 14, d3: 12, d4: 10 of the guide's 69); the short seat lands on d1 (8 bullets — the
  thinnest objective surface at equal weight). Result: 10/11/11/11/11/6. This is data-driven and
  reproducible, but it is still a tiebreak the vendor never made — **flagged to Gate 1** with the
  two alternatives that need none: exam=50 (lower bound; 9/9/9/9/9/5 exact, zero remainders) and
  exam=55 (10/10/10/10/10/5, tie-free).

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — blueprint + ≥1 practice source (`priority: high`, computed) | 30 | 36% |
| **Blueprint-only** (`priority: normal`) | 53 | 64% |
| — of which attested by all three sources | 7 | 8% |

Per-source attestation: `gcp-cdl-guide` 83/83 · `gcp-cdl-samples` 24/83 · `whizlabs-cdl-free` 13/83.

Three structural facts behind these numbers:

1. **Every concept traces to the blueprint.** The union was built blueprint-first: every
   on-blueprint practice item mapped onto a guide row, and every practice concept that failed the
   guide's verb test or product list was rejected (16 items). There are no practice-only concepts
   in this inventory — the same inversion as AIF-C01 (L-0009): with a blueprint-that-is-the-syllabus,
   convergence measures *corroboration of the blueprint*, not union breadth.
2. **Priority is computed, with zero divergences.** `priority: high` ⟺ `sources.length >= 2` for
   all 83 concepts. The validator's `concept-convergence` check should emit no warnings; any future
   warning on this package means someone hand-tuned a priority without documenting it here.
3. **Every practice attestation predates the 2026-08-12 blueprint.** Even the 36% convergent share
   is corroboration by *older* readings of this exam. Three concepts (C-041, C-043, C-056) are
   attested through items keyed to product names the current guide has retired (Natural Language
   AI, Vertex AI, Cloud Functions) — per Artefact B's rule, **the concept is carried, the retired
   product name is not**: their `vocabulary[]` comes from the guide alone.

**And 64% is uncorroborated** — the worst composition of any Mockka build to date, concentrated
exactly where the artefacts predicted: the whole of d3's 2026 surface and nearly all of objective
5.2. See the degradation note below. Convergence is also **inversely correlated with weight**: d6,
the 10% domain, is the best-corroborated (7/8) because both practice sources over-served it
(~26% and ~44% of their on-blueprint items); d3, an 18% domain, has 3/15 — a shared bias, not a
signal, per both Artefact A documents ("two sources agreeing on a distortion is not convergence").
S6 seating must lean on blueprint weight, not on `priority`, wherever the two disagree.

---

## Merge decisions

One row per consolidation that materially changed the count. "From" cites Artefact B rows
(`b-x.y-z`) and, where a practice source drove the merge, its items.

| Merged into | From | Rationale |
|---|---|---|
| **C-015** service models via responsibility | b-1.2-5 + b-1.2-6 | classifying a service model and weighing its control-vs-burden trade-off are one judgment — the responsibility boundary ("who patches") is simultaneously the classifier and the trade-off; whizlabs 1.2/1.3 attest both halves through one skill |
| **C-017** storage archetypes by data shape | b-2.1-2 + b-2.1-4 | the archetypes are *defined* by the shape of data they accept — samples 2.2 tests both rows in a single item, which is the natural item here too |
| **C-061** threat naming incl. self-inflicted | b-5.1-1 + b-5.1-2 | one classification judgment: name the threat from its behaviour, including recognising when no attacker exists; the risk register's "nobody attacked anything" seed lives inside it |
| **C-062** LLM attacks + AI-stack layers | b-5.1-3 + b-5.2-1 | the risk register itself joins them: "untrusted input reaches a model; which layer of the AI stack is the one to defend" — the threat and the layered defence are question and answer |
| **C-066** posture + security operations | b-5.1-7 + b-5.1-12 | b-5.1-12's vocabulary repeats *security posture*; posture-as-state and the operations cycle that maintains it are one discipline, not two items |
| **C-067** baseline mechanisms + inherited defaults | b-5.1-8 + b-5.2-6 | samples 5.4 tests them as one idea — data is protected because encryption is the *default state*, inherited from secure-by-design infrastructure, not switched on by a tool |
| **C-069** three A's + identity controls | b-5.1-10 + b-5.1-11 | MFA/2SV/IAM are how authentication and authorization are *implemented* — definition and mechanism of one access judgment; samples 5.3/5.5 + whizlabs 5.1 attest across both halves |
| **C-070** threat intelligence + its three sources | b-5.2-2 + b-5.2-3 | what the offering is for and why its sources differ in kind are one "proactive vs reactive" discrimination — splitting them would ship a flashcard pair |
| **C-071** SCC vs Google Security Operations | b-5.2-4 + b-5.2-5 | the two products are each other's natural distractors (posture findings vs unified telemetry); one selection item exercises the discrimination both rows teach |
| **C-076** CapEx→OpEx + TCO completeness | b-6.1-1 (3 samples items) | the expenditure shift and the complete-cost-picture judgment are the two halves of one economics concept; samples over-drills it with three items — exactly one bank item owns it |
| **C-077** spend accountability + people/process/technology | b-6.1-2 + b-6.1-3 | samples 6.5 cites both rows in one item: the centre-of-excellence and ownership-with-accountability answers are the *people and process* halves of financial governance |
| **C-078** resource hierarchy + what it buys | b-6.1-4 + b-6.1-5 | the tree and its inheritance/propagation payoff are inseparable — whizlabs tests them jointly three times (6.2, 6.5, 6.6) |
| **C-079** consumption caps + flexible-consumption levers | b-6.1-6 + b-6.1-8 | both are "controls that act on cost before or as it is incurred" — cap it (quotas, budget thresholds) or buy it cheaper (Dynamic Workload Scheduler, Spot VMs); one control-selection judgment |
| **C-082** reliability vocabulary + resilience design | b-6.2-2 + b-6.2-3 | the design moves (redundancy, replication, backups) and the promises they deliver (reliability, high availability) are mechanism and outcome of one judgment; whizlabs 6.1/6.4 attest the design half |

Domain 5 absorbed the heaviest consolidation (22 rows → 15 concepts) because TS 5.1/5.2 enumerate
vocabulary and products at fine grain; the merges group them by *judgment* (threat naming, access,
inherited protection, operations) rather than by named term — which is what an 11-exam-item domain
can actually discriminate. Domain 6 went 13 → 8 the same way.

## Split decisions

The inverse pressure (`02-master-inventory.md#contract`: too few concepts → split multi-idea
rows, never pad). Three guide rows each carry two separately testable ideas:

| Split into | From | Rationale |
|---|---|---|
| **C-037** explainability as deployment blocker · **C-038** responsible-use legitimacy | b-3.1-7 | the bullet packs two judgments: *can we defend how it decides* (explainability, blocks deployment) and *should this use exist at all* (legitimacy); samples 3.2 attests only the second — the split keeps the corroborated half honest |
| **C-041** task-specific perception APIs · **C-042** Gemini + Agent Platform API | b-3.2-3 | the bullet packs five products spanning two selection decisions: match a modality to a solved-task API vs choose the general-purpose model route; whizlabs 3.1 attests only the first |
| **C-055** Cloud Run · **C-056** Cloud Run functions | b-4.2-4 | two products, two workload shapes (own-tools containers vs small event-triggered code) — the official set itself writes them as two separate items (4.2, 4.4) |

## Cross-domain and dual-pitch placements

No concept's `domain` disagrees with its guide section — the guide is the blueprint, so placement
is 1:1 and the cross-domain table is empty. What needs recording instead is one **deliberate
dual-vocabulary placement** (the spot-VMs case Artefact B flagged for S3):

| Vocabulary | Concepts | Ruling |
|---|---|---|
| *spot VMs* (named in objectives 4.1 AND 6.1) | C-051 (d4) + C-079 (d6) | both concepts keep the term because the guide teaches it twice with different judgments: C-051 is a **workload-fit** call (can this work tolerate preemption), C-079 is a **cost-control selection** call (which mechanism reduces spend). S4 must keep the two pitches distinct — neither item may be answerable by the other's reasoning. Same pattern as AIF-C01's guardrails ruling (C-051/C-063 there) |

Adjacent near-duplicate watch for S4 (same mechanism, lower stakes): C-044 (AI Hypercomputer's
*flexible consumption models*) vs C-079 (Dynamic Workload Scheduler) — the d3 item pitches the
infrastructure layer's business case, the d6 item pitches control selection; and C-023
(data-model vocabulary) vs C-022 (product selection) — classification vs product pick, attested
jointly by the same practice items but exercised as different judgments.

## The named-risk register → concept map

Artefact B's 11 named risks are the highest-value diagnostic seeds. Where each lands:

| Named risk | Concept |
|---|---|
| implications and risks of not adopting cloud | C-009 |
| common hurdles that can affect transformation | C-008 |
| vendor lock-in, data silos | C-021 |
| poor data quality (six dimensions) | C-036 |
| absence of explainable and responsible AI | C-037, C-038 |
| misconfiguration, unsecured third-party systems | C-061 |
| LLM attacks | C-062 |
| ransomware vs malware vs cryptomining | C-061 |
| loss of digital sovereignty / data residency | C-075 |
| unmanaged consumption | C-079 (with C-077, C-080 as the see-vs-cap discrimination) |
| zonal-only design | C-082 |

The strongest seed — the **do-nothing risk** (C-009, paired with C-076's economics) — is a
judgment item with no product in it at all, which no accessible practice source writes.

---

## What the blueprint holds that no accessible practice source tests

53 blueprint-only concepts (64%). This is the build's **single-source degradation note** per
`methodology/02-master-inventory.md#single-source` — scoped, as the artefacts predicted, to the
2026 surface plus the business-value spine:

- **The whole of d3's 2026 surface except three transferred concepts:** C-031–C-037, C-039, C-040,
  C-042, C-044, C-045 — agentic AI (C-033), Google's AI advantage claims (C-034), the six
  data-quality dimensions (C-036), approach-by-constraint (C-039), Gemini Enterprise Agent
  Platform (C-040), AI Hypercomputer (C-044), BigQuery ML (C-045). 12 of d3's 15 concepts.
- **Nearly all of objective 5.2:** C-062, C-070–C-075 — the AI-stack layers and LLM attacks,
  Google Threat Intelligence with Mandiant/VirusTotal, SCC vs Google Security Operations, Model
  Armor and AI Protection, trust evidence, digital sovereignty. Plus the 5.1 gaps C-063, C-065,
  C-066, C-068.
- **The data-lifecycle and governance block:** C-016, C-018–C-021 (data supply chain, governance,
  provenance classes, silos/lock-in) and storage-class economics C-024/C-025 (Autoclass), C-026,
  C-028, C-029.
- **The business-value spine of d1/d4:** C-001–C-003, C-005, C-007–C-010, C-012, C-013 (drivers,
  hurdles, do-nothing risk, Google differentiators, open source vs open standard, latency vs
  bandwidth) · C-046, C-049–C-051, C-053, C-054, C-057, C-059, C-060 (discovery/assessment,
  microservices, spot VMs, modern-app outcomes, GKE, Omni reach, API monetisation, Apigee).
- **Consequences:** no convergence signal exists for any of these; S6 seating priority falls back
  to blueprint weight and authoring judgment, and Gate 1 carries the **lower-confidence flag for
  the heaviest-weighted content of the exam** — d3 and objective 5.2 sit in ~18% sections. These
  are also the concepts a candidate is least likely to have drilled: the artefacts' argument that
  they are the highest-value items in the bank stands.
- **Exit recorded:** the vendor's own Google Skills CDL learning path (registered as
  `google-skills-cdl-path`, account-walled, deliberately not accessed) is the only known source
  that post-dates the 2026-08-12 blueprint. If Oliver authorizes the sign-in (Gate 1 decision 1),
  a later S2 top-up distils its graded module assessments and an S3 delta pass recomputes
  convergence for exactly this block.

## What practice sources test that the blueprint does not spell out — reconciliation

Carried in (mapped onto blueprint rows, informing the pitch of the host concept): the
responsibility-boundary reading of service models (whizlabs 1.3 → C-015), the pipeline-stage
neighbour as the sharpest distractor form (samples 2.1 → C-030), the compute-abstraction ladder
tested as a *set* (samples 4.2/4.4/4.5 → C-048), TCO as complete-picture-vs-half-measure (samples
6.3 → C-076, the E07 exemplar), ownership-paired-with-accountability (samples 6.6 → C-077),
resource scope deciding survivability (whizlabs 6.4/6.5 → C-082, the good negative-stem form),
encryption-by-default as inherited (samples 5.4 → C-067).

**Rejected — off-blueprint.** Recorded so the reconciliation shows the decision was made, not
missed. Standing S3 rule applied: the guide's **verb test** (objective verbs stop at
*describe/identify/differentiate* — any concept whose natural item requires an operational action
is out) and the guide's **named product list** (≈60 products; anything absent is off-blueprint).

| Candidate | From | Why rejected |
|---|---|---|
| Google Cloud support plans, case status strings, problem-type taxonomy, support-tier costs | whizlabs (4 items) | Customer Care appears nowhere in the 2026-08-12 guide |
| persistent-disk types, Local SSD, snapshot use cases | whizlabs (3 items) | storage-device selection is an operator task; products not named in the guide |
| VM delete protection; enumeration of connect methods | whizlabs (2 items) | configuration mechanics below the guide's verb altitude |
| Cloud Asset Inventory; Secret Manager | whizlabs (2 items) | neither product is on the guide's list; secrets route through Sensitive Data Protection + IAM |
| Cloud Debugger | whizlabs (1 item) | retired product; the guide's observability list names Cloud Profiler and Error Reporting instead |
| Pub/Sub dead-letter topics | whizlabs (1 item) | feature-level mechanics; the guide names Pub/Sub only as a pipeline product |
| IoT product category | whizlabs (1 item) | category absent from the 2026 guide |
| data-centre sustainability credentials | samples X.1 | sustainability appears nowhere in the 2026-08-12 guide — earlier-outline objective |
| Customer Care case escalation | samples X.2 | same verdict; also `[UNVERIFIED]` key in the artefact |
| retired product names as keys: Vertex AI, Cloud Functions, Natural Language AI, Recommendations AI, Cloud DLP | both sources' habit | the *concepts* transfer (C-043, C-056, C-041, and DLP → Sensitive Data Protection inside C-073's family); the superseded names are not carried into any `vocabulary[]` and must not appear as keys — they may appear as distractors only if S4 treats "product that no longer exists under that name" as an E08-adjacent trap, which the authoring guide does NOT currently sanction: default is do not use them at all |

---

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   15/15/15/15/15/8.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered practice source has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with zero.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 83 = 1.38× the 60-item exam** — the tie-free largest-remainder size nearest 1.35
  (L-0008; full reasoning in the sizing section above). Per-domain 15/15/15/15/15/8.
- **Exam form 60 = 10/11/11/11/11/6** with the documented bullet-count tiebreak (above) —
  Gate 1 carries the confirm-or-switch decision (50 exact / 55 tie-free alternatives).
- **Format mix (exam form): 54 single_choice + 6 multiple_response + 0 scenario_matching.**
  The real exam names exactly two formats — multiple choice and multiple select — so
  `scenario_matching` is **zero throughout**: the one Mockka format with no real-exam counterpart
  is excluded rather than approximated (the inverse of the usual `format_coverage` disclosure,
  which the manifest carries). The multiple-select share is **unpublished and unobserved** — the
  official sample set is 29/29 single choice; the only datapoint is whizlabs' ~7%, from a stale
  source, both items choose-2-of-5 `[UNVERIFIED]`. S3 sets **10% (6 items, one per domain)** by
  judgment: enough that the mechanic is rehearsed in every domain, low enough that an unpublished
  share is not over-committed. `multiple_response: {options: 5, select_count: [2]}` follows the
  only observed shape. Single choice is 4 options — the vendor's own calibration (29/29).
- **Pass threshold 70% — a Mockka standard, not a proxy for a vendor figure.** Google publishes
  *no* passing score for any Google Cloud certification (pass/fail only, per the Certification
  FAQ, checked 2026-08-16 at S1). 70% is the platform's standard study-aid bar (aif-c01
  precedent), disclosed in `format_coverage` and the manifest `$comment`; Gate-1 ratification.
- **Time limit 90 minutes** — the vendor's published number against the published upper-bound
  item count; no scaling question arises (unlike aif-c01) because 60 items is a real sitting size.
- **Pattern caps:** `E01: 0.30` (product-role-swap — observed at 34%/28% of wrong options across
  the two practice sources; the cap forces business scenarios back over product trivia),
  `E08: 0.10` (invented-name — whizlabs' padding habit, cheapest to write and to eliminate; also
  never more than one per item), plus registry-standard `D03/D04: 0.10`. Near-duplicate threshold
  `0.4` (ccar-p/aif-c01 precedent).
- **Authoring emphases inherited from the artefacts** (S4 must apply): **E06 benefit-mismatch is
  the primary wrong-option family** (~17% in both sources independently — the exam's signature:
  a true statement answering a different question); **raise E07 incomplete-answer sharply**
  (the most diagnostic observed mechanism, 6% and absent respectively); **use E03
  hierarchy-scope-slip deliberately** on the two ordered hierarchies the guide hands over
  (geography C-014, resources C-078); keep E05 for genuinely definitional items only; ban
  quantified absolutes ("always", "100%") in wrong options; ban "any of the above"/"depends"
  options; negative stems capped at one per domain, good form only (all non-keys are correct
  designs); copy the vendor's stem grammar — organisation → business situation → one operative
  constraint → "which product/model/approach"; every keyed product must be on the guide's named
  product list, and the candidate articulates, never configures.
- **`layers.syllabus_rules: false`** — the guide *is* the syllabus and maps 1:1 onto the manifest
  domains (Artefact B); a rules layer would duplicate this inventory. The registered
  vendor learning path might later justify the layer, but it is unread (account wall) — the layer
  stays off per the degradation path, and weak-concept reporting is the honest grain.
