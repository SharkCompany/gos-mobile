import { stringify } from "@firebase/util";

export interface UserModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  picture: string;
  licensePlates: string;
  bio: string;
}

export interface AuthUserModel {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  info: UserModel;
}
