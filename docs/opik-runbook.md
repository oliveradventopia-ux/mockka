# Opik runbook — builder-side tracing (ADR-0004)

Local, self-hosted Opik traces **pipeline agent sessions**. The product ships zero
telemetry; git artifacts (`eval/*.json`, derivation docs) remain the decision record.

## Where

- Install: `~/LifeOS/vendor/opik` (shallow clone of comet-ml/opik)
- UI: http://localhost:5173
- Prereq: colima running + docker compose plugin (installed via
  `brew install docker-compose`, linked into `~/.docker/cli-plugins/`)

## Start / stop

```bash
cd ~/LifeOS/vendor/opik
./opik.sh            # start missing containers + show status
./opik.sh --verify   # health check
./opik.sh --stop     # stop the stack
```

Keep Opik **stopped** when not running pipeline sessions — it is a full stack
(MySQL, ClickHouse, Redis, MinIO, backend, frontend) and idles at real memory cost.

## How traces flow

1. `.claude/settings.json` registers a `PostToolUse` hook → `tools/trace-hook.mjs`.
2. The hook appends one JSONL record per tool event to `.claude/traces/<session>.jsonl`
   (gitignored — always works, even with Opik down).
3. When Opik is reachable at `OPIK_URL` (default `http://localhost:5173`), the hook
   forwards a span (`POST /api/v1/private/spans`), capped at 800 ms, fail-silent.

The hook must never break a session: any error exits 0.

## Verify end-to-end

1. `./opik.sh` → UI reachable at :5173
2. Run any tool call in a Mockka Claude Code session
3. `ls .claude/traces/` shows the session file growing
4. The span appears in the Opik UI project view

## Deferred

Claude Code OTel export (metrics/events via OTLP) into Opik's collector — revisit
when Opik's OTLP ingest path is verified; the hook covers the operational-lens need
for P0.
