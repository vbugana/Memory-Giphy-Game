import gameCards from '../../Data/gameCards.json';
import GameCard from '../GameCard';

const Main = () => {
	return (
		<>
			<div>
				{gameCards.map(card => (
					<GameCard key={card.key} image={card.image} />
				))}
			</div>
		</>
	);
};

export default Main;
