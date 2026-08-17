# Gate 1 checklist · AI-901 — for Oliver

Produced at the end of S3 (exam-author, 2026-08-18) per `methodology/00-pipeline.md` (Gate 1).
Evidence pointers below; the reasoning artefact is [`master-inventory.md`](master-inventory.md).

> **Pre-approval on record.** Oliver **pre-approved this exam entering S4 on 2026-08-17** as part of
> the batch. S4 therefore proceeds without waiting on this checklist, and **the review of this
> checklist is retroactive, taken at Gate 2**. Nothing below is blocking; the six decisions in the
> next section stand as recorded S3 rulings until Oliver overturns them, and D5/D6 in particular
> change only the *confidence* attached to the build, never the contract.

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official exam page** — the S1/S2 pass read the
  official study guide in full
  (`https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901`) plus
  the vendor-wide scoring and duration pages, with facts recorded in [`sources.md`](sources.md)
  §"Blueprint facts recorded for the manifest". To verify first-hand: **two** skill areas at
  **40–45%** and **55–60%**; **45 minutes** exam time (65 minutes seat time); scoring scaled
  **1–1,000**, pass **700**, explicitly *"may not equal 70% of the points"*; per-component partial
  credit; unidentified unscored pilot items; **no published per-exam question count** (vendor-wide
  40–60 only); **retirement date: none**. Manifest carries `blueprint_version: skills measured as of
  2026-04-15` (first blueprint of a new exam — **no change log exists yet**, which is itself a
  vendor-watch fact) and `source_checked_date: 2026-08-17`.
  ⚠ **Two of the vendor's own pages on this exam are stale** and must not be used to check anything:
  the exam page's *"Prove that you can describe…"* blurb still lists **AI-900's five skill areas**,
  and the study guide's *Find documentation* block still links Anomaly Detector, LUIS and Azure
  Machine Learning. Only the "Skills measured" section and the "Assessed on this exam" list are
  authoritative ([`sources.md`](sources.md) §Source map, note 4).

- [ ] **2 · Weights sum to 100** — 42 + 58 = 100. **This is a judgment, not a vendor fact:**
  Microsoft publishes ranges whose minimums sum to 95 and maximums to 105. The midpoints (42.5 /
  57.5) already sum to 100, so only a half-point tie-break was needed; 42/58 keeps the majority area
  strictly inside its published band. Decision D1 below.

- [ ] **3 · Arithmetic holds** — exam: 18 + 24 = **42** ✓; bank: 24 + 32 = **56** ✓;
  56 / 42 = **1.333**, inside the 1.3–1.4 band ✓; per-domain format mix sums to `exam_items`
  (14+2+2 = 18 / 20+3+1 = 24) ✓; per-domain concept counts equal `bank_items` (24 / 32) ✓.
  Largest-remainder rounding is tie-free in both directions, and with two domains at 42/58 a tie is
  arithmetically impossible anywhere in the vendor's band — so **the item count was chosen from the
  concept pool, not from rounding convenience** (working in [`master-inventory.md`](master-inventory.md)
  §"Why 42 and 56"). Machine-enforced by `blueprint-arithmetic` + `concept-inventory`; see the
  validation record below.

