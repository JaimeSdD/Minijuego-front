import { IonButton } from "@ionic/react";

const Buttons = ({handlePlay, handleReset, playing}) => {
  return (
    <div style={{display: "flex", justifyContent: "center", padding: "20px", gap: "10px"}}>
      <IonButton onClick={handlePlay} disabled={playing} > Jugar </IonButton>
      <IonButton onClick={handleReset} disabled={playing}> Reiniciar </IonButton>

    </div>
  );
};

export default Buttons;
