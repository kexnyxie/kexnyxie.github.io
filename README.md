# Personal Portfolio & Terminal Interface

> First-year Data Science portfolio styled as a minimal, dark-mode terminal environment (`whoami — kexnyxie`).

Live Demo: [kexnyxie.github.io](https://kexnyxie.github.io)

---

## Overview & Architecture

Instead of relying on heavy frontend frameworks, this site is built using **vanilla web technologies** paired with structured data files to keep it lightweight, fast, and authentic to a terminal interface.

```text
kexnyxie-portfolio/
│
├── index.html        → Semantic page structure
├── css/
│   └── style.css     → Custom terminal theme & CRT visual effects
├── js/
│   ├── boot.js       → Hero section typing sequence animation
│   └── projects.js   → Async fetch parser for rendering project log entries
├── data/
│   └── projects.json → JSON database storing project metadata
└── scripts/
    └── github_stats.py → Python script fetching GitHub API stats
