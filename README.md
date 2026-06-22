# Abhishek Kumar Portfolio

Premium portfolio website for Abhishek Kumar, positioned as an AI/ML Engineer, Data Analyst, Generative AI Developer, and aspiring Agentic AI Engineer.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- SEO metadata, robots, and sitemap routes

## Folder Structure

```text
.
|-- public/
|   `-- Abhishek_Kumar_Resume_v2.docx
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   `-- data/
|       `-- portfolio.ts
|-- next.config.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Portfolio Content

The core resume-backed content lives in `src/data/portfolio.ts`.

Update these fields before publishing:

- `profile.github`
- `profile.linkedin`
- project `github` links
- project `demo` links
- production domain in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts`

## SEO Setup

SEO is configured in `src/app/layout.tsx` with:

- Title templates
- Description
- Keywords
- Open Graph metadata
- Twitter card metadata
- Search crawler settings

Search routes:

- `/robots.txt` from `src/app/robots.ts`
- `/sitemap.xml` from `src/app/sitemap.ts`

Replace the placeholder Vercel URL with the final deployed domain.

## Deployment Guide

### Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Run the default build command:

```bash
npm run build
```

5. Set the production domain in the metadata files.
6. Deploy.

### Netlify

Use:

```bash
npm run build
```

Publish directory:

```text
.next
```

For best Next.js support, install and enable Netlify's Next.js runtime.

## Recruiter Positioning

The site is intentionally written around:

- Production AI deployment at Vedanta
- ERP analytics across 150+ schools
- Power BI dashboards and automated reporting
- LangChain, Mistral AI, RAG, and AI agents
- Practical ML projects across NLP, computer vision, and forecasting

## Resume

The resume download button points to:

```text
public/Abhishek_Kumar_Resume_v2.docx
```
