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
          <Route path="/about" element={<NavItem page="About"/>} />
          <Route path="/events" element={<NavItem page="Events"/>} />
          <Route path="/blogs" element={<NavItem page="Blogs"/>} />
          <Route path="/sign-up" element={<NavItem page="Sign Up"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
