import React, { Component } from "react";
import DisplayTodo from "./components/DisplayTodo";
import InputTodo from "./components/InputTodo";
import { nanoid } from "nanoid";

// class components
export default class App extends Component {
  // similar to const [todos,setTodos] = useState([])
  state = { todos: [] };

  // similar to useEffect(()=>{},[])
  componentDidMount() {
    // similar to setTodos()
    this.setState({
      todos: [
        { id: nanoid(), title: "item1" },
        { id: nanoid(), title: "item2" },
        { id: nanoid(), title: "item3" },
      ],
    });
  }

  // addTodo helper fn
  addTodo = (title) => {
    this.setState({ todos: [...this.state.todos, { id: nanoid(), title }] });
  };

  // deleteTodo helper fn
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div>
        <InputTodo addTodo={this.addTodo} />
        <DisplayTodo deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    );
  }
}
