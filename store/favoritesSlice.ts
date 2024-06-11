import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: ICart[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<ICart>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
    },
    toggleFavorite(state, action: PayloadAction<ICart>) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (productId) => productId !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
