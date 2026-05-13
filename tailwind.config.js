/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#fcfcf0',
        champagne: '#f7e7ce',
        beige: '#e6dfd1',
        gold: '#d4af37',
        darkGlow: '#8c7326',
      },
      fontFamily: {
        heading: ['Cinzel', 'Playfair Display', 'serif'],
        body: ['Poppins', 'Cormorant Garamond', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
