import { IonTitle } from "@ionic/react";

const Result = ({ result }) => {
  return <>{result && <IonTitle> {result.toUpperCase()}</IonTitle>}</>;
};

export default Result;
