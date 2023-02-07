import React from "react";
import { useState } from "react";
import CommentBox from "./CommentBox";

function BlogCard(props) {
  return (
    <div className="w3-card w3-margin w3-white">
      <img src={props.img} alt="" />
      <div className="card-details">
        <div className="w3-container">
          <h3>{props.title}</h3>
          <h5>{props.subTitle}</h5>
        </div>
        <div className="w3-container">
          <p>{props.description}</p>
          <div className="w3-row">
            <div className="w3-row w3-margin-bottom">
              <div className="w3-col m8 s12">
                <button className="w3-button w3-padding-large w3-white w3-border w3-left ">
                  READ MORE »
                </button>
              </div>
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
