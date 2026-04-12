import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const specs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/specs" }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.date().optional(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const gridItems = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gridItems" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  specs,
  posts,
  services,
  gridItems,
};
