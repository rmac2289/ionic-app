import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import ResultsList from "../components/ResultsList";
import SearchContainer from "../components/SearchContainer";
import "./Home.css";
import { Geolocation } from "@capacitor/core";

const Home = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const locationFunc = () => {
      Geolocation.getCurrentPosition()
        .then((res) =>
          setLocation(
            (state) => (state = [res.coords.latitude, res.coords.longitude])
          )
        )
        .catch((err) => console.log(err.message));
    };
    locationFunc();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>safety blanket</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">safety blanket</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          {location[0]}, {location[1]}
        </div>
        <SearchContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
