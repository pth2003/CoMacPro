import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const breedsFetch = createAsyncThunk("breed/fetch", async () => {
  const res = await fetch("https://dogapi.dog/api/v2/breeds", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error("API request failed");
  }
  const obj = await res.json();
  return obj.data;
});
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
      })
      .addCase(breedsFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("data", JSON.stringify(action.payload));
      })
      .addCase(breedsFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default breedSlice.reducer;
