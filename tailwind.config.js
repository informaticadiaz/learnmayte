/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursiva: ["cursiva", "sans-serif"],
      },
      colors: {
        dark: "#001c32",
        "bg-light": "#f9f9f9",
        "card-dark": "#0d2b42",
        "card-light": "#f9f9f9",
        "btn-dark": "#345872",
        "btn-light": "#f9f9f9",
        "t-btn-light": "#f9f9f9",
        "t-btn-dark": "#345872",
        "t-dark": "#6E85B2",
        "t-light": "#f9f9f9",
      },
    },
  },
  plugins: [],
};
