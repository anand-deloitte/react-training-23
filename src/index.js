import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewYork from "./NY";
import Travel from "./Travel";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

const blogColumnOne = {
  date: new Date(),
  title: 'TITLE HEADING',
  text: 'Title Description',
  description: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  imgURL: 'https://www.w3schools.com/w3images/woods.jpg',
  link: 'Comment'
};

const blogColumnTwo = {
  date: new Date(),
  title: 'BLOG ENTRY',
  text: 'Title Description',
  description: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
  imgURL: 'https://www.w3schools.com/w3images/bridge.jpg',
  link: 'Comment'
};

const tags = {
  title: 'TAGS',
  home: 'Home',
  newYork: 'New York',
  travel: 'Travel'
}

root.render(
  <div>
    <BrowserRouter>
      <Link className="home" to='/'>{tags.home}</Link>
      <Link className="ny" to='ny'>{tags.newYork}</Link>
      <Link className="travel" to='travel'>{tags.travel}</Link>
      <Routes>
        <Route path='/' element={ <Home tags={tags}/>} />
        {/* <Route path='home' element={ <Home tags={tags}/>} /> */}
        <Route path='ny' element={ <NewYork blogDataOne={blogColumnOne}/>} />
        <Route path='travel' element={<Travel blogDataTwo={blogColumnTwo} />} />
      </Routes>
    </BrowserRouter>
  </div>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     {/* <MyApp name="React" /> */}
  //     <div>
  //       <Link to="/">Root </Link>
  //       <Link to="/home">Home </Link>
  //       <Link to="/about">About </Link>
  //       <Link to="/contact">Contact </Link>
  //     </div>
  //     <Routes>
  //       <Route path="/" element={<MyApp />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //   </BrowserRouter>
  //   ,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// StateFull Component  -  class component
// StateLess Component  -  funcitonal / pure Component -

// Hooks

// npm i react-router-dom
