import React, { useRef, useState } from "react";

function BlogCard(props) {
  const { heading, description, date, content, image, commentsData } = props;
  const [commentArr, setCommentArr] = useState(commentsData);
  const [likeArr, setLikeArr] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef("");
  const incCounter = () => {
    setLikeArr((likeArr) => likeArr + 1);
  };
  const handleCommentsClick = () => {
    setShowInput(!showInput);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCommentArr([e.currentTarget[0].value, ...commentArr]);
    setShowInput(false);
  };
  return (
    <>
      <div className="card">
        <img src={image} alt="header" />
        <div className="cardHeading">
          <h3>{heading}</h3>
          <h5>
            {description},<span className="opacity">{date}</span>
          </h5>
          <p>{content}</p>
          <div className="cardFooter">
            <button onClick={handleCommentsClick}>
              Add Comment 
            </button>
          <div className='comments'>
              Likes &nbsp;<span onClick={incCounter}>{likeArr}</span>
              Comments &nbsp;<span>{commentArr.length}</span>
            {commentArr.map((comment) => (
                <div className="result"> {comment}</div>
              ))}
            </div>
          </div>
        
          <div>
          </div>
          {showInput && (
            <>
              <form onSubmit={handleFormSubmit}>
                <input ref={inputRef} placeholder="Add Comments" />
                <button type="submit">Save</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogCard;
