// WCAG AA contrast gate over the Classical token CSS — BOTH THEMES. The
// palette is computed, not eyeballed: any token edit that drops a declared
// pair below 4.5:1 in either Paper or Lamplight fails `pnpm test`. No DOM —
// this parses apps/web/app/globals.css.
//
// Theme model under test (Oliver's decision: dark is the default):
//   * the first :root block carries Lamplight (dark) values;
//   * :root[data-theme="light"] overrides with Paper;
//   * the @media print :root block must mirror the light block exactly
//     (print always uses Paper — Lamplight text would print near-white).
// Alpha tokens (the handoff's rgba roles) are composited over the pair's
// resolved background before measuring, so translucent inks are tested at
// their true rendered value.
//
// Classical specifics under test:
//   * --color-accent is a STROKE token in both themes (rules, borders, bar
//     fills, focus outlines). It never carries text; text-sized gold goes
//     through --color-accent-text (accent-700 on Paper, accent-400 on
//     Lamplight — handoff "not a straight inversion" #3).
//   * The legacy alias tokens (--primary, --ok, --bad, ...) are the export
//     seam: tools/export-exam.mjs component CSS consumes them, so their
//     resolved pairings are tested per theme too.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const css = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '..', 'app', 'globals.css'),
  'utf8',
);

function block(startNeedle: string, from = 0): string {
  const start = css.indexOf(startNeedle, from);
  assert.notEqual(start, -1, `${startNeedle} block present in globals.css`);
  return css.slice(start, css.indexOf('}', start));
}

const rootBlock = block(':root {'); // Lamplight — the default theme
const lightBlock = block(':root[data-theme="light"]'); // Paper overrides
// lastIndexOf: the file's header comment mentions "@media print" in prose;
// the real block is the last occurrence.
const printStart = css.lastIndexOf('@media print');
assert.notEqual(printStart, -1, '@media print block present');
const printBlock = block(':root {', printStart); // Paper again, for print

type Theme = 'dark' | 'light';
interface Rgba { r: number; g: number; b: number; a: number }

function rawToken(name: string, theme: Theme): string {
  const re = new RegExp(`--${name}:\\s*([^;]+);`);
  if (theme === 'light') {
    const m = lightBlock.match(re);
    if (m && m[1]) return m[1].trim();
  }
  const m = rootBlock.match(re);
  if (!m || !m[1]) throw new Error(`token --${name} not found for theme ${theme}`);
  return m[1].trim();
}

