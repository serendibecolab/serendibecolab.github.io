/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(0.75rem, 2vw, 1rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
