import { RootState } from "../store";
import { BASE_URL, X_Partner_Code } from "@/constants";
import { templateTypeEnum, templateTypes } from "@/types/contract.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base API service
const contractUploadService = createApi({
  reducerPath: "contractUploadApi",
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
    // Endpoint to create a template
    createTemplate: builder.mutation({
      query: ({ data }: { data: templateTypes }) => ({
        url: "fileTemplate/v1/create",
        method: "POST",
        body: data,
      }),
    }),
    // Endpoint to update a template
    updateTemplate: builder.mutation({
      query: ({
        data,
        templateId,
      }: {
        data: templateTypes;
        templateId: string;
      }) => ({
        url: `fileTemplate/v1/templateId/${templateId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    // Endpoint to fetch a template
    fetchTemplate: builder.query({
      query: ({
        partnerId,
        templateType,
      }: {
        partnerId: string;
        templateType: templateTypeEnum;
      }) => ({
        url: `fileTemplate/v1/partnerId/${partnerId}/templateType/${templateType}`,
      }),
    }),
    // Endpoint to fetch merchant list
    fetchMerchantList: builder.query({
      query: () => ({
        url: "partner-profile/merchant-profiles/list?page=0&size=100",
        headers: {
          "X-Partner-Code": "demo-fe",
        },
      }),
    }),
    uploadContract: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: "/contract/upload/v2",
        method: "POST",
        body: formData,
       
      }),
    }),
  }),
});

export const {
  useCreateTemplateMutation,
  useUpdateTemplateMutation,
  useFetchTemplateQuery,
  useFetchMerchantListQuery,
  useUploadContractMutation,
} = contractUploadService;

export default contractUploadService;
