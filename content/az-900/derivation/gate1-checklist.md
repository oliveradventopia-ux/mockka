# Gate 1 checklist · AZ-900 — for Oliver

Produced at the end of S3 (exam-author, 2026-08-17) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official exam page** — the S1/S2 pass read the
  official study guide in full ("Skills measured as of July 20, 2026",
  `https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900`,
  facts recorded in [`sources.md`](sources.md#blueprint-facts-recorded-for-the-manifest)).
  To verify first-hand: skill areas + weight **bands** 25–30 / 35–40 / 30–35, 12 skill groups,
  57 objective bullets, and the change log (0 *Major*, 3 *Minor*) come from the study guide;
  **45 minutes exam time / 65 minutes seat time, scaled 1–1,000 with 700 to pass, no guessing
  penalty, unscored items, partial credit on multi-part items, and the 40–60 question band come
  from the two program-level pages** (exam-duration and exam-scoring URLs in the sources.md
  source map) — Microsoft does not publish them per exam. Manifest carries
  `blueprint_version: "skills measured as of 2026-07-20"` (Microsoft versions by date, not
  number), `source_checked_date: 2026-08-16`. **Three manifest values are MODELLED, not
  published** — decisions 2–4 below.
- [ ] **2 · Weights sum to 100** — 28+38+34 = 100. Microsoft publishes bands; the manifest points
  are band midpoints normalised ×100/97.5, each still inside its published band — full derivation
  table in [`sources.md`](sources.md#weight-band--point-weight-arithmetic-recorded-so-gate-1-can-check-it).
- [ ] **3 · Arithmetic holds** — exam: 14+19+17 = 50 ✓ (weight × 50 lands exactly, no rounding);
  bank: 18+25+22 = 65 ✓; 65/50 = **1.30**, inside the 1.3–1.4 band, allocation tie-free per
  L-0008 (candidate table in `master-inventory.md` §bank-size); per-domain format mix sums to
  exam_items (12+1+1 / 16+2+1 / 14+2+1) ✓; per-domain concept counts equal bank_items
  (validator `concept-inventory`) ✓.
- [ ] **4 · 5 concepts spot-traced** (one per domain plus a blueprint-only and a divergence case;
  full chain = concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-011 (d1, vertical vs horizontal scaling) | `source-az900-studyguide.md` row b-1.2-1 + `source-ms-learn-az900-modules.md` item 1.4 + `source-tutorialsdojo-az900.md` item 1.4 + `source-insidecloud-az900.md` item 1.11 → registry ids `az900-studyguide`, `ms-learn-az900-modules`, `tutorialsdojo-az900`, `insidecloud-az900` |
  | C-030 (d2, connectivity selection) | rows b-2.2-5 + ms-learn 2.9 + tutorialsdojo 2.1 + insidecloud 2.10/2.11/2.50 |
  | C-041 (d2, RBAC scope + union semantics) | row b-2.4-5 + ms-learn 2.17 + tutorialsdojo 2.2 + insidecloud 2.30 — the two third-party items attack the same concept from opposite directions (what one role bounds vs how several combine) |
  | C-054 (d3, governance-control boundary — **cross-bullet synthesis**) | rows b-3.2-2/b-3.2-3 + ms-learn 3.4/3.5 + insidecloud 3.13/3.14/3.20; the d3 scenario_matching seat |
  | C-031 (d2, public/private endpoints — **blueprint-only**) | row b-2.2-6 only; `priority: normal` by computation — one of the 11 concepts no accessible practice source tests |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: Microsoft public
  publication ×3 / free named-author sampler / free public quiz, all classification-only).
  No forums, no exam-experience threads, no NDA'd content registered. **Dump-screen evidence:**
  sources.md §Excluded records the ExamTopics corpus + nine mirrors, the Ditectrev bank
  (verbatim dump match + no licence), two MIT repos that scrape it (a licence cannot launder
  recalled exam content), a paywalled bank, and unlicensed re-hosts — all screened by content,
  lowest-ids-first, with the method recorded. Residual risk carried forward: `insidecloud-az900`
  has **no named individual author and no licence statement** (screening found no dump
  correspondence; basis = free public publication + classification-only use).
- [ ] **6 · Bank size approved** — 65 originally-authored items for the highest-volume Azure
  entry-level certification; S4 effort ≈ 65 items across 3 domain batches. Ratio decision 4 below.
- [ ] **7 · Single-source / confidence flags** — the build is **convergent overall (49/65 = 75%
  attested by ≥2 independent authors)** but three slices are flagged: (a) **11 blueprint-only
  concepts** (17% — incl. public/private endpoints, Migrate/Data Box, external identities, the
  benefit bullets, portal + command surfaces) plus five folded blueprint-only halves rest on the
  study guide alone; (b) **5 Microsoft-pair concepts** are corroborated only by the vendor's own
  curriculum and are hand-set `priority: normal` (the five intended `concept-convergence` WARNs —
  table in `master-inventory.md`); (c) **every format-mix number is low-confidence**: 135 of 145
  accessible items are single choice and only the 10-item Tutorials Dojo sampler demonstrates
  Microsoft's non-MC shapes. Exit for all three: the Tier-1 official Practice Assessment
  (decision 1).

## Five decisions for Oliver

1. **Microsoft Learn account — yes or no?** The free official Practice Assessment (assessmentId
   23, unlimited retakes, authored by the certification team) is the only source that can
   corroborate the blueprint-only slice and the only vendor-authored calibration for format mix
   and difficulty — and it sits behind a Microsoft Learn sign-in; no account was created
   (free-first / no-signup rule; wall verified hard, [`sources.md`](sources.md#ms-practice-assessment--pending-access-deliberately-not-accessed)).
   Authorising a sign-in enables a later S2 top-up + S3 delta pass that recomputes convergence.
   Declining keeps the flags in check 7 as shipped.
2. **Exam length — ratify 50 items (modelled)?** Microsoft publishes only a program-level 40–60
   band; 50 is its midpoint. Every downstream number (14/19/17, bank 65) inherits this. The
   companion decision — keep the vendor's **45 exam minutes** against the modelled 50 items —
   is disclosed on the intro page (the real sitting's count varies inside the same 45 minutes).
3. **Pass threshold — ratify 70% (modelled proxy)?** The real exam is scaled 1–1,000, minimum
   700, and Microsoft warns this "may not equal 70% of the points"; Mockka has no scaled-score
   field. The proxy is disclosed in the manifest `$comment`, the intro page and
   `format_coverage`. Ratify, or set a different proxy.
4. **Bank ratio — ratify 65 = 1.30× (bottom of band)?** 65 is the size whose tie-free allocation
   (18/25/22) the honest merge meets exactly; every larger size forces a 19th d1 concept that
   only exists as a flashcard split. Alternative if more S6 selection freedom is wanted: 67
   (1.34×, 19/25/23) via the two named thin splits in `master-inventory.md` §bank-size — a
   documented quality trade, not free.
5. **Format approximations — ratify the S3 amendment?** The validator enforces exactly 4 options
   per single-choice item, so the S1-S2 sketch of two-option problem-solution members is not
   representable. As amended: problem-solution *judgment* inside four-option items; hot area →
   all-or-nothing multiple_response; build list → single_choice over orderings; drag-and-drop →
   scenario_matching; active screen, case studies and the problem-solution *series* not
   represented — all disclosed in `manifest.format_coverage`. (Ratchet candidates from the
   artefact sweep, for the next validator wave: wrong-options-inside-the-named-service-register;
   no invented-term distractors.)

## Validation record (S3 exit)

`pnpm validate az-900` — run at S3 exit, output in the handoff. Expected and accepted at this
stage: `bank-shape` (0 of 65 items), `concept-coverage` (65 uncovered concepts) and
`selection-shape` (empty form) — consequences of `questions.json`/`selection.json` being S4/S6
outputs. Everything structural and provenance-related is green; `concept-convergence` emits
**exactly the five intended WARNs** (C-001, C-012, C-057, C-058, C-061 — the same-author rule,
documented in `master-inventory.md`), and any different WARN set is a defect against this
checklist.
