import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ADD_TODO,
  ADD_TODO_ITEM,
  DELETE_TODO,
  DELETE_TODO_ITEM,
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

export const fetchTodos = createAsyncThunk(
  FETCH_TODO,
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
  }
);

export const deleteTodoItem = createAsyncThunk(
  DELETE_TODO_ITEM,
  async (id) => {
    try {
      console.log(id)
      const response = await axios.delete(`http://localhost:3000/api/`,{ data: { id } });
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete todo');
    }
  }
);

export const addTodoItem = createAsyncThunk(
  ADD_TODO_ITEM,
  async (todoData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/', todoData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add todo');
    }
  }
);

export const updateTodoItem = createAsyncThunk(
  UPDATE_TODO_ITEM,
  async ({ id, todoData }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/`, { id, ...todoData });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update todo');
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
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

//toggle item action
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

//delete item action
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
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
