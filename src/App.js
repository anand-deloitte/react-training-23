import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home'
import Header from './component/Header';
import Dashboard from './Layouts/Dashboard';
import About from './Layouts/About';
import Contact from './Layouts/Contact';

function App() {
  return (
    <div className="App w3-content">
      <Header name="Akshaya"/>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Dashboard />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
