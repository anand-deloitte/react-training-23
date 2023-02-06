import "../App.css";
import BlogCard from "./BlogCard";
import { blogEntryData1, blogEntryData2 } from "../Constants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./ProfileCard";

import TagCard from "./TagCard";
import PostsCard from "./PostsCard";
function Home() {
  return (
    <div>
      <div className="heading">
        <h1>MY BLOG</h1>
        <p>
          Welcome to the blog of <span>Neetu Arora</span>
        </p>
      </div>
      <div className="outerContainer">
        <div className="leftCard">
          <BlogCard {...blogEntryData1} />
          <BlogCard {...blogEntryData2} />
        </div>

        <div className="rightCard">
          <ProfileCard />
          <PostsCard />
          <TagCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
