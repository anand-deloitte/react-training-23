import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CounterFunctional from "./CounterFunctionalComp";
// import ContextComp from "./context";
import { ChakraProvider } from '@chakra-ui/react'

import { Flex, Spacer, Box } from '@chakra-ui/react'
// Components Import
import HeaderComponent from './components/HeaderComponent';
import IntroductionComponent from './components/IntroductionComponent';
import NewsletterComponent from './components/NewsletterComponent';
import FooterComponent from './components/FooterComponent';
import PopularPosts from './components/PopularPosts';

function App(props) {
  // Introduction Component Data
  const userName = "Manisha";
  const userImage = "./avatar_g.jpg";
  const userIntroduction = "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.";
  // NewsLetter Component Data
  const blogName1 = "Woods";
  const blogImgUrl1 = "./woods.jpg";
  const blogDescAndDate1 = "Into The Woods, April 2, 2014";
  const blogContent1 = "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  
  const blogName2 = "Sky";
  const blogImgUrl2 = "./bridge";
  const blogDescAndDate2 = "Into The Sky, March 2, 2014";
  const blogContent2 = "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."

  return (
    <ChakraProvider>
    <Flex flexDirection="column">
      <header>
        {/* <Flex justifyContent="center" alignItems='center' bg="tomato">
          <HeaderComponent />
        </Flex> */}
      </header>
      <section>
        <Flex fexDirection="row">
            <Box wrap="wrap" alignItems="left" w = '100%' p={4}>
              <NewsletterComponent blogName = {blogName1} blogImgUrl = {blogImgUrl1} blogDescAndDate = {blogDescAndDate1} blogContent = {blogContent1} />
              <NewsletterComponent blogName = {blogName2} blogImgUrl = {blogImgUrl2} blogDescAndDate = {blogDescAndDate2} blogContent = {blogContent2}/>
            </Box>
            <Box wrap="wrap" alignItems="right" w='100%' p={4}>
              <IntroductionComponent userName = {userName} userImage = {userImage} userIntroduction = {userIntroduction} />
              <PopularPosts />
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
