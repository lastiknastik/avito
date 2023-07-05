const size = {
  mobile: "590px",
  tablet: "890px",
  laptop: "1158px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

export const SKYVITO_API_BASE_URL = "http://localhost:8090/";

export const ACCESS_TOKEN_TIMEOUT = 5; //in minutes

export const UNAUTH_USER_REDIRECT_PATH = "/signin";
