# Kaled Barreto — Portfolio

Personal portfolio built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. Digital Bauhaus / Neo-Memphis aesthetic — pure CSS geometric shapes, asymmetric grid, strong color palette, extreme font-weight contrast.

## Stack

- **Next.js 15** (App Router, React Server Components by default)
- **TypeScript 5** (strict)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **next/font/google** — Inter, self-hosted, no render-blocking

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # lint check
```

## Editing content

All portfolio content (experience, projects, skills, certifications, education, contact links) lives in a single file: [`lib/data.ts`](./lib/data.ts). Components never hardcode copy — see [`CLAUDE.md`](./CLAUDE.md) for the exact shape of each data entry.

## Design system

Full design rules (color palette, typography, geometry, what's forbidden, accessibility requirements) are documented in [`CLAUDE.md`](./CLAUDE.md) — treat it as the source of truth before changing any visual convention.

## Deployment

Zero-config deploy to [Vercel](https://vercel.com) — push to the connected GitHub repo and it deploys automatically. Production domain: [kaledbarreto.com.br](https://kaledbarreto.com.br), configured in [`lib/site.ts`](./lib/site.ts).
