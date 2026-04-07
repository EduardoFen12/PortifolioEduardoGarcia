import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const contactLinks = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/eduardo-fensterseifer/',
  },
  {
    id: 'github',
    href: 'https://github.com/EduardoFen12',
  },
  {
    id: 'email',
    href: 'mailto:dudufen03@gmail.com',
  },
] as const;

export function HeroSection() {
  const { translations } = useAppContext();

  return (
    <section className="grid gap-12 pt-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:pt-10" id="home">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-accent">
          {translations.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl">
          {translations.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-textMuted sm:text-xl">
          {translations.hero.description}
        </p>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-textMuted">
          {translations.hero.location}
        </p>
        <div className="mt-8 flex flex-wrap gap-3" id="contact">
          {contactLinks.map((link, index) => (
            <motion.a
              className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_34px_rgba(0,0,0,0.38)]"
              href={link.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              key={link.id}
              target={link.id === 'email' ? undefined : '_blank'}
              rel={link.id === 'email' ? undefined : 'noreferrer'}
              transition={{ delay: 0.08 * index + 0.2, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              {
                translations.contact[
                  link.id as keyof Pick<typeof translations.contact, 'linkedin' | 'github' | 'email'>
                ]
              }
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-md"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface p-4 shadow-[0_30px_70px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          <img
            alt="Eduardo Garcia"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            src={`${import.meta.env.BASE_URL}assets/profile/eduardo-profile.png`}
          />
        </div>
      </motion.div>
    </section>
  );
}
