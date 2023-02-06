import React, { Component } from "react";
import Router from "../Router";
import { Box, Flex } from '@chakra-ui/react'

// StateFul Component
class HeaderComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Flex className="header">
        <Router />
      </Flex>
    );
  }
}

export default HeaderComponent;
