/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'rich-black': '#0d1b2aff',
				'oxford-blue': '#1b263bff',
				'yinmn-blue': '#415a77ff',
				'silver-lake-blue': '#778da9ff',
				platinum: '#e0e1ddff'
			}
		}
	},
	plugins: []
};
