import { SET_TEXT } from "./action-types";

export default function text(state = "", action) {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;

    default:
      return state;
  }
}
