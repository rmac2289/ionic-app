import React from "react";
import { Agencies } from "../Data";
import "./ResultsList.css";
import { CallNumber } from "@ionic-native/call-number";
import "@capacitor/core";
import { IonButton, IonItem, IonList } from "@ionic/react";

console.log(CallNumber.isCallSupported());

const ResultsList = (props) => {
  const formatPhoneNum = (number) => {
    return `(${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`;
  };
  const callNow = (number) => {
    CallNumber.callNumber(number, true)
      .then((res) => console.log("Launched dialer!", res))
      .catch((res) => console.log("Error launching phone", res));
  };
  const agencyList = Agencies.map((v) => (
    <IonItem lines="full" color="light" key={v.agency}>
      <p>{v.agency}</p>
      <IonButton onClick={callNow(v.phone)}>
        Call Now: {formatPhoneNum(v.phone)}
      </IonButton>
      <p>Location: {v.location}</p>
    </IonItem>
  )).filter((v) => v.key.toLowerCase().includes(props.searchText));

  return <IonList inset={true}>{agencyList}</IonList>;
};

export default ResultsList;
