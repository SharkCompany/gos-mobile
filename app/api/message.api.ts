import { FixMeLater } from "interfaces/migration";
import { RideModel } from "models/Ride.model";
import axiosClient from "./axiosClient";

const url = "conversation";

export const messageApi = {
	getConversations: () => {
		return axiosClient.get(url);
	},

	getDetailConversation: (id: any) => {
		return axiosClient.get(url + `/${id}`);
	},
};
