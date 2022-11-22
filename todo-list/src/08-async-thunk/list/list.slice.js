import { createSlice } from "@reduxjs/toolkit";

import { fetchTasks } from "../store/thunks";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  extraReducers: {
    [fetchTasks.fulfilled](state, action) {
      return action.payload;
    },
  },
});

export default listSlice.reducer;

export const selectList = (state) => state.list;
