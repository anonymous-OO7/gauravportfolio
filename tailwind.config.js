/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {

    extend: {

      fontFamily:{
        conforter:['Comforter Brush', "cursive"],
        roboto:['Roboto', "sans-serif"],
        poppins:['Poppins', "sans-serif"],


      }
    },

  },
  plugins: [],
}

