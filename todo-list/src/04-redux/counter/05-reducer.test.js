import counter, {
  increment,
  decrement,
  reset,
  selectValue,
} from "./05-reducer";

describe("Counter App - Reducer", () => {
  it("should initialize the value", () => {
    const stateBefore = undefined;
    const stateAfter = 0;
    const action = { type: "do-something" };

    const state = counter(stateBefore, action);

    expect(state).toBe(stateAfter);
  });

  it("should increment the value", () => {
    // given
    const stateBefore = 0;
    const stateAfter = 1;
    const action = increment();

    // when
    const state = counter(stateBefore, action);

    // then
    expect(state).toBe(stateAfter);
  });

  it("should decrement the value", () => {
    const stateBefore = 0;
    const stateAfter = -1;
    const action = decrement();

    const state = counter(stateBefore, action);

    expect(state).toBe(stateAfter);
  });

  it("should reset the value", () => {
    const stateBefore = 5;
    const stateAfter = 0;
    const action = reset();

    const state = counter(stateBefore, action);

    expect(state).toBe(stateAfter);
  });

  it("should ignore any other action", () => {
    const stateBefore = 0;
    const stateAfter = 0;
    const action = { type: "do-something" };

    const state = counter(stateBefore, action);

    expect(state).toBe(stateAfter);
  });

  it("should select the counter's value", () => {
    const state = 4;
    const value = 4;

    expect(selectValue(state)).toBe(value);
  });
});
