//Created extra
import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import IntroductionComponent from "./components/IntroductionComponent";
import NewsletterComponent from "./components/NewsletterComponent";
import PopularPostsComponent from "./components/PopularPostsComponent";
import App from "./App";
import ErrorPageComponent from "./components/ErrorPageComponent";
import { introductioncomponentdata2, newslettercomponentdata3, popularpostcomponentdata2 } from "./constants/Constants";
class Router extends Component {
    constructor () {
        super();
    }
    render() {
        return (
                <Routes>
                   <Route path='/' element={<App />} />
                    <Route path='introduction' element={ <IntroductionComponent {...introductioncomponentdata2} />} />
                    <Route path='newsletter' element={<NewsletterComponent {...newslettercomponentdata3} />} />
                    <Route path='popularpost' element={<PopularPostsComponent propData={popularpostcomponentdata2} />} />
                    <Route path="*" element={<ErrorPageComponent />} />
                </Routes>
        );
    }
}

export default Router;