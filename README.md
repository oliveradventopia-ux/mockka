# Mockka

Original, blueprint-weighted practice exams for professional certifications — plus the
open methodology that builds them.

Mockka generalizes the [CCAR-P mock exam](https://oliveradventopia-ux.github.io/ccar-p-mock-exam/)
into a multi-exam platform: a repeatable **exam compiler** (public sources → concept
inventory → originally-authored, validated question bank) and a responsive app that
serves the resulting exams.

**Status:** P0 scaffold in progress.

## What makes Mockka different

**Original + licensed, never harvested.** Mockka is the opposite of an exam-dumps site.
Every published bank item is either:

- **originally authored** against a documented concept inventory distilled from public
  blueprints, syllabi, and freely-published prep material (analytical classification
  only — no source text is ever reproduced), or
- **imported under a recorded commercial-compatible license** (CC BY / MIT / Apache /
  author agreement) with attribution.

This is enforced structurally, not by policy prose: CI validates a provenance chain
(question → concept/license → derivation doc → named public source) and a bank without
a complete chain cannot be published.

**Correctness is enforced by validation, not proofreading.** Rationales are keyed by
option, making it structurally impossible to ship an explanation that argues against
its own answer key. Every bank passes a structural validator, a blind-solve eval, a
cross-model check, and an LLM-judge rubric with human sign-off gates before publication.

## Repository layout

| Path | What it is |
|---|---|
| `apps/web/` | Next.js exam player (catalog, exam, dashboard) |
| `packages/engine/` | `@mockka/engine` — exam-agnostic loader, scoring, manifest-driven validator |
| `content/<exam-slug>/` | Per-exam content packages (manifest, bank, derivation, eval artifacts) |
| `methodology/` | The exam-compiler methodology: pipeline stages, authoring guide, eval rubric, schemas |
| `.claude/skills/` | Agent-runnable pipeline stages (`exam-new`, `exam-author`, `exam-eval`, `exam-publish`) |
| `supabase/` | Database skeleton (P1 seam: attempts, auth, pgvector) |

## Provenance and NDA statement

Mockka contains no live exam content from any certification programme. Exam items from
actual sittings are confidential and protected by each programme's NDA; contributions
containing them are rejected (see [CONTRIBUTING.md](CONTRIBUTING.md)). Mockka is an
independent project unaffiliated with any certification vendor or exam delivery
provider. Per-exam provenance derivations live in each package's `derivation/` folder.

## License

Code: [MIT](LICENSE). Content: [CC BY 4.0](LICENSE-CONTENT), with per-item inbound
licenses recorded in each exam's source registry.
