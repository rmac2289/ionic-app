import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import SearchContainer from "../components/SearchContainer";
import "./Home.css";
import { Geolocation } from "@capacitor/core";

let apiKey = "AIzaSyAxfWshVpL9zq7vBy4GJNbaiCesq-vXHvI";

const Home = () => {
  const [location, setLocation] = useState([]);
  const [municipality, setMunicipality] = useState("");

  useEffect(() => {
    const locationFunc = () => {
      Geolocation.getCurrentPosition().then((res) => {
        setLocation(
          (state) => (state = [res.coords.latitude, res.coords.longitude])
        );
        return fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${res.coords.latitude.toPrecision(
            8
          )},${res.coords.longitude.toPrecision(8)}&key=${apiKey}`
        )
          .then((res) => res.json())
          .then((res) => {
            setMunicipality(
              (state) =>
                (state = res.results[0].address_components[3].long_name)
            );
          })
          .catch((err) => console.log(err.message));
      });
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
        {municipality ? (
          <div>
            You're currently in {municipality} - the closest department is...
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <SearchContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
