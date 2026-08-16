# Handoff: Mockka — identity, theme and app UI (incl. CCAR-P dashboard)

## Overview

Mockka is a multi-exam mock-exam platform plus the exam-compiler methodology behind it
(repo: `oliveradventopia-ux/mockka`, branch `main`). This bundle covers a ground-up visual
identity and the UI for the P0 app: landing, catalog, exam player, rationale reveal, score
report, mastery dashboard, review mode, sign-in, defect report, and a dedicated CCAR-P
performance dashboard with a reusable template spec.

Target stack per the repo: **Next.js** app in `apps/web/`, exam-agnostic logic in
`packages/engine/` (`@mockka/engine`), content in `content/<exam-slug>/`. Deploy target is
Vercel. No product telemetry in P0 (per `CLAUDE.md`).

## About the design files

`design/Mockka.dc.html` is a **design reference created in HTML** — a prototype showing
intended look, structure and behaviour. It is **not production code to copy**. The task is
to recreate these designs in `apps/web/` using React/Next.js and the project's own
component conventions. The prototype uses inline styles because of its authoring
environment; in the app, use whatever styling layer `apps/web/` standardises on (CSS
Modules or Tailwind with the tokens below mapped in). Do not port inline styles verbatim.

`design/classical-styles.css` is the **design-system stylesheet the prototype consumes**
(the "Classical" system: tokens + base components). Port its `:root` token block into the
app as the single source of truth for colour, type, spacing, radius and elevation. Its
component layer (`.btn`, `.tag`, `.card`, `.table`, `.input`, `.hr`, `.plate`) is a useful
reference for what the primitives must do, but should be reimplemented as React components.

`reference/initial-build-ccar-p.html` is Oliver's original single-file CCAR-P mock exam. It
is the **source of truth for exam data and behaviour** (63 questions, 7 domains, 75%
threshold, question schema, localStorage auto-save), and the design this bundle deliberately
departs from visually.

## Fidelity

**High fidelity**, with one exception.

- Identity, theme, and all screens (landing, catalog, player, reveal, score report,
  dashboards, review, sign-in, defect report) are hi-fi: final colours, type, spacing and
  states. Recreate closely.
- The three wireframe cards (`1f`, `1g`, `1h`) are **low fidelity on purpose** — they are
  structural diagrams. Do not build the dashed-box look; they exist to explain the
  hierarchy behind the hi-fi screens.
- Content is illustrative: one real question (item 2.14, authored for this mock), invented
  attempt scores, invented second catalog exam. Real content comes from
  `content/<slug>/questions.json` + `manifest.json`.

## How to read the design file

`design/Mockka.dc.html` is a canvas of option cards. Each option has a stable id shown as
a badge; anchors work (`#2a`). Turns are newest-first.

| Id | What it is |
|---|---|
| `2a` | **CCAR-P dashboard, post-submission** (hi-fi, primary dashboard spec) |
| `2b` | **CCAR-P dashboard, in-progress state** (hi-fi) |
| `2c` | **Dashboard template anatomy** — 6 named slots, data + rules (read this before building any dashboard) |
| `1a` `1b` `1c` | Logo directions: Aperture / Bank grid / Colophon wordmark |
| `3a` `3b` `3c` | **Lamplight (dark theme)** on real screens: player, CCAR-P dashboard, landing |
| `1d` `1e` | Colour identity swatches: Paper (light) and Lamplight (dark) |
| `1f` `1g` `1h` | Wireframes: player desktop, player mobile, dashboard (lo-fi) |
| `1i` | Landing page |
| `1j` | Exam catalog |
| `1k` | Exam player, Practice mode |
| `1l` | Rationale reveal + provenance panel |
| `1m` | Score report |
| `1n` | Mastery dashboard (cross-attempt, exam-agnostic) |
| `1o` | Review mode |
| `1p` | Mobile: player, reveal, progress (390 × 844) |
| `1q` | Sign-in |
| `1r` | Report a defect |

**Logo decision is still open.** `1a` (Aperture) is the recommended default: it is the only
one that survives a 16px favicon and it is the mark used in the app chrome throughout
`1i`, `1k`, `1p`, `1q`. Build with `1a` unless told otherwise.

---

## Design tokens

Ported verbatim from `design/classical-styles.css`. **Never hard-code a value the tokens
carry.** Names below are the CSS custom property names; keep them.

### Colour — light theme (default)

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#f3f2f2` | page ground |
| `--color-surface` | `#eae9e9` | image mats, subtle fills |
| `--color-text` | `#201f1d` | body + headings |
| `--color-accent` | `#b68235` | gold — **stroke, rules, small marks only** |
| `--color-divider` | `color-mix(in srgb, #201f1d 16%, transparent)` | all hairlines |

Neutral ramp: `--color-neutral-100` `#f8f4f4`, `200` `#eae7e7`, `300` `#d7d3d3`,
`400` `#bab6b6`, `500` `#9b9797`, `600` `#7d7979`, `700` `#605d5d`, `800` `#444141`,
`900` `#2d2b2b`.

Accent ramp: `--color-accent-100` `#fff3e4`, `200` `#ffe3bf`, `300` `#facb8d`,
`400` `#e1ad66`, `500` `#c28d41`, `600` `#a06f24`, `700` `#7d5411`, `800` `#5a3b0a`,
`900` `#3a270d`.

A second accent ramp (`--color-accent-2-*`) exists in the stylesheet but this is a **mono
palette** — treat accent-2 as the same role and don't introduce it as a second colour.

