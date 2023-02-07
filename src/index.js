import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PopularPostsComponent from "./components/PopularPostsComponent";
import { Flex } from "@chakra-ui/react";
import Router from './Router';
import { routepath } from './constants/Constants';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // can upgrade with loops
  <React.StrictMode>
    <BrowserRouter>
    <Flex justifyContent='space-evenly' bg='teal' h="50px" alignItems='center'>
      {routepath.map((routeobject, index) => {
        return <div >
                <Link to={routeobject.path}><b>{routeobject.displayMessage}</b></Link>
              </div>
      })}
      </Flex>
      {/* Components will be displayed below */}
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
