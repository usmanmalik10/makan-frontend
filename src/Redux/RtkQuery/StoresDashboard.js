// shopsAPI.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

// Define your API endpoint
const storeApi = createApi({
  reducerPath : 'storesDashbaord',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_BASE_URL, 
    prepareHeaders: (headers, { getState }) => {
   
        
      const token =  localStorage.getItem('accessToken');

      if (token) {
        // Include the Bearer token in the headers
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
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
    }),
  }),
});

// Export the API and endpoints
export const { useFetchStoresDataQuery } = storeApi;

export default storeApi;
