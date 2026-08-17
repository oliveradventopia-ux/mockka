# Gate 1 checklist · SY0-701 — for Oliver

Produced at the end of S3 (exam-author, 2026-08-17) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official exam page** — the S1/S2 pass read the
  objectives PDF in full and byte-compared it across CompTIA's own Contentful CDN and an authorised
  partner mirror (sha256 `64e5a75d…`, 191,074 B, 21 pp; [`sources.md`](sources.md) §authenticity),
  then corroborated the TEST DETAILS and weights against the live comptia.org certification page the
  same day. To verify first-hand: domains + weights 12/22/18/28/20, "maximum of 90" questions /
  90 minutes / MC + performance-based come from the PDF; **scaled 100–900 with a 750 pass mark comes
  from the certification page** (the PDF states no pass mark). Manifest carries
  `blueprint_version: 5.0 (© 2023)`, `source_checked_date: 2026-08-16`. **Caveat attached — see
  decision 3 (alleged "Version 6.0").**
- [ ] **2 · Weights sum to 100** — 12+22+18+28+20 = 100; the PDF prints its own "Total 100%" row
  (`manifest.json` domains; Artefact B mapping table).
- [ ] **3 · Arithmetic holds** — exam: 11+20+16+25+18 = 90 ✓; bank: 15+27+22+34+24 = 122 ✓;
  122/90 = **1.36** (in the 1.3–1.4 band, tie-free allocation per L-0008) ✓; per-domain format mix
  sums to exam_items (10+1+0 / 17+2+1 / 15+1+0 / 21+3+1 / 15+2+1) ✓; per-domain concepts equal
  bank_items ✓. Enforced by the validator's `blueprint-arithmetic` + `concept-inventory` checks —
  see the validation record below.
- [ ] **4 · 5 concepts spot-traced** (one per domain, incl. one blueprint-only; full chain =
  concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-012 (d1, PKI trust machinery) | `source-comptia-sy0701-objectives.md` rows b-1.4-1/-2/-13/-14 + `source-jealarue-exam90.md` items 1.9, 1.10, 1.15 → registry ids `comptia-sy0701-objectives`, `jealarue-exam90` |
  | C-031 (d2, malware from behaviour) | rows b-2.4-1 + `source-comptia-practice-v7.md` item 2.1 + `source-jealarue-exam90.md` items 2.1, 2.2 — the only concept attested by all three sources' item rows |
  | C-057 (d3, data states) | row b-3.3-4 + `source-comptia-practice-v7.md` item 3.1 (the official set's cleanest state-discrimination item) |
  | C-088 (d4, access control models — **blueprint-only**) | row b-4.6-7 only; `priority: normal` by computation; Artefact B flags it as the largest single-objective gap in Domain 4 |
  | C-112 (d5, agreement types) | row b-5.3-3 + `source-jealarue-exam90.md` items 5.1, 5.12, 5.16, 5.26; seated as the d5 scenario_matching item |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: certification-owner
  publication / free vendor sample / public GitHub **flagged as decision 1**). No forums, no
  exam-experience threads, no NDA'd content registered. **Dump-screen evidence:** the exclusions
  table records the ExamTopics corpus + mirrors, five self-declared dump repos, the Hamada-khairi
  MIT repo (licence covers the app, banks are named Udemy/premium exports — AIF-C01 precedent), a
  recall-lineage repo and the Quizlet/Anki class, each with evidence. jealarue-exam90 itself was
  dump-screened before distillation: 0/1,450 stem pairs above 0.14 Jaccard vs the official corpus
  (dump banks carry the official ten; this carries none), lowest-id verbatim searches clean, house
  style absent from the recall corpus ([`source-jealarue-exam90.md`](source-jealarue-exam90.md)
  §dump-screening). CompTIA's own Authorized Materials Use Policy (certification revocation for
  dump use) is cited in `sources.md` and the manifest disclaimer.
- [ ] **6 · Bank size approved** — 122 originally-authored items for the highest-volume entry-level
  security certification. S4 effort ≈ 122 items across 5 domain batches. Includes ratifying the
  **merge-to-fit** decision: 237 blueprint rows → 122 family-level concepts (rationale and full
  merge log in `master-inventory.md`; the alternative — option 3 weight-proportional selection — is
  unrepresentable under the validator's 1:1 contract).
- [ ] **7 · Single-source flag** — the build is **convergent on paper** (82/122 = 67% attested by
  ≥2 sources) but the signal is thin: effective independent practice sources ≈ 1.2, and
  **68 of the 82 high concepts rest on jealarue-exam90 alone for their second source**. If
  decision 1 drops that source, this becomes a single-source build (blueprint + 10 vendor items)
  and ships lower-confidence. The 40 blueprint-only concepts are listed in `master-inventory.md`
  §degradation note; exits recorded there (Messer pop-quiz, ExamCompass — both mechanical-effort,
  not legality, questions).

## Five decisions for Oliver

1. **jealarue-exam90 — keep or drop?** The repository has **no licence file**; the author retains
   copyright. Usage is classification-only (concept/pattern annotation, no text reproduced) — the
   same basis AIF-C01 used for a freely published unlicensed article, but flagged rather than
   assumed. **Keep** → the convergence signal above stands. **Drop** → the source and its Artefact A
   are struck, `concepts.json` priorities recompute to ~14 high / ~108 normal, and the build ships
   as single-source, lower-confidence. ([`sources.md`](sources.md) §Gate 1 legality item.)
2. **Pass-threshold proxy — ratify 81%?** The real exam is scaled 100–900, pass 750, with no public
   raw conversion. The manifest proposes **81% raw** — the linear map (750−100)/(900−100) = 81.25%,
   the same logic as aif-c01's ratified 70% against AWS's 100–1,000/700 scale. Ratify, or set a
   different proxy. (Disclosed in `manifest.$comment` and `format_coverage`.)
3. **Blueprint revision — accept 5.0 with a pre-publication re-check?** Third-party document sites
   reference a "Version 6.0" of the objectives; no authoritative copy exists outside CompTIA's
   lead-capture form, and every secondary description reports identical domains/weights/details.
   Proposal: build against 5.0 now, re-verify the revision string from CompTIA's own download
   before the `published` flip. Alternative: fill the vendor form first (needs your say-so — it is
   a signup-adjacent action under free-first).
4. **Retirement horizon — proceed knowing the shelf life?** SY0-701 launched 2023-11-07; CompTIA's
   page says retirement is "usually three years after launch (estimated 2026)", and third-party
   providers report an SY0-801 preview around Oct 2026 (`[UNVERIFIED]`, no vendor date). A bank
   authored now has months, not years, before a blueprint bump forces a re-derivation. S3's view:
   the derivation machinery (registry, artefacts, merge log) is exactly what makes the SY0-801
   re-run cheap — but it is your authoring budget.
5. **Convergence top-up — authorize either mechanical source?** Professor Messer's pop-quiz archive
   (free, N poll interactions for N keys) or ExamCompass (~600 items, one per page, server-side
   scoring) would corroborate much of the 33% blueprint-only slice. Both are effort/traffic
   decisions, not legality ones. Declining keeps the slice blueprint-only, as flagged.

## Validation record (S3 exit)

`pnpm validate sy0-701` — see the run output in the S3 handoff. Expected and accepted at this
stage: `bank-shape` (0 of 122 items), `concept-coverage` (122 uncovered concepts) and
`selection-shape` (empty form) — all consequences of `questions.json`/`selection.json` being S4/S6
outputs. Everything structural and provenance-related is green, and `concept-convergence` emits
zero warnings (no priority divergences; priorities are computed, not asserted).
