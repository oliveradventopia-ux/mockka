# Human UAT — Mockka library (8 exams, Classical + Lamplight) — v3

Build: `feat/exam-factory` · Server: http://localhost:4400 · Date: 2026-08-18
Supersedes the v2 runbook (that one predates the six new exams).

Findings go in the table at the bottom — log anything odd, severity is my job.
"Fresh state" = private/incognito window so localStorage starts empty.

## T · Theme (fresh state — first)

- [ ] T1 http://localhost:4400 loads **dark (Lamplight) by default**, no flash of light on load
- [ ] T2 Paper/Lamp toggle in the catalog nav flips the whole page instantly
- [ ] T3 Refresh — choice sticks; open an exam — theme carries through
- [ ] T4 Back to Lamp. In both themes: nothing illegible, gold never used as body text

## A · Catalog — the library now has eight exams

- [ ] A1 All 8 listed: CCAO-F, Security+ SY0-701, AZ-900, AI-901, CLF-C02, GCP Digital
      Leader, AIF-C01, CCAR-P (AI-900 is deliberately hidden — parked as draft)
- [ ] A2 Each card: vendor, question count, minutes, pass %, domain count, "In review" note
- [ ] A3 Counts look right at a glance (e.g. SY0-701 = 90 questions, AI-901 = 42)
- [ ] A4 Phone width — no horizontal scrolling

## B · Your own cert first: CCAO-F (the one you can judge hardest)

- [ ] B1 Open CCAO-F — intro reads as *your* exam: 7 domains, the material you studied
- [ ] B2 Intro sections all present: about, who it's for, what this mock provides,
      official resources, format note, disclaimer block
- [ ] B3 **Read 3–4 questions as a candidate would.** Do they feel like the real exam's
      register — good-vs-best, not right-vs-wrong? Anything factually off?
- [ ] B4 Nothing reads copy-pasted from source material

## C · Exam journey (do this on any one exam — SY0-701 is the biggest test)

- [ ] C1 Enable timed mode on the intro tab, enter the exam — timer runs, calm until last 5 min
- [ ] C2 Single-choice: gold-edge selection, "Saved" flash
- [ ] C3 Multiple-response: a 3rd pick is refused with an inline hint (no popup)
- [ ] C4 Scenario-matching (dropdowns): options reusable across scenarios
- [ ] C5 Flag a question — dashed-gold state; navigator distinguishes answered/flagged
- [ ] C6 **Refresh** — answers, flags, timer, and option order all survive
- [ ] C7 Domain + flagged filters narrow correctly
- [ ] C8 Navigator jump to a far question lands sensibly

## D · Submit + dashboard

- [ ] D1 Submit → modal warns with unanswered count, focus trapped, Esc cancels
- [ ] D2 Dashboard: verdict headline in words, big score, per-domain bars with the pass
      line drawn on them, coaching line
- [ ] D3 Mistakes grouped by domain; jump lands on the graded question — key gold-edged,
      your wrong pick in neutral ink, rationale behind the gold rule
- [ ] D4 Small domains show the coarseness footnote
- [ ] D5 Reset (with confirm) returns a clean exam

## E · Spot-check two more exams

- [ ] E1 AI-901 (only 2 domains) — dashboard still reads sensibly with so few domains
- [ ] E2 CCAR-P — its weak-**rules** section appears after submit (24-rule syllabus layer;
      the newer exams don't have this)

## F · Standalone exports (the Gate 2 vehicles)

Files are in `exports/` — double-click any of them.

- [ ] F1 `exports/ccao-f.html` opens offline, **dark by default**, own theme toggle works
- [ ] F2 Toggle **Gate 2 review** — all 81 items with keys, rationales, metadata, judge
      scores; the deep-read sample highlighted; reserves labeled
- [ ] F3 Optional: wifi off — everything still works

## Findings

| # | Step | What happened | Expected |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
