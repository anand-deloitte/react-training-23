import React from "react";
function Pageheader(props) {

    return (
        <div>
            <div class="heading">
                <h1>Welcome to {props.name}'s BLOG</h1>
            </div>
        </div>
    );
}

export default Pageheader;