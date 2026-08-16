# Builder harness — start here (00) {#harness-index}

**This folder IS the builder harness**: everything the universal Builder-Team agents (`~/.claude/agents/`)
need about *how the team builds this project*. Read at invocation per the `Builder harness:` declaration in
the project `CLAUDE.md`. **The prompt carries the role; this folder carries the project.** Repo-wide routing:
[`../../index/INDEX.md`](../../index/INDEX.md) (the librarian).

## Folder map

| Doc | Owns |
|---|---|
| [`00_index.md`](00_index.md) (this) | entry · per-role reading · memory rule · escalation |
| [`principles.md`](principles.md) | the named canon (always / mode-gated / scale-gated) |
| [`agentic-modes.md`](agentic-modes.md) | the sweet-spot rubric — which building mode fits which task |
| [`decision-tree.md`](decision-tree.md) | one-way vs reversible doors · batched questions · attended/AFK routing |
| [`phase-process.md`](phase-process.md) | gates (entry/exit) · review scorecard · runbook loop · AFK orchestration |
| [`build-practices.md`](build-practices.md) | git · TDD · CI · lane-hygiene · merge-policy · separation-of-duties · regression |
| [`verify-loop.md`](verify-loop.md) | the closed self-grading loop (recon → ground-truth → self-UAT ↔ fix → escalate) |
| [`fix-wave.md`](fix-wave.md) | the fix-loop runbook (the loop's converge stage) |
| [`uat-kit.md`](uat-kit.md) | UAT case-matrix + human run-sheet (scoped to the residual) |
| [`handoff-schema.md`](handoff-schema.md) | the phase-handoff contract + template |
| [`learn-loop.md`](learn-loop.md) | the distributed learning practice (read/write/report + daily reconcile + routing) |
| [`project-brief.md`](project-brief.md) | **the one project-specific file** (stack · model · guardrail obligations) |

Anchors use the `{#kebab-id}` convention and are drift-checked by
[`../../engine/scripts/harness_drift_check.mjs`](../../engine/scripts/harness_drift_check.mjs). Never write
brace-wrapped ids in prose (they register as declarations).

## Per-role reading list {#role-reading}

| Agent | Read |
|---|---|
| tech-manager | `project-brief.md` (obligations) · `phase-process.md` · `build-practices.md` · `agentic-modes.md` |
| uxi-manager | `project-brief.md` (design tooling + obligations) · `phase-process.md` |
| review-manager | `phase-process.md` (the scorecard) · `principles.md` · `project-brief.md` |
| research-manager | `project-brief.md` |
| accounting-manager | `project-brief.md` (business model + obligations) |
| creative-manager | `project-brief.md` (design tooling) |
| gso-manager | `project-brief.md` (positioning · ICP · brand voice · channels) |
| ads-manager | `project-brief.md` (offer · margins · KPI targets · ad accounts) · `decision-tree.md` (spend gates) |

*(Load only your role's docs — not the whole harness. Fresh, lean session per lane; see
[`agentic-modes.md`](agentic-modes.md#budget).)*

**All agents** additionally follow [`learn-loop.md`](learn-loop.md) — read your role's learnings before acting,
write new ones as you go, and report them to OA0.

## Roster · escalation

- **Roster** — the eight universal Builder-Team agents (tech · uxi · review · research · accounting ·
  creative · gso · ads) live in `~/.claude/agents/`. This folder is their brief for *this* project.
  **Activation:** gso-manager works out of the box (free web tools); **ads-manager activates only when the
  project has ad accounts** — declared in `project-brief.md`; until then it plans/analyzes, never executes.
- **Decision authority** — the human is the principal. OA0 routes **one-way doors** and non-obvious forks to
  the human; reversible calls are made in-flight (no "continue?" pauses once scope is locked). See
  [`decision-tree.md`](decision-tree.md). A blocked gate escalates OA0 → human, never silently bypassed.

## Memory rule {#memory-model}

A builder that learns a durable project fact writes it to the **owning repo file** (one owner per fact) —
**never** to its private `~/.claude` agent memory (reserve that for cross-project role knowledge only).
