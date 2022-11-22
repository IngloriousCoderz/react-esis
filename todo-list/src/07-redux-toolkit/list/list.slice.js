import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "../store/action-creators";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    toggleCompleted(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    },

    removeTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: {
    [addTask](state, action) {
      const maxId = state.length ? state[state.length - 1].id : 0;
      const task = { id: maxId + 1, text: action.payload };
      state.push(task);
    },
  },
});

export const { toggleCompleted, removeTask } = listSlice.actions;

export default listSlice.reducer;

export const selectList = (state) => state.list;

// export default createReducer([], {
//   [addTask](state, action) {
//     const maxId = state.length ? state[state.length - 1].id : 0;
//     const task = { id: maxId + 1, text: action.payload };
//     state.push(task);
//   },

//   [toggleCompleted](state, action) {
//     const index = state.findIndex((task) => task.id === action.payload);
//     state[index].completed = !state[index].completed;
//   },

//   [removeTask](state, action) {
//     return state.filter((task) => task.id !== action.payload);
//   },
// });
