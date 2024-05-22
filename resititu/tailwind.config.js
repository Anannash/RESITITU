/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {


  

    // Desactiva los estilos base de Tailwind que están causando problemas
    preflight: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      
      colors:{
        'rojoVino' : '#792221',
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}