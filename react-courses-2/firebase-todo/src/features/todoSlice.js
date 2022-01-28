import { createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.config";

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos(state, action) {
      state.todos = action.payload;
    },

    deleteTodo(state, action) {
      deleteDoc(doc(db, "todos", action.payload)).then(
        (state.todos = state.todos.filter(
          (todo) => todo.doc_id !== action.payload
        ))
      );
    },

    checkTodo(state, action) {
      updateDoc(doc(db, "todos", action.payload.doc_id), {
        completed: action.payload.completed,
      }).then(
        (state.todos = state.todos.map((todo) => {
          if (todo.doc_id === action.payload.doc_id) {
            todo.completed = action.payload.completed;
          }
          return todo;
        }))
      );
    },

    addTodo(state, action) {
      addDoc(collection(db, "todos"), {
        title: action.payload,
        completed: false,
      }).then((doc) => {
        state.todos.push({
          doc_id: doc.id,
          title: action.payload,
          completed: false,
        });
      });
    },
  },
});

export const { loadTodos, addTodo, deleteTodo, checkTodo } = todoSlice.actions;

export const reducer = todoSlice.reducer;
