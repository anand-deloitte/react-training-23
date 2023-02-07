import React, { Component } from "react";
//ES6
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "Random",
      comments: ["sample"],
    };
  }

  updateCount = () => {
    this.setState((preveState) => ({ count: preveState.count + 1 }));
  };
  updateCountDec = () => {
    this.setState((preveState) => ({ count: preveState.count - 1 }));
  };

  updatecomment = (e) => {
    let valueOfcomment = e.currentTarget.value;
    let existingCommnet = this.state.comments;
    if (valueOfcomment.length) {
      this.setState((preveState) => ({
        comments: existingCommnet.push(valueOfcomment),
      }));
    }
  };

  render() {
    return (
      <div>
        <h2>Counter : {this.state.count}</h2>
        <p>Comment Count : {this.state.comments.length}</p>
        <input onKeyDown={this.updatecomment.bind(this)} />
        {/* <button onKeyDown={this.updatecomment.bind(this)}>Add Comment</button> */}
        <button onClick={this.updateCount.bind(this)}>+</button>
        <button onClick={this.updateCountDec.bind(this)}>-</button>
      </div>
    );
  }
}

export default Counter;
