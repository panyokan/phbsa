# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also type-checks)
npm run lint     # ESLint
```

## Architecture

Next.js 15 App Router site for "Photo By Sandra" — a photography studio. TypeScript throughout, Tailwind CSS v4 (PostCSS plugin, not CDN), deployed as a static-friendly Next.js app.

**Routes** (all under `app/`, each a `page.tsx`):
- `/` — Home: hero slideshow + about teaser + portfolio teaser + pricing teaser + book CTA
- `/about`, `/how-we-work`, `/portfolio`, `/pricing`, `/contact`, `/book`

**Shared layout** (`app/layout.tsx`): wraps every page with `<Nav>` and `<Footer>`. Fonts loaded via `next/font/google` — Playfair Display (`--font-display`) and Inter (`--font-sans`) — and injected as CSS variables.

**Components** (`components/`):
- `Nav.tsx` — fixed, scroll-aware, transparent → dark, mobile overlay menu
- `Footer.tsx` — site footer
- `HeroSlideshow.tsx` — auto-advancing 3-slide hero, client component
- `CalEmbed.tsx` — Cal.com booking embed via `@calcom/embed-react` (namespace `ot-rnjzd3`)
- `ContactForm.tsx` — contact form
- `PortfolioGallery.tsx` — portfolio grid

## Design System

Defined in `app/globals.css` via Tailwind v4's `@theme` block — use these tokens everywhere, never raw hex values or default Tailwind palette colors:

| Token | Value | Use |
|---|---|---|
| `gold` / `gold-dark` / `gold-light` / `gold-pale` / `gold-mist` | `#B8873A` family | Brand accent, CTAs, borders |
| `ink` / `ink-soft` / `ink-mid` | `#141210` family | Dark backgrounds, text on light |
| `parchment` / `parchment-dark` / `parchment-mid` | `#F8F4EF` family | Page backgrounds |
| `body` | `#1C1813` | Default body text |
| `muted` | `#8A7D72` | Secondary text |
| `subtle` | `#C4B8AC` | Tertiary / disabled |

Font utilities: `font-display` (Playfair Display serif) and `font-sans` (Inter).

## Key Conventions

- `"use client"` only on components that need browser APIs or interactivity (Nav, HeroSlideshow, CalEmbed, ContactForm). Pages are server components by default.
- Images in `public/images/`: hero shots in `hero/`, miscellaneous/portfolio in `mis/`. Use `next/image` with `fill` + `sizes` for responsive images.
- `next.config.ts` allows remote images from `placehold.co` only.
- Booking is handled entirely by the Cal.com embed — no custom booking logic.
- CTA pattern: primary = `bg-gold text-ink`, secondary = `border border-gold text-gold` or `border border-parchment/50 text-parchment` (on dark).
- Section alternation: `bg-parchment` → `bg-parchment-dark` → `bg-ink-soft` for rhythm.
