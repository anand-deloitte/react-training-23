import React from "react";
import Comment from "./Comment";
import "./Blog.css";

function NY(props) {
    return (
        <div className="blog-wrapper">
            <div className="blog-container">
                <div className="blog-card">
                    <img className="Image" src={props.blogDataOne.imgURL} alt="Alt Text" />
                    <div className="blog-title">{props.blogDataOne.title}</div>
                    <div className="blog-decription">{props.blogDataOne.text} {props.blogDataOne.date.toLocaleDateString()}</div>
                    <div className="blog-body">{props.blogDataOne.description}</div>
                    <button className="btn read-more">READ MORE >></button>
                    {props.blogDataOne.link &&<span className="blog-comment-link"><Comment /></span>}
                </div>
            </div>
        </div>
    );
}

export default NY;