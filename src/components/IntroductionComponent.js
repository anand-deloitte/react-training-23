import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";

// StateFul Component
class IntroductionComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex className="introduction" flexDirection='column'>
            <img src={this.props.userImage} alt=""></img>
            <h1>{this.props.userName}</h1>
            <p>{this.props.userIntroduction}</p>
      </Flex>
    );
  }
}

export default IntroductionComponent;
