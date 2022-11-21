import { SET_TASKS } from "./action-types";

export default function list(state = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;

    default:
      return state;
  }
}
