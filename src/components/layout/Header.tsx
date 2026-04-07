import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageToggle } from '../LanguageToggle';
import { ThemeToggle } from '../ThemeToggle';
import { useAppContext } from '../../context/AppContext';

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.4a1.56 1.56 0 0 0 0 3.1ZM5.6 18.4h2.67V9.86H5.6V18.4Zm4.3 0h2.66v-4.76c0-1.26.24-2.47 1.8-2.47 1.53 0 1.55 1.43 1.55 2.55v4.68H18.6v-5.22c0-2.56-.55-4.53-3.55-4.53-1.44 0-2.4.79-2.8 1.54h-.04V9.86H9.9c.03.87 0 8.54 0 8.54Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.13 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.9c.85 0 1.7.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.21 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.99-2.34 4.86-4.58 5.12.36.32.68.94.68 1.89 0 1.36-.01 2.46-.01 2.8 0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.75a1.5 1.5 0 0 1 1.47 1.18l.17.75a6.97 6.97 0 0 1 1.47.61l.67-.39a1.5 1.5 0 0 1 1.85.24l.93.93a1.5 1.5 0 0 1 .24 1.85l-.39.67c.27.47.48.96.62 1.47l.74.17A1.5 1.5 0 0 1 20.25 12a1.5 1.5 0 0 1-1.18 1.47l-.75.17a6.97 6.97 0 0 1-.61 1.47l.39.67a1.5 1.5 0 0 1-.24 1.85l-.93.93a1.5 1.5 0 0 1-1.85.24l-.67-.39a6.97 6.97 0 0 1-1.47.62l-.17.74A1.5 1.5 0 0 1 12 20.25a1.5 1.5 0 0 1-1.47-1.18l-.17-.75a6.97 6.97 0 0 1-1.47-.61l-.67.39a1.5 1.5 0 0 1-1.85-.24l-.93-.93a1.5 1.5 0 0 1-.24-1.85l.39-.67a6.97 6.97 0 0 1-.62-1.47l-.74-.17A1.5 1.5 0 0 1 3.75 12a1.5 1.5 0 0 1 1.18-1.47l.75-.17c.13-.51.34-1 .61-1.47l-.39-.67a1.5 1.5 0 0 1 .24-1.85l.93-.93a1.5 1.5 0 0 1 1.85-.24l.67.39c.47-.27.96-.48 1.47-.62l.17-.74A1.5 1.5 0 0 1 12 3.75Z" />
      <circle cx="12" cy="12" r="3.1" />
    </svg>
  );
}

const actionButtonClass =
  'inline-flex items-center gap-3 rounded-full border border-border bg-surfaceSoft px-5 py-3 text-base font-medium text-text transition hover:border-accent/40 hover:bg-surface';

export function Header() {
  const { translations } = useAppContext();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 mb-12 pt-4 xl:mb-16">
      <div className="relative rounded-[2rem] border border-border bg-surface px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:bg-[#111111] dark:shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <NavLink className="text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl" to="/">
            Eduardo Garcia Fensterseifer
          </NavLink>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className={actionButtonClass}
              href="https://www.linkedin.com/in/eduardo-fensterseifer/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
              <span>{translations.contact.linkedin}</span>
            </a>

            <a
              className={actionButtonClass}
              href="https://github.com/EduardoFen12"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
              <span>{translations.contact.github}</span>
            </a>

            <button
              aria-expanded={isSettingsOpen}
              aria-label="Open settings"
              className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-border bg-surfaceSoft text-text transition hover:border-accent/40 hover:bg-surface"
              onClick={() => setIsSettingsOpen((current) => !current)}
              type="button"
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {isSettingsOpen ? (
          <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 lg:absolute lg:right-6 lg:top-[calc(100%+0.75rem)] lg:mt-0 lg:w-fit lg:rounded-[1.5rem] lg:border lg:bg-surface lg:p-2.5 lg:shadow-[0_20px_50px_rgba(0,0,0,0.16)] dark:lg:bg-[#121212] dark:lg:shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        ) : null}
      </div>
    </header>
  );
}
