// Exam page — server component. Loads the content package through the engine
// at build time, resolves the paper from the selection's first form, and hands
// the client player everything it needs. Keys and rationales ship in the
// payload by design (ADR-0001 P0 trade-off).

import type { Metadata } from 'next';
import { buildPaper, listExams, loadExam } from '@mockka/engine';
import { contentDir } from '../../../lib/content.ts';
import { ExamPlayer } from '../../../components/exam-player.tsx';

// Prerender every non-draft package; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  const dir = contentDir();
  return listExams(dir)
    .filter((slug) => loadExam(dir, slug).manifest.status !== 'draft')
    .map((slug) => ({ slug }));
}

interface ExamPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ExamPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = loadExam(contentDir(), slug);
  return {
    title: `${pkg.manifest.title} — Mockka`,
    description: `${pkg.manifest.exam.item_count} original practice questions, ${pkg.manifest.exam.time_limit_minutes} minutes, pass at ${pkg.manifest.exam.pass_threshold_pct}%.`,
  };
}

export default async function ExamPage({ params }: ExamPageProps) {
  const { slug } = await params;
  const pkg = loadExam(contentDir(), slug);
  const paper = buildPaper(pkg.bank, pkg.selection);

  return (
    <ExamPlayer
      slug={slug}
      manifest={pkg.manifest}
      paper={paper}
      syllabusRules={pkg.manifest.layers.syllabus_rules ? pkg.syllabusRules : undefined}
    />
  );
}
