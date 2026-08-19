# Artefact C · Master concept inventory — AI-900

**What this is.** The union of [Artefact B](source-ms-ai900-blueprint.md) — the study-guide
distillation (40 objective bullets split into 57 concept rows across 11 functional groups) — and
the two Artefact A practice distillations ([warner-ai900](source-warner-ai900.md), 25 items;
[wrieden-ai900](source-wrieden-ai900.md), 29 items). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only (clean-room: no source was opened).
It is the authoring contract: **every concept here is the primary concept of exactly one bank
item**, enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried in `concepts.json` itself: each concept's `sources[]` entry for `ms-ai900-blueprint` lists
the `b-x.y-z` rows of Artefact B it absorbs.

> **Standing caveat.** AI-900 was retired 2026-06-30 and replaced by AI-901
> ([sources.md §Retirement](sources.md#retirement)). This inventory is faithful to the final
> AI-900 blueprint (skills measured as of 2025-05-02); whether the package proceeds at all is
> Gate-1 decision D0, ahead of everything below.

---

## Result

**57 concepts** — one per bank item, 1.357× the 42-item exam form. Per-domain counts are the
derived blueprint weights applied to the bank size (largest-remainder rounding, tie-free), and the
merge was driven to land on them exactly:

| Domain | Weight (derived) | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · AI workloads and considerations | 19% | 11 | 8 | 8 |
| d2 · Fundamental principles of ML on Azure | 19% | 11 | 8 | 6 |
| d3 · Computer vision workloads | 19% | 11 | 8 | 8 |
| d4 · NLP workloads | 19% | 11 | 8 | 9 |
| d5 · Generative AI workloads | 24% | 13 | 10 | 8 |
| **Total** | **100%** | **57** | **42** | **39** |

Candidate pool going in: **57 Artefact B concept rows** (including the two rows Artefact B marks
as inferred, b-5.2-5/b-5.2-6) + 6 named-risk seeds (all of which map onto existing rows) + practice
candidates, of which exactly **one** survived as a new concept (warner 3.3's boundary judgment —
C-033) and the rest either confirmed existing rows or fell to the off-blueprint register. Net:
57 rows − 5 documented merges + 4 documented splits + 1 practice-driven addition = **57 concepts**.

### Why the contract is 42/57 — the sizing derivation

Three constraints interact, and only one pair of numbers satisfies all of them:

1. **The exam size is a documented choice, not a vendor fact.** Microsoft publishes no per-exam
   count — only the vendor-wide "most exams typically contain between 40-60 questions" band
   ([sources.md](sources.md)). S1 recommended the band midpoint 50 and left the field TODO.
2. **Tie-free largest-remainder allocation (LEARNING.md L-0008), applied to both exam and bank.**
   Under the derived weights 19/19/19/19/24, the only exam sizes in the 40–60 band whose
   allocation is tie-free are **42, 48, 52 and 58** — 50 (and 40, 44, 45, 46, 55, 60) forces a
   rounding tie among the four identically-weighted domains, i.e. an arbitrary choice of which
   equal-weight domain gets an extra item. The tie-free bank sizes in each exam's 1.3–1.4× band:
   42 → {57, 58} · 48 → {63, 64} · 52 → {68, 69} · 58 → {78, 79}.
3. **The concept pool caps d1–d4 at ≈11 honest concepts each.** The AI-900 guide is terse — d3
   has 6 objective bullets yielding 8 distillable rows — so a bank of 63+ would demand 12+ d3
   concepts, reachable only by padding, which `methodology/02-master-inventory.md#contract`
   forbids. At 57, d3 needs 11: reachable with two honest splits plus one practice-attested
   addition (all documented below); 58 (d5 → 14) would already demand a filler concept.

Hence **exam 42, bank 57** (1.357 ≈ the 1.35 target; allocations 8/8/8/8/10 and 11/11/11/11/13,
both tie-free). Two pleasant consequences, neither load-bearing: 42 sits inside the vendor's own
40–60-questions-in-45-minutes envelope, so the hard 45-minute time limit needs no pacing
disclosure; and the equal-weight domains stay visibly equal in both the form and the bank.
The deviation from S1's recommended 50 is **Gate-1 ratification item D1**.

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — blueprint + ≥1 practice source (`priority: high`, computed) | 39 | 68% |
| **Blueprint-only** (`priority: normal`) | 18 | 32% |
| — of which attested by all three sources | 4 | 7% |

Per-source attestation: `ms-ai900-blueprint` 57/57 · `warner-ai900` 36/57 · `wrieden-ai900` 7/57.
All-three concepts: C-014, C-029, C-039, C-042.

Structural facts behind these numbers (per LEARNING.md L-0009 — blueprint-as-syllabus inverts
composition stats):

1. **Every concept traces to the blueprint.** The union was built blueprint-first; every practice
   candidate either mapped onto a guide row (and merged into it) or fell to the answer-space /
   vintage checks. There are no practice-only concepts — C-033 is blueprint-*adjacent* (a related
   topic of b-1.1-3 under the guide's illustrative-bullets note), not blueprint-free.
2. **Priority is computed, with zero divergences.** `priority: high` ⟺ `sources.length >= 2` for
   all 57 concepts; `concept-convergence` should emit no warnings. Three attestations are honest
   but *weaker than they look*, recorded here so the computation stays auditable: **C-005**'s
   warner attestation is that artefact's collective d1 coverage note (items 1.1/1.3/1.5 exercise
   the discrimination without a dedicated b-1.1-5 item); **C-033**'s blueprint attestation is the
   b-1.1-3 adjacency; **C-056/C-057**'s blueprint rows are the two Artefact B marks as inferred
   from the 5.2 group title. None is a priority divergence — each still has two registered
   sources — but S6 seating should not treat these four as equal in confidence to, say, C-014.
3. **`wrieden-ai900` is convergence confirmation only**, exactly as its artefact predicted: its 7
   attested concepts are all independently covered, and its real contribution is the off-blueprint
   register (what the 2025 revision removed — distractor material, never keys).

---

## Merge decisions

One row per consolidation that materially changed the count.

| Merged into | From | Rationale |
|---|---|---|
| **C-006** fairness incl. which-principle | b-1.2-1 + b-1.2-7 | naming fairness *when another principle plausibly applies* is how every observed item tests it (warner 1.2); the discrimination form b-1.2-7 is the authored form of all six principle concepts, with fairness as its named host |
| **C-010** transparency ↔ accountability boundary | b-1.2-5 + b-1.2-6 | the named-risk register's own diagnostic ("separate transparency — explain — from accountability — own") makes the boundary the testable idea; two definition items would be the flashcard version |
| **C-014** clustering + supervision line | b-2.1-3 + b-2.1-4 | absence-of-labels is both what makes a scenario clustering and what the supervision line divides; warner 2.2 and wrieden 6/14 each test them as one judgment |
| **C-018** splits + generalisation gap | b-2.2-2 + b-2.2-3 | why data is split and what a train/validation gap means are setup and payoff of one diagnosis (warner 2.4 tests both together, keyed to overfitting) |
| **C-019** Azure ML capability choice | b-2.3-1 + b-2.3-2 | AutoML's candidate profile *is* the AutoML-vs-designer-vs-notebooks choice (warner 2.3); a separate what-is-AutoML item would re-ask the same question without the judgment |

## Split decisions and the quota delta

The inverse table — where blueprint weight quota exceeded the natural row count, per
`methodology/02` ("the blueprint wins and the delta is named"). The natural post-merge pool is 52;
the contract is 57; the +5 lands as 4 splits + 1 addition, each argued as a real, separately
testable idea — none is a definition shaved off its neighbour:

| Split into | From | Rationale |
|---|---|---|
| **C-026** facial detection/analysis + **C-027** analysis-vs-identification boundary | b-3.1-4 | Artefact B names the detection-versus-identification line as its own untested concept ("where responsible-AI considerations meet computer vision"); warner 3.4's "does NOT need to identify individuals" clause shows the boundary carrying an item on its own |
| **C-029** Vision descriptive features + **C-030** Vision Read/OCR feature | b-3.2-1 | the guide's bullet bundles two feature families; the within-service feature swap both artefacts flag as under-used (warner 3.5, wrieden 28) needs describe-the-scene and read-the-text as separately ownable discriminations |
| **C-041** Language text analytics + **C-042** conversational features (CLU/CQA) | b-4.2-1 | text-analytics coverage and the conversational pair are different judgments (bundle recognition vs classify-versus-retrieve); C-042 additionally owns the retired-brand trap (LUIS→CLU, QnA Maker→CQA) that wrieden 3/13 document as live community-prep damage |
| **C-049** platform content filtering + **C-050** layered mitigation judgment | b-5.1-5 | what the platform layer catches (definitional, inheritable) and how layers stack against a symptom (judgment; warner 5.4's wrong options each *strip* a layer) are testable independently — flagged as the thinnest split in the build |

| Added | From | Rationale |
|---|---|---|
| **C-033** the limit of OCR vs structured field extraction | b-1.1-3 (adjacency) + warner 3.3 | warner's own d3 item tests this boundary from the capability side; its off-answer-space key (a document-intelligence service) is recast per the standing S3 rule — the *concept* (raw text ≠ fields bound to meaning) is in scope and blueprint-adjacent, the original key is not. Cross-domain placement recorded below |

## Cross-domain placements

| Concept | Source rule (module) | Exam domain | Why |
|---|---|---|---|
| C-033 OCR limit vs document processing | b-1.1-3 (group 1.1, Domain 1) + warner item 3.3 (its author's Domain 3) | **d3** | d1's C-003 owns the workload-recognition pitch of b-1.1-3 ("which workload category is this product?"); C-033 owns the capability-boundary pitch ("will OCR alone meet this requirement?") seated where the judgment arises — inside a vision pipeline. The blueprint keeps C-003 in d1; the boundary is a related topic tested from d3, as warner placed it |

## The named-risk register → concept map

Artefact B's six diagnostic seeds, and where each lands:

| Named risk | Concept |
|---|---|
| bias against similarly situated groups | C-006 |
| unexplained automated decision (explain vs own vs fix) | C-010, C-011 |
| overfitting read from a train/validation gap | C-018 |
| hallucination / ungrounded output | C-048, C-050 |
| ungrounded enterprise Q&A (retrieval vs fine-tuning vs bigger context) | C-057 |
| wrong-granularity vision choice | C-028 |

---

## What the blueprint holds that no accessible practice source tests

18 blueprint-only concepts (32%): C-002 (NLP workload recognition), C-007 (reliability and
safety), C-008 (privacy and security), C-015 (deep learning as a choice), C-016 (the Transformer —
a 2025-revision addition), C-017 (features vs labels), C-020 (compute vs training), C-021 (model
management), C-027 (analysis vs identification), C-030 (Vision Read), C-032 (Vision-vs-Face
selection), C-034 (key phrase extraction as a key), C-041 (Language text-analytics coverage),
C-045 (what makes a model generative), C-049 (platform content filtering), C-051 (transparency for
generated content), C-053 (Azure OpenAI), C-055 (Foundry vs direct call).

No convergence signal exists for these: S6 seating priority falls back to blueprint weight and
authoring judgment, and Gate 1 carries the lower-confidence flag for this slice. They are also,
predictably, the 2025-revision additions and the describe-level judgments community sets skip — the
artefacts' argument that they are among the highest-value items in the bank stands.

**Degradation notes** (per `methodology/02-master-inventory.md#single-source`, scoped to slices):

- **d5 convergence is structurally single-practice-source.** `wrieden-ai900` has zero d5 items
  (the domain post-dates it), so every d5 `high` rests on blueprint + `warner-ai900` alone — and
  the heaviest-weighted domain of the exam carries the weakest corroboration. Flagged at Gate 1.
- **Format calibration is absent, not thin.** Both Artefact A sources are 100% four-option single
  choice; nothing observed calibrates the multiple-response or matching share. The manifest's
  format mix is therefore a **documented default** (see the contract decisions below), not an
  observed baseline — the calibration side leans on defaults exactly as `methodology/02`'s
  degradation path describes.
- **Exit recorded:** the Tier-1 `ms-practice-assessment` (free, account-walled — registered, not
  accessed) is the source that would corroborate the blueprint-only slice *and* supply real format
  calibration; the Tier-3 `ms-learn-training` path (open, registered, not distilled) is the cheap
  vocabulary-and-coverage top-up. Both are Gate-1 decisions; either triggers a later S2 top-up +
  S3 delta pass that recomputes convergence without reopening the contract.

## What practice sources test that the blueprint does not spell out — reconciliation

Carried in (mapped onto blueprint rows or their related topics): the OCR-vs-field-extraction
boundary (C-033, warner 3.3 recast); system-message placement and grounding-in-own-content
(C-056/C-057 — Artefact B's inferred rows, warner 5.2/5.3, carried flagged per the guide's
illustrative-bullets note; **Gate-1 ratification D5**); the classify-versus-retrieve line between
CLU and custom question answering (C-042, warner 4.5's load-bearing distractor); the action-form
principle discharge (C-011, warner 1.4).

**Rejected — off-blueprint.** The standing S3 rule (every lifted concept re-checked against the
guide's objective bullets, the eight blueprint-named services, and current Azure naming) was
applied to every candidate; `wrieden-ai900` runs 76% off-blueprint and `warner-ai900` keys 2/25
items off the named answer space, so nothing entered unchecked:

| Candidate | From | Why rejected |
|---|---|---|
| semantic segmentation as a tested concept | wrieden 1 | not named in the 2025 objectives — the artefact's own verdict ("the concept is real, the exam relevance is not"); kept as d3's sharpest E05 distractor |
| a document-intelligence service as an item key | warner 3.3 | off the blueprint's eight-service answer space; the boundary *concept* is carried as C-033 with a blueprint-legal pitch, the service demoted to distractor |
| a translation service as an item key | warner 4.4 | same answer-space rule; translation-as-capability is C-039, speech translation keys to Azure AI Speech (C-043), a dedicated translator service keys to nothing |
| Cognitive Services umbrella, LUIS, QnA Maker | wrieden 27, 3, 13 | retired brands; the surviving ideas live in C-042 (successor features), the brands themselves are distractor-only vintage traps |
| algorithm names, regression sub-types, PCA, hyperparameters, feature engineering | wrieden 15, 16, 18, 22, 23, 25 | the 2025 revision trimmed the ML domain to core concepts; all below or beside the describe-level audience profile |
| evaluation-metric definitions (accuracy/precision/recall), designer-era and Custom Vision metrics | wrieden 19, 20, 21, 9, 26 | metrics are not named at any level of the 2025 objectives; wrieden 19/20 are additionally the documented near-duplicate defect pair |
| resource types, file formats, API response shapes, image-format limits | wrieden 4, 7, 8, 10, 11, 17 | E08 spec-trivia — capped at 0.05 in the manifest precisely so this class cannot re-enter through authoring habit |

## S4 pitch-separation register

Quota-driven splits and task/service twins put several concept pairs one careless item apart from
the near-duplicate check. S4 must keep these pitches distinct (the aif-c01 C-051/C-063 precedent);
recorded here so a later session cannot "fix" the apparent overlap:

| Cluster | Distinct pitches |
|---|---|
| C-003 / C-025 / C-030 / C-033 | workload recognition (d1) · task recognition (need to read text) · feature choice inside Azure AI Vision · capability-limit judgment (OCR is not enough) |
| C-048 / C-050 / C-057 | diagnose the limitation · choose the mitigation stack (never remove a layer) · choose the technique for a private corpus |
| C-037 / C-042 | intent mapping as a task · CLU/CQA as service features incl. classify-vs-retrieve and brand succession |
| C-038 / C-043 | two speech directions in a requirement · the Speech service's coverage incl. speech translation |
| C-026 / C-031 | face tasks (detect, analyse) · the Face service and its boundary with Vision's people detection |
| C-005 vs C-001..C-004; C-028 vs C-023..C-025; C-040 vs C-034..C-036; C-044 vs C-041/C-043 | each discrimination concept is the *choice among* its siblings (natural scenario_matching seats); sibling items each pitch one recognition with the others as distractor space |
| C-006 / C-010 / C-011 | name the principle under a competing principle · the explain-vs-own boundary · pick the discharging action |
| C-046 / C-047 | which model family the output demands · which scenario shape the product is |

---

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   11/11/11/11/13.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered practice source has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with zero.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Exam 42 / bank 57 = 1.357×** — full derivation above; Gate-1 ratification D1 (deviation from
  S1's recommended 50, forced by the tie-free rule L-0008 plus the d3 concept-pool ceiling).
- **Weights 19/19/19/19/24** — S1's documented normalisation of the vendor's ranges (midpoints
  92.5 → 100); unchanged at S3; Gate-1 ratification D2.
- **Format mix (exam form): 34 single_choice + 5 multiple_response + 3 scenario_matching.**
  A documented default, since neither Artefact A observed any non-MC item: MC-dominant per both
  sources; one MR per domain (Microsoft's multi-part types are real and partial-credit-scored —
  rehearsing the mechanic beats mirroring an unobserved share; Mockka's all-or-nothing scoring is
  stricter, disclosed in `format_coverage`); `multiple_response: {options: 5, select_count: [2]}`
  as the conservative default (aif-c01 precedent). One scenario_matching item in d1 (map failures
  onto principles — C-006/C-010/C-011 territory), d4 (map requirements onto text-analytics
  features — C-040's natural seat) and d5 (map products onto model families/scenario shapes —
  C-046/C-047 territory), approximating the vendor's drag-and-drop pairing. Build list, hot area,
  active screen, case studies and problem-solution sets are not rehearsed at all — disclosed.
- **Pass threshold 70%** — a raw-score proxy for Microsoft's scaled 1–1,000 / 700 pass mark,
  which the vendor states "may not equal 70% of the points"; no honest raw value exists
  (multi-part partial credit, unidentified unscored pilot items). Disclosed in the manifest
  `$comment` and `format_coverage`; Gate-1 ratification D3.
- **Time limit 45 minutes** — hard vendor fact (Fundamentals exam time; 65 seat). With 42 items
  the mock sits inside the vendor's own pacing envelope; no scaling question arises.
- **Pattern caps:** `E01: 0.30` (warner's crutch — 43% of its wrong options; the cap forces
  scenario reasoning back in), `E08: 0.05` (wrieden's dominant pattern — spec-trivia is
  off-blueprint for a describe-level exam; near-zero ceiling kept expressible), registry-standard
  `D03/D04: 0.10`. Near-duplicate threshold `0.4` (ccar-p precedent). `key_letter_max_share: 0.4`
  set explicitly — warner's 84% B-or-C key skew converts to a machine check, not a discipline hope
  (L-0014).
- **Authoring emphases inherited from the artefacts** (S4 must apply; swept per L-0014):
  no negative stems (single exception: a boundary concept like C-027/C-033, argued in the
  rationale); an option set is used once, never reused across items; option shapes stay parallel
  with a justification clause on *every* option in technique items (warner 2.2 is the model);
  keys come only from the eight blueprint-named services — Document Intelligence, AI Search,
  Translator, Content Safety, Custom Vision, Bot Service and all retired brands are
  distractor-only; guide vocabulary *Azure AI Foundry* with the Microsoft Foundry rebrand
  acknowledged where natural (C-052); over-provision C-005 workload discrimination (the Major
  2025 change) and the within-service feature swap (E01's harder form); promote E05
  granularity-slip and action-form E04; no key may require code, SDK/CLI or resource-configuration
  knowledge (audience profile); preview features may appear but never hinge on preview-only
  limits.
- **`layers.syllabus_rules: false`** — the study guide *is* the syllabus and maps 1:1 onto the
  manifest domains (Artefact B); a rules layer would duplicate the concept inventory it was built
  from. Weak-concept reporting is the honest grain. (The registered-but-undistilled
  `ms-learn-training` path could later justify flipping this on; that is an S2 top-up question,
  not an S3 default.)
