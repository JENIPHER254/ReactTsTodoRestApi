import {ADD_TODO, DELETE_TODO, FILTER, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, TOGGLE_TODO, UPDATE__SEARCH_TERM} from './actionTypes'


// add item action
export const addTodo = (todoItem) =>({
    type: ADD_TODO,
    payload: {todoItem},

});

//toggle item action
export const toggleTodo = (id)=>({
    type: TOGGLE_TODO,
    payload: {id}
})

//delete item action
export const deleteTodo =(id)=>({
    type: DELETE_TODO,
    payload:{id}
})

// mark completed action
export const markCompleted =(id)=>({
    type: MARK_COMPLETED,
    payload: id
})

// mark all completed action (receives nothing)
export const markAllCompleted =()=>({
    type: MARK_ALL_COMPLETED,
})

// mark incomplete 
export const markIncomplete = (id)=>({
    type: MARK_INCOMPLETE,
    payload: {id}
})

// filter action
export const filter = (filter)=>({
    type: FILTER,
    payload: {filter}
})

//update search term action
export const updateSearchTerm=(searchTerm)=>({
    type:UPDATE__SEARCH_TERM,
    payload: {searchTerm}
})