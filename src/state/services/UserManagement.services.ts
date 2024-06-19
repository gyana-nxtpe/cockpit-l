import { RootState } from "../store";
import { BASE_URL, X_Partner_Code } from "@/constants";
import { createUserSchema } from "@/lib/schemas/UserManagementSchema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as z from "zod";

// Define the base API service
const UserManagementService = createApi({
  reducerPath: "userManagementUM",
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
      if (authToken) headers.set("Authorization", authToken);
      return headers;
    },
    headers: {
      "X-Partner-Code": X_Partner_Code,
    },
  }),
  endpoints: (builder) => ({
    // Endpoint to fetch merchant list
    fetchMerchantList: builder.query({
      query: () => ({
        url: "partner-profile/merchant-profiles/list?page=0&size=100",
        headers: {
          "X-Partner-Code": "demo-fe",
        },
      }),
    }),

    getAllRoles: builder.query({
      query: ({ name, partnerId, page, size, sort }) => ({
        url: `auth/v2/roles`,
        params: {
          name,
          partnerId,
          page,
          size,
          sort,
        },
      }),
    }),

    createUser: builder.mutation({
      query: (body: z.infer<typeof createUserSchema>) => ({
        url: `auth/v2/create-user`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useFetchMerchantListQuery,
  useGetAllRolesQuery,
  useCreateUserMutation,
} = UserManagementService;

export default UserManagementService;
