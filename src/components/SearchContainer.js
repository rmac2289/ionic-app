import React, { useState } from "react";
import "./SearchContainer.css";
import ResultsList from "./ResultsList";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [seeAgencies, setSeeAgencies] = useState(false);
  const changeSeeAgencies = () =>
    setSeeAgencies((state) => (state = !seeAgencies));
  const getSearchText = (event) => setSearchText(event.target.value);
  const handleSubmit = (event) => event.preventDefault();

  return (
    <div>
      <div className="container">
        <h3>Get #s via location or use the search function</h3>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={searchText}
            onChange={getSearchText}
          />
        </label>
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        <div>
          <h4 onClick={changeSeeAgencies}>See Agencies</h4>
        </div>

        <ResultsList searchText={searchText} />
      </div>
    </div>
  );
};

export default SearchContainer;
