import React from "react";
import { Link } from "react-router-dom";

function Tags(props){
    return(
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    <Link to="/Travel" className="w3-tag w3-light-blue w3-margin-bottom">Travel</Link> 
                    <Link to="/NewYork" className="w3-tag w3-light-blue w3-small w3-margin-bottom">New York</Link> 
                    <Link to="/London" className="w3-tag w3-light-blue w3-small w3-margin-bottom">London</Link>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> 
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                </p>
            </div>
        </div>
    );
}

export default Tags;