# Artefact C · Master concept inventory — AIF-C01

**What this is.** The union of [Artefact B](source-aif-blueprint.md) — the exam-guide distillation
(69 objectives split into 103 concept rows plus the 12-entry named-risk register) — and the two
Artefact A practice distillations ([DeClute/TheServerSide](source-declute-serverside.md), 35 items;
[jwalsh/aif-c01](source-jwalsh-aif.md), 40 items). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only (clean-room: no source was opened).
It is the authoring contract: **every concept here is the primary concept of exactly one bank
item**, enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried in `concepts.json` itself: each concept's `sources[]` entry for `aif-blueprint` lists the
`b-x.y-z` rows of Artefact B it absorbs.

---

## Result

**67 concepts** — one per bank item, 1.34× the 50-item exam. Per-domain counts are the blueprint
weights applied to the bank size (largest-remainder rounding), and the merge was driven to land on
them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · Fundamentals of AI and ML | 20% | 14 | 10 | 11 |
| d2 · Fundamentals of GenAI | 24% | 16 | 12 | 8 |
| d3 · Applications of Foundation Models | 28% | 19 | 14 | 12 |
| d4 · Guidelines for Responsible AI | 14% | 9 | 7 | 7 |
| d5 · Security, Compliance, and Governance | 14% | 9 | 7 | 6 |
| **Total** | **100%** | **67** | **50** | **44** |

Candidate pool going in: 103 Artefact B concept rows + 12 named-risk-register entries + ~8
practice-only candidates ≈ **123 candidates → 67 concepts**, via 32 documented merges, 5
cross-domain placements, and 7 off-blueprint rejections (all below).

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — blueprint + ≥1 practice source (`priority: high`, computed) | 44 | 66% |
| **Blueprint-only** (`priority: normal`) | 23 | 34% |
| — of which attested by all three sources | 23 | 34% |

Per-source attestation: `aif-blueprint` 67/67 · `declute-serverside` 38/67 · `jwalsh-aif` 29/67.

Two structural facts behind these numbers:

1. **Every concept traces to the blueprint.** The union was built blueprint-first: every
   practice-only candidate either mapped onto a guide objective (and merged into it) or failed the
   in-scope check and was rejected. There are no practice-only concepts in this inventory — the
   inverse of CCAR-P, where 30% of the inventory came from the practice set alone. That is what a
   blueprint-that-is-the-syllabus produces.
2. **Priority is computed, with zero divergences.** `priority: high` ⟺ `sources.length >= 2` for
   all 67 concepts. The validator's `concept-convergence` check should emit no warnings; any future
   warning on this package means someone hand-tuned a priority without documenting it here.

**And 34% is uncorroborated**, concentrated exactly where Artefact B predicted: the v1.1 additions.
See the degradation note below — it is the argument for the pending Tier-1 source, not a reason to
delay the build.

---

## Merge decisions

One row per consolidation that materially changed the count. "From" cites Artefact B rows
(`b-x.y-z`) and, where a practice source drove the merge, its items.

