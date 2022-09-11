/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-main" : "#000",
        // "bg-main" : "#191A1F",
      }
    },
  },
  plugins: [],
}
