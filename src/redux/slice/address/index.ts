import { createSlice } from "@reduxjs/toolkit";
import { LOCALSTORAGE_NAME_ADDRESS } from "../../../constant";

interface Address {
  address: {
    title: string;
    address: string;
    phoneNumber: string;
  }[];
}

const initialState: Address = {
  address: [],
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addToLocalStorage: (state, action) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_ADDRESS);
      let existing: any = [];

      if (existingRaw) {
        try {
          existing = JSON.parse(existingRaw!);
        } catch (e) {
          console.error("Invalid cart in localStorage", e);
        }
      }

      const found = existing.find(
        (item: any) => item.title === action.payload!.title
      );

      if (!found) {
        existing.push({
          ...action.payload!,
        });
      }

      localStorage.setItem(LOCALSTORAGE_NAME_ADDRESS, JSON.stringify(existing));
      state.address = existing;
    },
    loadStorage: (state) => {
      const existingRaw = localStorage.getItem(LOCALSTORAGE_NAME_ADDRESS);
      if (existingRaw) {
        state.address = JSON.parse(existingRaw);
      }
    },
    removeOne: (state, action) => {
      console.log(action.payload);
      state.address = state.address.filter(
        (item) => item.title !== action.payload
      );
      localStorage.setItem(
        LOCALSTORAGE_NAME_ADDRESS,
        JSON.stringify(state.address)
      );
    },
  },
});

export const { addToLocalStorage, loadStorage, removeOne } =
  addressSlice.actions;
