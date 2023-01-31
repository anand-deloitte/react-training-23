import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CounterFunctional from "./CounterFunctionalComp";

function MyApp(props) {
  const [myState, updateState] = useState("name");

  const changeState = () => {
    updateState("newName");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome : {props.name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {myState}
        <button onClick={changeState}>change State</button>
        <Counter />
        <CounterFunctional />
      </header>
    </div>
  );
}

export default MyApp;
