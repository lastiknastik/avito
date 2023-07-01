import { ACCESS_TOKEN_TIMEOUT, SKYVITO_API_BASE_URL } from "../constants";

//persists access token in local storage
export const setAccessToken = (accessToken) => {
  localStorage.setItem(
    "access_token",
    JSON.stringify({
      value: accessToken,
      timestamp: Date.now(),
    })
  );
};

//returns always fresh access token, otherwise returns null
export const getAccessToken = () => {
  //parsing empty string will throw an error, parsing null - will not
  const accessTokenObj = getTokenObj("access_token");

  console.log("getAccessToken access_token", accessTokenObj);

  if (accessTokenObj && accessTokenObj.value) {
    if (
      (Date.now() - accessTokenObj.timestamp) / 1000 / 60 >
      ACCESS_TOKEN_TIMEOUT
    ) {
      console.log("access_token exists but expired");

      const refreshtokenObj = getTokenObj("refresh_token");

      //refresh tokens via api call. TODO: use RTK query
      fetch(`${SKYVITO_API_BASE_URL}auth/login`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: accessTokenObj.value,
          refresh_token: refreshtokenObj.value,
        }),
      })
        .then((payload) => payload.json())
        .then((data) => {
          console.log("refresh tokens fetch processed, new values: ", data);
          setAccessToken(data.access_token); //set access token
          setRefreshToken(data.refresh_token); //set refresh token
        })
        .catch((err) => console.error("PUT auth/login", err));
    } else {
      console.log("tokens are fresh", accessTokenObj);
      return accessTokenObj;
    }
  } else {
    console.log("no accessTokenObj", accessTokenObj);
    return null;
  }
};

/*
//custom hook returns always fresh access token, otherwise returns null
export const useGetAccessToken = () => {
  const [refreshTokens, refreshTokensResponse] = usePutRefreshTokensMutation();
  //parsing empty string will throw an error, parsing null - will not
  const accessTokenObj = getTokenObj("access_token");

  if (accessTokenObj) {
    if (
      (Date.now() - accessTokenObj.timestamp) / 1000 / 60 >
      ACCESS_TOKEN_TIMEOUT
    ) {
      refreshTokens()
        .unwrap()
        .then((payload) => {
          setAccessToken(payload.access_token); //set access token
          setRefreshToken(payload.refresh_token); //set refresh token

          return getTokenObj("access_token");
        })
        .catch((err) => console.error("useGetAccessToken", err));
    } else {
      return accessTokenObj;
    }
  } else {
    return null;
  }
};
*/

//returns authenticated flag
export const useIsAuthenticated = () => {
  const accessTokenObj = getAccessToken();
  console.log("useIsAuthenticated accessTokenObj", accessTokenObj);
  return accessTokenObj ? true : false;
};

//private function to return token in proper format
const getTokenObj = (tokenName) => {
  return JSON.parse(localStorage.getItem(tokenName) || null);
};

//persists refresh token in local storage
export const setRefreshToken = (refreshToken) => {
  localStorage.setItem(
    "refresh_token",
    JSON.stringify({
      value: refreshToken,
      timestamp: Date.now(),
    })
  );
};

export const useGetRefreshToken = () => {
  return getTokenObj("refresh_token");
};
