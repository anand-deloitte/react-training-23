import React from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    // Lorem,
  } from '@chakra-ui/react'
import { ChakraProvider, Flex, Card, CardBody, Stack, StackDivider, Box , Heading, Text, Image, Divider, CardFooter, Button, ButtonGroup, Spacer, useDisclosure,
    Modal} from "@chakra-ui/react";
    import { StarIcon } from "@chakra-ui/icons";
import ProductCardComponent from "./ProductCardComponent";
import { ModalAndPDPComponent } from "./ModalAndPDPComponent";


export const ProductModalComponent = (props) => {
    return (
      <>
        <Modal isOpen={props.isOpen} onClose={props.onClose} size='xl' >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalAndPDPComponent {...props}/>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' onClick={props.onClose} >
                    Close
                </Button> 
                {/* <Button colorScheme='blue'>Add To Cart</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}