/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	safelist: [
		'hover:text-yellow-400',
		'text-sky-500',
		'text-lime-500',
		'text-orange-500',
		'text-red-500', // Ajoutez ici toutes les classes possibles
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
