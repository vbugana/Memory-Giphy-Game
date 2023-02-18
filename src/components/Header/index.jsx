// CHAKRA
import { Box, Flex, Text, HStack, Heading, VStack } from '@chakra-ui/react';

// REACT
import { useState } from 'react';

const Header = () => {
	const [turn, setTurn] = useState(0);
	const [attempt, setAttempt] = useState(0);
	const [win, setWin] = useState(0);

	const handleTurn = () => {
		setTurn(turn);
	};
	const handleAttempt = () => {
		setAttempt(attempt);
	};
	const handleWin = () => {
		setWin(win);
	};

	return (
		<>
			<Box as="header">
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
									Turns: <Text as={'span'}>0</Text>
								</Text>
							</Box>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text>
									Attempts: <Text as={'span'}>0</Text>
								</Text>
							</Box>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text>
									Wins: <Text as={'span'}>0</Text>
								</Text>
							</Box>
						</HStack>
					</VStack>
				</Flex>
			</Box>
		</>
	);
};

export default Header;
