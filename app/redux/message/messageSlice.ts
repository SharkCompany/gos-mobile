import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageApi } from "app/api/message.api";
import { FixMeLater } from "interfaces/migration";
import { AppRootState } from "../store";

export const getMessages = createAsyncThunk(
	"message/get-messages",
	async (data, thunkAPI) => {
		try {
			const response = await messageApi.getMessages();

			return response;
		} catch (error) {
			throw error;
		}
	}
);

export const getDetailConversation = createAsyncThunk(
	"message/get-detail-conversation",
	async (data: FixMeLater, thunkAPI) => {
		try {
			const response = await messageApi.getDetailConverstion(data);

			return response;
		} catch (error) {
			throw error;
		}
	}
);

const initialState: FixMeLater = {
	messages: [],
};

const messageSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		// savePlaces(state, action: PayloadAction<FixMeLater>) {
		// 	state.listPlaces = action.payload;
		// },
		// setPlaces(state,action:PayloadAction<PlaceModel[]>) {
		// 	state.listPlaces = action.payload;
		// }
	},
});

// export const placesSelector = (state: AppRootState) => state.place.listPlaces;

// export const { savePlaces } = messageSlice.actions;
export default messageSlice.reducer;
