import BodyShorthandExample from './Card';
import './App.css';
import json from './assets/JSON/Card.json';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DelhiData from './Delhi';
import NewYorkData from './NewYork';
import LondonData from './London';

function App(props) {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>My Blog</h1>
        <p>Welcome to my blog</p>
      </header>
        
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<BodyShorthandExample data={json} />}></Route>
            <Route path='/london' element={< LondonData data={json} />}></Route>  
            <Route path='/newyork' element={< NewYorkData data={json} />}></Route>
            <Route path='/delhi' element={< DelhiData data={json} />}></Route>
        </Routes> 
      </BrowserRouter>
      <footer className='App-footer'><h2>Footer</h2></footer>
    </div> 
  );
}

export default App;
