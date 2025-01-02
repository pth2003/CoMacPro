import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const breedsFetch = createAsyncThunk(
  "breed/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/breeds/");
      if (!response.ok) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          message: response.statusText,
        });
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: "INTERNET_DISCONNECTED",
        message: error.message,
      });
    }
  }
);
const breedSlice = createSlice({
  name: "breed",
  initialState: {
    data: localStorage.getItem("data") || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(breedsFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(breedsFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("data", JSON.stringify(action.payload));
      })
      .addCase(breedsFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.status;
      });
  },
});

export default breedSlice.reducer;
