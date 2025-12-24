import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
          light: "#6366F1",
        },
        secondary: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        accent: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FBBF24",
        },
        dark: "#1F2937",
        background: "#F9FAFB",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
