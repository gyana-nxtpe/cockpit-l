import { BASE_URL, X_Partner_Code } from "../../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "state/store";

export const kpiDataApi = createApi({
  reducerPath: "kpiData",
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
  tagTypes: ["Kpi"],
  endpoints: (builder) => ({
    getKpi: builder.query({
      query: (params) => `/kpi/${params.kpiname}?${params.queries}`,
      providesTags: ["Kpi"],
    }),
  }),
});

export const { useGetKpiQuery } = kpiDataApi;
