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
    return axiosClient.get("/drive", { params: query });
  },
  getRideById: (id: number) => {
    return axiosClient.get("/drive/" + id);
  },
  connect: (data: any) => {
    const sub_url = "";
    return axiosClient.post(url, data);
  },
};
