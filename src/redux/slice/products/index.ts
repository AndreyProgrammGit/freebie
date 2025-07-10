import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getProducts: build.query<[], void>({
      query: () => `db.json`,
    }),
    getProductById: build.query<{}, number>({
      query: () => `db.json`,
      transformResponse: (response: any[], meta, arg: number) => {
        // Здесь response — это весь массив из db.json
        return response.find((item) => item.id === arg);
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
