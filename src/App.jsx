import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import MemoryGame from './pages/MemoryGame';
import Scores from './pages/Scores';

function App() {
	return (
		<Router>
			<div className="container">
				<Routes>
					<Route path="/" element={<MemoryGame />} />
					<Route path="/scores" element={<Scores />} />
				</Routes>
				<Navbar />
			</div>
		</Router>
	);
}
export default App;
