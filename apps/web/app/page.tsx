// Exam catalog — static server render from the content packages. Exams with
// status 'draft' stay off the catalog; other unpublished statuses list with a
// subtle note (P0 rule from the plan of record).
//
// Classical identity (handoff 1j): a shelf of ruled rows, not a card grid.
// The landing hero's wager collapses into the catalog header — a separate
// marketing landing page is out of P0 scope.

import Link from 'next/link';
import { listExams, loadExam } from '@mockka/engine';
import { contentDir } from '../lib/content.ts';
import { AttemptChip } from '../components/attempt-chip.tsx';
import { Mark } from '../components/mark.tsx';

export default function CatalogPage() {
  const dir = contentDir();
  const manifests = listExams(dir)
    .map((slug) => loadExam(dir, slug).manifest)
    .filter((m) => m.status !== 'draft');

  return (
    <>
      <header className="site">
        <div className="site-nav">
          <Mark size={22} />
          <span className="wordmark">Mockka</span>
          <span className="imprint">exam compiler</span>
        </div>
      </header>
      <main id="main">
        <div className="catalog-head">
          <div>
            <p className="mono-label">Catalog</p>
            <h1>Papers on the shelf</h1>
          </div>
          <p className="catalog-lede">
            Blueprint-weighted practice papers for professional certifications —
            original and licensed, never harvested.
          </p>
        </div>
        <div className="shelf">
          {manifests.map((m) => (
            <article className="shelf-row" key={m.slug}>
              <div>
                <div className="shelf-title">
                  <h2>
                    <Link href={`/exam/${m.slug}`}>{m.title}</Link>
                  </h2>
                  <span
                    className={
                      m.status === 'published' ? 'tag tag-accent' : 'tag tag-outline'
                    }
                  >
                    {m.status === 'in_review' ? 'in review' : m.status}
                  </span>
                </div>
                <p className="shelf-desc">
                  Original practice questions for the {m.vendor} certification —
                  never live exam content.
                </p>
                {m.status !== 'published' ? (
                  <p className="status-note">
                    Content may still be refined before publication.
                  </p>
                ) : null}
              </div>
              <div>
                <p className="mono-label">Blueprint</p>
                <div className="shelf-segs" aria-hidden="true">
                  {m.domains.map((d) => (
                    <i key={d.id} />
                  ))}
                </div>
                <p className="shelf-fact num">
                  {m.exam.item_count} items · {m.domains.length} domains
                </p>
              </div>
              <div>
                <p className="mono-label">Sitting</p>
                <p className="shelf-fact num">
                  {m.exam.time_limit_minutes} minutes
                  <br />
                  pass at {m.exam.pass_threshold_pct}%
                </p>
              </div>
              <div className="shelf-actions">
                <Link className="btn" href={`/exam/${m.slug}`}>
                  Start
                </Link>
                <AttemptChip slug={m.slug} itemCount={m.exam.item_count} />
              </div>
            </article>
          ))}
        </div>
        {manifests.length === 0 ? (
          <div className="empty">No exams published yet.</div>
        ) : null}
      </main>
    </>
  );
}
