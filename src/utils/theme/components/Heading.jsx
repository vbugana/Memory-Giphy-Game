import { extendTheme } from '@chakra-ui/react';

const Heading = extendTheme({
	// style object for base or default style
	baseStyle: {
		fontSize: '1.125em',
		fontWeight: 'bold',
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		sm: { fontSize: '1.45em' },
		md: { fontSize: '1.75em' },
		lg: { fontSize: '1.95em' },
		xlg: { fontSize: '1.95em' },
	},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {
		size: '',
		variant: '',
		colorScheme: '',
	},
});

export default Heading;
