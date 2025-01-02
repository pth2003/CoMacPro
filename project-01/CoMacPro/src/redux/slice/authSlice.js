import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginAuth = createAsyncThunk(
  "auth/login",
  async (userInfo, ThunkApi) => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;
