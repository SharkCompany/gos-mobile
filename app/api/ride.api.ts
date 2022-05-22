import { GetRideQuerySchema, RideModel } from "models/Ride.model";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "drive";

export const rideApi = {
  createRide: (ride: Partial<RideModel>) => {
    const sub_url = "/create";
    return axiosClient.post(url + sub_url, ride);
  },
  getRides: (query: Partial<GetRideQuerySchema>): Promise<RideModel[]> => {
    console.log("GetRidesAPI, query:", query);
    return axiosClient.get("/drive", { params: query });
  },
  getRideById: (id: number) => {
    return axiosClient.get("/drive/" + id);
  },
  connect: (id: number) => {
    return axiosClient.patch("/drive/match", { id });
  },
};
