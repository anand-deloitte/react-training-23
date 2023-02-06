import React, { Component } from "react";
import { Flex, Button, Box, Input } from "@chakra-ui/react";

// StateFul Component
class FooterComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Flex className="footer" justifyContent='space-between'>
            <Button bg='gray'>&lt; &lt;Previous</Button>
            <Button bg='gray'>Next &gt; &gt;</Button>
      </Flex>
    );
  }
}

export default FooterComponent;
