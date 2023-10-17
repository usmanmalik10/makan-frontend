import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: USERS_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getShopsData: builder.query({
      query: ({ category, limit = 3, page = 1, sortBy = 'createdAt:desc' }) => ({
        url: `v1/shop`,
        params: { category, limit, page, sortBy },
      }),
    }),
  }),
});

export const { useGetShopsDataQuery } = storeApi;
export default storeApi;