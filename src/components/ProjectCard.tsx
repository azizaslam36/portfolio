import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../data/portfolio';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col justify-between rounded-2xl surface p-6 transition-transform hover:-translate-y-1"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wide text-ink-500 dark:text-paper-100/45">
            {project.period}
          </span>
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source for ${project.title} on GitHub`}
              className="text-ink-500 dark:text-paper-100/45 hover:text-electric dark:hover:text-lime transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
        </div>

        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-paper-100/70">
          {project.summary}
        </p>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-900/10 dark:border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-700 dark:text-paper-100/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-electric dark:text-lime"
        >
          View project
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
