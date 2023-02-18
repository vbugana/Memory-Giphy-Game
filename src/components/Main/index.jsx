import { Box } from '@chakra-ui/react';

import Playground from '../Playground';

const Main = () => {
	return (
		<>
			<Box m={'auto'} w={{ base: '96%', md: '60%', lg: '40%', xl: '20%' }}>
				<Playground />
			</Box>
		</>
	);
};

export default Main;
