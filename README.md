# Introduction to Biomedical Signal Processing (PBEBT504)

> Project-based learning notes, runnable code, and research-grade capstone projects for Semester 5 — **DSP foundations → ECG/EEG/EMG analysis → digital filters → BCIs.**

A VitePress documentation site by **[Abhin Krishna](https://blog.abhinkrishna.com)** — built as a public learning log for the S5 Biomedical Signal Processing course at Govt. Model Engineering College, Thrikkakara.

🔗 **Live site:** https://dearabhin.github.io/biosignal/

---

## 📚 What's Inside

| Section | Contents |
| :--- | :--- |
| **Module 1** | Biosignals (ECG/EMG/EEG/PCG…), sampling & aliasing, LTI systems, convolution, correlation, difference equations |
| **Module 2** | Fourier series → DTFT → DFT → FFT (Radix-2 DIT/DIF), ECG synthesis from sinusoids |
| **Module 3** | Spectrum estimation (Welch, AR/Burg), Z-transform, ROC, poles/zeros, inverse Z |
| **Module 4** | FIR (windows), IIR (Butterworth), impulse-invariant / matched-Z / bilinear transforms |
| **Capstones** | 5 recruiter-grade projects (BCI, arrhythmia monitor, EMG band, deep ECG, wearable platform) |
| **Guides** | Portfolio & presentation guide, lab setup, resources, deployment |

Every module page has: intuition-first explanations, LaTeX math, Mermaid diagrams, runnable Python (NumPy/SciPy/MNE/NeuroKit2/PyTorch), self-assessment, and project ideas.

---

## 🛠️ Tech Stack

- **[VitePress](https://vitepress.dev/)** (Vite + Vue static site generator)
- **[Mermaid](https://mermaid.js.org/)** diagrams via `vitepress-plugin-mermaid`
- **MathJax** via `markdown-it-mathjax3` (LaTeX `$...$` / `$$...$$`)
- **GitHub Pages** + **GitHub Actions** CI/CD

---

## 🚀 Local Development

```bash
# Prerequisites: Node.js v20+
git clone https://github.com/dearabhin/biosignal.git
cd biosignal
npm install

npm run docs:dev       # http://localhost:5173
```

| Command | Action |
| :--- | :--- |
| `npm run docs:dev` | Local dev server with hot reload |
| `npm run docs:build` | Production build → `doc/.vitepress/dist` |
| `npm run docs:preview` | Preview the production build |

---

## 🚢 Deployment

Push to `main` → GitHub Actions builds and deploys automatically. Full instructions (including custom domain) in **[the deployment guide](doc/deployment-guide.md)**.

> ⚠️ Set `BASE_PATH` in `doc/.vitepress/config.mts` to match your repo name (`/biosignal/`) before deploying.

---

## 🐍 Running the Code Examples

The Python in the modules expects:

```bash
pip install numpy scipy matplotlib jupyter neurokit2 mne wfdb plotly pandas torch
```

See [Getting Started](doc/getting-started.md) for the full lab setup, datasets, and hardware notes.

---

## 📄 License

MIT — learn from it, fork it, build on it. If it helps you, a ⭐ is appreciated.

*Signals from the body, decoded with code.*
