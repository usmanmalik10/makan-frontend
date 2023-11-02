import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

const storeApi = createApi({
  reducerPath: 'storesDashbaordApi',
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
  }),
});

export const { useFetchStoresDataQuery, useCreateStoresMutation } = storeApi;

export default storeApi;
