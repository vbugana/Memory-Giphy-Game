import React, { useState, useEffect } from 'react';

function GameCard(props) {
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

	return (
		<div className="col-sm">
			<img src={imageState} onClick={() => setFlippedState(!flippedState)} />
		</div>
	);
}

export default GameCard;
