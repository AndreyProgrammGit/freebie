import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/db.json" }),
  endpoints: (build) => ({
    getProducts: build.query<[], void>({
      query: () => ``,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
