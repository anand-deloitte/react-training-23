import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyApp from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MyApp name="React" /> */}
      {/* <Link to="/">Root </Link>
        <Link to="/home">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
      </div>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <MyApp></MyApp>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
