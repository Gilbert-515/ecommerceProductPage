/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "orange": {
          500: "hsl(26, 100%, 55%)",
          200: "hsl(25, 100%, 94%)"
        }
      }
    },
  },
  plugins: [],
}
