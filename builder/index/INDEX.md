# INDEX — the librarian {#index}

Flat map-of-content. 1-hop route to any owning doc. **No semantic graph, no vault app** — plain markdown +
standard relative links (see [`NON-GOALS.md`](NON-GOALS.md)). Every doc-bearing markdown file appears here;
`index_check.mjs` (R7) fails CI if one is missing.

## Front door
- `../README.md` — what Stellar is, how to adopt · `../CLAUDE.md` — the guardrail + `Builder harness:` declaration
- [`../docs/spec/right-sized-builder-team.md`](../docs/spec/right-sized-builder-team.md) — the "define better" spec (keep / cut / add + gating matrix)

## The harness (`templates/harness/`) — what the agents read
- [`../templates/harness/00_index.md`](../templates/harness/00_index.md) — entry · per-role reading · memory rule
- [`../templates/harness/principles.md`](../templates/harness/principles.md) — the named canon (always / mode-gated / scale-gated)
- [`../templates/harness/agentic-modes.md`](../templates/harness/agentic-modes.md) — the sweet-spot rubric + budget gates
- [`../templates/harness/decision-tree.md`](../templates/harness/decision-tree.md) — authority · doors · batched questions
- [`../templates/harness/phase-process.md`](../templates/harness/phase-process.md) — gates · scorecard · runbook · AFK orchestration
- [`../templates/harness/build-practices.md`](../templates/harness/build-practices.md) — git · TDD · lane-hygiene · merge-policy · SoD · regression
- [`../templates/harness/verify-loop.md`](../templates/harness/verify-loop.md) — the closed self-grading loop
- [`../templates/harness/fix-wave.md`](../templates/harness/fix-wave.md) — the fix-loop runbook
- [`../templates/harness/uat-kit.md`](../templates/harness/uat-kit.md) — UAT case-matrix + human run-sheet (residual only)
- [`../templates/harness/handoff-schema.md`](../templates/harness/handoff-schema.md) — the phase-handoff contract
- [`../templates/harness/learn-loop.md`](../templates/harness/learn-loop.md) — the distributed learning practice (read/write/reconcile + routing)
- [`../templates/harness/project-brief.md`](../templates/harness/project-brief.md) — **the one project-specific file (fill me)**

## The engine (`engine/`) — reusable kernels
- [`../engine/README.md`](../engine/README.md) — guard · observe · eval scripts (dependency-free)

## Orchestration
- [`../orchestrator/OA0.md`](../orchestrator/OA0.md) — the lead-orchestrator role doc

## Learning & decisions
- [`../learning/LEARNING.md`](../learning/LEARNING.md) — Stellar's global-generic learnings (the canonical store)
- [`NON-GOALS.md`](NON-GOALS.md) — dropped: semantic graph / vault app (with the future gate)

## Journal (`docs/journal/`)
- [`../docs/journal/2026-08-16-p0-scaffold.md`](../docs/journal/2026-08-16-p0-scaffold.md) — P0 scaffold + review-gate fix-wave journal
- [`../docs/journal/decisions/README.md`](../docs/journal/decisions/README.md) — the decisions seam: product ADRs live at repo `docs/decisions/` deliberately
