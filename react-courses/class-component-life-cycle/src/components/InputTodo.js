import React, { Component } from "react";

// InputTodo component
export default class InputTodo extends Component {
  // similar to const [title,setTitle] = useState('')
  state = { title: "" };

  //helper fn to addTodo
  addTodo = () => {
    if (this.state.title !== "") {
      // calling prop function
      this.props.addTodo(this.state.title);
    } else {
      alert("please enter something");
    }
  };

  // similar to useEffect(()=>{},[])
  componentDidMount() {
    console.log("InputTodo mounted");
  }

  render() {
    return (
      <div>
        <input
          type={"text"}
          placeholder="enter todo"
          value={this.state.title}
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.addTodo();
          }}
        >
          add todo
        </button>
      </div>
    );
  }
}
