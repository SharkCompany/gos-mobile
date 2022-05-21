import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rideApi } from "app/api/ride.api";
import { FixMeLater } from "interfaces/migration";
import { RideModel } from "models/Ride.model";
import { UserModel } from "models/User.model";
import { AppRootState } from "../store";

const initialState: FixMeLater = {
	departure: null,
	destination: null,
};

export const createRide = createAsyncThunk(
	"ride/create-ride",
	async (data: Partial<RideModel>, thunkAPI) => {
		try {
			const response = await rideApi.createRide(data);
			console.log(response);
			return response;
		} catch (error) {
			console.log("error ne", error);
		}
	}
);

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
