import React from "react";
import { Link } from "react-router-dom";

const tags = {
    title: 'TAGS',
    home: 'Home',
    newYork: 'New York',
    travel: 'Travel'
}

function Tags(props) {
    return (
        <div className="tag-container">
            <div className="tag-header">
                {props.tags.title}
            </div>
            <div className="tags-section">
                <p className="tags">
                    <Link className="home" to='/'>{tags.home}</Link>
                    <Link className="ny" to='ny'>{tags.newYork}</Link>
                    <Link className="travel" to='travel'>{tags.travel}</Link>
                </p>
            </div>
        </div>
    );
}

export default Tags;