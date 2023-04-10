import { IonTitle } from "@ionic/react"

const Result = ({result}) => {
  return (
    <IonTitle> {result.toUpperCase()}</IonTitle>
  )
}

export default Result
