import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import GameLogic from '../components/GameLogic';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Piedra, papel, tijeras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GameLogic/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
