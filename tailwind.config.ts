import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#FFF9F4', light: '#FFFCFA' },
        gold: { DEFAULT: '#C89B45', light: '#E0BF79' },
        rose: { DEFAULT: '#E6A7B8' },
        blush: { DEFAULT: '#F4DEE5' },
        ink: { DEFAULT: '#241A1E' },
        dark: { DEFAULT: '#171318' },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(36, 26, 30, 0.07), 0 10px 20px -2px rgba(36, 26, 30, 0.04)',
        medium: '0 4px 25px -5px rgba(36, 26, 30, 0.10), 0 10px 30px -5px rgba(36, 26, 30, 0.04)',
        strong: '0 10px 40px -10px rgba(36, 26, 30, 0.15), 0 20px 50px -10px rgba(36, 26, 30, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
