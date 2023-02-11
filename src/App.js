import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CounterFunctional from "./CounterFunctionalComp";
import Blogs from './components/Blogs';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Tags from './components/Tags';
import PopularBlogs from './components/PopularBlogs';
import blogs from "./static/data"
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

function MyApp(props) {
  // const [myState, updateState] = useState("name");

  // const changeState = () => {
  //   updateState("newName");
  // };
  return (
    <>
    <div className="w3-content">
      <Link to="/FetchData" className="w3-tag w3-light-blue w3-small w3-margin-bottom">Product Grid</Link>
      <Header />
      <div className="w3-col l8 s12">
        <Blogs title={blogs.blog1.title} image={blogs.blog1.image} desc={blogs.blog1.desc} date={blogs.blog1.date} />
        <hr />
        <Blogs title={blogs.blog2.title} image={blogs.blog2.image} desc={blogs.blog2.desc} date={blogs.blog2.date} />
      </div>
      <div className="w3-col l4">
        <AboutMe image={blogs.about.image} />
        <hr />
        <PopularBlogs />
        <hr />
        <Tags />
      </div>
    </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Welcome : {props.name}</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //     <button onClick={changeState}>change State</button>
    //     <Counter data={myState} />
    //     <CounterFunctional data={myState} />
    //     {/* <ContextComp></ContextComp> */}
    //   </header>
    // </div>
  );
}

export default MyApp;
