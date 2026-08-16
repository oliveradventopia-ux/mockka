# 02 · The master concept inventory (S3) {#master-inventory}

Stage manual for S3 in [`00-pipeline.md`](00-pipeline.md). Owner: exam-author, executing
`/exam-new`, working **only from the derivation artefacts** written in S2 (the
[clean-room rule](01-source-distillation.md#clean-room)). S3 ends at
[Gate 1](00-pipeline.md#pipeline) — nothing downstream starts until Oliver approves the inventory.

The output is Artefact C: `derivation/master-inventory.md` (the reasoning) plus `concepts.json`
(the machine-readable contract), with the manifest's blueprint numbers and the exam's
`authoring.json` fixed alongside. The CCAR-P instance
(`content/ccar-p/derivation/master-inventory.md`) is the worked reference.

---

## The method: union, then convergence {#method}

1. **Union the artefacts.** Every concept attested by any Artefact A or B enters the candidate
   list, tagged with the source(s) that attest it. Keep concept statements in your own words, one
   testable idea per concept — a syllabus rule that teaches three things becomes three concepts.
2. **Compute convergence — never assert it.** A concept attested by **≥2 independent sources**
   gets `priority: high`, and this is *computed from the data* (`sources.length >= 2` in
   `concepts.json`), not hand-labelled. The validator's `concept-convergence` check computes the
   same signal and surfaces every priority/convergence divergence as a warn-level finding —
   divergence (e.g. hand-tuned exam seating, as in ccar-p's 27) is allowed as documented
   authoring judgment, but it is always visible, never silent. Agreement across independent
   readings of the same blueprint is the best available proxy for exam weight, so high-priority
   concepts are seated into the exam form first at S6. "Independent" means independently
   authored — two pages by the same author are one source.
3. **Merge duplicates deliberately.** Where two artefacts describe the same idea at different
   granularities, merge rather than duplicate — and **document every merge** (format below). The
   merge log is what makes the inventory auditable instead of vibes.
4. **Reconcile the gaps in both directions.** What the syllabus teaches that practice sources
   never test; what practice sources test that the syllabus does not spell out. Both lists go in
   the inventory doc — the uncorroborated share is the argument for having merged at all (in
   CCAR-P, either source alone would have shipped a materially incomplete exam).
5. **Place every concept in a blueprint domain**, recording cross-domain placements explicitly
   (below).

### Merge-decision documentation format

A table in `master-inventory.md`, one row per consolidation that materially changed the count:

| Merged into | From | Rationale |
|---|---|---|
| `C-0nn` <winning statement> | <artefact-X phrasing> + <artefact-Y phrasing> | <why this is one concept, one line> |

And the headline numbers, always:

- total concepts; per-domain concepts vs bank items vs exam items (the arithmetic Gate 1 checks)
- source composition: % convergent / % from each single source

### Cross-domain placement notes

Syllabus modules rarely map 1:1 onto blueprint domains, and a source may teach a concept under a
different heading than the blueprint tests it. When `concept.domain` disagrees with where its
source rule lives, record it:

| Concept | Source rule (module) | Exam domain | Why |
|---|---|---|---|

The blueprint always wins placement — the paper must reproduce the blueprint's weighting, not the
course's chapter structure. The note is what stops a later session "fixing" the disagreement.

---

## The authoring contract {#contract}

The inventory is not a reading list — it is a contract the validator enforces:

- **Every concept is the primary concept of exactly one bank item.** Not "at least covered
  somewhere": exactly one item owns each concept. Secondary-concept tags are free; primary
  coverage is 1:1. This is what makes coverage checkable and the weak-concept dashboard honest.
- **Bank ≈ 1.35× exam size.** The bank must be enough larger than the paper that selection has
  real freedom (reserves are substitutes, not rejects), but not so large that authoring effort
  outruns value. CCAR-P: 85 bank / 63 exam = 1.35. Round to whole per-domain counts that sum
  correctly.
- **Sizing pressure works both ways.** Because concepts and bank items are 1:1, the concept count
  *is* the bank size. If the union produces **too many** concepts for the target bank, merge
  harder — over-split concepts produce near-duplicate items that the shingle check will flag
  later anyway. If it produces **too few**, deepen the distillation (split multi-idea rules,
  mine the named-risk register, add a Tier 4 source) — do not pad with filler concepts or widen
  one concept into several items.
- **Per-domain counts fall out of the blueprint weights.** exam items per domain = weight × exam
  total (rounded, sum-corrected); bank items per domain scale by the same ratio. If the merge's
  natural per-domain counts and the blueprint's disagree, the blueprint wins and the delta is
  named in the inventory doc.

`concepts.json` carries per concept: `id`, `statement`, `domain`, `sources[]` (registry/artefact
ids), the source rule reference where one exists, `vocabulary[]` (the verbatim terms from
Artefact B), and computed `priority`. Authoritative field shape:
`methodology/schema/` (see [`04-validation.md`](04-validation.md)).

---

## Alongside the inventory: manifest + authoring.json {#siblings}

S3 also fixes the two files Gate 1 verifies:

- **`manifest.json`** — the entire blueprint as data: domains + weights, exam/bank totals,
  per-domain format mix, time limit, pass mark, option counts per format, locale, pattern caps
  (from the Artefact A frequency analysis), `blueprint_version`, `source_checked_date`,
  `format_coverage` disclosure where the real exam uses formats beyond the supported three
  ([`06-provenance-publishing.md`](06-provenance-publishing.md#format-coverage)), and the
  provenance block.
- **`authoring.json`** — the per-exam theme set (declared, not inherited — the starter set for
  architecture-style exams is in [`03-authoring-guide.md`](03-authoring-guide.md#themes)), any
  pattern-registry extensions (`E01…`), and the vertical list scenarios draw from.

---

## Single-source degradation path {#single-source}

Some exams will arrive with a blueprint but only one usable independent source (or none beyond
the blueprint itself). The pipeline degrades honestly instead of blocking:

1. **Blueprint stays mandatory** — no degradation path exists around Tier 2.
2. **No convergence signal exists**, so no concept gets `priority: high` by computation. Seating
   priority at S6 falls back to blueprint weight and the author's judgment, and says so in the
   inventory doc.
3. **The build is flagged lower-confidence at Gate 1** — it ships with Oliver knowing that the
   inventory is one reading of the blueprint, not a corroborated one.
4. **The optional `syllabus_rules` layer stays off** (`manifest.layers.syllabus_rules: false`)
   when no syllabus-grade source exists — the player's weak-rule report degrades to weak-concept
   reporting, and the validator skips rule-coverage checks. With a syllabus but no practice
   source, the layer stays on and it is the calibration side (format mix, difficulty pitch,
   pattern frequency) that leans on defaults instead of an observed baseline.
5. **The exit is recorded**: which future source (a Tier 1 set the vendor has announced, a
   Tier 4 author to approach) would lift the build to convergent, so the vendor watch knows what
   to look for.
