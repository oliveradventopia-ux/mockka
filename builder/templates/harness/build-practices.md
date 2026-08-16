# Build practices {#build-practices}

The engineering disciplines every phase follows. These *cite* [`principles.md`](principles.md); this is the
how-to, not a second source of truth.

## Git & branches {#git}

- **Feature branches only; never commit to `main`.** Short-lived `feat/*` · `fix/*` · `docs/*` · `chore/*`
  (a project may add stream prefixes at scale).
- **Conventional commits** with scope: `feat(scope): …`. End every commit with the current model's co-author
  trailer.
- **`npm run gate` before opening a PR** (the local mirror of CI). **Never push to `main`; never merge red.**
- Destructive git ops (`reset --hard`, force-push, `branch -D`) need **per-use approval** (global rules).

### Lane hygiene (AFK / parallel builds) {#lane-hygiene}

Squash-merge writes a NEW commit to `origin/main` and never marks the source branch merged-by-SHA, so
worktrees, lane branches, and a stale local `main` accumulate unless cut at the source. Forward-only
discipline (the orchestrator owns it):
- **Local `main` is a read-only mirror.** Fetch/merge `--ff-only` (fails loudly if `main` was dirtied);
  re-sync at every lane teardown so the IDE shows the real tip mid-run.
- **Teardown at merge, not "later".** The moment a lane's PR merges green, `git worktree remove` that lane's
  worktree (**symlink-safe — never `rm -rf`**) and delete its branch (local + remote). Teardown only after the
  PR state reads **MERGED** (not `git branch --merged`, which lies about squash-merges).
- **Worktree isolation stays mandatory** for parallel lanes; single-lane work may use the main checkout.
- **Forward-only — no backward-correction.** Already-accumulated worktrees/branches are left as-is; a one-time
  cleanup sweep needs **named per-use approval** (destructive-class).

### Merge policy (AFK / parallel builds) {#merge-policy}

Three orchestrator-owned guardrails:
1. **Halt-on-red.** A red `main` freezes ALL merges; a fix-forward lane is dispatched before anything else lands.
2. **Overlap-triggered update.** Before merging, compare the PR's changed files against files changed on `main`
   since its merge-base. **Any intersection → update the branch and re-run CI once**; disjoint PRs merge directly.
3. **Auto-revert trigger.** ≥2 red-`main` events in one AFK run → re-enable strict branch protection and keep it.

**Honest alarm semantics:** **red = broken, yellow = waiting, green = go** — never signal "not done yet" as
failure. A `review-gate` status is *pending* (yellow) until the scorecard signs; a fresh commit auto-dismisses
a stale pass.

### Separation of duties (author ≠ reviewer ≠ merger) {#separation-of-duties}

The verdict is only trustworthy if a *different* party records it than wrote the code — the whole point of the
reviewer's independence. **Mode-gated: enforced on AFK runs.**
- **Author** = the builder agent (tech/uxi). **Never applies its own review pass; never merges its own PR.**
- **Reviewer** = the **review-manager**. Applies `review:pass` / `review:held`; records the verdict, never
  writes the reviewed code.
- **Merger** = OA0 / orchestrator. Merges only a PR carrying an **independently-applied** `review:pass` on
  green CI.

Real separation even in one session — distinct agents, distinct contexts; the PR timeline is the audit trail.
(The auto-mode classifier judges by *action*, not *actor* — see
[`phase-process.md`](phase-process.md#operating-modes).)

## Testing {#testing}

- **TDD**: write the failing test first. Bugs → `superpowers:systematic-debugging` / `/investigate` (root
  cause before fix).
- **Pure functions** (scorer/renderer) get deterministic unit tests; no LLM in the arithmetic/layout path.
- **Project-specific proofs** (tenancy/RLS, schema conformance, fidelity) are declared in `project-brief.md`
  and proven, never assumed.

## Regression discipline {#regression-discipline}

**Scale-gated** (light for solo; full fleet at multi-user). Agentic behavior regresses *observably* only
through accumulated, re-runnable cases — eyeballing a non-deterministic system doesn't scale. The discipline
is **outcomes, never steps**:
1. **Touch a registered agentic path ⇒ grow/touch the corpus.** Paths + dimensions live in
   [`../../engine/eval/registry.json`](../../engine/eval/registry.json) (the single declaration); cases
   conform to [`../../engine/eval/case.schema.json`](../../engine/eval/case.schema.json) and **only grow
   stricter**. Escape hatch: a `regression-exempt` label **plus** a body reason, countersigned by the reviewer.
2. **A scorecard exists and carries no RED at review time** (`npm run eval:scorecard`). YELLOW (judged dims
   not run) is valid evidence outside judged scoping.
3. **Baselines and floors ratchet up only** — a decrease is a gate failure unless the human approves it.
4. **Harness-changing PRs attach a compare report** (old vs new compiled harness; prompt edits are where
   silent regressions live).
5. **Every runtime flag carries a `removeBy` deadline** — an overdue flag is a red unit test, not a reminder.

## Decoupling (the load-bearing discipline) {#decoupling}

Harness owns rules/schemas; specs + code **cite the anchor / import the schema** — never inline.
[`../../engine/scripts/harness_drift_check.mjs`](../../engine/scripts/harness_drift_check.mjs) gates it. A new
rule goes in the harness; everything else points at it.

## Secrets & cost {#secrets}

`.env*` never committed (only `.env.example`); secret-scan in CI. **Project-isolated keys — never reuse another
project's credentials.** No money/credits without explicit approval; **free-first**.

## Journaling & memory {#journaling}

One owner per fact. Current state → backlog; why → `docs/journal/decisions/`; lessons → `learning/LEARNING.md`.
One journal: `docs/journal/` (harness changes tagged `[harness]`).
