import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

// 228272134875-rhmvifho52dg8d9i4lf1a8sq1t77990t.apps.googleusercontent.com

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
