import { Grid, GridItem } from '@chakra-ui/react';
import getShuffledCards from '../../Data/getShuffledCards'

import gameCards from '../../Data/gameCards.json';
import Deck from '../Deck';

const Playground = () => {
	return (
		<>
			<Grid templateColumns="repeat(4, 1fr)" gap={2}>			
				{getShuffledCards().map((card,index)=> {
					return (
						<GridItem key={index} w="100%" h="40">
							<Deck id={card.id} image={card.image} />
						</GridItem>
					);
				})}
			</Grid>
		</>
	);
};

export default Playground;
