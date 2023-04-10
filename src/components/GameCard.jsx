import { IonCard } from "@ionic/react";
import { useEffect, useState } from "react";
import "../styles/GameCard.css"

const GameCard = ({ historical }) => {
  const images = {
    piedra: "./assets/rock.png",
    tijeras: "./assets/scissors.png",
    papel: "./assets/paper.png",
    playerDefault: "./assets/chuck.jpg"
  };
  const newTurn = historical[historical.length - 1];

  const [playerImage, setPlayerImage] = useState(images[newTurn?.player] || images.playerDefault);

  useEffect(() => {
    setPlayerImage(images[newTurn?.player] || images.playerDefault)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTurn?.player])


  return (
    <div className="image-container">
      <IonCard>
      <div className="image-wrapper">
        <img src={playerImage} alt={newTurn?.player}/>
      </div>
      </IonCard>
    </div>
  );
};

export default GameCard;
