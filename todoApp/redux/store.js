import { createStore } from "redux";
import todoReducer from "./reducers";

/**
 * connecting app to db via api
 *
 * step1: logger for getting easy system logs
 * step2: install axios
 */
import logger from "react-logger";
console.log(logger);
// connect with browser redux extension
import { composeWithDevTools } from "@redux-devtools/extension";
const store = createStore(todoReducer, composeWithDevTools());

export default store;
