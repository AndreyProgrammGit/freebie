import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_NAME_FAVORITE } from "../../../constant";

export interface Favorite {
  id: number;
  name: string;
  isFavorite: boolean;
}

const initialState: { favorite: Favorite[] } = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Favorite | undefined>) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_FAVORITE);
      let existing: Favorite[] = [];

      if (existingRaw) {
        try {
          existing = JSON.parse(existingRaw);
        } catch (e) {
          console.error("Invalid cart in localStorage", e);
        }
      }

      const found = state.favorite.find((el) => el.id === action.payload!.id);

      if (!found) {
        existing.push({
          ...action.payload!,
          isFavorite: true,
        });
      }

      localStorage.setItem(
        LOCALSTORAGE_NAME_FAVORITE,
        JSON.stringify(existing)
      );

      state.favorite = existing;
    },
    loadFavorite: (state) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_FAVORITE);
      if (existingRaw) {
        try {
          state.favorite = JSON.parse(existingRaw) as Favorite[];
        } catch {
          state.favorite = [];
        }
      } else {
        state.favorite = [];
      }
    },
    removeOne: (state, action) => {
      const found = state.favorite.find((el) => el.id === action.payload);
      if (found) {
        state.favorite = state.favorite.filter((item) => item.id !== found.id);
        localStorage.setItem(
          LOCALSTORAGE_NAME_FAVORITE,
          JSON.stringify(state.favorite)
        );
      }
    },
  },
});

export const { addToFavorite, loadFavorite, removeOne } = favoriteSlice.actions;
