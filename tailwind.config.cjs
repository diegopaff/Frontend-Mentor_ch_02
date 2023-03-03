/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
        'poppins': ['Poppins']
      },
    },
  },
  plugins: [],
}
