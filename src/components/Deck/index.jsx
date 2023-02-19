import { CardBody, Card, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { useGameContext } from '../GameContext';

const Deck = ({uId, id, image, isShowing}) => {
	const { showCard } = useGameContext();

// added/game-rules
	const handleClick = () => {
		if (!isShowing) {
			showCard(uId);

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
			setFlippedState(!flippedState);
 main
		}
	};

	return (
// added/game-rules
		<Card bg="white" h={'100%'}>
			<CardBody padding="2" onClick={handleClick}>

		<Card bg={'steel-blue'} h={'100%'}>
			<CardBody padding={2}>
main
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