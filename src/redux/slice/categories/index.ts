import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getCategories: build.query<[], void>({
      query: () => "categories.json",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
