# Sri Durga Matha Astrology — React SPA (GitHub Pages)

Plain React + Vite + React Router (HashRouter) build of the site, ready to deploy to GitHub Pages.

## Setup

```bash
cd react-spa
npm install
npm run dev          # local dev at http://localhost:5173
npm run build        # outputs to dist/
npm run preview      # preview the production build
```

## Deploy to GitHub Pages

1. Create a GitHub repo named **`spiritual-insight-web`** (must match the `base` in `vite.config.ts`).
2. Push the contents of this `react-spa/` folder as the root of that repo.
3. Run:
   ```bash
   npm install
   npm run deploy
   ```
   This builds and publishes `dist/` to the `gh-pages` branch via the `gh-pages` package.
4. In GitHub repo **Settings → Pages**, set:
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`** / root
5. Your site goes live at `https://<your-username>.github.io/spiritual-insight-web/`

> Using a **different repo name?** Update `base: "/<repo-name>/"` in `vite.config.ts` before building.

## Routing

Uses **HashRouter** (URLs look like `/#/about`, `/#/pooja-prayer/lord-ganesh-puja`). This works out-of-the-box on GitHub Pages with no extra redirect setup. Refresh on any route works.
