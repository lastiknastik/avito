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

export const getAccessToken = () => {
  //parsing empty string will throw an error, parsing null - will not
  return JSON.parse(localStorage.getItem("access_token") || null);
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

export const getRefreshToken = () => {
  //parsing empty string will throw an error, parsing null - will not
  return JSON.parse(localStorage.getItem("refresh_token") || null);
};
