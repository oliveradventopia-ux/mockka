# 00 · The pipeline — how an exam gets built {#pipeline}

This is the runbook for "add exam X to Mockka". It is the top of the methodology: every other
document in this directory is a stage manual that this one sequences. The pipeline turns public,
legal source material into an originally-authored, blueprint-weighted question bank that passes the
provenance validator — the structural opposite of a dumps site.

Plan of record: `~/.claude/plans/want-to-formally-scardfold-imperative-wirth.md`. Worked reference:
the CCAR-P build (`content/ccar-p/`, derivation in `content/ccar-p/derivation/`).

---

## The shape of the pipeline

Six stages, two human gates, three agent roles, four skills. Content flows one way; quality flows
backwards through the bounce loop.

| Stage | What happens | Owner | Skill | Writes | Gate after |
|---|---|---|---|---|---|
| **S1** Intake + source registry | Pick the exam, register every source with its licence basis | research-manager | `/exam-new` | `derivation/sources.md`, manifest skeleton | — |
| **S2** Source distillation | Artefact A per practice source, Artefact B per syllabus/course source — analytical classification only, zero source text | research-manager | `/exam-new` | `derivation/source-<id>.md` | — |
| **S3** Master inventory + authoring contract | Merge artefacts into the concept inventory; compute convergence; fix the bank size | exam-author | `/exam-new` | `derivation/master-inventory.md`, `concepts.json`, `manifest.json`, `authoring.json` | **Gate 1** |
| **S4** Authoring | Write bank items in per-domain batches, validator green after each batch | exam-author | `/exam-author` | `questions.json` | — |
| **S5** Quality eval | Blind solve + Codex advisory cross-solve + 6-dimension judge rubric; examiner **never authors** | exam-examiner | `/exam-eval` | `eval/blind-solve.json`, `eval/judge-scores.json`, `eval/overlap-report.md` | — |
| **S6** Selection + publication preflight | Build the exam form(s), run the preflight, prepare sign-off | exam-examiner | `/exam-publish` | `selection.json`, `derivation/signoff.md`, manifest `status` flip | **Gate 2** |

Stage manuals:

- S1–S2 → [`01-source-distillation.md`](01-source-distillation.md)
- S3 → [`02-master-inventory.md`](02-master-inventory.md)
- S4 → [`03-authoring-guide.md`](03-authoring-guide.md) with [`04-validation.md`](04-validation.md)
  as the always-on backstop
- S5 → [`05-eval-rubric.md`](05-eval-rubric.md)
- S6 → [`06-provenance-publishing.md`](06-provenance-publishing.md)

The four skills (`.claude/skills/exam-new`, `exam-author`, `exam-eval`, `exam-publish`) are the
**versioned process contract** the agents execute. They stay thin: each one sequences steps and
cites the stage manuals above. If a skill and a stage manual ever disagree, the stage manual wins
and the skill gets fixed.

### Roles and separation

