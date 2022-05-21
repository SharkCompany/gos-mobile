import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import placeSlice from "./places/placeSlice";
import rideSlice from "./ride/rideSlice";
import userslice from "./user/userSlice";
import settingSlice from "./setting/settingSlice";

const store = configureStore({
  reducer: {
    user: userslice,
    ride: rideSlice,
    place: placeSlice,
    setting: settingSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export default store;
