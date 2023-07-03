/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Farro", "Sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
