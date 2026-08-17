import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';
import portraitPlaceholder from '../assets/photos/portrait-placeholder.jpg';

const roles = ['Front-end Web Developer', 'AI & Automation Enthusiast', 'Building for the browser'];

function useTypedLine(lines: string[]) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const current = lines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 38);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1400);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 700);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 20);
      } else {
        setPhase('typing');
        setLineIndex((i) => (i + 1) % lines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, lines]);

  return text;
}

export function Hero() {
  const typed = useTypedLine(roles);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-ink-900/10 dark:border-white/10"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />

      <div className="container-page relative grid grid-cols-1 gap-12 py-20 sm:py-28 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-mono mb-5"
          >
            {profile.location} · Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 dark:text-paper-100 sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 flex items-center gap-2 font-mono text-base sm:text-lg text-electric dark:text-lime"
          >
            <span aria-hidden="true">&gt;</span>
            <span>{typed}</span>
            <span className="inline-block h-[1.1em] w-[2px] animate-blink bg-electric dark:bg-lime" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-700 dark:text-paper-100/75 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-electric dark:bg-lime px-5 py-3 font-mono text-xs uppercase tracking-wide text-white dark:text-navy-950 hover:opacity-90 transition-opacity"
            >
              View work
              <ArrowUpRight size={15} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 dark:border-white/15 px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink-900 dark:text-paper-100 hover:border-electric dark:hover:border-lime hover:text-electric dark:hover:text-lime transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 dark:border-white/15 px-5 py-3 font-mono text-xs uppercase tracking-wide text-ink-900 dark:text-paper-100 hover:border-electric dark:hover:border-lime hover:text-electric dark:hover:text-lime transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xs md:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-900/10 dark:border-white/10 bg-navy-800/5 dark:bg-white/5">
            <img
              src={portraitPlaceholder}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl surface px-4 py-3 sm:block">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-500 dark:text-paper-100/50">
              Currently
            </p>
            <p className="font-display text-sm font-medium text-ink-900 dark:text-paper-100">
              B.Tech CSE · 2028
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container-page relative flex justify-center pb-8">
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to work section"
          className="text-ink-500 dark:text-paper-100/40 hover:text-electric dark:hover:text-lime transition-colors"
        >
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
