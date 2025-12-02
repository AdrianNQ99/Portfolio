/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        "primary-light": "#1e293b",
        "primary-lighter": "#334155",
        accent: "#3b82f6",
        "accent-dark": "#1e40af",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
