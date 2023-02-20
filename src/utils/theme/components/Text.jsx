import { extendTheme } from '@chakra-ui/react';

const Text = extendTheme({
	// style object for base or default style
	baseStyle: {
		textAlign: 'center',
		fontSize: '.9em',
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {
		sm: {
			fontSize: '1.25em',
		},
		md: {
			fontSize: '2em',
		},
		lg: {
			fontSize: '2.5em',
		},
		xl: {
			fontSize: '2.75em',
		},
	},
	// styles for different visual variants ("outline", "solid")
	variants: {},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {
		size: '',
		variant: '',
		colorScheme: '',
	},
});

export default Text;
