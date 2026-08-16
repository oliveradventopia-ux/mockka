// WCAG AA contrast gate over the ported token CSS — the app-test.mjs colour
// checks from ccar-p-mock-exam, re-expressed as node:test cases. The palette
// is computed, not eyeballed: any token edit that drops a declared pair below
// 4.5:1 fails `pnpm test`. No DOM — this parses apps/web/app/globals.css.

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

function token(name: string): string {
  const m = rootBlock.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  if (!m || !m[1]) throw new Error(`token --${name} not found in :root`);
  return m[1];
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
  ['body text', 'text', 'bg'],
  ['body text on card', 'text', 'surface'],
  ['muted text on background', 'text-muted', 'bg'],
  ['muted text on card', 'text-muted', 'surface'],
  ['muted text on surface-2', 'text-muted', 'surface-2'],
  ['primary as link on card', 'primary', 'surface'],
  ['primary as link on background', 'primary', 'bg'],
  ['primary on surface-2', 'primary', 'surface-2'],
  ['active tab text on its tint', 'primary', 'bg'],
  ['button text on primary', 'on-primary', 'primary'],
  ['button text on primary hover', 'on-primary', 'primary-hover'],
  ['success text on its tint', 'ok', 'ok-bg'],
  ['error text on its tint', 'bad', 'bad-bg'],
  ['warning text on its tint', 'warn', 'warn-bg'],
  ['info text on its tint', 'info', 'info-bg'],
  ['score ring text on pass fill', 'on-ok', 'ok'],
  ['score ring text on fail fill', 'on-bad', 'bad'],
  ['header title on header', 'header-text', 'header-bg'],
  ['header subtitle on header', 'header-muted', 'header-bg'],
];

test(`all ${PAIRS.length} colour pairs meet WCAG AA (4.5:1)`, () => {
  const belowAA: string[] = [];
  for (const [label, fg, bg] of PAIRS) {
    const ratio = contrast(token(fg), token(bg));
    if (ratio < 4.5) belowAA.push(`${label} ${ratio.toFixed(2)}:1`);
  }
  assert.deepEqual(belowAA, [], `pairs below AA: ${belowAA.join('; ')}`);
});

// --accent is the brand tone at ~3.1:1, which is legal for decoration and
// illegal for anything a reader has to make out. Two rules:
//   * never a text colour, anywhere;
//   * never a background on a rule that could contain text. Pseudo-element
//     markers (::before / ::after with content:"") are exempt because they hold
//     no author text and are decoration by construction.
test('decorative accent never carries text', () => {
  const accentAsText = (css.match(/(?:^|[^-\w])color:\s*var\(--accent\)/gm) ?? []).length;
  assert.equal(accentAsText, 0, `${accentAsText} use(s) of --accent as a text colour`);

  const accentFills: string[] = [];
  for (const m of css.matchAll(/([^{}]+)\{([^}]*background:\s*var\(--accent\)[^}]*)\}/g)) {
    const selector = (m[1] ?? '').trim().split('\n').pop()?.trim() ?? '';
    const body = m[2] ?? '';
    const isDecorativeMarker = /::(before|after)/.test(selector) && /content:\s*""/.test(body);
    if (!isDecorativeMarker) accentFills.push(selector);
  }
  assert.deepEqual(
    accentFills,
    [],
    `--accent as background on text-bearing rule(s): ${accentFills.join(', ')}`,
  );
});

// A solid fill must never take a hardcoded colour — that is how the CCAR-P
// score ring and skip link once sat at 1.92:1 while every token passed.
test('no hardcoded white text on themed fills', () => {
  const hardcoded = (css.match(/color:\s*#fff\b/gi) ?? []).length;
  assert.equal(hardcoded, 0, `${hardcoded} occurrence(s) of color:#fff`);
});
