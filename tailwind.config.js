/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        'dYellow': '#FFDA6E',
        'dRed': '#F04706',
        'lGreen': '#4AC994',
        'lBlue': '#EFF4FF',
        'lPink': '#FBF6F1',
        'tBlue': '#E8DCFA',
        'tYellow': '#FFF3CF',
        'tDYellow': '#FFDA6E',      
      },
    },
  },
  plugins: [],

  
}

