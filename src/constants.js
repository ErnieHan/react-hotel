let host_url;

if (process.env.NODE_ENV === "development") {
  host_url = process.env.REACT_APP_HOST_NAME_DEV;
} else if (process.env.NODE_ENV === "production") {
  host_url = process.env.REACT_APP_HOST_NAME_PROD;
}

export const HOST_URL = host_url;
