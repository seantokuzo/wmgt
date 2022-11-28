/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      reg: ['Montserrat', 'sans-serif'],
      alt: ['Teko', 'serif']
    },
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-4turn)' }
        },
        revspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(4turn)' }
        }
      },
      animation: {
        loadspin: 'spin 3s linear infinite',
        revspin: 'revspin 3s linear infinite'
      }
    }
  },
  plugins: []
}
