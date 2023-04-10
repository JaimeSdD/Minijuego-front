import { useEffect, useState } from "react";
import {
  deleteHistorical,
  getHistorical,
  sendHistorical,
} from "../services/api";
import GameCard from "./GameCard";
import Buttons from "./Buttons";
import Result from "./Result";
import Historical from "./Historical";

const choices = ["piedra", "papel", "tijeras"];

export const randomChoice = () => {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

export const updateHistorical = (playerChoice, historical) => {
  return [...historical, { player: playerChoice }];
};

export const sendData = async (newHistorical) => {
  return await sendHistorical(JSON.stringify({ historical: newHistorical }));
};

const GameRender = () => {
  const [historical, setHistorical] = useState([]);

  const refreshHistorical = async () => {
    const historicalData = await getHistorical();
    if (historicalData) {
      setHistorical(historicalData);
    }
  };

  useEffect(() => {
    refreshHistorical();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlay = async () => {
    const player = randomChoice();
    const newHistorical = updateHistorical(player, historical);
    const result = await sendData(newHistorical);
    setHistorical(result);
  };

  const handleReset = async () => {
    await deleteHistorical();
    setHistorical([]);
  };

  return (
    <>
      <Result result={historical[historical.length - 1]?.result}/>
      <GameCard historical={historical} />
      <Buttons handlePlay={handlePlay} handleReset={handleReset} />
      <Historical historical={historical} />
    </>
  );
};

export default GameRender;
