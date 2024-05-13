import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  FILTER,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  TOGGLE_TODO,
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
      const response = await axios.get(`http://localhost:3000/api/`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
  });
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