**Colour rules that matter (these are the identity):**
1. Gold is never a large fill. Buttons are outlines; cards are bordered and unfilled.
2. **No green/red result states.** Correct/incorrect/flagged are distinguished by *value and
   stroke*, not hue: correct = gold tag, missed = neutral tag, flagged = dashed outline.
   This is an accessibility choice and a brand choice — do not "fix" it by adding green.
3. Accent-on-ground is ~3:1 — fine for icons, rules, large text and chrome. For
   paragraph-size text in gold use `--color-accent-700`.
4. Muted text = `color-mix(in srgb, var(--color-text) 55%, transparent)` (`.text-muted`).

### Colour — dark theme ("Lamplight")

See **Theming: the light/dark switch** below for the complete scheme, the derived values,
the three places dark is *not* a straight inversion, and the toggle spec. Shown on real
screens in options `3a` (player), `3b` (CCAR-P dashboard) and `3c` (landing); swatches in `1e`.

### Typography

| Token | Value |
|---|---|
| `--font-heading` | `"Cormorant Garamond", system-ui, sans-serif` |
| `--font-heading-weight` | `600` (semibold is the ceiling for interface headings) |
| `--font-body` | `"Lora", system-ui, sans-serif` |

Third face, used only for metadata/labels/figures: **JetBrains Mono** (`.mono` in the
prototype), always with `font-feature-settings: "tnum"`.

Rules:
- **The bigger the text, the lighter the weight.** Display sizes (36px+) set at weight
  `300`; interface headings at `600`. Never bold.
- Numbers that stand as figures or columns get `font-feature-settings: "tnum"`. Running
  prose keeps Lora's default text figures — do not apply `tnum` to paragraphs.
- Body copy is `text-align: justify` at a comfortable measure (~34–44em) in editorial
  contexts (landing, rationale, coaching notes). UI labels are not justified.
- Long headings get `text-wrap: pretty`.
- Base: `body { font-size: 15px; line-height: 1.55 }`. Headings `line-height: 1.12`,
  `letter-spacing: -0.015em`.

Observed scale in the designs (px): display `108` / `58` / `54` (weight 300); page titles
`42` `40` `38` `36` `34` `32` `30` (300–400); section heads `27` `26` `24` `22` `20`;
sub-heads `19` `15` (600); body `15` `14.5` `14` `13.5` `13` `12.5`; small `11.5` `11`;
mono labels `11` `10.5` `10` `9.5` `9` `8.5` with `letter-spacing` `0.08em`–`0.24em`,
uppercase.

Mono uppercase kickers are a signature: `9px / .18em / uppercase`, coloured
`--color-accent-700` when semantic, `rgba(32,31,29,.5)` when metadata.

### Spacing, radius, elevation

`--space-1` `4.6px` · `--space-2` `9.2px` · `--space-3` `13.8px` · `--space-4` `18.4px` ·
`--space-6` `27.6px` · `--space-8` `36.8px` (density 1.15×).

`--radius-sm` `2px` · `--radius-md` `4px` · `--radius-lg` `7px`.

`--shadow-sm` `0 1px 2px rgba(45,43,43,.14)` · `--shadow-md` `0 3px 10px rgba(45,43,43,.16)` ·
`--shadow-lg` `0 12px 32px rgba(45,43,43,.22)`. Elevation is a whisper — most surfaces use
a 1px border and no shadow at all.

### Interaction states (themed, never browser defaults)

- Hover on outlined/ghost: `background: color-mix(in srgb, var(--color-accent) 12%, transparent)`.
- Pressed: same at `22%`.
- Focus: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px }` — required everywhere.
- Selection: `::selection { background: color-mix(in srgb, var(--color-accent) 30%, transparent) }`.
- Disabled: `opacity: .45; cursor: not-allowed`.

### A CSS gotcha worth knowing

The `font:` **shorthand resets `font-feature-settings` and `font-variant-numeric` to
`normal`.** If you set type with the shorthand and rely on a `.num { font-feature-settings:
"tnum" }` utility, your display figures silently lose their tabular numerals while table
cells keep them — the same screen ends up internally inconsistent. Use longhand properties
for anything that renders a figure, or declare the tabular rule with enough specificity to
win. (The prototype hit exactly this; it is fixed there with an `!important` on the
`.num, .mono` rule.)

### Icons

Lucide (https://lucide.dev), 1px-feel stroke, sized to the text they sit with. The
prototype omits most icons deliberately — the system is type- and rule-led. Add icons only
where an action is ambiguous without one.

---

## Theming: the light/dark switch

The user chooses the theme. Two named themes ship: **Paper** (light, default) and
**Lamplight** (dark). There is no third "dim" variant and no per-screen theming.

### The complete scheme

Same token names in both themes — only the values change. Everything else in the system
(type, spacing, radius, the ramps) is shared. **Nothing in a component should branch on
theme;** if a component needs an `if (dark)`, a token is missing.

| Token | Paper (light) | Lamplight (dark) | Notes |
|---|---|---|---|
| `--color-bg` | `#f3f2f2` | `#1a1918` | page ground |
| `--color-surface` | `#eae9e9` | `#242220` | raised card fills, image mats, the dark footer band |
| `--color-text` | `#201f1d` | `#efece7` | |
| `--color-accent` | `#b68235` | `#e1ad66` | dark uses accent-**400**, one step lighter, to keep ≥3:1 on ink |
| `--color-divider` | `rgba(32,31,29,.16)` | `rgba(239,236,231,.18)` | all hairlines |
| `--color-text-muted` | `rgba(32,31,29,.55)` | `rgba(239,236,231,.55)` | labels, metadata |
| `--color-text-body` | `rgba(32,31,29,.82)` | `rgba(239,236,231,.75)` | long-form prose — **not** full-strength text |
| `--color-text-subtle` | `rgba(32,31,29,.42)` | `rgba(239,236,231,.42)` | keyboard hints, disabled labels |
| `--color-track` | `#eae7e7` (neutral-200) | `rgba(239,236,231,.14)` | every progress/score bar track |
| `--color-accent-text` | `#7d5411` (accent-700) | `#e1ad66` (= accent) | **gold at paragraph size**; on light it must darken, on dark it must not |
| `--color-accent-tint` | `color-mix(in srgb, var(--color-accent) 6%, transparent)` | `rgba(225,173,102,.09)` | selected-option fill |
| `--color-accent-tint-strong` | `color-mix(in srgb, var(--color-accent) 14%, transparent)` | `rgba(225,173,102,.16)` | active segmented option, answered map cell |
| `--color-accent-edge` | `var(--color-accent-300)` `#facb8d` | `rgba(225,173,102,.45)` | answered map-cell border, faded bar |
| `--color-rule-marker` | `#201f1d` | `#efece7` | the 1px threshold rule drawn **on top of** a gold bar |
| `--color-inverse-bg` | `#2d2b2b` (neutral-900) | `#242220` (surface) | the colophon band — see "not an inversion" below |
| `--color-inverse-text` | `#f8f4f4` (neutral-100) | `rgba(239,236,231,.85)` | |
| `--color-inverse-accent` | `#facb8d` (accent-300) | `#e1ad66` | |
| `--shadow-sm/md/lg` | ink-tinted, per the stylesheet | replace with a hairline border + no shadow | shadows read as smudges on ink |

