// Redux
import { devToolsEnhancer } from 'redux-devtools-extension';
// createStore makes the store. combineReducers combines all the reducers into one thing.
import { createStore, combineReducers } from 'redux';

// Reducers.
import fooReducer from './reducers/foo/foo';

// Combine all the reducers into one object.
const allReducers = combineReducers({
  foo: fooReducer,
});

const store = createStore(allReducers, devToolsEnhancer());

export default store;
