import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getProducts: build.query<[], void>({
      query: () => `db.json`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
