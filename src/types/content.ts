export type Language = 'pt' | 'en';

export type Theme = 'light' | 'dark';

export type TranslationTree = {
  metadata: {
    locale: string;
    pageTitle: string;
  };
  nav: {
    home: string;
    projects: string;
    contact: string;
  };
  controls: {
    theme: string;
    language: string;
    light: string;
    dark: string;
    portuguese: string;
    english: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
  };
  contact: {
    title: string;
    description: string;
    linkedin: string;
    github: string;
    email: string;
  };
  projects: {
    title: string;
    description: string;
    yearLabel: string;
    viewProject: string;
    backToHome: string;
    teamTitle: string;
    technologiesTitle: string;
    galleryTitle: string;
    aboutTitle: string;
    notFoundTitle: string;
    notFoundDescription: string;
    returnHome: string;
  };
  footer: {
    text: string;
  };
};

export type TeamMember = {
  name: string;
  linkedin: string;
  role: string;
};

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  icon: string;
  images: string[];
  store?: {
    label: string;
    url: string;
  };
  technologies: string[];
  team: TeamMember[];
};
