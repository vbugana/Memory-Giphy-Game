import { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [turns, setTurns] = useState(8);
  const [match, setMatch] = useState(0);
  const [win, setWin] = useState(0);

  const refreshCards = () => {
    setSelectedCardIds([]);
    setMatch(0);
    setTurns(8);
  };

  const showCard = (cardUId) => {
    // Find the card with the matching id and set isShowing to true
    if(selectedCardIds.length === 2){
      return ;
    }
    setCards((prevCards) => {
      return prevCards.map((card, index) => {
        if (index === cardUId) {
          return {
            ...card,
            isShowing: true,
          };
        } else {
          return card;
        }
      });
    });
    // Add the card id to the list of selected cards
    setSelectedCardIds(prevState => [...selectedCardIds, cardUId]);
  };

  const hideCards = () => {
    // Set the isShowing property of the selected cards back to false
    setCards((prevCards) => {
      return prevCards.map((card, i) => {
        if (selectedCardIds.includes(i)) {
          
          return {
            ...card,
            isShowing: false,            
          };
        } else {
          return card;
        }
      });
    });
    // Clear the list of selected card ids
    setSelectedCardIds(prevState => []);
  };

  useEffect(() => {
    checkForMatch();
  }, [selectedCardIds]);

  useEffect(() => {
    checkEndgame();
  }, [match, turns]);  

  useEffect(() => {
    console.log(cards);
  }, []);  

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=zjYqCkStay01KEtkfS25WLkIix46y5Cb")
      .then((response) => response.json())
      .then((data) => {
        let arr = [{"id": 0},{"id": 1},{"id": 2},{"id": 3},{"id": 4},{"id": 5},{"id": 6},{"id": 7}];
        arr = arr.map((obj,index) => {
          console.log(data);
            return {
              ...obj,
              isShowing: false,
              image: data.data[index].images.downsized.url
            };
        })            
        setCards(arr.concat(arr).sort(() => Math.random() - 0.5));  
         
      })
      .catch((error) => console.log(error));
  }, []);

  const checkForMatch = () => {
    // Check if the selected cards have the same id
    if (selectedCardIds.length === 2) {      
      const card1 = cards.find((card,index) => index === selectedCardIds[0]);
      const card2 = cards.find((card,index) => index === selectedCardIds[1]);

      if (card1.id === card2.id) {
        // If the cards match, clear the list of selected card ids
        setSelectedCardIds(prevState => []);
        setMatch(match+1);
      } else {
        // If the cards don't match, hide them after a short delay
        setTurns(turns - 1);
        setTimeout(() => {
          hideCards();
        }, 1000);
      }                
    }
  };

  function checkEndgame() {
    if(cards.length === 0){
      return;
    }
    if(match === (cards.length/2)){
      setWin(win + 1);
      setAttempts(attempts + 1);
      refreshCards();
    } else if (turns === 0){      
      setAttempts(attempts + 1);
      refreshCards();
    }
  }

  return (
    <GameContext.Provider value={{ cards, showCard, refreshCards, attempts, turns, win }}>
      {children}
    </GameContext.Provider>
  );
};
