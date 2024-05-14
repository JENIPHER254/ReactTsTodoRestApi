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

    case ADD_TODO:
      // Adding a new todo item to the list
      return {
        ...state,
        todo: [
          ...state.todo,
          { text: action.payload.text, completed: false }, // Assuming the default status is false
        ],
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
      // Filter out the deleted todo from the todos array
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
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
