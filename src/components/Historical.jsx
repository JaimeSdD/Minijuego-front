import { IonItem, IonLabel, IonList } from "@ionic/react";

const Historical = ({ historical }) => {
  return (
    <IonList>
      {historical.map((turn, index) => (
        <IonItem key={index}>
          <IonLabel>
            <p>Jugador: {turn.player}</p>
            <p>Máquina: {turn.computer}</p>
            <p>Resultado: {turn.result}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default Historical;
