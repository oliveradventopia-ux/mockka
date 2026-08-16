# Verify loop — the closed, self-grading loop {#verify-loop}

**Goal: minimize human UAT time.** Human UAT time is a function of how *little* the machine can objectively
self-verify. Every check expressible as a **measured diff against captured ground truth** is a check the human
never makes. This loop folds the **grep loop + self-UAT + fix loop** into one engine, so a human sees only the
irreducible residual.

Principle (extracted from full-parity clone pipelines, generalized): *a build is trustworthy when the machine
grades its own output against captured ground truth and closes the gap before a human looks.*

## The six stages {#stages}

| Stage | What it does | Mode ([`agentic-modes.md`](agentic-modes.md)) |
|---|---|---|
| **1. Recon (grep loop)** | Exhaustively enumerate the **acceptance surface** — every state, edge-case, requirement — via agentic search (grep/glob/read). **Sampling one state = broken recon.** | read-heavy → fan-out OK |
| **2. Ground-truth capture** | The objective acceptance spec = **measured** values / real artifacts (computed styles for UI; expected outputs/contracts for BE). **No eyeballing, no placeholders** (ties [`principles.md`](principles.md#determinism)). | deterministic |
| **3. Spec → rulebook + order** | Distil measurements into one **owned** spec; plan foundation-first ([`principles.md`](principles.md#decoupling)). | single agent |
| **4. Build** | Lock the shared foundation, then parallelize leaves **bound to the spec** (cite, don't inline). | write → single-threaded core, parallel leaves |
| **5. Self-UAT ↔ Fix** | Build reads its **own measured output**, diffs vs the ground-truth spec → gap list → fix → re-grade → **converge under [`../../engine/guard`](../../engine/guard/)** (max-iter / gap-threshold). | self-grade = independent-reviewer *intelligence*; fix = single-threaded ([`fix-wave.md`](fix-wave.md)) |
| **6. Escalate residual** | Human UAT sees **only** what can't be objectively self-verified (irreducibly subjective / real-artifact judgment) — [`uat-kit.md`](uat-kit.md). | human |

## Wiring (not new infrastructure) {#wiring}

- **Grep loop = recon front-end.** Agentic search *is* the discovery mechanism (and why no embeddings are
  needed — see [`../../index/NON-GOALS.md`](../../index/NON-GOALS.md)).
- **Self-grade = the regression engine.** Outcomes not steps; **drive behavior, not presence** (a smoke that
  checks presence passes while bugs ship). Cases live in
  [`../../engine/eval/registry.json`](../../engine/eval/registry.json).
- **Fix = the converge back-end** ([`fix-wave.md`](fix-wave.md)).
- **[`../../engine/observe`](../../engine/observe/)** meters the loop; **[`../../engine/guard`](../../engine/guard/)**
  bounds it (converge or fail-fast — never spin).

## Depth is mode/scale-gated {#depth}

Never heavier than the task warrants:
- **UI clone / redesign** → pixel/computed-style diff vs the captured ground truth.
- **BE feature** → contract / expected-output diff.
- **Small change** → a smoke that **drives behavior**, not one that asserts an element is present.

**The payoff:** everything measurable is closed by the machine first; human UAT shrinks to the residual.
Measure the human-UAT surface before vs after — it should shrink.
