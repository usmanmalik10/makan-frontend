import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

export const mainPageRealEstateApi = createApi({
  reducerPath: 'realEstateMainPageApi',
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
    getRealEstateData: builder.query({
      query: ({ category, subCategory, limit = 3, page = 1, sortBy = 'createdAt:desc' }) => ({
        url: `v1/real-estate`,
        params: { category, subCategory, limit, page, sortBy  },
      }),
    }),
    getRealEstateUserData: builder.query({
      query: ({ category, subCategory, limit = 3, page = 1, sortBy = 'createdAt:desc' , userId }) => ({
        url: `v1/real-estate/userId`,
        params: { category, subCategory, limit, page, sortBy ,    userId: localStorage.getItem("Userid") },
      }),
    }),
  }),
});

export const { useGetRealEstateDataQuery , useGetRealEstateUserDataQuery } = mainPageRealEstateApi;
export default mainPageRealEstateApi;