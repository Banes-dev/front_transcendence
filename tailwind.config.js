/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '40': '0.40',
        '45': '0.45',
      },
      spacing: {
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',

        '11/12': '91.666667%', // 11 / 12 pour canva pong
        '11.5/12': '95%' // 11 / 12 pour canva pong
      },
      // backgroundImage: {
      //   'custom-bg': "url('@/assets/img/fond 2 blur.png')",
      // }
    },
  },
  plugins: [],
}
