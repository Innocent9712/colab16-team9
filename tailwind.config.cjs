/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Itim': ['Itim', 'cursive'],
        'Inter': ['Inter', 'sans-serif']
      },
      dropShadow: {
        'primary': '0px 9px 12px 1px rgba(0,0,0,0.85)'
      }
    },
  },
  plugins: [],
}
