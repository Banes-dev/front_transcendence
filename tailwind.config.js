/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      scale: {
        '40': '0.40',
        '45': '0.45',
      }
      // backgroundImage: {
      //   'custom-bg': "url('@/assets/img/fond 2 blur.png')",
      // }
    },
  },
  plugins: [],
}
