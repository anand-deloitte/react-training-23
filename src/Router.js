//Created extra
import { Flex, Spacer } from "@chakra-ui/react";
import { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import IntroductionComponent from "./components/IntroductionComponent";
import NewsletterComponent from "./components/NewsletterComponent";
import PopularPosts from "./components/PopularPosts";
import App from "./App";

class Router extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // Introduction Component Data
            userName: "Shalini",
            userImage: "./avatar_g.jpg",
            userIntroduction: "Dummy Data1",
            // NewsLetter Component Data
            blogName1: "Desserts",
            blogImgUrl1: "./woods.jpg",
            blogDescAndDate1: "Into The Woods, June 2, 2014",
            blogContent1: "Dummy Data2"
        };
  
    }
    render() {
        return (
            <BrowserRouter>
                    <Link to='/'>All</Link>
                    <Link to='introduction'>IntroductionComponent</Link><Spacer />
                    <Link to='newsletter'>NewsletterComponent</Link><Spacer />
                    <Link to='popularpost'>PopularPosts</Link><Spacer />
                    {/* <Link to='*'>PopularPosts</Link> */}
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='introduction' element={ <IntroductionComponent userName = {this.state.userName} userImage = {this.state.userImage} userIntroduction = {this.state.userIntroduction} />} />
                    <Route path='newsletter' element={<NewsletterComponent blogName = {this.state.blogName1} blogImgUrl = {this.state.blogImgUrl1} blogDescAndDate = {this.state.blogDescAndDate1} blogContent = {this.state.blogContent1} />} />
                    <Route path='popularpost' element={<PopularPosts />} />
                    {/* <Route path='*' element={<XYZ />} /> */}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;