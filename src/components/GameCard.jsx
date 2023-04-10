import { IonCard, IonCardTitle } from "@ionic/react";
import { useEffect, useState } from "react";
import "../styles/GameCard.css"

const GameCard = ({ historical }) => {
  const images = {
    piedra: "./assets/rock.png",
    tijeras: "./assets/scissors.png",
    papel: "./assets/paper.png",
    playerDefault: "./assets/chuck.jpg",
    computerDefault: "./assets/terminator.jpg"
  };
  const newTurn = historical[historical.length - 1];

  const [playerImage, setPlayerImage] = useState(images[newTurn?.player] || images.playerDefault);
  const [computerImage, setComputerImage] = useState(images[newTurn?.computer] || images.computerDefault);

  useEffect(() => {
    setPlayerImage(images[newTurn?.player] || images.playerDefault);
    setComputerImage(images[newTurn?.computer] || images.computerDefault);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTurn])


  return (
    <div className="image-container">
      <IonCard>
      <IonCardTitle>Jugador: {newTurn?.player}</IonCardTitle>
      <div className="image-wrapper">
        <img src={playerImage} alt={newTurn?.player}/>
      </div>
      </IonCard>
      <IonCard>
      <IonCardTitle>Máquina: {newTurn?.computer}</IonCardTitle>
      <div className="image-wrapper">
        <img src={computerImage} alt={newTurn?.computer}/>
      </div>
      </IonCard>
    </div>
  );
};

export default GameCard;
