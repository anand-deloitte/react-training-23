import React, { Component } from "react";
import { Flex, Button, Box, Input, ChakraProvider } from "@chakra-ui/react";

// StateFul Component
class FooterComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ChakraProvider>
      <Flex className="footer" justifyContent='space-between' bg='cadetblue' p='20px'>
            <Button bg='teal' className="footer-button">&lt; &lt;Previous</Button>
            <Button bg='teal' className="footer-button">Next &gt; &gt;</Button>
      </Flex>
      </ChakraProvider>
    );
  }
}

export default FooterComponent;
