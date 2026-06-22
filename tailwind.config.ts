import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        paper: "#f8fafc",
        cyanbrand: "#20d3ee",
        mintbrand: "#45f5a8",
        coralbrand: "#ff7a70"
      },
      boxShadow: {
        glow: "0 0 60px rgba(32, 211, 238, 0.22)",
        soft: "0 24px 80px rgba(15, 23, 42, 0.14)"
      },
      backgroundImage: {
        "ai-grid":
          "linear-gradient(rgba(32,211,238,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(32,211,238,.16) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
