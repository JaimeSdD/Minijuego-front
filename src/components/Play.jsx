import { IonButton } from "@ionic/react";
import React, { useState } from "react";

const Play = () => {
  const [playerSelection, setPlayer] = useState("");
  const [computerSelection, setComputer] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
  const [result, setResult] = useState("");

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
    return choices[randomNumber];
  };

  const newTurn = () =>  [randomChoice(), randomChoice()];

  const computeResult = () => {
    const [player, computer] = newTurn();
    setPlayer(player.name);
    setComputer(computer.name);

    if (player.beats.includes(computer.name)) {
      setWins(wins + 1);
      setResult("Victoria");
    } else if (player.loses.includes(computer.name)) {
      setLosses(losses + 1);
      setResult("Derrota");
    } else {
      setTies(ties + 1);
      setResult("Empate");
    }
  };

  const handleClick = () => {
    computeResult();
  };

  return (
    <>
      <h2> {playerSelection} </h2>
      <h2> {computerSelection} </h2>
      <h2> {result} </h2>
      <h3> {wins} </h3>
      <h3> {losses} </h3>
      <h3> {ties} </h3>
      <IonButton onClick={handleClick}> Jugar </IonButton>
    </>
  );
};

export default Play;
