import axiosClient from "./axiosClient";

const sub_url = "/conversation";

export const messageApi = {
	getMessages: () => {
		// console.log(first)
		return axiosClient.get(sub_url);
	},
	getDetailConverstion: (id: string) => {
		return axiosClient.get(sub_url + `/${id}`);
	},
};
