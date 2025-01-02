import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
const rootReducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
