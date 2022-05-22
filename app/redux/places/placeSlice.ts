import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FixMeLater } from "interfaces/migration";
import { PlaceModel } from "models/Place.model";
import { UserModel } from "models/User.model";
import { AppRootState } from "../store";

export interface PlaceState  {
	listPlaces : PlaceModel[]
}

const initialState: PlaceState = {
	listPlaces: [],
};

const placeSlice = createSlice({
	name: "places",
	initialState,
	reducers: {
		savePlaces(state, action: PayloadAction<FixMeLater>) {
			state.listPlaces = action.payload;
		},
		setPlaces(state,action:PayloadAction<PlaceModel[]>) {
			state.listPlaces = action.payload;
		}	
		
	},
});

export const placesSelector = (state: AppRootState) => state.place.listPlaces;

export const { savePlaces } = placeSlice.actions;
export default placeSlice.reducer;
