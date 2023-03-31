import { IonButton } from "@ionic/react";
import React, { useState } from "react";

const Play = () => {

  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");

  const choices = [
    {
      name: "piedra",
      beats: "tijeras",
      loses: "papel",
    },
    {
      name: "papel",
      beats: "piedra",
      loses: "tijeras",
    },
    {
      name: "tijeras",
      beats: "papel",
      loses: "piedra",
    },
  ];

  const randomChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const playerChoice = choices[randomNumber].name;
    return playerChoice;
  };

  
  const newTurn = () => {
    const player = setPlayer(randomChoice());
    const computer = setComputer(randomChoice());
    const roll = [];
    roll.push(player, computer);
    return roll;
  };

 const winner = () => {

}

  const handleClick = () => {
    return newTurn();
  };

  return (
    <>
      <h2> {player} </h2>
      <h2> {computer} </h2>
      <IonButton onClick={handleClick}> Jugar </IonButton>
    </>
  );
};

export default Play;
