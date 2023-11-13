// servicesAPI.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

// Define your API endpoint
const serviceApi = createApi({
  reducerPath :'serviceDashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_BASE_URL, // Adjust the base URL accordingly
    prepareHeaders: (headers, { getState }) => {
      // Get the token from your Redux store or localStorage
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
    addService: builder.mutation({
      query: (serviceData) => ({
        url: '/v1/service',
        method: 'POST',
        body: serviceData,
      }),
    }),

  }),
});

// Export the API and endpoints
export const { useFetchServicesDataQuery  , useAddServiceMutation} = serviceApi;

export default serviceApi;
