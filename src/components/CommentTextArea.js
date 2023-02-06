import React, {useState} from "react";

function CommentTextArea(props){
    let{commentsCount, setCommentsCount} = props;
    let[comments, setComments] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        comments.push(event.currentTarget[0].value);
        event.currentTarget[0].value = "";
        setCommentsCount(commentsCount + 1);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <textarea className="" name="postContent" rows={4} cols={75} />
            <button type="submit">Save Comment</button>
        </form>
        <div>
            <ul>
                {comments.map(item => (<li key={commentsCount}>{item}</li>))}
            </ul>
        </div>
        </>
    );
}

export default CommentTextArea;