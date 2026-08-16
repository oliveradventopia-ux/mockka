repo: oliveradventopia-ux/mockka
branch: main

## Last sync

date: 2026-08-16T12:14:27Z

### Updated in this project

- Read the P0 scaffold docs (README, CLAUDE.md, CONTRIBUTING) — no `apps/web` UI exists yet, so screens were designed from the documented model rather than matched to code.
- Built `Mockka.dc.html`: identity (3 wordmark/mark options), light + dark theme, wireframes, and 9 responsive screens on the Classical design system.
- Item schema, provenance chain, gate list and distractor patterns (D01–D20) drive the reveal, dashboard and contribution screens.

## Screen map

| Screen (option id) | Built from |
|---|---|
| Landing (1i) | README.md — positioning, pipeline stages, NDA/provenance statement, licences |
| Catalog (1j) | README.md repository layout; CLAUDE.md content-package model |
| Exam player (1k) | CONTRIBUTING.md item schema (`type`, `options`, domains) |
| Rationale reveal (1l) | CONTRIBUTING.md `rationale` invariant + `distractor_patterns`; README gate list |
| Score report (1m) | README blueprint-weighting; manifest domain titles |
| Mastery dashboard (1n) | CONTRIBUTING `concepts.json`, `primary_concept`, distractor patterns D01–D20 |
| Review mode (1o) | Item ids + concept/trap fields from CONTRIBUTING item schema |
| Sign-in (1q) | CLAUDE.md free-first + no-product-telemetry rules; supabase P1 seam |
| Report a defect (1r) | CONTRIBUTING.md four contribution types + NDA attestation rule |
