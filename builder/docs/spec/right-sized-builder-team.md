# The right-sized builder team — spec {#spec}

The thing that compounded across four builds was never the app — it was the way a team of AI agents learned to
build without a human in the room. Stellar extracts that, **right-sized**: the load-bearing core is always on;
everything else is gated by *mode* and *scale* so a new/solo project is never overengineered from commit 1.

## Keep (load-bearing) · Cut (ceremony) · Add (closed the loop)

**Keep** — the parts that gate irreversible actions or compound value:
- Decoupling (cite-don't-inline; one owner per fact) + drift-check.
- TDD; verification-before-completion; handoff-as-contract.
- Determinism (no LLM in the sequencing/arithmetic/layout path); fail-closed/fail-fast.
- The regression *engine* (registry → scorecard → guard → compare), as a kernel with an **empty** registry.
- Phase gate + review gate (independent reviewer).

**Cut** — the SWOT-named fat (do not carry into a new project by default):
- Two things both called "harness" (naming collision) — Stellar uses `templates/harness/` (team harness) and a
  project's own runtime docs; no collision.
- A flag seam with zero consumers.
- author≠reviewer≠merger enacted as theater in a solo attended session → **mode-gated (AFK only)**.
- 2×/lane judged evals; a GA-grade regression fleet built pre-first-user → **scale-gated**.

**Add** — closed the loop (cheap, closes measured failures):
- `observe/` — live token/time/spend meter + budget halt (closes the ~300k-token runaway class).
- `guard/` — per-call timeout + max-iteration fail-fast (closes "agent loops instead of failing").
- `verify-loop.md` — one closed loop (recon-grep → ground-truth → self-UAT ↔ fix → escalate residual) that
  shrinks human UAT to the residual.
- `agentic-modes.md` — the sweet-spot rubric (right-sized mode selection = the anti-overengineering guard).

## Gating matrix — what turns on when {#gating}

| Discipline | always | mode-gated (AFK) | scale-gated (Nth user) |
|---|---|---|---|
| Decoupling · TDD · determinism · fail-closed · verify · handoff | ✅ | | |
| Right-sized agentic mode · measured self-grade · KISS/YAGNI | ✅ | | |
| Observability + budget halt · loop-guard | ✅ | | |
| Separation of duties (author≠reviewer≠merger) | | ✅ | |
| 2×/lane judged evals · full regression fleet | | | ✅ |
| Tenancy/RLS · region gating · GA hardening | | | ✅ (multi-user) |

**Operating modes:** *attended* (default; human is the final actor / merges) vs *AFK* (opt-in per run;
orchestrator merges on green CI + an independently-applied review pass). The auto-mode classifier gates by
**action, not actor**.

## Success = a new project adopts this in 3 steps

1. `node scaffold/stellar-init.mjs --into <project>` (stamps `templates/harness/` + `engine/` + `index/`).
2. Add `**Builder harness: harness/**` to the project's `CLAUDE.md`.
3. Fill in `harness/project-brief.md` (the one project-specific file). Done — no agent edits.