| Merged into | From | Rationale |
|---|---|---|
| **C-001** field hierarchy | b-1.1-1 + b-1.1-6 | "what makes an LLM large" is a position in the same containment hierarchy, not a second idea |
| **C-002** artifact vs procedure vs phase | b-1.1-3 + b-1.1-4 | model/algorithm and training/inferencing are the same discrimination exercised on two term pairs; one item tests both |
| **C-003** learning-approach matching | b-1.1-9 + b-1.1-12 + b-1.2-3 | label signal and output shape are the two inputs to one decision; every practice item that tests one uses the other as distractor space (declute 1.1/1.10/1.11, jwalsh 1.02) |
| **C-004** serving choices | b-1.1-8 + b-1.3-3 | inference mode and managed-vs-self-hosted are both "how is the model served, who carries what" — one deployment judgment |
| **C-005** data shape and structure | b-1.1-10 + b-1.1-11 | modality and structure are two properties read off the same dataset description |
| **C-006** is AI the right tool | b-1.2-1 + b-1.2-2 | value drivers and disqualifiers are the two sides of one appropriateness judgment; the blueprint's own framing is cost-benefit |
| **C-007** application category | b-1.2-4 + b-1.1-2 | naming the discipline (CV/NLP) is a special case of naming the application category |
| **C-008** AWS AI service selection | b-1.2-5 + b-1.3-4 | task-level and pipeline-stage service identification are one E01-discrimination skill; both practice sources over-drill it (11 items between them) — exactly one bank item owns it, pitched as the d1 scenario-matching item |
| **C-014** metric selection, both halves | b-1.3-7 + b-1.3-8 | the guide pairs model metrics with business metrics as the two halves of evaluation; splitting them re-creates the flashcard version |
| **C-016** retrieval foundations | b-2.1-2 + b-2.1-3 | chunking and embeddings only matter together — what gets embedded is the chunk |
| **C-018** model families | b-2.1-5 + b-2.1-6 + b-2.1-7 | FM-ness, the transformer family, and modality-based family choice are one "what kind of model is this" discrimination (declute 2.4, jwalsh 2.01) |
| **C-019** GenAI use cases + capabilities | b-2.1-8 + b-2.2-1 | recognizing the use case and naming the capability that makes it work are the same recognition exercised forward and backward |
| **C-021** GenAI economics | b-2.1-10 + b-2.3-4 | token-based pricing and provisioned throughput are the two cost levers of one economics judgment (declute 2.3 supplies the observed half) |
| **C-030** managed-platform value | b-2.3-2 + b-2.3-3 | lower barrier/speed and inherited security/compliance are the same "why managed" argument, stated commercially and technically |
| **C-038** prompt anatomy + craft | b-3.2-1 + b-3.2-3 | the parts of a prompt and what good prompting buys are definition and payoff of the same skill |
| **C-046** evaluation-approach choice | b-3.4-1 + b-3.4-3 | LLM-as-a-judge is one of the evaluation approaches being chosen among — not a separate decision |
| **C-049** business-alignment metrics | b-3.4-4 + b-3.4-6 (+ b-2.2-6, cross-domain) | "does the model serve the business" and the named alignment metrics are one measurement judgment; keeping three business-metric concepts across d1/d2/d3 would ship near-duplicates |
| **C-050** responsible dimensions + data | b-4.1-1 + b-4.1-5 | the dataset characteristics (diverse, curated, balanced) are how the named dimensions are delivered; the vocabulary overlaps (inclusivity) |
| **C-057** explainability carriers | b-4.2-2 + b-4.2-4 | tools (Model Cards, Clarify) and human-centered mechanisms are both "how explainability reaches people" |
| **C-059** access control incl. agents | b-5.1-1 + b-5.1-6 | AgentCore Identity/Policy is IAM's judgment extended to agent principals — same control family, v1.1 half documented below |
| **C-060** encryption + private paths | b-5.1-2 + b-5.1-4 | encryption and PrivateLink are the two halves of protecting data in place and in motion |
| **C-061** secure data engineering | b-5.1-3 + b-5.1-9 | Macie is the discovery step of the secure-data-engineering practice the guide describes |
| **C-062** responsibility scoping | b-5.1-5 + b-5.2-3 | the Scoping Matrix is the GenAI-specific instrument of the shared responsibility model |
| **C-063** output-side enforcement | b-5.1-7 + b-5.1-12 + b-5.1-14 | guardrails-as-output-control, leakage/filtering/toxicity, and hallucination catching share the vocabulary (*output filtering and validation*) and the layer — one control-placement judgment |
| **C-065** provenance + audit trail | b-5.1-8 + b-5.1-13 | source citation/lineage and AI-interaction logging are traceability inbound and outbound |
| **C-066** governance service selection | b-5.2-1 + b-5.1-10 | app/infra security posture (threat detection, vulnerability management) resolves to the same service-selection question (Inspector et al.) |
| **C-067** governance lifecycle + ops | b-5.2-2 + b-5.2-4 | lifecycle obligations and the operating practices that keep them met are one discipline (jwalsh 5.02 + declute 5.4 each attest half) |

Domain 5 absorbed the heaviest consolidation (18 rows → 9 concepts) because the guide's TS 5.1
enumerates controls at fine grain; the merges group them by *judgment* (access, data protection,
output enforcement, traceability) rather than by named feature, which is what a
7-exam-item domain can actually discriminate.

## Cross-domain placements