- **research-manager** owns S1–S2. Its sessions are the only ones allowed to open source texts —
  see the clean-room rule in [`01-source-distillation.md`](01-source-distillation.md#clean-room).
- **exam-author** owns S3–S4. Works from derivation artefacts only; never opens sources.
- **exam-examiner** owns S5–S6. **Never authors.** Runs in a fresh session by construction, so its
  blind solve is genuinely blind. `/exam-eval` refuses to run in a session that has edited the
  exam's `questions.json` — see the independence rule in
  [`05-eval-rubric.md`](05-eval-rubric.md#independence).

---

## Stage narratives

### S1 — Intake + source registry

Pick the exam (P1 automates the picking via the vendor-watch catalog engine; until then it is an
Oliver decision). Walk the source-tier hierarchy in
[`01-source-distillation.md`](01-source-distillation.md#tiers): the public blueprint is mandatory,
Tier 1 official practice sets are the best calibration input, forums and exam-experience threads
are always excluded. Register every source in `derivation/sources.md` with type, author, URL, date
accessed, and — the field that matters — its **licence or permission basis**. If a vendor source
map exists in [`source-maps/`](source-maps/TEMPLATE.md), use its stable URLs; if not, create one
from the template as you go.

### S2 — Source distillation

One derivation doc per source: **Artefact A** for practice-question sources (concept per item,
distractor pattern per wrong option, format mix, frequency table), **Artefact B** for
syllabus-grade sources (rules split into constituent concepts, canonical vocabulary captured
verbatim from the syllabus). Templates in
[`01-source-distillation.md`](01-source-distillation.md#artefact-a). The hard invariant: artefacts
contain **zero source text** — only analytical classification. Nothing in a derivation doc can be
used to reconstruct the original questions.

### S3 — Master inventory + authoring contract

Union the artefacts into `concepts.json` + `derivation/master-inventory.md` per
[`02-master-inventory.md`](02-master-inventory.md). Convergence is **computed, not asserted**: a
concept attested by ≥2 independent sources gets `priority: high`. The inventory fixes the
authoring contract — every concept becomes the primary concept of exactly one bank item, and the
bank sizes at ≈1.35× the exam length. Fill the manifest with the real blueprint numbers and declare
the exam's theme set in `authoring.json`. Then stop.

### Gate 1 — human, ~30 minutes, after S3

Oliver reviews before any authoring effort is spent. The `/exam-new` run ends by printing this
checklist with the evidence filled in:

- [ ] **Blueprint numbers verified** against the official exam page (domains, weights, item count,
  time limit, pass mark) — not against a secondary source
- [ ] **Weights sum to 100**
- [ ] **Arithmetic holds** — per-domain exam counts sum to the exam total; bank counts sum to the
  bank total; bank ≈ 1.35× exam size
- [ ] **5 concepts spot-traced** — picked at random, each traces to a specific derivation doc and
  a registered source
- [ ] **Source registry legality confirmed** — every source has a licence/permission basis; no
  excluded source types (forums, exam-experience threads, NDA'd content) present
- [ ] **Bank size approved** — the item count is worth the authoring effort for this exam's demand
- [ ] **Single-source builds flagged** — if the inventory rests on one independent source, the
  build is explicitly marked lower-confidence (no convergence signal; see the
  [degradation path](02-master-inventory.md#single-source))

No approval, no S4. Rejected items are fixed in a fresh S3 pass.

### S4 — Authoring

Per-domain batches following [`03-authoring-guide.md`](03-authoring-guide.md): uncovered concept →
theme + underused vertical → scenario whose surface features point away from the right principle →
each wrong option from a different distractor pattern → option-keyed rationale in canonical
vocabulary. Run `pnpm validate <slug>` after **every batch** — the validator is the tight loop,
not a final check. A batch that ends red does not get committed.

### S5 — Quality eval

The examiner, in a fresh session, runs the full protocol in
[`05-eval-rubric.md`](05-eval-rubric.md): keyless blind solve with per-item confidence, the Codex
advisory cross-solve (any Claude/Codex/key disagreement is auto-added to the Gate 2 sample — never
a blocker by itself), the 6-dimension judge rubric (argue *for* each distractor before scoring),
and the overlap screen. Output: `eval/*.json` plus a score report per below-threshold item.

### The bounce loop {#bounce}

Operational from the first exam, and the reason quality does not depend on the author having a
good day:

1. The examiner scores every item against the judge rubric.
2. Items below threshold (any dimension ≤2, or a defect confirmed by blind-solve adjudication)
   **return to exam-author with the score report attached** — the report says which dimension
   failed and why, in the examiner's words.
3. Re-authored items re-enter S5 and are re-scored fresh (no partial credit for effort).
4. **Cap: 2 bounces per item.** An item still below threshold after two bounces goes to a human
   decision at Gate 2: accept with a recorded waiver, rewrite under human direction, or replace
   with a new item covering the same concept (coverage may not silently drop).

Bounce mechanics and the score-report format live in
[`05-eval-rubric.md`](05-eval-rubric.md#bounce).

### S6 — Selection + publication preflight

Build `selection.json` to the manifest's per-domain counts and format mix, then run the full
preflight in [`06-provenance-publishing.md`](06-provenance-publishing.md): registry complete,
provenance chain resolves, eval artifacts present and thresholds met, per-exam README statements
in place, sign-off template prepared.

### Gate 2 — human, 1–2 hours, before publish

The only human review that touches item content in depth. Checklist (also produced, evidence
filled, by `/exam-publish`):

- [ ] **Validator green** — `pnpm validate <slug>` clean on the exact tree being published
- [ ] **Eval thresholds met** — no judge dimension ≤2 anywhere; bounce cap respected
- [ ] **All blind-solve discrepancies adjudicated** — every confident miss has a recorded human
  verdict (miskeyed / co-correct / legitimately hard); no open items
- [ ] **Deep-read sample** — all scenario-matching items + 10 random items + every auto-flagged
  item (any 3-scores, any Claude/Codex/key disagreement, any bounce survivor)
- [ ] **Provenance chain spot-check** — a handful of questions walked end-to-end: question →
  concept → sources → derivation doc → registry entry
- [ ] **README statements present** — provenance, independence, NDA, non-affiliation
- [ ] **Sign-off recorded** in `derivation/signoff.md` before the manifest status flips

Only after the sign-off is committed does `manifest.status` flip to `published` — the flip rules
are in [`06-provenance-publishing.md`](06-provenance-publishing.md#status).

---

## Session plan — ≈4–5 agent sessions per exam

The stages map onto Claude Code sessions like this (an exam with a small bank fits the low end;
big banks split S4):

| Session | Role | Skill | Covers | Ends with |
|---|---|---|---|---|
| 1 | research-manager | `/exam-new` | S1 + S2 | sources registered, artefacts written |
| 2 | exam-author | `/exam-new` | S3 | **Gate 1 checklist printed → STOP** |
| 3 (± 3b) | exam-author | `/exam-author` | S4 | bank complete, validator green |
| 4 | exam-examiner | `/exam-eval` | S5 (+ bounce re-evals) | eval artifacts + score reports |
| 5 | exam-examiner | `/exam-publish` | S6 | **Gate 2 checklist → Oliver sign-off** |

Session boundaries are load-bearing, not incidental:

- S2 → S3 changes owner (research-manager → exam-author), which is what keeps authoring sessions
  clean-room by construction.
- S4 → S5 changes both owner and session, which is what makes the blind solve blind.
- Bounce rework is a short `/exam-author` session (the score report is the whole briefing), followed
  by re-eval inside the next `/exam-eval` session.

Between-gate work runs without pausing to ask "continue?" — questions are batched to the gates,
which is where Oliver already is.

---

## The enforcement-ladder ratchet {#ratchet}

Every recurring error class gets cheaper to prevent than to catch. When the examiner (or Gate 2)
sees the same failure twice, it does not stay a review comment — it climbs the ladder:

**note → read → rule → check → structural**

- **note** — recorded once in the score report or a learning entry
- **read** — added to the material the author reads at task start
- **rule** — a named rule in [`03-authoring-guide.md`](03-authoring-guide.md) (an
  authoring-guide amendment)
- **check** — a new validator check per
  [`04-validation.md`](04-validation.md#adding-a-check), so the class can never ship again
- **structural** — the terminal rung: schema change, skill change, or pipeline change that makes
  the error inexpressible

The ratchet is recorded through the harness learning loop: entries in
[`../builder/learning/LEARNING.md`](../builder/learning/LEARNING.md) using the schema in
[`../builder/templates/harness/learn-loop.md`](../builder/templates/harness/learn-loop.md), with
the `enforce:` field naming the current → target rung. The CCAR-P precedent is the pattern to
copy: "rationale argues against its own key" was a proofreading note exactly once — then it became
the option-keyed rationale schema plus the anti-drift validator check, and the failure mode is now
structurally impossible.
