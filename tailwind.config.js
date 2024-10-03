/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors:{
        background: '#F3F7EC',
        navOrange : '#E88D67',
        paraBlue : '#006989',
        headerBlue: '#005C78',
      },
      fontFamily:{
        sans: ['Poppins','sans-serif']
      },
      keyframes:{
        fadeDown:{
          '0%':{
            opacity:0,
            transform: 'translateY(-25%)',
          },
          '100%':{
            opacity:1,
            transform: 'translateY(0)',
          },
        },
        fadeLeft:{
          '0%':{
            opacity:0,
            transform: 'translateX(-25%)',
          },
          '100%':{
            opacity:1,
            transform: 'translateX(0)',
          },
        },
        fadeRight:{
          '0%':{
            opacity:0,
            transform: 'translateX(25%)',
          },
          '100%':{
            opacity:1,
            transform: 'translateX(0)',
          },
        },
        fadeUp:{
          '0%':{
            opacity:0,
            transform: 'translateY(25%)',
          },
          '100%':{
            opacity:1,
            transform: 'translateY(0)',
          },
        },
      },
      animation:{
        fadeDown: 'fadeDown 1s ease-in-out 1',
        fadeLeft: 'fadeLeft 1s ease-in-out 1',
        fadeRight: 'fadeRight 1s ease-in-out 1',
        fadeUp: 'fadeUp 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
}

