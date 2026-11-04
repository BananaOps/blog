# BananaOps website

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Source of the BananaOps website: the home page and the documentation of every
BananaOps project. Built with [Astro Starlight](https://starlight.astro.build/)
and deployed to GitHub Pages.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build in ./dist/
npm run preview   # preview the production build
```

## Project layout

| Path | Content |
| --- | --- |
| `src/content/docs/index.mdx` | Home page (renders `src/components/HomePage.astro`) |
| `src/content/docs/projects/` | One page per project |
| `src/content/docs/docs/` | Quick start and contribution guide |
| `src/content/docs/*.md` | About, privacy policy, terms |
| `src/components/override-components/` | Starlight component overrides (header, footer, sidebar…) |
| `src/lib/projects.ts` | Project list used by the docs grid and page logos |
| `src/config/` | Site settings, sidebar, menu, social links |
| `src/styles/` | Global and documentation styles |
| `public/icons/` | Project icons |

## Adding a project

1. Create `src/content/docs/projects/<slug>.mdx`, where `<slug>` matches the GitHub repository name.
2. Add the project to `src/lib/projects.ts`.
3. Add a sidebar entry in `src/config/sidebar.json`.
4. Add its icon to `public/icons/<slug>.svg` and the matching sidebar rule in `src/styles/docs.css`.
5. To feature it on the home page, add it to the `tools` list in `src/components/HomePage.astro`.

## Icons

Tool icons live in `public/icons/` and are copied from `bananaops-icons/<tool>/svg/<tool>-icon.svg`.

Rocket icon (`tracker`): Font Awesome Free 7.3.1 (CC BY 4.0) — https://fontawesome.com

## Credits

Based on the [DocKit](https://github.com/themefisher/dockit-astro) Starlight theme by Themefisher (MIT, see `LICENSE`).
