import React from "react";
import { ChakraProvider, Link, Flex, Card, CardBody, Stack, StackDivider, Box , Heading, Text, Image, Divider, CardFooter, Button, ButtonGroup, Spacer,
Modal,
useDisclosure} from "@chakra-ui/react";
import { productData } from "../constants/Constants";
import { Icon } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import { ProductModalComponent } from "./ProductModalComponent";
import { useNavigate } from "react-router-dom";



const ProductCardComponent = (props) => {
// on Click OPen Modal and Pass data from ProductCardComponent to Modal Component
const navigate = useNavigate();
const { isOpen, onOpen, onClose } = useDisclosure();

const navigatePDP = (e) => {
  navigate('/pdp/' + e.target.getAttribute('pid'), {replace: true});      //New Server call with route change hence need to pass product id
}
    return (
        <>
        <Card alignItems="center">
        <CardBody>
          <Link>
            <Image
                src={props.img}
                alt={props.name}
                borderRadius='lg'
                onClick={navigatePDP}
                pid={props.id}
              />
          </Link>
          <Stack mt='6' spacing='3'>
            <Link><Heading size='md' onClick={navigatePDP} pid={props.id}>{props.name}</Heading></Link>
            <Flex  alignItems='center'>
                <Box margin='5px'>
                  <Text color='blue.600' fontSize='2xl' className="product-price">
                    ${props.price} <Spacer /><Spacer /><Spacer />
                  </Text>
                </Box>
                <Box margin='5px'>
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </Box>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <ButtonGroup spacing='1'>
            <Button variant='solid' colorScheme='green'  onClick={onOpen}>
              Show Product
            </Button>
            <ProductModalComponent isOpen={isOpen} onClose={onClose} {...props}/>
            <Button variant='solid' colorScheme='blue'>
              Add to cart
            </Button>
            <Button variant='solid' colorScheme='blue'>
              Buy Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
        </>

    )
}

export default ProductCardComponent;