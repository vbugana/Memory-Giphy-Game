import { extendTheme } from '@chakra-ui/react';
import Text from './components/Text';
import Heading from './components/Heading';
import Link from './components/Link';

Text;

const theme = extendTheme({
	fonts: {
		heading: `'Press Start 2P', cursive`,
		body: `'Press Start 2P', cursive`,
	},
	colors: {
		'sky-blue': `#61DBFB`,
		'steel-blue': '#0582CA',
		'lapis-lazuli': '#006494',
		'prussian-blue': '#003554',
		'rich-black': '#051923',
		'raisin-black': '#20232a',
	},

	components: {
		Heading,
		Text,
		Link,
	},
});

export default theme;