The four tokens after `--color-text` (`-muted`, `-body`, `-subtle`) and everything from
`--color-track` down are **new named tokens I am asking you to add**. They exist because
those exact alpha values recur across every screen; without names they get re-derived by
hand in each component and drift.

The **ramps are unchanged between themes** (`--color-neutral-100…900`,
`--color-accent-100…900` — values in the Design tokens section). In dark, reach for the
*light* accent steps (300/400) where light reached for the dark ones (600/700), which is
precisely what `--color-accent-text` and `--color-accent-edge` encode. `--color-accent-100`
(`#fff3e4`) is the one ramp step that cannot be used as a fill in dark — the NDA attestation
block in `1r` needs `#2a2317` there instead (a dark tint of the same hue).

### Three places dark is not a straight inversion

These are deliberate; a mechanical inversion gets all three wrong.

1. **The colophon band.** The light landing page closes on a near-black band
   (`--color-neutral-900`). On ink that band disappears, so in dark it **lifts** to
   `--color-surface` `#242220` with a top hairline. Same for the `1r` dialog header band.
   That's why `--color-inverse-bg` is a token and not `neutral-900` inline.
2. **The selected exam option.** In light, the 6% gold tint plus a gold border reads clearly.
   On ink the tint is nearly invisible, so the **`box-shadow: inset 2px 0 0 var(--color-accent)`
   left edge carries the state** — keep it in both themes (it is already in the light design)
   and never let the tint be the only signal.
3. **Gold at paragraph size.** Light darkens gold to accent-700 for readable body text; dark
   must *not* darken it. Use `--color-accent-text` and the branch disappears.

Also: the **threshold rule** on a dashboard bar is drawn over a gold fill, so it flips with
the text colour (`--color-rule-marker`), and the "too few items to trust" bar goes from
`accent-300` (light) to `rgba(225,173,102,.45)` (dark) — a fade, not a lighter step.

### Contrast — verify, don't assume

The repo already runs contrast tests (`pnpm test` — "engine + contrast tests" per
`CLAUDE.md`). **Extend them to cover both themes** and assert:

- body text on ground ≥ 4.5:1 — Paper `#201f1d` on `#f3f2f2` ≈ 15.1:1; Lamplight `#efece7`
  on `#1a1918` ≈ 14.5:1; the `--color-text-body` alphas ≈ 11:1 and ≈ 10:1.
- accent on ground ≥ 3:1 (chrome, rules, large text only) — Paper `#b68235` ≈ 3.1:1;
  Lamplight `#e1ad66` ≈ 7.6:1.
- `--color-accent-text` at paragraph size ≥ 4.5:1 — Paper `#7d5411` ≈ 6.7:1; Lamplight
  `#e1ad66` ≈ 7.6:1.
- the focus ring against both grounds ≥ 3:1.

If a value fails, move one ramp step — do not introduce a new hex.

### The toggle (in the UI)

A two-option segmented control in the nav, right-aligned, immediately left of "Sign in"
(see `1i` for Paper and `3c` for Lamplight). It matches the player's Practice/Exam control
so the app has one switch idiom:

- Container: `1px solid var(--color-divider)`, `border-radius: var(--radius-md)`, `overflow: hidden`.
- Each option: `padding: 4px 10px`, JetBrains Mono `9px`, weight `500`,
  `letter-spacing: .12em`, uppercase. Labels: **Paper** and **Lamp**.
- Active option: `background: var(--color-accent-tint-strong)`, `color: var(--color-accent-text)`.
- Inactive: `color: var(--color-text-muted)`.
- Accessible name "Theme"; implement as a `role="radiogroup"` with two radios (not a
  checkbox — there are three states once System is counted, see below), keyboard-operable,
  with the standard `:focus-visible` ring.
- On mobile the control moves into the nav sheet as a labelled row ("Theme · Paper / Lamp"),
  keeping 44px targets. It does **not** appear in the player header during a sitting —
  changing theme mid-question is a distraction; it lives in the sheet there.

