/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",
				muted: "rgb(var(--muted))",
				accent: "rgb(var(--accent))",
			},
			boxShadow: {
				"glass-inset": "inset 0 17px 5px -9px rgba(254,254,91, 0.05)",
				"glass-sm": "5px 5px 20px 0px rgba(254,254,91, 0.3)",
			},
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [],
};
