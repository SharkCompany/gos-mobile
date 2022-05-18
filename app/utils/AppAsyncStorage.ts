import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCALSTORAGE_USER_KEY } from "app/constants";
import { AuthUserModel } from "models/User.model";

export const getLocalData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    console.log("get data error", e);
  }
};

export const storeLocalData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("save data error", e);
  }
};
export const storeUserToLocal = async (user: AuthUserModel) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(LOCALSTORAGE_USER_KEY, jsonValue);
  } catch (e) {
    console.log("storeUserToLocal Error", e);
  }
};

export async function getUserFromLocal(): Promise<AuthUserModel | null> {
  try {
    const value = await AsyncStorage.getItem(LOCALSTORAGE_USER_KEY);
    if (value) {
      return JSON.parse(value);
    } else return null;
  } catch (e) {
    console.log("getUserFromLocal Error", e);
    return null;
  }
}
