# Portfolio redesign

## Objective
Replace the current portfolio UI (`sparvoliValentinoApp`) with a professional design derived from two reference files:
- A = `~/Downloads/valentino_portfolio_v2_cinematic.html` (cinematic)
- B = `~/Downloads/valentino-portfolio-v4.html` (GitHub-dark, recruiter-first)

## Problem / why
Current site reads as junior: outdated copy ("Full Stack Developer in training"), no Finket experience, copy-pasted JSX, dead code/deps, typos, generic styling.

## Design decisions (user-approved, 2026-09-22)
- Navbar: B (mono `<VS/>` brand, links, ES/EN toggle, mobile slide-down nav).
- Palette: B (GitHub dark: `#0d1117`, `#161b22`, `#30363d`, `#e6edf3`, accent `#3fb950`, etc.). Fonts: Inter + JetBrains Mono.
- Hero: A's structure (availability pill, masked line-reveal headline, role scramble, CTAs, socials, portrait card) rendered with B's palette/fonts.
- Projects: A's sticky-stacking scroll behavior + B's card visuals, each card keeps an image.
- Projects shown: TodoEscabio, Refractory SRL, MOND only.
- All other sections from B: metrics strip, experience, stack, education, contact, footer.
- Excluded: preloader, custom cursor.
- i18n: Spanish default, EN toggle (as in B). JSON-LD Person schema from B.

## Constraints
- Stack stays Vite + React 18 + TS + Tailwind 3. No new runtime deps unless justified.
- Keep Vite `base: '/ValentinoSparvoliWeb/'` (GitHub Pages).
- Respect `prefers-reduced-motion`. Mobile-first, no horizontal scroll.
- Content lives in typed data files, not inline JSX.

## TDD
Mode: off (source: no test runner configured in project). Checks: `npm run build`, `npm run lint`.

## Tasks
- [x] T1 Foundation: remove dead code/assets/deps (sweetalert2, simple-parallax-js, App.css, stubs, placeholder font), Tailwind tokens + fonts, i18n provider, typed content data (ES/EN), index.html meta + JSON-LD, drop unneeded router. Route: delegated writer.
- [x] T2 Navbar + Hero + metrics strip. Route: delegated writer.
- [x] T3 Projects sticky stack (3 projects, images). Route: delegated writer.
- [x] T4 Experience, Stack, Education, Contact, Footer. Route: delegated writer.

Route evidence: 2+ non-trivial files per task → writer trigger.

## Acceptance criteria
- Build and lint pass.
- All sections render in ES and EN; toggle works.
- Sticky project stack works on desktop, degrades to a single column on mobile.
- No dead deps/files remain.

## Open items
- Images for TodoEscabio and Refractory SRL are missing (headless screenshot failed from sandbox). Placeholder slots until the user provides them.

## Progress / evidence
- T1 (commit pending — see next commit hash): removed `@fortawesome/*`, `react-router-dom`, `simple-parallax-js`, `sweetalert2` deps; deleted `BasicInfo.tsx`, `CardProject.tsx`, `App.css`, `public/vite.svg`, `public/CV.pdf`, unused project/logo images in `src/assets`; renamed `Components/` → `components/` (via temp dir, case-sensitive fs) and `CV_SparvoliValentino.docx.pdf` → `CV_Sparvoli_Valentino.pdf`; deleted old `Header.tsx`/`Footer.tsx`/`views/SparvoliValentino.tsx` (superseded by new `sections/*` skeletons wired in `App.tsx`, filled in T2–T4); added Tailwind GH-dark tokens + Inter/JetBrains Mono fonts; added `src/i18n` (context + ES/EN dictionaries), `src/content` (profile/projects/experience/stack/education, typed, bilingual), `src/hooks` (useReveal, useActiveSection, useStickyStack, useScramble, useTilt), `src/components/ui` (RichText, Reveal, Button, Chip, Section, icons); rewrote `index.html` (lang=es, meta description, OG tags, theme-color, JSON-LD Person schema, Inter/JetBrains Mono links, dropped Jersey 10); simplified `index.css`.
  - `npm run build`: pass (tsc -b && vite build, no errors).
  - `npm run lint`: pass, 0 errors, 1 warning (`react-refresh/only-export-components` in `I18nContext.tsx` for exporting both the provider and the `useI18n` hook — accepted, common pattern, does not fail the lint script).
