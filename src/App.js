
import "./App.css";
import BlogView from "./Blogs/Components/BlogView";
import Footer from "./Blogs/Components/Footer/Footer";
import Header from "./Blogs/Components/Header/Header";

// import ContextComp from "./context";
function MyApp(props) {
  return (
    <div className="App">
      <Header/>
      <BlogView/>
      <Footer/>
    </div>
  );
}

export default MyApp;
