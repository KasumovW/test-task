import { combineReducers, createStore } from 'redux';
import { data } from './reducer/data';

const rootReducer = combineReducers({
  data
})

export const store = createStore(rootReducer);