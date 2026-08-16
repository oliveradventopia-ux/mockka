#!/usr/bin/env node
/**
 * PostToolUse trace hook (ADR-0004): logs each tool event of a pipeline session
 * as JSONL under .claude/traces/ (gitignored) and forwards a span to local Opik
 * when it is reachable.
 *
 * Fail-silent by contract: tracing must never break or slow a session. Any
 * error exits 0, and the Opik POST is capped at 800 ms.
 */

import { appendFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OPIK_URL = process.env.OPIK_URL ?? 'http://localhost:5173';
const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

async function main() {
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  if (!raw) return;

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return;
  }

  const record = {
    ts: new Date().toISOString(),
    session_id: event.session_id ?? 'unknown',
    event: event.hook_event_name ?? 'PostToolUse',
    tool: event.tool_name ?? 'unknown',
    // Inputs only in summary form — full payloads live in the session transcript.
    input_summary: summarize(event.tool_input),
    cwd: event.cwd,
  };

  try {
    const dir = join(REPO_ROOT, '.claude', 'traces');
    mkdirSync(dir, { recursive: true });
    appendFileSync(join(dir, `${record.session_id}.jsonl`), JSON.stringify(record) + '\n');
  } catch {
    /* fail-silent */
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 800);
    await fetch(`${OPIK_URL}/api/v1/private/spans`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        name: record.tool,
        type: 'tool',
        trace_id: undefined,
        start_time: record.ts,
        end_time: record.ts,
        input: { summary: record.input_summary },
        metadata: { session_id: record.session_id, cwd: record.cwd, source: 'mockka-trace-hook' },
      }),
    }).catch(() => {});
    clearTimeout(timer);
  } catch {
    /* fail-silent */
  }
}

function summarize(input) {
  if (input == null) return null;
  const s = typeof input === 'string' ? input : JSON.stringify(input);
  return s.length > 400 ? s.slice(0, 400) + '…' : s;
}

main().then(
  () => process.exit(0),
  () => process.exit(0),
);
