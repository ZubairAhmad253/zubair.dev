# zubair.dev — Zubair Ahmad, Full Stack Developer

Personal portfolio of **Zubair Ahmad**, Full Stack Developer in Doha, Qatar and Support Engineer at
Badr Technology LLC (BadrGo). Live at **[zubair-dev.vercel.app](https://zubair-dev.vercel.app)**.

Premium React & Next.js interfaces backed by Node.js, Express.js and Python — with a rainbow brand
theme, a hero slider, parallax, and dark / light mode.

## Tech stack

- **Next.js 16** (App Router, React 19, React Compiler, Turbopack)
- **TypeScript** and **Tailwind CSS 4**
- **GSAP + ScrollTrigger** (scroll reveals, parallax), **Framer Motion** (splash, menus), **Lenis** (smooth scrolling)
- **next-themes** (dark / light), **lucide-react** + **react-icons**
- Fonts: **Varino** (headings, self-hosted in `src/fonts`), Sora, Plus Jakarta Sans, JetBrains Mono

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

> If styles look stale in development (for example all hero slides visible at once), stop the dev
> server, delete the `.next` folder and start it again.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero slider (About me · Experience · Projects), snapshot, highlights |
| `/about` | About, experience, skills, tech stack, why hire me |
| `/services` and `/services/[slug]` | 6 services, process, detail pages |
| `/projects` and `/projects/[slug]` | Projects, case studies, before / after, detail pages |
| `/case-studies/[slug]` | Case study detail pages |
| `/contact` | Project form (opens a pre-filled Gmail / WhatsApp message), FAQ |
| `/cv` | Printable CV — "Download PDF" uses the browser's print to PDF |

## Editing content

Most text lives in `src/data`, so updates rarely need component changes:

| File | What it controls |
| --- | --- |
| `src/data/projects.ts` | Projects (title, screenshot, description, features, tech, live / GitHub links) |
| `src/data/services.ts` | Services and their detail pages |
| `src/data/caseStudies.ts` | Case studies |
| `src/data/experience.ts` | Work experience |
| `src/data/skills.ts` | Skill groups |
| `src/lib/site.ts` | Name, role, site URL, description and social links used for SEO |

Project screenshots are in `public/images/projects` (WebP).

## SEO

- Per-page titles, descriptions and canonical URLs (`pageMeta` in `src/lib/site.ts`)
- Generated share images: `src/app/opengraph-image.tsx` and one per project
- `sitemap.xml`, `robots.txt`, web manifest, favicon and Apple touch icon (all generated in `src/app`)
- JSON-LD structured data (Person + WebSite) on the home page

If the site moves to a custom domain, update `url` in `src/lib/site.ts`.

## Accessibility and motion

Keyboard focus rings, labelled controls and descriptive links throughout. Visitors who prefer
reduced motion get no smooth scrolling, parallax or slide animations; parallax and smooth scrolling
run only on desktop (mouse / trackpad).

## Font licence

Varino by Arterfak Project is free for personal use only. Commercial use (including a business or
freelance website) needs a licence from [arterfakproject.com](https://arterfakproject.com/product/varino/).
