import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { experience, education } from '../data/portfolio';
import { SectionHeading } from './Skills';

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="border-b border-ink-900/10 dark:border-white/10 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="mt-10 space-y-8 border-l border-ink-900/10 dark:border-white/10 pl-8">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-electric dark:bg-lime" />
              <p className="font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-paper-100/45">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                {item.role}
              </h3>
              <p className="text-sm text-ink-700 dark:text-paper-100/70">
                {item.company} · {item.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.description.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm leading-relaxed text-ink-700 dark:text-paper-100/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500 dark:bg-paper-100/40" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <div className="mt-14">
          <h3 className="label-mono mb-5 flex items-center gap-2">
            <GraduationCap size={14} />
            Education
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl surface p-6"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-ink-500 dark:text-paper-100/45">
                  {item.period}
                </p>
                <h4 className="mt-1 font-display text-base font-semibold text-ink-900 dark:text-paper-100">
                  {item.degree}
                </h4>
                <p className="mt-1 text-sm text-ink-700 dark:text-paper-100/70">{item.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
