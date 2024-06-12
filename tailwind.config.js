/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      'shadow': '8px 7px 13px rgba(0,0,0,0.47)',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif']
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
