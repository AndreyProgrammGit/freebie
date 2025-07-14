import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { LOCALSTORAGE_NAME_CART } from "../../../constant";
import type { Data } from "../../../pages/ProductPage/ProductPage";

interface CartState {
  cart: Data[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Data | undefined>) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_CART);
      let existing: Data[] = [];

      if (existingRaw) {
        try {
          existing = JSON.parse(existingRaw) as Data[];
        } catch (e) {
          console.error("Invalid cart in localStorage", e);
        }
      }

      const found = existing.find((item) => item.id === action.payload!.id);
      if (!found) {
        existing.push({
          ...action.payload!,
          quantity: 1,
          quantityPrice: action.payload!.price,
        });
      }

      localStorage.setItem(LOCALSTORAGE_NAME_CART, JSON.stringify(existing));
      state.cart = existing;
    },

    loadCart: (state) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_CART);
      if (existingRaw) {
        try {
          state.cart = JSON.parse(existingRaw) as Data[];
        } catch {
          state.cart = [];
        }
      } else {
        state.cart = [];
      }
    },
    removeCart: (state, action) => {
      const find = state.cart.find((item) => item.id === action.payload);
      if (find) {
        state.cart = state.cart.filter((item) => item.id !== find.id);
        localStorage.setItem(
          LOCALSTORAGE_NAME_CART,
          JSON.stringify(state.cart)
        );
      }

      // console.log(JSON.parse(JSON.stringify(find.id)));
    },
    addOne: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity! + 1,
            quantityPrice: +(item.price + item.quantityPrice!).toFixed(2),
          };
        } else {
          return item;
        }
      });
      localStorage.setItem(LOCALSTORAGE_NAME_CART, JSON.stringify(state.cart));
    },
    removeOne: (state, action) => {
      state.cart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity! - 1,
              quantityPrice: +(item.quantityPrice! - item.price).toFixed(2),
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity! > 0);
      localStorage.setItem(LOCALSTORAGE_NAME_CART, JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, loadCart, removeCart, addOne, removeOne } =
  cartSlice.actions;
export default cartSlice.reducer;
