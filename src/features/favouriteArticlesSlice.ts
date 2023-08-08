import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { ImportedArticle } from '../types/importedArticle';

export interface FavouriteArticlesState {
  favouriteArticles: ImportedArticle[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FavouriteArticlesState = {
  favouriteArticles: [],
  status: 'idle',
};

export const favouriteArticlesSlice = createSlice({
  name: 'favouriteArticles',
  initialState,
  reducers: {
    addFavouriteArticle: (state: FavouriteArticlesState, action: PayloadAction<ImportedArticle>) => {
      state.favouriteArticles.push(action.payload);
    },
    deleteFavouriteArticles: (state: FavouriteArticlesState, action: PayloadAction<ImportedArticle>) => {
      // Get the elements to delete from the payload
      const elementsToDelete = action.payload;
      console.log('elementsToDelete', elementsToDelete);
      console.log('state.favouriteArticles', state.favouriteArticles);
      


      // Filter out the elements to delete from the favouriteArticles array
      const updatedFavouriteArticles = state.favouriteArticles.filter(
        (article) => article == elementsToDelete
      );

      // Update the favouriteArticles array in the state
      state.favouriteArticles = updatedFavouriteArticles;
    },
  },
});

export const { addFavouriteArticle, deleteFavouriteArticles } = favouriteArticlesSlice.actions;

export const selectFavouriteArticles = (state: RootState) => state.favouriteArticles.favouriteArticles;

export default favouriteArticlesSlice.reducer;


