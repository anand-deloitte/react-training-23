import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyApp from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MyApp name="React" /> */}
      <div className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        <Link className="w3-tag w3-margin-bottom w3-padding-right-32" to="/">Root </Link>
        <Link className="w3-tag w3-margin-bottom w3-padding-right-32" to="/home">Home </Link>
        <Link  className="w3-tag w3-margin-bottom w3-padding-right-32"to="/about">About </Link>
        <Link className="w3-tag w3-margin-bottom w3-padding-right-32" to="/contact">Contact </Link>
      </div>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Travel" element={<MyApp />} />
        <Route path="/NewYork" element={<MyApp />} />
        <Route path="/London" element={<MyApp />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// StateFull Component  -  class component
// StateLess Component  -  funcitonal / pure Component -

// Hooks

// npm i react-router-dom
