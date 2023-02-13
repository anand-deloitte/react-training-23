import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import ProductListPage from "./Pages/ProductListPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<ProductListPage />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
        <Route path="/Product/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
