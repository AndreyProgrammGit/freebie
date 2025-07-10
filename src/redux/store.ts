import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slice/products";
import { categoriesApi } from "./slice/categories";
import { bannerApi } from "./slice/banner";
import { discountsApi } from "./slice/discounts";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [discountsApi.reducerPath]: discountsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(bannerApi.middleware)
      .concat(discountsApi.middleware),
});
