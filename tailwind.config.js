/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPeach: '#DED3C6',
        black: '#111111 ',
        bgPeach2: '#EBD7BE',
        gray: '#595550',
        white: '#E9E1D7',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        sonderSans:  ['Sonder Sans', 'sans-serif'],
        vinaSans: ["Vina Sans", 'sans-serif']
      },
    },
  },
  plugins: [],
}

