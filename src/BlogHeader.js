import React from "react";
import "./Blog.css";

function BlogHeader(props) {
    return (
        <div className="header-container">
            <h1>My Blog</h1>
            <p>Welcome to the blog of {props.name}</p>
        </div>
    );
}

export default BlogHeader;