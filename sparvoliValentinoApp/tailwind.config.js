/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir las extensiones y rutas correctas
  ],
  theme: {
    extend: {
      fontFamily: {
        personalizada: ['"Nombre de la Fuente"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
