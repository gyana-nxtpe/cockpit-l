import { RootState } from "../store";
import { Internal_BASE_URL, Internal_X_Partner_Code } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API service
const configServiceApi = createApi({
  reducerPath: "configApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Internal_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const partnerCode = (getState() as RootState).auth.partnerCode;
      const partnerType = (getState() as RootState).auth.partnerType;
      const applicationType = (getState() as RootState).auth.applicationType;
      const authToken = (getState() as RootState).auth.authToken;
      if (applicationType) headers.set("X-Application-Type", applicationType);
      if (partnerType) headers.set("X-Partner-Type", partnerType);
      if (partnerCode) headers.set("X-Partner-Id", partnerCode);
      if (authToken) headers.set("Authorization", authToken);
      return headers;
    },
    headers: {
      "X-Partner-Code": Internal_X_Partner_Code,
    },
  }),
  endpoints: (builder) => ({
    getLatestConfigByTopic: builder.query({
      query: ({ partnerId, topic }: { partnerId: string; topic: string }) => ({
        url: `partner-panel/cockpitConfig/v1/partnerId/${partnerId}/topic/${topic}`,
        method: "GET",
      }),
    }),

    getConfigByRoleAndTopic: builder.query({
      query: ({
        partnerId,
        topic,
        version,
      }: {
        partnerId: string;
        topic: string;
        version: string;
      }) => ({
        url: `partner-panel/cockpitConfig/v1/partnerId/${partnerId}/topic/${topic}/version/${version}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetConfigByRoleAndTopicQuery,
  useGetLatestConfigByTopicQuery,
} = configServiceApi;

export default configServiceApi;
