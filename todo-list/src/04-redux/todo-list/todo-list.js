import {
  SET_TEXT,
  ADD_TASK,
  TOGGLE_COMPLETED,
  REMOVE_TASK,
} from "./action-types";
import { setText } from "./action-creators";
import text from "./text";
import list from "./list";

const INITIAL_STATE = {
  text: "",
  list: [],
};

// [key1, key2]
// [value1, value2]
// { text, list} -> [[key, value], [key, value]]

const combineReducers =
  (reducers) =>
  (state = {}, action) =>
    Object.entries(reducers).reduce((acc, [key, value]) => {
      acc[key] = value(state[key], action);
      return acc;
    }, state);

export default combineReducers({ text, list });

// export default function todoList(state = INITIAL_STATE, action) {
//   return {
//     text: text(state.text, action),
//     list: list(state.list, action),
//   };
// }

// export default function todoList(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case SET_TEXT:
//       return {
//         ...state,
//         text: text(state.text, action),
//       };

//     case ADD_TASK:
//       return {
//         ...state,
//         // text: '',
//         text: text(state.text, setText("")),
//         list: list(state.list, action),
//       };

//     case TOGGLE_COMPLETED:
//     case REMOVE_TASK:
//       return {
//         ...state,
//         list: list(state.list, action),
//       };

//     default:
//       return state;
//   }
// }
