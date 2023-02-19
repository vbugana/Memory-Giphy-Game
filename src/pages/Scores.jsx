import {
	Box,
	Heading,
	Table,
	TableCaption,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableContainer,
	Button,
} from '@chakra-ui/react';

import React from 'react';

function Scores() {
	return (
		<Box padding={'10'} textAlign="center">
			<Heading padding={'8'}>High Scores</Heading>
			<TableContainer maxW={'80%'} margin={'auto'}>
				<Table variant="unstyled">
					<TableCaption>Scores Board</TableCaption>
					<Thead>
						<Tr>
							<Th>Rank</Th>
							<Th>Initials</Th>
							<Th>Score</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>1</Td>
							<Td>SGO</Td>
							<Td isNumeric>0</Td>
						</Tr>
						<Tr>
							<Td>2</Td>
							<Td>GDE</Td>
							<Td isNumeric>0</Td>
						</Tr>
						<Tr>
							<Td>3</Td>
							<Td>DAD</Td>
							<Td isNumeric>0</Td>
						</Tr>
						<Tr>
							<Td>4</Td>
							<Td>VBU</Td>
							<Td isNumeric>0</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr></Tr>
					</Tfoot>
				</Table>
			</TableContainer>
			<Button boxShadow={'base'}>Reset</Button>
		</Box>
	);
}

export default Scores;
