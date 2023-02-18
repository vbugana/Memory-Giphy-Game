import React from "react";
import gameCards from "./gameCards.json";

function getShuffledCards(){
    // duplicate cards and store
    let gameCardsArr = gameCards.concat(gameCards);
    
    return (
        //shuffle
        gameCardsArr.sort(() => Math.random() - 0.5) 
    );
};

export default getShuffledCards;