import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from '../Components/Home';
function Navbar(props) {

    return (
        <div>
            <nav class="header-nav">
                <a class="nav-link" href="#">Home</a>

                <a class="nav-link" href="#">About</a>

                <a class="nav-link" href="#">Contact Us</a>

                <a class="nav-link" href="#">Sign Up</a>

                <a class="nav-link" href="#">Login</a>
            </nav>
        </div>
        
    );
}

export default Navbar;