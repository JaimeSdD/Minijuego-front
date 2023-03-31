import { IonButton } from "@ionic/react";
import React from "react";

const Play = () => {

  const choices = [
    {
      name: "piedra",
      beats: "tijeras",
      loses: "papel"
    },
    {
      name: "papel",
      beats: "piedra",
      loses: "tijeras"
    },
    {
      name: "tijeras",
      beats: "papel",
      loses: "piedra"
    }
  ];

  const randomChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const playerChoice = choices[randomNumber].name;
    return playerChoice;
  }


  const handleClick = () => {
    console.log(randomChoice());
  };

  return (
    <>
      <IonButton onClick={handleClick}> Jugar </IonButton>
    </>
  );
};

export default Play;
