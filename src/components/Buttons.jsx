import { IonButton } from "@ionic/react";

const Buttons = ({handlePlay, handleReset}) => {
  return (
    <>
      <IonButton onClick={handlePlay}> Jugar </IonButton>
      <IonButton onClick={handleReset}> Reiniciar </IonButton>

    </>
  );
};

export default Buttons;
