import { Box } from '@chakra-ui/react';

import Playground from '../Playground';

const Main = () => {
	return (
		<Box
			as="main"
			bg={'rich-black'}
			// paddingY={{ base: 1, sm: 4, md: 3.5, xl: 5 }}
			paddingY={{
				base: '1.25em',
				sm: '6em',
				md: '1.25em',
				lg: '1em',
				xl: '1.25em',
			}}
			h={{ base: '78%', sm: '80%', md: '82%' }}
		>
			<Box
				padding={4}
				mx={'auto'}
				w={{ base: '100%', sm: '80%', md: '70%', lg: '60%', xl: '46%' }}
				bg={'white'}
				borderRadius={{ sm: 4 }}
			>
				<Playground />
			</Box>
		</Box>
	);
};

export default Main;
