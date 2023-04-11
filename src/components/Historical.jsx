import { IonItem, IonLabel, IonList, IonTitle } from "@ionic/react";

const Historical = ({ historical }) => {
  const historicalReversed = [...historical].reverse();

  return (
    <IonList>
    {historical.length && 
    <IonTitle style={{padding: "20px", color: "black"}}> Historical </IonTitle>
    }
      {historicalReversed.map((turn, index) => (
        <IonItem key={index} color={turn.result === "victoria" ? "success" : turn.result === "derrota" ? "danger" : "medium"}>
          <IonLabel style={{display:"flex", justifyContent: "space-between"}}>
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
