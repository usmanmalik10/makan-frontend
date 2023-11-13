import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

export const serviceApi = createApi({
  reducerPath: 'serviceMainPageApi',
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
  endpoints: (builder) => ({
    getServicesData: builder.query({
      query: ({ category, limit = 3, page = 1, sortBy = 'createdAt:desc' }) => ({
        url: `v1/service`,
        params: { category, limit, page, sortBy },
      }),
    }),
  }),
});

export const { useGetServicesDataQuery } = serviceApi;
export default serviceApi;