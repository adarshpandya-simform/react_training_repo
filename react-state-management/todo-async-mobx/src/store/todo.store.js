import { nanoid } from "nanoid";
import { makeAutoObservable, runInAction, autorun } from "mobx";
import axios from "axios";

// TodoStore
class TodoList {
  // state
  todos = [];
  isLoading = false;
  todoCount = 0;

  // constructor
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
          this.todoCount = this.todos.length;
        });
      });
  };

  addTodo = (title) => {
    this.todos.push({ id: nanoid(), title, completed: false });
    this.todoCount = this.todos.length;
  };

  deleteTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todoCount = this.todos.length;
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

const todoStore = new TodoList();

// reactions
autorun(() => {
  console.log("updated todos count: " + todoStore.todoCount);
});

autorun(() => {
  console.log("loading state: " + todoStore.isLoading);
});

export default todoStore;
