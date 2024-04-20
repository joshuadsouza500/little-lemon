/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: "#E4B44E",
        blackish: "#333333",
        greener:"#284F2A"
      },
      fontFamily:{
        'josefin': ['Josefin Sans', 'sans-serif'],
        'alex':['Alex Brush','sans-serif'],
        'Heading':['Fredericka the Great', 'cursive'],
      },
      width:{
        'zz' : '30rem',
         'mid' :'350px'
      },
     
      
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

