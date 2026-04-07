import { ProjectCard } from './ProjectCard';
import { useAppContext } from '../../context/AppContext';

export function ProjectsSection() {
  const { projects, translations } = useAppContext();

  return (
    <section className="mt-24" id="projects">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {translations.nav.projects}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {translations.projects.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-textMuted">{translations.projects.description}</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
