import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "models/User.model";
import { AppRootState } from "redux/store";

export interface UserState {
    user: UserModel | null;
}

const initialState: UserState = {
    user: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserModel>) => {
            state.user = action.payload;
        }


    },
});

// Actions
export const userActions = userSlice.actions;

// Selectors
export const selectUser = (state: AppRootState) => state.rootReducer.user;

// Reducer
const userReducer = userSlice.reducer;
export default userReducer;
