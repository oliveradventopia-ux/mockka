# Decision tree — authority & routing {#decision-tree}

Who decides what, and when the human is pulled in. The goal: **momentum** — drive to completion once scope is
locked, and reserve the human's attention for decisions only the human can make.

## One-way vs reversible doors {#doors}

- **Reversible (two-way) door** → **decide in-flight.** If a wrong call is cheaply undone (a refactor, a
  naming choice, an additive change), make it and keep moving. No "continue?" pauses once scope is locked.
- **One-way (irreversible) door** → **route to the human.** Anything hard/expensive to undo: spend, a public
  release, a destructive migration/delete, a schema/contract other systems depend on, a security-relevant
  default. Record the decision as an ADR (`docs/journal/decisions/ADR-NNN.md`).

Rule of thumb: *if you'd need approval to undo it, get approval to do it.*

## Batched questions {#batched}

Do not drip questions one at a time. **Gather the decisions and creds a phase needs and ask once, in a
batch, at phase entry.** A mid-build interruption for something that could have waited is a process defect.
Exception: a genuine one-way-door fork discovered mid-flight — surface it immediately.

## Hard-rule gates (always ask, never assume) {#hard-gates}

Inherited from global rules; these are never decided in-flight:
- **Spend / credits** — show the cost first; explicit per-use approval.
- **Destructive ops** — any `rm`/`reset --hard`/force-push/branch -D, `DROP`/`TRUNCATE`, bulk delete: list
  exact targets, classify reversibility, get explicit "yes, proceed".
- **Edits outside the project** — never touch another project or globally-shared config without named
  confirmation.
- **External publishing** — pushing anything world-visible.

## Standing authorizations (execute-and-report) {#standing}

A project MAY pre-authorize a **reversible** class in its `project-brief.md` so the team executes and reports
instead of re-asking each time — e.g. repo-config writes implementing an accepted ADR, activating
already-committed hooks, additive (non-destructive) migrations. Destructive members of the same class stay
per-use ask. If unset, default to asking.

## Merge authority — attended vs AFK {#merge-authority}

Per-run, by the session's permission mode ([`phase-process.md`](phase-process.md#operating-modes)):
- **Attended (default)** — the human is the final actor / merges.
- **AFK (opt-in per run)** — the orchestrator merges on green CI + an independently-applied review pass; rests
  on documented separation of duties, not on who ran the command.
