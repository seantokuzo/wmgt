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
        xxxs: '0.5rem',
        xxs: '0.6rem'
      },
      boxShadow: {
        inyellfocus: 'inset 11px 11px 9px #c1c758, inset -11px -11px 9px #ffff8a80',
        inyellopp: 'inset -5px -5px 9px #c1c758, inset 11px 11px 9px #ffff8a80',
        insetyellow: 'inset 12px 12px 24px #b8bd54, inset -12px -12px 24px #ffff8e80',
        yellow: '12px 12px 24px #b8bd54, -12px -12px 24px #ffff8e80',
        insetbrown: 'inset 12px 12px 14px #1e1608, inset -12px -12px 18px #473212',
        basic: '2px 2px 15px rgba(0, 0, 0, 0.75), 12px 12px 9px rgba(0, 0, 0, 0.5)',
        insetbasic: 'inset 12px 12px 9px #00000075, inset -12px -12px 9px #00000020'
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
