/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF7F50", // Coral
        dark: "#000000",   // Black
        light: "#F0FFFF",  // Azure
      },
    },
  },
  plugins: [],
}