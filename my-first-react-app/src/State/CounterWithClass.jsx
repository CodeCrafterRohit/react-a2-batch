import React, { Component } from "react";

export default class CounterWithClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  //   increment = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter Demo By Using Class Based Component</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}
