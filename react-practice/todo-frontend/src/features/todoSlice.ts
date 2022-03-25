import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  deleteTodoRequest,
  getTodoRequest,
  getTodosRequest,
  insertTodoRequest,
  updateTodoRequest,
} from "../api/todo.api";

// exporting ITodo interface
export interface ITodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

let todos: ITodo[] = [];

// creating initial state
const initialState = { todos, isLoading: false };

/**
 * async action helpers
 */
export const getTodosAsyncThunk = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getTodosRequest();
      return todos;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);

export const getTodoAsyncThunk = createAsyncThunk(
  "todos/getTodo",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const todo = await getTodoRequest(id);
      return todo;
    } catch (error) {
      rejectWithValue(null);
    }
  }
);

export const addTodoAsyncThunk = createAsyncThunk(
  "todos/addTodo",
  async (
    { title, description }: { title: string; description: string },
    { rejectWithValue }
  ) => {
    try {
      const todo = await insertTodoRequest({ description, title });
      return todo;
    } catch (error) {
      rejectWithValue(null);
    }
  }
);

export const deleteTodoAsyncThunk = createAsyncThunk(
  "todos/deleteTodo",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const todo = await deleteTodoRequest(id);
      return todo;
    } catch (error) {
      rejectWithValue(null);
    }
  }
);

export const updateTodoAsyncThunk = createAsyncThunk(
  "todos/updateTodo",
  async (
    {
      completed,
      description,
      id,
      title,
    }: { id: string; title: string; description: string; completed: boolean },
    { rejectWithValue }
  ) => {
    try {
      const todo = await updateTodoRequest({
        completed,
        id,
        title,
        description,
      });
      return todo;
    } catch (error) {
      rejectWithValue(null);
    }
  }
);

// todoSlice
export const { reducer } = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  //   handling async requests
  extraReducers: (
    builder: ActionReducerMapBuilder<{
      todos: ITodo[];
      isLoading: boolean;
    }>
  ) => {
    builder.addCase(getTodosAsyncThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getTodoAsyncThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addTodoAsyncThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteTodoAsyncThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateTodoAsyncThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getTodosAsyncThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    });

    builder.addCase(getTodoAsyncThunk.fulfilled, (state, { payload }) => {
      if (state.todos.filter((todo) => todo._id === payload._id) === []) {
        state.todos.concat(payload);
      }
      state.isLoading = false;
    });

    builder.addCase(addTodoAsyncThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.concat(payload);
    });

    builder.addCase(deleteTodoAsyncThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo._id !== payload._id);
    });

    builder.addCase(updateTodoAsyncThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        if (todo._id === payload._id) {
          todo = payload;
        }
        return todo;
      });
    });
  },
});
