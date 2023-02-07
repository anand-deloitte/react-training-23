import React from "react";
import Navbar from './Components/Navigation';
import Pageheader from './Components/Pageheader';
import "./App.css";
import Blogrightcomponent from "./Components/BlogBody/Blogrightcomponent";
import Blogleftcomponent from "./Components/BlogBody/Blogleftcompnent";
import { blogdataright1, popularpostsdata ,tags } from './Blogdata/blogrightdata';
import { blogdataLeft1, blogdataLeft2 } from './Blogdata/blogleftdata';
import Popularposts from "./Components/BlogBody/PopularPosts";
import Tags from "./Components/BlogBody/Tags";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Footer from './Components/Footer'
// import ContextComp from "./context";
function MyApp(props) {
  return (
    <div>
      <Navbar></Navbar>
      <Pageheader title="Unique" name="Sonali"></Pageheader>
      <div className="container">
        <div className="">
          <Blogleftcomponent {...blogdataLeft1}></Blogleftcomponent>
          <Blogleftcomponent {...blogdataLeft2}></Blogleftcomponent>
        </div>
        <div className="">
          <Blogrightcomponent {...blogdataright1} ></Blogrightcomponent>
          <div className="popular">
            <h4>Popular Posts</h4>
            <ul>
              <Popularposts popularPostsData={popularpostsdata} ></Popularposts>
            </ul>
          </div>
          <div className="tags">
            <h4>Tags</h4>
            <div>
              <Tags tags={tags} ></Tags>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
