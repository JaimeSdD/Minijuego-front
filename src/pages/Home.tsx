import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Play from '../components/Play';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Piedra, papel, tijeras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Play />
      </IonContent>
    </IonPage>
  );
};

export default Home;
