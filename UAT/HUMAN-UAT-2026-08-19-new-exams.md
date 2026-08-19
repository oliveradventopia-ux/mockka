# Human UAT — the six new exams + remediated CCAR-P

Build: `fix/ccar-p-answer-cues` · Server: http://localhost:4400 · Date: 2026-08-19

This is a **content** UAT, not a design one — the app itself was signed off visually in the
v3 runbook. What is new here is six exams built end-to-end by the pipeline, and CCAR-P
rewritten to remove answer cues. What you are judging is whether the *questions* hold up.

Log findings at the bottom. Fresh state = private/incognito window.
Time: ~20 min for A–D, longer if you go deep on E.

## A · Catalog — eight exams

- [ ] A1 http://localhost:4400 lists all 8: CCAO-F, Security+ SY0-701, AZ-900, AI-901,
      CLF-C02, GCP Digital Leader, AIF-C01, CCAR-P (AI-900 is intentionally hidden — retired
      exam, parked as draft)
- [ ] A2 Counts look right per card: SY0-701 90 questions / 81% pass · CCAO-F 60 / 72% ·
      GCP-CDL 60 · CCAR-P 63 / 75% · AIF-C01 50 · AZ-900 50 · CLF-C02 50 · AI-901 42
- [ ] A3 Every card shows "In review" — nothing is published until you sign it off

## B · CCAO-F — your own certification, judged hardest

This is the one you can assess as a subject expert. It was built from your course recap.

- [ ] B1 Intro reads as your exam: 7 domains, the material you studied, 120 minutes
- [ ] B2 **Read 5–6 questions as a candidate.** Do they test judgment rather than recall?
      Is the right answer clearly best rather than merely correct?
- [ ] B3 Is anything factually wrong about Claude, MCP, agents, or the platform?
- [ ] B4 Do the distractors feel like things a real practitioner might genuinely believe?

## C · A vendor exam — pick AZ-900 or CLF-C02

- [ ] C1 Intro: domains and weights match the real exam's published blueprint
- [ ] C2 Read 3–4 questions — do they read like that vendor's exam register, or like a
      generic cloud quiz?
- [ ] C3 Answer a few, submit, check the dashboard reads sensibly

## D · Remediated CCAR-P — the one with rewritten text

63 of its 85 items had the correct answer shortened this week, to remove a cue where the
right answer was always the longest option. **The risk is that trimming damaged a question.**

- [ ] D1 Open CCAR-P, read 5–6 questions. Does any correct answer feel truncated, vague,
      or like it lost the point it was making?
- [ ] D2 Submit and read a few rationales — does each rationale still match the (now
      shorter) answer it explains?
- [ ] D3 Specifically check **item 5.11** (compliance / data path). The evaluator flagged
      that its answer now says "every subprocessor in the data path" where the rationale
      argues about every *component*. Is that narrowing acceptable or should it be reworded?

## E · Gate 2 deep reads (optional now, required before publishing)

Each exam has a standalone review file in `exports/` — double-click to open, no server
needed, then toggle **Gate 2 review** for keys, rationales, per-item judge scores, and the
highlighted review sample.

- [ ] E1 `exports/ccar-p.html` — 22-item sample (5 matching + 7 flagged incl. 5.11 + 10 random)
- [ ] E2 `exports/ccao-f.html` — 32-item sample
- [ ] E3 Any others you want to sign off: aif-c01, az-900, clf-c02, gcp-cdl, sy0-701, ai-901

## Findings

| # | Where | What's wrong | Severity guess |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

## Questions for you (queued decisions, answer whenever)

1. **CCAR-P form seating** — 39 of 47 high-priority concepts are on the exam form; six of
   the eight unseated ones have free swaps available. The examiner left them out because
   swapping would displace recap-only concepts. Your preference?
2. **Publishing order** — which exams should go live first once signed off?
