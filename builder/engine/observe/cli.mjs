#!/usr/bin/env node
// Summarize a run log and fail-closed on budget. Usage:
//   node engine/observe/cli.mjs <run-log.jsonl> [--budget-tokens N] [--budget-micros N]
// The log is one JSON event per line: {"tokens":123,"ms":45,"costMicros":6,"note":"lane A"}
import { readFileSync } from 'node:fs';
import { RunMeter } from './meter.mjs';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
const flag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? Number(args[i + 1]) : Infinity;
};

if (!file) {
  console.log('usage: observe <run-log.jsonl> [--budget-tokens N] [--budget-micros N]');
  process.exit(0);
}

const meter = new RunMeter({ budgetTokens: flag('--budget-tokens'), budgetMicros: flag('--budget-micros'), label: file });
let halted = false;
for (const line of readFileSync(file, 'utf8').split('\n').filter(Boolean)) {
  let ev;
  try {
    ev = JSON.parse(line);
  } catch {
    continue;
  }
  try {
    meter.record(ev);
  } catch {
    halted = true;
    break;
  }
}
const summary = meter.summary();
console.log(JSON.stringify(summary, null, 2));
process.exit(halted || summary.overBudget ? 1 : 0);
