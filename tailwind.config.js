/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
      colors: {
        twitter: '#15202B',
        darkgreybackground: '#111111',
        darkgreytext:'#191919'

      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],  // Add your Bebas Neue font here
        poppins: ['Poppins', 'Sans'],  // Add your Bebas Neue font here
      },
    },
  },
  plugins: [],
}
