import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--color-brand--1)",
        "secondary-color": "var(--color-brand--2)",
        "color-dark-0": "var(--color-dark--0)",
        "color-dark-1": "var(--color-dark--1)",
        "color-dark-2": "var(--color-dark--2)",
        "color-light-1": "var(--color-light--1)",
        "color-light-2": "var(--color-light--2)",
        "color-light-3": "var(--color-light--3)",
      },
    },
  },
  plugins: [],
};
export default config;
