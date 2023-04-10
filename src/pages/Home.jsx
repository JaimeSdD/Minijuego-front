import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import GameRender from '../components/GameRender';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Piedra, papel, tijeras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GameRender/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
