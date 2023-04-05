import { IonButton } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { API } from "../services/api";

const Play = () => {
  // const [playerSelection, setPlayer] = useState("");
  // const [computerSelection, setComputer] = useState("");
  // const [wins, setWins] = useState(0);
  // const [losses, setLosses] = useState(0);
  // const [ties, setTies] = useState(0);
  // const [result, setResult] = useState("");

  const choices = [
    {
      name: "piedra",
    },
    {
      name: "papel",
    },
    {
      name: "tijeras",
    },
  ];

  let historical:any[] = [];
 
  const getHistorical = async () => {
    const result = await API.get("/historical");
    if(result.data){
      historical = result.data;
      console.log(historical);
    }
  }

  useEffect(() => {
    getHistorical();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber].name;
  };

  const sendHistorical = async () => {

    const player = randomChoice();
    
    historical.push({player});
    
    const result = await API.post("/player", JSON.stringify({historical}));
    historical = result.data;

  };

  const handlePlay = () => {

    sendHistorical();

  };


  const handleReset = async () => {
    await API.delete("/reset");
    historical = [];
  }

  return (
    <>
      {/* <h2> {playerSelection} </h2>
      <h2> {computerSelection} </h2>
      <h2> {result} </h2>
      <h3> {wins} </h3>
      <h3> {losses} </h3>
      <h3> {ties} </h3> */}
      <IonButton onClick={handlePlay}> Jugar </IonButton>
      <IonButton onClick={handleReset}> Reiniciar </IonButton>

    </>
  );
};

export default Play;
