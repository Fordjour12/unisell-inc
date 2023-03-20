/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
			colors: {
				unisell: {
					100: '#7161EF',
				},
			},
		},
	},
	plugins: [],
}
