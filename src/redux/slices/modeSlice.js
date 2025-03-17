import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  initialState: {
    value: sessionStorage.getItem("mode")
      ? sessionStorage.getItem("mode")
      : "Admin",
  },
  name: "modeSlice",
  reducers: {
    changeMode: (state, action) => {
      state.value = action.payload;
      sessionStorage.setItem("mode", action.payload);
    },
  },
});

export const { changeMode } = modeSlice.actions;
