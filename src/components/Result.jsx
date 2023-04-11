import { IonTitle } from "@ionic/react";

const Result = ({ result }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px"}}>
      {result && <IonTitle>{result.toUpperCase()}</IonTitle>}
    </div>
  );
};

export default Result;
