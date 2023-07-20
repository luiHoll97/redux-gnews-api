import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  googleUserReducer  from '../features/googleUserSlice';

export const store = configureStore({
  reducer: {
    googleUser: googleUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
