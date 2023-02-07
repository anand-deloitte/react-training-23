import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CounterFunctional from "./CounterFunctionalComp";
import UserContext from "./Context";
import Services from "./ServicesCall";
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

        <button onClick={changeState}>change State</button>
        <Counter data={myState} />
        <CounterFunctional data={myState} />
        <Services></Services>
        <UserContext></UserContext>
      </header>
    </div>
  );
}

export default MyApp;
