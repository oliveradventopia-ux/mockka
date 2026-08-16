# Mockka

Multi-exam mock-exam platform + exam-compiler methodology. Generalizes
`~/LifeOS/ccar-p-mock-exam` into: per-exam content packages (`content/<slug>/`),
an exam-agnostic engine (`packages/engine/`), a Next.js player (`apps/web/`), and
an agent-runnable authoring pipeline (`methodology/` + `.claude/skills/`).

Plan of record: `~/.claude/plans/want-to-formally-scardfold-imperative-wirth.md`
(15 locked decisions, 2026-08-16).

**Builder harness: builder/templates/harness/**

## Hard rules

- **Anti-dumps, structurally:** every published bank item is originally authored
  (traceable to derivation docs) or `licensed_import` (commercial-compatible license
  recorded). Never reproduce source or live-exam text. The validator enforces the
  provenance chain; do not weaken those checks.
- **Clean-room:** distillation sessions may read sources; authoring sessions never
  open source texts — they work only from derivation artefacts.
- **Free-first:** no paid services, no account signups without Oliver's approval.
  LLM pipeline work runs in Claude Code sessions, never via API spend.
- **Product telemetry:** none in P0. Builder-side tracing goes to local Opik only.

## Git discipline

- Feature branches only; never commit directly to `main`.
- Imperative present-tense commit messages.
- `gitleaks git --staged` before committing; never commit `.env*` or secrets.

## Commands (root seam)

```bash
pnpm dev          # run the player locally on :4400 (3000 collides with jobber)
pnpm validate     # validate all content packages (or: pnpm validate <slug>)
pnpm typecheck    # tsc --noEmit
pnpm test         # node --test (engine + contrast tests)
pnpm build        # next build (prerenders every exam)
pnpm gate         # validate + typecheck + test + build — run before any push
```

## Testing

LIGHT harness: `node --test` with native TS type-stripping. No test frameworks.
