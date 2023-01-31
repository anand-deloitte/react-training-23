import React, { Component } from "react";
//ES6
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "Random",
    };
  }
  updateCount = () => {
    this.setState((preveState) => ({ count: preveState.count + 1 }));
  };
  updateCountDec = () => {
    this.setState((preveState) => ({ count: preveState.count - 1 }));
  };

  componentDidUpdate = () => {
    // debugger;
  };
  render() {
    debugger;
    return (
      <div>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={this.updateCount.bind(this)}>+</button>
        <button onClick={this.updateCountDec.bind(this)}>-</button>
      </div>
    );
  }
}

export default Counter;
