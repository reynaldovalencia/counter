import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <p>The current count is: </p>
        <div className="counter">{this.state.count}</div>
        <button className="button button1" onClick={this.increment}>
          Increment
        </button>
        <button className="button button2" onClick={this.decrement}>
          Decrement
        </button>
        <button className="button button3" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