Where a concept's `domain` disagrees with the module its source rows sit under. The blueprint wins
placement; this table is what stops a later session "fixing" the disagreement.

| Concept | Source rows (guide module) | Exam domain | Why |
|---|---|---|---|
| C-054 fit / over- vs underfitting | b-1.3-9, b-1.1-5 (Domain 1) + b-4.1-6 | **d4** | the guide states fit three times; 4.1.6 is the richest home (mechanism + demographic effects). Both practice sources test it once each (declute 1.4, jwalsh 4.05) — one concept, one item, seated in d4 |
| C-037 agents in business terms | b-1.1-7 (Domain 1) + b-3.1-7 | **d3** | the d1 row is the category label, the d3 row is the judgment; the d1 hierarchy concept (C-001) retains *agentic AI* as vocabulary |
| C-058 interpretability trade-off | b-2.2-4 (Domain 2) + b-4.2-3 | **d4** | interpretability-as-limitation and interpretability-vs-performance are one trade-off; 4.2.3 names it |
| C-049 business-alignment metrics | b-2.2-6 (Domain 2) + b-3.4-4/6 | **d3** | one measurement concept instead of three near-duplicates across d1/d2/d3; the d1 half lives in C-014 as the business half of model evaluation |
| C-051 guardrails | b-3.2-4 (Domain 3) + b-4.1-2 | **d4** | one Guardrails concept; d5's C-063 covers output-side *enforcement* without naming the same control as its primary — S4 must keep the two pitches distinct (policy control vs security layer) |

## The named-risk register → concept map

Artefact B's 12 named risks are the highest-value diagnostic seeds. Where each lands:

| Named risk | Concept |
|---|---|
| hallucinations (limitation) / hallucination catching | C-026 (d2) / C-063 (d5) |
| nondeterminism | C-027 |
| interpretability / opacity | C-058 |
| overfitting / underfitting | C-054 |
| bias effects on demographic groups | C-054, C-055 |
| IP infringement claims | C-053 |
| prompt injection | C-064 |
| poisoning / hijacking / jailbreaking / exposure | C-040 |
| data leakage (incl. the "remove and retrain" seed with b-3.3-3) | C-063 (with C-044) |
| toxicity | C-063 |
| veracity / grounding failure | C-063, C-050 |
| end user risk, loss of customer trust | C-053 |

---

## What the blueprint holds that no accessible practice source tests

23 blueprint-only concepts (34%). The core is the **v1.1 block** — and this is the build's
single-source degradation note per `methodology/02-master-inventory.md#single-source`, scoped to a
slice rather than the whole build:

- **Whole concepts with no practice corroboration:** C-022 context engineering, C-023 agentic
  building blocks, C-024 multi-agent patterns, C-025 MCP, C-032 prompt caching, C-041 prompt
  versioning, C-048 application-level evaluation, C-063 output-side enforcement + hallucination
  detection — plus the non-v1.1 judgment gaps C-004 (serving), C-005, C-006 (when AI is wrong),
  C-016, C-020, C-027 (nondeterminism), C-028, C-031, C-038, C-040, C-045, C-052 (sustainability),
  C-058 (safety/transparency), C-062 (Scoping Matrix), C-065.
- **v1.1 halves folded into converged concepts** (auditable here because the host concept's
  `priority: high` comes from its *other* half): token-based pricing inside C-021, LLM-as-a-judge
  inside C-046, AgentCore Identity/Policy inside C-059.
- **Consequences:** no convergence signal exists for these; S6 seating priority for them falls back
  to blueprint weight and authoring judgment, and Gate 1 carries the lower-confidence flag for this
  slice. They are also the concepts a candidate is least likely to have drilled — the artefacts'
  argument that they are the highest-value items in the bank stands.
- **Exit recorded:** the Tier-1 `aws-official-question-set` (free, 20 items, Skill Builder
  account-walled — registered, not accessed) is the one source that would corroborate this block.
  Gate 1 decision for Oliver; if authorized, a later S2 top-up + S3 delta pass recomputes
  convergence.

## What practice sources test that the blueprint does not spell out — reconciliation

