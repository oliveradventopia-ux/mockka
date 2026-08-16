#!/usr/bin/env node
// The regression-gate: validate the registry's integrity. An empty corpus is valid for a new
// project (regression discipline is scale-gated). A project extends this to enforce
// "touch an agentic path ⇒ grow the corpus" against a PR diff.
import { readJSON, exists, isMain } from '../lib/fsx.mjs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REGISTRY = resolve(HERE, '../eval/registry.json');

export function validateRegistry(reg) {
  const errors = [];
  if (reg == null || typeof reg !== 'object') {
    errors.push('registry must be an object');
    return errors;
  }
  for (const k of ['agenticPaths', 'harnessPaths', 'dimensions']) {
    if (!Array.isArray(reg[k])) errors.push(`registry.${k} must be an array`);
  }
  const ids = new Set();
  for (const [i, d] of (reg.dimensions ?? []).entries()) {
    if (!d || typeof d !== 'object') {
      errors.push(`dimensions[${i}] must be an object`);
      continue;
    }
    if (!d.id) errors.push(`dimensions[${i}] missing id`);
    else if (ids.has(d.id)) errors.push(`duplicate dimension id '${d.id}'`);
    else ids.add(d.id);
    if (d.type && !['deterministic', 'judged'].includes(d.type)) {
      errors.push(`dimensions[${i}].type must be 'deterministic' | 'judged'`);
    }
    if (d.floor != null && typeof d.floor !== 'number') {
      errors.push(`dimensions[${i}].floor must be a number`);
    }
  }
  return errors;
}

function main() {
  if (!exists(REGISTRY)) {
    console.error('regression-guard — registry.json missing');
    process.exit(1);
  }
  const errors = validateRegistry(readJSON(REGISTRY));
  if (errors.length) {
    console.error(`regression-guard FAIL:\n - ${errors.join('\n - ')}`);
    process.exit(1);
  }
  console.log('regression-guard: OK (registry valid; empty corpus is valid for a new project)');
  process.exit(0);
}

if (isMain(import.meta.url)) main();
