const { colors } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: "var(--header-font)",
      body: "var(--body-font)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        "light-gold": "#f5bc51",
        "dark-gold": "#533519",
      },
      dropShadow: {
        "navitem-red": ["0 0 1px rgb(255 99 71 / 1)", "0 0 30px rgb(255 99 71 / 0.2)"],
        "navitem-slate": ["0 0 1px rgb(203 213 225 / 1)", "0 2px 10px rgb(203 213 225 / 0.5)"],
        "4xl": ["0 35px 35px rgba(0 0 0 0.55)", "0 55px 65px rgba(0 0 0 0.55)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
