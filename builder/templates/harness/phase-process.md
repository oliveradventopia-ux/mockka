# Phase process — gates · scorecard · runbook {#phase-process}

The phase lifecycle in one doc: how a phase opens, runs, and exits. The project's phase plan fills in the
specifics; this is the universal shape.

## The gate {#gate}

Every phase exits through a **gate**. A phase is **not "done"** until: its Definition of Done is evidenced,
CI is green, the **review scorecard** (below) passes, and a **handoff doc**
([`handoff-schema.md`](handoff-schema.md)) is written. Gates order work **within a dependency chain**, not
across independent streams.

```
entry conditions met  ─►  build (runbook below)  ─►  CI green  ─►  review scorecard
        ▲                                                            │  pass → handoff → next phase opens
        └───────────────── fail → back to build with notes ─────────┘
```

- **Entry:** prior phase's handoff exists and its next-entry-conditions hold · required creds batch (if any)
  received in one batch · branch opened off `main`.
- **Exit:** DoD evidenced · CI green · scorecard signed · handoff committed.

**Pre-work lanes (blocked gates):** while a gate blocks on an **external** (creds, third-party approval),
work that doesn't depend on the blocked artifact proceeds on its own branch. Lanes **buy wall-clock, never
bypass a gate**; a DoD must never hinge on a third-party queue — wire the dependent piece behind a flag and
flip it when the external clears.

## The quality gate (review scorecard) {#scorecard}

The **adversarial** gate. The review-manager checks the phase against spec + standards and **signs a
scorecard**. It is independent: **it never writes the code it reviews**.

**Machine-proven (CI-owned)** — the reviewer confirms green, does not re-judge:

| Dimension | Proven by |
|---|---|
| Decoupling / drift | `harness_drift_check` (R1/R2/R5) in CI |
| Index coverage | `index_check` (R7) in CI |
| Regression corpus growth | `regression_guard` status (scale-gated) |
| Secrets | secret-scan job |
| Hygiene | CI green on a feature branch (never `main`); conventional commits |
| Project-specific proofs | *(fill in project-brief: e.g. schema-validate, tenancy tests, typecheck)* |

**Judgment (reviewer-owned)** — what machines can't check; where the gate's time goes:

| Dimension | Pass means |
|---|---|
| Spec conformance | meets the phase plan's DoD |
| Guardrail judgment | no hard-rule violation; runtime touches honor the project's guardrails |
| Self-grade quality | the verify-loop's ground-truth checks are meaningful, not gamed ([`verify-loop.md`](verify-loop.md)) |
| Design (UI phases) | matches the project design system; responsive verified |
| Docs / drift-back | doc-map / backlog updated; no stale single-owner facts; journal + lessons written |

**Verdict:** **PASS** (signs; may exit) · **PASS-with-notes** (follow-ups → backlog; may exit) · **FAIL**
(back to build; no merge on FAIL).

**How it's run:** the `review-manager` agent + review skills (`/code-review` · `mp-review` ·
`superpowers:requesting-code-review`); for plans, the `/plan-*-review` skills. A `/codex` second opinion is
**optional, never a gate blocker**.

## The runbook (the loop, every phase) {#runbook}

1. **Open** — confirm entry conditions; request the creds batch if needed (one batch). Branch off `main`.
2. **Brainstorm/plan (if creative)** — `superpowers:brainstorming` → `superpowers:writing-plans`.
3. **Build (TDD)** — `superpowers:test-driven-development`: red → green → refactor. Cite harness rules; don't
   inline them. Worktrees for parallel streams.
4. **Self-verify** — `npm run gate` (index-check · drift · tests · regression-guard); for UI, `/browse` +
   `design-review`. Run the [verify-loop](verify-loop.md) self-grade before requesting review.
5. **Review gate** — request the review scorecard; fix FAILs.
6. **Journal + learn** — everything → `docs/journal/`; capture reusable insights → `learning/LEARNING.md` per [`learn-loop.md`](learn-loop.md), and report them in the handoff `Learnings` field.
7. **Handoff + PR** — write the handoff; PR to `main`; merge on green + scorecard. Tear the lane down on merge
   ([`build-practices.md`](build-practices.md#lane-hygiene)).

**Roles in the loop:** tech-manager builds · uxi-manager owns UI/FE · research-manager supplies cited inputs ·
review-manager gates (never builds) · OA0 routes forks to the human.

## AFK orchestration (multi-lane runs) {#afk-orchestration}

Throughput/cost rules for unattended multi-lane builds (evidence: prior runs saw ~98% subagent spend, most
tokens in oversized contexts, and a multi-hour cap stall). These tighten *how* the process executes; they add
no new gates.

1. **Fresh session per lane — never one long-lived orchestrator context.** The handoff carries state between
   lanes; the orchestrator session holds only the dependency DAG + handoff pointers.
2. **Model routing by lane complexity** — docs/simple lanes → cheap tier; standard → default; architecture +
   the review gate → strongest tier. Watch the gate-rejection rate per tier; a down-routed lane that bounces
   costs more than it saved.
3. **Merge policy** — halt-on-red · overlap-triggered update · auto-revert, with separation of duties
   ([`build-practices.md`](build-practices.md#merge-policy)).
4. **Rate-limit checkpoint** — before a cap window, checkpoint run state so a capped session **resumes at
   reset instead of idling**.
5. **Budget guard on** — [`../../engine/observe`](../../engine/observe/) meters the run; a budget crossing
   halts it ([`../../engine/guard`](../../engine/guard/) bounds any loop).

### Operating modes — attended vs AFK (per run) {#operating-modes}

Merge authority depends on the session's permission mode, chosen per run:
- **Attended (default).** A human is present; the reviewer records the pass, **the human merges**.
- **AFK / autonomous (opt-in).** The human declares "this is an AFK run"; the orchestrator merges on **green
  CI + an independently-applied review pass**. Legitimacy rests on documented separation of duties + branch
  protection + the PR-timeline audit — not on who ran the command (the classifier judges by *action*, not
  *actor*).

**Phase complete =** DoD met · CI green · scorecard PASS · handoff committed. Only then does the next gate open.
