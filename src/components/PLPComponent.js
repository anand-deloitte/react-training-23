import React, { useState } from "react";
import { getAllProducts, fetchAllProducts } from "../services/PLPService";
import { productData, GET_ALL_PRODUCTS_URL } from "../constants/Constants";
import { useEffect } from "react";
import { ChakraProvider, Grid, GridItem, Spinner, Flex, Text } from "@chakra-ui/react";
import ProductCardComponent from "./ProductCardComponent";
import { ProductModalComponent } from "./ProductModalComponent";


const PLPComponent = () => {
    //All Product Data, if error catct error in a var, if loader catch loader in a var
    //set in PLP Comp State
    //PASS it as prop to Card component

    const [productsData, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      // setLoading(true);
      // // https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp/1  // sample get call for get product by id
      fetch("https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });

      // **Using Axio for Service Call
      // getAllProducts().then((res) => {
      //   setData(res.data);
      // }).catch((err) => {
      //   setError(err);
      // })

    }, []);

    if (error) return <p>Error: {error.message}</p>;
    if (!productsData) return null;

    return (
      <ChakraProvider>
        <Flex justifyContent='center'>
          <Text color='blue.600' fontSize='40px' p='20px'> Shop Your Dress </Text>
        </Flex>
        {
          loading ? 
          <Flex justifyContent='center' alignItems='center' mt='20%'>
              <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Flex> :
          <Grid templateColumns='repeat(3, 1fr)' gap={6} ml='5%' mr='5%' >
            {productsData.map((productData) => {
            return  <GridItem ><ProductCardComponent {...productData} /></GridItem>
            })}
           </Grid>
        }
      </ChakraProvider>
    );
}

export default PLPComponent;