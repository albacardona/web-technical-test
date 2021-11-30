import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { reducers } from './reducers/index';

export const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);
