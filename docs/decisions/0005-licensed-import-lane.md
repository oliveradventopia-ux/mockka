# ADR-0005 — Licensed-import lane, commercial-compatible licenses only

**Status:** accepted (2026-08-16) · **Plan:** Decision 12

Bank items may be imported from sources under CC BY / MIT / Apache-2.0 or an explicit
author agreement — the legitimate form of the "cross-syndication" that scales dumps
sites, with none of the harvesting. Provenance type `licensed_import`, attribution
recorded in the exam's source registry, license checked against a validator-enforced
allowlist.

**Quality is not waived:** every import passes the full eval gauntlet (structural
validator + blind solve + judge rubric + bounce loop) before publication.

**NC/SA content** stays classification-only (a distillation source, never imported),
so future paid tiers are not poisoned. Content story: original + licensed, never
harvested.
