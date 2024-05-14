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
  UPDATE__SEARCH_TERM,
} from "./actionTypes";

// Initial state object
const initialState = {
  todo: [],
  todos: [],
  filter: "ALL",
  searchTerm: "",
};

// Reducer function
const todoReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    /**
     *
     * CONSUMING CRUD APIs
     *
     *
     */
    case FETCH_TODO:
      // Reducer for fetching todos from API
      return {
        ...state,
        todos: action.payload,
      };

    case ADD_TODO_ITEM:
      // Reducer for adding a new todo item
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO_ITEM:
      // Reducer for deleting a todo item
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case ADD_TODO:
      // Adding a new todo item to the list
      return {
        todo: [...state.todo, { text: action.payload.text, completed: false }],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case TOGGLE_TODO:
      // Toggling the completion status of a todo item
      return {
        todo: state.todo.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case DELETE_TODO:
      // Deleting a todo item from the list
      return {
        todo: state.todo.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_COMPLETED:
      // Marking a todo item as completed
      return {
        todo: state.todo.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      // Marking a todo item as incomplete
      return {
        todo: state.todo.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER:
      // Updating the filter option
      return {
        todo: state.todo,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE__SEARCH_TERM:
      // Updating the search term
      return {
        todo: state.todo,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      // Marking all todo items as completed
      return {
        todo: state.todo.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
