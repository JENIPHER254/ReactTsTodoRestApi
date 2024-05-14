import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  FILTER,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  TOGGLE_TODO,
  UPDATE_TODO_ITEM,
  UPDATE__SEARCH_TERM,
} from "./actionTypes";

/**
 *
 *
 * CONSUMING GET API
 *  Async thunk action creator to fetch todos from API endpoint
 *
 *
 */

export const fetchTodos = createAsyncThunk(FETCH_TODO, async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
});

export const updateTodoItem = createAsyncThunk(
  UPDATE_TODO_ITEM,
  async ({ id, todoData }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/`, {
        id,
        ...todoData,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update todo");
    }
  }
);
/**
 *
 *
 * CONSUMING GET API
 *  Async thunk action creator to fetch todos from API endpoint
 *
 *
 */

// add item action
export const addTodoAndItem = (todoName, todoStatus) => async (dispatch) => {
  const todoData = {
    todo_item: todoName,
    todo_item_status: todoStatus,
  };

  try {
    // Dispatching the action to update the state with the new todo
    dispatch({ type: ADD_TODO, payload: { text: todoName } });

    // Sending a POST request to the API endpoint
    const response = await axios.post("http://localhost:3000/api/", todoData);

    // Dispatching the action to handle the response data
    dispatch({ type: ADD_TODO, payload: response.data });
  } catch (error) {
    // Handle error if necessary
    console.error("Failed to add todo and item:", error);
  }
};

//delete item action

export const deleteTodoItem = createAsyncThunk(DELETE_TODO, async (id) => {
  try {
    
    const response = await axios.delete(`http://localhost:3000/api/`, {
      data: { id },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete todo");
  }
});
//toggle item action
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// mark completed action
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

// mark all completed action (receives nothing)
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// mark incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

// filter action
export const filterTodo = (filter) => ({
  type: FILTER,
  payload: { filter },
});

//update search term action
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE__SEARCH_TERM,
  payload: { searchTerm },
});
