import React from "react";
//ES5
const CounterE5 = React.createClass({
  getInitialState: function () {
    return { count: 1 };
  },
  changeCounter: function () {
    this.setState({
      count: this.state.count++,
    });
  },
  render: function () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.changeCounter}>+</button>
      </div>
    );
  },
});

export default CounterE5;
