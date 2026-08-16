# ADR-0004 — Opik traces the builder pipeline only; the product stays untraced

**Status:** accepted (2026-08-16) · **Plan:** Decisions 10/14/15

Self-hosted Opik (Docker, local, free OSS) receives operational traces of pipeline
agent sessions (Claude Code OTel export + PostToolUse hook events): tool calls,
session flow, bounce iterations, judge-score runs.

**Boundaries:** (a) semantic decision records — `eval/*.json`, derivation docs,
sign-offs — stay in git as the provenance source of truth; Opik is a lens, never the
record. (b) The product ships zero user telemetry in P0; P1 observability is the
item-statistics loop over `attempts`, not app tracing. (c) Local Docker only — no
hosted Opik account.

**Related non-adoption:** LangGraph — rebuilding the pipeline as an API-calling
service would reverse the no-API-spend and agents+skills decisions; if the pipeline
ever becomes a user-facing service, use the Claude Agent SDK instead.
