import { Grid, GridItem } from '@chakra-ui/react';

import gameCards from '../../Data/gameCards.json';
import Deck from '../Deck';

const Playground = () => {
	return (
		<>
			<Grid templateColumns="repeat(4, 1fr)" gap={2}>
				{gameCards.map(card => {
					return (
						<GridItem key={card.key} w="100%" h="40">
							<Deck image={card.image} />
						</GridItem>
					);
				})}
			</Grid>
		</>
	);
};

export default Playground;
