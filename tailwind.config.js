/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto Condensed', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
      'righteous': ['Righteous', 'serif']
    },
    extend: {
      colors: {
        'backGround': '#0f0e11',
        'primary': '#3E065F',
        'white': '#fff'
      },
      animation: {
        'infinite-slider': 'infiniteSlider 20s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};