// WCAG AA contrast gate over the Classical token CSS. The palette is
// computed, not eyeballed: any token edit that drops a declared pair below
// 4.5:1 fails `pnpm test`. No DOM — this parses apps/web/app/globals.css.
//
// Classical specifics under test:
//   * --color-accent (#b68235, ~3.02:1 on the ground) is a STROKE token —
//     rules, borders, bar fills, focus outlines. It must never carry text,
//     and it may only be a solid background on the empty-by-construction
//     allowlist below. Text in gold uses --color-accent-700 (5.97:1 on bg).
//   * The legacy alias tokens (--primary, --ok, --bad, ...) are the export
//     seam: tools/export-exam.mjs component CSS consumes them, so their
//     resolved pairings are tested here too.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const css = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '..', 'app', 'globals.css'),
  'utf8',
);

const rootStart = css.indexOf(':root {');
assert.notEqual(rootStart, -1, ':root block present in globals.css');
const rootBlock = css.slice(rootStart, css.indexOf('}', rootStart));

/** Raw declared value of a token (may be a hex, a var ref, or a stack). */
function rawToken(name: string): string {
  const m = rootBlock.match(new RegExp(`--${name}:\\s*([^;]+);`));
  if (!m || !m[1]) throw new Error(`token --${name} not found in :root`);
  return m[1].trim();
}

/** Resolve a token to a 6-digit hex, following var(--x) alias chains. */
function token(name: string, depth = 0): string {
  if (depth > 5) throw new Error(`var chain too deep resolving --${name}`);
  const value = rawToken(name);
  if (/^#[0-9a-fA-F]{6}$/.test(value)) return value;
  const ref = value.match(/^var\(--([\w-]+)\)$/);
  if (ref && ref[1]) return token(ref[1], depth + 1);
  throw new Error(`token --${name} is neither hex nor a var ref: ${value}`);
}

function luminance(hex: string): number {
  const parts = hex.replace('#', '').match(/../g);
  if (!parts) throw new Error(`bad hex colour ${hex}`);
  const [r = 0, g = 0, b = 0] = parts
    .map((h) => parseInt(h, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(fg: string, bg: string): number {
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/** [label, foreground token, background token] — every text-bearing pairing. */
const PAIRS: Array<[string, string, string]> = [
  // — app text roles —
  ['body text on ground', 'color-text', 'color-bg'],
  ['body text on surface (modal)', 'color-text', 'color-surface'],
  ['muted text on ground', 'color-text-muted', 'color-bg'],
  ['muted text on surface', 'color-text-muted', 'color-surface'],
  ['gold text on ground', 'color-accent-700', 'color-bg'],
  ['gold text on surface', 'color-accent-700', 'color-surface'],
  ['gold tag text on its tint', 'color-accent-800', 'color-accent-100'],
  ['notice text on gold tint', 'color-accent-900', 'color-accent-100'],
  ['gold verdict on graded-key fill', 'color-accent-700', 'color-accent-100'],
  ['body text on graded-key fill', 'color-text', 'color-accent-100'],
  ['muted letter on graded-key fill', 'color-text-muted', 'color-accent-100'],
  ['neutral tag text on its tint', 'color-neutral-800', 'color-neutral-100'],
  ['muted letter on graded-miss fill', 'color-text-muted', 'color-neutral-100'],
  ['ink chip text on ink chip', 'color-ink-chip-text', 'color-ink-chip-bg'],
  ['colophon text on colophon ground', 'color-colophon-text', 'color-colophon-bg'],
  ['colophon muted on colophon ground', 'color-colophon-muted', 'color-colophon-bg'],
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

test(`all ${PAIRS.length} colour pairs meet WCAG AA (4.5:1)`, () => {
  const belowAA: string[] = [];
  for (const [label, fg, bg] of PAIRS) {
    const ratio = contrast(token(fg), token(bg));
    if (ratio < 4.5) belowAA.push(`${label} ${ratio.toFixed(2)}:1`);
  }
  assert.deepEqual(belowAA, [], `pairs below AA: ${belowAA.join('; ')}`);
});

// --color-accent is the brand stroke at ~3:1 — legal for decoration, illegal
// for anything a reader has to make out. Same rule for its legacy alias
// --accent, and for every ramp step lighter than 700.
test('decorative gold never carries text', () => {
  for (const name of ['color-accent', 'accent', 'color-accent-2']) {
    const uses = (
      css.match(new RegExp(`(?:^|[^-\\w])color:\\s*var\\(--${name}\\)`, 'gm')) ?? []
    ).length;
    assert.equal(uses, 0, `${uses} use(s) of --${name} as a text colour`);
  }
  // Any accent ramp step used as a text colour must be 700 or darker.
  for (const m of css.matchAll(/(?:^|[^-\w])color:\s*var\(--color-accent-(\d+)\)/g)) {
    const step = Number(m[1]);
    assert.ok(
      step >= 700,
      `--color-accent-${step} used as a text colour — the AA text floor is accent-700`,
    );
  }
});

// Solid gold fills are allowed ONLY on elements that are empty by
// construction (bar fills, blueprint segments). The set is pinned exactly:
// a new solid-gold background anywhere else fails the gate and must either
// become a tint or be added here with justification.
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

// The export seam: tools/export-exam.mjs extracts this :root at build time
// and its component CSS consumes the legacy names. Every one must stay
// declared, or the standalone export silently loses its palette.
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
      rawToken(t);
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
  assert.match(rawToken('font-heading'), /serif\s*$/, '--font-heading must end in serif');
  assert.match(rawToken('font-body'), /serif\s*$/, '--font-body must end in serif');
  assert.match(rawToken('font-mono'), /monospace\s*$/, '--font-mono must end in monospace');
});
