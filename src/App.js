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

export default App;


/*

Load all cards from array/json
  cards have ("Id" which can be duplicated) ("UniqueKey") ("url/src" for image) ("flipped" true or false)
  card{
    
    flip(){
      flipped = !flipped;
    }

    onClick (){
      add card to selectedArr
      card.flip()// show it
      if selectedArr.length == 2 // check if have 2 card's selected{
        if(selectedArr[0].id == selectedArr[1].id){
          matchArr = matchArr.concat(selectedArr);// add selected to the match array
          score++;
        } else { // hide cards if not equals
          timer(1000ms){
            selectedArr[0].flip();
            selectedArr[1].flip();
            selectedArr = []; 
            score--;
          }
        }
      }
    }
  }


*/