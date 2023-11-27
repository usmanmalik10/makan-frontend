import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

const storeApi = createApi({
  reducerPath: 'storesDashbaordApi',
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
  tagTypes: ['Store'], // Define a tag type
  endpoints: (builder) => ({
    fetchStoresData: builder.query({
      query: (userId) => ({
        url: `/v1/shop/userId`,
        params: {
          limit: 10,
          page: 1,
          sortBy: 'createdAt:desc',
          userId,
        },
      }),
      providesTags: (result) => 
        result.data ? result.data.docs.map(({ id }) => ({ type: 'Store', id })) : [], 
    }),
    createStores: builder.mutation({
      query: (data) => ({
        url: `/v1/shop`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Store' }], // Invalidate the tags, causing a refetch of stores
    }),
    fetchServicesByReferral: builder.query({
      query: (referralKey) => `v1/shop/referral-service?referralKeyShop=${referralKey}`, 
    }),
  }),
});

export const { useFetchStoresDataQuery, useCreateStoresMutation , useFetchServicesByReferralQuery } = storeApi;

export default storeApi;
