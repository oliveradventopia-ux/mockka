#!/usr/bin/env node
// Tier-A compare: per-dimension verdict flips between the current scorecard and the committed
// snapshot. A new project has no snapshot yet → nothing to compare (pass). Once a snapshot is
// committed, any flip is surfaced in the reviewable diff.
import { readJSON, exists, isMain } from '../lib/fsx.mjs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const CURRENT = resolve(HERE, '../eval/out/scorecard.json');
const SNAPSHOT = resolve(HERE, '../eval/snapshot.main.json');

export function compare(current, snapshot) {
  const prev = Object.fromEntries((snapshot?.dimensions ?? []).map((d) => [d.id, d.verdict]));
  const flips = [];
  for (const d of current?.dimensions ?? []) {
    if (prev[d.id] != null && prev[d.id] !== d.verdict) {
      flips.push({ id: d.id, from: prev[d.id], to: d.verdict });
    }
  }
  return flips;
}

function main() {
  if (!exists(CURRENT)) {
    console.log('eval-compare: no current scorecard (run eval:scorecard first) — skipping');
    process.exit(0);
  }
  if (!exists(SNAPSHOT)) {
    console.log('eval-compare: no committed snapshot — nothing to compare (new project)');
    process.exit(0);
  }
  const flips = compare(readJSON(CURRENT), readJSON(SNAPSHOT));
  if (flips.length) {
    console.error(`eval-compare: per-dimension flips:\n${flips.map((f) => ` - ${f.id}: ${f.from} → ${f.to}`).join('\n')}`);
    process.exit(1);
  }
  console.log('eval-compare: no flips');
  process.exit(0);
}

if (isMain(import.meta.url)) main();
