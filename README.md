# Andrew Craeton Portfolio

A single-page portfolio site that highlights my software engineering experience, projects, skills, and contact details.

## Live Site

- GitHub Pages: https://craetona.github.io/drew-portfolio/

## Highlights

- Organized around sections: About, Skills, Timeline, and Contact.
- Uses a centralized content model so profile updates happen in one place (`src/data/resumeData.ts`).
- Includes a mixed timeline (experience, education, projects, certifications) with consistent date formatting.
- Responsive layout and sticky navigation for quick scanning on desktop and mobile.
- Lightweight front end (React + TypeScript + plain CSS) with no heavyweight UI framework.

## Tech Stack

- React 19: Component-based UI for the portfolio experience.
- TypeScript: Type-safe content models and component props.
- Vite: Fast local dev server and production build pipeline.
- ESLint: Static analysis and code-quality guardrails.
- gh-pages: Publishes the built `dist/` output to GitHub Pages.

## Local Setup

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+ (recommended)

### Install and Run

```bash
npm install
npm run dev
```

### Quality and Build Commands

```bash
# Lint source files
npm run lint

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

Note: there is currently no dedicated `npm test` script in this repo.

## Project Structure

```text
.
|-- public/                  # Static files served as-is
|-- src/
|   |-- components/
|   |   `-- Timeline.tsx     # Reusable timeline renderer
|   |-- data/
|   |   `-- resumeData.ts    # Portfolio content, links, skills, timeline entries
|   |-- App.tsx              # Main page layout and section composition
|   |-- index.css            # Global styles, design tokens, responsive rules
|   `-- main.tsx             # App bootstrap
|-- vite.config.ts           # Vite config + GitHub Pages base path
`-- package.json             # Scripts and dependencies
```

## Deployment (GitHub Pages)

This project is configured for GitHub Pages project hosting:

- `vite.config.ts` sets `base: "/drew-portfolio/"` so asset paths resolve correctly.
- `npm run deploy` runs `npm run build` and publishes `dist/` to the `gh-pages` branch via `gh-pages`.

Typical publish flow:

1. Merge your updates into the main branch.
2. Run `npm run deploy`.
3. GitHub Pages serves the latest `gh-pages` branch content at the live URL.

## Customization

- Update bio, skills, projects, timeline items, and contact links in `src/data/resumeData.ts`.
- Update section layout/content wording in `src/App.tsx`.
- Adjust colors, spacing, typography, and responsive behavior in `src/index.css`.
- Add static assets (favicons, images) in `public/`.

## Accessibility and Performance Notes

- Semantic landmarks (`header`, `nav`, `main`, `section`) support screen-reader navigation.
- External links use safe `rel="noreferrer"` behavior.
- Vite production builds keep the site fast and static-hosting friendly.

## Contact

- LinkedIn: https://www.linkedin.com/in/craetona
- GitHub: https://github.com/craetona
- Email: craetona@gmail.com
