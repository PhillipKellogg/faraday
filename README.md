# My Portfolio - [FaradayDev](https://faradaydev.ca)

Personal portfolio site built with Astro, React, and Tailwind CSS v4. Statically generated and served via nginx in Docker, proxied through Cloudflare.

## Why Astro — Performance Decisions

This site is a portfolio for a frontend engineer. Load time is part of the pitch. Every architectural decision was made with that in mind.

**Astro over Next.js / Nuxt / Remix:**
Astro is a static site generator first. At build time it renders every page to plain HTML — there is no server, no hydration overhead, no framework runtime shipped to the browser by default. A visitor hitting this site receives pre-rendered HTML and nothing else, unless a component explicitly opts into interactivity.

**Islands architecture (`client:load`, `client:visible`):**
Astro only hydrates components that actually need JavaScript. The Hero loads immediately (`client:load`) because it's above the fold. The Experience section uses `client:visible` — React doesn't load or hydrate until the section scrolls into view. About and Skills ship as zero-JS static HTML. The result is a dramatically smaller initial JS bundle compared to a fully hydrated SPA framework.

**nginx:alpine in production (no Node.js runtime):**
The Docker build is multi-stage. Node is used only during the build step to run `astro build`. The production image is nginx:alpine (~8MB), which serves pre-built static files directly from disk. There is no application server, no runtime compute, and no cold starts.

**Cache strategy:**
Astro hashes all asset filenames at build time (e.g. `_astro/index.Dh3kL9q2.js`). These files get `Cache-Control: public, immutable, max-age=31536000` — browsers and Cloudflare cache them permanently. The HTML itself is served with `no-cache` so users always get fresh markup, but all JS and CSS loads from cache on repeat visits. Cloudflare adds a global CDN layer on top of this for first-visit performance worldwide.

**Tailwind CSS v4:**
v4 uses a Vite plugin instead of a PostCSS pipeline. It tree-shakes unused styles at build time and ships only the CSS classes actually used in the project — typically a few kilobytes for a site this size.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation)
- **UI:** React components with Tailwind CSS v4
- **Styling:** Light neumorphic design system with CSS custom properties
- **Serving:** nginx:alpine (no Node.js in production)
- **Deployment:** Docker + Docker Compose, Cloudflare reverse proxy

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Deployment

Multi-stage Docker build — Node for the build step, nginx:alpine to serve. Cloudflare handles SSL termination and CDN caching at the edge.

```bash
# On your server
git pull && docker compose up -d --build
```

---

## Resume — Phil Kellogg

**Greater Toronto Area · (416) 841-7153 · kelloggphillip@gmail.com**
**[linkedin.com/in/phillipkellogg](https://www.linkedin.com/in/phillipkellogg)**

---

### Summary

Fullstack engineer with a deep frontend specialization. 5+ years of professional experience building and architecting large-scale web applications with Vue.js, React, and modern JavaScript ecosystems. Strong full-stack capabilities across Laravel and Node.js. Focused on performance, maintainability, and modernizing legacy systems.

---

### Professional Experience

#### CIBC — Senior Application Developer
*Toronto, ON (Hybrid) · Mar 2026 – Present*

Working on a new product launch within a large enterprise engineering organization.

---

#### Tithe.ly — Software Engineer
*Remote (Nashville, TN) · Mar 2021 – Feb 2026*

Led frontend architecture on a large-scale SaaS platform, driving a full migration from a legacy React + CodeIgniter stack to Vue 3 + Laravel and measurably improving performance for 10,000+ users.

- Architected and delivered a full migration from React + CodeIgniter to Vue 3, Nuxt, Pinia, TypeScript, and Laravel
- Redesigned frontend data-fetching and caching patterns — cut user list load times by ~50% for high-volume accounts
- Built an admin dashboard and shared component library from scratch, including user search, role management, and scalable data flow
- Merged account systems across two products, owning the payment, account-linking, and third-party app purchase flows end-to-end
- Stabilized a high-volume email feature by refactoring Laravel data access and rebuilding the frontend data layer
- Raised frontend test coverage to 80% introducing Vitest (unit) and Playwright (E2E)

---

#### Rentsync — Software Engineer
*Remote (St. Catharines, ON) · Oct 2020 – Mar 2021*

Built Vue frontend features and a full-stack CMS dashboard for a high-traffic real estate platform with 10,000+ property listings.

- Developed editorial UX improvements across a large Vue frontend
- Built the product management dashboard fullstack — Vue, Express, and PostgreSQL
- Integrated Redis caching to improve responsiveness and reduce DB load

---

#### Savvy Sale — Junior Software Engineer
*Remote (Vancouver, BC) · Apr 2020 – Aug 2020*

Built a real-time Vue dashboard and WebSocket chat system with live data sync via Firebase.

- Developed real-time dashboard UI with Vue.js and Vuetify
- Built WebSocket-based chat using Node.js
- Integrated Firebase Auth and Firestore for live data synchronization

---

### Technical Skills

| Area      | Technologies                                                        |
|-----------|---------------------------------------------------------------------|
| Frontend  | Vue 2/3, React, Nuxt, Pinia, TypeScript, Tailwind, PrimeVue, SCSS  |
| Backend   | PHP (Laravel), Node.js, Express.js                                  |
| Testing   | Vitest, Jest, Cypress, Playwright                                   |
| Databases | PostgreSQL, MySQL, MongoDB, Firestore, Redis                        |
| DevOps    | Docker, Linux, GitHub Actions, AWS                                  |

---

### Education

**BrainStation** — Web Development Diploma, 2020
**Toronto Metropolitan University** — BA History, 2019
