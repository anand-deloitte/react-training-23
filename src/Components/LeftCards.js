import React, {useRef,useState } from "react";

function LeftCards (props){
    const [count , setCount] = useState(0)
    const [showInput, setShowInput] = useState(false);
    
    
    const inputRef = useRef("");
    const commentsClick = () => {
        setShowInput(!showInput);
      };
      const handleFormSubmit = (e) => {
        e.preventDefault();
       
        setShowInput(false);
        setCount(count+1);
      };
    
    return (
    
        <div className="container">
        <img src={props.image} alt="Nature" />
        <div className="container-heading">
                <h3><b>{props.heading}</b></h3>
                <h5>{props.description} <span className="w3-opacity">{props.date}</span></h5>
                <p>{props.content}</p>
                <div className="container-footer">
                    <button onClick={commentsClick}>{props.button}</button>
                    <p>{count}</p>  
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
        
    );


}

export default LeftCards;