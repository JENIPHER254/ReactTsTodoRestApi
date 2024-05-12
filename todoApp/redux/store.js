import { createStore} from 'redux';
import todoReducer from './reducers';

/**
 * connecting app to db via api
 * 
 * step1: import middle ware
 */

// connect with browser redux extension
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(todoReducer, composeWithDevTools());

export default store;


