/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      background: "var(--color-background)",
      surface: "var(--color-surface)",
      "text-primary": "var(--color-text-primary)",
      "text-secondary": "var(--color-text-secondary)",
      shadow: "var(--color-shadow)",
      "opp-background": "var(--color-opp-surface)",
      "btn-primary-bg": "var(--color-btn-primary-bg)",
      "btn-primary-text": "var(--color-btn-primary-text)",
      "btn-secondary-bg": "var(--color-btn-secondary-bg)",
      "btn-secondary-text": "var(--color-btn-secondary-text)"
    },
  },
  extend: {},
  plugins: [],
};
