import { IonButton } from "@ionic/react";
import GameLogic from "./GameLogic";

const Buttons = () => {

  const {handlePlay, handleReset} = GameLogic();

  return (
    <>
      <IonButton onClick={handlePlay}> Jugar </IonButton>
      <IonButton onClick={handleReset}> Reiniciar </IonButton>

    </>
  );
};

export default Buttons;
