import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";

// StateFul Component
class IntroductionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex className="introduction w3-card w3-margin w3-margin-top" flexDirection='column' bg='white'>
        <img src={this.props.userImage} alt=""></img>
        <div className="w3-container w3-white">
            <h4>{this.props.userName}</h4>
            <p>{this.props.userIntroduction}</p>
        </div>
      </Flex>
    );
  }
}

export default IntroductionComponent;
