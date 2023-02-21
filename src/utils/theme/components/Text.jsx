import { extendTheme } from '@chakra-ui/react';

const Text = extendTheme({
	// style object for base or default style
	baseStyle: {
		textAlign: 'center',
		fontSize: '.75em',
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		sm: {
			fontSize: '1em',
			textAlign: 'left',
			marginRight: '1em',
		},
		md: {
			fontSize: '1.3em',
			textAlign: 'left',
			marginRight: '1em',
		},
		lg: {
			fontSize: '1.5em',
			textAlign: 'left',
			marginRight: '1em',
		},
		xl: {
			fontSize: '1.75em',
			textAlign: 'left',
			marginRight: '1em',
		},
	},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {
		size: '',
		variant: '',
		colorScheme: '',
	},
});

export default Text;
