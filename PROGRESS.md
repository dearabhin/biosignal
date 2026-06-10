# PROGRESS — Biosignal Course Site

**Project:** VitePress documentation site for **PBEBT504 — Introduction to Biomedical Signal Processing** (Semester 5, Govt. Model Engineering College, Thrikkakara).
**Owner:** Abhin Krishna · **Last updated:** 2026-06-10
**Status:** ✅ Complete & build-verified — ready to deploy.

---

## 1. Goal

A public, recruiter-grade learning log mirroring the design/UX of [blog.abhinkrishna.com](https://blog.abhinkrishna.com): all 4 syllabus modules with intuition-first explanations, LaTeX math, Mermaid diagrams, runnable Python (NumPy/SciPy/MNE/NeuroKit2/PyTorch), project ideas, capstones, and a full deployment guide. Written first-person, tied to Abhin's BCI/neurotech/cardiology goals and his Seyarkai venture.

---

## 2. What's Implemented

| Area | Status | Notes |
| :--- | :--- | :--- |
| Project scaffolding | ✅ | `package.json`, `.gitignore`, `README.md`, CI workflow |
| Blog UI/theme replication | ✅ | `theme/index.js`, `style.css`, favicon pulled verbatim from blog repo |
| Math support (new vs blog) | ✅ | `markdown-it-mathjax3` + `markdown: { math: true }` |
| Mermaid diagrams | ✅ | `vitepress-plugin-mermaid`, `withMermaid()` wrapper, blog theme vars |
| Site config | ✅ | `config.mts` — nav, sidebar, `BASE_PATH='/biosignal/'`, OG/sitemap |
| Homepage | ✅ | `index.md` — hero + 6-card grid |
| Module 1 | ✅ | ~3,700 words — biosignals, sampling/aliasing, LTI, convolution, correlation, difference equations |
| Module 2 | ✅ | ~2,780 words — Fourier family, DTFS/DTFT/DFT, FFT (DIT/DIF from scratch), ECG synthesis |
| Module 3 | ✅ | ~2,750 words — spectrum estimation (Welch/Bartlett/AR-Burg), Z-transform, ROC, poles/zeros, inverse Z |
| Module 4 | ✅ | ~2,790 words — FIR (windows), IIR (Butterworth), impulse-invariant/matched-Z/bilinear, ECG denoising cascade |
| Capstone projects | ✅ | 5 semester-scale projects, each mapped to 30-mark PBL rubric |
| Portfolio & presentation guide | ✅ | README strategy, benchmarking, blogging, PBL tips, Seyarkai lens |
| Getting Started | ✅ | Lab setup, datasets, hardware (India pricing), safety |
| Resources | ✅ | Datasets/textbooks/courses/software/hardware/papers |
| Deployment guide | ✅ | Local dev, config, GitHub Actions, custom domain, troubleshooting |

**File tree:**
```
biosignal/
├── .github/workflows/deploy.yml
├── .gitignore · package.json · README.md · PROGRESS.md
└── doc/
    ├── .vitepress/{config.mts, theme/{index.js, style.css}}
    ├── public/favicon.svg
    ├── index.md · getting-started.md · resources.md · deployment-guide.md
    ├── modules/module-1..4.md
    └── projects/{capstone-projects.md, portfolio-guide.md}
```

---

## 3. Build Verification

- `npm run docs:build` succeeds cleanly (~10.5s), **11 HTML pages** generated.
- Math renders to MathJax across all modules (176/172/184/78 `mjx-container` elements in M1–M4; no raw `$` leaking).
- Mermaid diagram source embedded for client-side rendering.
- Sitemap generated.

---

## 4. Key Decisions

1. **Added MathJax** (`markdown-it-mathjax3`) — the blog doesn't use it, but the course is math-heavy. One-line config change to swap to KaTeX if preferred.
2. **`BASE_PATH = '/biosignal/'`** — set for GitHub Pages project-site deployment. Documented as the #1 unstyled-site gotcha.
3. **Replicated blog files verbatim** (theme, CSS, favicon, workflow) by fetching from the actual repo rather than reconstructing, to guarantee a pixel-faithful match.

---

## 5. Known Issues / Caveats

- **No `package-lock.json` committed yet** — CI `npm ci` will fail until `npm install` is run once and the lockfile is committed.
- **Repo is not yet a git repository** — needs `git init` + first push.
- **Dependencies not installed locally** in this workspace (build was verified in a prior session); run `npm install` before `docs:dev`.
- `BASE_PATH` must be changed to `/` if deploying to a custom domain or `<user>.github.io` root.

---

## 6. Next Steps

**To go live:**
```bash
cd /home/abhin/Workspace/biosignal
npm install                      # generates package-lock.json
git init && git add . && git commit -m "Initial commit: biosignal course site"
git branch -M main
git remote add origin https://github.com/dearabhin/biosignal.git
git push -u origin main
```
Then **Settings → Pages → Source: GitHub Actions**. Site lands at `https://dearabhin.github.io/biosignal/`.

**Optional enhancements (not yet done):**
- [ ] `og-image.png` social card in `doc/public/`
- [ ] `doc/public/CNAME` for a custom subdomain (e.g. `biosignal.abhinkrishna.com`)
- [ ] Starter code repositories for the 5 capstone projects
- [ ] Cross-links between this site, the blog, and GitHub

---

*Signals from the body, decoded with code.*
