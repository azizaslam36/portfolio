import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 dark:border-white/10 py-10">
      <div className="container-page flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-500 dark:text-paper-100/45">
          © {year} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-500 dark:text-paper-100/45 hover:text-electric dark:hover:text-lime transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-500 dark:text-paper-100/45 hover:text-electric dark:hover:text-lime transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-ink-500 dark:text-paper-100/45 hover:text-electric dark:hover:text-lime transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
