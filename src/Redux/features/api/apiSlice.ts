import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../../utils/urls";
import { IMatch } from "../../../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getMatches: builder.query<
      { data: { matches: IMatch[] } },
      void
    >({
      query: () => "fronttemp",
    }),
  }),
});

export const { useGetMatchesQuery } = apiSlice;
