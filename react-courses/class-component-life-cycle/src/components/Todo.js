import React, { Component } from "react";

export default class Todo extends Component {
  // similar to clean up methods in useEffect
  componentWillUnmount() {
    console.log("todo unmounted");
  }

  render() {
    return (
      <div>
        <span>{this.props.todo.title}</span>
        <button
          onClick={() => {
            this.props.deleteTodo(this.props.todo.id);
          }}
        >
          delete
        </button>
      </div>
    );
  }
}
