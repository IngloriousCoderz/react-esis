import counter, {
  increment,
  decrement,
  reset,
  selectValue,
} from "./06-complex-reducer";

describe("Counter App - Reducer", () => {
  it("should initialize the value", () => {
    const stateBefore = undefined;
    const stateAfter = { value: 0 };
    const action = { type: "do-something" };

    const state = counter(stateBefore, action);

    expect(state).toEqual(stateAfter); // state === stateAfter
  });

  it("should increment the value", () => {
    // given
    const stateBefore = { value: 0 };
    const stateAfter = { value: 1 };
    const action = increment();

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toEqual(stateAfter);
  });

  it("should decrement the value", () => {
    const stateBefore = { value: 0 };
    const stateAfter = { value: -1 };
    const action = decrement();

    const state = counter(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it("should reset the value", () => {
    const stateBefore = { value: 5 };
    const stateAfter = { value: 0 };
    const action = reset();

    const state = counter(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it("should ignore any other action", () => {
    const stateBefore = { value: 0 };
    const stateAfter = { value: 0 };
    const action = { type: "do-something" };

    const state = counter(stateBefore, action);

    expect(state).toEqual(stateAfter);
    expect(state).toBe(stateBefore);
  });

  it("should select the counter's value", () => {
    const state = { value: 4 };
    const value = 4;

    expect(selectValue(state)).toBe(value);
  });
});
