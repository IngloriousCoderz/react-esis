import text, { setText } from "./text.slice";

describe("Form Text", () => {
  it("should initialize with an empty text", () => {
    const stateBefore = undefined;
    const stateAfter = "";
    const action = { type: "do-something" };

    const state = text(stateBefore, action);

    expect(state).toBe(stateAfter);
  });

  it("should set some text", () => {
    const stateBefore = "some text";
    const stateAfter = "some other text";
    const action = setText("some other text");

    const state = text(stateBefore, action);

    expect(state).toBe(stateAfter);
  });

  it("should ignore an unrecognized action", () => {
    const stateBefore = "some text";
    const action = { type: "do-something" };

    const state = text(stateBefore, action);

    expect(state).toBe(stateBefore);
  });
});
