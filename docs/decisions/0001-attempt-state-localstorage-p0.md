# ADR-0001 — Attempt state lives in localStorage in P0

**Status:** accepted (2026-08-16) · **Plan:** Decision 3/10

P0 has no accounts, so attempt state (answers, flags, timer, submission) persists in
localStorage under `mockka.<slug>.v1`, in the exact shape the CCAR-P app proved. The
player consumes an `AttemptStore` interface; localStorage is the only adapter shipped.

**Accepted trade-off:** answer keys and rationales ship to the browser and grading is
client-side — the same stance as the CCAR-P self-contained file. Acceptable while
there are no leaderboards or accounts; grading lives in `@mockka/engine` so it can
move into a Route Handler when that changes.

**P1 seam:** `supabase/migrations/0001_init.sql` stores the identical state shape in
`attempts.state` (jsonb). Login migration = read localStorage keys, upsert one row per
exam. No rearchitecting.
