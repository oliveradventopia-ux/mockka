-- Mockka P1 seam: attempts + pgvector. Zero runtime calls in P0 (plan Decisions 3, 8, 10).

-- pgvector now so P1 RAG needs no schema migration.
create extension if not exists vector;

-- One attempt row per (user, exam). `state` stores the exact localStorage attempt
-- shape ({answers, flags, submitted, timed, endsAt, ...}) so P1 login-migration is
-- an upsert, not a transform.
create table public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  exam_slug text not null,
  state jsonb not null default '{}'::jsonb,
  score numeric,
  started_at timestamptz,
  submitted_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (user_id, exam_slug)
);

alter table public.attempts enable row level security;

create policy "attempts_owner_select" on public.attempts
  for select using ((select auth.uid()) = user_id);

create policy "attempts_owner_insert" on public.attempts
  for insert with check ((select auth.uid()) = user_id);

create policy "attempts_owner_update" on public.attempts
  for update using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "attempts_owner_delete" on public.attempts
  for delete using ((select auth.uid()) = user_id);
