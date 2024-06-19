import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'state/store';
import { BASE_URL } from '../../constants';

export const FspLogoApi = createApi({
  reducerPath: 'fspLogo',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.authToken
      if (token) headers.set('Auth', `${token}`)
      return headers
    }, headers:{
      'X-Partner-Code': 'partner-profile'
    }
   }),
  endpoints: builder => ({
    getFspLogo: builder.query({
      query: (params) => `/fsp-profile/${params.fspId}`,
    })
  })
})


export const { useGetFspLogoQuery } = FspLogoApi;
