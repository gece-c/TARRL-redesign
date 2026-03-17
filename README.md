# TARRL

**Texas Advanced Robotics Research Lab** — an open, venture-driven Embodied AI institute where curiosity meets courage and AI, robotics, and design collide.

This repository is the official marketing/landing site for TARRL. It introduces the lab, research tracks, how participation works, and who it’s for.

## Overview

TARRL is built for PhD candidates, current PhDs and postdocs, and experienced industry professionals who want to go beyond papers and titles and ship code, systems, and robots that others can use. The site highlights:

- **Who we are** — Not a traditional university lab, corporate R&D, or bootcamp
- **Why we exist** — Mission and values
- **Research tracks** — Humanoids, Quadrupeds, Perception & Sensing, Tooling & Simulation, Space Robotics
- **How it works** — Remote-first participation, access to robots and infrastructure, distributed research pods, open written culture
- **Who it’s for** — Eligibility and how to apply

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool and dev server)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations, with `prefers-reduced-motion` support)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (or yarn/pnpm)

### Install

```bash
npm install
```

### Development

Start the dev server (default: [http://localhost:5173](http://localhost:5173)):

```bash
npm run dev
```

### Build

Production build:

```bash
npm run build
```

Output goes to `dist/`.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── index.html
├── package.json
├── vite.config.mts
├── tailwind.config.cjs
├── postcss.config.cjs
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── hooks/
    │   └── usePrefersReducedMotion.ts
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── Sections.tsx      # WhoWeAre, WhyWeExist, WhatWeBelieve
    │   ├── ResearchTracks.tsx
    │   ├── ImageCarousel.tsx
    │   ├── HowItWorks.tsx
    │   ├── WhoThisIsFor.tsx
    │   ├── ApplyCTA.tsx
    │   ├── Footer.tsx
    │   └── ParticleNetwork.tsx
    └── assets/
        ├── humanoid/
        ├── humanoid-png/
        ├── robodog/
        └── robodog-png/
```

## Accessibility

The site respects `prefers-reduced-motion` for animations and uses smooth scrolling only when motion is not reduced.

## License

Private — see repository settings or maintainers for license and usage terms.
