/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'arial', 'sans-serif'],
      },
      colors: {
        'black-coffee': '#3B302B',
        'pine-tree': '#2F2825',
      },
    },
  },
  plugins: [],
}
