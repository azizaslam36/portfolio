import { motion } from 'framer-motion';
import { AlertCircle, ArrowUpRight, Github, Star, GitFork } from 'lucide-react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { profile } from '../data/portfolio';
import { SectionHeading } from './Skills';

export function GitHubActivity() {
  const state = useGitHubRepos(profile.githubUsername);

  return (
    <section id="github" className="border-b border-ink-900/10 dark:border-white/10 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Live from GitHub"
            title="Recent repositories"
            description={`Pulled directly from the public GitHub API for @${profile.githubUsername}.`}
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-900/15 dark:border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink-900 dark:text-paper-100 hover:border-electric dark:hover:border-lime hover:text-electric dark:hover:text-lime transition-colors"
          >
            <Github size={14} />
            View GitHub profile
          </a>
        </div>

        <div className="mt-10">
          {state.status === 'loading' && <RepoSkeletons />}

          {state.status === 'error' && (
            <div className="flex items-start gap-3 rounded-2xl surface p-6">
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-electric dark:text-lime" />
              <div>
                <p className="font-display text-sm font-semibold text-ink-900 dark:text-paper-100">
                  Couldn't load repositories
                </p>
                <p className="mt-1 text-sm text-ink-700 dark:text-paper-100/70">{state.message}</p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-electric dark:text-lime"
                >
                  See repositories on GitHub
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          )}

          {state.status === 'empty' && (
            <div className="rounded-2xl surface p-6 text-sm text-ink-700 dark:text-paper-100/70">
              No public repositories to show right now — check the GitHub profile directly for the
              latest.
            </div>
          )}

          {state.status === 'success' && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {state.repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                  className="group flex flex-col justify-between rounded-2xl surface p-5 hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-sm font-medium text-ink-900 dark:text-paper-100 group-hover:text-electric dark:group-hover:text-lime transition-colors">
                        {repo.name}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-ink-500 dark:text-paper-100/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-700 dark:text-paper-100/60">
                      {repo.description || 'No description provided.'}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-ink-500 dark:text-paper-100/45">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-electric dark:bg-lime" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={11} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function RepoSkeletons() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading repositories">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl surface p-5">
          <div className="h-4 w-2/3 animate-pulse rounded bg-ink-900/10 dark:bg-white/10" />
          <div className="mt-3 h-3 w-full animate-pulse rounded bg-ink-900/5 dark:bg-white/5" />
          <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-ink-900/5 dark:bg-white/5" />
          <div className="mt-5 h-3 w-1/3 animate-pulse rounded bg-ink-900/5 dark:bg-white/5" />
        </div>
      ))}
    </div>
  );
}
