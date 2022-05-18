import { stringify } from "@firebase/util";

export interface UserModel {
  id: string;
  name: string;
  email: string;
  phone_number: string;
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
