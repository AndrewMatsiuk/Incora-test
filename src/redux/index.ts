import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/reducer';
import { postReducer } from './post/reducer';

export const store = configureStore({
  reducer: { userReducer, postReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
