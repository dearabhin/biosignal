# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A **VitePress** documentation site — a public learning log for **PBEBT504, Introduction to Biomedical Signal Processing** (Semester 5, Govt. Model Engineering College, Thrikkakara), authored by Abhin Krishna. It deliberately mirrors the design and infrastructure of [blog.abhinkrishna.com](https://blog.abhinkrishna.com) (same theme, CSS, favicon, and GitHub Actions workflow). Content is written **first-person as Abhin** and is tied to his goals: BCI / computational neuroscience / cardiology / wearable neurotech research and his venture *Seyarkai*.

## Commands

```bash
npm install            # install deps (also generates package-lock.json)
npm run docs:dev       # dev server with hot reload → http://localhost:5173
npm run docs:build     # production build → doc/.vitepress/dist
npm run docs:preview   # serve the production build locally
```

Always run `npm run docs:build` before committing to catch broken links / math / Mermaid errors locally (faster than waiting on CI).

## Layout

```
doc/
├── .vitepress/
│   ├── config.mts          # site config: nav, sidebar, SITE_URL, BASE_PATH, math, OG, sitemap
│   └── theme/{index.js, style.css}   # copied verbatim from the blog — do not restyle
├── public/                 # static assets (favicon.svg; CNAME/og-image go here)
├── index.md                # homepage (layout: home — hero + card grid)
├── getting-started.md · resources.md · deployment-guide.md
├── modules/module-1..4.md  # the four syllabus modules
└── projects/{capstone-projects.md, portfolio-guide.md}
```
The content root is `doc/`, **not** the repo root (this matches the blog's layout — the workflow builds `doc/.vitepress/dist`).

## Conventions

- **Frontmatter** on content pages: `title`, `description`, `date` (the homepage uses `layout: home` instead).
- **Math** is enabled (`markdown: { math: true }` via `markdown-it-mathjax3`). Use `$...$` inline and `$$...$$` display. The blog itself does NOT have math — this site added it because the course is math-heavy.
- **Mermaid** diagrams in ```` ```mermaid ```` fences. The whole config is wrapped in `withMermaid(...)`; keep that wrapper. Diagram theme variables match the blog (e.g. `primaryColor #F4F3EE`).
- **Python** code blocks should be runnable and use the course stack: NumPy, SciPy (`scipy.signal`), Matplotlib, WFDB, NeuroKit2, MNE-Python, PyTorch.
- **Voice & structure** per module: intuition-first story/analogy → theory + math → runnable code → "why this matters for top labs" / GPU-CUDA notes → self-assessment questions → research extensions → 3–5 project ideas. Match this when adding or editing modules.
- **Internal links** use absolute paths without `.md` (e.g. `/modules/module-1`, `/resources`).

## Deployment-critical settings (`doc/.vitepress/config.mts`)

```ts
const SITE_URL = 'https://dearabhin.github.io/biosignal';
const BASE_PATH = '/biosignal/';   // MUST match the repo name (leading+trailing slash)
```
- Project site (`<user>.github.io/<repo>/`): `BASE_PATH = '/<repo>/'`.
- Custom domain or user root: `BASE_PATH = '/'` and update `SITE_URL`; put a `CNAME` file in `doc/public/`.
- **The #1 bug:** if the deployed site looks unstyled / assets 404, `BASE_PATH` doesn't match the repo name.

CI/CD: `.github/workflows/deploy.yml` builds and deploys on push to `main` (Node 20, `npm ci`, `npm run docs:build`, upload `doc/.vitepress/dist`). Pages source must be set to **GitHub Actions** in repo settings.

## Gotchas

- `npm ci` (used in CI) requires a committed `package-lock.json` — run `npm install` once and commit the lockfile, or the build fails.
- Don't edit `doc/.vitepress/theme/` to change appearance — it's an intentional verbatim copy of the blog's identity.
- Keep `doc/public/CNAME` (if added) committed; Actions wipes and rebuilds the site each deploy, which would otherwise erase a custom-domain setting.

## Status

See `PROGRESS.md` for current state. As of the initial build: all 4 modules + capstones + guides written, build verified (11 pages, math + Mermaid + sitemap OK). Not yet git-initialized / pushed.
