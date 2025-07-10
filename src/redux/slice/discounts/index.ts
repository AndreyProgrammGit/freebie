import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const discountsApi = createApi({
  reducerPath: "discountsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getDiscounts: build.query<[], void>({
      query: () => `discounts.json`,
    }),
  }),
});

export const { useGetDiscountsQuery } = discountsApi;
