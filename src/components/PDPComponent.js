import { ChakraProvider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../services/PDPService";
import { ModalAndPDPComponent } from "./ModalAndPDPComponent";
import ProductComponent from "./ProductCardComponent";


export const PDPComponent = () => {
    const [product, setProductData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
      setLoading(true);
      console.log('test', id);
      //get id from url and append in the url
      // sample get call for get product by id
      fetch("https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp/"+id)
        .then((res) => res.json())
        .then((res) => {
        setProductData(res);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });

      // **Using Axios for Service Call
        // getOneProduct(id).
        // then((res) => {
        // setProductData(res.data);
        //   setLoading(false);
        // })
        // .catch((err) => {
        //   setError(err);
        //   setLoading(false);
        // });

    }, []);
    return (
        <ChakraProvider>
            <Flex justifyContent='center' alignItems='center' mt='5%' >
                <ModalAndPDPComponent {...product}/>
            </Flex>
        </ChakraProvider>
    )
}