**Three-state truth, two-state control.** Stored preference is `'light' | 'dark' | 'system'`;
default is `'system'`. The control shows the *resolved* theme, so a system user still sees
which one they are in; touching it sets an explicit preference. Offer "Match system" as a
reset in settings (or a long-press/right-click affordance) rather than a third segment.

### Implementation notes (Next.js on Vercel)

- Tokens live in one stylesheet: `:root` = Paper, `:root[data-theme="dark"]` = Lamplight,
  plus `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { … } }` so the
  system case needs no JS.
- Set `data-theme` on `<html>` in a **blocking inline script** before first paint, reading
  `localStorage.getItem('mockka-theme')` — otherwise dark users get a white flash. Keep it
  tiny and inline; do not defer it.
- Add `<meta name="color-scheme" content="light dark">` and set `color-scheme` on `:root` per
  theme so native form controls, scrollbars and the mobile URL bar follow.
- Signed-in users: persist the preference server-side too and hydrate it into the initial
  HTML, so it follows them across devices (the whole stated reason `1q` exists).
- Respect `prefers-reduced-motion`: no cross-fade on theme change — swap instantly.
- Print always uses Paper regardless of preference (`@media print` forces the light tokens).
- One test worth having: render every screen in both themes and assert **no component emits
  a literal hex** — every colour resolves through a token.

---

## Identity

### Logo — `1a` "Aperture" (recommended)

Concentric squares with the inner square opened on its right edge. Pure geometry, no
custom drawing needed:

- Outer: square, `1.5px solid var(--color-text)` (1px at ≤22px).
- Inner: inset by ~18% of size, `1.5px solid var(--color-accent)`, `border-right-color: transparent`.
- The open right edge is the "aperture" — at 38px the gap is ~12×6px of ground colour.
- Sizes in use: 38px (identity lockup), 26px (sign-in), 22px (nav), 20px (player header),
  18px (mobile header).
- Wordmark: "Mockka" in `--font-heading` weight `400`, `letter-spacing: .03em–.04em`.
  30px beside the 38px mark, 20px beside the 22px mark, 15px at the small lockup.
- Optional imprint line under the wordmark: mono `8.5px`, `letter-spacing: .24em`,
  uppercase, `rgba(32,31,29,.5)` — "exam compiler".

Deliver as SVG (stroke-based, `currentColor` for the outer, accent for the inner) plus a
favicon/app-icon set. Alternatives if the direction changes: `1b` (3×3 grid, centre cell
filled gold — also the atom of the coverage heatmap) and `1c` (rules-only wordmark, no mark
— needs `1a` for icons anyway).

### Voice

Warm and coaching, never chirpy, no emoji (per the exam `manifest.json` style block). The
verdict pattern is the model: state the position, name the cost, name what is already safe.
"Two questions short" not "Almost there!". Provenance copy is dry and factual.

---

## Screens

Below, hi-fi specifics. Where a value is not stated, take it from the tokens.

### 1. Landing — `1i`

**Purpose:** state the wager (original, blueprint-weighted, provenance-checked) and send
the visitor to a paper.

**Layout** (max content width ~1080px, centred):
1. **Nav** — `padding: var(--space-3) var(--space-6)`, `border-bottom: 1px solid var(--color-divider)`.
   Left: 22px mark + "Mockka" 20px/400/.04em. Then nav links (Exams, Methodology,
   Contribute) at 12.5px body, `color: var(--color-text)`, no underline until hover.
   Right, in order: the **theme toggle** (spec in "Theming" above), ghost "Sign in",
   primary outline "Browse exams", `gap: 10px`, vertically centred.
2. **Hero** — `grid-template-columns: 1.15fr .85fr`, `gap: var(--space-8)`,
   `padding: 64px var(--space-8) 52px`.
   - Kicker: mono 9px/.2em/uppercase, `--color-accent-700`: "Original · blueprint-weighted · provenance-checked".
   - H1: 58px, weight 300, `line-height: 1.06`, `letter-spacing: -.02em`, max 19em.
   - Body: 15px/1.8, justified, max 34em, `rgba(32,31,29,.82)`.
   - Buttons: primary outline "Start a paper", secondary "Read the methodology".
   - Right: bordered card, "Live bank" mono label, hairline, three figure rows
     (label 13px body left / figure 26px heading right, `tnum`): Items published `240`,
     Concepts covered `186`, Provenance chains complete `100%` (gold-700). Footer line
     mono 9.5px: "Validator · blind solve · cross-model check · judge rubric · human sign-off".
     **All figures come from the content package at build time — never hard-code.**
3. **Pipeline band** — `border-top: 1px solid divider`, `grid-template-columns: repeat(3,1fr)`,
   `padding: var(--space-6)` per cell, hairline between cells. Each: mono "STAGE 01/02/03"
   in accent-700, h4 19px/600 (Distil / Author / Gate), 12.5px justified body.
4. **Colophon footer** — background `--color-neutral-900`, text `--color-neutral-100`,
   `padding: var(--space-6) var(--space-8)`. Left: the NDA / provenance statement in mono
   10px/1.8 at 72% opacity (copy it verbatim from the repo README — legal-adjacent).
   Right: "Code MIT" and "Content CC BY 4.0" in `--color-accent-300`.

**Responsive:** hero collapses to one column under ~900px (card below copy); pipeline band
to one column with hairlines becoming top borders; nav links into a sheet under ~720px.

### 2. Catalog — `1j`

**Purpose:** choose a paper, and be told honestly when one isn't ready.

