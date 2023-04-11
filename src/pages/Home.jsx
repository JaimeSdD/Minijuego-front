import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import GameRender from '../components/GameRender';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{textAlign: "center"}}>Piedra, papel, tijeras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <GameRender/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
