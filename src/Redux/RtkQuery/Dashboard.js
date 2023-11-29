// rtkQuery.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

const countsApi = createApi({
  reducerPath: 'countsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: USERS_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Include the authorization token if needed
      let tokens = localStorage.getItem('tokens');
      if (tokens) {
        let accessToken = JSON.parse(tokens).access.token;
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    
    fetchCounts: builder.query({
        query: () => '/v1/users/userCounts',
      }),
    // ... other endpoints ...
  }),
});

// Export hooks for usage in functional components
export const { useFetchCountsQuery } = countsApi;

export default countsApi;
