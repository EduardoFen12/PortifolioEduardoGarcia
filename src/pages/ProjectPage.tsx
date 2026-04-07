import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function resolveAssetUrl(path: string) {
  return path.startsWith('http://') || path.startsWith('https://')
    ? path
    : `${import.meta.env.BASE_URL}${path}`;
}

function AppMetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-[96px]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-textMuted">{label}</p>
      <p className="mt-2 text-base font-semibold tracking-tight text-text">{value}</p>
    </div>
  );
}

export function ProjectPage() {
  const { id } = useParams();
  const { projects, translations } = useAppContext();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-text">
          {translations.projects.notFoundTitle}
        </h1>
        <p className="mt-4 max-w-lg text-lg text-textMuted">
          {translations.projects.notFoundDescription}
        </p>
        <Link
          className="mt-8 rounded-full bg-surfaceSoft px-5 py-3 text-sm font-medium text-text transition hover:bg-accent hover:text-white"
          to="/"
        >
          {translations.projects.returnHome}
        </Link>
      </section>
    );
  }

  return (
    <section className="pb-12">
      <Link
        className="inline-flex items-center gap-2 rounded-full bg-surfaceSoft px-4 py-2 text-sm font-medium text-text transition hover:bg-accent hover:text-white"
        to="/"
      >
        <span aria-hidden="true">←</span>
        <span>{translations.projects.backToHome}</span>
      </Link>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="border-b border-border pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img
                alt={project.name}
                className="h-28 w-28 rounded-[26px] object-cover shadow-[0_10px_30px_rgba(0,0,0,0.14)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                src={resolveAssetUrl(project.icon)}
              />

              <div className="max-w-3xl pt-1">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-text sm:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-3 text-xl leading-8 text-textMuted">{project.shortDescription}</p>
                <p className="mt-4 text-sm font-medium text-textMuted">{project.fullDescription}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start">
              <span className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,113,227,0.28)]">
                {translations.projects.viewProject}
              </span>
              <span className="rounded-full bg-surfaceSoft px-4 py-3 text-sm font-medium text-textMuted">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto border-b border-border py-6">
          <AppMetaItem label={translations.projects.yearLabel} value={project.year} />
          <div className="w-px shrink-0 bg-border" />
          <AppMetaItem
            label={translations.projects.technologiesTitle}
            value={String(project.technologies.length)}
          />
          <div className="w-px shrink-0 bg-border" />
          <AppMetaItem label={translations.projects.teamTitle} value={String(project.team.length)} />
        </div>

        <div className="border-b border-border py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              {translations.projects.galleryTitle}
            </h2>
          </div>

          <div className="mt-6 flex snap-x gap-5 overflow-x-auto pb-2">
            {project.images.map((image, index) => (
              <motion.div
                className="min-w-[260px] snap-start overflow-hidden rounded-[28px] border border-border bg-surfaceSoft shadow-[0_14px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_32px_rgba(0,0,0,0.34)] sm:min-w-[300px]"
                key={image}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <img
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="aspect-[9/19.5] w-full object-cover"
                  src={resolveAssetUrl(image)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 border-b border-border py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              {translations.projects.aboutTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-textMuted">{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              {translations.projects.technologiesTitle}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  className="rounded-full border border-border bg-surfaceSoft px-4 py-2 text-sm font-medium text-text"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            {translations.projects.teamTitle}
          </h2>
          <div className="mt-6 grid gap-4">
            {project.team.map((member) => (
              <a
                className="flex items-center justify-between rounded-[24px] border border-border bg-surfaceSoft px-5 py-4 transition hover:border-accent/40 hover:bg-surface"
                href={member.linkedin}
                key={member.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <p className="text-base font-semibold text-text">{member.name}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {member.role}
                    </span>
                    <p className="text-sm text-textMuted">{translations.contact.linkedin}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-accent">↗</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
