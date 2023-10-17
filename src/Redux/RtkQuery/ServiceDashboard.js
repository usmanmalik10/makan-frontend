// servicesAPI.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

// Define your API endpoint
const serviceApi = createApi({
  reducerPath :'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_BASE_URL, // Adjust the base URL accordingly
    prepareHeaders: (headers, { getState }) => {
      // Get the token from your Redux store or localStorage
      const token = localStorage.getItem('accessToken');

      if (token) {
        // Include the Bearer token in the headers
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchServicesData: builder.query({
      query: (userId) => ({
        url: `/v1/service/userId`,
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
export const { useFetchServicesDataQuery } = serviceApi;

export default serviceApi;
