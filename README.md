# Mohd Aziz Aslam — Developer Portfolio

A React + TypeScript + Vite portfolio built with Tailwind CSS, Framer Motion, React Router,
and React Hook Form + Zod. Content is data-driven, live GitHub repositories are fetched from
the public GitHub API, and the whole thing works in light and dark mode.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animation)
- React Router (routing, incl. per-project detail pages)
- React Hook Form + Zod (contact form validation)
- Lucide React (icons)

## 1. Setup

Requires Node.js 18+ and npm.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`. Hot reload is on — edit any file and the browser updates.

## 3. Build for production

```bash
npm run build
```

Type-checks the project and outputs a production build to `dist/`.

To preview that build locally:

```bash
npm run preview
```

## 4. Deploy

The `dist/` folder is static and can be deployed anywhere that serves static files:

- **Vercel**: import the repo, framework preset "Vite", no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder (e.g. with the
  `gh-pages` package or a GitHub Action). If you deploy to a subpath
  (`username.github.io/repo-name`), set `base: '/repo-name/'` in `vite.config.ts`.

This app uses client-side routing (React Router), so on any static host you must configure a
fallback so unknown paths serve `index.html` (Vercel/Netlify do this automatically for SPAs;
for GitHub Pages you'll want a `404.html` redirect trick or a host that supports SPA fallback).

## 5. Editing your content

Everything text-based lives in one file:

```
src/data/portfolio.ts
```

Edit `profile`, `experience`, `education`, `skillGroups`, and `projects` there — no need to
touch any component. Adding a new project automatically creates its detail page at
`/projects/<slug>`.

## 6. Adding your own photos

Two places use images, both currently showing generated placeholders:

**Hero portrait** — `src/components/Hero.tsx`
1. Add your photo to `src/assets/photos/` (e.g. `portrait.jpg`).
2. Replace the import at the top of `Hero.tsx`:
   ```ts
   import portraitPlaceholder from '../assets/photos/portrait-placeholder.svg';
   ```
   with:
   ```ts
   import portrait from '../assets/photos/portrait.jpg';
   ```
   and use `portrait` in the `<img src={...} />` below.

**Photo gallery** — `src/components/PhotoGallery.tsx`
1. Add your images to `src/assets/photos/`.
2. Replace the four placeholder imports (`gallery1`–`gallery4`) with imports of your own
   files, and update the `caption` text for each entry in the `photos` array.

Images are imported as ES modules (not referenced by raw path), so Vite optimizes and
hashes them correctly in the production build.

## 7. Adding your resume

Place your resume PDF at:

```
public/resume/Mohd-Aziz-Aslam-Resume.pdf
```

(the exact filename already referenced in `src/data/portfolio.ts` → `profile.resumePath`).
It will then appear on the `/resume` page and via the "Resume" button in the navbar. Delete
`public/resume/PLACE_RESUME_HERE.txt` once your file is in place.

## 8. GitHub activity section

The GitHub section on the home page fetches live public repositories directly from
`https://api.github.com/users/azizaslam36/repos` — no API key, no backend. To point it at a
different username, change `profile.githubUsername` in `src/data/portfolio.ts`. Note the
public GitHub API is rate-limited for unauthenticated requests (60/hour per IP); the section
shows a friendly error state if that limit is hit.

## 9. Contact form

The form validates with Zod (name, email, message) via React Hook Form. On valid submit it
opens a pre-filled `mailto:` draft in the visitor's email client — there is no backend, so no
email is actually sent by this code; the visitor still has to hit "send" in their own mail
app. This is intentional (see project brief: no fake backend/API responses).

## Project structure

```
src/
  assets/photos/       Your images (imported, not raw-pathed)
  components/          Reusable UI: Navbar, Hero, ProjectCard, ContactForm, etc.
  data/portfolio.ts     Single source of truth for all content
  hooks/                useTheme, useActiveSection, useGitHubRepos
  pages/                Home, ProjectDetailPage, ResumePage, NotFound
public/
  resume/               Your resume PDF goes here
```
