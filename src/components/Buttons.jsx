import { IonButton } from "@ionic/react";

const Buttons = ({handlePlay, handleReset, playing}) => {
  return (
    <>
      <IonButton onClick={handlePlay} disabled={playing}> Jugar </IonButton>
      <IonButton onClick={handleReset} disabled={playing}> Reiniciar </IonButton>

    </>
  );
};

export default Buttons;
