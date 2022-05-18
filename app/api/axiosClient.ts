import { API_ENDPOINT, LOCALSTORAGE_USER_KEY } from "app/constants";
import { getLocalData, getUserFromLocal } from "app/utils/AppAsyncStorage";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthUserModel } from "models/User.model";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    // Do something before request is sent
    let token;
    const adminUser = await getUserFromLocal();
    if (adminUser) {
      const user: AuthUserModel = adminUser;
      token = user.tokens.accessToken;
    }
    config.headers.Authorization = `Bearer ${token}`;
    console.log("axios config", config?.headers?.Authorization);
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
