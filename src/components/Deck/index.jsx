import { CardBody, Card, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useGameContext } from '../GameContext';

const Deck = ({ uId, id, image, isShowing }) => {
	const { showCard } = useGameContext();

	const handleClick = () => {
		if (!isShowing) {
			showCard(uId);
		}
	};

	return (
		<Card bg={'steel-blue'} h={'100%'}>
			<CardBody padding="1" onClick={handleClick} h={'100%'}>
				<Image
					borderRadius={'base'}
					mx="auto"
					h={'100%'}
					w={'100%'}
					objectFit={'cover'}
					src={isShowing ? image : '/images/logo.png'}
				/>
			</CardBody>
		</Card>
	);
};

export default Deck;
