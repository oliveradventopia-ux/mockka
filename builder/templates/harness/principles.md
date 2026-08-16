# Principles — the named canon {#principles}

The disciplines every phase follows, each tagged by when it's on. **Always** = load-bearing core, never
skipped. **Mode-gated** = on for AFK/autonomous runs. **Scale-gated** = on at the Nth user / multi-user.
Right-sizing is the point: a solo/pre-launch project runs the core; ceremony activates only when it earns its
keep (see [`../../docs/spec/right-sized-builder-team.md`](../../docs/spec/right-sized-builder-team.md#gating) —
this is a stamped copy of that spec's matrix).

## Always

- **Decoupling** {#decoupling} — one rulebook, **cited not copied**; each fact has a single owning file;
  specs/code cite the anchor, never inline it. Drift-checked ([`build-practices.md`](build-practices.md#decoupling)).
- **TDD** {#tdd} — write the failing test first; you must watch it fail. Distinct from regression.
- **Determinism** {#determinism} — no LLM in the sequencing / arithmetic / layout path; pure-function
  scorer/renderer. Order comes from control flow, never a model.
- **Fail-closed / fail-fast** {#fail-closed} — budget/region/consent gates default to **blocked**; loops and
  tool calls **time out and error**, never spin ([`../../engine/guard`](../../engine/guard/)).
- **Verification-before-completion** {#verify} — evidence before "done"; run the check, confirm the output.
- **Handoff-as-contract** {#handoff} — state travels on a written handoff, not in a head
  ([`handoff-schema.md`](handoff-schema.md)).
- **Learning** {#learning} — every agent reads/writes learnings as it works; OA0 reconciles them daily into
  gated improvements — compounding, never autonomous ([`learn-loop.md`](learn-loop.md)).
- **Observability** {#observability} — per-run token/time/spend metered **live**, not reconstructed after a
  burn; a budget crossing halts the run ([`../../engine/observe`](../../engine/observe/)).
- **Measured self-grade before human** {#self-grade} — measure, don't eyeball; **drive behavior, not
  presence**; the machine grades its own output vs captured ground truth before a human looks
  ([`verify-loop.md`](verify-loop.md)).
- **Right-sized agentic mode + KISS/YAGNI** {#right-sized} — pick the least-ceremony mode that works; build no
  state/process/agent/index without a downstream consumer ([`agentic-modes.md`](agentic-modes.md)).
- **Structural enforcement** {#structural} — enforce invariants by CI / import-graph walls where cheap, not by
  discipline alone.
- **Idempotency / retry-safety** {#idempotency} — for any grant/consume flow (tool authorizations, leases,
  payments): grant-reconcile · latch-before-irreversible · serialize-in-DB. AFK re-runs must be safe.

## Mode-gated (AFK / autonomous)

- **Separation of duties** {#sod} — author ≠ reviewer ≠ merger; the reviewer records the verdict and never
  wrote the code; the classifier gates by **action, not actor** ([`build-practices.md`](build-practices.md#separation-of-duties)).

## Scale-gated (Nth user / multi-user)

- **Regression ratchet** {#regression} — behaviors become saved tests; the corpus **only grows stricter**;
  baselines/floors ratchet up only; flags carry a `removeBy` deadline. Light for solo; full fleet at scale
  ([`build-practices.md`](build-practices.md#regression-discipline)).
- **Tenancy / data isolation · region gating · GA hardening** — proven, not assumed, once real users exist.
