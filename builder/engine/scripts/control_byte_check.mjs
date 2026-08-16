#!/usr/bin/env node
// Rung-4 enforcement of learning L-0002: raw control bytes in source/text files silently
// flip git to binary-mode and silence grep. This check makes the lesson un-forgettable:
// any tracked text-like file containing a control byte (other than \t \n \r) fails the gate.
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isMain } from '../lib/fsx.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../../');

const TEXT_EXT = new Set(['.mjs', '.js', '.ts', '.json', '.md', '.yml', '.yaml', '.css', '.html', '.txt', '.csv', '.sh']);

/** Offsets of forbidden control bytes (anything <0x20 except \t\n\r, plus DEL 0x7f). */
export function findControlBytes(buf) {
  const hits = [];
  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    if ((b < 0x20 && b !== 0x09 && b !== 0x0a && b !== 0x0d) || b === 0x7f) hits.push({ offset: i, byte: b });
  }
  return hits;
}

export function checkFiles(files, root = ROOT) {
  const problems = [];
  for (const rel of files) {
    if (!TEXT_EXT.has(extname(rel))) continue;
    let buf;
    try {
      buf = readFileSync(resolve(root, rel));
    } catch {
      continue;
    }
    for (const h of findControlBytes(buf).slice(0, 3)) {
      problems.push(`${rel}: control byte 0x${h.byte.toString(16).padStart(2, '0')} at offset ${h.offset}`);
    }
  }
  return problems;
}

function main() {
  const tracked = execSync('git ls-files', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean);
  const problems = checkFiles(tracked);
  if (problems.length) {
    console.error(`control-byte check FAIL (L-0002):\n - ${problems.join('\n - ')}`);
    process.exit(1);
  }
  console.log(`control-byte check: OK (${tracked.length} tracked files — no raw control bytes)`);
  process.exit(0);
}

if (isMain(import.meta.url)) main();
