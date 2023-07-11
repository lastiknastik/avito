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
      providesTags: [{ type: "GetAdsById" }],
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
        const accessTokenObj = getAccessToken();
        const formData = new FormData();
        formData.append("file", avatarImg);

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
    postCreateAdv: builder.mutation({
      query: ({ title, description, price, imgs }) => {
        const accessTokenObj = getAccessToken();

        if (Array.isArray(imgs) && imgs.length > 0) {
          const queryString = buildQueryString({
            title,
            description,
            price,
          });

          const formData = new FormData();
          for (const img of imgs) {
            formData.append("files", img.file);
          }

          return {
            url: `ads${queryString}`,
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessTokenObj.value}`,
            },
            body: formData,
            formData: true,
          };
        } else {
          return {
            url: `adstext`,
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessTokenObj.value}`,
              "Content-Type": "application/json",
            },
            body: {
              title,
              description,
              price,
            },
          };
        }
      },
      invalidatesTags: ["GetAds", "GetMyAds"],
    }),
    getMyAds: builder.query({
      query: ({ user_id, sorting, page }) => {
        const queryString = buildQueryString({
          user_id: user_id,
          sorting: sorting,
          page: page,
        });

        const accessTokenObj = getAccessToken();

        return {
          url: `ads/me${queryString}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessTokenObj.value}`,
          },
        };
      },
      providesTags: [{ type: "GetMyAds" }],
    }),
    deleteAdvById: builder.mutation({
      query: ({ advId }) => {
        const accessTokenObj = getAccessToken();

        return {
          url: `ads/${advId}`,
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessTokenObj.value}`,
          },
        };
      },
      invalidatesTags: ["GetAds", "GetMyAds"],
    }),
    patchAdvById: builder.mutation({
      query: ({ advId, title, description, price }) => {
        const accessTokenObj = getAccessToken();

        return {
          url: `ads/${advId}`,
          method: "PATCH",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessTokenObj.value}`,
            "Content-Type": "application/json",
          },
          body: {
            title,
            description,
            price,
          },
        };
      },
      invalidatesTags: ["GetAds", "GetMyAds", "GetAdsById"],
    }),
    postUploadImgToAdv: builder.mutation({
      query: ({ advId, img }) => {
        const accessTokenObj = getAccessToken();

        const formData = new FormData();
        formData.append("file", img.file);

        return {
          url: `ads/${advId}/image`,
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessTokenObj.value}`,
          },
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ["GetAds", "GetMyAds", "GetAdsById"],
    }),
    deleteAdvImg: builder.mutation({
      query: ({ advId, imgSrc }) => {
        const accessTokenObj = getAccessToken();

        return {
          url: `ads/${advId}/image?file_url=${imgSrc}`,
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessTokenObj.value}`,
          },
        };
      },
      invalidatesTags: ["GetAds", "GetMyAds", "GetAdsById"],
    }),
    getCommentsByAdvId: builder.query({
      query: ({ advId }) => {
        return {
          url: `ads/${advId}/comments`,
          method: "GET",
          headers: { Accept: "application/json" },
        };
      },
      providesTags: ["GetCommentsByAdvId"],
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
  usePostCreateAdvMutation,
  useGetMyAdsQuery,
  useDeleteAdvByIdMutation,
  usePatchAdvByIdMutation,
  usePostUploadImgToAdvMutation,
  useDeleteAdvImgMutation,
  useGetCommentsByAdvIdQuery,
} = skyvitoApi;
