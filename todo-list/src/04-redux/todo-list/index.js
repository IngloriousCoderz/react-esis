// import { createStore } from "redux";

import { addTask } from "./action-creators";
import rootReducer from "./todo-list";

const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTask("Learn Redux"));

export default store;

function createStore(reducer) {
  const handlers = [];
  let state;

  return {
    subscribe(handler) {
      handlers.push(handler);
    },

    dispatch(action) {
      state = reducer(state, action);
      handlers.forEach((handler) => handler());
    },

    getState() {
      return state;
    },
  };
}
