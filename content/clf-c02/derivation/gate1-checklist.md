# Gate 1 checklist · CLF-C02 — for Oliver

Produced at the end of S3 (exam-author, 2026-08-17) per `methodology/00-pipeline.md` (Gate 1).
**No approval, no S4.** Evidence pointers below; the reasoning artefact is
[`master-inventory.md`](master-inventory.md).

## The seven standard checks

- [ ] **1 · Blueprint numbers verified against the official exam page** — the S1/S2 pass read the
  official exam guide in full (PDF at
  `https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf`,
  facts recorded in [`sources.md`](sources.md) §"Blueprint facts recorded for the manifest").
  To verify first-hand: domains + weights 24/30/34/12, exactly two item types (MC 1-of-4 /
  MR 2+-of-5+), scoring scaled 100–1,000 pass 700 compensatory, 50 scored + 15 unscored come from
  the guide; **65 questions / 90 minutes / 100 USD come from the exam detail page**
  (`https://aws.amazon.com/certification/certified-cloud-practitioner/`) — the guide does not
  state them. **Versioning caveat, different from AIF-C01:** the vendor publishes **no version
  string and no change-history table** for this guide; the manifest carries
  `blueprint_version: "CLF-C02 (unversioned; guide PDF build 2026-08-14)"`,
  `source_checked_date: 2026-08-16`. The recommended vendor-watch signal is a hash of the content
  outline + service lists, not the PDF (build date moves on every docs rebuild —
  [`sources.md`](sources.md) §source map).
- [ ] **2 · Weights sum to 100** — 24+30+34+12 = 100 (`manifest.json` domains; also Artefact B
  mapping table).
- [ ] **3 · Arithmetic holds** — exam: 12+15+17+6 = 50 ✓ (weight × 50 is **exact** for every
  domain, no rounding judgment); bank: 16+21+23+8 = 68 ✓; 68/50 = **1.36**, inside the 1.3–1.4×
  band, allocation tie-free per L-0008 ✓; per-domain format mix sums to exam_items
  (10+2 / 12+3 / 14+3 / 5+1) ✓. Deeper machine check recorded in
  [`master-inventory.md`](master-inventory.md): all **136 Artefact B concept rows are cited by
  exactly one concept** — nothing dropped, nothing double-counted. Enforced ongoing by the
  validator's `blueprint-arithmetic` + `concept-inventory` checks — see the validation record
  below.
- [ ] **4 · 5 concepts spot-traced** (one per domain + one blueprint-only; full chain =
  concept → derivation doc row(s) → registered source):
  | Concept | Traces to |
  |---|---|
  | C-011 (d1, cost-structure change — triple-voice) | `source-clf-blueprint.md` rows b-1.4-1/2/3 + `source-tss-mckenzie.md` items 1.4, 1.28 + `source-tss-declute.md` items 1.9, 1.16, 1.21 + `source-tutorialsdojo-sampler.md` item 1.10 → registry ids `clf-blueprint`, `tss-mckenzie`, `tss-declute`, `tutorialsdojo-sampler` |
  | C-018 (d2, responsibility-boundary sides) | `source-clf-blueprint.md` rows b-2.1-3/4 + `source-tss-declute.md` items 2.7, 2.12, 2.28, 2.32 |
  | C-051 (d3, storage models — triple-voice) | `source-clf-blueprint.md` rows b-3.6-1/2/4/5 + `source-tss-declute.md` items 3.4, 3.8 + `source-tutorialsdojo-sampler.md` item 3.8 |
  | C-061 (d4, purchasing options) | `source-clf-blueprint.md` rows b-4.1-1/3 + `source-tss-mckenzie.md` items 4.3, 4.8 + `source-tutorialsdojo-sampler.md` item 4.6 |
  | C-029 (d2, root-user protection — **blueprint-only**) | `source-clf-blueprint.md` rows b-2.3-2/9 only; `priority: normal` by computation; part of the root-user cluster the whole practice corpus never tests (high-value seed register) |
- [ ] **5 · Source registry legality confirmed** — every registered source carries a
  licence/permission basis ([`sources.md`](sources.md) §Registered sources: AWS public
  publications / free named-author articles / free public sample page, all classification-only).
  No forums, no exam-experience threads, no NDA'd content registered. **Dump-screen evidence —
  this is the most dump-contaminated AWS cert, and nine candidates were rejected with recorded
  evidence** ([`sources.md`](sources.md) §Excluded sources): ExamTopics corpus + its mirror sites;
  `nastaso/cloudcertprep` (two independent hits proving ExamTopics lineage: its q004 and q010 are
  dump items with the same options/keys); `Ditectrev` (same corpus independently confirmed, and
  no LICENSE file while sold commercially); `kananinirav` (dump item present + own-sitting notes);
  `Dev0psKing` (self-declared recall); a Medium repost; signup/paid portals; unattributable pages;
  Reddit threads. A permissive licence cannot launder recalled exam content. **One assurance
  caveat feeds decision 5 below:** `tutorialsdojo-sampler` screens clean on structure and style
  but publishes no originality statement — `[UNVERIFIED]`, flagged by S1/S2.
