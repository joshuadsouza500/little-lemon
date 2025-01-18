/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: '#E4B44E', //C5A572 light golden E4B44E D4A85D
        blackish: '#333333',
        greener: '#284F2A',
        Dgreen: '#1B3A20',
        /*#
#1A4D3A
#1B3A20 more closer to greenr but a bit more
*/
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        alex: ['Alex Brush', 'sans-serif'],
        Heading: ['Fredericka the Great', 'cursive'],
      },
      width: {
        mid: '350px',
      },
      animation: {
        slide: 'slide-left 25s  infinite linear',
      },
      keyframes: {
        'slide-left': {
          to: { transform: 'translateX(-400%)' },
        },
      },
      spacing: {
        zz: '30rem',
        xxl: '1280px',
        xxxl: '1440px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}
