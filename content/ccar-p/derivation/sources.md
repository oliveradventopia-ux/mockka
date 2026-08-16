# Source registry — ccar-p

Every concept in `concepts.json` attributes its `sources[]` to the ids below;
the manifest's `provenance.sources` block registers the same ids. This file is
the human-readable end of that chain (question -> concept -> derivation doc ->
registered source).

| id | type | licence basis | derivation artefact |
|---|---|---|---|
| ccar-p-blueprint | public_blueprint | public document; facts only (domains, weights, format profile) | manifest domain arithmetic |
| purcell-practice-set | own_distillation | freely published practice set; clean-room analytical classification only, zero text reuse | [purcell-distillation.md](purcell-distillation.md) |
| ccar-p-course-recap | own_course_notes | own notes from the legitimately accessed official course (proof-of-access basis) | [recap-concepts.md](recap-concepts.md) |

The consolidated concept inventory across both artefacts is
[master-inventory.md](master-inventory.md).

## Clean-room statement

Distillation sessions read the sources listed above and produced the derivation
artefacts in this directory. Authoring sessions never opened the source texts —
every question was written from these artefacts alone. No source text, and no
live-exam content, is reproduced anywhere in this package.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the
CCAR-P item bank, and no question reproduces an item encountered in a real
sitting. Actual exam content is confidential and protected by NDA. This is an
independent study tool: it is not affiliated with, endorsed by, or connected to
Anthropic, PBC or Pearson VUE.
