
import React from "react";
import Comment from "./Comment";
import "./Blog.css";

function Travel(props) {
    return (
        <div className="blog-wrapper">
            <div className="blog-container">
                <div className="blog-card">
                    <img className="Image" src={props.blogDataTwo.imgURL} alt="Alt Text" />
                    <div className="blog-title">{props.blogDataTwo.title}</div>
                    <div className="blog-decription">{props.blogDataTwo.text} {props.blogDataTwo.date.toLocaleDateString()}</div>
                    <div className="blog-body">{props.blogDataTwo.description}</div>
                    <button className="btn read-more">READ MORE >></button>
                    {props.blogDataTwo.link &&<span className="blog-comment-link"><Comment /></span>}
                </div>
            </div>
        </div>
    );
}

export default Travel;