import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../data/portfolio';

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-paper-100/50 hover:text-electric dark:hover:text-lime transition-colors"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <p className="label-mono mb-3">{project.period}</p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper-100 sm:text-4xl">
            {project.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink-900/10 dark:border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-700 dark:text-paper-100/65"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-electric dark:bg-lime px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-white dark:text-navy-950 hover:opacity-90 transition-opacity"
            >
              <Github size={14} />
              View source
              <ArrowUpRight size={13} />
            </a>
          )}

          <div className="mt-10 space-y-10">
            <DetailBlock title="Overview" content={project.overview} />
            <DetailBlock title="My role" content={project.role} />

            <div>
              <h2 className="font-display text-base font-semibold text-ink-900 dark:text-paper-100">
                What I built
              </h2>
              <ul className="mt-3 space-y-2">
                {project.whatIBuilt.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-700 dark:text-paper-100/75"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric dark:bg-lime" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-base font-semibold text-ink-900 dark:text-paper-100">
                Challenges
              </h2>
              <ul className="mt-3 space-y-2">
                {project.challenges.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-700 dark:text-paper-100/75"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric dark:bg-lime" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-ink-900 dark:text-paper-100">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-paper-100/75 sm:text-base">
        {content}
      </p>
    </div>
  );
}
