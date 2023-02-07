import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from '../Home';
function Blogleftcomponent(props) {
    function showtextbox(){
        if(document.getElementById("textarea").style.display == "none"){
            document.getElementById("textarea").style.display= "block";        
        }else{
            document.getElementById("textarea").style.display = "none"; 
        }
    }
   const data = props;
    return (
        <div class="container">
            <div class="left">
                <div class="card">
                <img src={data.image} className="image" alt="logo" />                    
                <h2>{data.heading}</h2>
                    <p>{data.description} <span class="sub">{data.date}</span> </p>
                    <p>{data.content}</p>
                    <div class="read-more">
                    <Link to="/Home">
                        <button class="button-read-more" onClick={() => {alert("are you sure for read more?")}}>{data.readmore}</button>
                    </Link>
                    <Routes>
                    <Route path="/Home" element={<Home />} />
                    </Routes>
                        <button class="comments" onClick={showtextbox}>
                            Comments  &nbsp;<span>0</span>
                        </button>
                    </div>
                    <textarea class=""  type = "text" id="textarea" rows= "5" name="" style = {{display:'none',width: '100%', margin : '10px'}}>
                            
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default Blogleftcomponent;