# ADR-0003 — Pipeline agent team from day one; skills stay the process contract

**Status:** accepted (2026-08-16) · **Plan:** Decision 11

`exam-author` (S3–S4) and `exam-examiner` (S5–S6, never authors) are created as
universal, harness-discovering agents alongside the 4 `exam-*` skills, rather than
running the pipeline from skills alone. `research-manager` (existing) keeps S1–S2.

**Division kept deliberately sharp:** the skills + `methodology/` docs are the
versioned, auditable *process contract* (required by the anti-dumps provenance
posture); agent prompts carry *role and craft* only. The examiner's independence is
structural: separate agent, fresh context, no authoring surface (its toolset and hard
rules forbid editing `questions.json`); the author has no web tools (clean-room).

**Quality loop:** author → examiner scores vs rubric → below-threshold items bounce
back with the score report (cap 2, then Oliver) → recurring error classes graduate up
the enforcement ladder into authoring-guide rules or validator checks.

Agent definitions live in `~/.claude/agents/` (protected path — installed only with
Oliver's named confirmation; drafts in `docs/agent-drafts/`).
