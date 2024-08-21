/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#15202B',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],  // Add your Bebas Neue font here
      },
    },
  },
  plugins: [],
}
