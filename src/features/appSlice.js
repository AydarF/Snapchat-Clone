import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { incrementByAmount } = appSlice.actions;

export const selectapp = (state) => state.app.value;

export default appSlice.reducer;
