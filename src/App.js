import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
// import ContextComp from "./context";
import { ChakraProvider } from '@chakra-ui/react'

import { Flex, Spacer, Box } from '@chakra-ui/react'
// Components Import
import HeaderComponent from './components/HeaderComponent';
import IntroductionComponent from './components/IntroductionComponent';
import NewsletterComponent from './components/NewsletterComponent';
import FooterComponent from './components/FooterComponent';
import PopularPostsComponent from './components/PopularPostsComponent';
import TagComponent from "./components/TagComponent";
import { introductioncomponentdata1, newslettercomponentdata1, newslettercomponentdata2, popularpostcomponentdata1 } from "./constants/Constants";

function App() {

  return (
    <ChakraProvider>
    <Flex flexDirection="column">
      <header className="w3-container w3-center w3-padding-32">
        <Flex justifyContent="space-evenly" alignItems='center'>
          <HeaderComponent />
        </Flex>
      </header>
      <section className="flex-class">
        <Flex fexDirection="row">
            <Box wrap="wrap" alignItems="left"  p={4} className="left-component">
              <NewsletterComponent {...newslettercomponentdata1} />
              <NewsletterComponent {...newslettercomponentdata2} />
            </Box>
            <Box wrap="wrap" alignItems="right" className="right-component" p={4}>
              <IntroductionComponent {...introductioncomponentdata1} />
              <PopularPostsComponent propData={popularpostcomponentdata1} />
              <TagComponent />
          </Box>
        </Flex>
      </section>
      <footer>
          <FooterComponent />
      </footer>
    </Flex>
  </ChakraProvider>
  );
}

export default App;
