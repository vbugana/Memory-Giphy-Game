import { CardBody, Card, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { useGameContext } from '../GameContext';

const Deck = ({uId, id, image, isShowing}) => {
	const { showCard } = useGameContext();

	const handleClick = () => {
		if (!isShowing) {
			showCard(uId);
		}
	};

	return (
		<Card bg={'steel-blue'} h={'100%'}>
			<CardBody padding="2" onClick={handleClick}>
				<Image
					borderRadius={'base'}
					mx="auto"
					h={'100%'}
					objectFit={'cover'}
					src={isShowing ? image : 'https://picsum.photos/id/1/250/250'}
				/>
			</CardBody>
		</Card>
	);
};

export default Deck;