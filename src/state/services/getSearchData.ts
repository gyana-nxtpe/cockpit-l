import { BASE_URL, X_Partner_Code } from "../../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "state/store";
import { GetRecordQueryParams, RecordData } from "state/types/table-types";

export const searchDataApi = createApi({
  reducerPath: "searchData",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const partnerCode = (getState() as RootState).auth.partnerCode;
      const partnerType = (getState() as RootState).auth.partnerType;
      const applicationType = (getState() as RootState).auth.applicationType;
      const authToken = (getState() as RootState).auth.authToken;
      if (applicationType) headers.set("X-Application-Type", applicationType);
      if (partnerType) headers.set("X-Partner-Type", partnerType);
      if (partnerCode) headers.set("X-Partner-Id", partnerCode);
      if (authToken) headers.set("Auth", authToken);
      return headers;
    },
    headers: {
      "X-Partner-Code": X_Partner_Code,
    },
  }),
  tagTypes: ["search"],
  endpoints: (builder) => ({
    search: builder.query<RecordData, GetRecordQueryParams>({
      query: ({ recordName, queries }) =>
        `/search/${recordName}?query=${queries}`,
      providesTags: ["search"],
    }),
  }),
});

export const { useSearchQuery } = searchDataApi;
