/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "Inter", "sans-serif"],   // default text
        heading: ["Epilogue", "Inter", "sans-serif"], // headings
      },
      colors: {
        lightbg: "#EEEAF5",     // soft pastel lavender 💜
        darktext: "#1F1F29",
        primary: "#C5ADC5",
        secondary: "#B2B5E0",
        white: "#ffffff",
        black: "#000000",
        transparent: "transparent",
        current: "currentColor",
      },
      
    },
  },
  plugins: [],
};


