import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavItem from "./Components/NavItem";
import Home from "./Components/Home";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/about" element={<NavItem page="About" imgUrl='images/post1.jpg'/>} />
          <Route path="/events" element={<NavItem page="Events" imgUrl='images/post2.jpg' />} />
          <Route path="/blogs" element={<NavItem page="Blogs" imgUrl='images/post3.jpg'/>} />
          <Route path="/sign-up" element={<NavItem page="Sign Up" imgUrl ='images/post4.jpg'/>} />
          <Route path="/travel" element={<NavItem page="Travel" imgUrl ='images/post4.jpg'/>} />
          <Route exact path="/food" element={<NavItem page="Food" imgUrl ='images/post4.jpg' />}></Route>
          <Route exact path="/family" element={<NavItem page="Family" imgUrl ='images/post4.jpg'/>} />
          <Route path="/dance" element={<NavItem page="Dance" imgUrl ='images/post4.jpg' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
