import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChooseAddress: "",
  paymentMethod: {
    method: "",
    delivery: "",
  },
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    chooseAddress: (state, action) => {
      state.isChooseAddress = action.payload;
    },
    chooseShipmentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { chooseAddress, chooseShipmentMethod } = paymentSlice.actions;
