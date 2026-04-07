import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../../types/content';
import { useAppContext } from '../../context/AppContext';

type ProjectCardProps = {
  project: Project;
  index: number;
};

function resolveAssetUrl(path: string) {
  return path.startsWith('http://') || path.startsWith('https://')
    ? path
    : `${import.meta.env.BASE_URL}${path}`;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { translations } = useAppContext();

  return (
    <motion.article
      className="group flex h-full flex-col rounded-[2.25rem] border border-border bg-surface p-6 shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <img
          alt={project.name}
          className="h-16 w-16 rounded-[1.35rem] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.38)]"
          src={resolveAssetUrl(project.icon)}
        />
        <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {project.year}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text">{project.name}</h3>
        <p className="mt-3 text-base leading-7 text-textMuted">{project.shortDescription}</p>
      </div>
      <Link
        className="mt-8 inline-flex items-center justify-between rounded-full bg-surfaceSoft px-4 py-3 text-sm font-medium text-text transition hover:bg-accent hover:text-white"
        to={`/project/${project.id}`}
      >
        <span>{translations.projects.viewProject}</span>
        <span aria-hidden="true" className="transition group-hover:translate-x-1">
          →
        </span>
      </Link>
    </motion.article>
  );
}
