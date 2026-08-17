import { Download } from 'lucide-react';
import { profile } from '../data/portfolio';
import { SectionHeading } from '../components/Skills';

export function ResumePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page max-w-4xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Resume"
            title={`${profile.name} — Resume`}
            description="View the embedded PDF below, or download it directly."
          />
          <a
            href={profile.resumePath}
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-electric dark:bg-lime px-5 py-3 font-mono text-xs uppercase tracking-wide text-white dark:text-navy-950 hover:opacity-90 transition-opacity"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl surface">
          <object data={profile.resumePath} type="application/pdf" className="h-[75vh] w-full">
            <div className="flex h-64 flex-col items-center justify-center gap-3 p-8 text-center">
              <p className="text-sm text-ink-700 dark:text-paper-100/70">
                Your browser can't preview the PDF inline.
              </p>
              <a
                href={profile.resumePath}
                className="font-mono text-xs uppercase tracking-wide text-electric dark:text-lime"
              >
                Open resume PDF directly
              </a>
            </div>
          </object>
        </div>

        <p className="mt-4 font-mono text-xs text-ink-500 dark:text-paper-100/45">
          Note: add your resume file at{' '}
          <code className="rounded bg-paper-100 dark:bg-navy-700/60 px-1.5 py-0.5">
            public/resume/Mohd-Aziz-Aslam-Resume.pdf
          </code>{' '}
          for this page to display it.
        </p>
      </div>
    </section>
  );
}
