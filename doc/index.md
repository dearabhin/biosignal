---
title: "Biomedical Signal Processing — Abhin Krishna"
description: "Project-based learning notes for PBEBT504: DSP foundations, ECG/EEG/EMG analysis, digital filters, and research-grade capstone projects."
layout: home
hero:
  name: "Biomedical Signal Processing"
  text: "From Raw Voltages to Decoded Intent"
  tagline: "My Semester 5 project-based deep dive (PBEBT504) — the signal processing foundation every BCI, wearable, and neurotech system is built on."
  actions:
    - theme: brand
      text: Start with Module 1
      link: /modules/module-1
    - theme: alt
      text: Capstone Project Ideas
      link: /projects/capstone-projects
    - theme: alt
      text: View on GitHub
      link: https://github.com/dearabhin/biosignal
---

<div class="card-grid">
  <a href="./modules/module-1" class="card">
    <h3>Module 1 · Signals & Systems</h3>
    <p>ECG, EMG, EEG, PCG and friends. Sampling, aliasing, LTI systems, convolution and correlation — the alphabet of every biosignal pipeline.</p>
  </a>
  <a href="./modules/module-2" class="card">
    <h3>Module 2 · Fourier Analysis</h3>
    <p>Synthesizing an ECG from pure sinusoids, DTFT, DFT and the FFT — the algorithm that quietly runs the modern world (and every EEG band-power plot).</p>
  </a>
  <a href="./modules/module-3" class="card">
    <h3>Module 3 · Spectra & Z-Transform</h3>
    <p>Parametric vs non-parametric spectrum estimation, poles, zeros, ROC and inverse Z — the math that tells you if a filter will blow up.</p>
  </a>
  <a href="./modules/module-4" class="card">
    <h3>Module 4 · Digital Filters</h3>
    <p>FIR windows, IIR Butterworth, bilinear transform — designing the exact filters that sit inside pacemakers, hearing aids and Neuralink's N1 chip.</p>
  </a>
  <a href="./projects/capstone-projects" class="card">
    <h3>Capstone Projects</h3>
    <p>Recruiter-grade project ideas: QRS detectors, EEG rhythm classifiers, artifact-removal pipelines — each with starter code structure and a research angle.</p>
  </a>
  <a href="./projects/portfolio-guide" class="card">
    <h3>Portfolio & Presentation</h3>
    <p>How I document projects on GitHub, present them in reviews, and turn coursework into a portfolio that top labs actually notice.</p>
  </a>
</div>

## Why I'm Documenting This Course

In 2016, a paralyzed man named Nathan Copeland fist-bumped President Obama with a robotic arm he controlled with his thoughts. Behind that moment was not magic — it was **signal processing**: microvolt-level neural recordings, sampled, filtered, transformed, and decoded in real time.

That pipeline — *acquire → digitize → filter → transform → detect → decode* — is exactly what this course teaches, just starting with ECG and EEG instead of intracortical arrays. Every system I want to build, from wearable cardiac monitors to brain-computer interfaces, stands on these four modules.

This site is my public learning log for **PBEBT504 — Introduction to Biomedical Signal Processing** at Govt. Model Engineering College. Every module page has:

- **Intuition first** — stories and analogies before equations
- **The math** — properly derived, exam-ready, with LaTeX
- **Runnable Python** — NumPy / SciPy / Matplotlib / NeuroKit2 / MNE code you can paste into a notebook
- **Mermaid diagrams** — because a good block diagram beats three paragraphs
- **Project ideas** — 3–5 per module, scoped for the 30-mark PBL component and beyond
- **Research extensions** — how each topic connects to current BCI / wearable / neurotech literature

If you're a fellow student: steal everything. If you're a researcher or recruiter: this is how I learn — in public, end-to-end, with working code.
