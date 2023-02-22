import { Box } from '@chakra-ui/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import MemoryGame from './pages/MemoryGame';
import Scores from './pages/Scores';
import { GameProvider } from './components/GameContext';

function App() {
	return (
		<Router>
			<Box id={'root-body'}>
				<GameProvider>
					<Routes>
						<Route path="/" element={<MemoryGame />} />
						<Route path="/scores" element={<Scores />} />
					</Routes>
				</GameProvider>
				<Navbar />
			</Box>
		</Router>
	);
}
export default App;
