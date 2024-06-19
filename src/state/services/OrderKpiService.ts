import { RootState } from "../store";
import { BASE_URL, X_Partner_Code } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API service
const OrderKpiService = createApi({
  reducerPath: "orderKpiService",
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
  endpoints: (builder) => ({
    // Endpoint to fetch merchant list
    fetchTotalOrders: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "kpi/totalOrders",
        params: {
          startDate,
          endDate,
        },
      }),
    }),
    fetchTotalInitialsOrders: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "kpi/totalInitialOrders",
        params: {
          startDate,
          endDate,
        },
      }),
    }),
    fetchPendingOrders: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "kpi/totalPendingOrders",
        params: {
          startDate,
          endDate,
        },
      }),
    }),
    fetchTotalSuccessOrders: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "kpi/totalSuccessOrders",
        params: {
          startDate,
          endDate,
        },
      }),
    }),
    fetchTotalFailedOrders: builder.query({
      query: ({ startDate, endDate }) => ({
        url: "kpi/totalFailedOrders",
        params: {
          startDate,
          endDate,
        },
      }),
    }),
  }),
});

export const {
  useFetchTotalOrdersQuery,
  useFetchPendingOrdersQuery,
  useFetchTotalFailedOrdersQuery,
  useFetchTotalInitialsOrdersQuery,
  useFetchTotalSuccessOrdersQuery,
} = OrderKpiService;

export default OrderKpiService;
