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
      // colors: {
      //   wmgBrown: '#38280e',
      //   wmgYellow: '#f8ff71',
      //   gold: '#fbbf24',
      //   silver: '#94a3b8',
      //   bronze: '#b45309',
      //   topTenGreen: '#a3e635'
      // },
      // boxShadow: {
      //   basic: '2px 2px 6px rgba(0, 0, 0, 0.35), 3px 3px 6px rgba(0, 0, 0, 0.25)',
      //   insetbasic: 'inset 2px 2px 5px #00000075, inset -2px -2px 5px #00000020',
      //   wmgYellowSm: 'inset 11px 11px 9px #c1c758, inset -11px -11px 9px #ffff8a80',
      //   wmgYellowLg: 'inset 12px 12px 24px #b8bd54, inset -12px -12px 24px #ffff8e80',
      //   wmgBrown: 'inset 12px 12px 14px #1e1608, inset -12px -12px 18px #473212',
      //   condor: 'inset 7px 7px 14px #497dbe, inset -7px -7px 14px #77cdff;',
      //   redLight: 'inset 9px 9px 8px #ba5555, inset -9px -9px 8px #ff8d8d;',
      //   insetgold: 'inset 6px 6px 6px #ad8419, inset -6px -6px 6px #fffa2f;',
      //   insetsilver: 'inset 6px 6px 6px #66707f, inset -6px -6px 6px #c2d6f1;',
      //   insetbronze: 'inset 6px 6px 6px #7c3906, inset -6px -6px 6px #ec6d0c;',
      //   insetlime: 'inset 6px 6px 6px #709f25, inset -6px -6px 6px #d6ff45;',
      //   seasonSix: 'inset 6px 6px 6px #036848, inset -6px -6px 6px #07c58a;',
      //   seasonSeven: 'inset 6px 6px 6px #37309e, inset -6px -6px 6px #675cff;'
      // },
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
        loadspin: 'spin 3s linear infinite',
        revspin: 'revspin 3s linear infinite',
        // flip: 'flip 4000ms linear infinite',
        cardflip: 'cardflip 500ms ease-in-out forwards',
        fadein: 'fadein 1000ms ease-out forwards',
        growfade: 'growfade 750ms ease-out forwards'
      }
    }
  },
  plugins: []
}
