/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1880px",
    },
    extend: {
      colors: {},
    },
  },
  darkMode: "class",
  plugins: [],
};
