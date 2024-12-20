import { configureStore, combineReducers } from "@reduxjs/toolkit";
import breedReducer from "./slice/breedSlice";
import networkReducer from "./slice/networkSlice";
const rootReducer = combineReducers({
  breed: breedReducer,
  network: networkReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
