# Busy Bee Solutions — Website

A single-page marketing site for **Busy Bee Solutions**, a virtual administrative
support and social media management business.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/)
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

| What                | Where                                              |
| ------------------- | -------------------------------------------------- |
| Brand colors        | `tailwind.config.js` → `theme.extend.colors`       |
| Fonts               | `index.html` (Google Fonts) + `tailwind.config.js` |
| Hero / About / Team | `src/pages/Home.jsx`                               |
| Services list       | `src/pages/Home.jsx` → `services` array            |
| Contact email       | Search for `admin@busybeesolutionscorp.com`        |

## Project structure

```
src/
  components/
    Header.jsx
    Footer.jsx
    Hero.jsx
    Reveal.jsx
  pages/
    Home.jsx
    NotFound.jsx
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
