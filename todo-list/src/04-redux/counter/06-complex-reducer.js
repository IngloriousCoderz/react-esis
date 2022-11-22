const INITIAL_VALUE = { value: 0 };

// action types
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const RESET = "reset";

// action creators
export const increment = (amount = 1) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount = 1) => ({ type: DECREMENT, payload: amount });
export const reset = () => ({ type: RESET });

// reducer
export default function counter(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + action.payload };

    case DECREMENT:
      return { value: state.value - action.payload };

    case RESET:
      return INITIAL_VALUE;

    default:
      return state;
  }
}

// selectors
export const selectValue = (state) => state.value;

// let state = undefined;
// state = counter(state, { type: "increment", payload: 2 });
// state = counter(state, { type: "decrement", payload: 3 });
// state = counter(state, { type: "reset" });

// const actions = [
//   { type: "increment", payload: 2 },
//   { type: "decrement", payload: 3 },
//   { type: "reset" },
// ];
// const state = actions.reduce(counter);
