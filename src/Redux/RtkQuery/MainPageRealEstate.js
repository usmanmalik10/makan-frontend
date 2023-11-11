import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_BASE_URL } from '../../Components/constants/config/config.dev';

export const mainPageRealEstateApi = createApi({
  reducerPath: 'realEstateMainPageApi',
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