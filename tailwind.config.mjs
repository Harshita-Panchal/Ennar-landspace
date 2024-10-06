/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#737B52",
        "secondary-green": "#2B2B2B",
        "light-taupe": "#D8CDAF",
        "soft-terracotta": "#BA7464",
        "ghost-white": "#F8F8FF",
      },
    },
  },
  plugins: [],
};
