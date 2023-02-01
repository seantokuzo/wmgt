/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      reg: ['Roboto Mono', 'Alexandria', 'Montserrat', 'sans-serif'],
      orb: ['Alexandria', 'serif'],
      scoretext: ['Mali', 'Montserrat', 'Roboto Mono', 'Alexandria', 'serif'],
      scorenum: ['Montserrat', 'Mali', 'Roboto Mono', 'Alexandria', 'serif']
    },
    extend: {
      fontSize: {
        xxxs: '0.45rem',
        xxs: '0.6rem'
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
          '100%': { transform: 'rotateY(0deg)' }
        },
        // flip: {
        //   '0%': { transform: 'rotateY(0deg)' },
        //   '100%': { transform: 'rotateY(360deg)' }
        // },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        growfade: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        loadspin: 'spin 5s linear infinite',
        revspin: 'revspin 5s linear infinite',
        // flip: 'flip 4000ms linear infinite',
        cardflip: 'cardflip 500ms ease-in-out forwards',
        fadein: 'fadein 1000ms ease-out forwards',
        growfade: 'growfade 750ms ease-out forwards'
      }
    }
  },
  plugins: []
}