- [ ] **6 · Bank size approved** — 68 originally-authored items for AWS's highest-volume
  foundational certification. S4 effort ≈ 68 items across 4 domain batches. Sizing rationale
  (why 68 over 67): the d2 natural merge floor is 21 concepts — `master-inventory.md` §Result.
- [ ] **7 · Single-source flag** — the build is **half-convergent, and the shape was predicted at
  S1/S2**: 34/68 (50%) attested by the blueprint + ≥1 independent practice voice (computed, zero
  divergences; independence rule applied — the two TheServerSide articles share one item pool and
  count as ONE voice). The **other 50% is blueprint-only** and ships lower-confidence: no
  convergence signal, S6 seating falls back to blueprint weight + authoring judgment. The
  uncorroborated half concentrates exactly where the corpus is silent — Well-Architected pillars,
  root-user cluster, Task Statement 3.8's long tail (11 of 14 bullets), DMS/SCT, compliance
  evidence, cost mechanics beyond CAPEX/OPEX — which the artefacts argue are the highest-value
  items in the bank (drilled candidates have never seen them). One generous attestation is
  documented rather than silent: C-020 rests on an *implicit* practice contact
  (mckenzie 3.16 — `master-inventory.md` §Source composition). Exit recorded: the Tier-1
  official question set, decision 1 below. Full list: `master-inventory.md` §Reconciliation.

## Five decisions for Oliver

1. **Skill Builder top-up — run it for CLF-C02 too?** The free official 20-question CLF-C02 set
   (Tier 1, registered, **never accessed** — account wall) is the only source that can corroborate
   part of the blueprint-only half. At the AIF-C01 Gate 1 you approved creating the free Skill
   Builder account; the same account covers a later S2 top-up + S3 delta pass here. Confirm the
   top-up applies to this exam (it refines confidence, not the contract), or decline and keep the
   50% slice blueprint-only as flagged.
2. **Pass-threshold proxy — ratify 70%?** The real exam is scaled 100–1,000 with a 700 minimum,
   compensatory; not publicly convertible to a raw percent. The manifest proposes **70% raw** as
   the proxy (disclosed in `manifest.$comment` and the intro). Precedent: identical proxy
   ratified for AIF-C01. Ratify, or set a different proxy.
3. **Pacing — disclose or scale?** The manifest keeps the vendor's **90 minutes** against 50
   scored items (the real sitting is 65 questions incl. 15 unscored in 90 min → ~28% generous; a
   scaled limit would be ~69 min). Proposal: keep 90 and disclose (drafted in `format_coverage`),
   matching the AIF-C01 ratification.
4. **Multiple-response share — ratify 9/50 (18%), all choose-2-of-5?** The blueprint states no MR
   proportion and permits wider items (2+ keys of 5+ options); the three sources disagree
   (14% / 23% / 30%) and are unanimous that every observed MR item is choose-2-of-5 (80/80).
   The manifest sets 18%, inside the observed band, and keeps the corpus's 2-of-5 shape, with the
   blueprint's wider ceiling disclosed as uncalibrated in `format_coverage`. Ratify or adjust.
5. **Tutorials Dojo sampler — accept at lower screening assurance?** It is the build's only
   practice voice independent of the TheServerSide pool: it supplies 10 attestations, 4 of the
   34 convergent concepts owe their signal to it alone, and it is the corpus's only coverage of
   the partner/Professional-Services cluster and BYOL. Screen result: no dump correspondence,
   distinct house style — but no published originality statement (`[UNVERIFIED]`). Accept as
   registered (classification-only), or drop it and demote those 4 concepts to blueprint-only.

## Validation record (S3 exit)

`pnpm validate clf-c02` — see the run output in the S3 handoff. Expected and accepted at this
stage: `bank-shape` (0 of 68 items), `concept-coverage` (68 uncovered concepts) and
`selection-shape` (empty form) — all consequences of `questions.json`/`selection.json` being
S4/S6 outputs. Everything structural and provenance-related is green, and `concept-convergence`
emits zero warnings (priority is computed with zero divergences).
