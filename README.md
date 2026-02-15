# Deexen AI — Waitlist / Early Access Page

A modern, premium single-page Next.js marketing site for Deexen AI's waitlist and Founding Beta Tester Program.

## Features & Design

-   **Typography**: Premium pairing of **Outfit** (Modern Sans) and **Joti One** (Display/Script).
-   **Beta Page**: Dedicated landing page (`/beta`) for the "Founding 50" cohort with unique branding.
-   **Visuals**: Dark mode aesthetic with orange accents, glassmorphism, and custom SVG icons.
-   **Dynamic UI**: High-fidelity IDE mockups, terminal simulations, and interactive hover effects.

## Tech Stack

-   **Next.js 15** (App Router, TypeScript)
-   **Tailwind CSS v4** (with `@theme` configuration)
-   **Framer Motion** (Animations)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── api/waitlist/route.ts   # POST endpoint for email submissions
├── beta/page.tsx           # Dedicated Beta Program landing page
├── globals.css             # Tailwind config + design tokens
├── layout.tsx              # Root layout with SEO metadata and Fonts
└── page.tsx                # Main page (all sections)
components/
├── Navbar.tsx              # Sticky nav with scroll blur
├── Hero.tsx                # Hero section with email form
├── WaitlistForm.tsx        # Reusable email capture form
├── Features.tsx            # 5 AI modes showcase
├── IDEShowcase.tsx         # IDE features + code mockup
├── BetaProgram.tsx         # Beta tester program details (embedded in Home)
├── Roadmap.tsx             # Coming soon features
├── FinalCTA.tsx            # Bottom email capture
└── Footer.tsx              # Minimal footer
```
