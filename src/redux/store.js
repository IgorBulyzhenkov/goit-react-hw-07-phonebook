import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userContacts from './contact-reduce';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: userContacts },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
