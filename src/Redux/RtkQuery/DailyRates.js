// rtkQuery.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

const dailyRatesApi = createApi({
  reducerPath: 'api',
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
    updateDailyRates: builder.mutation({
      query: (dailyRates) => ({
        url: '/v1/daily-rates',
        method: 'POST',
        body: dailyRates,
      }),
    }),
    fetchDailyRates: builder.query({
        query: () => '/v1/daily-rates',
      }),
    // ... other endpoints ...
  }),
});

// Export hooks for usage in functional components
export const { useUpdateDailyRatesMutation  ,useFetchDailyRatesQuery} = dailyRatesApi;

export default dailyRatesApi;
