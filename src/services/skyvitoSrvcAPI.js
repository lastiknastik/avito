import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SKYVITO_API_BASE_URL } from "../constants";
import { getAccessToken } from "../libs/auth";

//builds query string including only real == included parameters
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
    getAdsById: builder.query({
      query: ({ id }) => {
        return {
          url: `ads/${id}`,
          method: "GET",
          headers: { Accept: "application/json" },
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        const accessTokenObj = getAccessToken();

        return {
          url: "user",
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessTokenObj?.value}`,
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
    patchUser: builder.mutation({
      query: (user) => {
        const accessTokenObj = getAccessToken();

        return {
          url: "user",
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${accessTokenObj.value}`,
          },
          body: user,
        };
      },
      invalidatesTags: ["GetUser"],
    }),
    postUserAvatar: builder.mutation({
      query: ({ avatarImg }) => {
        //TODO: fix. in swagger the image passed as a binary file, here it's just a binary stream
        const accessTokenObj = getAccessToken();
        const formData = new FormData();
        formData.append("file_to_upload", avatarImg);

        return {
          url: "user/avatar",
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessTokenObj.value}`,
          },
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ["GetUser"],
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
    putRefreshTokens: builder.mutation({
      query: ({ accessToken, refreshToken }) => {
        return {
          url: "auth/login",
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: {
            access_token: accessToken,
            refresh_token: refreshToken,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetAdsByIdQuery,
  usePostAuthLoginMutation,
  usePostAuthRegisterMutation,
  usePatchUserMutation,
  useGetUserQuery,
  usePostUserAvatarMutation,
  usePutRefreshTokensMutation,
} = skyvitoApi;
