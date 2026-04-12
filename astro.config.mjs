import { defineConfig } from "astro/config";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMath from "remark-math";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

import pagefind from "astro-pagefind";

// https://astro.build/config

// Determine the correct base path based on repository
const isUserPage =
  process.env.GITHUB_REPOSITORY === "serendibecolab/serandibecolab.github.io";
const BASE_PATH = isUserPage ? "/" : "/";

export default defineConfig({
  base: BASE_PATH,
  site: "https://serendibecolab.github.io",
  output: "static",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [
    tailwind(),
    svelte(),
    react(),
    icon({
      include: {
        "line-md": ["*"],
        mdi: ["*"],
      },
    }),
    sitemap(),
    pagefind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
        },
      ],
    ],
  },
  scopedStyleStrategy: "where",
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    optimizeDeps: {},
  },
});
