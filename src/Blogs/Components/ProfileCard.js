import React from "react";
import BlogCard from "./BlogCard";

function ProfileCard() {
  const profileCard = {
    title: "Ashu Katiyar",
    description:
      "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    imageUrl: "https://www.w3schools.com/w3images/avatar_g.jpg",
  };

  return (
    <div className="profile-card">
      <div className="w3-card w3-margin w3-white">
        <img src={profileCard.imageUrl} alt="" />
        <div className="card-details">
          <div className="w3-container">
            <h3>{profileCard.title}</h3>
            <h5>{profileCard.subTitle}</h5>
          </div>
          <div className="w3-container">
            <p>{profileCard.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
