/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1121px' },
      md: { max: '991px' },
      sm: { max: '767px' },
    },
    extend: {
      shadow: {
        shadow:
          '0px 8px 12px rgba(0, 0, 0, 0.45), 0px 0px 30px rgba(54, 195, 255, 0.4), 0px 0px 100px #36C3FF, inset 1px 1px 2px rgba(255, 255, 255, 0.65)',
      },
      borderRadius: {
        none: '0',
        px: '1px',
        DEFAULT: '20px',
        mini: '10px',
        small: '15px',
        large: '60px',
      },
      colors: {
        darkBlack: '#101010',
        lightBlue: '#5567FD',
        darkBlue: '#1A1B1C',
        nightBlue: '#060E28',
        'main-blue': '#406AFF',
        'main-blue-200': 'rgba(64, 106, 255, 0.2)',
        'main-blue-300': 'rgba(64, 106, 255, 0.3)',
        'main-blue-500': 'rgba(64, 106, 255, 0.5)',
        'main-blue-750': 'rgba(64, 106, 255, 0.75)',
        'hover-main-blue': '#5379FF',
        'active-main-blue': '#3A5FE6',
        blue: '#5853FD',
        blackBlue: '#463FDA',
        gold: '#FFA243',
        gold2: '#FFC700',
        'blue-100': 'rgba(64, 106, 255, 0.1)',
        'dark-blue-100': 'rgba(64, 106, 255, 0.1)',
        pink: '#f338c3',
        'dark-pink': '#D03A94',
        'dark-pink-200': 'rgba(208, 58, 148, 0.2)',
        'active-pink': '#BB3485',
        'hover-pink': '#D54E9F',
        green: '#2CFF4E',
        'green-50': 'rgba(44, 255, 78, 0.05)',
        'green-100': 'rgba(44, 255, 78, 0.1)',
        'green-200': 'rgba(44, 255, 78, 0.2)',
        'green-350': '#21B914',
        'green-700': '#00A38C',
        'hover-green': '#4dc742',
        'active-green': '#1a9410',
        red: '#E1444D',
        'fire-red': '#FF3333',
        'red-100': 'rgba(255, 51, 51, 0.1)',
        'red-200': 'rgba(225, 68, 77, 0.2)',
        'red-400': 'rgba(225, 68, 77, 0.4)',
        'red-850': 'rgba(225, 68, 77, 0.75)',
        'red-500': 'rgba(225, 68, 77, 0.5)',
        'hover-red': '#E4575F',
        'active-red': '#CA3D45',
        'dark-grey-card': '#242526',
        yellow: '#FAE054',
        'yellow-100': 'rgba(250, 224, 84, .1)',
        yellow2: '#F9C201',
        yellow3: '#E5BC2A',
        'yellow3-100': 'rgba(229, 188, 42, 0.1)',
        'yellow3-400': 'rgba(229, 188, 42, 0.4)',
        'yellow3-500': 'rgba(229, 188, 42, 0.5)',
        orange: '#FFA243',
        'winner-purple': '#FB00FF',
        'hover-orange': '#FFAB56',
        'active-orange': '#E6923C',
        'orange-100': 'rgba(255, 162, 67, .1)',
        'orange-200': 'rgba(255, 162, 67, .2)',
        'pink-xxx': '#D03A94',
        'light-blue': '#69D4FA',
        'light-blue-100': 'rgba(45, 215, 255, 0.1)',
        'dark-blue': '#0F182A',
        'dark-1000': '#0D0415',
        'dark-900': '#161522',
        'dark-850': '#1d1e2c',
        'dark-800': '#202231',
        'dark-700': '#2E3348',
        'dark-600': '#1C2D49',
        'dark-500': '#223D5E',
        'black-light': 'rgba(36, 37, 38, 1)',
        'sky-blue': '#2081E2',
        'sky-blue-2': '#3B60E7',
        black: '#000000',
        'black-500': 'rgba(24, 25, 26, 0.5)',
        gray: '#242526',
        'gray-500': '#464748',
        'active-gray': '#202122',
        'shadow-gray': 'rgba(58, 59, 60, 1)',
        'green-light': '#2CFF4E',
        cyan: '#37F3FF',
        'cyan-100': '#27D3E1',
        'cyan-150': 'rgba(55, 243, 255, .15)',
        'cyan-200': 'rgba(55, 243, 255, .2)',
        'cyan-400': 'rgba(55, 243, 255, .4)',
        'cyan-500': 'rgba(55, 243, 255, .5)',
        'cyan-300': '#1AA5B0',
        'main-bg': '#18191A',
        'main-bg-200': 'rgba(24, 25, 26, 0.2)',
        'hover-main-bg': '#2F3031',
        'active-main-bg': '#161717',
        'gold-900': '#A67D01',
        'gold-500': '#CFAB38',
        'gold-100': '#F8F0C9',
        'line-gray': '#3A3B3C',
        'bell-purple': '#B63FFE',
        'circle-blue': '#516197',
        'gray-light': '#C4C4C4',
        white: '#FFFFFF',
        'black-300': 'rgba(0, 0, 0, 0.3)',
        'black-550': 'rgba(0, 0, 0, 0.55)',
        'black-700': 'rgba(0, 0, 0, 0.7)',
        'black-verylight': 'rgba(217, 217, 217, 0.05)',
        'black-verylight-200': 'rgba(217, 217, 217, 0.2)',
        'white-30': 'rgba(255, 255, 255, 0.03)',
        'white-50': 'rgba(255, 255, 255, 0.05)',
        'white-100': 'rgba(255, 255, 255, 0.1)',
        'white-200': 'rgba(255, 255, 255, 0.2)',
        'white-300': 'rgba(255, 255, 255, 0.3)',
        'white-500': 'rgba(255, 255, 255, 0.5)',
        'white-600': 'rgba(255, 255, 255, 0.6)',
        'white-700': 'rgba(255, 255, 255, 0.7)',
        'white-900': 'rgba(255, 255, 255, 0.9)',
        silver: '#DBE4EB',
        purple: '#6439D0',
        darkPurple: '#20192E',
        'purple-300': '#9300AC',
        'purple-600': 'rgb(100, 57, 208, .6);',
        'purple-400': 'rgb(100, 57, 208, .4);',
        'hover-purple': '#854BFF',
        'active-purple': '#6B32E6',
        'light-purple': '#7737FF',
        'beaming-blue': '#36F3FF',
        'status-gold': '#F0B92A',
        'status-silver': '#A9A9A9',
        'status-bronze': '#E17B58',
        uncommonNft: '#0FC70B',
        epicNft: '#AC29DA',
        rareNft: '#298CFF',
        legendaryNft: '#E9B500',
        darkViolet: '#221741',
        lightGray: 'rgba(35, 35, 35, 0.1)',
        darkGray: '#282828',
        lightPurple: 'rgba(101, 60, 107, 1)',
        'maxqore-green': '#62FFBD',
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-1-1-0': {
          flex: '1 1 0',
        },
        '.header-dialog-content': {
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: '0px',
          boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 8px 0px',
          maxHeight: '100vh',
          outline: 'none',
        },
        '.header-dialog-overlay': {
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 9998,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0, .6)',
        },
      });
    }),
  ],
};