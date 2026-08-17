# Gate 1 checklist · AI-900 — for Oliver

Produced at the end of S3 (exam-author, 2026-08-16) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

> **⚑ Read decision D0 first.** AI-900 was retired 2026-06-30 and replaced by AI-901. Every
> check below is faithful to the final blueprint of an exam nobody can sit any more; whether the
> package proceeds at all precedes ratifying its numbers.

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official pages** — the S1/S2 pass read the
  study guide in full (facts in [`sources.md`](sources.md) §"Blueprint facts recorded for the
  manifest"). To verify first-hand: skill areas + weight **ranges** (15–20 ×4, 20–25) from
  `https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900`;
  **45 min exam time / 65 min seat time** (Fundamentals exam type) from the vendor-wide
  exam-duration page; scoring **scaled 1–1,000, pass 700, "may not equal 70% of the points",
  per-component partial credit, unscored pilot items** from the exam-scoring page; the
  **retirement notice** on the study guide, exam page and certification page. Manifest carries
  `blueprint_version: skills measured as of 2025-05-02`, `source_checked_date: 2026-08-16`.
  ⚠ Two numbers are **not vendor facts** and are ratified as D1/D2 below: the exam item count
  (vendor publishes only "most exams typically contain between 40-60 questions") and the point
  weights (vendor publishes ranges that sum to 80–105, never 100).
- [ ] **2 · Weights sum to 100** — 19+19+19+19+24 = 100, but only **after S1's documented
  normalisation** of the published ranges (midpoints 17.5×4+22.5 = 92.5 → 100; the single
  tie-free integer allocation preserving order and the 5-point GenAI premium). Read this line as
  "sums to 100 after a disclosed derivation" — ratification D2.
- [ ] **3 · Arithmetic holds** — exam: 8+8+8+8+10 = 42 ✓; bank: 11+11+11+11+13 = 57 ✓;
  57/42 = **1.357 ≈ 1.35** ✓; per-domain format mix sums to exam_items (6+1+1 / 7+1+0 / 7+1+0 /
  6+1+1 / 8+1+1) ✓; per-domain concept counts equal bank_items (`concept-inventory`) ✓. Both
  allocations are tie-free largest-remainder (L-0008) — the reason the exam is 42, not S1's
  recommended 50 (D1).
- [ ] **4 · 5 concepts spot-traced** (one per domain, incl. one blueprint-only; full chain =
  concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-005 (d1, workload discrimination) | `source-ms-ai900-blueprint.md` row b-1.1-5 + `source-warner-ai900.md` items 1.1/1.3/1.5 (collective coverage note) → registry ids `ms-ai900-blueprint`, `warner-ai900` |
  | C-014 (d2, clustering + supervision) | `source-ms-ai900-blueprint.md` rows b-2.1-3/b-2.1-4 + `source-warner-ai900.md` item 2.2 + `source-wrieden-ai900.md` items 6/14 — attested by all three sources |
  | C-033 (d3, OCR limit vs field extraction) | `source-ms-ai900-blueprint.md` row b-1.1-3 (related-topic adjacency) + `source-warner-ai900.md` item 3.3 (off-answer-space key recast; cross-domain placement recorded in `master-inventory.md`) |
  | C-042 (d4, CLU/CQA successors) | `source-ms-ai900-blueprint.md` row b-4.2-1 + `source-warner-ai900.md` item 4.5 + `source-wrieden-ai900.md` item 3 (retired-brand key, concept survives) |
  | C-045 (d5, what makes a model generative — **blueprint-only**) | `source-ms-ai900-blueprint.md` row b-5.1-1 only; `priority: normal` by computation |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: Microsoft public
  publication / MIT repo / freely published named-author repo, all classification-only). No
  forums, no exam-experience threads, no NDA'd content registered. **Dump-screen evidence:**
  [`sources.md`](sources.md) §"Excluded sources" records 9 candidate classes screened OUT with
  evidence — including the ExamTopics corpus + mirrors, a repo shipping a literal `dumps/`
  directory, and a CertyIQ-derived bank — plus the content-level dump screens run on both
  accepted sources (no match; wrieden residual risk recorded low-moderate). A permissive licence
  cannot launder recalled exam content.
- [ ] **6 · Bank size approved** — 57 originally-authored items for an archival mock of the
  retired entry-level Azure AI certification. S4 effort ≈ 57 items across 5 domain batches.
  **Weigh against D0** — this effort is the thing a "park it" decision saves.
- [ ] **7 · Single-source slices flagged** — the build is **convergent overall** (39/57 = 68%
  attested by ≥2 independent sources) with three flagged slices: (a) **d5 rests on the blueprint
  plus one practice source** — `wrieden-ai900` pre-dates the domain entirely, so the
  heaviest-weighted domain has the weakest corroboration; (b) **18 blueprint-only concepts
  (32%)** ship lower-confidence, concentrated in the 2025-revision additions (Transformer, deep
  learning, model management) and describe-level judgments community sets skip; (c) **format
  calibration is absent** — both practice sources are 100% four-option MC, so the MR/SM mix is a
  documented default. Exits: the Tier-1 official practice assessment (D4) and Tier-3 MS Learn
  path (D4). Full notes: `master-inventory.md` §degradation.

## Decisions for Oliver

1. **D0 · The retirement fork — proceed, pivot, or park?** AI-900 was retired 2026-06-30; AI-901
   (two skill areas, 55–60% Foundry implementation, Python/REST in the audience profile) is not a
   re-number, and this inventory is not a head start on it beyond the concepts half
   ([`sources.md` §Retirement](sources.md#retirement)). Options: **(a)** finish AI-900 as an
   archival mock — retirement is already disclosed in the manifest intro/disclaimer/format-coverage;
   **(b)** park at Gate 1 and scaffold `ai-901` (the vendor source map and this pipeline run carry
   over; the content does not); **(c)** both, AI-901 first. This decision precedes all others.
2. **D1 · Exam size 42 — ratify the deviation from the recommended 50?** No vendor count exists;
   S1 recommended the 40–60 band midpoint. 50 forces a four-way largest-remainder tie among the
   equal-weighted domains (L-0008: an arbitrary tiebreak inside a validator-enforced number), and
   the tie-free alternatives 48/52/58 demand more d3/d5 concepts than the blueprint honestly
   yields (padding). 42 is tie-free at both exam and bank grain and sits inside the vendor's own
   40–60-in-45-minutes pacing envelope. Ratify 42, or direct otherwise.
3. **D2 · Weight normalisation — ratify 19/19/19/19/24?** The vendor publishes ranges summing
   80–105. The manifest carries the midpoint normalisation (only tie-free integer allocation
   preserving order + the GenAI premium). Ratify, or pick a different documented rule.
4. **D3 · Pass-threshold proxy — ratify 70%?** The real exam: scaled 1–1,000, pass 700,
   explicitly "may not equal 70% of the points", partial credit on multi-part items, unscored
   pilot items. No honest raw percentage exists; 70 is the disclosed proxy (manifest `$comment`,
   intro, format_coverage). Ratify, or set a different proxy.
5. **D4 · Source top-ups — authorise either?** (a) The Tier-1 official practice assessment is
   free but **account-walled** (Microsoft Learn sign-in; no account was created under the
   free-first/no-signup rule) — it is the only source that could corroborate the blueprint-only
   slice AND supply real format calibration. (b) The Tier-3 MS Learn training path is **open, no
   account** — registered but not distilled this pass; the cheap vocabulary/coverage top-up.
   Either triggers an S2 top-up + S3 delta pass that refines confidence without reopening the
   contract. Both moot under D0(b).
6. **D5 · Related-topic concepts and quota splits — ratify?** C-056 (system message) and C-057
   (grounding in own content) ride on rows Artefact B itself marks as inferred — carried flagged
   under the guide's "related topics may be covered" note, on the argument that no candidate
   meets Foundry without meeting prompts and grounding. The four quota-driven splits (C-026/027,
   C-029/030, C-041/042, C-049/050 — the last flagged thinnest) are documented in
   `master-inventory.md` §splits. Ratify the carried set, or direct drops (a drop changes the
   bank arithmetic and reopens D1).

## Validation record (S3 exit)

`pnpm validate ai-900` — see the run output in the S3 handoff. Expected and accepted at this
stage: `bank-shape` (0 of 57 items), `concept-coverage` (57 uncovered concepts) and
`selection-shape` (empty form) — all consequences of `questions.json`/`selection.json` being
S4/S6 outputs. Everything structural and provenance-related is green, and `concept-convergence`
emits zero warnings (no priority divergences).

> **Gate 1 DISPOSITION (Oliver, 2026-08-17): PARKED as archival** — AI-900 retired 2026-06-30; slot pivots to AI-901 (fresh S1–S3). This inventory is preserved; authoring may proceed later as a labeled archive.
