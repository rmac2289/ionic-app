import React from "react";
import { Agencies } from "../Data";
import "./ResultsList.css";

const ResultsList = (props) => {
  const agencyList = Agencies.map((v) => (
    <li key={v}>
      <p>{v}</p>
      <p>Phone #</p>
    </li>
  )).filter((v) => v.key.toLowerCase().includes(props.searchText));

  return <ul>{agencyList}</ul>;
};

export default ResultsList;
