# Gate 1 checklist · CCAO-F (`ccas`) — for Oliver

Produced at the end of S3 (exam-author, 2026-08-17) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official source** — the S1/S2 pass read the
  official exam guide **v1.0 (effective July 2026, exam code CCAO-F)** in full on 2026-08-16; the
  PDF is linked from the public certifications page
  (`https://anthropic-partners.skilljar.com/page/partner-certifications`), no login. Facts recorded
  in [`sources.md`](sources.md) §"Blueprint facts recorded for the manifest": 60 items / 120
  minutes / $99 / 12-month validity / Pearson VUE; scoring criterion-referenced, scaled 100–1,000,
  cut **720**, per-domain %-correct reported but not used; formats **MC + MR only** ("each item
  states how many responses to select" — no ordering, no matching); domains and weights
  14/21/12/16/12/15/10. Unlike AWS, *everything* exam-critical is in the PDF — no detail-page
  numbers. Manifest carries `blueprint_version: 1.0 (July 2026)`,
  `source_checked_date: 2026-08-16`. *Known discrepancy, recorded not resolved:* the course recap's
  own source note cites an internal "blueprint v1.3" numbering; the manifest follows the published
  guide's document version, which is what the vendor watch can diff.
- [ ] **2 · Weights sum to 100** — 14+21+12+16+12+15+10 = 100 (`manifest.json` domains; blueprint
  Artefact B mapping table).
- [ ] **3 · Arithmetic holds** — exam: 8+13+7+10+7+9+6 = 60 ✓; bank: 11+17+10+13+10+12+8 = 81 ✓;
  81/60 = **1.35 exactly**; per-domain format mix sums to exam_items
  (7+1+0 / 11+2+0 / 6+1+0 / 8+2+0 / 6+1+0 / 8+1+0 / 5+1+0) ✓. Bank size selected by L-0008
  (decisive-tie-free largest remainder; 80 excluded for its d3/d5 cut-line tie — full working in
  `master-inventory.md` §Result). Enforced by `blueprint-arithmetic` + `concept-inventory` — both
  green in the validation record below.
- [ ] **4 · 5 concepts spot-traced** (across domains, incl. one vendor-family-only; full chain =
  concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-004 (d1, decompose into checkable steps) | `source-ccas-blueprint.md` obj 1.2 row a + `source-ccas-recap.md` rule 2.03 + `source-beecham-ccao-f.md` item M2-Q04 → registry ids `ccas-blueprint`, `ccas-course-recap`, `beecham-ccao-f` |
  | C-027 (d2, inconsistency both grains) | blueprint obj 2.2 row b (named-risk register row "two parts of one output disagree, or repeated runs disagree") + recap rule 1.05 + Beecham M3-Q08 — also a documented cross-domain placement (recap Module 1 → d2) |
  | C-030 (d3, the four surfaces — **vendor-family-only**) | blueprint obj 3.1 row b + recap rule 1.01; `priority: normal` under the family convention, its `concept-convergence` warning is #9 in the enumerated set |
  | C-051 (d4, escalation boundary) | blueprint obj 4.5 row b + guide §3 scope-boundary register + recap closing module + Beecham M7-Q06 (escalate half) |
  | C-065 (d6, redaction as the enabling control) | blueprint obj 6.2 row b + recap rule 6.04 + vendor sample G.3 + Beecham M5-Q05 (the Artefact A's own reskin note) |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: Anthropic public
  publication ×2 / own-course-notes with proof-of-access ×1 / MIT repo ×1 — practice sources
  classification-only regardless of licence). No forums, no exam-experience threads, no NDA'd
  content registered. **Dump-screen evidence:** no CCAO-F dump corpus exists to match against (the
  exam is 2 months old; ExamTopics carries only the Architect exam — screen evidence in
  sources.md), so the screen ran class-exclusion + content-probes + repository-provenance — four
  screens, all clear, with the residual risk stated plainly and a re-screen obligation recorded if
  a corpus appears. The `anthropic-prep-course` entry is registered **pending extraction** with
  nothing distilled from it — decision 3 below.
- [ ] **6 · Bank size approved** — 81 originally-authored items for a two-month-old certification
  with no official practice product (the vendor retired its practice exam in the Pearson move —
  a mock has unusually high value here). S4 effort ≈ 81 items across 7 domain batches.
- [ ] **7 · Single-source flag — this build carries it.** Four registered sources but only **two
  independent families**: Anthropic (blueprint + samples + recap) and one Tier-4 community bank
  with measured Developer-drift. Priority is computed over families
  (`concepts.json` $comment): 42/81 concepts (52%) are convergent, **39/81 (48%) rest on vendor
  coherence alone**, concentrated in d3 (2/10 convergent — Beecham never names a surface, tier or
  connector), objective 1.4 (task types) and objective 2.5 (audience adaptation). The 34
  `concept-convergence` warnings are this convention, enumerated in
  `master-inventory.md` §priority-convention. **Coverage is strong (30 objectives + 35 rules, all
  carried); calibration is the weak half** — MR shape and share are house decisions, difficulty
  pitch rests on 3 vendor items. Ships lower-confidence in the methodology's sense; exit conditions
  recorded (watch `claudecertificationguide.com` Associate track; any returned vendor practice set
  = immediate Tier-1 recalibration).

## Four decisions for Oliver

1. **Package naming — keep `slug: ccas`, or rename to `ccao-f`?** The intake brief said "CCAS";
   the vendor's exam code is **CCAO-F** (no vendor artefact says "CCAS"). The S1 registry left the
   slug and put the real code in the title; S3 filled the inventory under `ccas`. Renaming later
   touches the package directory, registry and any deep links — if you want `ccao-f`, cheapest is
   **before S4 starts**. Recommendation: keep `ccas` (it is only the internal package key; every
   user-facing surface says CCAO-F).
2. **Pass-threshold translation — ratify 72%?** The real exam is scaled 100–1,000, cut 720, not
   convertible to a published raw percent. The manifest proposes **72% raw** as the practice pass
   line (aif-c01's 700→70 precedent), disclosed in `manifest.$comment`, `format_coverage` and the
   intro. Ratify, or set a different proxy.
3. **Prep-course lesson bodies — authorize a top-up S2 pass?** You hold legitimate access to the 8
   prep-course modules; only the recap layer was extracted. A top-up distillation would materially
   deepen D1/D3/D5 vocabulary (the thinnest slices) but **cannot create convergence** (same
   vendor). Declining leaves the inventory as-is; authorizing runs S2b + an S3 delta pass that
   refines statements/vocabulary, not the contract. (No new account needed — unlike the aif-c01
   Skill Builder decision.)
4. **MR calibration — ratify the house shape?** 9 of 60 exam items multiple-response, 5 options,
   choose 2, select-count always stated in the stem. No source measures the real ratio (the guide
   is silent; Beecham has zero MR items). Disclosed as a house decision in the manifest. Ratify,
   or set a different share/shape.

## Validation record (S3 exit)

`pnpm validate ccas` (2026-08-17): **33 checks · 114 errors · 34 warnings.** Every error is a
consequence of `questions.json`/`selection.json` being S4/S6 outputs: `bank-shape` (0 of 81),
`concept-coverage` (81 concepts with no item yet), `syllabus-rule-bank-coverage` +
`syllabus-rule-form-coverage` (35 rules, no items yet), `selection-shape` + `selection-format-mix`
(empty form). Everything structural and provenance-related is **green**: `manifest-shape`,
`intro-presence`, `concept-inventory`, `concept-syllabus-rules`, `blueprint-arithmetic`,
`provenance-sources`, `derivation-present`, `concept-source-registry`, `source-derivation-link`,
`style-policy`, `mojibake`, `near-duplicate-stems`. The 34 `concept-convergence` warnings match
the enumerated family-convention set exactly — 34 expected, 34 observed, ids verified against
`master-inventory.md` §priority-convention.

> **Gate 1 SIGN-OFF (Oliver, 2026-08-17): APPROVED for S4** — batch approval "Approve all". Open decisions in this checklist resolve per their recommended defaults unless amended at Gate 2.
