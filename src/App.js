import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavItem from "./components/NavProps";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/newArrivals" element={<NavItem page="New Arrivals" imgUrl='images/product.jpg' />} />
          <Route path="/womens" element={<NavItem page="Womens" imgUrl='images/women.jpg'/>} />
          <Route path="/electronics" element={<NavItem page="Electronics" imgUrl ='images/electronics.jpg'/>} />
          <Route path="/mens" element={<NavItem page="Mens" imgUrl='images/men.jpg'/>} />
          <Route path="/travel" element={<NavItem page="Travel" imgUrl ='images/gondol.jpg'/>} />
          <Route exact path="/newYork" element={<NavItem page="New York" imgUrl ='images/rock.jpg' />}></Route>
          <Route exact path="/london" element={<NavItem page="London" imgUrl ='images/skies.jpg'/>} />
          <Route path="/ikea" element={<NavItem page="IKEA" imgUrl ='images/workshop.jpg' />} />
          <Route path="/productDetails/:id" element={<ProductDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
