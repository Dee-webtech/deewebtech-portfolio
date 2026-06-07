/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        surface: "#141414",
        card: "#1a1a1a",
        border: "#242424",
        orange: "#E07B2A",
        "orange-hover": "#c96a1e",
        muted: "#888888",
        light: "#f0ede8",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};