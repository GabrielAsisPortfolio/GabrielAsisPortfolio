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
        bgPeach2: '#EBD7BE',
        bgPeach3: '#DACCBC',
        black: '#111111 ',
        gray: '#595550',
        lightPeach: '#E9E1D7',
        gradientStart: '#E6BE8E',
        gradientEnd: '#C9887D',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        roboto: ['Roboto Serif', 'serif'],
        sonderSans:  ['Sonder Sans', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

