import { defineStyleConfig } from '@chakra-ui/react';

const Link = defineStyleConfig({
	// Styles for the base style
	baseStyle: {
		color: 'white',
		borderRadius: 'full',
		paddingX: 3,
		paddingY: 2,
		bg: 'prussian-blue',
		fontSize: '.75rem',

		_hover: {
			bg: 'steel-blue',
			boxShadow: 'dark-lg',
			textShadow: '.125em .125em #20232a',
			textDecoration: 'none',
		},

		_active: {
			bg: 'raisin-black',
			color: 'white',
			textShadow: '.125em .125em #0582CA',
			fontSize: { sm: '1.25rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem' },
			boxShadow: '2px 2px 4px #003554',
		},
	},
	// Styles for the size variations
	sizes: {},
	// Styles for the visual style variations
	variants: {
		sm: {
			fontSize: '1.125rem',
		},
		md: {
			fontSize: '1.6rem',
		},
		lg: {
			fontSize: '1.75rem',
		},
		xl: {
			fontSize: '1.8rem',
		},

		// Visual variant
		onActive: {},
	},
	// The default `size` or `variant` values
	defaultProps: {},
});

export default Link;
