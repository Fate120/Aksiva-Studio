import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        aksiva: {
          orange: {
            50: "#fff8f0",
            100: "#ffeedb",
            200: "#ffd9b3",
            300: "#ffbd80",
            400: "#ff9743",
            DEFAULT: "#FA6800",
            primary: "#FA6800",
            hover: "#e55d00",
            600: "#d95200",
            700: "#b33e00",
            800: "#8c2e00",
            900: "#662000",
          },
          blue: {
            50: "#f0f6fa",
            100: "#e0edf5",
            200: "#b8d5e8",
            300: "#85b6d7",
            400: "#4d91c2",
            DEFAULT: "#01518E",
            primary: "#01518E",
            hover: "#014275",
            600: "#014275",
            700: "#013761",
            800: "#012b4d",
            900: "#011f38",
          },
          navy: {
            50: "#f3f6fa",
            100: "#e3e9f3",
            200: "#c7d4e7",
            300: "#9eb6d6",
            400: "#6e91bf",
            500: "#486ea3",
            600: "#325386",
            700: "#243e69",
            800: "#132545",
            DEFAULT: "#0B1528",
            dark: "#070E1B",
            deep: "#040810",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
