import React from "react";
function Popularposts(props) {

    return (
		props.popularPostsData.map(post => {
			return (
				
				<li>
					<img src={post.image} alt={post.name} />
					<div className="popular-name">
						<span>{post.name}</span>
						<br />
						<span>{post.description}</span>
					</div>
				</li>
				
			);

		})
    );
}

export default Popularposts;