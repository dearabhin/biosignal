---
title: "Resources & Datasets"
description: "Curated datasets, textbooks, courses, software, hardware, and papers for biomedical signal processing — everything referenced across the course, in one place."
date: 2026-06-10
---

# Resources & Datasets

Everything I lean on across the four modules, gathered in one place. Bookmark this page.

## Datasets (all free)

| Dataset | Signal | Best for |
| :--- | :--- | :--- |
| [MIT-BIH Arrhythmia DB](https://physionet.org/content/mitdb/1.0.0/) | ECG, annotated beats | QRS detection, arrhythmia (Modules 1, 4) |
| [PTB-XL](https://physionet.org/content/ptb-xl/1.0.3/) | 12-lead clinical ECG (21k records) | ML classification (DeepECG capstone) |
| [MIT-BIH Noise Stress Test](https://physionet.org/content/nstdb/1.0.0/) | ECG + calibrated noise | Filter robustness benchmarking (Module 4) |
| [EEG Motor Movement/Imagery](https://physionet.org/content/eegmmidb/1.0.0/) | 64-ch EEG (BCI2000) | Motor-imagery BCI (Module 3, NeuroPilot) |
| [Sleep-EDF](https://physionet.org/content/sleep-edfx/1.0.0/) | EEG/EOG, sleep stages | Spectrograms, spindle detection (Module 2) |
| [PhysioNet (full index)](https://physionet.org/about/database/) | Everything biosignal | The canonical biomedical data hub |
| [BNCI Horizon 2020](http://bnci-horizon-2020.eu/database/data-sets) | Many BCI datasets | EEG BCI research |

::: tip The WFDB shortcut
Most PhysioNet records load in two lines with no manual download: `wfdb.rdrecord("100", pn_dir="mitdb")`. See [Getting Started](/getting-started) for the full pattern.
:::

## Textbooks

**Mapped to this course's books:**
- **Proakis & Manolakis, *Digital Signal Processing*** — the rigorous DSP reference; your Modules 1–4 theory backbone.
- **Rangayyan, *Biomedical Signal Analysis* (Wiley)** — *the* biosignal book; Ch. 1 (signals), Ch. 3 (filtering/artifacts), Ch. 7 (spectral analysis) map almost 1:1 to your syllabus and projects.
- **Oppenheim & Willsky, *Signals and Systems*** — the gold standard for the LTI/Fourier/Z foundations (Modules 1–3).
- **Devasahayam, *Signals & Systems in Biomedical Engineering* (Springer)** — bridges DSP theory and biomedical practice; great for intuition.

**Free and brilliant:**
- **Steven W. Smith, *The Scientist and Engineer's Guide to DSP*** — [free online](https://www.dspguide.com/). The most readable DSP book ever written; superb on windows and filters (Module 4).

## Courses & Video

- [NPTEL — Digital Signal Processing (Prof. S. C. Dutta Roy)](https://archive.nptel.ac.in/courses/117/105/117105134/) — your syllabus's listed course.
- [NPTEL — Biomedical Signal Processing](https://archive.nptel.ac.in/courses/108/101/108101174/) — biosignal-specific.
- [3Blue1Brown — *But what is the Fourier Transform?*](https://www.youtube.com/watch?v=spUNpyF58BY) — the best Fourier intuition video, full stop (Module 2).
- [Allen Downey, *Think DSP*](https://greenteapress.com/wp/think-dsp/) — free, code-first, Python.

## Software

| Tool | Use |
| :--- | :--- |
| [NumPy](https://numpy.org/) / [SciPy](https://docs.scipy.org/doc/scipy/reference/signal.html) | Core DSP, `scipy.signal` for everything filter-related |
| [NeuroKit2](https://neuropsychology.github.io/NeuroKit/) | Production ECG/PPG/EDA pipelines; validate your own code against it |
| [MNE-Python](https://mne.tools/) | The EEG/MEG research standard |
| [WFDB-Python](https://wfdb.readthedocs.io/) | Read PhysioNet records directly |
| [PyTorch](https://pytorch.org/) | Learned filters & classifiers; GPU |
| [Lab Streaming Layer](https://labstreaminglayer.org/) | Real-time multi-device biosignal streaming (BCIs) |

## Hardware (affordable, India-friendly)

| Kit | ~Cost | Use |
| :--- | :--- | :--- |
| AD8232 ECG module + ESP32/Arduino | ₹300–600 | Single-lead ECG (CardioGuard) |
| MAX30102 PPG sensor | ₹150–300 | Pulse waveform, SpO₂ (VitalEdge) |
| [BioAmp EXG Pill (Upside Down Labs)](https://upsidedownlabs.tech/) | ₹2,500–3,500 | ECG/EMG/EOG/EEG, Indian-made, well-documented |
| [OpenBCI Ganglion / Cyton](https://openbci.com/) | ₹25k+ | Research-grade EEG (NeuroPilot) |

::: warning Safety
Always record from **battery-powered, isolated** devices. Never connect a biosignal frontend to a body while the host is on mains power (including a charging laptop).
:::

## Papers Worth Reading

- **Pan & Tompkins (1985)**, *A Real-Time QRS Detection Algorithm*, IEEE TBME — the algorithm you'll reimplement; every operation is a Module 1–4 concept.
- **Cooley & Tukey (1965)**, *An Algorithm for the Machine Calculation of Complex Fourier Series* — 4 pages, changed computing (Module 2).
- **Hannun et al. (2019)**, *Cardiologist-level arrhythmia detection with CNNs*, Nature Medicine — the DeepECG north star.
- **Lawhern et al. (2018)**, *EEGNet* — compact CNN for EEG BCIs (NeuroPilot).
- **Rangayyan & Reddy**, VAG analysis papers — for the under-explored knee-vibration niche.

## This Course's Pages

- [Module 1 — Basics of Biomedical Signal Processing](/modules/module-1)
- [Module 2 — Fourier Analysis](/modules/module-2)
- [Module 3 — Spectrum Analysis & Z-Transform](/modules/module-3)
- [Module 4 — Digital Filters](/modules/module-4)
- [Capstone Project Ideas](/projects/capstone-projects)
- [Portfolio & Presentation Guide](/projects/portfolio-guide)
- [Deployment Guide](/deployment-guide)
