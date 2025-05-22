/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': value => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') }
    )
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}


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
        darkPeach: '#D4C3AE',
        lightPeach: '#E9E1D7',
        gradientStartYellow: '#E6BE8E',
        gradientEndOrange: '#C9887D',
        gradientEndYellow: '#F6C3B0',
        gradientEndPeach: '#EDC9AF',
        gradientStartBlue: '#5299F3',
        gradientEndBlue: '#82AEE6',
        primary: '#4C7EBE',
        secondary: '#82AEE6',
        accent: '#5299F3',
        black: '#121315',
        offWhite: '#EFF2F8',
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
  plugins: [radialGradientPlugin],
}

