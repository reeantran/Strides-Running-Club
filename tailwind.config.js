/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sailors: ['Sailors', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        teal: {
          light: '#42B9B3',
          DEFAULT: '#1C847B',
        },
        rarity: {
          common:    '#7d501f',
          uncommon:  '#21948a',
          rare:      '#cb8938',
          epic:      '#854ff1',
          legendary: '#ebce3a',
          golden:    '#c2932c',
        },
        officer: {
          card: '#d5ffff',
          border: '#b3e0dc',
        },
      },
      boxShadow: {
        'common':    '0 0 30px #7d501f',
        'uncommon':  '0 0 30px #21948a',
        'rare':      '0 0 30px #cb8938',
        'epic':      '0 0 30px #854ff1',
        'legendary': '0 0 30px #ebce3a',
        'golden':    '0 0 30px lightcoral',
        'officer':   '0 0 20px gray',
        'hero-img':  '0 0 50px black',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.65s ease-out forwards',
        'fade-in':  'fadeIn 0.3s ease forwards',
      },
      maxWidth: {
        content: '1300px',
      },
    },
  },
  plugins: [],
};
