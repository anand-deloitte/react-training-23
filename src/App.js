
import Blog from './Components/BlogComponents';
import {blogEntry1} from './Components/BlogComponents';
import PostCard from './Components/PostCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import LeftCards from './Components/LeftCards.js';

function App() {
  return (
    <div>
      <Router> 
        <Header/>
        <Routes>
          <Route path="/" exact element={<Blog/>} />
          <Route path="/blog2" exact element={<PostCard/>} />
          <Route path="/blog3" exact element={<LeftCards {...blogEntry1}/>} />
          </Routes>
        </Router>
    
    </div>
  );
}

export default App;
