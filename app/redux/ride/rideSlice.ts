import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rideApi } from "app/api/ride.api";
import { FixMeLater } from "interfaces/migration";
import { GetRideQuerySchema, RideModel } from "models/Ride.model";
import { UserModel } from "models/User.model";
import { AppRootState } from "../store";

export interface RideState {
  departure: any;
  destination: any;
  rides: RideModel[];
}

const initialState: RideState = {
  departure: null,
  destination: null,
  rides: [],
};

export const createRide = createAsyncThunk(
  "ride/create-ride",
  async (data: Partial<RideModel>, thunkAPI) => {
    try {
      const response = await rideApi.createRide(data);

      return response;
    } catch (error) {
      throw error;
    }
  }
);
export const getRides = createAsyncThunk(
  "ride/get-rides",
  async (query: Partial<GetRideQuerySchema>, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      dispatch(setRides([]));
      const response = await rideApi.getRides(query);
      dispatch(setRides(response));

      return response;
    } catch (error) {}
  }
);
export const getMyRides = createAsyncThunk(
  "ride/get-rides",
  async (query: Partial<GetRideQuerySchema>, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await rideApi.getRides(query);
      dispatch(setRides(response));

      return response;
    } catch (error) {}
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
    setRides(state, action: PayloadAction<RideModel[]>) {
      state.rides = action.payload;
    },
  },
});

export const rideSelector = (state: AppRootState) => state.ride;
export const selectRides = (state: AppRootState) => state.ride.rides;

export const { setDestination, setDeparture, setRides } = rideSlice.actions;
export default rideSlice.reducer;
