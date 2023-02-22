import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
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
			marginRight: '2em',
		},
		md: {
			fontSize: '1.125em',
			textAlign: 'left',
			marginRight: '2em',
		},
		lg: {
			fontSize: '1.25em',
			textAlign: 'left',
			marginRight: '2em',
		},
		xl: {
			fontSize: '1.5em',
			textAlign: 'left',
			marginRight: '2em',
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
