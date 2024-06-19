import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, Theme_X_partner_code } from '../../constants';

export const partnerThemeApi = createApi({
  reducerPath: 'partnerTheme',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers:{
    'X-Partner-Code': Theme_X_partner_code
  } }),
  endpoints: builder => ({
    getPartnerTheme: builder.query({
      query: () => `/partner-profile/merchants/theme`
    })
  })
})


export const { useGetPartnerThemeQuery } = partnerThemeApi
