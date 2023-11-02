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
  tagTypes: ['StrategicSalePartner'], // Define a tag for the strategicSalesPartner
  endpoints: (builder) => ({
    // Fetch data from /endpoint
    fetchStrategicSalePartner: builder.query({
      query: () => 'v1/strategic-sale-partners', 
      providesTags: (result) => 
        result.data ? result.data.docs.map(({ id }) => ({ type: 'StrategicSalePartner', id })) : [], 
    }),
    // Create a new strategic sale partner
    createStrategicSalePartner: builder.mutation({
      query: (data) => ({
        url: 'v1/strategic-sale-partners',
        method: 'POST',
        body: data,
      }),
      // Invalidate the fetched data after creating a new strategic sale partner
      invalidatesTags: [{ type: 'StrategicSalePartner' }],
    }),
  }),
});

// Destructure the useCreateStrategicSalePartnerMutation and useFetchDataQuery hooks for component use
export const { useCreateStrategicSalePartnerMutation, useFetchStrategicSalePartnerQuery } = strategicSalesPartnerApi;

export default strategicSalesPartnerApi;
