import { async } from "@firebase/util";
import axiosClient from "./axiosClient";
import { UserModel } from "models/User.model";

export const userApi = {
  updateUser: async (user:Partial<UserModel>) => {
    return await axiosClient.post("/update", user);
  },
};
