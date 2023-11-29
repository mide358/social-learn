import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '../features/api/apiSlice';
import authReducer from '../features/auth/authSlice';
import colorReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';
import postReducer from '../features/blog/postSlice';

export const store = configureStore({
  reducer: {
    color: colorReducer,
    login: loginReducer,
    posts: postReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);
