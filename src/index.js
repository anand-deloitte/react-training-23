import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyApp from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Travel from "./Pages/Travel";
import NewYork from "./Pages/NewYork";
import London from "./Pages/London";
import FetchData from "./Pages/FetchData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MyApp name="React" /> */}
      <div>
        <Link to="/">Root </Link>
        {/* <Link to="/home">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link> */}
        

      </div>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/NewYork" element={<NewYork />} />
        <Route path="/London" element={<London />} />
        <Route path="/FetchData" element={<FetchData />} />
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