- T1 commit: `edfef19` — "refactor: remove dead code and set up design tokens, i18n and content data".
- T2 (commit pending — see next commit hash): implemented `Navbar` (mono `<VS/>` brand, desktop links with IntersectionObserver-driven active-link highlight, ES/EN toggle, hamburger + slide-down mobile nav), `Hero` (availability pill with pulsing dot, masked two-line reveal headline with a green→cyan→purple gradient accent line, `useScramble`-driven role text, RichText hero copy, primary/ghost CTAs, GitHub/LinkedIn social row, tilt-on-mousemove portrait card with meta overlay, plus a B-style id-card panel with dashed key/value rows below the portrait), and `Metrics` (4-tile strip from the metrics dictionary, staggered reveal).
  - `npm run build`: pass (tsc -b && vite build, no errors).
  - `npm run lint`: pass, 0 errors, 1 warning (same pre-existing `react-refresh/only-export-components` note as T1).
  - Not verified in an actual browser (no visual/interactive QA tool used in this session) — verified via successful TypeScript build + ESLint only.
- T2 commit: `bd027c4` — "feat: add navbar, hero and metrics sections".
- T3 (commit pending — see next commit hash): added a custom Tailwind `stack: 841px` breakpoint (matches A's sticky-stack collapse threshold), `useStickyStack` wired into `Projects` (`ProjectCard`, `ProjectImagePlaceholder`). 3 cards, in order: TodoEscabio, Refractory SRL, MOND — text/links from B, MOND image from `src/assets/MondBanner.png`. Below 841px cards are `position: static` and stack in a single column (image above content); at/above 841px they are `position: sticky` and `useStickyStack` scales/dims each card as the next one scrolls over it (same math as reference A, driven by a passive scroll+resize listener instead of a continuous rAF loop). TodoEscabio and Refractory render the `ProjectImagePlaceholder` browser-window mock (no screenshot yet).
  - `npm run build`: pass (tsc -b && vite build, no errors).
  - `npm run lint`: pass, 0 errors, 1 warning (same pre-existing note).
  - Not verified in an actual browser — same caveat as T2.
- T3 commit: `cb78b40` — "feat: add sticky-stacking projects section".
- T4 (commit pending — see next commit hash): implemented `Experience` (Finket + Freelance cards, left accent border, checkmark bullets via `RichText`, tech chips), `Stack` (3 columns from `content/stack.ts`, "daily use"/"agile" mono notes), `Education` (3 cards from `content/education.ts`, green-bold `RichText` variant, certificate links), `Contact` (headline with highlighted span, primary/ghost/ghost CTAs — email, LinkedIn, CV — plus an email/phone/linkedin/github detail grid) and `Footer` (status dot, location, live Buenos Aires clock updated every 30s, back-to-top link). Added a `strongClassName` prop to `RichText` so Education's bold text can render green (matching B) while other sections keep the default ink/bold.
  - `npm run build`: pass (tsc -b && vite build, no errors).
  - `npm run lint`: pass, 0 errors, 1 warning (same pre-existing note).
  - Not verified in an actual browser — same caveat as T2/T3.
  - Verified with `rg` that no leftover FontAwesome/react-router/sweetalert2/simple-parallax-js/"personalizada"/Jersey 10 references remain anywhere in `src/`, `index.html`, `package.json` or `tailwind.config.js`.

## Deviations from the approved design
- Hero headline: B's h1 is a single line ("Valentino Sparvoli."); to satisfy A's "masked line-by-line reveal headline with one gradient/accent span" it was split into two masked lines — line 1 "Valentino Sparvoli" (plain), line 2 "Frontend Developer" (green→cyan→purple gradient span) — with the role-scramble line (Next.js & TypeScript / UI components at Finket / etc., cycling) placed just below, reusing A's scramble mechanic on B-sourced role strings.
- `contact.ts` was not created as a separate content file; contact facts (email, phone, GitHub, LinkedIn, CV) live in `content/profile.ts` since they're the same facts already needed by the hero id-card, avoiding duplication.
- `useStickyStack` uses a passive `scroll`/`resize` listener batched with `requestAnimationFrame` instead of reference A's continuous rAF loop — same scale/dim math, less idle CPU use.
- No dedicated cross-browser/visual QA was performed (no browser automation tool used in this session); all four tasks were verified via `npm run build` (tsc -b + vite build) and `npm run lint` only, per the acceptance criteria's stated checks.

## Pending / follow-ups
- TodoEscabio and Refractory SRL still render the `ProjectImagePlaceholder` browser-window mock (no screenshots available). To add a real screenshot later: drop the image file in `sparvoliValentinoApp/src/assets/`, import it in `src/content/projects.ts`, and set the `image` field on that project's entry (see the `mond` entry for the pattern) — no other code changes needed.
- The pre-existing `react-refresh/only-export-components` ESLint warning on `src/i18n/I18nContext.tsx` (exporting both `I18nProvider` and `useI18n`) was left as-is; it does not fail `npm run lint` and is a common, accepted pattern for context+hook modules.

## Next step
None — T1–T4 complete. Optional future work: real screenshots for TodoEscabio/Refractory SRL, and a manual/browser-based visual QA pass.
