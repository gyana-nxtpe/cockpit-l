import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, X_Partner_Code } from '../../constants';

export const authDataApi = createApi({
  reducerPath: 'authData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers:{
    'X-Partner-Code': X_Partner_Code
  } }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (body) =>({
          url:`/auth/login`,
          method: 'POST',
          body,
      }) 
      
    })
  })
})


export const { useLoginMutation } = authDataApi;
