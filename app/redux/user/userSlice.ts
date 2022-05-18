import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUserModel, UserModel } from "models/User.model";
import { AppRootState } from "../store";

interface UserState {
  user: UserModel | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: AppRootState) => state.user.user;

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
