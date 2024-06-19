import { BASE_URL, X_Partner_Code } from "../../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "state/store";
import { GetRecordQueryParams, RecordData } from "state/types/table-types";

export const tableDataApi = createApi({
  reducerPath: "tableData",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    responseHandler: async (response) => {
      if (response.headers.get("Content-Type")?.includes("text/csv")) {
        // Handle CSV response
        return response.text();
      } else {
        // Handle JSON response
        return response.json();
      }
    },
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = (getState() as RootState).auth.authToken;
      const partnerCode = (getState() as RootState).auth.partnerCode;
      const partnerType = (getState() as RootState).auth.partnerType;
      const applicationType = (getState() as RootState).auth.applicationType;
      if (applicationType) headers.set("X-Application-Type", applicationType);
      if (endpoint === "downloadReport") {
        headers.set("Content-Type", "text/csv");
      }
      if (partnerType) headers.set("X-Partner-Type", partnerType);
      if (partnerCode) headers.set("X-Partner-Id", partnerCode);
      if (token) headers.set("Auth", `${token}`);
      return headers;
    },
    headers: {
      "X-Partner-Code": X_Partner_Code,
    },
  }),

  tagTypes: ["tables"],
  endpoints: (builder) => ({
    getTable: builder.query<RecordData, GetRecordQueryParams>({
      query: ({ endpoint = "record", recordName, queries }) =>
        `/${endpoint}/${recordName}${queries !== "" ? `?${queries}` : ""}`,
      providesTags: ["tables"],
    }),
    getLinkedTable: builder.query({
      query: ({ recordName, mandateId }) =>
        `/record/linkedTable/${recordName}?mandateId=${mandateId}`,
      providesTags: ["tables"],
    }),
    downloadReport: builder.query<
      Blob,
      { recordName: string; queries: string }
    >({
      query: ({ recordName, queries }) =>
        `/record/${recordName}/export${queries !== "" ? `?${queries}` : ""}`,
    }),
  }),
});

export const {
  useGetTableQuery,
  useGetLinkedTableQuery,
  useLazyDownloadReportQuery,
} = tableDataApi;
