# Learn-loop — the distributed learning practice {#learn-loop}

Learning is a **discipline every agent runs**, consolidated by OA0 and reconciled daily into **gated**
improvements. Not a separate agent, not a daemon, no autonomous self-modification. The machine half (the
regression ratchet, [`build-practices.md`](build-practices.md#regression-discipline)) already exists; this is
the human/narrative half, made standard.

## The read/write/report practice (every agent) {#practice}

1. **Read** — at task start, load the learnings for your role/domain from the project's learning file
   (`learning/LEARNING.md`). Role-scoped; cheap.
2. **Write** — when you hit a reusable insight, gotcha, or better approach, append a structured entry to the
   **project's local** learning file by default (the routing judgment below decides local vs global). One
   owner per fact.
3. **Report** — surface new learnings to OA0 in your handoff's **`Learnings`** field
   ([`handoff-schema.md`](handoff-schema.md)).

**Entry schema:**
```
## L-XXXX · <short title>
- date: YYYY-MM-DD · agent: <who> · scope: local|global · tier: <area>
- lesson: <the reusable insight, one sentence>
- why: <root cause / evidence>
- how to apply: <concrete action next time>
- enforce: <current → target rung on the enforcement ladder, e.g. "note → check">
```

## Two-tier storage + the routing judgment {#routing}

Two stores, so projects never mix or contradict:
- **Project-local (default)** — `learning/LEARNING.md` in *this* project. Lessons tied to this project's
  domain, business, stack, data, or users. **Siloed — never leaks to another project.**
- **Global-generic** — lessons about the *build process / practice / harness / tooling itself* that apply to
  ANY project. Canonical home = the harness source's `learning/LEARNING.md`; mirrored to the global
  `~/.claude/LEARNING.md` (cited, one owner per fact).

**The routing judgment — classify each learning:**
- **GLOBAL** if it would help a *totally different* project and does not depend on this project's
  domain/stack/data (e.g. "rebuild dist before UAT"; "a presence-checking smoke hides real bugs").
- **LOCAL** if it only makes sense here (e.g. "this project's extractor needs field Y/Z swapped").
- **Default LOCAL** when ambiguous. Promotion to global is deliberate: it happens only via the daily reconcile
  + the **review gate**, and — because it changes cross-project practice — requires the principal's
  named confirmation.

## OA0 consolidation + scheduled daily reconcile {#reconcile}

OA0 is the consolidation point. A **scheduled, lightweight daily pass**:
1. Collect the day's reported learnings. **None → exit immediately (skip).**
2. Dedupe, then **classify each LOCAL vs GLOBAL** (routing judgment above).
3. LOCAL stays in the project file; GLOBAL-candidates open a **gated promotion PR** (→ review gate → merge;
   the `~/.claude` mirror needs named confirmation).
4. Turn acted-on learnings into concrete changes: a harness rule, a **reviewed skill**, a new regression case
   ([`build-practices.md`](build-practices.md#regression-discipline)), or just a kept note.

It is a bounded daily job, **never a daemon**, and **never auto-merges in attended mode**.

## The enforcement ladder — lessons must climb {#enforcement}

A lesson only reliably changes behavior at the rung where a machine holds it. Prose depends on being read
and remembered; checks don't. **Every learning is pushed as far up the ladder as its economics justify:**

| Rung | Form | Holds because | Failure mode |
|---|---|---|---|
| 1 · **Note** | a `LEARNING.md` entry | someone reads it | forgotten under context pressure |
| 2 · **Read** | the role-scoped read-before-acting practice | it's in the loaded context | probabilistic — attention, context budget |
| 3 · **Rule** | promoted into a harness doc agents must read | it's in the rulebook | still prose; obeys only if read |
| 4 · **Check** | a CI gate / drift rule / regression case / lint | **machine-enforced, can't be forgotten** | only covers what it encodes |
| 5 · **Structural** | impossible by construction (API shape, import wall, scaffold exclusion) | **the defect can't exist** | highest build cost |

**The reconcile classifies every learning on TWO axes:** scope (local/global, [routing](#routing)) × **target
rung**. A lesson describing a *mechanically checkable* failure MUST propose a rung-4 check (or record why
not); "keep as note" is a decision, not a default. Rung 4–5 promotions ship as gated PRs like any change.

Worked examples (this repo's own lessons): L-0002 (control bytes) → **check** —
[`../../engine/scripts/control_byte_check.mjs`](../../engine/scripts/control_byte_check.mjs) in the gate ·
L-0003 (eval-material leak) → **structural** — scaffold exclusion · L-0004 (AFK merge stall) → **rule** —
[`phase-process.md`](phase-process.md#operating-modes).

## Metering — is learning paying off? {#metering}

[`../../engine/observe`](../../engine/observe/) tracks the payoff signals: repeat-defect rate, gate-rejection
rate, and learnings-acted-on rate. If learning isn't paying off, kill the ceremony (fail-closed) — the loop
must earn its keep like anything else ([`agentic-modes.md`](agentic-modes.md#anti-patterns)).
