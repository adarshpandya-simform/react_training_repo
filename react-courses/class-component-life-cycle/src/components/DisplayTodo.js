import React, { Component } from "react";
import Todo from "./Todo";

// DisplayTodo component
export default class DisplayTodo extends Component {
  // similar to const [length,setLength]=useState(0)
  state = { length: 0 };

  // useEffect(()=>{},[])
  componentDidMount() {
    console.log("DisplayTodo mounted");
    this.setState({ length: this.props.todos.length });
  }

  // similar to useEffect() with dependencies
  componentDidUpdate(props, prevState) {
    if (this.state.length !== this.props.todos.length) {
      this.setState({ length: this.props.todos.length });
    }
  }

  render() {
    return (
      <div>
        <p>todos count : {this.state.length}</p>
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} />
        ))}
      </div>
    );
  }
}
