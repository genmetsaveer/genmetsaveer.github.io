/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#121112',
        'turquoise': '#525dcb',
        'light-green': '#53cb82',
        'white': '#dedede',
        'salmon': '#FD7B67',
        'gamboge': '#EFA22E'
      },
      boxShadow: {
        '2xl': '.5rem .5rem 0 0rem',
        '3xl': '1rem 1rem 0 0rem'
      }
    },
  },
  plugins: [],
}
