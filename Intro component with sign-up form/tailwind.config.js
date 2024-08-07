/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' , './javascript/*.js'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        'Red': 'hsl(0, 100%, 74%)', 
        'Green': 'hsl(154, 59%, 51%)',
        'Blue': 'hsl(248, 32%, 49%)',
        'Grayish-Blue': 'hsl(246, 25%, 77%)',
        'Dark-Blue': 'hsl(249, 10%, 26%)' ,
      },
      fontFamily: {
        Poppins: ['Poppins' , 'sans-serif'],
      },
      boxShadow:{
        'S1': '0px 10px 5px 0px rgba(0,0,0,0.20)',
        'S2' : '0px 5px 15px 0px hsl(154, 59%, 51%);'
      },
    },
  },
  plugins: [],
}

