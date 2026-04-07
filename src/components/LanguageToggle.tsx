import type { Language } from '../types/content';
import { useAppContext } from '../context/AppContext';

const languages: Language[] = ['pt', 'en'];

export function LanguageToggle() {
  const { language, setLanguage, translations } = useAppContext();

  return (
    <div aria-label={translations.controls.language} className="w-fit" role="group">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-textMuted">
        {translations.controls.language}
      </p>
      <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surfaceSoft p-1 shadow-inner">
        {languages.map((option) => {
          const isActive = option === language;
          const flag = option === 'pt' ? '🇧🇷' : '🇺🇸';
          const label =
            option === 'pt' ? translations.controls.portuguese : translations.controls.english;

          return (
            <button
              aria-label={label}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition ${
                isActive
                  ? 'bg-accent text-white shadow-[0_6px_16px_rgba(0,113,227,0.3)]'
                  : 'text-textMuted hover:text-text'
              }`}
              key={option}
              onClick={() => setLanguage(option)}
              type="button"
            >
              <span>{flag}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
