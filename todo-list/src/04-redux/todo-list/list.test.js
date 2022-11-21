import { addTask, toggleCompleted, removeTask } from "./action-creators";
import list from "./list";

describe("Tasks List", () => {
  it("should initialize with an empty array", () => {
    // given
    const stateBefore = undefined;
    const stateAfter = [];
    const action = { type: "do-something" };

    // when
    const state = list(stateBefore, action);

    // then
    expect(state).toEqual(stateAfter);
  });

  it("should add a new task", () => {
    // given
    const stateBefore = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
    ];
    const stateAfter = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ];
    const action = addTask("Forget everything");

    // when
    const state = list(stateBefore, action);

    // then
    expect(state).toEqual(stateAfter);
  });

  it("should toggle the 'completed' property on a task", () => {
    // given
    const stateBefore = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ];
    const stateAfter = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: true },
      { id: 3, text: "Forget everything" },
    ];
    const action = toggleCompleted(2);

    // when
    const state = list(stateBefore, action);

    // then
    expect(state).toEqual(stateAfter);
  });

  it("should remove a task", () => {
    // given
    const stateBefore = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ];
    const stateAfter = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 3, text: "Forget everything" },
    ];
    const action = removeTask(2);

    // when
    const state = list(stateBefore, action);

    // then
    expect(state).toEqual(stateAfter);
  });

  it("should ignore an unrecognized action", () => {
    // given
    const stateBefore = [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ];
    const action = { type: "do-something" };

    // when
    const state = list(stateBefore, action);

    // then
    expect(state).toBe(stateBefore);
  });
});