Carried in (mapped onto blueprint objectives): threshold-independent vs single-operating-point
metric comparison (informs C-014's pitch — the AUC name itself is dated, see below), provisioned
throughput as the load-driven lever (C-021), the ordering-as-single-choice delivery of the
customization ladder (C-036 — the `format_coverage` precedent), subgroup analysis as the fairness
discovery mechanism (C-055), domain-adaptation vs continued pre-training (C-042/C-043), edge and
offline constraints favoring small models (C-009), MLOps as discipline-not-toolchain (C-012),
model cards as documentation of limitations (C-057).

**Rejected — off-blueprint.** Recorded so the reconciliation shows the decision was made, not
missed. The jwalsh artefact measured a 5% off-blueprint-key rate (2/40), so *every* lifted concept
was re-checked against the guide's in-scope service list and out-of-scope job-task list as a
standing S3 rule:

| Candidate | From | Why rejected |
|---|---|---|
| SageMaker Feature Store as a tested concept | declute 1.9 | not on the in-scope service list; feature engineering is a declared out-of-scope job task |
| backpropagation mechanics | declute 1.7 | inside the excluded "mathematical analysis of models" altitude |
| Amazon Kinesis Data Streams as an item key | declute 3.1 | service not in scope — the *concept* (freshness needs retrieval at inference, not retraining) is carried in C-034; the service is not |
| one-hot encoding, standardisation, p95-latency engineering | declute (various) | below blueprint altitude — data/feature engineering and pipeline construction are out-of-scope job tasks |
| AWS Audit Manager as an item key | jwalsh 5.01 | not on the in-scope service list — the concept (continuous compliance evidence) is carried in C-066 against in-scope services |
| SageMaker Clarify as *the* bias-detection answer under 4.1.7 | jwalsh 4.02 (both sources' habit) | the guide names Amazon A2I at 4.1.7 and Clarify at 4.2.2 — C-055 carries A2I, C-057 carries Clarify; items must not cross them |
| AUC-ROC as a named metric | declute 1.2 | guide v1.1 objective 1.3.6 dropped AUC for precision/recall — the threshold-independence *idea* informs C-014, the metric name is not carried |

---

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   14/16/19/9/9.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered practice source has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with zero.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 67 = 1.34× the 50-item exam** (methodology target ≈1.35; 67 is the size whose
  largest-remainder rounding lands per-domain counts cleanly: 14/16/19/9/9).
- **Format mix (exam form):** 40 single_choice + 7 multiple_response + 3 scenario_matching.
  The real exam commits to four item types without per-type counts; accessible calibration
  (declute) shows MC-dominant with ~11% multiple response, all choose-2-of-5 — hence
  `multiple_response: {options: 5, select_count: [2]}` and a 14% MR share. Matching is
  approximated by one scenario_matching item in each of the three largest domains (d1: service
  selection C-008 is the natural seat; d2/d3 at S4's choice). Ordering concepts (C-010, C-020,
  C-036) are authored as single_choice over candidate sequences — both the approximation and its
  limits are disclosed in `manifest.format_coverage`, with declute 3.6 as independent precedent.
- **Pass threshold 70%** — a raw-score proxy for AWS's scaled 700/1000 compensatory model; the
  scale is not publicly convertible to a raw percentage, so this is a Gate-1 ratification item,
  disclosed in the manifest `$comment`.
- **Time limit 90 minutes** — the vendor number for the 65-question sitting, kept as-is for the
  50-item mock (generous by ≈28%); the disclose-vs-scale question is flagged to Gate 1.
- **Pattern caps:** `E01: 0.30` (observed 21–33% of wrong options across the two practice sources —
  the cap forces scenario reasoning back into the paper), plus the registry-standard
  `D03/D04: 0.10`. Near-duplicate threshold `0.4` (ccar-p precedent).
- **Authoring emphases inherited from the artefacts** (S4 must apply): over-provision E02
  (metric-task-mismatch — a genuine hole in both sources) in d1/d3 and E04 (customization-swap —
  the highest-signal pattern) across d3; keep E05 sparse outside definitional items; no bare-label
  options (option shapes stay parallel); no unqualified absolutes in wrong options; no negative
  stems; equalize option lengths.
- **`layers.syllabus_rules: false`** — the blueprint *is* the syllabus here and maps 1:1 onto the
  manifest domains (Artefact B); a rules layer would duplicate the concept inventory it was built
  from. Weak-concept reporting is the honest grain for this exam.
