import "../App.css";
import BlogSection from "./BlogSections";
import { blogEntry1, blogEntry2 } from "../Constants";
import ProfileCard from "./ProfileCard";

import Tags from "./Tags";
import PopularPosts from "./PopularPosts";
function Home() {
  return (
    <div>
      <div className="heading">
        <h1>MY BLOG</h1>
        <p>
          Welcome to the blog of <span>Navneet Kumar</span>
        </p>
      </div>
      <div className="outerContainer">
        <div className="leftCard">
          <BlogSection {...blogEntry1} />
          <BlogSection {...blogEntry2} />
        </div>

        <div className="rightCard">
          <ProfileCard />
          <PopularPosts />
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Home;
