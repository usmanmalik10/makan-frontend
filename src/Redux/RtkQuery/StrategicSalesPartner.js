// shopsAPI.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

const strategicSalesPartnerApi = createApi({
  reducerPath: 'strategicSalesPartner',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        // Include the Bearer token in the headers
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Adding a createStrategicSalePartner endpoint for POST request
    createStrategicSalePartner: builder.mutation({
      query: (data) => ({
        url: 'v1/strategic-sale-partners',
        method: 'POST',
        body: data
      }),
    }),
  }),
});

// Destructure the useCreateStrategicSalePartnerMutation hook for component use
export const { useCreateStrategicSalePartnerMutation } = strategicSalesPartnerApi;

export default strategicSalesPartnerApi;
