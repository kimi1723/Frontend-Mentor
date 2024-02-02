/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		colors: {
			['white']: 'hsl(0, 0%, 100%)',
			'vl-gray': 'hsl(0, 0%, 98%)',
			'd-gray': 'hsl(0, 0%, 52%)',
			'vd-blue': 'hsl(200, 15%, 8%)',
			'dark-blue': 'hsl(209, 23%, 22%)',
			'dark-vd-blue': 'hsl(207, 26%, 17%)',
		},
	},
};
