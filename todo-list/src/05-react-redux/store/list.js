import { ADD_TASK, TOGGLE_COMPLETED, REMOVE_TASK } from "./action-types";

export default function list(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      const maxId = state.length ? state[state.length - 1].id : 0;
      const task = { id: maxId + 1, text: action.payload };
      return [...state, task];

    case TOGGLE_COMPLETED:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}
