import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Data = {
  discount_bonuses: { id: number; bonus: number; sale: number }[];

  discount_codes: { id: number; bonus: number; sale: number }[];
};

export const orderDiscountApiSlice = createApi({
  reducerPath: "orderDiscount",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getOrderDiscount: build.query<Data, void>({
      query: () => `orderDiscount.json`,
    }),
  }),
});

export const { useGetOrderDiscountQuery } = orderDiscountApiSlice;
