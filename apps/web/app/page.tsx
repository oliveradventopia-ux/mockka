// Exam catalog — static server render from the content packages. Exams with
// status 'draft' stay off the catalog; other unpublished statuses list with a
// subtle note (P0 rule from the plan of record).

import Link from 'next/link';
import { listExams, loadExam } from '@mockka/engine';
import { contentDir } from '../lib/content.ts';
import { AttemptChip } from '../components/attempt-chip.tsx';

export default function CatalogPage() {
  const dir = contentDir();
  const manifests = listExams(dir)
    .map((slug) => loadExam(dir, slug).manifest)
    .filter((m) => m.status !== 'draft');

  return (
    <>
      <header className="site">
        <div className="header-inner">
          <div className="brand">
            <h1>Mockka</h1>
            <p>
              Blueprint-weighted practice exams for professional certifications —
              original and licensed, never harvested.
            </p>
          </div>
        </div>
      </header>
      <main id="main">
        <h2 className="sr-only">Available exams</h2>
        <div className="catalog-grid">
          {manifests.map((m) => (
            <article className="exam-card" key={m.slug}>
              <div className="meta-row">
                <span className="tag">{m.vendor}</span>
                <span className="tag type">{m.exam.item_count} questions</span>
                <AttemptChip slug={m.slug} itemCount={m.exam.item_count} />
              </div>
              <h2>
                <Link href={`/exam/${m.slug}`}>{m.title}</Link>
              </h2>
              <p className="facts">
                {m.exam.time_limit_minutes} minutes · pass at{' '}
                {m.exam.pass_threshold_pct}% · {m.domains.length} domains
              </p>
              {m.status !== 'published' ? (
                <p className="status-note">
                  {m.status === 'in_review' ? 'In review' : m.status} — content may
                  still be refined before publication.
                </p>
              ) : null}
              <div className="card-foot">
                <Link className="open-link" href={`/exam/${m.slug}`}>
                  Open exam →
                </Link>
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
