import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-electric dark:text-lime">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink-900 dark:text-paper-100">
        This page doesn't exist.
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink-700 dark:text-paper-100/70">
        The page you're looking for may have moved or never existed.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-electric dark:bg-lime px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-white dark:text-navy-950 hover:opacity-90 transition-opacity"
      >
        <ArrowLeft size={14} />
        Back home
      </Link>
    </section>
  );
}
