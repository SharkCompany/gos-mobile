import { RideModel } from "models/Ride.model";
import axiosClient from "./axiosClient";

const url = "drive";

export const rideApi = {
	createRide: (ride: Partial<RideModel>) => {
		const sub_url = "/create";
		return axiosClient.post(url + sub_url, ride);
	},
};
