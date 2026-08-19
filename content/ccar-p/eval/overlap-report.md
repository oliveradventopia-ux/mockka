# Overlap screen — ccar-p (S5 round 1, 2026-08-19)

Executed per [`methodology/05-eval-rubric.md#overlap`](../../../methodology/05-eval-rubric.md).
Owner: exam-examiner. Bank revision under screen: `questions.json` blob
`fd57cb8072987a8595c691e51847ff9d49d89287` (last content commit `f0f52b7`), HEAD `69fbf6e`.

## Which branch of the screen applies

**Sources were never held as text.** All three registered sources
([`derivation/sources.md`](../derivation/sources.md)) are classification-only or facts-only inputs;
no source text was retained in the repository or anywhere the authoring lane could reach:

| source id | type | what was held | text retained? |
|---|---|---|---|
| `ccar-p-blueprint` | public_blueprint | domain list, percentage weights, format profile — facts, not prose | no |
| `purcell-practice-set` | public_practice_set | per-item concept mapping and distractor-pattern frequencies only | no |
| `ccar-p-course-recap` | own_course_notes | the 24 architectural rules and the concept vocabulary, already distilled | no |

A shingle-overlap comparison is therefore **not possible** — there is no held text to compare the
bank against. Per §overlap, this report records the **process control** instead, and says so
plainly rather than reporting a scan that did not happen.

## The process control (the evidence)

1. **What the authoring lane worked from.** Every item traces
   question → `primary_concept` → `concept.sources[]` → registry entry → derivation doc. That
   chain is machine-verified on this exact tree by the validator's `concept-source-registry` and
   `source-derivation-link` checks (both `[pass]`, run 2026-08-19).
2. **Those artefacts contain zero source text.** The clean-room rule
   ([`01-source-distillation.md#clean-room`](../../../methodology/01-source-distillation.md)) is
   restated in `derivation/sources.md` §Clean-room statement: distillation sessions read the
   sources and emitted the artefacts; authoring sessions never opened a source text and worked
   only from the artefacts.
3. **Artefact commit hashes** (the control's fixed point):

   | artefact | blob sha1 | last commit |
   |---|---|---|
   | `derivation/sources.md` | `12837bf1b3eddfe4b2529b17841597813816e8ed` | `b0a2e82` |
   | `derivation/purcell-distillation.md` | `3802cd88b3a5630a8bade4898b5fe36b3ceda2c1` | `baee27f` |
   | `derivation/recap-concepts.md` | `f9a50f5a1e0ab044e323e73cd7682991c994d4ae` | `baee27f` |
   | `derivation/master-inventory.md` | `afda1942454e4faa09cb6722df954953f127b9ae` | `b0a2e82` |

4. **Canonical vocabulary is an expected shared string** and is excluded from overlap findings
   per [Artefact B's bounded exception](../../../methodology/01-source-distillation.md). Terms such
   as *fixed workflow*, *autonomous agent*, *progressive context*, *guarded path*, *golden dataset*
   and *MCP server* are the subject matter's own vocabulary; their recurrence is required for the
   exam to be about the syllabus at all.

## What could be checked mechanically, and was

Within-bank originality is machine-checked on this tree and is green:

- `near-duplicate-stems` `[pass]` — no item stem is a near-duplicate of another
  (`near_duplicate_jaccard` 0.4).
- `option-pair-similarity` `[pass]` — no option pair inside an item collapses into a restatement.
- 85 distinct scenarios across 80+ named verticals (`authoring.json` `verticals[]`), each item a
  different organisation and situation.

## Finding

**No overlap finding.** No item bounces for re-expression, and no clean-room breach is indicated.
The control is the evidence; a text-level scan is unavailable by construction and its absence is
recorded here rather than papered over.

## Caveat carried to Gate 2

A process control proves the lane, not the output. If any Tier 1 source is later re-acquired as
text, the shingle comparison becomes possible and should be run against this bank revision
retrospectively — the branch taken here is a consequence of what is held, not a permanent
exemption.
