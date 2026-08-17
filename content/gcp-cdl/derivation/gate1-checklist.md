# Gate 1 checklist · Google Cloud Digital Leader — for Oliver

Produced at the end of S3 (exam-author, 2026-08-16) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official exam page** — the S1/S2 pass read the
  official exam guide in full (PDF at
  `https://services.google.com/fh/files/misc/cloud_digital_leader_exam_guide_english.pdf`,
  facts recorded in [`sources.md`](sources.md) §"Blueprint facts recorded for the manifest").
  To verify first-hand: the six sections and their ~18/18/18/18/18/10 weights, 14 objectives and
  69 consideration bullets come from the guide; **50–60 questions / 90 minutes / 99 USD / two item
  formats (multiple choice, multiple select) come from the certification page**
  (`https://cloud.google.com/learn/certification/cloud-digital-leader`) — the guide does not state
  them. **Caveat to check knowingly:** Google publishes NO version number for this guide — the
  manifest's `blueprint_version: 2026-08-12` is the page-footer string "launched on August 12,
  2026" plus the certification-page banner, the only revision markers that exist. Manifest carries
  `source_checked_date: 2026-08-16`.
- [ ] **2 · Weights sum to 100** — 18+18+18+18+18+10 = 100 (`manifest.json` domains; the guide
  states each as "~n% of the exam").
- [ ] **3 · Arithmetic holds** — exam: 10+11+11+11+11+6 = 60 ✓; bank: 15+15+15+15+15+8 = 83 ✓;
  83/60 = **1.38, inside the 1.3–1.4 band** ✓; per-domain format mix sums to exam_items
  (9+1+0 / 10+1+0 ×4 / 5+1+0) ✓. Enforced by the validator's `blueprint-arithmetic` +
  `concept-inventory` checks — see the validation record below. **Note the two rounding rulings**
  (L-0008, reasoning in `master-inventory.md` §Sizing): bank 83 is the tie-free largest-remainder
  size nearest 1.35; exam 60 is NOT tie-free (five equal-weight domains, 4 leftover seats) — the
  documented tiebreak gives the short seat to d1 (fewest blueprint bullets, 8/69). Decision 2
  below offers the tie-free alternatives.
- [ ] **4 · Concepts spot-traced** (one per domain, incl. blueprint-only; full chain =
  concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-011 (d1, deployment-model choice) | `source-gcp-cdl-guide.md` row b-1.2-1 + `source-gcp-cdl-samples.md` items 1.1/1.2 + `source-whizlabs-cdl-free.md` item 1.1 → registry ids `gcp-cdl-guide`, `gcp-cdl-samples`, `whizlabs-cdl-free` |
  | C-022 (d2, product-by-workload) | `source-gcp-cdl-guide.md` row b-2.2-1 + `source-gcp-cdl-samples.md` items 2.4/2.5 + `source-whizlabs-cdl-free.md` item 2.1 |
  | C-036 (d3, six data-quality dimensions — **blueprint-only**) | `source-gcp-cdl-guide.md` row b-3.1-6 only; `priority: normal` by computation — representative of d3's 12/15 uncorroborated concepts |
  | C-047 (d4, migration-path choice) | `source-gcp-cdl-guide.md` row b-4.1-2 + `source-gcp-cdl-samples.md` item 4.3 (the no-code-change rehost item, the vendor's best construction) |
  | C-069 (d5, three A's + identity controls) | `source-gcp-cdl-guide.md` rows b-5.1-10/b-5.1-11 + `source-gcp-cdl-samples.md` items 5.3/5.5 + `source-whizlabs-cdl-free.md` item 5.1 |
  | C-078 (d6, resource hierarchy) | `source-gcp-cdl-guide.md` rows b-6.1-4/b-6.1-5 + `source-whizlabs-cdl-free.md` items 6.2/6.5/6.6 |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: Google public
  publications / vendor sample form readable without sign-in or submission / free named-author
  article, all classification-only). No forums, no exam-experience threads, no NDA'd content
  registered; **no answer key was taken from any source** (Google's form grades server-side — the
  key is not in the public payload). **Dump-screen evidence:** the [`sources.md`](sources.md)
  §"Excluded sources" table records 7 candidate classes screened OUT with evidence — the
  ExamTopics corpus + eight mirror brands, a GitHub repo that is dump-vendor ad copy, a 2021 ebook
  whose own header names a different certification, harvested Cloud Skills Boost quiz keys,
  unverifiable Quizlet decks, paywalled/account-walled vendors, and Reddit threads — plus
  item-by-item probes of both accepted practice sources against the dump corpus (no
  correspondence at ids 1, 9, 13).
- [ ] **6 · Bank size approved** — 83 originally-authored items for Google Cloud's entry-level
  business certification. S4 effort ≈ 83 items across 6 domain batches.
- [ ] **7 · Single-source flag — this build ships LOWER-CONFIDENCE, and the flag is loud.**
  Only 30/83 (36%) is convergent — the weakest composition of any Mockka build so far — and
  **every practice attestation predates the 2026-08-12 blueprint rewrite**. The uncorroborated 64%
  is concentrated in the heaviest-weighted, newest content: 12 of d3's 15 concepts (the ~18% AI
  section the 2026 rewrite created: agentic AI, Gemini Enterprise Agent Platform, AI Hypercomputer,
  BigQuery ML, data quality) and nearly all of objective 5.2 (Model Armor, AI Protection, Google
  Threat Intelligence, digital sovereignty). Convergence is *inversely* correlated with weight:
  the best-corroborated domain (d6, 7/8) carries only 10% of the paper — a shared practice-source
  bias, not a signal. Exit = the vendor's Google Skills learning path (decision 1 below), the only
  known source post-dating the blueprint. Full list: `master-inventory.md` §degradation note.

## Six decisions for Oliver

1. **Google Skills account — yes or no?** The vendor's free CDL learning path (graded module
   assessments) is the only accessible material newer than the 2026-08-12 blueprint and the only
   source that can corroborate the 64% blueprint-only slice — but it sits behind a Google Skills
   account wall; no account was created (free-first / no-signup rule). Authorizing a sign-in
   enables a later S2 top-up + S3 delta pass that recomputes convergence for exactly the weakest
   slice. Declining ships the build as flagged. ([`sources.md`](sources.md) §pending access.)
