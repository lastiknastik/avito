import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SKYVITO_API_BASE_URL } from "../constants";

function buildQueryString(queryParamsObj) {
  /* type of object: 
  {
    param1: value1, 
    param2: value2
  }*/
  let result = "?";

  for (const k in queryParamsObj) {
    if (queryParamsObj[k]) {
      result += `${k}=${queryParamsObj[k]}&`; //param1=value1&
    }
  }

  return result.slice(0, -1); //remove last char: ? or &
}

export const skyvitoApi = createApi({
  reducerPath: "skyvitoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SKYVITO_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: ({ user_id, sorting, page }) => {
        const queryString = buildQueryString({
          user_id: user_id,
          sorting: sorting,
          page: page,
        });

        return {
          url: `ads${queryString}`,
          method: "GET",
          headers: { Accept: "application/json" },
        };
      },
      providesTags: [{ type: "GetAds" }],
    }),
    getUser: builder.query({
      query: ({ accessToken }) => {
        return {
          url: "user",
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
      providesTags: [{ type: "GetUser" }],
    }),
    postAuthLogin: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: `auth/login`,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: {
            email,
            password,
          },
        };
      },
    }),
    postAuthRegister: builder.mutation({
      query: ({
        email,
        password,
        name,
        surname,
        city,
        role = "user",
        phone,
        id,
      }) => {
        return {
          url: "auth/register",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: {
            password,
            role,
            email,
            name,
            surname,
            phone,
            city,
            id,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAdsQuery,
  usePostAuthLoginMutation,
  usePostAuthRegisterMutation,
  useGetUserQuery,
} = skyvitoApi;
