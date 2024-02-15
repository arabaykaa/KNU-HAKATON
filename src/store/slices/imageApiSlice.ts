import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApiSlice = createApi({
  reducerPath: "imageApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_MAIN_API }),
  endpoints: (build) => ({
    createTextByImage: build.mutation<ImageToTextResponse, ImageToTextRequest>({
      query: (body) => ({
        url: "image",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateTextByImageMutation } = imageApiSlice;
