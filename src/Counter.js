import React, { Component } from "react";
import {Button} from 'react-bootstrap';

//ES6
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  

  updateCountAndClear = () => {
    this.setState((preveState) => ({ count: preveState.count + 1 }));
  };

  render() {
    debugger;
    return (
      <div className="comment-section">       
        <input class="col-12" type="text" placeholder='Comment' />  
        <p>Number of comments : {this.state.count}</p>
        <Button variant="secondary" onClick={this.updateCountAndClear.bind(this)}>Add</Button>
      </div>
    );
  }
}

export default Counter;
