import "../App.css";
import BlogCard from "./BlogCard";
import Post from "./Post";

function Home() {
  const postsData=[
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post1.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post2.jpg'
    },
    {
      name:'Lorem',
      desc:'Sed mattis nunc',
      imageUrl:'images/post3.jpg'
    }
  ]; 

  const blogEntryData1={
    heading:'TITLE HEADING',
    description:'Title description',
    date:'December 3, 2022',
    content:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
   commentsCount:0,
   image:"images/woods.jpg",
   commentsData:[],
  };

  const toAlert = (data) => {
    alert("React "+ data);
  };
  return (
    <div>
      <div className="heading">
        <h1>React BLOG</h1>
        <p>
          Welcome to the blog of <span>React</span>
        </p>
      </div>
      <div className="outerContainer">
        <div className="leftCard">
          <BlogCard {...blogEntryData1} />
        </div>

        <div className="rightCard">
          <div className="card">
            <img src="images/avatar_g.jpg" alt="header Image"/>
            <div className="cardHeading">
              <h3>React Js</h3>
              <p className="bottomPaddingZero">Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
              </div>
          </div>
          <div className="card2">
            <h4>Popular Posts</h4>
            <ul>
              {postsData.map(post=> <Post {...post}/>)}
            
            </ul>
          </div>
          <div className="card3">
            <h4>Tags</h4>
            <div>
              <button onClick={() => {toAlert("Travel");}} to="/">Travel</button>
              <button onClick={() => {toAlert("Food");}} to="/=">Food</button>
              <button onClick={() => {toAlert("Family");}} to="/">Family</button>
              <button onClick={() => {toAlert("Dance");}} to="/">Dance</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
