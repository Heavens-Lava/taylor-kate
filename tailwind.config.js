/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
    AlexBrush: ["Alex Brush"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
  darkMode: "class", // Enable dark mode support
  variants: {
    scrollbar: ["dark"], // Enable dark mode for scrollbar
  },
};
