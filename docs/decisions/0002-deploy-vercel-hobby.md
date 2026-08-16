# ADR-0002 — Deploy target is Vercel Hobby

**Status:** accepted (2026-08-16) · **Plan:** Decision 5

The repo is private; GitHub Pages does not serve private repos on the free plan, so
the CCAR-P deploy pattern does not carry over. Vercel Hobby is free, supports private
repos, and is zero-config for Next.js, with preview deploys per PR.

**Consequences:** Oliver creates the Vercel account and imports the repo (one-time
flagged action). No deploy workflow in CI — Vercel's Git integration handles it. The
app stays fully static-prerenderable, so switching targets later (public repo + Pages
export, or any static host) remains a config choice, not architecture.
