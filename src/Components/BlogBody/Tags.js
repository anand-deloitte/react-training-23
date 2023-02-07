import React from "react";
function Tags(props) {

    return (
		props.tags.map(post => {
			return (
				
				<span>
					{post.city}
				</span>
				
			);

		})
    );
}

export default Tags;