import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyBlogView from './components/MyBlogView/MyBlogView';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MyBlogView />
      <Footer />
    </div>
  );
}

export default App;
