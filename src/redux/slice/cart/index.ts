import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_NAME_CART } from "../../../constant";

interface Specification {
  label: string;
  icon: string;
  desc: string;
}

interface StorageOption {
  storage: string;
  isAvailable: boolean;
}

interface CartItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  discountPrice: number;
  originalPrice: number;
  buttonText: string;
  isFavorite: boolean;
  variant: string;
  availableColors: string[];
  availableStorageOptions: StorageOption[];
  specifications: Specification[];
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_CART);
      let existing: CartItem[] = [];

      if (existingRaw) {
        try {
          existing = JSON.parse(existingRaw) as CartItem[];
        } catch (e) {
          console.error("Invalid cart in localStorage", e);
        }
      }

      const found = existing.find((item) => item.id === action.payload.id);
      if (!found) {
        existing.push(action.payload);
      }

      localStorage.setItem(LOCALSTORAGE_NAME_CART, JSON.stringify(existing));
      state.cart = existing;
    },

    loadCart: (state) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_CART);
      if (existingRaw) {
        try {
          state.cart = JSON.parse(existingRaw) as CartItem[];
        } catch {
          state.cart = [];
        }
      } else {
        state.cart = [];
      }
    },
  },
});

export const { addToCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
