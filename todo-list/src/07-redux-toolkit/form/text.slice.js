import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "../store/action-creators";

const textSlice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [addTask](state, action) {
      return "";
    },
  },
});

export const { setText } = textSlice.actions;

export default textSlice.reducer;

export const selectText = (state) => state.text;
// export default createReducer("", {
//   [setText](state, action) {
//     return action.payload;
//   },

//   [addTask](state, action) {
//     return "";
//   },
// });
