# Handoff contract (schema) {#handoff-schema}

A **full handoff doc is required at every PHASE boundary**, committed under
`docs/journal/diary/YYYY-MM-DD-<slug>-handoff.md`. A **session boundary needs only a one-liner** appended to a
monthly sessions log (git log + the backlog carry the rest). `mp-handoff` compacts an unusually loaded session.

## Required fields

| Field | What it captures |
|---|---|
| **What shipped** | the concrete artifacts produced this phase/session (paths) |
| **DoD evidence** | links proving the Definition of Done: CI run, test output, screenshots, scorecard |
| **Repo state** | branch, commit range, whether a PR is open, CI status |
| **Open threads** | anything in-flight or deferred, with enough context to resume |
| **Next entry conditions** | what must be true for the next phase to open (incl. creds batch, if any) |
| **Risks** | known risks / watch-items, and their mitigation or kill-condition |
| **Regression evidence** | scorecard verdict + link · corpus Δ (cases added/modified) · exemptions (reason + countersign) · baseline ratchets |
| **Learnings** | new reusable insights this phase (→ `learning/LEARNING.md`); OA0 reconciles them daily ([`learn-loop.md`](learn-loop.md)) |
| **Awaiting human** | explicit asks routed to the principal (creds, decisions) |

## Template

```markdown
# Build diary — YYYY-MM-DD · <phase> <what>

## What shipped
- …(artifact → path)

## DoD evidence
- CI: <link/run> · tests: <result> · scorecard: PASS/notes

## Repo state
- branch <name> (pushed?) · commits <a>→<b> · PR <open/none> · CI <green/red>

## Open threads
- …

## Next entry conditions
- …(incl. creds batch if the next phase needs one)

## Risks
- …(+ mitigation / kill-condition)

## Regression evidence
- scorecard: <verdict + link> · corpus Δ: <n cases> · exemptions: <none / reason + countersign> · ratchets: <none / list>

## Learnings
- …(id · lesson · local/global) — appended to learning/LEARNING.md

## Awaiting human
- …
```

## Rule

A phase is **not done** until its handoff exists **and** the review scorecard is signed
([`phase-process.md`](phase-process.md#scorecard)). The handoff is the single place a reader goes to resume —
keep it current; don't scatter resume-state across files. A next lane that starts by re-deriving context is a
failed handoff ([`phase-process.md`](phase-process.md#afk-orchestration)).
