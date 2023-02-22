import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
	// style object for base or default style
	baseStyle: {
		fontSize: '1.125rem',
		fontWeight: 'bold',
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		sm: { fontSize: '1.45rem' },
		md: { fontSize: '1.75rem' },
		lg: { fontSize: '1.95rem' },
		xl: { fontSize: '2rem' },
	},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {
		size: '',
		variant: '',
		colorScheme: '',
	},
});

export default Heading;
