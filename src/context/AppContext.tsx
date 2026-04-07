import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Language, Project, Theme, TranslationTree } from '../types/content';

type AppContextValue = {
  language: Language;
  theme: Theme;
  translations: TranslationTree;
  projects: Project[];
  isLoading: boolean;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const DEFAULT_LANGUAGE: Language = 'en';
const DEFAULT_THEME: Theme = 'light';
const DEFAULT_TRANSLATIONS: TranslationTree = {
  metadata: {
    locale: 'en',
    pageTitle: 'Eduardo Garcia | Developer Portfolio',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
  },
  controls: {
    theme: 'Theme',
    language: 'Language',
    light: 'Light',
    dark: 'Dark',
    portuguese: 'PT 🇧🇷',
    english: 'EN 🇺🇸',
  },
  hero: {
    eyebrow: '',
    title: '',
    description: '',
    location: '',
  },
  contact: {
    title: '',
    description: '',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  projects: {
    title: '',
    description: '',
    yearLabel: 'Year',
    viewProject: 'Open project',
    backToHome: 'Back to home',
    teamTitle: 'Team members',
    technologiesTitle: 'Technologies',
    galleryTitle: 'Gallery',
    aboutTitle: 'Project summary',
    notFoundTitle: 'Project not found',
    notFoundDescription: 'Project not found.',
    returnHome: 'Return home',
  },
  footer: {
    text: '',
  },
};

export function AppProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useLocalStorage<Language>('portfolio-language', DEFAULT_LANGUAGE);
  const [theme, setTheme] = useLocalStorage<Theme>('portfolio-theme', DEFAULT_THEME);
  const [translations, setTranslations] = useState<TranslationTree>(DEFAULT_TRANSLATIONS);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    let isMounted = true;

    async function loadContent() {
      setIsLoading(true);

      const [translationResponse, projectResponse] = await Promise.all([
        fetch(`${import.meta.env.BASE_URL}data/i18n/${language}.json`),
        fetch(`${import.meta.env.BASE_URL}data/projects.${language}.json`),
      ]);

      const [translationData, projectData] = await Promise.all([
        translationResponse.json() as Promise<TranslationTree>,
        projectResponse.json() as Promise<Project[]>,
      ]);

      if (!isMounted) {
        return;
      }

      setTranslations(translationData);
      setProjects(projectData);
      document.documentElement.lang = translationData.metadata.locale;
      document.title = translationData.metadata.pageTitle;
      setIsLoading(false);
    }

    loadContent().catch(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      theme,
      translations,
      projects,
      isLoading,
      setLanguage,
      toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [isLoading, language, projects, setLanguage, theme, translations, setTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }

  return context;
}
