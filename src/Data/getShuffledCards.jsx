import React, { useState, useEffect } from "react";
import gameCards from './gameCards.json'

function getShuffledCards() {
  const [cards, setCards] = useState(gameCards);

  useEffect(() => {
    
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=zjYqCkStay01KEtkfS25WLkIix46y5Cb")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data[0].embed_url);
        const gameCardsArr = Array.from({ length: 3 }, (_, i) => ({
          id: i,
          image: data.data[0].embed_url,
          isShowing: false,
        })).concat(
          Array.from({ length: 3 }, (_, i) => ({
            id: i + 3,
            image: data.data.embed_url,
            isShowing: false,
          }))
        );
        setCards(gameCardsArr.sort(() => Math.random() - 0.5));
        console.log(gameCardsArr);
      })
      .catch((error) => console.log(error));
  }, []);

  return cards;
}

export default getShuffledCards;