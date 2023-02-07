import React from "react";

function PopularPostCard() {
  const postsData = [
    {
      name: "Lorem",
      desc: "Sed mattis nunc",
      imageUrl: "https://www.w3schools.com/w3images/workshop.jpg",
    },
    {
      name: "Lorem",
      desc: "Sed mattis nunc",
      imageUrl: "https://www.w3schools.com/w3images/gondol.jpg",
    },
    {
      name: "Lorem",
      desc: "Sed mattis nunc",
      imageUrl: "https://www.w3schools.com/w3images/skies.jpg",
    },
    {
      name: "Lorem",
      desc: "Sed mattis nunc",
      imageUrl: "https://www.w3schools.com/w3images/rock.jpg",
    },
  ];
  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4>Popular Posts</h4>
      </div>
      <ul className="w3-ul w3-hoverable w3-white">
        {postsData.map((post) => (
          <li className="w3-padding-16">
            <img
              className="w3-left w3-margin-right"
              src={post.imageUrl}
              alt="posts"
              style={{ width: 50 + "px" }}
            />
            <span className="w3-large">{post.name}</span>
            <br />
            <span>{post.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularPostCard;
