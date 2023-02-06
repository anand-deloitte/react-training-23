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
      <div className="">
          <h1><b>MY BLOG</b></h1>
          <p>Welcome to the blog of <span class="w3-tag">Richa</span></p>
      </div>
    );
  }
}

export default HeaderComponent;
