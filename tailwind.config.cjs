/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        texasBlue: "#002868",
        purple: "#361259",
        maroon: "#8C1C3A",
        texasRed: "#BF0A30",
        offWhite: "#F2F2F2"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

