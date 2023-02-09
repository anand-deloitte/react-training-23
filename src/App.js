import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavItem from "./Components/NavItem";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/home" exact element={<Home/>} />
          <Route path="/mens" element={<NavItem page="Mens" imgUrl='images/post1.jpg'/>} />
          <Route path="/newArrivals" element={<NavItem page="New Arrivals" imgUrl='images/post2.jpg' />} />
          <Route path="/womens" element={<NavItem page="Womens" imgUrl='images/post3.jpg'/>} />
          <Route path="/electronics" element={<NavItem page="Electronics" imgUrl ='images/post4.jpg'/>} />
          <Route path="/travel" element={<NavItem page="Travel" imgUrl ='images/post4.jpg'/>} />
          <Route exact path="/food" element={<NavItem page="Food" imgUrl ='images/post4.jpg' />}></Route>
          <Route exact path="/family" element={<NavItem page="Family" imgUrl ='images/post4.jpg'/>} />
          <Route path="/dance" element={<NavItem page="Dance" imgUrl ='images/post4.jpg' />} />
          <Route path="/productDetails/:id" element={<ProductDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
