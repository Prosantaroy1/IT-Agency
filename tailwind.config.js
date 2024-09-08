/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      fontpp: ["Poppins", 'sans-serif']
    },
    colors: {
      'blue': '#1C1E53',
      'white': '#F4F6FC',
      'black': '#282938',
      'yellow': '#FCD980',
      'rella-yellow': '#2405F2',
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}