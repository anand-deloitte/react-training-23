import React from "react";
function Blogrightcomponent(props) {
const data = props;
    return (
        <div>
            <div class="right">
			<div class="card">
            <img src={data.image} className="image" alt="logo" />                    
				<h2>{data.name}</h2>
				<p>{data.description}</p>
		    </div>
		</div>
        </div>
    );
}

export default Blogrightcomponent;