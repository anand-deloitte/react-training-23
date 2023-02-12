import React from "react"
import { ProductModalComponent } from "./ProductModalComponent"
import { ChakraProvider, Flex, Card, CardBody, Stack, StackDivider, Box , Heading, Text, Image, Divider, CardFooter, Button, ButtonGroup, Spacer, useDisclosure,
  Modal} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const ModalAndPDPComponent = (props) => {

    return (
        <>
          <Card  data-pid={props.id} alignItems="center" justifyContent='center'>
            <CardBody>
              <Flex flexDirection='row'>
                <Box flexBasis='50%'>
                  <Image
                      src={props.img}
                      alt={props.name}
                      borderRadius='lg'
                      size='sm'
                  />
                </Box>
                <Box flexBasis='50%' pl='40px' pr='20px'>
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{props.name}</Heading>
                      <Flex  alignItems='center' >
                          <Box margin='5px'>
                            <Text color='blue.600' fontSize='2xl' className="product-price">
                                ${props.price} <Spacer /><Spacer /><Spacer />
                            </Text>
                          </Box>
                          <Box margin='5px'>
                          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                          </Box>
                      </Flex>
                      <Text color='blue.400' fontSize='2l' className="product-price">
                              <Box>Dress Type: Western</Box>
                              <Box>Size: SM M L XL inches</Box>
                              <Box>Material: Cotton</Box>
                              <Box pb="20px">Color Available: All</Box>
                              <Divider color='black'/>
                              <Text color='green.400'>Extended Guarantee</Text>
                              <Divider color='black' />
                      </Text>
                  </Stack>
                </Box>
              </Flex>
                </CardBody>
             </Card>
        </>
    )
}