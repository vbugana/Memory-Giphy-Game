import { Box } from '@chakra-ui/react';

import Playground from '../Playground';

const Main = () => {
	return (
		<Box
			as="main"
			bg={'rich-black'}
			paddingTop={{ sm: 4 }}
			paddingBottom={{ sm: 4 }}
		>
			<Box
				padding={4}
				m={{ sm: 'auto' }}
				w={{ base: '100%', sm: '80%', md: '70%', lg: '60%', xl: '32%' }}
				bg={'white'}
				borderRadius={{ sm: 4 }}
			>
				<Playground />
			</Box>
		</Box>
	);
};

export default Main;
