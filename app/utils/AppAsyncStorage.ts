import AsyncStorage from "@react-native-async-storage/async-storage";

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
