import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="border-b border-ink-900/10 dark:border-white/10 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Skills & tools" title="What I work with" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl surface p-6"
            >
              <h3 className="label-mono mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-paper-100 dark:bg-navy-700/60 px-3 py-1.5 font-mono text-xs text-ink-900 dark:text-paper-100/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="label-mono mb-3">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-paper-100 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-paper-100/70 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
