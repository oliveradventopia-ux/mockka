# Non-goals — dropped by decision {#non-goals}

Recorded so they are not re-litigated. Both were examined against real numbers and dropped.

## Semantic graph / embeddings (gbrain) — DROPPED

**Why:** the whole builder harness a project carries is small and stable — a role-scoped read is
~0.8–3.3k tokens, the full surface ~34k tokens / 16 files, already 1-hop-routed by a flat `INDEX.md`
(~748 tokens). The corpus fits in context and is already hand-indexed. A semantic layer adds paid embeddings
(trips free-first), rewrites the always-loaded `CLAUDE.md` (a standing token tax), and a 25–35 min reindex —
to solve a retrieval problem this harness does not have. The measured token sink is **context-bloat**
(accumulated long-lived context), which **fresh lean sessions** fix and a graph does not.

**A vault doesn't save tokens — retrieval discipline does:** keep knowledge outside the prompt, load only the
relevant note, use fresh sessions. See [`../templates/harness/agentic-modes.md`](../templates/harness/agentic-modes.md#budget).

## Vault app (Obsidian) — DROPPED

**Why:** agents read plain markdown either way; the graph view is a *human* UI they never consume. Standard
relative links are clickable in VS Code/GitHub already. Bolting a semantic plugin (e.g. Smart Connections) onto
a vault reintroduces the exact same paid-embedding + reindex cost as gbrain. Stellar depends on **no vault app
and no plugin** — the files are plain markdown, so any editor opens them.

## The gate (for a *future* project, never baked into Stellar)

A semantic layer only earns its keep when a project's **code** corpus reaches cross-package call-graph scale
(tens of thousands of LOC where `code-callers`/`code-refs` questions are frequent and grep over-returns), AND
measurements show *retrieval* cost (tokens burned *finding* docs), not *context-bloat* cost (tokens *carrying*
them). That is a future project's call to make for itself. Stellar ships neither.
