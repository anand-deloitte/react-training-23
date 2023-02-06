import React, {createRef, useRef, useState, useEffect} from "react";
import CommentTextArea from "./CommentTextArea"

function Blogs(props){
    const[isComment, setIsComment] = useState(false);

    const addComment = () => {
        setIsComment(true);
    }
    return(
        <div className="w3-card-4 w3-margin w3-white">
            <img src={props.image} alt="Nature"/>
            <div className="w3-container">
            <h3><b>{props.title}</b></h3>
            <h5>Title description, <span className="w3-opacity">{props.date}</span></h5>
            </div>

            <div className="w3-container">
            <p>{props.desc}</p>
            <div className="w3-row">
                <div className="w3-col m8 s12">
                <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                <p><a onClick={addComment} className="w3-padding-large w3-right comments"><b>Comments &nbsp;</b> <span className="w3-tag">0</span></a></p>
                </div>
                { isComment ? <CommentTextArea /> : null }
            </div>
            </div>
        </div>
    );
}

export default Blogs;