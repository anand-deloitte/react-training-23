import { ChakraProvider, Button, Flex, Box } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// StateFul Component
class ErrorPageComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ChakraProvider>
        <Box pt="250px">
            <Flex justifyContent='center' alignItems='center' className='w3-card' h='100px' bg='powderblue'>
                OOps! The Path Does Not EXists! Please click below to goto home page.
                <Button bg='teal' variant='outline' size='md' className="error-button"><Link to='/'>Home</Link></Button>
            </Flex>
        </Box>
      </ChakraProvider>
    );
  }
}

export default ErrorPageComponent;
