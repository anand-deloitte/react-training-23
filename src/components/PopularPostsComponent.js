import React, { Component } from "react";
// StateFul Component
class PopularPostsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="w3-card w3-margin">
          <div class="w3-container w3-padding popular-post-header">
            <h4>Popular Posts</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
          {this.props.propData.map((routeobject, index) => {
                    return  <li class="w3-padding-16">
                            <img src={routeobject.postImage} alt="testImage" className="w3-left w3-margin-right popular-post-img" />
                            <span class="w3-large">{routeobject.postName} </span><br />
                            <span>{routeobject.postShortDesc} </span>
                            </li>
          })}
          </ul>
      </div>
    );
  }
}

export default PopularPostsComponent;
