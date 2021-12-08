import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';
import { Plugins } from '@capacitor/core';

const Home: React.FC = () => {

  const signIn = async () => {
    Plugins.GoogleAuth.signIn();
  }
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
        <button onClick={signIn}>Login with Google</button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
