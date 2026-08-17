import { useEffect, useState } from 'react';

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};

type FetchState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'empty' }
  | { status: 'success'; repos: GitHubRepo[] };

/**
 * Fetches public repositories for a GitHub username directly from the
 * public GitHub REST API. No fabricated data — if the request fails or
 * returns nothing, that is surfaced to the caller as-is.
 */
export function useGitHubRepos(username: string) {
  const [state, setState] = useState<FetchState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(
            res.status === 403
              ? 'GitHub API rate limit reached. Try again in a few minutes.'
              : `GitHub API returned ${res.status}.`,
          );
        }
        return res.json() as Promise<GitHubRepo[]>;
      })
      .then((repos) => {
        if (cancelled) return;
        const nonForkRepos = repos.filter((r) => !r.fork);
        if (nonForkRepos.length === 0) {
          setState({ status: 'empty' });
        } else {
          setState({ status: 'success', repos: nonForkRepos });
        }
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setState({ status: 'error', message: err.message || 'Could not reach the GitHub API.' });
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
