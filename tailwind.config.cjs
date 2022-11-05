const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	// enable dark mode via class strategy
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [
		require('flowbite/plugin')
	]
}

module.exports = config
