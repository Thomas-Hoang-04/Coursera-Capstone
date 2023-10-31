/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
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
      colors: {
        primary: "#495e57",
        sec_1: "#f4ce14",
        sec_2: "#ee9972",
        sec_btn: "#e67745",
        sec_3: "#fbdadb",
        high_1: "#edefee",
        high_2: "#333333",
        strawberry: "hsl(354, 84%, 57%)",
      },
      fontFamily: {
        prime: "Markazi Text",
        sec: "Karla",
        sec_i: "Karla Italic",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
