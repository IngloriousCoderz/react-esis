import { SET_TEXT, ADD_TASK } from "./action-types";

export default function text(state = "", action) {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;

    case ADD_TASK:
      return "";

    default:
      return state;
  }
}
