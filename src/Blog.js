import React from "react";
import Comment from "./Comment";
import "./Blog.css";

function BlogBody(props) {
    return (
        <div className="blog-wrapper">
            <div className="blog-container">
                <div className="blog-card">
                    <img className="Image" src={props.blogData.imgURL} alt="Alt Text" />
                    <div className="blog-title">{props.blogData.title}</div>
                    <div className="blog-decription">{props.blogData.text} {props.blogData.date.toLocaleDateString()}</div>
                    <div className="blog-body">{props.blogData.description}</div>
                    <button className="btn read-more">READ MORE >></button>
                    {props.blogData.link &&<span className="blog-comment-link"><Comment /></span>}
                </div>
            </div>
        </div>
    );
}

export default BlogBody;