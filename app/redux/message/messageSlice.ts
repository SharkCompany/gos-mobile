import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
			console.log(error);
			// throw error;
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
	socketInstance: null,
};

const messageSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		setSocketInstance(state, action: FixMeLater) {
			state.socketInstance = action.payload;
		},
		// setPlaces(state,action:PayloadAction<PlaceModel[]>) {
		// 	state.listPlaces = action.payload;
		// }
	},
});

export const socketInstanceSelector = (state: AppRootState) => state.message;

export const { setSocketInstance } = messageSlice.actions;
export default messageSlice.reducer;
