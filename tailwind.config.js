/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#131316',
      darkGray: '#1C1C21',
      midGray: '#e0e0e0',
      gray: '#383842',
      pink: '#eb5980',
      darkPink: '#DA1B4E',
      danger: '#FF0000',
      white: '#e6e6e6'
    },
    extend: {},
  },
  plugins: [],
}

