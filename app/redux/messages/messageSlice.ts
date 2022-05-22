import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageApi } from "app/api/message.api";
import { FixMeLater } from "interfaces/migration";
import { UserModel } from "models/User.model";
import { AppRootState } from "../store";

const initialState: FixMeLater = {
	listPlaces: [],
};

export const getConversations = createAsyncThunk(
	"message/get-conversations",
	async (data, thunkAPI) => {
		try {
			const response = await messageApi.getConversations();
			return response;
		} catch (error) {
			console.log("error ne", error);
		}
	}
);

export const getDetailConversation = createAsyncThunk(
	"message/get-detail-conversation",
	async (id: any, thunkAPI) => {
		try {
			const response = await messageApi.getDetailConversation(id);
			return response;
		} catch (error) {
			console.log("error ne", error);
		}
	}
);

const messageSlice = createSlice({
	name: "places",
	initialState,
	reducers: {
		// savePlaces(state, action: PayloadAction<FixMeLater>) {
		// 	state.listPlaces = action.payload;
		// },
	},
});

// export const { savePlaces } = messageSlice.actions;
export default messageSlice.reducer;
