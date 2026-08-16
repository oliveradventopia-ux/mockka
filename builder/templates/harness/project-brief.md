# Project brief — Mockka {#project-brief}

**This is the ONE project-specific file.** Everything else in this harness is universal and cites these
anchors. Plan of record: `~/.claude/plans/want-to-formally-scardfold-imperative-wirth.md` (15 locked
decisions, 2026-08-16).

## Business / product model {#model}

- **What:** a multi-exam mock-exam platform + the exam-compiler methodology that builds the exams.
  Per-exam content packages (`content/<slug>/`) hold blueprint-weighted, originally-authored question
  banks; a Next.js player serves them; an agent pipeline (research-manager → exam-author →
  exam-examiner, executing the `.claude/skills/exam-*` process contracts) authors new exams.
- **User:** certification candidates preparing for professional exams; later, contributors who
  license in their own question sets.
- **Value / positioning:** the legitimate opposite of exam-dumps sites — "original + licensed,
  never harvested", enforced structurally by the provenance validator, not by policy prose.
- **Pricing:** free in P0/P1 (validate-first). Monetization is a P2 fork; it gates the study-assistant
  feature (per-user inference cost) and constrains inbound content licenses (commercial-compatible only,
  already enforced).
- **Scale triggers:** accounts/DB attempts + item-statistics loop at P1; pipeline RAG when the source
  corpus outgrows direct session reading; vendor-watch catalog engine at P1.

## Stack & tooling {#stack}

- **Runtime:** TypeScript everywhere. Next.js 15 App Router (`apps/web`, plain token CSS — no
  Tailwind), `@mockka/engine` (`packages/engine`, zero React deps, consumed source-form via
  `transpilePackages`). Node ≥24, pnpm workspaces. Supabase skeleton (`supabase/`) is a P1 seam —
  zero runtime calls in P0.
- **FE ownership:** uxi-manager owns the player; the design source is the ported CCAR-P token CSS in
  `apps/web/app/globals.css` (WCAG AA contrast test enforces it). Figma MCP available if needed.
- **Command seam** (root `package.json`):
  - `pnpm validate [slug]` — manifest-driven content validator (all packages when no slug)
  - `pnpm typecheck` · `pnpm test` — `tsc --noEmit` per package · `node --test` (LIGHT harness)
  - `pnpm build` — `next build`, prerenders every exam
  - `pnpm gate` — validate + typecheck + test + build; run before any push
  - `pnpm dev` — player on :4400 (3000 collides with jobber)
- **Growth accounts:** none declared. ads-manager stays dormant. gso-manager may run keyword/demand
  intel with free tools for catalog prioritization.
- **Commit style:** imperative present tense per the repo `CLAUDE.md` — this project rule wins over
  the harness's universal "conventional commits" default (`phase-process.md` hygiene row).

## Guardrail obligations {#obligations}

| When you… | You must… | Rule owner |
|---|---|---|
| add or edit bank items | keep the provenance chain resolvable (question → concept/license → derivation doc → registered source); never weaken validator checks | `CLAUDE.md` hard rules + `methodology/06-provenance-publishing.md` |
| author questions | never open source texts in the authoring session (clean-room); work only from derivation artefacts | `methodology/01-source-distillation.md` |
| evaluate a bank | run eval in a session/agent that did not author it (exam-examiner never authors) | `methodology/05-eval-rubric.md` |
| publish an exam (`status: published`) | pass the validator preflight: eval artifacts + thresholds + Gate 2 sign-off recorded | `methodology/06-provenance-publishing.md` |
| import external items | verify license against the commercial-compatible allowlist (CC BY / MIT / Apache / author agreement) + record attribution | `LICENSE-CONTENT` + validator |
| touch product telemetry | add none in P0; builder-side traces go to local Opik only | plan Decision 10/14 |
| spend money or create accounts | stop and ask Oliver (free-first; Vercel/Supabase hosted are flagged Oliver actions) | `~/.claude/CLAUDE.md` hard rules |

## Standing authorizations {#standing}

- Edit/commit on feature branches; run `pnpm gate` and all read-only analysis freely.
- Run the local dev server on :4400 and local Supabase (`supabase start`) in Docker.
- Destructive actions (any `rm`/`rmdir`, force-push, branch deletion, DB drops) stay per-use ask —
  no exceptions.

## Second opinions {#codex}

`/codex` is an optional second opinion and the S5 **advisory** cross-model blind-solve (plan
Decision 9) — never a required CI step, never a gate blocker. Disagreements route into the Gate 2
human sample.
