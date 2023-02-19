import { CardBody, Card, Image } from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';

function Deck(props) {
	const [idState, setIdState] = useState(0);
	const [flippedState, setFlippedState] = useState(false);
	const [imageState, setImageState] = useState(
		'https://picsum.photos/id/1/250/250'
	);

	useEffect(() => {
		{
			flippedState
				? setImageState(props.image)
				: setImageState('https://picsum.photos/id/1/250/250');
		}
	}, [flippedState]);

	const onCardClick = () => {
		if (flippedState == false) {
			setFlippedState(!flippedState)
		}
	}

	return (
		<Card bg="white" h={'100%'}>
			<CardBody padding="2">
				<Image
					borderRadius={'base'}
					mx="auto"
					h={'100%'}
					objectFit={'cover'}
					src={imageState}
					onClick={onCardClick}
				/>
			</CardBody>
		</Card>
	);
}

export default Deck;
