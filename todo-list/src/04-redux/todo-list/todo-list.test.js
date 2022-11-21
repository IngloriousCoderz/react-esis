import {
  setText,
  addTask,
  toggleCompleted,
  removeTask,
} from "./action-creators";
import todoList from "./todo-list";

describe("Todo List App", () => {
  it("should initialize the state", () => {
    const stateBefore = undefined;
    const stateAfter = {
      text: "",
      list: [],
    };
    const action = { type: "do-something" };

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it("should set the form text", () => {
    const stateBefore = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const stateAfter = {
      text: "some other text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = setText("some other text");

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
    expect(state.list).toBe(stateBefore.list);
  });

  it("should add a new task", () => {
    const stateBefore = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
      ],
    };
    const stateAfter = {
      text: "",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = addTask("Forget everything");

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it("should toggle the 'completed' property on a task", () => {
    const stateBefore = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const stateAfter = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: true },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = toggleCompleted(2);

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });

  it("should remove a task", () => {
    const stateBefore = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const stateAfter = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 3, text: "Forget everything" },
      ],
    };
    const action = removeTask(2);

    const state = todoList(stateBefore, action);

    expect(state).toEqual(stateAfter);
  });
});
