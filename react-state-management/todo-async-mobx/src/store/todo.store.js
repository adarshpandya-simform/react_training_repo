import { nanoid } from "nanoid";
import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

class TodoList {
  // state
  todos = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // actions
  loadTodos = async () => {
    this.isLoading = true;
    await axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => {
        res.data = res.data.map((todo) => ({
          id: todo.id,
          completed: todo.completed,
          title: todo.title,
        }));
        runInAction(() => {
          this.todos = res.data;
          this.isLoading = false;
        });
      });
  };

  addTodo = (title) => {
    this.todos.push({ id: nanoid(), title, completed: false });
  };

  deleteTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  checkTodo = (id) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };

  // computed / derived props
  get finishedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get unfinishedTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}

export default new TodoList();
