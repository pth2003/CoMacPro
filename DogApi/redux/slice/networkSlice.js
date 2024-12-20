import { createSlice } from "@reduxjs/toolkit";

const networkSlice = createSlice({
  name: "network",
  initialState: {
    isConnected: true,
  },
  reducers: {
    setNetworkStatus: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

const { reducer, actions } = networkSlice;

export const { setNetworkStatus } = actions;
export default reducer;
