// rtkQuery.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

// Define your API endpoint
const estateApi = createApi({
  reducerPath :'estatePathApi',
  baseQuery: fetchBaseQuery({ baseUrl: USERS_BASE_URL , prepareHeaders: (headers, { getState }) => {
    // Get the token from your Redux store or localStorage
    const token =  localStorage.getItem('accessToken');
    
    if (token) {
      // Include the Bearer token in the headers
      headers.set('authorization', `Bearer ${token}`);
    }
    
    return headers;
  },
}), // Adjust the base URL accordingly
  endpoints: (builder) => ({
    fetchHomeForRentData: builder.query({
      query: (userId) => ({
        url: `/v1/real-estate/userId`,
        params: {
          limit: 10,
          page: 1,
          sortBy: 'createdAt:desc',
          userId,
          category: 'house',
          subCategory: 'rent',
        },
      }),
    }),
    fetchHomeForSaleData: builder.query({
      query: (userId) => ({
        url: `/v1/real-estate/userId`,
        params: {
          limit: 10,
          page: 1,
          sortBy: 'createdAt:desc',
          userId,
          category: 'house',
          subCategory: 'sale',
        },
      }),
    }),
    fetchPlotForRentData: builder.query({
      query: (userId) => ({
        url: `/v1/real-estate/userId`,
        params: {
          limit: 10,
          page: 1,
          sortBy: 'createdAt:desc',
          userId,
          category: 'plot',
          subCategory: 'rent',
        },
      }),
    }),
    fetchPlotForSaleData: builder.query({
      query: (userId) => ({
        url: `/v1/real-estate/userId`,
        params: {
          limit: 10,
          page: 1,
          sortBy: 'createdAt:desc',
          userId,
          category: 'plot',
          subCategory: 'sale',
        },
      }),
    }),
  }),
});

// Export the API and endpoints
export const {
  useFetchHomeForRentDataQuery,
  useFetchHomeForSaleDataQuery,
  useFetchPlotForRentDataQuery,
  useFetchPlotForSaleDataQuery,
} = estateApi;

export default estateApi;
