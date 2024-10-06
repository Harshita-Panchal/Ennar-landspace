/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-green': '#737B52',
				'secondary-green': '#2B2B2B',
			  },
		},
	},
	plugins: [],
}
