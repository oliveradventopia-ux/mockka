# Agentic modes — the sweet spot {#agentic-modes}

The right context for an agentic workflow is **the least-ceremony mode that works**. Ascend only when a
signal demands it. This is the anti-overengineering guard; it is also the budget gate.

## The one rule that resolves the debate

**Split read from write.** Reads parallelize cheaply (independent branches, discardable); writes do not
(shared state, conflicting decisions compound). So: **parallelize discovery, keep building single-threaded.**
This reconciles the two camps — multi-agent fan-out wins for read-heavy research (Anthropic); a single agent
with shared context wins for coding (Cognition); Anthropic concedes "most coding tasks involve fewer truly
parallelizable tasks than research."

## The ladder — pick the lowest rung that works {#ladder}

| Mode | Use when | ~Cost | Default for |
|---|---|---|---|
| **Single LLM call** | one well-scoped transform, predictable output | 1× | trivial edits, extraction, classification |
| **Workflow** (fixed code path) | steps are predictable & decomposable — chain / route / parallel-sections / evaluator-optimizer | ~n× | the backbone; most build + gate steps ARE predictable |
| **Single autonomous agent** | open-ended step count, **write-heavy / coding with shared state** | ~4× | **coding** — shared context beats fan-out |
| **Multi-agent fan-out** | **read-heavy, parallelizable, exceeds one context window, high task value** | ~15× | research / discovery only; **writes stay single-threaded** |

Cost multipliers are order-of-magnitude (Anthropic: agents ≈ 4× a chat, multi-agent ≈ 15×; tokens × tool-calls
× model-tier explain ~95% of cost variance). Treat them as gates, not trivia.

## Routing signals {#routing}

- **write-heavy / irreversible / merged output** → single agent, shared context.
- **read-heavy / independent / discardable** → may fan out.
- **high value AND parallelizable AND exceeds one window** → fan out; otherwise don't.
- **extra agents must add *intelligence* (independent review, a second opinion), never *conflicting actions*.**
- **predictable steps** → a workflow (code path), not an autonomous agent.

## Budget gates {#budget}

- **Per-lane / per-role token budget**, enforced by [`engine/observe`](../../engine/observe/) — a run crossing
  the line **halts**, it doesn't lament.
- **Model routing by lane complexity** — cheap tier for docs / simple-FE; strong tier only for architecture +
  the review gate.
- **Multi-agent only when task value clears the ~15× bar** — decide before spawning, not after.
- **Fresh lean session per lane** — the evidence-backed fix for context-bloat (the real token sink is
  accumulated context in long-lived sessions, not retrieval).

## Anti-patterns (overengineering smells) {#anti-patterns}

- Reaching for an agent/fan-out when a single call or a workflow would do.
- Spawning parallel *writers* — they make conflicting decisions a merge then inherits.
- Stuffing context "just in case" — context is a finite budget with diminishing returns; load the smallest
  high-signal set, just-in-time.
- Building ceremony (a sub-agent, an index, a gate) with **no downstream consumer**.
- A bloated tool set — if a human can't say which tool fits, the agent can't either.

**Dogfood:** Stellar itself is write-heavy (code + docs) → built single-agent / shared-context + workflows,
with fan-out reserved for read-heavy research.
