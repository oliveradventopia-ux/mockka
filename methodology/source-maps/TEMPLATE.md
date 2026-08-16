# Source map · <Vendor> {#source-map}

Copy this file to `methodology/source-maps/<vendor>.md` the first time an exam from this vendor is
onboarded, and fill every field. Source maps make S1 intake a repeatable crawl and feed the P1
vendor-watch engine (plan Decision 13). Method: [`../01-source-distillation.md`](../01-source-distillation.md#source-maps).

## Identity

- **Vendor:** <legal/brand name, e.g. Microsoft, AWS, CompTIA>
- **Certification program:** <program name and URL of the certification index page>
- **Last checked:** <YYYY-MM-DD — update on every use; copied into each exam manifest's `source_checked_date`>

## Stable URL patterns

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Exam blueprint / exam guide | 2 | `<pattern, e.g. https://vendor.com/certs/<exam-code>/exam-guide>` | <how versioning appears — a `blueprint_version` string, a "last updated" date, a PDF revision> |
| Official free practice set | 1 | `<pattern or "none offered">` | <size, refresh cadence if known> |
| Official curriculum / learning path | 3 | `<pattern>` | <free or paywalled; paywalled ⇒ own_course_notes with proof of access> |
| Community prep worth registering | 4 | `<named sources with URLs, or "assess per exam">` | <licence per source> |

## Licence posture

- **Blueprint/exam-guide pages:** <public web page — classification + blueprint data only>
- **Practice sets:** <terms the vendor attaches, if any; always classification-only regardless>
- **Trademark line:** <the exact non-affiliation phrasing the per-exam README should carry, e.g.
  "'<Mark>' is a trademark of <Vendor>. This project is not affiliated with or endorsed by <Vendor>.">
- **Known redistribution restrictions:** <anything that constrains even classification-level use — normally "none for analytical classification">

## Crawl notes

- <auth walls, cookie gates, JS-rendered pages — what firecrawl/playwright needs to know>
- <rate limits or robots.txt constraints observed>
- <formats: HTML page, PDF download, interactive assessment player>

## Watch notes (P1 vendor-watch seam)

- **Blueprint revision signal:** <what to diff — version string, page hash, PDF revision date>
- **New-certification signal:** <the index page or feed where new exams appear>
- **Practice-set update signal:** <what changes when the vendor refreshes the set>
