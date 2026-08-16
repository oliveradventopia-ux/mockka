# UAT kit — human run-sheet (residual only) {#uat-kit}

Human UAT runs on the **residual** — what the [verify loop](verify-loop.md) could not objectively
self-verify. If a check can be a measured diff against ground truth, it belongs in the self-grade, **not**
here. "UAT on the user's real artifacts is its own gate class — synthetic-green ≠ user-ready."

## Case matrix (fill per surface) {#matrix}

One row per surface/state. Keep it to what a human must judge (subjective quality, real-artifact correctness),
not what the machine already proved.

| # | Surface / state | Expected (from ground truth) | Actual | Pass/Fail | Sev | Notes |
|---|---|---|---|---|---|---|
| 1 | … | … | | | | |

**Deferred / out-of-scope** (do NOT file as bugs): list anything not testable in this environment (e.g.
hosted-only, third-party-gated) so it isn't re-reported each round.

## Run-sheet template {#run-sheet}

```markdown
# Human UAT — YYYY-MM-DD · <build/branch>

## Setup
- built from <sha> · env <url/local> · seed <how>

## Surfaces
- [ ] A …
- [ ] B …

## Deferred / out-of-scope (not bugs)
- …

## Findings
| # | Area | Expected | Actual | Pass/Fail | Notes |
|---|---|---|---|---|---|
```

## Feeding findings back {#feedback}

Every FAIL becomes an input to a [fix-wave](fix-wave.md), and — if it's a behavior the machine *should* have
caught — a new regression case built from the **real failing shape**
([`build-practices.md`](build-practices.md#regression-discipline)), so the human never has to catch it twice.
