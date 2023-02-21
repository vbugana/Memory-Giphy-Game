// CHAKRA
import { Box, Flex, Text, HStack, Heading, VStack } from '@chakra-ui/react';
	
// REACT
import { useGameContext } from '../GameContext';

const Header = () => {
	
	const { attempts, turns, win } = useGameContext();	

	return (
		<Box
			as="header"
			paddingTop={2}
			paddingBottom={2}
			bg={'sky-blue'}
			textColor={'raisin-black'}
		>
			<Flex>
				<VStack margin={'auto'}>
					<Heading as={'h1'}>REACTors Game</Heading>
					<HStack>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Text>
								Turns: <Text as={'span'}>{turns}</Text>
							</Text>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Text>
								Attempts: <Text as={'span'}>{attempts}</Text>
							</Text>
						</Box>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Text>
								Wins: <Text as={'span'}>{win}</Text>
							</Text>
						</Box>
					</HStack>
				</VStack>
			</Flex>
		</Box>
	);
};

export default Header;
