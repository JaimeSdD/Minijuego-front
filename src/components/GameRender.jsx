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
  const [playing, setPlaying] = useState(false);

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

  const handlePlay = () => {
    setPlaying(true);

    const player = randomChoice();
    const newHistorical = updateHistorical(player, historical);
    setHistorical([...historical, {}]);

    setTimeout(() => {
      setHistorical(newHistorical);
    }, 1500);

    setTimeout(async () => {
      const response = await sendData(newHistorical);
      setHistorical(response);
      setPlaying(false);
    }, 2500);
  };

  const handleReset = async () => {
    await deleteHistorical();
    setHistorical([]);
  };

  return (
    <>
      <h1>Hey</h1>
      <Result result={historical[historical.length - 1]?.result}/>
      <GameCard historical={historical} />
      <Buttons handlePlay={handlePlay} handleReset={handleReset} playing={playing}/>
      <Historical historical={historical} />
    </>
  );
};

export default GameRender;
