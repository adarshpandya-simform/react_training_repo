import React, { Component } from "react";
import { CounterContext } from "../contexts/CounterContext";

export default class Counter extends Component {
  static contextType = CounterContext;
  render() {
    return (
      <div>
        <p>counter value: {this.context.count}</p>
        <button onClick={this.context.increment}>+</button>
        <button onClick={this.context.decrement}>-</button>
      </div>
    );
  }
}
