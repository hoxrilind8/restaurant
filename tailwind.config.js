/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myBlue: '#4E60FF',
        desertBckg: '#F3F4FF',
        burgerBckg: '#FFF3ED',
        desertDiscount: '#4E60FF',
        burgerDiscount: '#FD6D22',
        infoDiscount: '#83859C',
        primary: '#F8F9FF',
      },
      fontFamily: 'Nunito',
    },
  },
  plugins: [],
};
