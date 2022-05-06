import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FixMeLater } from "interfaces/migration";
import { UserModel } from "models/User.model";
import { AppRootState } from "../store";

const initialState: FixMeLater = {
	listPlaces: [],
};

const placeSlice = createSlice({
	name: "places",
	initialState,
	reducers: {
		savePlaces(state, action: PayloadAction<FixMeLater>) {
			state.listPlaces = action.payload;
		},
	},
});

export const rideSelector = (state: AppRootState) => state.ride;

export const { savePlaces } = placeSlice.actions;
export default placeSlice.reducer;
