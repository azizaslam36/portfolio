import { featuredProjects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './Skills';

export function FeaturedWork() {
  return (
    <section id="work" className="border-b border-ink-900/10 dark:border-white/10 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've shipped"
          description="A mix of client work, internship tasks, and self-directed builds — each linked to source where available."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
