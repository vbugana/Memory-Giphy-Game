import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MemoryGame from './components/pages/MemoryGame';
import Scores from './components/pages/Scores';

function App() {

  return (
    <Router>
      <div className="container">        
        <Routes>
          <Route path="memory-giphy-game/" element={<MemoryGame />} />
          <Route path="memory-giphy-game/scores" element={<Scores />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
}

export default App
