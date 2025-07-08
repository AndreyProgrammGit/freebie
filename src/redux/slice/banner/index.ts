import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getBanner: build.query<[], void>({
      query: () => "banner.json",
    }),
  }),
});

export const { useGetBannerQuery } = bannerApi;
