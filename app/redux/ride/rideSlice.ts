import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FixMeLater } from "interfaces/migration";
import { UserModel } from "models/User.model";
import { AppRootState } from "../store";

const initialState: FixMeLater = {
	departure: null,
	destination: null,
};

const rideSlice = createSlice({
	name: "ride",
	initialState,
	reducers: {
		setDeparture(state, action: PayloadAction<FixMeLater>) {
			state.departure = action.payload;
		},

		setDestination(state, action: PayloadAction<FixMeLater>) {
			state.destination = action.payload;
		},
	},
});

export const rideSelector = (state: AppRootState) => state.ride;

export const { setDestination, setDeparture } = rideSlice.actions;
export default rideSlice.reducer;
