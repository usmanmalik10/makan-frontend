// shopsAPI.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

const strategicSalesPartnerApi = createApi({
  reducerPath: 'strategicSalesPartner',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      let tokens =  localStorage.getItem('tokens');
    if(!tokens ) return headers;
    let accessToken =  JSON.parse(tokens).access.token
    
    if (accessToken) {
      // Include the Bearer token in the headers
      headers.set('authorization', `Bearer ${accessToken}`);
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
    fetchStrategicSalePartnerByReferral: builder.query({
      query: (referralKey) => `v1/strategic-sale-partners/referral-shop?referralKeySSP=${referralKey}`, 
    }),
  }),
});

// Destructure the useCreateStrategicSalePartnerMutation and useFetchDataQuery hooks for component use
export const { useCreateStrategicSalePartnerMutation, useFetchStrategicSalePartnerQuery  , useFetchStrategicSalePartnerByReferralQuery} = strategicSalesPartnerApi;

export default strategicSalesPartnerApi;
