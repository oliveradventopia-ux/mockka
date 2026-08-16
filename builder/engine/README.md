# engine/ — reusable, dependency-free kernels

Pure Node ESM, zero external deps. A project re-points its `package.json` scripts at these.

| Path | What | Entry |
|---|---|---|
| `guard/guard.mjs` | loop-guard: `withTimeout` + `LoopGuard` (per-step timeout + iteration cap) — fail-fast, don't spin | import |
| `observe/meter.mjs` | `RunMeter` — live token/time/spend, **fail-closed** on a budget crossing | import |
| `observe/cli.mjs` | summarize a `run-log.jsonl`, exit non-zero if over budget | `node engine/observe/cli.mjs <log>` |
| `eval/registry.json` | the single declaration of agentic paths + regression dimensions (ships EMPTY) | data |
| `eval/*.schema.json` | the registry + case envelopes | data |
| `scripts/eval_scorecard.mjs` | assemble the scorecard (RED/YELLOW/GREEN; empty → GREEN) | `npm run eval:scorecard` |
| `scripts/regression_guard.mjs` | the regression-gate: validate registry integrity | `npm run regression:guard` |
| `scripts/eval_compare.mjs` | tier-A per-dimension verdict flips vs the committed snapshot | `npm run eval:compare` |
| `scripts/harness_drift_check.mjs` | markdown link + anchor integrity (cite-don't-inline stays honest) | `npm run drift:check` |
| `scripts/control_byte_check.mjs` | no raw control bytes in tracked text files (rung-4 enforcement of L-0002) | `npm run bytes:check` |

Tests: `node --test` (co-located `*.test.mjs`). Everything runs with **no install**.

**How a project extends it:** add dimensions to `eval/registry.json`, drop per-dimension runners the scorecard
calls, and register agentic-path globs so `regression_guard` can enforce "touch a path ⇒ grow the corpus"
against a PR diff. The kernel ships empty because regression discipline is scale-gated.
