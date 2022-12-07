/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      reg: ['Roboto Mono', 'Alexandria', 'Montserrat', 'sans-serif'],
      orb: ['Orbitron', 'serif'],
      scoretext: ['Mali', 'Montserrat', 'Roboto Mono', 'Alexandria', 'serif'],
      scorenum: ['Montserrat', 'Mali', 'Roboto Mono', 'Alexandria', 'serif']
    },
    extend: {
      fontSize: {
        xxxs: '0.25rem',
        xxs: '0.5rem'
      },
      gridTemplateColumns: {
        scorecard: ''
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-4turn)' }
        },
        revspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(4turn)' }
        },
        cardflip: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        loadspin: 'spin 3s linear infinite',
        revspin: 'revspin 3s linear infinite',
        cardflip: 'cardflip 500ms ease-in-out forwards'
      }
    }
  },
  plugins: []
}