2. **Exam length 60 — confirm, or switch to a tie-free size?** Google publishes 50–60, not a
   scalar. The manifest's 60 (upper bound — a Mockka form is never shorter than a real sitting)
   forces a documented largest-remainder tiebreak (short seat → d1, fewest blueprint bullets).
   Alternatives needing no tiebreak: **50** (9/9/9/9/9/5, exact) or **55** (10/10/10/10/10/5).
   Switching is cheap now (S3 delta recomputes bank size + mix) and expensive after S4.
3. **Pass threshold — ratify 70%?** Google publishes NO passing score for any Google Cloud
   certification (pass/fail only, Certification FAQ). 70% is proposed as the **Mockka study
   standard** (aif-c01 precedent), recorded as such in the manifest `$comment` and disclosed to
   candidates in `format_coverage` and the intro. Ratify, or set a different standard.
4. **Multiple-select share — ratify ~10%?** Unpublished by the vendor and unobserved in the
   official sample set (29/29 single choice); sole datapoint is whizlabs' ~7% (stale, 2 items,
   both choose-2-of-5) `[UNVERIFIED]`. The manifest sets 6 of 60 (one per domain,
   choose-2-of-5). Ratify, or adjust.
5. **scenario_matching = 0 — confirm exclusion.** The real exam uses exactly two formats, both
   supported; Mockka's third format has no counterpart on this exam. The manifest zeroes it
   everywhere and `format_coverage` tells candidates so. Alternative (not recommended): present
   scenario-matching items as explicitly-labelled extra practice.
6. **Lower-confidence flag — acknowledge.** Check 7 above: the exam's newest, heaviest content is
   a single-source build by construction (no post-2026-08-12 practice source exists that is
   free, legal and accessible). Acknowledging ships S4 on blueprint weight + authoring judgment
   for that slice, with the exit recorded in decision 1.

## Validation record (S3 exit)

`pnpm validate gcp-cdl` — 30 checks, 0 warnings; 4 checks fail, all consequences of
`questions.json`/`selection.json` being S4/S6 outputs, expected and accepted at this stage:
`bank-shape` (0 of 83 items), `concept-coverage` (83 uncovered concepts), `selection-shape` and
`selection-format-mix` (both on the empty form). All 26 other checks green — everything structural
and provenance-related passes (`manifest-shape`, `intro-presence`, `concept-inventory`,
`blueprint-arithmetic`, `provenance-sources`, `concept-source-registry`, `source-derivation-link`),
and `concept-convergence` emits zero warnings (no priority divergences).

> **Gate 1 SIGN-OFF (Oliver, 2026-08-17): APPROVED for S4** — batch approval "Approve all". Open decisions in this checklist resolve per their recommended defaults unless amended at Gate 2.
