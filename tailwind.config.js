/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creativo: {
          magenta: "#EE2158",
          dark: "#1d1d1f",
          light: "#FAFAFA",
          text: "#6B7280",
          border: "#D1D5DB",
        },
      },
    },
  },
  plugins: [],
};
