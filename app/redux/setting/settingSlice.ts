import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppRootState } from "../store";

interface SettingState {
  loading: boolean;
}

const initialState: SettingState = {
  loading: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSetting(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const selectLoading = (state: AppRootState) => state.setting.loading;

export const { setSetting } = settingSlice.actions;
export default settingSlice.reducer;
