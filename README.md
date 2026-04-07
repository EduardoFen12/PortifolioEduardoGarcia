# Eduardo Garcia Portfolio

A personal developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. The project is fully static and configured for GitHub Pages.

## Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- JSON-based content and translations

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deploy to GitHub Pages

The project is already configured for the repository path:

```txt
/PortifolioEduardoGarcia/
```

To publish:

1. Install dependencies:

```bash
npm install
```

2. Build and deploy:

```bash
npm run build
npm run deploy
```

This uses the `gh-pages` package to publish the `dist` folder.

## Routing on GitHub Pages

The app uses `BrowserRouter` with the Vite base path and includes a `public/404.html` redirect fallback so direct access to routes like `/project/aurora-ai` works on static hosting.

## Project structure

```txt
public/
  assets/
    profile/
    projects/
  data/
    i18n/
      en.json
      pt.json
    projects.en.json
    projects.pt.json
src/
  components/
  context/
  hooks/
  pages/
  types/
```

## Add a new project

1. Add the localized project entry to:

- `public/data/projects.en.json`
- `public/data/projects.pt.json`

2. Use the same `id` in both files.

3. Add the project assets:

- icon: `public/assets/projects/<project-id>/icon.*`
- screenshots: `public/assets/projects/<project-id>/screen-1.*`, etc.

4. Follow this shape for each project item:

```json
{
  "id": "project-id",
  "name": "Project name",
  "shortDescription": "One sentence summary",
  "fullDescription": "Longer project overview",
  "year": "2026",
  "icon": "assets/projects/project-id/icon.svg",
  "images": [
    "assets/projects/project-id/screen-1.svg",
    "assets/projects/project-id/screen-2.svg"
  ],
  "technologies": ["React", "TypeScript"],
  "team": [
    {
      "name": "Team member",
      "linkedin": "https://www.linkedin.com/in/username/"
    }
  ]
}
```

## Update translations

All interface text lives in:

- `public/data/i18n/en.json`
- `public/data/i18n/pt.json`

Keep the same key structure in both files so the language switch works consistently.
