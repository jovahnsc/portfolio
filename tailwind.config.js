/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        bgColor: '#081b29',
        secondBgColor: '#112e42',
        textColor: '#ededed',
        mainColor: '#00abf0',
      },
      backgroundImage: {
        'image-radial': 'radial-gradient(circle, #7d2ae8 20%, transparent 20%)',
      },
      backgroundSize: {
        'size-radial': '10% 10%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        imgFloat: 'imgFloat 5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)', backgroundsize: '10%' },
          '50%': { transform: 'rotate(3deg)' },
        },
        imgFloat: {
          '50%': {
            transform: 'translateY(10px)',
            borderRadius: '40% 65% 40% 65%'
          },
        },
      }
    }
  },
  plugins: [],
};
