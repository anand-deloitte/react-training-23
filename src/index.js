import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IntroductionComponent from "./components/IntroductionComponent";
import NewsletterComponent from "./components/NewsletterComponent";
import PopularPosts from "./components/PopularPosts";
import { Flex } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Introduction Component Data
const userName = "Shalini";
const userImage = "./avatar_g.jpg";
const userIntroduction = "Dummy Data1";
// NewsLetter Component Data
const blogName1 = "Desserts";
const blogImgUrl1 = "./woods.jpg";
const blogDescAndDate1 = "Into The Woods, June 2, 2014";
const blogContent1 = "Dummy Data2"
root.render(
    // can upgrade with loops
  <React.StrictMode>
        <BrowserRouter>
                    <Flex justifyContent='space-between' bg='teal'>
                      <Link to='/'>All</Link>
                      <Link to='introduction'>IntroductionComponent</Link>
                      <Link to='newsletter'>NewsletterComponent</Link>
                      <Link to='popularpost'>PopularPosts</Link>
                      {/* <Link to='*'>PopularPosts</Link> */}
                    </Flex>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='introduction' element={ <IntroductionComponent userName = {userName} userImage = {userImage} userIntroduction = {userIntroduction} />} />
                    <Route path='newsletter' element={ <NewsletterComponent blogName = {blogName1} blogImgUrl = {blogImgUrl1} blogDescAndDate = {blogDescAndDate1} blogContent = {blogContent1} />} />
                    <Route path='popularpost' element={<PopularPosts />} />
                    {/* <Route path='*' element={<XYZ />} /> */}
                </Routes>
            </BrowserRouter>
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
