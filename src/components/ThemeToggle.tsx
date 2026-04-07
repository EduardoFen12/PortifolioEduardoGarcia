import { useAppContext } from '../context/AppContext';

export function ThemeToggle() {
  const { theme, toggleTheme, translations } = useAppContext();

  return (
    <div className="w-fit">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-textMuted">
        {translations.controls.theme}
      </p>
      <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surfaceSoft p-1 shadow-inner">
        <button
          aria-label={translations.controls.light}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition ${
            theme === 'light'
              ? 'bg-accent text-white shadow-[0_6px_16px_rgba(0,113,227,0.3)]'
              : 'text-textMuted hover:text-text'
          }`}
          onClick={() => theme === 'dark' && toggleTheme()}
          type="button"
        >
          ☀️
        </button>
        <button
          aria-label={translations.controls.dark}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition ${
            theme === 'dark'
              ? 'bg-accent text-white shadow-[0_6px_16px_rgba(64,156,255,0.3)]'
              : 'text-textMuted hover:text-text'
          }`}
          onClick={() => theme === 'light' && toggleTheme()}
          type="button"
        >
          🌙
        </button>
      </div>
    </div>
  );
}
