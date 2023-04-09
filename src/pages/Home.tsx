import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Buttons from '../components/Buttons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Piedra, papel, tijeras</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Buttons />
      </IonContent>
    </IonPage>
  );
};

export default Home;
