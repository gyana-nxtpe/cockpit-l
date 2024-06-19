import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, X_Partner_Code } from '../../constants';
import { GetRecordQueryParams, RecordData } from 'state/types/table-types';

export const auditLogDataApi = createApi({
  reducerPath: 'tableData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers:{
    'X-Partner-Code': X_Partner_Code
  } }),
  tagTypes: ['tables'],
  endpoints: builder => ({
    getAuditlog: builder.query<RecordData, GetRecordQueryParams>({
      query: ({recordName,queries}) => 
      `/audit/${recordName}?${queries}`,
      providesTags:['tables']
    })
  })
})


export const { useGetAuditlogQuery } = auditLogDataApi;
