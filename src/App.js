import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavItem from "./components/NavProps";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/about" element={<NavItem page="About" imgUrl='images/gondol.jpg'/>} />
          <Route path="/services" element={<NavItem page="Services" imgUrl='images/rock.jpg' />} />
          <Route path="/blogs" element={<NavItem page="Blogs" imgUrl='images/skies.jpg'/>} />
          <Route path="/travel" element={<NavItem page="Travel" imgUrl ='images/gondol.jpg'/>} />
          <Route exact path="/newYork" element={<NavItem page="New York" imgUrl ='images/rock.jpg' />}></Route>
          <Route exact path="/london" element={<NavItem page="London" imgUrl ='images/skies.jpg'/>} />
          <Route path="/ikea" element={<NavItem page="IKEA" imgUrl ='images/workshop.jpg' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
