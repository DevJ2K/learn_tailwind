/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-color": "#000000",
        "text-color": "#FFFFFF"
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      },
      container: {
        maxWidth: "1000px",
        padding: "2rem",
        center: true
      },
      screens: {
        sm: "640px",
        md: "768px"
      }
    },
  },
  plugins: [],
}

