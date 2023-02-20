import { Box } from '@chakra-ui/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import MemoryGame from './pages/MemoryGame';
import Scores from './pages/Scores';

function App() {
	return (
		<Router>
			<Box id={'root-body'} h={'100vh'}>
				<Routes>
					<Route path="/" element={<MemoryGame />} />
					<Route path="/scores" element={<Scores />} />
				</Routes>
				<Navbar />
			</Box>
		</Router>
	);
}
export default App;
