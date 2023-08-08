import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  googleUserReducer  from '../features/googleUserSlice';
import  favouritesReducer  from '../features/favouriteArticlesSlice';

export const store = configureStore({
  reducer: {
    googleUser: googleUserReducer,
    favouriteArticles: favouritesReducer,
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
