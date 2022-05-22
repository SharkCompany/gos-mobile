import axiosClient from "./axiosClient";

export const placeApi = {
  getPlaces: () => {
    return axiosClient.get("/places");
  },
};
