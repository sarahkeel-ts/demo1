# MH Septic — Website Refresh (Preview)

A modernized 2-page marketing site built as a pitch concept for **MH Septic**, a
veteran-owned septic inspection company in Central Virginia.

> 🚧 This is a preview/pitch design — not the live MH Septic site.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for the two pages
- [Lucide React](https://lucide.dev/) icons
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact form (no backend)

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

To produce a production build:

```bash
npm run build
npm run preview
```

The build output lives in `dist/`.

## Deploy to Netlify

This project ships with a `netlify.toml`. To deploy:

1. Push the repo to GitHub (or GitLab / Bitbucket).
2. In Netlify, click **Add new site → Import an existing project**.
3. Choose this repo. The build command (`npm run build`) and publish directory
   (`dist`) are pre-configured.
4. Deploy. Netlify will auto-detect the contact form via `public/__forms.html`.
5. Verify form submissions in **Forms** in the Netlify dashboard.

The included SPA redirect rule (`/*  /index.html 200`) keeps client-side
routing working on direct visits and refreshes.

## Where to swap things

| What                         | Where                                           |
| ---------------------------- | ----------------------------------------------- |
| Brand colors                 | `tailwind.config.js` → `theme.extend.colors`    |
| Fonts                        | `index.html` (Google Fonts link) + `tailwind.config.js` |
| Photos / imagery             | Search the codebase for `TODO: replace`         |
| Service prices & copy        | `src/pages/Home.jsx` & `src/pages/Services.jsx` |
| Contact details (phone/email)| Used in components — search for `(804) 837-8746`|
| Service area counties        | `src/pages/Home.jsx` → `counties` array         |
| FAQ                          | `src/pages/Services.jsx` → `faq` array          |
| LocalBusiness JSON-LD        | `src/pages/Home.jsx` → `localBusinessJsonLd`    |

## Project structure

```
src/
  components/
    Header.jsx
    Footer.jsx
    Hero.jsx
    ServiceCard.jsx
    TrustBar.jsx
    CTA.jsx
    ContactForm.jsx
    StickyMobileCTA.jsx
    PreviewBanner.jsx
    Reveal.jsx
    SectionHeading.jsx
  pages/
    Home.jsx
    Services.jsx
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  robots.txt
  _redirects
  __forms.html
netlify.toml
```

## Accessibility & SEO

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`) with proper heading hierarchy
- All decorative images use empty `alt`; content images have descriptive alt text
- Skip-to-content link for keyboard users
- Visible focus rings (accent color)
- Color contrast targets WCAG AA on the navy/white and accent combinations
- Per-page `<title>` and `<meta description>` updates via `App.jsx`
- Open Graph / Twitter Card tags for social sharing
- `LocalBusiness` JSON-LD on the home page

## Photography

All photos are placeholder Unsplash URLs marked with
`{/* TODO: replace with MH Septic owned photo */}`. Run a search for
`TODO: replace` to find every spot to swap before a production launch.
