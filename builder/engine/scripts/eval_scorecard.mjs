#!/usr/bin/env node
// Assemble the regression scorecard from the registry.
// Verdicts: RED (below floor / bad flip) · YELLOW (judged dim not run) · GREEN (go).
// Overall = worst dimension. The kernel ships with NO dimension runners wired — a project
// wires per-dimension runners; an empty registry is GREEN (nothing to regress yet).
import { readJSON, exists, isMain } from '../lib/fsx.mjs';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REGISTRY = resolve(HERE, '../eval/registry.json');
const OUT = resolve(HERE, '../eval/out/scorecard.json');

export function buildScorecard(registry) {
  const dims = registry.dimensions || [];
  const dimensions = dims.map((d) => ({
    id: d.id,
    // No runner in the kernel: a judged dim that hasn't been run is YELLOW (waiting), not RED.
    verdict: d.type === 'judged' ? 'YELLOW' : 'GREEN',
    note: 'no runner wired in kernel — project supplies runners',
  }));
  const overall = dimensions.some((r) => r.verdict === 'RED')
    ? 'RED'
    : dimensions.some((r) => r.verdict === 'YELLOW')
      ? 'YELLOW'
      : 'GREEN';
  return { overall, dimensions, count: dimensions.length };
}

function main() {
  if (!exists(REGISTRY)) {
    console.error('eval:scorecard — registry.json missing');
    process.exit(1);
  }
  const card = buildScorecard(readJSON(REGISTRY));
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, `${JSON.stringify(card, null, 2)}\n`);
  console.log(`scorecard: ${card.overall} (${card.count} dimensions) → ${OUT.replace(process.cwd() + '/', '')}`);
  process.exit(card.overall === 'RED' ? 1 : 0);
}

if (isMain(import.meta.url)) main();