A **shelf of ruled rows**, not a card grid. Header: mono "Catalog" kicker + h2 40px/300
"Papers on the shelf"; right: search input (260px, placeholder "Search exams, domains,
concepts") + secondary "Filters" button.

Each row: `grid-template-columns: 1.6fr .9fr .9fr auto`, `gap: var(--space-4)`,
`padding: var(--space-4) 0`, `border-bottom: 1px solid var(--color-divider)`.
- Col 1: h3 22px/600 + status tag; 12.5px/1.7 description, max 38em, 70% ink.
- Col 2: mono label "Blueprint coverage"; a segmented bar — one 6px segment per domain,
  `gap: 2px`, covered segments `--color-accent`, uncovered `--color-accent-200`;
  then `186 / 194 concepts` at 13px with `tnum`.
- Col 3: mono label "Gates"; the four gate results in mono 11px/1.7, accent-700 when all
  pass, 60% ink when incomplete (`validator ✓ solve ✓ / judge ✓ sign-off ✓`).
- Col 4: primary "Start" + ghost "Dashboard".

**States:** `published` = accent tag, full opacity. `authoring` = outline tag, row at
`opacity: .72`, disabled "Notify me". `proposed` (the "Your next paper" invitation row) =
dashed outline tag, `opacity: .55`, secondary "Propose an exam".

**Responsive:** under ~860px each row becomes a stacked block — title, description,
coverage bar full width, gates as an inline mono line, actions as a row.

### 3. Exam player — `1k` (desktop), `1p` (mobile)

**Purpose:** answer one question with as little chrome as possible, with the map one glance
away.

**Header** (`padding: var(--space-3) var(--space-6)`, bottom hairline): 20px mark; exam slug
14px/600 heading; `QUESTION 14 / 60` mono 10px/.1em at 55% ink; then a **flexible 1px rule**
that doubles as the progress bar (a 3px gold segment sits on it at the completion
percentage); then the **mode segmented control**; then the timer, mono 11px `tnum`, 55% ink.

**Mode control** (this is the reveal-timing decision, made explicit): 1px divider border,
`radius: var(--radius-md)`, two options `padding: 5px 12px`, heading font 11px. Active =
`background: color-mix(in srgb, var(--color-accent) 14%, transparent)`, `color: accent-700`,
weight 600. **Practice** reveals the rationale immediately after each answer; **Exam** holds
all reveals to the end and hides per-question correctness. The control is disabled once the
first answer is recorded (mode is a property of the attempt).

**Body:** `grid-template-columns: 1fr 268px`.

Question column, `padding: var(--space-8) var(--space-8) var(--space-6)`:
- Kicker row: `Domain 2 · Resilient design` (mono 9px/.18em, accent-700) + question type
  (mono 9px/.12em, 40% ink) — `single choice` / `multiple response` / `scenario matching`.
- Stem: 27px/1.35, weight 400 heading font, max 32em, `text-wrap: pretty`.
- Options: `flex-direction: column`, `gap: 10px`, max 44em. Each is a `<label>` with a real
  input (radio for single, checkbox for multiple response — **square 2px-radius indicator
  for checkboxes**, so the affordance says "more than one"):
  - Unselected: `1px solid var(--color-divider)`, `radius: var(--radius-md)`,
    `padding: var(--space-3) var(--space-4)`, 15px round indicator with
    `1px solid var(--color-neutral-400)`.
  - Hover: `background: color-mix(in srgb, var(--color-accent) 5%, transparent)`.
  - **Selected:** `border-color: var(--color-accent)`,
    `background: color-mix(in srgb, var(--color-accent) 6%, transparent)`,
    `box-shadow: inset 2px 0 0 var(--color-accent)` (the gold left edge), indicator ringed
    gold with a 7px gold dot.
  - Letter: mono 11px weight 500, `margin-right: 8px`, 50% ink (accent-700 when selected).
  - Text: 14px/1.7 body.
- Hairline, then action row: secondary "Flag for review"; mono 9.5px keyboard hint
  `⏎ check · → next · F flag` at 42% ink; right-aligned ghost "Previous" + primary
  "Check answer" (label becomes "Next question" in Exam mode).

**Right rail** (`border-left: 1px solid divider`, `padding: var(--space-6) var(--space-4)`):
- "Question map": `grid-template-columns: repeat(6, 1fr)`, `gap: 4px`, cells 26px tall,
  mono 10px `tnum`, `radius: 2px`. States:
  - answered — `1px solid var(--color-accent-300)`, `background: accent @16%`
  - current — `background: var(--color-text)`, `color: neutral-100`
  - flagged — `1px dashed var(--color-accent)`
  - unseen — `1px solid var(--color-divider)`, text at 45%
  Legend in mono 8.5px. Cells are buttons; clicking jumps.
- Hairline, then "This sitting": per-domain `answered/total` with a 3px progress rule
  (`--color-neutral-200` track, `--color-accent` fill).

**Keyboard:** `A`–`D` select, `Enter` check/next, `→`/`←` navigate, `F` flag, `M` toggle map.
Focus ring required on options and map cells.

**Mobile (`1p`, 390px):** header condenses to mark + `14 / 60` + timer + "Map" ghost button.
The progress bar becomes a full-width strip of 1px-gap segments (gold = answered, ink =
current, neutral-200 = unseen). Stem 20px/1.4. Options `min-height: 48px`,
`padding: 13px var(--space-3)`, 13px/1.6 text — same selected treatment. Actions pin to a
bottom bar (`border-top` hairline, `padding: var(--space-3) var(--space-4)`): secondary
"Flag" + primary "Check answer" flexed to fill, both `min-height: 44px`. The question map is
a bottom sheet. Bottom tab bar (Exams / Progress / Review) appears outside a sitting only —
mono 9px/.1em uppercase labels, active tab marked by `inset 0 2px 0 var(--color-accent)`.

### 4. Rationale reveal — `1l` (desktop), second card of `1p` (mobile)

**Purpose:** explain the principle, then indict each distractor. **The keyed rationale must
never name an option letter** — that invariant is enforced by the repo validator, and the
layout is built so it never needs to.

Header row: mono kicker `Q14 · Domain 2 · concept C-007`, and a result tag pushed right
(`Correct` = accent tag; `Missed` = neutral tag).

`grid-template-columns: 1fr 340px`, `gap: var(--space-8)`.

Left:
- **"Why this holds"** block: `border-left: 2px solid var(--color-accent)`,
  `padding-left: var(--space-4)`. Mono label, then 15px/1.85 justified prose, max 40em.
  Renders `rationale.correct`.
- **"Why the others fail"**: one row per non-answer option,
  `grid-template-columns: 22px 1fr`, `gap: 14px`, separated by hairlines. Letter in mono
  11px at 50% ink; 13.5px/1.75 justified text from `rationale.distractors[letter]`; then
  the pattern line in mono 9px accent-700 — `pattern D19 · scales the wrong axis`
  (the numbered pattern from `distractor_patterns` plus its plain-words gloss).
  **Exactly one entry per non-answer option** — the validator guarantees this; render
  defensively anyway.
- Actions: primary "Next question", secondary "Add to review list", ghost "Something wrong
  here?" pushed right → opens `1r`.

Right — **provenance panel** (bordered card, `padding: var(--space-4)`): mono "Provenance"
label, hairline, then a `<dl>` at `grid-template-columns: auto 1fr`, `gap: 8px 14px`,
11.5px/1.6, with mono 9px keys: ORIGIN / CONCEPT / RULE / DERIVED (links to the derivation
doc) / SOURCE. Hairline, then the gate results in mono 9.5px/1.9 accent-700:
`validator ✓ / blind solve ✓ (2 models) / judge rubric ✓ 4.6 / 5 / human sign-off ✓ <date>`.
Closing note at 50% ink: "No source text reproduced. Chain complete — this item is
publishable."

For `licensed_import` items, ORIGIN shows the licence and attribution instead of
"Originally authored".

**Mobile:** stacks principle → distractors (condensed, `18px 1fr` grid) → provenance as a
compact card with just `authored ✓ · chain complete ✓ / judge · sign-off`. Actions pin.

### 5. Score report — `1m`

`grid-template-columns: .85fr 1.15fr`, `gap: var(--space-8)`.

Left: mono meta line (`Attempt 03 · 16 Aug 2026 · 58:41`); the score as a **108px weight-300
figure** with a 44px `%` at 45% ink and `tnum`; then a block opened by
`border-top: 1px solid var(--color-accent)` holding the 14px/1.8 justified coaching
paragraph; then primary "Review the N misses" + secondary "Dashboard".

Right: the domain table (see the dashboard spec below — same construction, exam-agnostic
weights from `manifest.json`), plus the footnote: "Vertical rule marks the domain's blueprint
weight — bars left of it cost you more than their length suggests."

### 6. Mastery dashboard (cross-attempt, exam-agnostic) — `1n`

Header: mono kicker `<slug> · your progress`, h2 36px/300 "Where the margin is", and three
figures right-aligned (READINESS in accent-700, ATTEMPTS, AVG / QUESTION) — mono 9px labels,
34px/400 heading-font figures with `tnum`.

Hairline, then two columns:
- **Concept coverage** — `grid-template-columns: repeat(18, 1fr)`, `gap: 3px`, cells
  `aspect-ratio: 1`. Four-step scale: untested `--color-neutral-200`, weak
  `--color-accent-300`, fair `--color-accent-500`, solid `--color-accent-700`. Legend
  "untested → solid" with the four swatches. One cell per concept in `concepts.json`;
  tooltip = concept id + title + items seen; click filters review mode.
- **Traps that catch you** — one row per distractor pattern: label + `N misses` (mono 11px),
  5px `--color-neutral-200` track with an `--color-accent-700` fill. Below, a bordered card
  with a plain-words coaching read of the top pattern.

### 7. Review mode — `1o`

The one screen where density beats calm. Header: mono "Review list" + h2 34px/300
"19 items held back"; right: count tags (`missed 16` accent, `flagged 5` dashed outline,
`both 2` neutral) + secondary "Drill these 19".

Table: `Item` (mono id, `tnum`) · `Question` (truncated stem, link in `--color-text`) ·
`Concept` (mono 11px) · `Your trap` (mono 11px pattern id, `—` when merely flagged) ·
`State` (tag, right-aligned). Rows open the reveal layout with the provenance panel
attached. Footnote in mono 9.5px explains that drilling reshuffles into an N-item set.

**Responsive:** under ~760px, rows become two-line blocks (stem on line 1; id · concept ·
trap · state as a mono meta line on line 2).

### 8. Sign-in — `1q`

520px card, `padding: var(--space-8)`, left-aligned. 26px mark, h2 32px/300 "Keep your
progress", 13.5px/1.8 body making the point that **papers work without an account** —
sign-in only carries progress across devices. Email field (`label` 11.5px body, 6px gap,
full-width input), full-width primary "Send a sign-in link" (magic link). Then an `or` rule
(hairline / mono 9px uppercase / hairline), full-width secondary "Continue with GitHub"
(GitHub is the contributor identity — it matters for `1r`). Ghost "Skip — start a paper
anonymously" with `padding-left: 0`. Footnote mono 9px: "No product telemetry. Attempts are
stored against your account only." — this reflects a hard rule in `CLAUDE.md`; keep it true.

Anonymous attempts live in localStorage and must be **migrated into the account** on first
sign-in.

### 9. Report a defect — `1r`

520px card, no padding on the card itself; header band is `--color-neutral-900` /
`--color-neutral-100`, `padding: var(--space-4) var(--space-6)`, with a mono
`Item 2.14 · CCAR-P` kicker in `--color-accent-300` and h3 24px/400 "Tell us what's wrong".

Body `padding: var(--space-6)`:
- **Defect type** — four radio rows in the same option-row style as the player (selected =
  gold border + 6% tint + gold dot). The four options are the four contribution types from
  `CONTRIBUTING.md`, in the repo's own order of value: second correct answer / keyed answer
  wrong / rationale doesn't hold / untested syllabus concept.
- **Your reasoning** — textarea, 3 rows, body font, resize vertical, label suffixed with a
  mono aside "— the part reviewers read first".
- **NDA attestation** — a required checkbox in a highlighted block:
  `border: 1px solid var(--color-accent-300)`, `background: var(--color-accent-100)`,
  12px/1.7 text in `--color-accent-900`, 14px square 2px-radius indicator. Copy: "I attest
  this report contains no content from a real exam sitting. NDA-protected material is
  rejected and removed." **Submit stays disabled until this is checked** — this is the one
  rule that cannot bend, expressed in the UI.
- Actions: primary "Open as a GitHub issue" (prefilled with item id + slug + type +
  reasoning), ghost "Cancel", and a mono 9px note "item id + slug attached".

---

## The CCAR-P dashboard (the main dashboard spec)

Read `2c` first — it names the six slots and the rule each obeys. `2a` is the post-submission
state, `2b` the in-progress state.

### Data (from `reference/initial-build-ccar-p.html`, authoritative)

63 items · 7 domains · **75% threshold**. Domain item counts and derived share of paper:

| Domain | Items | Share |
|---|---|---|
| D1 Solution Design & Architecture | 11 | 17.5% |
| D2 Claude Models, Prompting & Context | 8 | 12.7% |
| D3 Integration | 12 | 19.0% |
| D4 Evaluation, Testing & Optimization | 10 | 15.9% |
| D5 Governance, Safety & Risk | 9 | 14.3% |
| D6 Stakeholder Communication & Lifecycle | 9 | 14.3% |
| D7 Developer Productivity & Operations | 4 | 6.3% |

Share is **derived** (`items / total`), not authored — until `manifest.json` carries real
blueprint weights, in which case prefer those and label the column "Weight". The mock also
references **24 core architectural rules**; the "Architectural rules" cut in slot ④ reads
`syllabus_rule` coverage.

The scores shown in `2a` (46/63 = 73%, per-domain 82/63/75/60/89/78/50) are **illustrative**.

### Slot spec

| # | Slot | Data | Rule |
|---|---|---|---|
| 1 | Verdict header | `attempt.score`, `manifest.threshold`, correct/total | Headline states the gap **in questions** ("Two questions short"). Never a bare pass/fail badge. Figures: score 54px/300 with `tnum`; THRESHOLD and CORRECT as 24px/400 secondary figures. |
| 2 | Coaching note | weakest 2 domains by weight × gap, strongest 2 | Opened by `border-top: 1px solid var(--color-accent)`. Three sentences: where you stand, what is costing you, what is already safe. 14.5px/1.85 justified, max 66em. |
| 3 | Domain table | `manifest.domains[]`, selection counts, per-domain correct | Columns: Domain · Items (`9 / 11`) · Share · Score · **Against the threshold** · To the line. The bar is 7px on a `--color-neutral-200` track with an `--color-accent` fill and a **1px `--color-text` vertical rule at the threshold** (`top:-3px; bottom:-3px`). Domains with **fewer than 5 items** use `--color-accent-300` for the fill plus the footnote "the percentage is too coarse to act on alone". "To the line" reads `clear` (accent-700), `at the line`, or `+N item(s)` — items, never points. |
| 4 | Miss taxonomy | `distractor_patterns[chosen]`, `item.type`, `syllabus_rule` | Numbered patterns (D01–D20) restated in plain words ("Reached for a scaling or capacity knob"), count right-aligned in mono, 5px accent-700 bar, and a mono sub-line naming the domains (`D3 ×3 · D4 ×2`). Below: two secondary cuts — **by question type** (single choice / multiple response / scenario matching) and **architectural rules** (tested correctly / missed twice+ / untested). Close with one 13px justified sentence naming the single biggest behavioural pattern. |
| 5 | Study plan | `share × (threshold − score)`, bank items per concept | Ranked by points recoverable, **capped at three**, each a bordered card (first one carries `border-left: 2px solid var(--color-accent)`) with a mono rank kicker (`First · D4 Evaluation`), a mono `worth 3.2 pts` figure, 13px justified advice, and drill actions. Then **one deprioritised entry**, dashed border, mono 10px, named explicitly ("D7 — 4 items, worth 0.8 pts. Real but cheap.") so the omission is deliberate. |
| 6 | Actions | missed + flagged item ids | **One primary action only** — "Build a N-item retry set". Export is secondary. |

### In-progress state (`2b`) — replaces the old empty panel

520px card. Mono `<slug> · in progress` kicker; h3 30px/300 "41 of 63 answered"; a 13.5px
justified paragraph saying scoring stays sealed until submission (a score on partial answers
flatters), and that coverage is shown so you don't finish and discover a skipped domain. Then
per-domain `answered / total` rows: 12.5px label + mono `tnum` count, 5px neutral-200 track
with accent fill; **untouched domains render the label at 55% ink and an empty track**.
Hairline, then primary "Continue · Q42", secondary "Submit N answers", and a mono 9px
auto-save timestamp pushed right.

### Dashboard responsive rules

Under 900px: the domain table's Share and To-the-line columns move into the row's second
line as a mono meta line; slots ④ and ⑤ stack; ⑥ becomes a pinned bottom bar. **Bars never
below 5px; figures never below 12px.** The mobile progress view (third card of `1p`) is the
reference for the phone layout: 62px readiness figure, four domain bars with threshold
rules, and a 14-column coverage grid.

### What was deliberately dropped from the initial build

Kept: 7 domains and their counts, the 75% threshold, mistake analysis, study
recommendations, auto-save. Dropped, with reasons:
- **The score circle** — a 108px figure reads faster than a dial and needs no SVG.
- **The coral/slate palette** (`#da7756` on `#232733`) — replaced by the Classical ground.
- **The tab bar** (Overview / Exam / Dashboard) — these are routes, not tabs.
- **The fully-gated dashboard** — replaced by `2b`.
- **Question counts presented as if they were weights** — every score now carries its share.
- **Green/red result colours and the emoji in the disclaimer banner** — the manifest style
  block forbids emoji; result states are value-based.

---

## Interactions & behaviour

- **Routing:** `/` landing · `/exams` catalog · `/exams/<slug>` overview ·
  `/exams/<slug>/attempt/<id>` player · `/exams/<slug>/attempt/<id>/result` score report ·
  `/exams/<slug>/dashboard` · `/exams/<slug>/review` · `/sign-in`. Prerender every exam at
  build (`pnpm build` per `CLAUDE.md`).
- **Mode:** chosen at attempt start (Practice / Exam), immutable once answering begins.
  Practice reveals per question; Exam defers all reveals and hides correctness until submit.
- **Timer:** counts the sitting; muted styling until the last five minutes, then
  `--color-accent-700`. Never flashes or animates.
- **Answering:** selection is optimistic and persisted immediately (localStorage for
  anonymous, Supabase `attempts` for signed-in — the P1 seam). Auto-save indicator is a
  quiet mono timestamp, not a badge.
- **Flagging:** toggles on the item; drives both the map's dashed state and review mode.
- **Submission:** confirm when unanswered items remain, naming the count and the domains.
- **Transitions:** 120–180ms `ease-out` on hover/selection tint and border colour only.
  Bars animate width once on first paint (300ms `ease-out`) and never again. No page
  transitions, no reveal animations — the system is quiet.
- **Loading:** hairline skeletons (neutral-200 blocks at the real heights), never spinners.
- **Errors:** inline, above the action, in `--color-accent-700` with a 1px accent-300
  border — no red.
- **Validation:** defect report requires a type + the NDA attestation; reasoning is
  recommended, and submitting without it warns once.
- **Breakpoints:** ≥1200 desktop as drawn · 900–1199 rails narrow, tables shed derived
  columns · 600–899 single column, rails become sheets · <600 mobile as `1p`.
  Touch targets ≥44px, exam-option targets ≥48px.

## State

Per attempt: `slug`, `attemptId`, `mode`, `startedAt`, `elapsed`, `answers: Record<itemId, string|string[]>`,
`flags: Set<itemId>`, `currentIndex`, `submittedAt`, `revealed: Set<itemId>` (Practice).
Derived, never stored: score, per-domain correct/total, miss taxonomy, concept coverage,
study plan ranking. **Derivation belongs in `packages/engine/`** so the app renders and the
validator/tests can check the same functions. Global: theme (light/dark/system), session.

## Assets

- **Logo** — build from the `1a` spec above as SVG (two nested stroked squares, inner one
  open right). No external asset required.
- **Fonts** — Cormorant Garamond, Lora (Google Fonts); JetBrains Mono for metadata. Self-host
  via `next/font` for Vercel; weights 300/400/500/600 only.
- **Icons** — Lucide, imported per-icon.
- **Photography** — none used. If added, wrap in the `.plate` treatment
  (`filter: sepia(.22) saturate(.82) contrast(1.05)`, 6px `--color-surface` border, 1px
  divider outline). Never invent illustrations; use a labelled placeholder until real
  imagery exists.
- No Anthropic brand assets are used, and none should be — Mockka is explicitly unaffiliated
  with any certification vendor, and that statement is part of the landing page.

## Files in this bundle

| Path | What it is |
|---|---|
| `design/Mockka.dc.html` | The design reference. Open in a browser; option ids are anchors. |
| `design/classical-styles.css` | The Classical design-system stylesheet the prototype consumes — port its `:root` tokens. |
| `reference/initial-build-ccar-p.html` | Oliver's original single-file CCAR-P mock exam — authoritative for exam data, item schema and behaviour. |
| `reference/github.md` | Repo association and the screen → source-file map. |

## Open decisions for the developer to raise, not resolve

1. **Logo** — `1a` is the working default; `1b`/`1c` are live alternatives.
2. **Blueprint weights** — currently derived from item counts; needs a real `weight` field
   in `manifest.json`.
3. **Theme default** — shipped as `system`. If you'd rather Mockka open on Paper for everyone, that's a product call, not a design one.
4. **Readiness score** — shown in `1n`/`1p` but its formula is undefined. Either define it
   in the engine with a documented method or drop it; do not ship an unexplained number.
5. **Second catalog exam** — invented for layout. Real slugs come from `content/`.
6. **Distractor-pattern glosses** — the plain-words names for D01–D20 need a canonical table
   in `methodology/`; the dashboard reads it rather than hard-coding strings.