/** Resolve a token to an rgba, following var(--x) alias chains. */
function tokenColor(name: string, theme: Theme, depth = 0): Rgba {
  if (depth > 6) throw new Error(`var chain too deep resolving --${name}`);
  const value = rawToken(name, theme);
  const hex = value.match(/^#([0-9a-fA-F]{6})$/);
  if (hex) {
    const parts = value.slice(1).match(/../g) as string[];
    const [r, g, b] = parts.map((h) => parseInt(h, 16));
    return { r: r ?? 0, g: g ?? 0, b: b ?? 0, a: 1 };
  }
  const rgba = value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
  if (rgba) {
    return {
      r: Number(rgba[1]),
      g: Number(rgba[2]),
      b: Number(rgba[3]),
      a: Number(rgba[4]),
    };
  }
  const ref = value.match(/^var\(--([\w-]+)\)$/);
  if (ref && ref[1]) return tokenColor(ref[1], theme, depth + 1);
  throw new Error(`token --${name} (${theme}) is not hex, rgba or a var ref: ${value}`);
}

function composite(fg: Rgba, bg: Rgba): Rgba {
  if (fg.a >= 1) return fg;
  return {
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
    a: 1,
  };
}

function luminance(c: Rgba): number {
  const [r, g, b] = [c.r, c.g, c.b]
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * (r ?? 0) + 0.7152 * (g ?? 0) + 0.0722 * (b ?? 0);
}

/** Contrast of fg token over bg token, alphas composited over the theme ground. */
function contrast(fgName: string, bgName: string, theme: Theme): number {
  const ground = tokenColor('color-bg', theme);
  const bg = composite(tokenColor(bgName, theme), ground);
  const fg = composite(tokenColor(fgName, theme), bg);
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/** [label, foreground token, background token] — every text-bearing pairing.
 *  Asserted in BOTH themes. */
const PAIRS: Array<[string, string, string]> = [
  // — app text roles —
  ['body text on ground', 'color-text', 'color-bg'],
  ['body text on surface (modal)', 'color-text', 'color-surface'],
  ['muted text on ground', 'color-text-muted', 'color-bg'],
  ['muted text on surface', 'color-text-muted', 'color-surface'],
  ['long-form text on ground', 'color-text-body', 'color-bg'],
  ['long-form text on surface', 'color-text-body', 'color-surface'],
  ['subtle text on ground', 'color-text-subtle', 'color-bg'],
  ['gold text on ground', 'color-accent-text', 'color-bg'],
  ['gold text on surface', 'color-accent-text', 'color-surface'],
  ['gold text on gold fill', 'color-accent-text', 'color-accent-fill'],
  ['fill text on gold fill (tags, notices)', 'color-accent-fill-text', 'color-accent-fill'],
  ['body text on gold fill (graded key row)', 'color-text', 'color-accent-fill'],
  ['muted letter on gold fill', 'color-text-muted', 'color-accent-fill'],
  ['fill text on neutral fill (missed)', 'color-neutral-fill-text', 'color-neutral-fill'],
  ['body text on neutral fill', 'color-text', 'color-neutral-fill'],
  ['muted letter on neutral fill', 'color-text-muted', 'color-neutral-fill'],
  ['ink chip text on ink chip', 'color-ink-chip-text', 'color-ink-chip-bg'],
  ['inverse text on inverse band', 'color-inverse-text', 'color-inverse-bg'],
  ['inverse muted on inverse band', 'color-inverse-muted', 'color-inverse-bg'],
  ['inverse accent on inverse band', 'color-inverse-accent', 'color-inverse-bg'],
  // — export alias seam (tools/export-exam.mjs component CSS) —
  ['export primary text on ground', 'primary', 'bg'],
  ['export primary text on card', 'primary', 'surface'],
  ['export primary text on surface-2', 'primary', 'surface-2'],
  ['export muted text on surface-2', 'text-muted', 'surface-2'],
  ['export button text on primary fill', 'on-primary', 'primary'],
  ['export button text on primary hover', 'on-primary', 'primary-hover'],
  ['export ok text on its tint', 'ok', 'ok-bg'],
  ['export bad text on its tint', 'bad', 'bad-bg'],
  ['export warn text on its tint', 'warn', 'warn-bg'],
  ['export info text on its tint', 'info', 'info-bg'],
  ['export text on ok fill', 'on-ok', 'ok'],
  ['export text on bad fill', 'on-bad', 'bad'],
  ['export header title on header', 'header-text', 'header-bg'],
  ['export header subtitle on header', 'header-muted', 'header-bg'],
];

for (const theme of ['dark', 'light'] as const) {
  test(`[${theme}] all ${PAIRS.length} colour pairs meet WCAG AA (4.5:1)`, () => {
    const belowAA: string[] = [];
    for (const [label, fg, bg] of PAIRS) {
      const ratio = contrast(fg, bg, theme);
      if (ratio < 4.5) belowAA.push(`${label} ${ratio.toFixed(2)}:1`);
    }
    assert.deepEqual(belowAA, [], `[${theme}] pairs below AA: ${belowAA.join('; ')}`);
  });

  // Non-text minimum (WCAG 1.4.11): the focus ring and the gold stroke
  // against both grounds.
  test(`[${theme}] focus ring / gold stroke holds 3:1 on the ground`, () => {
    const ratio = contrast('color-accent', 'color-bg', theme);
    assert.ok(ratio >= 3, `accent on ground ${ratio.toFixed(2)}:1 in ${theme}`);
  });
}

// --color-accent is the brand stroke — legal for decoration, illegal for
// anything a reader has to make out, in either theme. Same for its legacy
// alias and for accent ramp steps used directly as text (all text-sized
// gold must route through --color-accent-text so it can flip per theme).
test('decorative gold never carries text', () => {
  for (const name of ['color-accent', 'accent', 'color-accent-2']) {
    const uses = (
      css.match(new RegExp(`(?:^|[^-\\w])color:\\s*var\\(--${name}\\)`, 'gm')) ?? []
    ).length;
    assert.equal(uses, 0, `${uses} use(s) of --${name} as a text colour`);
  }
  const rampAsText = [...css.matchAll(/(?:^|[^-\w])color:\s*var\(--color-accent-(\d+)\)/g)];
  assert.deepEqual(
    rampAsText.map((m) => `accent-${m[1]}`),
    [],
    'accent ramp steps used directly as text — route through --color-accent-text',
  );
});

// Solid gold fills are allowed ONLY on elements that are empty by
// construction (bar fills, blueprint segments). The set is pinned exactly.
const SOLID_ACCENT_FILL_ALLOWLIST = ['.bar > i', '.shelf-segs i'];

test('solid gold backgrounds only on the pinned decorative set', () => {
  const fills: string[] = [];
  for (const m of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
    const body = m[2] ?? '';
    if (!/background:\s*var\(--(?:color-)?accent\)/.test(body)) continue;
    const selector = (m[1] ?? '').trim().split('\n').pop()?.trim() ?? '';
    const isDecorativeMarker = /::(before|after)/.test(selector) && /content:\s*""/.test(body);
    if (!isDecorativeMarker) fills.push(selector);
  }
  assert.deepEqual(
    fills.sort(),
    [...SOLID_ACCENT_FILL_ALLOWLIST].sort(),
    'solid --color-accent fills drifted from the pinned decorative allowlist',
  );
});

// A solid fill must never take a hardcoded colour — that is how the CCAR-P
// score ring and skip link once sat at 1.92:1 while every token passed.
test('no hardcoded white text on themed fills', () => {
  const hardcoded = (css.match(/color:\s*#fff\b/gi) ?? []).length;
  assert.equal(hardcoded, 0, `${hardcoded} occurrence(s) of color:#fff`);
});

// Theme integrity: every token the light block overrides must exist in the
// dark :root (no light-only token that would be undefined in the default
// theme), and the print block must mirror the light block exactly.
function declarations(b: string): Map<string, string> {
  const out = new Map<string, string>();
  for (const m of b.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    out.set(m[1] as string, (m[2] as string).trim());
  }
  return out;
}

test('every light-theme override has a dark default', () => {
  const dark = declarations(rootBlock);
  const missing = [...declarations(lightBlock).keys()].filter((k) => !dark.has(k));
  assert.deepEqual(missing, [], `light-only tokens with no dark default: ${missing.join(', ')}`);
});

test('print block mirrors the light theme token-for-token', () => {
  assert.deepEqual(
    Object.fromEntries(declarations(printBlock)),
    Object.fromEntries(declarations(lightBlock)),
    'the @media print :root drifted from :root[data-theme="light"]',
  );
});

// The export seam: tools/export-exam.mjs extracts both theme blocks at
// build time and its component CSS consumes the legacy names. Every one
// must stay declared, or the standalone export silently loses its palette.
const EXPORT_TOKENS = [
  'bg', 'surface', 'surface-2', 'text', 'text-muted', 'border', 'accent',
  'primary', 'primary-hover', 'on-primary', 'primary-soft',
  'ok', 'ok-bg', 'on-ok', 'bad', 'bad-bg', 'on-bad', 'warn', 'warn-bg',
  'info', 'info-bg', 'header-bg', 'header-text', 'header-muted',
  'radius', 'radius-sm', 'shadow', 'font', 'mono', 'maxw',
];

test('export alias tokens all declared in :root', () => {
  const missing = EXPORT_TOKENS.filter((t) => {
    try {
      rawToken(t, 'dark');
      return false;
    } catch {
      return true;
    }
  });
  assert.deepEqual(missing, [], `export tokens missing: ${missing.join(', ')}`);
});

// The exports open from file:// with no network: if the webfont variables are
// absent the stacks must degrade to installed serifs, not sans.
test('font token stacks carry offline serif/mono fallbacks', () => {
  assert.match(rawToken('font-heading', 'dark'), /serif\s*$/, '--font-heading must end in serif');
  assert.match(rawToken('font-body', 'dark'), /serif\s*$/, '--font-body must end in serif');
  assert.match(rawToken('font-mono', 'dark'), /monospace\s*$/, '--font-mono must end in monospace');
});
