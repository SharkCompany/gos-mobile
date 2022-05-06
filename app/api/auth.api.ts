import { API_ENDPOINT } from "app/constants";
import axios from "axios";

export const authApi = {
  login: async (token: string) => {
    const instance = axios.create({
      baseURL: API_ENDPOINT,
      timeout: 1000,
      headers: { Authorization: "Bearer " + token },
    });

    instance.get("/login").then((response) => {
      return response.data;
    });
  },
};
