export const theme = {
	border: {
		radius: {
			big: 10,
			small: 4,
		},
	},
	font: {
		family: {
			default:
				"Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		},
		light: 300,
		normal: 400,
		bold: 600,
		sizes: {
			xsmall: 12,
			small: 14,
			medium: 16,
			large: 18,
			xlarge: 20,
			xxlarge: 28,
			huge: 50,
		},
	},
	colors: {
		primary: '#000',
		secondary: '#000',
		mainBg: '#000',
		secondaryBg: '#000',
		primaryText: '#000',
		secondaryText: '#000',
		black: '#000',
		white: '#fff',
	},
	spacings: {
		xxsmall: 4,
		xsmall: 8,
		small: 16,
		medium: 24,
		large: 32,
		xlarge: 40,
		xxlarge: 48,
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	elevation: {
		small: 2,
		medium: 4,
		large: 8,
		xlarge: 16,
	},
	opacity: {
		low: 0.5,
		medium: 0.7,
		high: 0.9,
	},
} as const
