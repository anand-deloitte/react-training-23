import React, { useState } from "react";

const CommentBox = () => {
  const [showForm, setShowForm] = useState(true);
  const [comments, setComment] = useState("");
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setShowForm(false);
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(true);
    setCount(count + 1);
    setComment("");
  };

  return (
    <>
      <div className="w3-col m4 w3-hide-small w3-right w3-padding">
        {showForm ? (
          <>
            <span className="w3-padding-large w3-right">
              <span className="w3-padding-large " onClick={() => updateCount()}>
                Comments
              </span>
              <span className="card-count w3-badge">{count}</span>{" "}
            </span>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Review Comment"
              type="text"
              value={comments}
              onChange={handleChange}
              className="w3-right"
            />
          </form>
        )}
      </div>
    </>
  );
};

export default CommentBox;
