import { createContext, useContext, useState, useEffect } from 'react';
import getShuffledCards from '../Data/getShuffledCards';
const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  const refreshCards = () => {
    setCards(getShuffledCards());
    setSelectedCardIds([]);
  };

  const showCard = (cardUId) => {
    // Find the card with the matching id and set isShowing to true
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

  const checkForMatch = () => {
    // Check if the selected cards have the same id
    if (selectedCardIds.length === 2) {
      const card1 = cards.find((card,index) => index === selectedCardIds[0]);
      const card2 = cards.find((card,index) => index === selectedCardIds[1]);

      if (card1.id === card2.id) {
        // If the cards match, clear the list of selected card ids
        setSelectedCardIds(prevState => []);
      } else {
        // If the cards don't match, hide them after a short delay
        setTimeout(() => {
          hideCards();
        }, 1000);
      }
    }
  };

  return (
    <GameContext.Provider value={{ cards, showCard, refreshCards }}>
      {children}
    </GameContext.Provider>
  );
};
