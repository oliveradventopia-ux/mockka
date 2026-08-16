---
name: exam-new
description: Start a new Mockka exam package — S1 intake + source registry, S2 distillation, S3 master inventory — stopping at Gate 1. Use when asked to "add exam X", "onboard a new exam/certification", "scaffold a new exam package", "start the exam pipeline", "register sources for an exam", or "distill sources / build the concept inventory" for a new exam.
---

# /exam-new — S1–S3 of the exam pipeline

Process contract for stages S1–S3 of `methodology/00-pipeline.md`. S1–S2 belong to
research-manager (the only role allowed to open source texts); S3 belongs to exam-author and works
from artefacts only. **This flow ends at Gate 1. Never continue into S4 (authoring) in the same
run — that is `/exam-author`, after Oliver approves Gate 1.**

## S1 — Scaffold + source registry

1. Scaffold the package: `node tools/new-exam.mjs <slug> "<Title>"` (refuses if
   `content/<slug>/` exists).
2. Register sources in `content/<slug>/derivation/sources.md` per the registry format and the
   source-tier hierarchy in `methodology/01-source-distillation.md` (§tiers, §registry). Tier 2
   blueprint is mandatory; forums/exam-experience threads are always excluded; every entry needs
   a licence/permission basis. Check `methodology/source-maps/` for the vendor's map; create one
   from `methodology/source-maps/TEMPLATE.md` if missing.
3. Record `blueprint_version` + `source_checked_date` in the manifest.

## S2 — Distillation (sessions here MAY read sources — this is the distillation session)

Write one derivation doc per source into `content/<slug>/derivation/source-<id>.md`:
- Artefact A per practice source, Artefact B per syllabus-grade source — templates and the
  zero-source-text invariant in `methodology/01-source-distillation.md` (§artefact-a,
  §artefact-b, §clean-room). Analytical classification only; Artefact A ends with the
  pattern-frequency table that will set the manifest's pattern caps.

## S3 — Master inventory (works from artefacts only; new session after S2 — the owner changes)

Per `methodology/02-master-inventory.md`: union the artefacts → `concepts.json` +
`derivation/master-inventory.md` (convergence computed as sources ≥ 2, merges documented,
cross-domain placements recorded); fill `manifest.json` with real blueprint numbers; declare the
theme set + verticals in `authoring.json` (starter themes:
`methodology/03-authoring-guide.md` §themes). Bank ≈ 1.35× exam size; every concept will be the
primary concept of exactly one item.

## STOP — Gate 1

End the run by printing the **Gate 1 checklist for Oliver** with evidence filled in — the
checklist items are defined in `methodology/00-pipeline.md` (Gate 1 section): blueprint numbers
verified against the official page, weights sum 100, arithmetic holds, 5 concepts spot-traced,
source-registry legality confirmed, bank size approved, single-source builds flagged
lower-confidence. Then stop and wait for Oliver's approval.
