import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTodoRequest,
  deleteTodoRequest,
  getTodosRequest,
  updateTodoRequest,
} from "../api/todoApi";

const initialState = { todos: [], loading: false };

export const getTodosAsyncThunk = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getTodosRequest();
      return todos;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const addTodoAsyncThunk = createAsyncThunk(
  "todos/addTodo",
  async ({ title }, { rejectWithValue }) => {
    try {
      const todo = await addTodoRequest({ title });
      return todo;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const deleteTodoAsyncThunk = createAsyncThunk(
  "todos/deleteTodo",
  async ({ id }, { rejectWithValue }) => {
    try {
      const todo = await deleteTodoRequest(id);
      return todo;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const updateTodoAsyncThunk = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, title, completed }, { rejectWithValue }) => {
    try {
      const todo = await updateTodoRequest({ id, title, completed });
      return todo;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const { reducer } = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodosAsyncThunk.fulfilled]: (state, { meta, payload }) => {
      state.todos = payload.data;
      state.loading = false;
    },
    [getTodosAsyncThunk.pending]: (state) => {
      state.loading = true;
    },
    [getTodosAsyncThunk.rejected]: (state, { payload, error }) => {
      console.log(error);
      state.loading = false;
      state.todos = payload;
    },
    [addTodoAsyncThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = [...state.todos, payload.data];
    },
    [addTodoAsyncThunk.pending]: (state) => {
      state.loading = true;
    },
    [addTodoAsyncThunk.rejected]: (state, { error }) => {
      state.loading = false;
      console.log(error);
    },
    [deleteTodoAsyncThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo._id !== payload.data._id);
    },
    [deleteTodoAsyncThunk.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodoAsyncThunk.rejected]: (state, { error }) => {
      state.loading = false;
      console.log(error);
    },
    [updateTodoAsyncThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = state.todos.map((todo) => {
        if (todo._id === payload.data._id) {
          todo.title = payload.data.title;
          todo.completed = payload.data.completed;
        }
        return todo;
      });
    },
    [updateTodoAsyncThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateTodoAsyncThunk.rejected]: (state, { error }) => {
      state.loading = false;
      console.log(error);
    },
  },
});

export default reducer;
