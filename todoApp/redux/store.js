import { createStore} from 'redux';
import todoReducer from './reducers';
// connect with browser redux extension
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(todoReducer, composeWithDevTools);

export default store;


