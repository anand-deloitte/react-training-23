//Created extra
import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import IntroductionComponent from "./components/IntroductionComponent";
import NewsletterComponent from "./components/NewsletterComponent";
import PopularPostsComponent from "./components/PopularPostsComponent";
import App from "./App";
import PLPComponent from "./components/PLPComponent";
import { introductioncomponentdata2, newslettercomponentdata3, popularpostcomponentdata2 } from "./constants/Constants";
import { PDPComponent } from "./components/PDPComponent";
import ErrorPageComponent from "./pages/ErrorPageComponent";

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
                    <Route path='plp' element={<PLPComponent />} />
                    <Route path='pdp/:id' element={<PDPComponent />} />
                    <Route path="*" element={<ErrorPageComponent />} />
                </Routes>
        );
    }
}

export default Router;