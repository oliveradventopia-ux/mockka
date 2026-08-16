# Fix-wave — the fix-loop runbook {#fix-wave}

The reusable runbook for closing a batch of findings (from UAT, self-UAT, or a review). It is the **converge
stage** of the [verify loop](verify-loop.md); stop re-authoring it per wave.

## The loop {#loop}

1. **Findings in.** Collect findings (self-UAT gap list, or human UAT / review notes) with the *observed*
   behavior, not a guessed cause.
2. **Root-cause each — read-only first.** Confirm the cause with evidence before touching code
   (`superpowers:systematic-debugging` / `/investigate`). "CONFIRMED: <hypothesis> — proven at file:line."
   A fix without a confirmed root cause is a guess.
3. **Lane plan — exclusive file ownership.** Partition the fixes into lanes that **don't touch the same
   files** (collision-free parallelism). Each lane is a self-contained TDD brief: failing test → fix →
   acceptance.
4. **Parallel worktrees.** One lane = one isolated worktree ([`build-practices.md`](build-practices.md#lane-hygiene)).
   Small commits; **author ≠ reviewer ≠ merger** on AFK runs
   ([`build-practices.md`](build-practices.md#separation-of-duties)).
5. **Merge-train order.** Foundation/data lane first; others rebase onto it. Merge on green CI + review pass;
   tear the lane down at merge.
6. **Delta-gate = regression discipline.** A lane touching a registered agentic path adds/extends a corpus
   case and runs the compare ([`build-practices.md`](build-practices.md#regression-discipline)). **Deepen the
   smoke to drive behavior, not presence** — the classic miss is a smoke that passed while the bug shipped.
7. **Rebuild + re-verify.** Rebuild any compiled artifacts (the stale-dist trap), re-run the deepened
   self-UAT, and only then hand the human the **residual** ([`uat-kit.md`](uat-kit.md)).

## Convergence {#convergence}

The loop runs under [`../../engine/guard`](../../engine/guard/): a **max-iteration** cap and a
**gap-threshold**. If the measured gap isn't closing across iterations, **fail-fast and escalate** — don't
spin (the L-0004 class). [`../../engine/observe`](../../engine/observe/) meters the wave's cost; a budget
crossing halts it.

## Anti-patterns {#anti-patterns}

- Fixing a symptom before the root cause is confirmed.
- Lanes that share files (merge conflicts + conflicting decisions — see
  [`agentic-modes.md`](agentic-modes.md#anti-patterns)).
- Declaring green off a presence-checking smoke.
- Re-authoring this runbook per wave instead of citing it.
