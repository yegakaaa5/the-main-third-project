/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './main-page/**/*.html',  
    './main-page/**/*.css',
    './main-page/**/*.js'  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(22deg, #330072, #FF8F1C)',
      },
      fontFamily:{
        'estedad':'url(/assistent/font/Estedad-v5.0-Fontjo.com/Estedad[wght,kshd].ttf)',
        'nazanin':'url(/assistent/font/B-nazanin-bold/B Nazanin Bold_0.ttf)'
      },
      fontSize: {
        'custom-xs': '10px',
      },
      width: {
        '95': '95%',
      },
    },
  },
  plugins: [],
}

