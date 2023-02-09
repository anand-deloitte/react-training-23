import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function TagCard() {
  const [selectedIndex, setIndex] = useState(0);
  const tags = [
    "Travel",
    "NewYork",
    "London",
    "IKEA",
    "NORWAY",
    "DIY",
    "Ideas",
    "Baby",
    "Family",
    "News",
    "Clothing",
    "Sports",
    "Games",
  ];

  const handleTagClick = (number) => {
    setIndex(number);
  };

  return (
    <div className="tags-container w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4 className="tags-title">Tags</h4>
      </div>
      <div className="tags-list w3-container w3-white">
        {tags.map((tag, index) => {
          return (
            <Link
              to={"/" + tag}
              className={`w3-tag w3-margin-bottom ${
                index === selectedIndex ? "w3-black" : "w3-light-grey w3-small"
              }`}
              onClick={() => handleTagClick(index)}
            >
              {tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default TagCard;
