import { stringify } from "@firebase/util";

export interface UserModel {
  id: string;
  picture: string;
  name: string;
  email: string;
  phone_number: string;
  avatar: string;
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
