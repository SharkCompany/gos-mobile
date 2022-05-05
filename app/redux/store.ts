import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import placeSlice from "./place/placeSlice";
import rideSlice from "./ride/rideSlice";
import userslice from "./user/userSlice";

const store = configureStore({
	reducer: {
		user: userslice,
		ride: rideSlice,
		place: placeSlice,
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
