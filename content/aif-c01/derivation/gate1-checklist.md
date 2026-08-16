# Gate 1 checklist · AIF-C01 — for Oliver

Produced at the end of S3 (exam-author, 2026-08-16) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official exam page** — the S1/S2 pass read the
  official exam guide v1.1 in full (PDF at
  `https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf`,
  facts recorded in [`sources.md`](sources.md) §"Blueprint facts recorded for the manifest").
  To verify first-hand: domains + weights 20/24/28/14/14, item types (MC/MR/ordering/matching),
  scoring scaled 100–1,000 pass 700 compensatory, 50 scored + 15 unscored come from the guide;
  **65 questions / 90 minutes / 100 USD come from the exam detail page**
  (`https://aws.amazon.com/certification/certified-ai-practitioner/`) — the guide does not state
  them. Manifest carries `blueprint_version: 1.1 (2026-04-30)`, `source_checked_date: 2026-08-16`.
- [ ] **2 · Weights sum to 100** — 20+24+28+14+14 = 100 (`manifest.json` domains; also Artefact B
  mapping table).
- [ ] **3 · Arithmetic holds** — exam: 10+12+14+7+7 = 50 ✓; bank: 14+16+19+9+9 = 67 ✓;
  67/50 = **1.34 ≈ 1.35** ✓; per-domain format mix sums to exam_items (8+1+1 / 9+2+1 / 11+2+1 /
  6+1+0 / 6+1+0) ✓. Enforced by the validator's `blueprint-arithmetic` + `concept-inventory`
  checks — see the validation record below.
- [ ] **4 · 5 concepts spot-traced** (one per domain, incl. one blueprint-only; full chain =
  concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-008 (d1, service selection) | `source-aif-blueprint.md` rows b-1.2-5/b-1.3-4 + `source-declute-serverside.md` items 1.5, 1.6 + `source-jwalsh-aif.md` items 1.03/1.06/1.07/1.11/1.12 → registry ids `aif-blueprint`, `declute-serverside`, `jwalsh-aif` |
  | C-021 (d2, token economics) | `source-aif-blueprint.md` rows b-2.1-10/b-2.3-4 + `source-declute-serverside.md` item 2.3 |
  | C-042 (d3, weight-changing methods) | `source-aif-blueprint.md` row b-3.3-1 + `source-declute-serverside.md` item 3.3 + `source-jwalsh-aif.md` item 3.06 |
  | C-055 (d4, bias detection) | `source-aif-blueprint.md` row b-4.1-7 + `source-declute-serverside.md` item 4.3 + `source-jwalsh-aif.md` item 4.02 (with the Clarify/A2I placement caveat recorded in both docs) |
  | C-062 (d5, responsibility scoping — **blueprint-only**) | `source-aif-blueprint.md` rows b-5.1-5/b-5.2-3 only; `priority: normal` by computation |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: AWS public
  publication / free named-author article / MIT repo, all classification-only). No forums, no
  exam-experience threads, no NDA'd content registered. **Dump-screen evidence:** the
  [`sources.md`](sources.md) §"Excluded sources — screened and rejected" table records the
  ExamTopics corpus + mirrors, the `kananinirav` repo (word-for-word dump match) and the
  `nastaso/cloudcertprep` bank (3/3 spot-checks = paraphrased dump lineage) as screened OUT with
  evidence — a permissive licence cannot launder recalled exam content.
- [ ] **6 · Bank size approved** — 67 originally-authored items for the highest-volume entry-level
  AWS AI certification. S4 effort ≈ 67 items across 5 domain batches.
- [ ] **7 · Single-source flag** — the build is **convergent overall** (44/67 = 66% attested by ≥2
  independent sources) but the **v1.1 slice is single-source**: context engineering, agentic
  blocks, multi-agent patterns, MCP, prompt caching, prompt versioning, application-level eval,
  output-side enforcement + hallucination detection (8 whole concepts + 3 folded halves) rest on
  the blueprint alone. Ships lower-confidence for that slice; exit = the Tier-1 official set
  (decision 1 below). Full list: `master-inventory.md` §degradation note.

## Three decisions for Oliver

> **Decision record (Oliver, 2026-08-16):** D1 **YES** — Oliver will create the free Skill Builder
> account; the S2 top-up + S3 delta pass runs once access exists. D2 **RATIFIED** — 70% raw proxy
> stands as manifested. D3 **RATIFIED** — keep 90 minutes with the drafted disclosure.
> **Gate 1 sign-off itself is PENDING** — Oliver is reviewing this checklist and the master
> inventory before authorizing S4; the checkboxes above remain his to tick.

1. **Skill Builder account — yes or no?** The free official 20-question practice set is the only
   source that can corroborate the v1.1 block, but it sits behind an AWS Skill Builder account
   wall; no account was created (free-first / no-signup rule). Authorizing a sign-in enables a
   later S2 top-up + S3 delta pass that recomputes convergence for the weakest slice of the
   inventory. Declining keeps the v1.1 slice blueprint-only, as flagged. ([`sources.md`](sources.md)
   §pending access.)
2. **Pass-threshold proxy — ratify 70%?** The real exam is scaled 100–1,000 with a 700 minimum,
   compensatory; the scale is not publicly convertible to a raw percent. The manifest proposes
   **70% raw** as the proxy (disclosed in `manifest.$comment`). Ratify, or set a different proxy.
3. **Pacing — disclose or scale?** The manifest keeps the vendor's **90 minutes** against 50
   scored items (the real sitting is 65 questions incl. 15 unscored in 90 min → our timing is
   ~28% generous; a scaled limit would be ~69 min). Proposal: keep 90 and disclose in
   `format_coverage` (already drafted there); alternative: scale down for realistic pressure.

## Validation record (S3 exit)

`pnpm validate aif-c01` — see the run output in the S3 handoff. Expected and accepted at this
stage: `bank-shape` (0 of 67 items), `concept-coverage` (67 uncovered concepts) and
`selection-shape` (empty form) — all consequences of `questions.json`/`selection.json` being S4/S6
outputs. Everything structural and provenance-related is green, and `concept-convergence` emits
zero warnings (no priority divergences).
