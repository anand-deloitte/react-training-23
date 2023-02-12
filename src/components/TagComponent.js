import { ChakraProvider } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routepath } from "../constants/Constants";

// StateFul Component
class TagComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <ChakraProvider className="w3-card w3-margin">
        <div class="w3-container w3-padding tag-component-header">
            <h4>Tags (Route)</h4>
        </div>
        <div class="w3-container w3-white">
            <p>
                {routepath.map((routeobject, index) => {
                    return  <Link to={routeobject.path}> <span class="w3-tag w3-light-grey w3-small w3-margin-bottom tag-element"><b>{routeobject.displayMessage}</b></span> </Link>
                })}
            </p>
        </div>
      </ChakraProvider>
    );
  }
}

export default TagComponent;
