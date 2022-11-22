import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "../store/thunks";

const textSlice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [addTask.pending](state, action) {
      return "";
    },
  },
});

export const { setText } = textSlice.actions;

export default textSlice.reducer;

export const selectText = (state) => state.text;
