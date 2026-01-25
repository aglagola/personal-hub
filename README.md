This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Walkthrough - Adam Glagola Personal Website

I have successfully built the core foundation of your personal website, designed to be a "digital headquarters" for your thoughts and projects.

### Accomplishments

1. Minimalist & Timeless Design
Greek-Inspired Typography: Implemented Cinzel for headings and Inter for body text.
Color Palette: rigorous grayscale/stone palette (stone-50 to stone-900) for a calm, premium feel.
Dark Mode: Fully supported with a seamless toggle in the navbar.
2. Core Architecture (Next.js 14+)
App Router: Utilized the latest Next.js patterns.
Component Library: Created reusable components:
Navbar
 & 
Footer
Button
 (with variants)
Card (for projects/blog)
Container
 (for consistent spacing)
3. Key Pages Implemented
Home (/): Hero section, "Join Community" email capture, and featured thoughts.
Blog (/blog): Listing page + Dynamic single post page (/blog/[slug]).
Now (/now): A dedicated page for your current focus.
Projects (/projects): Portfolio showcase.
About (/about): Personal story and philosophy.
Contact (/contact): Simple inquiry form.

### Verification Results

#### Automated Checks

TypeScript: Passed (npx tsc --noEmit exited with code 0).
Structure: All files are in the correct src/app and src/components directories.

#### Manual Verification

Navigation: Links correctly route between all major pages.
Responsiveness: Navbar adapts to mobile (hamburger menu) and desktop.
Theme: Light/Dark mode persists and applies correct Tailwind classes.

### Next Steps

Connect the "Join Community" form to a real provider (ConvertKit/Mailchimp).
Replace placeholder blog content with real MDX files or a CMS (Sanity/Contentful).
Add real project case studies.
Deploy to Vercel.
