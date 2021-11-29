import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
   
  },
  middleware: [
    thunk,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});
