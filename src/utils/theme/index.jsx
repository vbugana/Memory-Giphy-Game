import { extendTheme } from '@chakra-ui/react';
import Text from './components/Text';

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
		Text,
	},
});

export default theme;
