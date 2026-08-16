---
name: exam-publish
description: Run S6 for a Mockka exam — build the exam form (selection), run the publication preflight, prepare the Gate 2 checklist, and flip manifest status only after recorded sign-off. Use when asked to "publish <slug>", "run S6", "build the selection/exam form", "run the preflight", or "prepare Gate 2". Never flips status without a signed-off derivation/signoff.md.
---

# /exam-publish — S6 selection + publication preflight

Process contract for stage S6 of `methodology/00-pipeline.md`. Owner: exam-examiner. Precondition:
S5 complete for the current bank revision — eval artifacts exist, no dimension ≤2 outstanding, no
open bounces below the cap.

## 1 — Selection

Build `content/<slug>/selection.json` (v1: one form) to the manifest's exam total, per-domain
counts, and per-domain format mix. Seat `priority: high` (convergent) concepts first, then fill
per the selection guidance in `methodology/02-master-inventory.md`; reserves are substitutes, not
rejects. `pnpm validate <slug>` must be green on the selected form.

## 2 — Preflight

Run the full checklist in `methodology/06-provenance-publishing.md` §preflight, in order:
registry complete with licence basis → provenance chain resolves for every item → validator
green → eval artifacts + thresholds (`methodology/05-eval-rubric.md` §handoff) → per-exam README
statements present (§readme-template: provenance, independence, NDA, non-affiliation, licence) →
licences recorded both directions (CC BY 4.0 out; import allowlist + attribution in) →
`format_coverage` disclosure where the real exam exceeds the 3 supported formats
(§format-coverage).

## 3 — Gate 2 package for Oliver

Prepare and print: the preflight checklist with evidence, the Gate 2 sample list (all
scenario-matching items + 10 random + every auto-flagged item), the open adjudication queue, and
a pre-filled `derivation/signoff.md` from the template in
`methodology/06-provenance-publishing.md` §signoff-template — verdict columns left for Oliver.
Set `manifest.status` to `in_review` (preflight passed, awaiting the human). Then STOP.

## 4 — Publish flip (only after recorded sign-off)

Only when `derivation/signoff.md` records Oliver's PUBLISH decision: flip `manifest.status` to
`published` in its own commit referencing the sign-off, per the flip rules in
`methodology/06-provenance-publishing.md` §status. No sign-off in the tree → no flip, no
exceptions. Post-publish content changes re-open the gate proportionally (same §status rules).
