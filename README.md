# Serendib Eco Lab — Website

Official website for **Serendib Eco Lab**, an ecological research organisation based in Sri Lanka dedicated to the scientific study and conservation of the island's extraordinary biodiversity.

🌐 **Live site:** <https://serendibecolabs.netlify.app/>

---

## About

"Serendib" is the ancient Arabic name for Sri Lanka — a land of remarkable endemic wildlife, tropical rainforests, wetlands, and coral reefs. Serendib Eco Lab conducts ecological field surveys, biodiversity assessments, environmental impact studies, and community education programmes across the island's diverse ecosystems.

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v22 or above
- pnpm (via Corepack)

```serendibecolab.github.io/README.md#L1-1
corepack enable
corepack enable pnpm
```

### Setup

```serendibecolab.github.io/README.md#L1-1
pnpm install
```

### Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build the production site to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Run TypeScript diagnostics across all `.astro` files |

---

## Content

All site content lives in `src/content/`:

| Folder | Purpose |
|---|---|
| `posts/` | Blog posts — Markdown with YAML frontmatter |
| `services/` | Research & service pages |
| `gridItems/` | Homepage featured content grid |
| `specs/` | Static pages (About) |

### Adding a blog post

Create a new `.md` file in `src/content/posts/` with the following frontmatter:

```serendibecolab.github.io/README.md#L1-1
---
title: Your Post Title
published: 2025-06-01
description: A short summary shown in listing pages.
tags: [Sri Lanka, Ecology]
category: Research
cover: /images/your-cover-image.webp
draft: false
---

Post content goes here.
```

### Site configuration

Global configuration — site title, navigation links, banner images, social links, service cards, and homepage grid items — is managed in **`site.config.ts`** in the project root.

---

## Deployment

The site is automatically deployed to [GitHub Pages](https://pages.github.com/) on every push to the `main` branch via the GitHub Actions workflow defined in `.github/workflows/astro.yml`.

To trigger a manual deployment, push to `main` or run the workflow from the **Actions** tab on GitHub.

---

## Licence

Content © Serendib Eco Lab. All rights reserved.