- [ ] **4 · 5 concepts spot-traced** — picked to cover both domains, both vendor artefacts, the
  practice source, and each of the three attestation shapes (three-source / vendor-only /
  single-source). Full chain = concept → derivation-doc row(s) → registered source:

  | Concept | Traces to |
  |---|---|
  | **C-013** (d1, workload recognition — *three sources*, and the anchor scenario_matching seat) | `source-ms-ai901-blueprint.md` row b-1.3-1 + `source-ms-ai901-curriculum.md` rows c-1.1-1…c-1.1-6 + `source-akashp-ai901-simulator.md` items Q49, Q56, Q58, Q59 → registry ids `ms-ai901-blueprint`, `ms-ai901-curriculum`, `akashp-ai901-simulator` |
  | **C-024** (d1, reading characters vs extracting fields — *three sources*, the curriculum's named risk) | blueprint rows b-1.3-11/12 + curriculum rows c-1.6-2/c-1.6-3 + practice items Q80, Q116 |
  | **C-041** (d2, dedicated speech route vs multimodal route — ***blueprint-only***, `priority: normal`) | `source-ms-ai901-blueprint.md` row b-2.2-4 **only**; no curriculum unit poses it as a choice and the practice source has zero items on the multimodal route |
  | **C-051** (d2, document extraction with Content Understanding — ***vendor-only***, computed `high`) | blueprint row b-2.4-1 + curriculum row c-2.6-1. The practice source's ~20 extraction items are Document Intelligence model selection and were **deliberately not counted** — a product fact is not a concept attestation |
  | **C-043** (d2, build-vs-buy inside a capability — ***practice-only***, the one such concept) | `source-akashp-ai901-simulator.md` items Q97, Q136 **only** → registry id `akashp-ai901-simulator` (MIT, classification-only) |

- [ ] **5 · Source registry legality confirmed** — every registered source carries a licence or
  permission basis ([`sources.md`](sources.md) §Registered sources: Microsoft public publication ×2,
  MIT repository ×1, plus one registered-not-distilled and one pending-access entry). No forums, no
  exam-experience threads, no NDA'd content registered. **Dump-screen evidence:**
  [`sources.md`](sources.md) §"Excluded sources" records **10 candidate classes** screened out with
  evidence — the ten-site dump corpus, a paid "real questions" vendor, three paywalled/teaser sets,
  five unlicensed or unscreenable repositories (including `Chinzillla`, machine-derived from
  Microsoft Learn unit text with `license: null`) and Reddit exam-experience threads — plus two
  Tim Warner repositories set aside **without prejudice** for having no distillable bank. The
  screening was by content, lowest ids first, not by licence file: `akashp`'s decisive clearance is
  the **reverse tell** that it contains zero occurrences of *Microsoft Foundry*, *Foundry SDK*,
  *Foundry Tools* and *Foundry IQ* — a bank recalled from live AI-901 sittings could not miss the
  vocabulary the live exam is built on. Machine-checked by `provenance-sources`,
  `concept-source-registry`, `source-derivation-link`, `derivation-present`,
  `licensed-import-license` — all green.

- [ ] **6 · Bank size approved** — 56 originally-authored items for the exam that now solely earns
  *Microsoft Certified: Azure AI Fundamentals*, an entry-level certification with no retirement
  date. S4 effort ≈ 56 items across 2 domain batches (24 + 32), with d2 likely split in two given it
  carries the implementation half and 15 of the 19 concepts that have no external reading.

- [ ] **7 · Single-source / lower-confidence flag — RAISED, build-wide, weighted onto d2.** This
  build does not meet the strict single-source definition (the blueprint is not alone) but degrades
  toward it, and the flag is deliberately **not** scoped to a slice the way aif-c01's was:
  - **87.5% computes to `priority: high`, and that number must be discounted.** Two of the three
    artefacts are Microsoft, and the third is an LLM-generated bank written against the same public
    blueprint — a *correlated* reading, not an independent one, 25% of whose items are off-blueprint.
  - **The honest statistic is 66% vendor-external**, and its shape is the finding: **92% in the
    concepts half, 47% in the implementation half.** The 55–60% of this exam that matters most is
    the half no source outside Microsoft has read.
  - **19 concepts (34%) have no external reading at all; 17 of them are in d2.** Seven rest on a
    single artefact.
  - **The Tier-1 official practice assessment is unread** (AI Skills Navigator sign-in wall; no
    account created under the free-first / no-signup rule), and the second community bank was
    registered but deliberately **not** distilled on convergence-honesty grounds. Exits, in order of
    value, are recorded in [`master-inventory.md`](master-inventory.md) §Degradation note; decisions
    D5 and D6 below.
  - **Consequence to carry into S5/S6:** seating priority for the vendor-only and single-source
    concepts falls back to blueprint weight and authoring judgment, not to convergence; the
    examiner should expect its toughest adjudications in d2.

## Six decisions for Oliver

> **Decision record:** *(to be filled at the retroactive Gate-1 review, taken at Gate 2 per the
> pre-approval note above. D1–D4 are S3 rulings already in force in the manifest; D5–D6 are open.)*

1. **D1 · Ratify the 42/58 split?** Microsoft publishes ranges (40–45 / 55–60), not point weights;
   their minimums sum to 95 and maximums to 105. The midpoints sum to 100 exactly, so only the
   half-point needed breaking. **42/58** keeps the majority area strictly inside its band with room
   either side, and matches the split the independent `kittoyeah` bank reached from the same ranges.
   Alternative: 43/57. *(In force in `manifest.json`.)*

2. **D2 · Ratify `exam.item_count = 42`?** Not a vendor fact — Microsoft publishes only the
   vendor-wide 40–60 band. S2 directed that S3 choose from the concept pool rather than from
   rounding, and 42 is what that produced: 56 concepts ÷ 1.35 = 41.5, and 42 is the neighbour whose
   18/24 split keeps both domains inside their published weight bands. Disclosed as a chosen number
   in `format_coverage`. Alternative: 41 (bank 1.366×), or any count in the band with a
   correspondingly resized bank. *(In force.)*

3. **D3 · Ratify `pass_threshold_pct = 70` as a disclosed proxy?** No honest raw percentage exists:
   the real exam is scaled 1–1,000 with a 700 pass mark Microsoft states *"may not equal 70% of the
   points"*, awards per-component partial credit and mixes in unidentified unscored items. 70 is a
   readability proxy, disclosed in `format_coverage` and in the intro block, never presented as a
   translation of 700. *(In force.)*

4. **D4 · Ratify the RAG / Foundry IQ ruling?** This was the open Gate-1 question both S2 artefacts
   flagged: the official course spends **12.7% of its time** on RAG and Foundry IQ, **no blueprint
   bullet names either**, and the community bank tests RAG in 18 of 196 items. S3 took the
   curriculum artefact's own recommendation — **option (b): admit at low weight, in the curriculum's
   agent framing** — as exactly **2 of 56 concepts (3.6%)**: C-035 (connect an agent to a knowledge
   base for citation-backed answers) and C-036 (grounded is not the same as fluent). RAG *mechanics*
   — chunking, re-embedding, hybrid retrieval, re-ranking — are rejected. Alternatives: (a) exclude
   entirely, (c) include fully and disclose. Reasoning: [`master-inventory.md`](master-inventory.md)
   §"The RAG / Foundry IQ ruling". *(In force.)*

5. **D5 · Microsoft sign-in for the official practice assessment — authorise or decline?** The
   Tier-1 assessment is free, unlimited-retake, written by the team that builds the exams, and gives
   a rationale per question — and it is the **only** source that would give this build's
   implementation half an independent reading. It has moved behind an AI Skills Navigator sign-in;
   **no account was created and no content was read** (free-first / no-signup rule). Authorising
   enables an S2 top-up + S3 delta pass that recomputes convergence where it is weakest. Declining
   ships the build with the check-7 flag as written. **A single ruling also covers `aif-c01` and
   `ai-900`.** ([`sources.md`](sources.md) §pending access.)

6. **D6 · `kittoyeah-ai901-prep` — distil it, or keep the exclusion?** A 210-item freely published
   bank, dump-screened and cleared, with per-objective `blueprintRef` tags and a 42/58 mock weighting
   that independently corroborates D1. It was registered but **deliberately not distilled**, on a
   convergence-*honesty* argument rather than a legality one: its own README states it is grounded in
   the two sources this package already holds directly, so distilling it would add a third
   "attestation" that is not independent. Distilling it is a one-file S2 top-up that buys breadth at
   the cost of that honesty. Recommendation: **hold the exclusion, and spend the top-up budget on D5
   instead** — one genuinely independent source is worth more than a derived third reading.

## Validation record (S3 exit)

`pnpm validate ai-901` — **30 checks, 69 errors, 0 warnings**. Every error is an empty-artefact
consequence of `questions.json` and `selection.json` being S4/S6 outputs:

- `bank-shape` (3) — bank has 0 items, expected 56 / 24 / 32
- `concept-coverage` (56) — one per concept, "no bank item tests this concept as primary"
- `selection-shape` (4) + `selection-format-mix` (6) — empty form

Everything structural, arithmetical and provenance-related is **green**: `manifest-shape`,
`intro-presence`, `concept-inventory`, `blueprint-arithmetic`, `item-metadata`, `style-policy`,
`provenance-sources`, `licensed-import-license`, `derivation-present`, `concept-source-registry`,
`source-derivation-link`. `concept-convergence` emits **zero warnings** — priority is computed with
no hand-tuned divergences, which is exactly why the discount in check 7 lives in prose rather than
in the priority field.
