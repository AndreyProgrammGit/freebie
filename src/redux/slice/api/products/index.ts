import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Data } from "../../../../pages/DetailsPage/DetailsPage";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getProducts: build.query<[], void>({
      query: () => `db.json`,
    }),
    getProductById: build.query<Data, number>({
      query: () => `db.json`,
      transformResponse: (response: any[], _, arg: number) => {
        return response.find((item) => item.id === arg);
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
