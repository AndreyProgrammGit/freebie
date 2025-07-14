import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slice/api/products";
import { categoriesApi } from "./slice/api/categories";
import { bannerApi } from "./slice/api/banner";
import { discountsApi } from "./slice/api/discounts";
import { cartSlice } from "./slice/cart";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
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

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
