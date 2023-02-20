import React from "react";
import gameCards from "./gameCards.json";

function getShuffledCards(){
    // duplicate cards and store
    let gameCardsArr = gameCards.concat(gameCards);
    
    function addValues(arr) {
        return (arr.map(obj => {
            return {
              ...obj,  // spread operator to create a copy of the original object
              isShowing: false  // add new property to the object
            };
        }));        
    }
    
    return (
        //shuffle
        addValues(gameCardsArr.sort(() => Math.random() - 0.5)) 
    );
};

export default getShuffledCards;