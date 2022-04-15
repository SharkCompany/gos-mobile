import { combineReducers } from "redux";

import userSlice from "redux/user/userSlice";
const rootReducer = combineReducers({
    user: userSlice,

});

export default rootReducer;