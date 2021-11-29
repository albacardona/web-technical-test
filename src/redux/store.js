import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './reducers/index';

export const store = configureStore({
  reducer: reducers,
  middleware: [
    thunk,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});
