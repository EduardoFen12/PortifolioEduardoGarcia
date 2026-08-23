import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function resolveAssetUrl(path: string) {
  return path.startsWith('http://') || path.startsWith('https://')
    ? path
    : `${import.meta.env.BASE_URL}${path}`;
}

function isVideo(path: string) {
  return /\.(mp4|mov|webm)$/i.test(path);
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.06 3.11c0 1.06-.39 2.03-1.04 2.74-.72.79-1.9 1.4-2.94 1.31-.13-1.03.41-2.13 1.1-2.83.71-.74 1.95-1.28 2.88-1.22Zm3.57 14.37c-.42.98-.62 1.42-1.16 2.27-.75 1.16-1.81 2.61-3.13 2.62-1.17.01-1.47-.76-3.06-.75-1.59.01-1.92.76-3.09.75-1.32-.01-2.32-1.31-3.07-2.47-2.08-3.18-2.3-6.9-1.02-8.87.91-1.41 2.34-2.23 3.68-2.23 1.37 0 2.24.76 3.37.76 1.09 0 1.76-.76 3.36-.76 1.2 0 2.47.65 3.38 1.78-2.96 1.62-2.48 5.86.74 6.9Z" />
    </svg>
  );
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
              <a
                className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,113,227,0.28)]"
                href={project.store.url}
                rel="noreferrer"
                target="_blank"
              >
                <AppleIcon />
                <span>{project.store.label}</span>
              </a>
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
                className={`snap-start overflow-hidden rounded-[28px] border border-border bg-surfaceSoft shadow-[0_14px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_32px_rgba(0,0,0,0.34)] ${
                  isVideo(image)
                    ? 'min-w-[320px] sm:min-w-[640px]'
                    : 'min-w-[260px] sm:min-w-[300px]'
                }`}
                key={image}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
              >
                {isVideo(image) ? (
                  <video
                    className="aspect-video w-full object-cover"
                    controls
                    playsInline
                    poster={resolveAssetUrl(image.replace(/\.\w+$/, '-poster.jpg'))}
                    preload="none"
                    src={resolveAssetUrl(image)}
                  />
                ) : (
                  <img
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="aspect-[9/19.5] w-full object-cover"
                    src={resolveAssetUrl(image)}
                  />
                )}
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
