import { defineConfig } from "vitepress";
import type { HeadConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// Same sleek orange vector logo family as blog.abhinkrishna.com
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23D95C41" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 12 5 12 7.5 5.5 10.5 18.5 13 8.5 14.8 12 22 12" /></svg>';

// If you deploy to https://dearabhin.github.io/biosignal/ keep BASE_PATH = '/biosignal/'.
// If you later point a custom domain (e.g. biosignal.abhinkrishna.com) at this repo,
// change BASE_PATH to '/' and SITE_URL to the new domain (see /deployment-guide).
const SITE_URL = 'https://dearabhin.github.io/biosignal';
const BASE_PATH = '/biosignal/';

export default withMermaid(
  defineConfig({
    base: BASE_PATH,

    title: "Biomedical Signal Processing",
    description: "Project-based learning notes for PBEBT504 — DSP foundations, ECG/EEG/EMG analysis, digital filters, and research-grade projects. By Abhin Krishna.",
    cleanUrls: true,

    sitemap: {
      hostname: SITE_URL
    },

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE_PATH}favicon.svg` }],

      // OpenGraph global tags
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Biomedical Signal Processing — Abhin Krishna' }],
      ['meta', { property: 'og:locale', content: 'en_US' }],

      // Twitter Card global tags
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@dearabhin' }],
      ['meta', { name: 'twitter:creator', content: '@dearabhin' }],
    ],

    transformHead({ pageData }) {
      const canonicalUrl = `${SITE_URL}/${pageData.relativePath}`
        .replace(/index\.md$/, '')
        .replace(/\.md$/, '');

      const head: HeadConfig[] = [
        ['link', { rel: 'canonical', href: canonicalUrl }],
        ['meta', { property: 'og:title', content: pageData.title || 'Biomedical Signal Processing — Abhin Krishna' }],
        ['meta', { property: 'og:url', content: canonicalUrl }],
      ];

      if (pageData.description) {
        head.push(['meta', { property: 'og:description', content: pageData.description }]);
      }

      return head;
    },

    themeConfig: {
      logo: brandLogo,

      search: {
        provider: "local"
      },

      nav: [
        { text: "Home", link: "/" },
        { text: "Modules", link: "/modules/module-1" },
        { text: "Projects", link: "/projects/capstone-projects" },
        { text: "Blog", link: "https://blog.abhinkrishna.com" }
      ],

      sidebar: [
        {
          text: "Start Here",
          items: [
            { text: "Why This Course Matters", link: "/" },
            { text: "Getting Started (Lab Setup)", link: "/getting-started" }
          ]
        },
        {
          text: "Course Modules",
          items: [
            { text: "1 · Basics of Biomedical Signal Processing", link: "/modules/module-1" },
            { text: "2 · Fourier Analysis", link: "/modules/module-2" },
            { text: "3 · Spectrum Analysis & Z-Transform", link: "/modules/module-3" },
            { text: "4 · Digital Filters", link: "/modules/module-4" }
          ]
        },
        {
          text: "Projects & Portfolio",
          items: [
            { text: "Capstone Project Ideas", link: "/projects/capstone-projects" },
            { text: "Portfolio & Presentation Guide", link: "/projects/portfolio-guide" }
          ]
        },
        {
          text: "Reference",
          items: [
            { text: "Resources & Datasets", link: "/resources" },
            { text: "Deployment Guide", link: "/deployment-guide" }
          ]
        }
      ],

      socialLinks: [
        { icon: "github", link: "https://github.com/dearabhin" },
        { icon: "twitter", link: "https://x.com/dearabhin" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/abhin-krishna/" },
        { icon: "youtube", link: "https://youtube.com/dearabhin" },
        { icon: "instagram", link: "https://instagram.com/dearabhin" }
      ],

      footer: {
        message: 'Signals from the body, decoded with code.',
        copyright: 'Copyright © 2026 Abhin Krishna'
      },

      outline: {
        level: [2, 3],
        label: 'On this page'
      }
    },

    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
      // LaTeX support via markdown-it-mathjax3 ($...$ inline, $$...$$ display)
      math: true
    },

    // Custom Mermaid configuration matching the blog aesthetic
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#F4F3EE',
        primaryBorderColor: '#D1D1D1',
        primaryTextColor: '#1A1A1A',
        lineColor: '#B3B3B3',
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px'
      },
      flowchart: {
        nodeSpacing: 40,
        rankSpacing: 56,
        padding: 12
      }
    }
  })
);
