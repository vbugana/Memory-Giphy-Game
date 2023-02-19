import { Box } from '@chakra-ui/react';

import Playground from '../Playground';

const Main = () => {
	return (
		<Box as="main" bg={'rich-black'} paddingTop={2} paddingBottom={2}>
			<Box
				padding={6}
				m={'auto'}
				w={{ base: '96%', md: '60%', lg: '40%', xl: '20%' }}
				bg={'white'}
				borderRadius={4}
			>
				<Playground />
			</Box>
		</Box>
	);
};

export default Main;
