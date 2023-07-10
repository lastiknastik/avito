import {
  ACCESS_TOKEN_TIMEOUT,
  REFRESH_TOKEN_TIMEOUT,
  SKYVITO_API_BASE_URL,
} from "../constants";

//persists access token in local storage
export const setAccessToken = (accessToken) => {
  localStorage.setItem(
    "access_token",
    JSON.stringify({
      value: accessToken,
      expirationDate: new Date(Date.now() + ACCESS_TOKEN_TIMEOUT * 1000),
    })
  );
};

//flag to indicate call availability
let throttleGetAccessToken = false;

//returns always fresh access token, otherwise returns null
export const getAccessToken = () => {
  const accessTokenObj = getTokenObj("access_token");
  if (accessTokenObj && accessTokenObj.value && accessTokenObj.expirationDate) {
    if (new Date(accessTokenObj.expirationDate) < Date.now()) {
      //access token expired -> refresh
      if (throttleGetAccessToken) return; //throttle new requests if the old one not completed
      const refreshTokenObj = getTokenObj("refresh_token");

      throttleGetAccessToken = true;
      //throttling call for 2s
      setTimeout(() => {
        throttleGetAccessToken = false;
      }, 2000);

      //synchronious request. because user have to wait to get new tokens
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", `${SKYVITO_API_BASE_URL}auth/login`, false);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(
        JSON.stringify({
          access_token: accessTokenObj.value,
          refresh_token: refreshTokenObj.value,
        })
      );

      if (xhr.status === 201) {
        const tokens = JSON.parse(xhr.responseText || null);
        setAccessToken(tokens.access_token); //set access token
        setRefreshToken(tokens.refresh_token); //set refresh token

        return getTokenObj("access_token");
      } else {
        //not expected response -> return null
        console.error("PUT /auth/login: unexpected response", xhr);
        throttleGetAccessToken = false;
        return null;
      }
    } else {
      //fresh tokens -> return tokens
      return accessTokenObj;
    }
  } else {
    //tokens not valid -> return null
    return null;
  }
};

//returns authenticated flag. true if refresh_token !expired && access_token exists
export const useIsAuthenticated = () => {
  //refresh_token not expired && access_token not expired
  const currentDateTime = Date.now();

  const refreshTokenObj = getTokenObj("refresh_token");
  if (
    refreshTokenObj &&
    refreshTokenObj.expirationDate &&
    new Date(refreshTokenObj.expirationDate) < currentDateTime
  )
    return false;

  const accessTokenObj = getAccessToken();
  return accessTokenObj && accessTokenObj.value;
};

//private function to return token in proper format
const getTokenObj = (tokenName) => {
  return JSON.parse(localStorage.getItem(tokenName) || null);
};

//persists refresh token in local storage
export const setRefreshToken = (token) => {
  localStorage.setItem(
    "refresh_token",
    JSON.stringify({
      value: token,
      expirationDate: new Date(Date.now() + REFRESH_TOKEN_TIMEOUT * 1000),
    })
  );
};

export const useGetRefreshToken = () => {
  return getTokenObj("refresh_token");
};

export const logOut = () => {
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("access_token");
  window.location.replace(`/`);
};
