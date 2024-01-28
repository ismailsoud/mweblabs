/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'Orbitron':['Orbitron', 'sans-serif'],
        'Righteous': ['Righteous', 'serif']
      },
    extend: {
      colors: {
        'backGround': '#2A2438',
        'primary': '#3E065F',
        'White': '#fff'
      },
    },
  },
  plugins: [],
}